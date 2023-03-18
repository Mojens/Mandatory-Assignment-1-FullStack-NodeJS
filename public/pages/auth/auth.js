document.getElementById("sign-in-btn").addEventListener("click", function () {
    const username = document.getElementById("sign-in-floating-username").value
    const password = document.getElementById("sign-in-floating-password").value
});

document.getElementById("sign-up-btn").addEventListener("click", async function () {
    const username = document.getElementById("sign-up-floating-username").value
    const email = document.getElementById("sign-up-floating-email").value
    const password2 = document.getElementById("sign-up-floatingPassword2").value
    const password1 = document.getElementById("sign-up-floatingPassword1").value

    if (password1 !== password2) {
        alert("Passwords do not match");
    }
    const user = {
        username: username,
        email: email,
        password: password1
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
        document.getElementById("sign-up-btn").innerText = "Go to login";
        document.getElementById("sign-up-btn").addEventListener("click", function () {
            window.location.href = "/login";
        });
    }
    if (data.status === 409) {
        document.getElementById("response-message").innerText = data.error;
    }



});