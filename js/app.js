/* ===================================================
   DBHub — MAIN APPLICATION
   Advanced Database Learning Platform
   =================================================== */

const App = {
    currentPage: 'landing',
    currentTheme: 'dark',
    quizState: {},
    
    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupMobileMenu();
        this.renderTopicPages();
        this.setupPracticeTabs();
        this.setupBuilderSteps();
        this.hideLoadingScreen();
        this.checkUrlHash();
    },

    // Project Builder Steps
    setupBuilderSteps() {
        // Step navigation
        document.querySelectorAll('.builder-step').forEach(step => {
            step.addEventListener('click', () => {
                const stepNum = step.dataset.step;
                this.showBuilderStep(stepNum);
            });
        });

        // Requirements checklist progress
        document.querySelectorAll('.req-check').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateReqProgress());
        });

        // Test checklist progress
        document.querySelectorAll('.test-check').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateTestProgress());
        });
    },

    showBuilderStep(stepNum) {
        // Update step buttons
        document.querySelectorAll('.builder-step').forEach(step => {
            step.classList.remove('active');
            if (step.dataset.step === stepNum) {
                step.classList.add('active');
            }
        });

        // Show corresponding content
        document.querySelectorAll('.builder-step-content').forEach(content => {
            content.style.display = 'none';
        });
        const targetContent = document.getElementById(`builder-step-${stepNum}`);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    },

    updateReqProgress() {
        const checkboxes = document.querySelectorAll('.req-check');
        const checked = document.querySelectorAll('.req-check:checked');
        const percent = Math.round((checked.length / checkboxes.length) * 100);
        
        const percentEl = document.getElementById('req-percent');
        const progressBar = document.getElementById('req-progress-bar');
        
        if (percentEl) percentEl.textContent = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    },

    updateTestProgress() {
        const checkboxes = document.querySelectorAll('.test-check');
        const checked = document.querySelectorAll('.test-check:checked');
        
        if (checked.length === checkboxes.length) {
            // All tests completed - could show a celebration
        }
    },

    // Theme Management
    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
        document.getElementById('theme-toggle-mobile')?.addEventListener('click', () => this.toggleTheme());
    },

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    // Loading Screen
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 1500);
    },

    // Navigation
    setupNavigation() {
        // Sidebar navigation
        document.querySelectorAll('.sidebar-nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                this.navigateTo(page);
            });
        });

        // Mobile menu
        const openBtn = document.getElementById('sidebar-toggle-open');
        const closeBtn = document.getElementById('sidebar-toggle-close');
        const sidebar = document.getElementById('sidebar');

        openBtn?.addEventListener('click', () => sidebar?.classList.add('open'));
        closeBtn?.addEventListener('click', () => sidebar?.classList.remove('open'));

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024 && 
                !sidebar?.contains(e.target) && 
                !openBtn?.contains(e.target) &&
                sidebar?.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });

        // Hash change listener
        window.addEventListener('hashchange', () => this.checkUrlHash());
    },

    setupMobileMenu() {
        // Mobile menu is handled in setupNavigation
    },

    checkUrlHash() {
        const hash = window.location.hash.slice(1) || 'landing';
        this.navigateTo(hash);
    },

    navigateTo(page) {
        this.currentPage = page;
        
        // Update sidebar active state
        document.querySelectorAll('.sidebar-nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

        // Show target page
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) {
            targetPage.classList.add('active');
        } else {
            // Check if it's a topic page
            const topicPage = document.getElementById(`page-topic-${page}`);
            if (topicPage) {
                topicPage.classList.add('active');
            }
        }

        // Close mobile sidebar
        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar')?.classList.remove('open');
        }

        // Scroll to top
        window.scrollTo(0, 0);

        // Update URL hash
        window.location.hash = page;
    },

    // Render Topic Pages
    renderTopicPages() {
        const container = document.getElementById('topic-pages');
        if (!container) return;

        let html = '';
        
        COURSE_CONTENT.forEach(topic => {
            html += this.renderTopicPage(topic);
        });

        container.innerHTML = html;
    },

    renderTopicPage(topic) {
        const quizQuestions = getQuizQuestionsForTopic(topic.id);
        
        return `
        <section id="page-topic-${topic.id}" class="page" data-page="${topic.id}">
            <div class="page-header">
                <div style="display: flex; align-items: center; gap: var(--space-md);">
                    <div class="topic-icon" style="width: 60px; height: 60px;">
                        <i class="${topic.icon}"></i>
                    </div>
                    <div>
                        <h1>${topic.title}</h1>
                        <p>${topic.description}</p>
                    </div>
                </div>
            </div>

            <!-- Video Section -->
            <div class="glass-card" style="margin-bottom: var(--space-xl);">
                <h3><i class="fas fa-video" style="color: var(--error);"></i> Video Tutorial</h3>
                <div class="video-container" id="video-container-${topic.id}">
                    ${this.renderVideoThumbnail(topic)}
                </div>
            </div>

            <!-- Arabic Explanation -->
            <div class="glass-card" style="margin-bottom: var(--space-xl); border-right: 4px solid var(--teal);">
                <h3><i class="fas fa-comment-dots" style="color: var(--teal);"></i> Explanation <span class="badge badge-ar">بالعربي</span></h3>
                <div class="explanation-box" dir="rtl">
                    ${topic.explanationAr || '<p>الشرح بالعربي قريباً...</p>'}
                </div>
            </div>

            <!-- English Explanation -->
            <div class="glass-card" style="margin-bottom: var(--space-xl);">
                <h3><i class="fas fa-book" style="color: var(--navy);"></i> English Explanation</h3>
                ${topic.explanation}
                
                ${topic.keyPoints ? `
                <h4 style="margin-top: var(--space-lg);"><i class="fas fa-key"></i> Key Points</h4>
                <ul class="key-points">
                    ${topic.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
                ` : ''}

                ${topic.whenToUse ? `
                <h4 style="margin-top: var(--space-lg);"><i class="fas fa-question-circle"></i> When to Use</h4>
                <ul class="key-points">
                    ${topic.whenToUse.map(use => `<li>${use}</li>`).join('')}
                </ul>
                ` : ''}

                ${topic.benefits ? `
                <h4 style="margin-top: var(--space-lg);"><i class="fas fa-star"></i> Benefits</h4>
                <ul class="key-points">
                    ${topic.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                ` : ''}
            </div>

            <!-- Code Example -->
            <div class="glass-card" style="margin-bottom: var(--space-xl);">
                <h3><i class="fas fa-code" style="color: var(--amber);"></i> Code Example</h3>
                <div class="code-block">
                    <div class="code-header">
                        <span>SQL</span>
                        <button onclick="copyCode('code-${topic.id}')" class="tooltip" data-tooltip="Copy code">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <pre id="code-${topic.id}" class="code-content"><code>${this.highlightSQL(topic.code)}</code></pre>
                </div>

                ${topic.codeExplanationAr ? `
                <div class="code-explanation" dir="rtl" style="margin-top: var(--space-lg);">
                    <h5><i class="fas fa-list-ol"></i> شرح الكود سطر بسطر:</h5>
                    ${topic.codeExplanationAr.map(exp => `
                        <div class="code-line-explain">
                            <span class="code-line-num">${exp.line}</span>
                            <span class="code-line-desc" dir="rtl">${exp.text}</span>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <!-- Practice Task -->
            <div class="glass-card" style="margin-bottom: var(--space-xl); border-left: 4px solid var(--success);">
                <h3><i class="fas fa-tasks" style="color: var(--success);"></i> Practice Task</h3>
                <p><strong>Try it yourself:</strong> Open the SQL Practice Arena and experiment with the concepts you just learned.</p>
                <button class="btn btn-secondary" onclick="navigateTo('practice')" style="margin-top: var(--space-md);">
                    <i class="fas fa-laptop-code"></i> Go to SQL Practice
                </button>
            </div>

            <!-- Quiz Section -->
            <div class="glass-card" style="margin-bottom: var(--space-xl);">
                <h3><i class="fas fa-clipboard-question" style="color: var(--info);"></i> Mini Quiz</h3>
                <p>Test your understanding with these questions about ${topic.title}.</p>
                
                ${quizQuestions.length > 0 ? `
                <div id="quiz-${topic.id}" class="quiz-container" style="margin-top: var(--space-lg);">
                    ${this.renderQuiz(topic.id, quizQuestions)}
                </div>
                ` : '<p class="text-sm text-tertiary">Quiz coming soon...</p>'}
            </div>

            <!-- Navigation -->
            <div class="topic-nav">
                <button class="topic-nav-btn" onclick="navigateToPrevTopic('${topic.id}')" ${this.getPrevTopic(topic.id) ? '' : 'disabled'}>
                    <i class="fas fa-arrow-left"></i>
                    <span>${this.getPrevTopic(topic.id)?.title || 'Previous'}</span>
                </button>
                <div class="topic-progress">
                    <span>Topic ${COURSE_CONTENT.findIndex(t => t.id === topic.id) + 1} of ${COURSE_CONTENT.length}</span>
                </div>
                <button class="topic-nav-btn" onclick="navigateToNextTopic('${topic.id}')" ${this.getNextTopic(topic.id) ? '' : 'disabled'}>
                    <span>${this.getNextTopic(topic.id)?.title || 'Next'}</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </section>
        `;
    },

    // SQL Syntax Highlighting
    highlightSQL(code) {
        if (!code) return '';
        
        let highlighted = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Keywords
        const keywords = ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'TABLE', 'DATABASE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'GROUP', 'BY', 'ORDER', 'HAVING', 'AS', 'AND', 'OR', 'NOT', 'NULL', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'AUTO_INCREMENT', 'INT', 'VARCHAR', 'DECIMAL', 'DATE', 'TIMESTAMP', 'DEFAULT', 'UNIQUE', 'INDEX', 'DROP', 'ALTER', 'VALUES', 'SET', 'INTO', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'DISTINCT', 'LIMIT', 'LIKE', 'IN', 'BETWEEN', 'EXISTS', 'IF', 'NOT', 'EXISTS', 'USE', 'SHOW', 'DESCRIBE'];
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            highlighted = highlighted.replace(regex, match => `<span class="sql-keyword">${match}</span>`);
        });

        // Strings
        highlighted = highlighted.replace(/('[^']*')/g, '<span class="sql-string">$1</span>');
        
        // Numbers
        highlighted = highlighted.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="sql-number">$1</span>');
        
        // Comments
        highlighted = highlighted.replace(/(--.*$)/gm, '<span class="sql-comment">$1</span>');
        highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="sql-comment">$1</span>');

        return highlighted;
    },

    // Quiz Rendering
    renderQuiz(topicId, questions) {
        const state = this.quizState[topicId] || { currentQuestion: 0, answers: [], submitted: false };
        
        if (state.submitted) {
            return this.renderQuizResults(topicId, questions, state);
        }

        const q = questions[state.currentQuestion];
        
        return `
        <div class="quiz-question">Question ${state.currentQuestion + 1} of ${questions.length}: ${q.q}</div>
        <div class="quiz-options">
            ${q.options.map((opt, idx) => `
                <label class="quiz-option ${state.answers[state.currentQuestion] === idx ? 'selected' : ''}" 
                       onclick="selectQuizAnswer('${topicId}', ${idx})">
                    <input type="radio" name="quiz-${topicId}" value="${idx}" 
                           ${state.answers[state.currentQuestion] === idx ? 'checked' : ''}>
                    <span>${opt}</span>
                </label>
            `).join('')}
        </div>
        <div style="display: flex; gap: var(--space-sm); margin-top: var(--space-lg);">
            <button class="btn btn-primary" onclick="submitQuizAnswer('${topicId}')" 
                    ${state.answers[state.currentQuestion] === undefined ? 'disabled' : ''}>
                ${state.currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
            ${state.currentQuestion > 0 ? `
                <button class="btn btn-ghost" onclick="prevQuizQuestion('${topicId}')">
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
            ` : ''}
        </div>
        `;
    },

    renderQuizResults(topicId, questions, state) {
        let correct = 0;
        questions.forEach((q, idx) => {
            if (state.answers[idx] === q.correct) correct++;
        });

        const percentage = Math.round((correct / questions.length) * 100);
        let message, icon, color;
        
        if (percentage >= 80) {
            message = 'Excellent! You have mastered this topic!';
            icon = 'fa-trophy';
            color = 'var(--success)';
        } else if (percentage >= 60) {
            message = 'Good job! Keep practicing to improve.';
            icon = 'fa-thumbs-up';
            color = 'var(--warning)';
        } else {
            message = 'Keep learning! Review the material and try again.';
            icon = 'fa-book-open';
            color = 'var(--error)';
        }

        return `
        <div class="quiz-result">
            <div class="quiz-result-icon" style="color: ${color};">
                <i class="fas ${icon}"></i>
            </div>
            <h3>You scored ${correct} out of ${questions.length} (${percentage}%)</h3>
            <p>${message}</p>
            <button class="btn btn-outline" onclick="retakeQuiz('${topicId}')" style="margin-top: var(--space-md);">
                <i class="fas fa-redo"></i> Retake Quiz
            </button>
        </div>
        
        <div style="margin-top: var(--space-xl);">
            <h4>Question Review:</h4>
            ${questions.map((q, idx) => `
                <div style="margin-top: var(--space-lg); padding: var(--space-md); background: var(--bg-tertiary); border-radius: var(--radius-lg); 
                            border-left: 4px solid ${state.answers[idx] === q.correct ? 'var(--success)' : 'var(--error)'}">
                    <p><strong>Q${idx + 1}:</strong> ${q.q}</p>
                    <p style="color: ${state.answers[idx] === q.correct ? 'var(--success)' : 'var(--error)'}">
                        <i class="fas ${state.answers[idx] === q.correct ? 'fa-check' : 'fa-times'}"></i>
                        Your answer: ${q.options[state.answers[idx]] || 'Not answered'}
                    </p>
                    ${state.answers[idx] !== q.correct ? `
                        <p style="color: var(--success);">
                            <i class="fas fa-check"></i> Correct answer: ${q.options[q.correct]}
                        </p>
                    ` : ''}
                    <div class="quiz-explanation" dir="rtl">
                        <strong>الشرح:</strong> ${q.explanationAr}
                    </div>
                    <p class="text-sm" style="margin-top: var(--space-sm);">
                        <strong>Explanation:</strong> ${q.explanation}
                    </p>
                </div>
            `).join('')}
        </div>
        `;
    },

    // Quiz Actions
    selectQuizAnswer(topicId, answerIdx) {
        if (!this.quizState[topicId]) {
            this.quizState[topicId] = { currentQuestion: 0, answers: [], submitted: false };
        }
        this.quizState[topicId].answers[this.quizState[topicId].currentQuestion] = answerIdx;
        
        // Re-render to update UI
        const questions = getQuizQuestionsForTopic(topicId);
        document.getElementById(`quiz-${topicId}`).innerHTML = this.renderQuiz(topicId, questions);
    },

    submitQuizAnswer(topicId) {
        const questions = getQuizQuestionsForTopic(topicId);
        const state = this.quizState[topicId];
        
        if (state.currentQuestion < questions.length - 1) {
            state.currentQuestion++;
            document.getElementById(`quiz-${topicId}`).innerHTML = this.renderQuiz(topicId, questions);
        } else {
            state.submitted = true;
            document.getElementById(`quiz-${topicId}`).innerHTML = this.renderQuizResults(topicId, questions, state);
        }
    },

    prevQuizQuestion(topicId) {
        const questions = getQuizQuestionsForTopic(topicId);
        const state = this.quizState[topicId];
        
        if (state.currentQuestion > 0) {
            state.currentQuestion--;
            document.getElementById(`quiz-${topicId}`).innerHTML = this.renderQuiz(topicId, questions);
        }
    },

    retakeQuiz(topicId) {
        this.quizState[topicId] = { currentQuestion: 0, answers: [], submitted: false };
        const questions = getQuizQuestionsForTopic(topicId);
        document.getElementById(`quiz-${topicId}`).innerHTML = this.renderQuiz(topicId, questions);
    },

    // -------------------------
    // Video (plays INSIDE site)
    // -------------------------
    getYouTubeEmbedUrl({ videoId }) {
        const base = 'https://www.youtube-nocookie.com';
        const params = new URLSearchParams({
            rel: '0',
            modestbranding: '1',
            playsinline: '1',
            enablejsapi: '1',
        });
        return `${base}/embed/${videoId}?${params.toString()}`;
    },

    getYouTubeThumb(videoId) {
        // `i.ytimg.com` is the current CDN host for thumbnails.
        return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    },

    renderVideoThumbnail(topic) {
        const video = topic?.video || {};
        if (video.mode === 'youtube-search-link' && video.url) {
            return `
                <a href="${video.url}" target="_blank" rel="noopener noreferrer"
                   style="display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px; position:absolute; top:0; left:0; width:100%; height:100%; text-decoration:none; color:var(--text-primary); background:var(--bg-tertiary);">
                    <i class="fab fa-youtube" style="font-size:48px; color:#ff0000;"></i>
                    <div style="font-weight:600; text-align:center; padding:0 16px;">Open YouTube videos for this topic</div>
                    <div style="font-size:12px; opacity:0.8; text-align:center; padding:0 16px;">${video.query || topic.title}</div>
                </a>
            `;
        }

        if (video.mode === 'youtube-link' && video.videoId) {
            const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
            return `
                <a href="${watchUrl}" target="_blank" rel="noopener noreferrer"
                   style="display:block; position:absolute; top:0; left:0; width:100%; height:100%; text-decoration:none;">
                    <img src="${this.getYouTubeThumb(video.videoId)}" alt="Video thumbnail"
                         style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover;">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:68px; height:48px; background:rgba(255, 0, 0, 0.9); border-radius:12px; display:flex; align-items:center; justify-content:center;">
                        <i class="fas fa-play" style="color:#fff; font-size:20px; margin-left:4px;"></i>
                    </div>
                </a>
            `;
        }

        const videoId = video.videoId;
        if (!videoId) return `<div class="text-sm text-tertiary">No video available for this topic yet.</div>`;
        const embedUrl = this.getYouTubeEmbedUrl({ videoId });
        return `
            <iframe src="${embedUrl}" allowfullscreen
                title="Video for ${topic.title}"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        `;
    },

    // Topic Navigation Helpers
    getPrevTopic(currentId) {
        const idx = COURSE_CONTENT.findIndex(t => t.id === currentId);
        return idx > 0 ? COURSE_CONTENT[idx - 1] : null;
    },

    getNextTopic(currentId) {
        const idx = COURSE_CONTENT.findIndex(t => t.id === currentId);
        return idx < COURSE_CONTENT.length - 1 ? COURSE_CONTENT[idx + 1] : null;
    },

    // Practice Tabs
    setupPracticeTabs() {
        document.querySelectorAll('.practice-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // Update active tab
                document.querySelectorAll('.practice-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding content
                document.querySelectorAll('.practice-content').forEach(c => c.style.display = 'none');
                document.getElementById(`practice-${tabName}`).style.display = 'block';
            });
        });
    },

    // Copy Code
    copyCode(elementId) {
        const code = document.getElementById(elementId)?.textContent;
        if (code) {
            navigator.clipboard.writeText(code).then(() => {
                // Could show a toast notification here
            });
        }
    }
};

