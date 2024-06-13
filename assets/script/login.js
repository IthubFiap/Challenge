// Select DOM elements
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleBtn = document.getElementById('toggle-btn');

// Variable to track whether it's login or signup screen
let isLogin = true;

// Add event listener for the toggle button
toggleBtn.addEventListener('click', function() {
    // Toggle between login and signup screens
    if (isLogin) {
        // If it's login, switch text and button to signup
        formTitle.textContent = 'Signup';
        submitBtn.textContent = 'Signup';
        toggleBtn.textContent = 'Trocar para Login';
    } else {
        // If it's signup, switch text and button to login
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleBtn.textContent = 'Trocar para Signup';
    }

    // Toggle the isLogin state to switch between login and signup
    isLogin = !isLogin;
});
