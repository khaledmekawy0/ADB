/* Certificate page */
(function () {
    function byId(id) {
        return document.getElementById(id);
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

        byId('cert-student-name').textContent = student.full_name;
        byId('cert-student-email').textContent = student.email;

        try {
            const scoreRes = await window.PlatformAPI.latestScore();
            const score = scoreRes.score;
            if (!score) {
                byId('cert-message').textContent = 'No final score found yet. Please complete your course and finalize your score.';
                return;
            }
            byId('cert-score').textContent = `${score.total_score}%`;
            byId('cert-level').textContent = score.level;
            byId('cert-date').textContent = score.completed_at || 'In progress';
            byId('cert-id').textContent = score.certificate_id || 'Not generated yet';
        } catch (err) {
            byId('cert-message').textContent = err.message || 'Could not load certificate details.';
        }
    }

    document.addEventListener('DOMContentLoaded', init);
})();

