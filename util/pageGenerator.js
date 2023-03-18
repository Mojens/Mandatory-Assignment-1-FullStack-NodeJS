import templateEngine from "./templateEngine.js";


export const frontPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/frontpage/frontpage.html"), {
    tabTitle: "Documentation"
});

export const loginPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/auth/auth.html"), {
    tabTitle: "Login",
});

export const variablesPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables/variables.html"), {
    tabTitle: "Variables",
});












