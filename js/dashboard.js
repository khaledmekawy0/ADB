/* Student dashboard */
(function () {
    function byId(id) {
        return document.getElementById(id);
    }

    function setProgress(percent) {
        const bar = byId('overall-progress-bar');
        const label = byId('overall-progress-label');
        if (bar) bar.style.width = `${percent}%`;
        if (label) label.textContent = `${percent}%`;
    }

    function renderScoreCard(score) {
        const wrap = byId('score-card');
        if (!wrap) return;
        if (!score) {
            wrap.style.display = 'none';
            return;
        }
        wrap.style.display = 'block';
        byId('score-value').textContent = `${score.total_score}%`;
        byId('score-level').textContent = score.level;
        byId('score-date').textContent = score.completed_at || 'In progress';
        byId('score-certificate').textContent = score.certificate_id || 'Not generated yet';
    }

    async function init() {
        if (!window.PlatformAPI) return;
        try {
            await window.PlatformAPI.init();
        } catch {
            window.location.href = 'auth/signin.html';
            return;
        }

        const student = window.PlatformAPI.state.me;
        if (!student) {
            window.location.href = 'auth/signin.html';
            return;
        }

        byId('student-name').textContent = student.full_name;

        try {
            const summary = await window.PlatformAPI.progressSummary();
            const p = summary.progress;
            setProgress(p.overall_percent);
            byId('topics-progress').textContent = `${p.topics.completed}/${p.topics.total}`;
            byId('questions-progress').textContent = `${p.questions.correct}/${p.questions.total}`;
            byId('tasks-progress').textContent = `${p.tasks.completed}/${p.tasks.total}`;

            const resumeBtn = byId('resume-btn');
            if (summary.resume_topic && summary.resume_topic.topic_code) {
                resumeBtn.style.display = 'inline-flex';
                resumeBtn.href = `index.html#${summary.resume_topic.topic_code}`;
                resumeBtn.textContent = `Resume: ${summary.resume_topic.title}`;
            }
        } catch (err) {
            byId('dashboard-message').textContent = err.message || 'Could not load progress summary.';
        }

        try {
            const scoreRes = await window.PlatformAPI.latestScore();
            renderScoreCard(scoreRes.score);
        } catch {
            renderScoreCard(null);
        }

        byId('finalize-btn')?.addEventListener('click', async () => {
            const btn = byId('finalize-btn');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calculating...';
            try {
                const result = await window.PlatformAPI.finalizeScore();
                renderScoreCard(result.score);
                byId('dashboard-message').textContent = 'Final score recalculated successfully.';
                if (result.score && result.score.certificate_id) {
                    byId('certificate-link').style.display = 'inline-flex';
                }
            } catch (err) {
                byId('dashboard-message').textContent = err.message || 'Could not calculate final score.';
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-medal"></i> Recalculate Final Score';
            }
        });

        byId('logout-btn')?.addEventListener('click', async () => {
            try {
                await window.PlatformAPI.signout();
            } finally {
                window.location.href = 'auth/signin.html';
            }
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();

