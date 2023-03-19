import fs from "fs";

function renderPage(page, config = {}) {

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "")
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()}`);

    return navbar + page + footer;
};

function renderAdminPage(page, config = {}) {

    const adminNavbar = fs.readFileSync("./public/components/admin-nav-bar/admin-nav-bar.html").toString()

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "")
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()}`);

    return navbar + page + adminNavbar + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString()
};

export default {
    renderPage,
    readPage,
    renderAdminPage
};