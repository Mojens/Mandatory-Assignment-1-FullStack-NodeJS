import templateEngine from "./templateEngine.js";


/* Front Page */
const frontPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/frontpage/frontpage.html"), {
    tabTitle: "Documentation"
});

/* Login Page */
const loginPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/auth/auth.html"), {
    tabTitle: "Login",
    scriptLink: `<script src="/pages/auth/displayChange.js" type="module"></script>`
});

/* JavaScript */

const variablesPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables/variables.html"), {
    tabTitle: "Variables",
});

const cleanCodePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/clean-code/clean-code.html"), {
    tabTitle: "Clean Code & Code Conventions",
});

const variablesFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables-functions/variables-functions.html"), {
    tabTitle: "Variables & Functions",
});

const callbackFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/callback-functions/callback-functions.html"), {
    tabTitle: "Callback & Functions",
});

const loopsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/loops/loops.html"), {
    tabTitle: "Loops",
});

const timePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/time/time.html"), {
    tabTitle: "Time",
});

/* Node.js */
const nodejsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/intro-to-node/intro-to-node.html"), {
    tabTitle: "Node.js",
});

const expressPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/express/express.html"), {
    tabTitle: "Express",
});

const htmlExpressPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/html-express/html-express.html"), {
    tabTitle: "HTML & Express",
});

const packageJsonPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/package-json/package-json.html"), {
    tabTitle: "package.json",
});

const serverRenderingPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/server-rendering/server-rendering.html"), {
    tabTitle: "Server Rendering",
});

const clientServerRedirectionPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/client-vs-server-redirection/client-vs-server-redirection.html"), {
    tabTitle: "Client vs Server Redirection",
});

const typeModulePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/commonjs-vs-nodejs-type-module/commonjs-vs-module.html"), {
    tabTitle: "CommonJS vs Node.js Type Module",
});

export default {
    frontPage,
    loginPage,
    variablesPage,
    cleanCodePage,
    variablesFunctionsPage,
    callbackFunctionsPage,
    loopsPage,
    timePage,
    nodejsPage,
    expressPage,
    htmlExpressPage,
    packageJsonPage,
    serverRenderingPage,
    clientServerRedirectionPage,
    typeModulePage

};








