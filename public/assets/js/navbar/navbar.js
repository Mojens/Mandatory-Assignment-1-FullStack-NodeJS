const loginBtn = document.getElementById("list-login-btn");
const adminPanelNavbar = document.getElementById("admin-panel-navbar");
const loggedInUser = document.getElementById("logged-in-user");


if (localStorage.getItem("token")) {
    loginBtn.innerHTML = DOMPurify.sanitize(`
<a class="nav-link" href="/logout"><button class="btn btn-outline-success"
type="submit" id="login-btn-navbar">Logout</button></a>
`);
    adminPanelNavbar.innerHTML = DOMPurify.sanitize(`
<a class="nav-link" href="/admin-panel">Admin panel</a>
`);
    loggedInUser.innerHTML = DOMPurify.sanitize(`
<a class="nav-link" href="/admin-panel">Logged in as: <br>${localStorage.getItem("username")}</a>
`);

} else {
    loginBtn.innerHTML = DOMPurify.sanitize(`
    <a class="nav-link" href="/login"><button class="btn btn-outline-success"
    type="submit" id="login-btn-navbar">Login</button></a>
    `);
    adminPanelNavbar.innerHTML = DOMPurify.sanitize(`
`);
    loggedInUser.innerHTML = DOMPurify.sanitize(`

`);
}


document.getElementById("login-btn-navbar").addEventListener("click", function () {
    if (loginBtn.innerText === "Logout") {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        window.location.href = "/login";
    }

});