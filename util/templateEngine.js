import fs from "fs";

function renderPage(page, config = {}) {

    const tableOfContents = fs.readFileSync("./public/components/table-of-contents/table-of-contents.html").toString()

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "")
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()}`);

    return navbar + tableOfContents + page + footer;
};

function renderAdminPage(page, config = {}) {

    const tableOfContents = fs.readFileSync("./public/components/table-of-contents/table-of-contents.html").toString()

    const adminNavbar = fs.readFileSync("./public/components/admin-nav-bar/admin-nav-bar.html").toString()

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "")
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()}`);

    return navbar + tableOfContents + page + adminNavbar + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString()
};

function createPage(config = {}) {

    const tableOfContents = fs.readFileSync("./public/components/table-of-contents/table-of-contents.html").toString()

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.title || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "")
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()}`);

    const title = config.title.replace(/\s/g, '');

    const createdPage = fs.writeFileSync(`./public/pages/${config.category}/${title}.html`, `<main>${config.content}</main>`)

    return navbar + tableOfContents + createdPage + footer;

}

export default {
    renderPage,
    readPage,
    renderAdminPage,
    createPage
};