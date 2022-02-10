document.getElementById('submit-login').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    const passField = document.getElementById('pass-field');
    const userPass = passField.value;

    // if (userEmail == 'sontan@gmail.com' && userPass == '1234') {

    // }
    window.location.href = 'banking.html';

})