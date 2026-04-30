/* Platform API client: auth, progress, scoring */
(function () {
    const state = {
        csrfToken: null,
        me: null,
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
            throw new Error(
                'The server returned HTML instead of JSON. Make sure you are accessing the site through http://localhost/ADB/ (not file://) and try again.'
            );
        }
        if (data && data.csrf_token) {
            state.csrfToken = data.csrf_token;
        }
        if (!res.ok || data.ok === false) {
            throw new Error(data.message || 'Request failed.');
        }
        return data;
    }

    const api = {
        state,
        async init() {
            const csrf = await request('/api/auth/csrf.php');
            state.csrfToken = csrf.csrf_token;
            const me = await request('/api/auth/me.php');
            state.me = me.authenticated ? me.student : null;
            return state.me;
        },
        async signup(payload) {
            const res = await request('/api/auth/signup.php', { method: 'POST', body: payload });
            state.me = res.student;
            return res;
        },
        async signin(payload) {
            const res = await request('/api/auth/signin.php', { method: 'POST', body: payload });
            state.me = res.student;
            return res;
        },
        async signout() {
            const res = await request('/api/auth/signout.php', { method: 'POST', body: {} });
            state.me = null;
            return res;
        },
        async markTopic(topicId, visited = true) {
            return request('/api/progress/topic.php', { method: 'POST', body: { topic_id: topicId, visited } });
        },
        async trackQuestion(questionId, isCorrect) {
            return request('/api/progress/question.php', { method: 'POST', body: { question_id: questionId, is_correct: !!isCorrect } });
        },
        async trackTask(taskId, status, score = null) {
            return request('/api/progress/task.php', { method: 'POST', body: { task_id: taskId, status, score } });
        },
        async progressSummary() {
            return request('/api/progress/summary.php');
        },
        async finalizeScore() {
            return request('/api/score/finalize.php', { method: 'POST', body: {} });
        },
        async latestScore() {
            return request('/api/score/latest.php');
        },
        async loadCatalog() {
            return request('/api/meta/catalog.php');
        },
        async loadQuestionsMap() {
            return request('/api/meta/questions.php');
        },
    };

    window.PlatformAPI = api;
})();