// Global functions for onclick handlers
function navigateTo(page) {
    App.navigateTo(page);
}

function navigateToPrevTopic(currentId) {
    const prev = App.getPrevTopic(currentId);
    if (prev) navigateTo(prev.id);
}

function navigateToNextTopic(currentId) {
    const next = App.getNextTopic(currentId);
    if (next) navigateTo(next.id);
}

function selectQuizAnswer(topicId, answerIdx) {
    App.selectQuizAnswer(topicId, answerIdx);
}

function submitQuizAnswer(topicId) {
    App.submitQuizAnswer(topicId);
}

function prevQuizQuestion(topicId) {
    App.prevQuizQuestion(topicId);
}

function retakeQuiz(topicId) {
    App.retakeQuiz(topicId);
}

function copyCode(elementId) {
    App.copyCode(elementId);
}

// SQL Editor Functions
function runQuery() {
    const editor = document.getElementById('sql-editor');
    const output = document.getElementById('sql-output');
    const results = document.getElementById('query-results');
    const timeDisplay = document.getElementById('query-time');
    
    if (!editor || !output || !results) return;
    
    const query = editor.value.trim().toLowerCase();
    
    output.style.display = 'block';
    const startTime = performance.now();
    
    // Simple query simulation
    let resultHtml = '';
    
    if (query.includes('select') && query.includes('from')) {
        // Simulate SELECT results
        resultHtml = simulateSelect(query);
    } else if (query.includes('insert')) {
        resultHtml = '<p style="color: var(--success);"><i class="fas fa-check"></i> 1 row inserted successfully.</p>';
    } else if (query.includes('update')) {
        resultHtml = '<p style="color: var(--success);"><i class="fas fa-check"></i> 2 rows updated successfully.</p>';
    } else if (query.includes('delete')) {
        resultHtml = '<p style="color: var(--warning);"><i class="fas fa-exclamation-triangle"></i> 1 row deleted.</p>';
    } else {
        resultHtml = '<p style="color: var(--info);"><i class="fas fa-info-circle"></i> Query executed successfully.</p>';
    }
    
    const endTime = performance.now();
    results.innerHTML = resultHtml;
    timeDisplay.textContent = `Query executed in ${((endTime - startTime)).toFixed(2)}ms`;
}

