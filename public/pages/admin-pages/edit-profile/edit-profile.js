const username = localStorage.getItem("username");
const email = localStorage.getItem("email");

document.getElementById("edit-profile-email").value = email;
document.getElementById("edit-profile-username").value = username;

document.getElementById("edit-profile-btn").addEventListener("click", () => {
    const newUsername = document.getElementById("edit-profile-username").value;
    const newEmail = document.getElementById("edit-profile-email").value;
    const newPassword = document.getElementById("edit-profile-password1").value;
    const confirmPassword = document.getElementById("edit-profile-confirm-password2").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
    }
});