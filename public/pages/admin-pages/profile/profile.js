const username = localStorage.getItem("username");
const email = localStorage.getItem("email");

document.getElementById("profile-email").value = email;
document.getElementById("profile-username").value = username;