function simulateSelect(query) {
    const students = SAMPLE_DATABASE.tables.students.data;
    
    // Simple table rendering
    let html = '<table style="width: 100%; border-collapse: collapse; font-size: var(--fs-sm);">';
    html += '<thead><tr style="background: var(--bg-tertiary);">';
    html += '<th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">student_id</th>';
    html += '<th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">first_name</th>';
    html += '<th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">last_name</th>';
    html += '<th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">major</th>';
    html += '<th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">gpa</th>';
    html += '</tr></thead><tbody>';
    
    students.forEach((student, idx) => {
        html += `<tr style="border-bottom: 1px solid var(--border-color); ${idx % 2 === 0 ? 'background: var(--bg-primary);' : ''}">`;
        html += `<td style="padding: 8px;">${student.student_id}</td>`;
        html += `<td style="padding: 8px;">${student.first_name}</td>`;
        html += `<td style="padding: 8px;">${student.last_name}</td>`;
        html += `<td style="padding: 8px;">${student.major}</td>`;
        html += `<td style="padding: 8px;">${student.gpa}</td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    html += `<p style="margin-top: var(--space-sm); color: var(--text-tertiary);">${students.length} rows returned</p>`;
    
    return html;
}

function clearEditor() {
    const editor = document.getElementById('sql-editor');
    if (editor) editor.value = '';
}

function resetDatabase() {
    const output = document.getElementById('sql-output');
    if (output) {
        output.style.display = 'none';
    }
    alert('Database reset to initial state!');
}

// Global Quiz State
let quizState = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: []
};
window.quizState = quizState;

// Sample Quiz Questions (comprehensive set)
function getQuizQuestions() {
    return [
        {
            question: "What does SQL stand for?",
            questionAr: "SQL هي اختصار لإيه؟",
            options: [
                "Structured Query Language",
                "Simple Query Language",
                "Standard Query Language",
                "System Query Language"
            ],
            correct: 0,
            explanation: "SQL stands for Structured Query Language. It's the standard language for relational database management systems.",
            explanationAr: "SQL يعني Structured Query Language (لغة الاستعلام المنظمة). هي اللغة القياسية لأنظمة إدارة قواعد البيانات العلائقية."
        },
        {
            question: "Which SQL statement is used to retrieve data from a database?",
            questionAr: "أي أمر SQL بيستخدم عشان نجيب بيانات من قاعدة البيانات؟",
            options: ["GET", "RETRIEVE", "SELECT", "FETCH"],
            correct: 2,
            explanation: "The SELECT statement is used to retrieve data from one or more tables.",
            explanationAr: "أمر SELECT بيستخدم عشان نجيب بيانات من جدول أو أكتر."
        },
        {
            question: "Which SQL clause is used to filter the results of a query?",
            questionAr: "أي جملة SQL بتستخدم عشان نفلتر نتيجة الاستعلام؟",
            options: ["FILTER", "WHERE", "HAVING", "ORDER BY"],
            correct: 1,
            explanation: "The WHERE clause is used to filter records based on specific conditions.",
            explanationAr: "جملة WHERE بتستخدم عشان نفلتر السجلات بناءً على شروط معينة."
        },
        {
            question: "What does the DISTINCT keyword do in a SELECT statement?",
            questionAr: "كلمة DISTINCT بتعمل إيه في أمر SELECT؟",
            options: [
                "Sorts the results alphabetically",
                "Returns only unique values",
                "Selects all columns",
                "Limits the number of rows"
            ],
            correct: 1,
            explanation: "DISTINCT returns only distinct (different) values, eliminating duplicates from the result set.",
            explanationAr: "DISTINCT بترجع قيم مميزة بس، وبتشيل التكرار من النتيجة."
        },
        {
            question: "Which SQL statement is used to insert new data into a table?",
            questionAr: "أي أمر SQL بيستخدم عشان نضيف بيانات جديدة للجدول؟",
            options: ["ADD", "INSERT INTO", "CREATE", "UPDATE"],
            correct: 1,
            explanation: "INSERT INTO is used to add new records to a table.",
            explanationAr: "INSERT INTO بيستخدم عشان نضيف سجلات جديدة للجدول."
        },
        {
            question: "Which SQL statement is used to modify existing data?",
            questionAr: "أي أمر SQL بيستخدم عشان نعدّل بيانات موجودة؟",
            options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
            correct: 2,
            explanation: "UPDATE is used to modify existing records in a table.",
            explanationAr: "UPDATE بيستخدم عشان نعدّل السجلات الموجودة في الجدول."
        },
        {
            question: "What does the COUNT(*) function do?",
            questionAr: "دالة COUNT(*) بتعمل إيه؟",
            options: [
                "Counts all non-NULL values",
                "Counts all rows including NULLs",
                "Counts only unique values",
                "Counts columns in a table"
            ],
            correct: 1,
            explanation: "COUNT(*) counts all rows in a table, including those with NULL values.",
            explanationAr: "COUNT(*) بتعد كل الصفوف في الجدول، حتى اللي فيها قيم NULL."
        },
        {
            question: "Which JOIN returns only matching rows from both tables?",
            questionAr: "أي JOIN بيرجع الصفوف المتطابقة بس من الجدولين؟",
            options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
            correct: 2,
            explanation: "INNER JOIN returns only the rows where there is a match in both tables.",
            explanationAr: "INNER JOIN بيرجع الصفوف اللي فيها تطابق في الجدولين بس."
        },
        {
            question: "What is a PRIMARY KEY?",
            questionAr: "إيه هو PRIMARY KEY؟",
            options: [
                "A key that unlocks the database",
                "A column that can have duplicate values",
                "A unique identifier for each record",
                "A foreign key reference"
            ],
            correct: 2,
            explanation: "A PRIMARY KEY uniquely identifies each record in a table and cannot contain NULL values.",
            explanationAr: "PRIMARY KEY بيعرّف كل سجل في الجدول بشكل فريد ومش بيقبل NULL."
        },
        {
            question: "What does the GROUP BY clause do?",
            questionAr: "جملة GROUP BY بتعمل إيه؟",
            options: [
                "Sorts results by group",
                "Groups rows with same values into summary rows",
                "Filters groups based on conditions",
                "Joins multiple tables"
            ],
            correct: 1,
            explanation: "GROUP BY groups rows that have the same values into summary rows, typically used with aggregate functions.",
            explanationAr: "GROUP BY بتجمع الصفوف اللي ليها نفس القيم في صفوف ملخصة، وبتستخدم مع دوال التجميع."
        },
        {
            question: "Which constraint ensures a column cannot have NULL values?",
            questionAr: "أي قيد بيأكد إن العمود مينفعش يكون NULL؟",
            options: ["NOT NULL", "NO NULL", "REQUIRED", "MANDATORY"],
            correct: 0,
            explanation: "NOT NULL constraint ensures that a column must always have a value.",
            explanationAr: "قيد NOT NULL بيأكد إن العمود لازم دايماً يكون فيه قيمة."
        },
        {
            question: "What does the LIKE operator do?",
            questionAr: "عامل LIKE بيعمل إيه؟",
            options: [
                "Compares two dates",
                "Searches for a specified pattern",
                "Joins two strings",
                "Checks for equality"
            ],
            correct: 1,
            explanation: "LIKE is used to search for a specified pattern in a column, using wildcards like % and _.",
            explanationAr: "LIKE بيستخدم عشان نبحث عن نمط معين في عمود، باستخدام wildcards زي % و _."
        },
        {
            question: "What is the purpose of a FOREIGN KEY?",
            questionAr: "إيه الغرض من FOREIGN KEY؟",
            options: [
                "To uniquely identify a record",
                "To link two tables together",
                "To create a new table",
                "To delete records"
            ],
            correct: 1,
            explanation: "A FOREIGN KEY establishes a relationship between two tables by referencing the PRIMARY KEY of another table.",
            explanationAr: "FOREIGN KEY بيعمل علاقة بين جدولين عن طريق إنه بيشاور على PRIMARY KEY في جدول تاني."
        },
        {
            question: "Which SQL function returns the average of a set of values?",
            questionAr: "أي دالة SQL بترجع المتوسط لمجموعة قيم؟",
            options: ["AVERAGE", "MEAN", "AVG", "MEDIAN"],
            correct: 2,
            explanation: "AVG() calculates the average of a set of numeric values, ignoring NULL values.",
            explanationAr: "AVG() بتحسب المتوسط لمجموعة قيم رقمية، وبتتجاهل قيم NULL."
        },
        {
            question: "What does the ORDER BY clause do?",
            questionAr: "جملة ORDER BY بتعمل إيه؟",
            options: [
                "Filters records",
                "Groups records",
                "Sorts the result set",
                "Joins tables"
            ],
            correct: 2,
            explanation: "ORDER BY sorts the result set in ascending or descending order based on one or more columns.",
            explanationAr: "ORDER BY بترتب النتيجة تصاعدياً أو تنازلياً بناءً على عمود أو أكتر."
        },
        {
            question: "Which statement is used to delete all records from a table?",
            questionAr: "أي أمر بيستخدم عشان نمسح كل السجلات من جدول؟",
            options: ["DELETE ALL", "TRUNCATE", "CLEAR", "REMOVE"],
            correct: 1,
            explanation: "TRUNCATE TABLE removes all records from a table quickly and resets auto-increment counters.",
            explanationAr: "TRUNCATE TABLE بيمسح كل السجلات من الجدول بسرعة وبيسفر العدادات المتزايدة."
        },
        {
            question: "What is the difference between WHERE and HAVING?",
            questionAr: "إيه الفرق بين WHERE و HAVING؟",
            options: [
                "No difference, they are the same",
                "WHERE filters rows, HAVING filters groups",
                "WHERE is for UPDATE, HAVING is for DELETE",
                "WHERE works with text, HAVING works with numbers"
            ],
            correct: 1,
            explanation: "WHERE filters rows before grouping, while HAVING filters groups after grouping has occurred.",
            explanationAr: "WHERE بيفلتر الصفوف قبل التجميع، بينما HAVING بيفلتر المجموعات بعد التجميع."
        },
        {
            question: "What does AUTO_INCREMENT do?",
            questionAr: "AUTO_INCREMENT بتعمل إيه؟",
            options: [
                "Increases the table size automatically",
                "Generates a unique number automatically for each new record",
                "Updates records automatically",
                "Creates backups automatically"
            ],
            correct: 1,
            explanation: "AUTO_INCREMENT automatically generates a unique number when a new record is inserted, typically used for PRIMARY KEY columns.",
            explanationAr: "AUTO_INCREMENT بتولد رقم فريد تلقائياً لما نضيف سجل جديد، بتستخدم عادةً لأعمدة PRIMARY KEY."
        },
        {
            question: "Which wildcards are used with the LIKE operator?",
            questionAr: "أي wildcards بيستخدمها مع عامل LIKE؟",
            options: [
                "* and ?",
                "% and _",
                "$ and #",
                "@ and &"
            ],
            correct: 1,
            explanation: "% matches any sequence of characters, and _ matches any single character.",
            explanationAr: "% بيطابق أي تسلسل حروف، و _ بيطابق أي حرف واحد."
        },
        {
            question: "What is normalization in databases?",
            questionAr: "إيه هي Normalization في قواعد البيانات؟",
            options: [
                "Making data look normal",
                "Organizing data to reduce redundancy",
                "Converting data to standard format",
                "Creating backup copies"
            ],
            correct: 1,
            explanation: "Normalization is the process of organizing data to minimize redundancy and improve data integrity.",
            explanationAr: "Normalization هي عملية تنظيم البيانات عشان نقلل التكرار ونحسّن سلامة البيانات."
        }
    ];
}

// Quiz Functions
function startQuiz() {
    quizState.questions = getQuizQuestions();
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answers = [];
    
    document.getElementById('quiz-intro').style.display = 'none';
    document.getElementById('quiz-question-container').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    document.getElementById('total-q-num').textContent = quizState.questions.length;
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const q = quizState.questions[quizState.currentQuestion];
    
    document.getElementById('current-q-num').textContent = quizState.currentQuestion + 1;
    document.getElementById('quiz-score').textContent = `Score: ${quizState.score}/${quizState.currentQuestion}`;
    
    // Update progress bar
    const progress = ((quizState.currentQuestion) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;
    
    // Show question
    document.getElementById('question-text').innerHTML = `
        <div>${q.question}</div>
        <div dir="rtl" style="margin-top: var(--space-sm); font-size: var(--fs-base); color: var(--text-secondary);">${q.questionAr}</div>
    `;
    
    // Show options
    const optionsHtml = q.options.map((opt, idx) => `
        <label class="quiz-option" data-idx="${idx}" onclick="selectQuizOption(${idx})">
            <input type="radio" name="quiz-option" value="${idx}">
            <span>${opt}</span>
        </label>
    `).join('');
    
    document.getElementById('question-options').innerHTML = optionsHtml;
    
    // Reset feedback and buttons
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('btn-submit').style.display = 'block';
    document.getElementById('btn-submit').disabled = true;
    document.getElementById('btn-next').style.display = 'none';
    
    selectedQuizOption = null;
    window.selectedQuizOption = selectedQuizOption;
}

let selectedQuizOption = null;
window.selectedQuizOption = selectedQuizOption;

function selectQuizOption(idx) {
    selectedQuizOption = idx;
    window.selectedQuizOption = selectedQuizOption;
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    document.querySelector(`[data-idx="${idx}"]`).classList.add('selected');
    document.getElementById('btn-submit').disabled = false;
}

function submitFullQuizAnswer() {
    if (selectedQuizOption === null) return;
    
    const q = quizState.questions[quizState.currentQuestion];
    const isCorrect = selectedQuizOption === q.correct;
    
    if (isCorrect) quizState.score++;
    
    quizState.answers.push({
        question: q.question,
        selected: selectedQuizOption,
        correct: q.correct,
        isCorrect: isCorrect
    });
    
    // Show feedback
    const feedbackDiv = document.getElementById('quiz-feedback');
    const feedbackContent = document.getElementById('feedback-content');
    
    feedbackDiv.style.display = 'block';
    feedbackDiv.style.background = isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';
    feedbackDiv.style.border = `1px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}`;
    
    feedbackContent.innerHTML = `
        <div style="font-weight: var(--fw-semibold); color: ${isCorrect ? 'var(--success)' : 'var(--error)'}; margin-bottom: var(--space-sm);">
            <i class="fas fa-${isCorrect ? 'check' : 'times'}"></i>
            ${isCorrect ? 'Correct!' : 'Incorrect'}
        </div>
        <div style="margin-bottom: var(--space-sm);">${q.explanation}</div>
        <div dir="rtl" style="color: var(--text-secondary);">${q.explanationAr}</div>
        ${!isCorrect ? `<div style="margin-top: var(--space-sm);">Correct answer: <strong>${q.options[q.correct]}</strong></div>` : ''}
    `;
    
    // Update buttons
    document.getElementById('btn-submit').style.display = 'none';
    document.getElementById('btn-next').style.display = 'block';
    
    // Disable options
    document.querySelectorAll('.quiz-option input').forEach(el => el.disabled = true);
    document.querySelector(`[data-idx="${q.correct}"]`).style.background = 'rgba(34, 197, 94, 0.2)';
}

function nextQuizQuestion() {
    quizState.currentQuestion++;
    
    if (quizState.currentQuestion >= quizState.questions.length) {
        showQuizResults();
    } else {
        showQuizQuestion();
    }
}

function showQuizResults() {
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const total = quizState.questions.length;
    const score = quizState.score;
    const percentage = Math.round((score / total) * 100);
    
    let title, message, icon, color;
    
    if (percentage >= 80) {
        title = 'Excellent!';
        message = `You scored ${score} out of ${total} (${percentage}%). Great job!`;
        icon = 'fa-trophy';
        color = 'var(--success)';
    } else if (percentage >= 60) {
        title = 'Good Job!';
        message = `You scored ${score} out of ${total} (${percentage}%). Keep practicing!`;
        icon = 'fa-thumbs-up';
        color = 'var(--warning)';
    } else {
        title = 'Keep Learning!';
        message = `You scored ${score} out of ${total} (${percentage}%). Review the tutorials and try again!`;
        icon = 'fa-book-open';
        color = 'var(--error)';
    }
    
    const resultIcon = document.getElementById('result-icon');
    resultIcon.className = `fas ${icon}`;
    resultIcon.style.color = color;
    
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-title').style.color = color;
    document.getElementById('result-message').textContent = message;
}

function restartQuiz() {
    startQuiz();
}

// Load exercise into SQL editor
function loadExercise(query) {
    const editor = document.getElementById('sql-editor');
    if (editor) {
        editor.value = query;
        // Switch to editor tab
        document.querySelector('.practice-tab[data-tab="editor"]').click();
        // Scroll to editor
        editor.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
