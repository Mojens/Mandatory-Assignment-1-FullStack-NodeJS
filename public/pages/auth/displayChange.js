const signInBtn = document.getElementById('sign-in-toogle');
const signUpBtn = document.getElementById('sign-up-toogle');
const forgotPwdBtn = document.getElementById('forgot-pwd-toogle');

const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');
const forgotPwdForm = document.getElementById('forgot-pwd-form');

const formContainer = document.getElementById('form-containers');

const signInText = document.getElementById('sign-in-text');
const signUpText = document.getElementById('sign-up-text');

signInForm.style.display = 'block';
signUpForm.style.display = 'none';
formContainer.style.height = '70vh';
formContainer.style.marginBottom = '130px';
signInBtn.style.display = 'none';

signInBtn.addEventListener('click', function () {
    document.title = 'Login';
    formContainer.style.height = '70vh';
    formContainer.style.marginBottom = '130px';
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    forgotPwdForm.style.display = 'none';
    signInBtn.style.display = 'none';
    signUpBtn.style.display = 'inline-block';
    signUpText.style.display = 'inline-block';
    signInText.style.display = 'none';
});

signUpBtn.addEventListener('click', function () {
    document.title = 'Sign Up';
    formContainer.style.height = '75vh';
    formContainer.style.marginBottom = '85px';
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
    forgotPwdForm.style.display = 'none';
    signInBtn.style.display = 'inline-block';
    signUpBtn.style.display = 'none';
    signUpText.style.display = 'none';
    signInText.style.display = 'inline-block';
});

forgotPwdBtn.addEventListener('click', function () {
    document.title = 'Forgot Password';
    formContainer.style.height = '54vh';
    formContainer.style.marginBottom = '280px';
    signUpForm.style.display = 'none';
    signInForm.style.display = 'none';
    forgotPwdForm.style.display = 'block';
    signInBtn.style.display = 'inline-block';
    signUpBtn.style.display = 'none';
    signUpText.style.display = 'none';
    signInText.style.display = 'inline-block';
});
