document.getElementById("sign-in-btn").addEventListener("click", async function () {
    const username = document.getElementById("sign-in-floating-username").value
    const password = document.getElementById("sign-in-floating-password").value
    const response = await fetch('/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    const data = await response.json();
    if (data.status === 401) {
        document.getElementById("login-error-message").innerText = data.error;
    } else if (data.status === 200) {
        window.location.href = "/admin-panel";
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        
    }
});

document.getElementById("sign-up-btn").addEventListener("click", async function () {
    const usernameElement = document.getElementById("sign-up-floating-username")
    const emailElement = document.getElementById("sign-up-floating-email")
    const password2Element = document.getElementById("sign-up-floatingPassword2")
    const password1Element = document.getElementById("sign-up-floatingPassword1")

    usernameElement.validity.valid
    emailElement.validity.valid
    password1Element.validity.valid
    password2Element.validity.valid

    if (password1Element.value !== password2Element.value) {
        alert("Passwords do not match");
    } else {
        const user = {
            username: usernameElement.value,
            email: emailElement.value,
            password: password1Element.value
        }
        console.log(user);
        console.log(JSON.stringify(user))
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        if (data.status === 200) {
            document.getElementById("response-message").innerText = data.succes;
            document.getElementById("text-over-signup").style.display = "none";
            document.getElementById("signup-form-data").style.display = "none";
            document.getElementById("sign-up-btn").innerText = "Go to login";
            document.getElementById("sign-up-btn").addEventListener("click", function () {
                window.location.href = "/login";
            });
        }
        if (data.status === 409) {
            document.getElementById("response-message").innerText = data.error;
        }

    }

});