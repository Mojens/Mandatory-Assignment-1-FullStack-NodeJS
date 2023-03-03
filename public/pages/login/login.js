const signInBtn = document.getElementById('sign-in-toogle');
const signUpBtn = document.getElementById('sign-up-toogle');
const forgotPwdBtn = document.getElementById('forgot-pwd-btn');

const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');
const forgotPwdForm = document.getElementById('forgot-pwd-form');

const formContainer = document.getElementById('form-containers');

signInForm.style.display = 'block';
signUpForm.style.display = 'none';
formContainer.style.height = '75vh';

signInBtn.addEventListener('click', function () {
    formContainer.style.height = '75vh';
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    forgotPwdForm.style.display = 'none';
});

signUpBtn.addEventListener('click', function () {
    formContainer.style.height = '75vh';
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
    forgotPwdForm.style.display = 'none';
});
forgotPwdBtn.addEventListener('click', function () {
    formContainer.style.height = '65vh';
    signUpForm.style.display = 'none';
    signInForm.style.display = 'none';
    forgotPwdForm.style.display = 'block';
});