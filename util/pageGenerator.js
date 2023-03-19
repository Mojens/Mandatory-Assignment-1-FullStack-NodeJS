import templateEngine from "./templateEngine.js";


/* Front Page */
const frontPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/frontpage/frontpage.html"), {
    tabTitle: "Documentation"
});

/* Login Page */
const loginPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/auth/auth.html"), {
    tabTitle: "Login",
    scriptLink: `
    <script src="/pages/auth/displayChange.js" type="module">
    </script><script src="/pages/auth/auth.js" type="module"></script>
    `,
    cssLink: `
    <link href="/pages/auth/auth.css" rel="stylesheet">
    `
});

/* JavaScript */

const variablesPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables/variables.html"), {
    tabTitle: "JS | Variables",
});

const cleanCodePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/clean-code/clean-code.html"), {
    tabTitle: "JS | Clean Code & Code Conventions",
});

const variablesFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables-functions/variables-functions.html"), {
    tabTitle: "JS | Variables & Functions",
});

const callbackFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/callback-functions/callback-functions.html"), {
    tabTitle: "JS | Callback & Functions",
});

const loopsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/loops/loops.html"), {
    tabTitle: "JS | Loops",
});

const timePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/time/time.html"), {
    tabTitle: "JS | Time",
});

/* Node.js */
const nodejsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/intro-to-node/intro-to-node.html"), {
    tabTitle: "Node.js",
});

const expressPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/express/express.html"), {
    tabTitle: "Node.js | Express",
});

const htmlExpressPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/html-express/html-express.html"), {
    tabTitle: "Node.js | HTML & Express",
});

const packageJsonPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/package-json/package-json.html"), {
    tabTitle: "Node.js | package.json",
});

const serverRenderingPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/server-rendering/server-rendering.html"), {
    tabTitle: "Node.js | Server Rendering",
});

const clientServerRedirectionPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/client-vs-server-redirection/client-vs-server-redirection.html"), {
    tabTitle: "Node.js | Client vs Server Redirection",
});

const typeModulePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/commonjs-vs-nodejs-type-module/commonjs-vs-module.html"), {
    tabTitle: "Node.js | CommonJS vs Node.js Type Module",
});

/* Rest API */

const apiConventionPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/api-convention/api-convention.html"), {
    tabTitle: "API | Convention",
});

const crudPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/crud/crud.html"), {
    tabTitle: "API | CRUD",
});

const fetchPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/fetch/fetch.html"), {
    tabTitle: "API | Fetch",
});

const getRequestPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/get-request/get-request.html"), {
    tabTitle: "API | GET Request",
});

/* Deployment */

const deploymentPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/deployment/deployment.html"), {
    tabTitle: "Deployment",
});

/* Admin pages */

const adminPanelPage = templateEngine.renderAdminPage(templateEngine.readPage("./public/pages/admin-pages/admin-panel/admin-panel.html"), {
    tabTitle: "Admin Panel",
    cssLink: `<link href="/assets/css/adminNavbar.css" rel="stylesheet">`,
});

const profilePage = templateEngine.renderAdminPage(templateEngine.readPage("./public/pages/admin-pages/profile/profile.html"), {
    tabTitle: "Profile",
    cssLink: `<link href="/assets/css/adminNavbar.css" rel="stylesheet">`,
    scriptLink: `<script src="/pages/admin-pages/profile/profile.js" type="module"></script>`,
});

const editProfilePage = templateEngine.renderAdminPage(templateEngine.readPage("./public/pages/admin-pages/edit-profile/edit-profile.html"), {
    tabTitle: "Edit Profile",
    cssLink: `<link href="/assets/css/adminNavbar.css" rel="stylesheet">`,
});

const newDocPage = templateEngine.renderAdminPage(templateEngine.readPage("./public/pages/admin-pages/new-documentation-page/new-documentation-page.html"), {
    tabTitle: "New Documentation Page",
    cssLink: `<link href="/assets/css/adminNavbar.css" rel="stylesheet">`,
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
    typeModulePage,
    apiConventionPage,
    crudPage,
    fetchPage,
    getRequestPage,
    deploymentPage,
    adminPanelPage,
    profilePage,
    editProfilePage,
    newDocPage
};








