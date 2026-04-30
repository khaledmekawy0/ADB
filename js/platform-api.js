/* Platform API client: auth, progress, scoring
   Dual-mode: PHP backend when available, localStorage fallback for static hosting */
(function () {
    const state = {
        csrfToken: null,
        me: null,
        backendAvailable: null,
    };

    function apiBase() {
        const scripts = document.querySelectorAll('script[src]');
        for (const s of scripts) {
            const match = s.src.match(/^(.+?)\/?js\/platform-api\.js/);
            if (match) return match[1].replace(/\/+$/, '');
        }
        return '';
    }

    const BASE = apiBase();

    async function request(url, options = {}) {
        const opts = {
            method: options.method || 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
        };
        if (options.body !== undefined) {
            opts.body = JSON.stringify(options.body);
        }
        if (state.csrfToken && opts.method !== 'GET') {
            opts.headers['X-CSRF-Token'] = state.csrfToken;
        }
        const fullUrl = url.startsWith('/') ? BASE + url : url;
        const res = await fetch(fullUrl, opts);
        const text = await res.text();
        let data;
        try {
            data = text ? JSON.parse(text) : {};
        } catch {
            throw new Error('Server returned non-JSON response.');
        }
        if (data && data.csrf_token) {
            state.csrfToken = data.csrf_token;
        }
        if (!res.ok || data.ok === false) {
            throw new Error(data.message || 'Request failed.');
        }
        return data;
    }

    /* ---- localStorage fallback for static hosting (Vercel, Netlify, etc.) ---- */

    const LS_KEY = 'dbhub_local_';

    function lsGet(key) {
        try { return JSON.parse(localStorage.getItem(LS_KEY + key)); } catch { return null; }
    }
    function lsSet(key, val) {
        localStorage.setItem(LS_KEY + key, JSON.stringify(val));
    }
    function lsStudents() { return lsGet('students') || []; }
    function lsSession() { return lsGet('session'); }

    function lsFindStudent(email) {
        return lsStudents().find(s => s.email.toLowerCase() === email.toLowerCase());
    }

    async function lsSignup(payload) {
        const students = lsStudents();
        if (lsFindStudent(payload.email)) {
            throw new Error('This email is already registered.');
        }
        if (!payload.full_name || payload.full_name.length < 3) {
            throw new Error('Full name must be at least 3 characters.');
        }
        if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
            throw new Error('Please enter a valid email address.');
        }
        if (!payload.password || payload.password.length < 8) {
            throw new Error('Password must be at least 8 characters.');
        }
        const id = Date.now();
        const student = { id, full_name: payload.full_name, email: payload.email.toLowerCase() };
        students.push({ ...student, password: payload.password });
        lsSet('students', students);
        lsSet('session', { student_id: id, expires_at: Date.now() + 86400000 });
        state.me = student;
        return { ok: true, message: 'Account created successfully.', student };
    }

    async function lsSignin(payload) {
        const email = (payload.email || '').toLowerCase().trim();
        const record = lsFindStudent(email);
        if (!record || record.password !== payload.password) {
            throw new Error('Invalid email or password.');
        }
        const student = { id: record.id, full_name: record.full_name, email: record.email };
        const expiresMs = payload.remember_me ? 30 * 86400000 : 86400000;
        lsSet('session', { student_id: record.id, expires_at: Date.now() + expiresMs });
        state.me = student;
        return { ok: true, message: 'Signed in successfully.', student };
    }

    async function lsSignout() {
        localStorage.removeItem(LS_KEY + 'session');
        state.me = null;
        return { ok: true, message: 'Signed out successfully.' };
    }

    async function lsInit() {
        const session = lsSession();
        if (session && session.expires_at > Date.now()) {
            const students = lsStudents();
            const s = students.find(x => x.id === session.student_id);
            if (s) {
                state.me = { id: s.id, full_name: s.full_name, email: s.email };
                return state.me;
            }
        }
        if (session) localStorage.removeItem(LS_KEY + 'session');
        state.me = null;
        return null;
    }

    function lsMarkTopic(topicId, visited) {
        const visitedTopics = lsGet('topic_progress') || {};
        visitedTopics[topicId] = { visited, at: Date.now() };
        lsSet('topic_progress', visitedTopics);
        return Promise.resolve({ ok: true });
    }

    function lsTrackQuestion(questionId, isCorrect) {
        const attempts = lsGet('question_attempts') || {};
        attempts[questionId] = { is_correct: isCorrect, at: Date.now() };
        lsSet('question_attempts', attempts);
        return Promise.resolve({ ok: true });
    }

    function lsTrackTask(taskId, status, score) {
        const tasks = lsGet('task_submissions') || {};
        tasks[taskId] = { status, score, at: Date.now() };
        lsSet('task_submissions', tasks);
        return Promise.resolve({ ok: true });
    }

    function lsProgressSummary() {
        const topics = lsGet('topic_progress') || {};
        const questions = lsGet('question_attempts') || {};
        const tasks = lsGet('task_submissions') || {};
        const topicEntries = Object.values(topics);
        const questionEntries = Object.values(questions);
        const taskEntries = Object.values(tasks);
        const topicsCompleted = topicEntries.filter(t => t.visited).length;
        const questionsCorrect = questionEntries.filter(q => q.is_correct).length;
        const tasksCompleted = taskEntries.filter(t => t.status === 'completed').length;
        const totalTopics = 10;
        const totalQuestions = 31;
        const totalTasks = 5;
        const overall = Math.round(((topicsCompleted / totalTopics) * 40 + (questionsCorrect / totalQuestions) * 40 + (tasksCompleted / totalTasks) * 20));
        return Promise.resolve({
            ok: true,
            progress: {
                overall_percent: Math.min(overall, 100),
                topics: { completed: topicsCompleted, total: totalTopics },
                questions: { correct: questionsCorrect, total: totalQuestions },
                tasks: { completed: tasksCompleted, total: totalTasks },
            },
            resume_topic: null,
        });
    }

    function lsFinalizeScore() {
        const progress = lsGet('topic_progress') || {};
        const questions = lsGet('question_attempts') || {};
        const tasks = lsGet('task_submissions') || {};
        const topicsCompleted = Object.values(progress).filter(t => t.visited).length;
        const questionsCorrect = Object.values(questions).filter(q => q.is_correct).length;
        const tasksCompleted = Object.values(tasks).filter(t => t.status === 'completed').length;
        const totalScore = Math.round(((topicsCompleted / 10) * 40 + (questionsCorrect / 31) * 40 + (tasksCompleted / 5) * 20));
        const level = totalScore >= 90 ? 'Excellent' : totalScore >= 75 ? 'Very Good' : totalScore >= 60 ? 'Good' : totalScore >= 40 ? 'Fair' : 'Needs Improvement';
        const certId = 'CERT-' + Math.random().toString(36).substring(2, 10).toUpperCase();
        const score = {
            total_score: Math.min(totalScore, 100),
            level,
            completed_at: new Date().toISOString().split('T')[0],
            certificate_id: certId,
        };
        lsSet('final_score', score);
        return Promise.resolve({ ok: true, score });
    }

    function lsLatestScore() {
        const score = lsGet('final_score');
        return Promise.resolve({ ok: true, score: score || null });
    }

    function lsLoadCatalog() {
        return Promise.resolve({ ok: true, topics: [], tasks: [] });
    }

    function lsLoadQuestionsMap() {
        return Promise.resolve({ ok: true, questions_map: {} });
    }

    /* ---- Public API: auto-detects backend and falls back to localStorage ---- */

    const api = {
        state,
        async init() {
            try {
                const csrf = await request('/api/auth/csrf.php');
                state.csrfToken = csrf.csrf_token;
                state.backendAvailable = true;
                const me = await request('/api/auth/me.php');
                state.me = me.authenticated ? me.student : null;
                return state.me;
            } catch {
                state.backendAvailable = false;
                return lsInit();
            }
        },
        async signup(payload) {
            if (state.backendAvailable) {
                const res = await request('/api/auth/signup.php', { method: 'POST', body: payload });
                state.me = res.student;
                return res;
            }
            return lsSignup(payload);
        },
        async signin(payload) {
            if (state.backendAvailable) {
                const res = await request('/api/auth/signin.php', { method: 'POST', body: payload });
                state.me = res.student;
                return res;
            }
            return lsSignin(payload);
        },
        async signout() {
            if (state.backendAvailable) {
                const res = await request('/api/auth/signout.php', { method: 'POST', body: {} });
                state.me = null;
                return res;
            }
            return lsSignout();
        },
        async markTopic(topicId, visited = true) {
            if (state.backendAvailable) {
                return request('/api/progress/topic.php', { method: 'POST', body: { topic_id: topicId, visited } });
            }
            return lsMarkTopic(topicId, visited);
        },
        async trackQuestion(questionId, isCorrect) {
            if (state.backendAvailable) {
                return request('/api/progress/question.php', { method: 'POST', body: { question_id: questionId, is_correct: !!isCorrect } });
            }
            return lsTrackQuestion(questionId, isCorrect);
        },
        async trackTask(taskId, status, score = null) {
            if (state.backendAvailable) {
                return request('/api/progress/task.php', { method: 'POST', body: { task_id: taskId, status, score } });
            }
            return lsTrackTask(taskId, status, score);
        },
        async progressSummary() {
            if (state.backendAvailable) {
                return request('/api/progress/summary.php');
            }
            return lsProgressSummary();
        },
        async finalizeScore() {
            if (state.backendAvailable) {
                return request('/api/score/finalize.php', { method: 'POST', body: {} });
            }
            return lsFinalizeScore();
        },
        async latestScore() {
            if (state.backendAvailable) {
                return request('/api/score/latest.php');
            }
            return lsLatestScore();
        },
        async loadCatalog() {
            if (state.backendAvailable) {
                return request('/api/meta/catalog.php');
            }
            return lsLoadCatalog();
        },
        async loadQuestionsMap() {
            if (state.backendAvailable) {
                return request('/api/meta/questions.php');
            }
            return lsLoadQuestionsMap();
        },
    };

    window.PlatformAPI = api;
})();

