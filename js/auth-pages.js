/* Sign in / sign up page logic */
(function () {
    function byId(id) {
        return document.getElementById(id);
    }

    function showMessage(text, isError = false) {
        const el = byId('auth-message');
        if (!el) return;
        el.textContent = text;
        el.style.display = 'block';
        el.style.color = isError ? 'var(--error)' : 'var(--success)';
    }

    function setLoading(buttonId, loading) {
        const btn = byId(buttonId);
        if (!btn) return;
        btn.disabled = loading;
        btn.dataset.originalText = btn.dataset.originalText || btn.innerHTML;
        btn.innerHTML = loading ? '<i class="fas fa-spinner fa-spin"></i> Please wait...' : btn.dataset.originalText;
    }

    async function handleSignIn(e) {
        e.preventDefault();
        setLoading('signin-btn', true);
        showMessage('', false);
        try {
            const email = byId('email').value.trim();
            const password = byId('password').value;
            const rememberMe = !!byId('remember_me')?.checked;

            await window.PlatformAPI.signin({
                email,
                password,
                remember_me: rememberMe,
            });
            window.location.href = '../dashboard.html';
        } catch (err) {
            showMessage(err.message || 'Sign in failed.', true);
        } finally {
            setLoading('signin-btn', false);
        }
    }

    async function handleSignUp(e) {
        e.preventDefault();
        setLoading('signup-btn', true);
        showMessage('', false);
        try {
            const fullName = byId('full_name').value.trim();
            const email = byId('email').value.trim();
            const password = byId('password').value;
            const confirmPassword = byId('confirm_password').value;

            if (password !== confirmPassword) {
                throw new Error('Passwords do not match.');
            }
            await window.PlatformAPI.signup({
                full_name: fullName,
                email,
                password,
            });
            window.location.href = '../dashboard.html';
        } catch (err) {
            showMessage(err.message || 'Sign up failed.', true);
        } finally {
            setLoading('signup-btn', false);
        }
    }

    async function init() {
        if (!window.PlatformAPI) return;
        try {
            await window.PlatformAPI.init();
            if (window.PlatformAPI.state.me) {
                window.location.href = '../dashboard.html';
                return;
            }
        } catch {
            /* no-op */
        }

        byId('signin-form')?.addEventListener('submit', handleSignIn);
        byId('signup-form')?.addEventListener('submit', handleSignUp);
    }

    document.addEventListener('DOMContentLoaded', init);
})();

