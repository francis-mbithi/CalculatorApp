let currentExpression = '';
let isLoggedIn = false;

function appendToScreen(value) {
    if (isLoggedIn) {
        currentExpression += value;
        document.getElementById('result').value = currentExpression;
    }
}

function clearScreen() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

function deleteDigit() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('result').value = currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        document.getElementById('result').value = result;
        currentExpression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentExpression = '';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your own authentication logic
    if (username === '123' && password === '123') {
        isLoggedIn = true;
        showCalculator();
    } else {
        alert('Invalid username or password');
    }
}

function showCalculator() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.calculator').style.display = 'block';
}
