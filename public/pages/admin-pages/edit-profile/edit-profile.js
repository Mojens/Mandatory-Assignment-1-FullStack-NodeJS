const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const UUID = localStorage.getItem("token");

document.getElementById("edit-profile-email").value = email;
document.getElementById("edit-profile-username").value = username;

document.getElementById("edit-profile-btn").addEventListener("click", () => {
    const newUsername = document.getElementById("edit-profile-username").value;
    const newEmail = document.getElementById("edit-profile-email").value;
    const newPassword = document.getElementById("edit-profile-password1").value;
    const confirmPassword = document.getElementById("edit-profile-password2").value;

    if (newPassword !== confirmPassword) {
        document.getElementById("edit-response").innerHTML = DOMPurify.sanitize("<h2>Password dont match</h2>");
    } else {
        const updatedUser = {
            username: newUsername,
            email: newEmail
        };
        
        if (newPassword !== "" && newPassword === confirmPassword && newPassword.length >= 8) {
            updatedUser.password = newPassword;
        }
        
        fetch('/users/' + UUID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json()).then(data => {
            if (data.status === 200) {
                localStorage.setItem("username", newUsername);
                localStorage.setItem("email", newEmail);
                document.getElementById("edit-response").innerHTML = DOMPurify.sanitize(`<h2>${data.success}</h2>`);
            } else {
                document.getElementById("edit-response").innerHTML = DOMPurify.sanitize(`<h2>Something went wrong: ${data.error}</h2>`);
            }
        });
    }
});
