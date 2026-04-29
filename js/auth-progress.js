/* Auth + progress integration for DBHub */
(function () {
    const topicCodeToId = new Map();
    const questionTextToId = new Map();
    const taskTitleToId = new Map();

    function normalize(text) {
        return String(text || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }

    function ensureAuthPanel() {
        const footer = document.querySelector('.sidebar-footer');
        if (!footer || document.getElementById('auth-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'auth-panel';
        panel.style.marginTop = '12px';
        panel.style.display = 'grid';
        panel.style.gap = '8px';
        panel.innerHTML = `
            <div id="auth-welcome" class="text-sm text-tertiary">Guest mode</div>
            <div id="auth-links" class="btn-row">
                <a class="btn btn-sm btn-outline" href="auth/signin.html">Sign In</a>
                <a class="btn btn-sm btn-primary" href="auth/signup.html">Sign Up</a>
            </div>
        `;
        footer.appendChild(panel);
    }

    function renderAuthPanel() {
        ensureAuthPanel();
        const welcome = document.getElementById('auth-welcome');
        const links = document.getElementById('auth-links');
        const student = window.PlatformAPI?.state?.me || null;
        if (!welcome || !links) return;

        if (student) {
            welcome.textContent = `Welcome, ${student.full_name}`;
            links.innerHTML = `
                <a class="btn btn-sm btn-outline" href="dashboard.html">Dashboard</a>
                <button id="logout-btn" class="btn btn-sm btn-primary" type="button">Logout</button>
            `;
            document.getElementById('logout-btn')?.addEventListener('click', async () => {
                try {
                    await window.PlatformAPI.signout();
                    window.location.href = 'auth/signin.html';
                } catch {
                    alert('Could not sign out. Please try again.');
                }
            });
        } else {
            welcome.textContent = 'Guest mode';
            links.innerHTML = `
                <a class="btn btn-sm btn-outline" href="auth/signin.html">Sign In</a>
                <a class="btn btn-sm btn-primary" href="auth/signup.html">Sign Up</a>
            `;
        }
    }

    function tryResolveQuestionId(questionText) {
        const q = normalize(questionText);
        const row = questionTextToId.get(q);
        return row ? row.question_id : null;
    }

    async function trackTopicByCode(topicCode) {
        const student = window.PlatformAPI?.state?.me;
        if (!student || !topicCodeToId.has(topicCode)) return;
        try {
            await window.PlatformAPI.markTopic(topicCodeToId.get(topicCode), true);
        } catch {
            /* silent */
        }
    }

    function patchNavigationTracking() {
        if (!window.App || typeof window.App.navigateTo !== 'function') return;
        const originalNavigate = window.App.navigateTo.bind(window.App);
        window.App.navigateTo = function (page) {
            originalNavigate(page);
            if (topicCodeToId.has(page)) {
                trackTopicByCode(page);
            }
        };
    }

    function patchTopicQuizTracking() {
        if (!window.App || typeof window.App.submitQuizAnswer !== 'function') return;
        const originalSubmit = window.App.submitQuizAnswer.bind(window.App);
        window.App.submitQuizAnswer = function (topicId) {
            try {
                const state = window.App.quizState?.[topicId];
                const questions = typeof window.getQuizQuestionsForTopic === 'function'
                    ? window.getQuizQuestionsForTopic(topicId)
                    : (window.QUIZ_DATA?.[topicId] || []);
                if (state && questions.length > 0) {
                    const idx = state.currentQuestion;
                    const q = questions[idx];
                    const selected = state.answers[idx];
                    const isCorrect = selected === q.correct;
                    const qId = tryResolveQuestionId(q.q || q.question || '');
                    if (qId && window.PlatformAPI?.state?.me) {
                        window.PlatformAPI.trackQuestion(qId, isCorrect).catch(() => {});
                    }
                }
            } catch {
                /* silent */
            }
            return originalSubmit(topicId);
        };
    }

    function patchGlobalQuizTracking() {
        if (typeof window.submitFullQuizAnswer !== 'function') return;
        const originalGlobal = window.submitFullQuizAnswer;
        window.submitFullQuizAnswer = function (...args) {
            try {
                if (window.quizState && Array.isArray(window.quizState.questions)) {
                    const idx = window.quizState.currentQuestion || 0;
                    const q = window.quizState.questions[idx];
                    const selected = window.selectedQuizOption;
                    if (q && selected !== null && selected !== undefined) {
                        const isCorrect = selected === q.correct;
                        const qId = tryResolveQuestionId(q.question || q.q || '');
                        if (qId && window.PlatformAPI?.state?.me) {
                            window.PlatformAPI.trackQuestion(qId, isCorrect).catch(() => {});
                        }
                    }
                }
            } catch {
                /* silent */
            }
            return originalGlobal.apply(this, args);
        };
    }

    function resolveTaskIdByQuery(query) {
        const q = normalize(query);
        if (q.includes('name, email, gpa') && taskTitleToId.has('Exercise 1: SELECT Basics')) return taskTitleToId.get('Exercise 1: SELECT Basics');
        if (q.includes('gpa >= 3.5') && taskTitleToId.has('Exercise 2: WHERE Clause')) return taskTitleToId.get('Exercise 2: WHERE Clause');
        if (q.includes('join enrollments') && taskTitleToId.has('Exercise 3: JOIN Tables')) return taskTitleToId.get('Exercise 3: JOIN Tables');
        if (q.includes('group by major') && taskTitleToId.has('Exercise 4: Aggregate Functions')) return taskTitleToId.get('Exercise 4: Aggregate Functions');
        if (q.includes('is null') && taskTitleToId.has('Exercise 5: Subquery')) return taskTitleToId.get('Exercise 5: Subquery');
        return null;
    }

    function patchTaskTracking() {
        if (typeof window.loadExercise === 'function') {
            const originalLoadExercise = window.loadExercise;
            window.loadExercise = function (query) {
                const taskId = resolveTaskIdByQuery(query);
                if (taskId && window.PlatformAPI?.state?.me) {
                    window.PlatformAPI.trackTask(taskId, 'in_progress', null).catch(() => {});
                }
                return originalLoadExercise(query);
            };
        }

        if (typeof window.runQuery === 'function') {
            const originalRunQuery = window.runQuery;
            window.runQuery = function () {
                const editor = document.getElementById('sql-editor');
                const query = editor?.value || '';
                const taskId = resolveTaskIdByQuery(query);
                const result = originalRunQuery();
                if (taskId && window.PlatformAPI?.state?.me) {
                    window.PlatformAPI.trackTask(taskId, 'completed', 100).catch(() => {});
                }
                return result;
            };
        }
    }

    async function init() {
        if (!window.PlatformAPI) return;
        try {
            await window.PlatformAPI.init();
        } catch {
            /* no-op */
        }

        try {
            const catalog = await window.PlatformAPI.loadCatalog();
            (catalog.topics || []).forEach((t) => topicCodeToId.set(t.topic_code, t.topic_id));
            (catalog.tasks || []).forEach((t) => taskTitleToId.set(t.task_title, t.task_id));
        } catch {
            /* no-op */
        }

        try {
            const qMap = await window.PlatformAPI.loadQuestionsMap();
            Object.entries(qMap.questions_map || {}).forEach(([k, v]) => questionTextToId.set(k, v));
        } catch {
            /* no-op */
        }

        renderAuthPanel();
        patchNavigationTracking();
        patchTopicQuizTracking();
        patchGlobalQuizTracking();
        patchTaskTracking();
    }

    document.addEventListener('DOMContentLoaded', init);
})();

