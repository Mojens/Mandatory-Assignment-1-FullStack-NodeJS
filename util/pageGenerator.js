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
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

const cleanCodePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/clean-code/clean-code.html"), {
    tabTitle: "JS | Clean Code & Code Conventions",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

const variablesFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/variables-functions/variables-functions.html"), {
    tabTitle: "JS | Variables & Functions",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

const callbackFunctionsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/callback-functions/callback-functions.html"), {
    tabTitle: "JS | Callback & Functions",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

const loopsPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/loops/loops.html"), {
    tabTitle: "JS | Loops",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

const timePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/javascript/time/time.html"), {
    tabTitle: "JS | Time",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});
});

/* Node.js */

const expressNodemonPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/express-and-nodemon/express-and-nodemon.html"), {
    tabTitle: "Node.js | Express & Nodemon",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const packageJsonPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/package-json/package-json.html"), {
    tabTitle: "Node.js | package.json",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const serverRenderingPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/server-rendering/server-rendering.html"), {
    tabTitle: "Node.js | Server Rendering",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const clientServerRedirectionPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/client-vs-server-redirection/client-vs-server-redirection.html"), {
    tabTitle: "Node.js | Client vs Server Redirection",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const typeModulePage = templateEngine.renderPage(templateEngine.readPage("./public/pages/nodejs/commonjs-vs-nodejs-type-module/commonjs-vs-module.html"), {
    tabTitle: "Node.js | CommonJS vs Node.js Type Module",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

/* Rest API */

const apiConventionPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/api-convention/api-convention.html"), {
    tabTitle: "API | Convention",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const crudPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/crud/crud.html"), {
    tabTitle: "API | CRUD",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const fetchPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/fetch/fetch.html"), {
    tabTitle: "API | Fetch",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
});

const getRequestPage = templateEngine.renderPage(templateEngine.readPage("./public/pages/rest-api/get-request/get-request.html"), {
    tabTitle: "API | GET Request",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css">`,
    scriptLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
                 <script>hljs.highlightAll();</script>`,
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
    scriptLink: `<script src="/pages/admin-pages/edit-profile/edit-profile.js" type="module"></script>`
});

const newDocPage = templateEngine.renderAdminPage(templateEngine.readPage("./public/pages/admin-pages/new-documentation-page/new-documentation-page.html"), {
    tabTitle: "New Documentation Page",
    cssLink: `<link href="/assets/css/adminNavbar.css" rel="stylesheet">`,
});

// error pages

const pageNotFound = templateEngine.renderPage(templateEngine.readPage("./public/components/error-pages/404.html"), {
    tabTitle: "404",
    cssLink: `<link href="/components/error-pages/404.css" rel="stylesheet">`,
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
    expressNodemonPage,
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
    newDocPage,
    pageNotFound,
};








