const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleBtn = document.getElementById('toggle-btn');

let isLogin = true;

toggleBtn.addEventListener('click', function() {
    if (isLogin) {
        formTitle.textContent = 'Signup';
        submitBtn.textContent = 'Signup';
        toggleBtn.textContent = 'Switch to Login';
    } else {
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleBtn.textContent = 'Switch to Signup';
    }

    isLogin = !isLogin;
});
