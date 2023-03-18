import express from 'express';
import pageGenerator from './util/pageGenerator.js';
const app = express();
app.use(express.json());
const port = 8080;

const users = [
    { username: 'myusername', email: 'myemail@example.com', password: 'mypassword' },
    { username: 'myusername2', email: 'myemail2@example.com', password: 'mypassword2' },
    { username: 'myusername3', email: 'myemail3@example.com', password: 'mypassword3' }
];

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(pageGenerator.frontPage);
});

app.get('/login/', (req, res) => {
    res.send(pageGenerator.loginPage);
});

// JavaScript

app.get('/variables/', (req, res) => {
    res.send(pageGenerator.variablesPage);
});

app.get('/clean-code/', (req, res) => {
    res.send(pageGenerator.cleanCodePage);
});

app.get('/variables-functions/', (req, res) => {
    res.send(pageGenerator.variablesFunctionsPage);
});

app.get('/callback-functions/', (req, res) => {
    res.send(pageGenerator.callbackFunctionsPage);
});

app.get('/loops/', (req, res) => {
    res.send(pageGenerator.loopsPage);
});

app.get('/time/', (req, res) => {
    res.send(pageGenerator.timePage);
});

// Node.js

app.get('/nodejs/', (req, res) => {
    res.send(pageGenerator.nodejsPage);
});

app.get('/express/', (req, res) => {
    res.send(pageGenerator.expressPage);
});

app.get('/html-express/', (req, res) => {
    res.send(pageGenerator.htmlExpressPage);
});

app.get('/package-json', (req, res) => {
    res.send(pageGenerator.packageJsonPage);
});

app.get('/server-rendering', (req, res) => {
    res.send(pageGenerator.serverRenderingPage);
});

app.get('/client-server-redirection', (req, res) => {
    res.send(pageGenerator.clientServerRedirectionPage);
});

app.get('/type-module', (req, res) => {
    res.send(pageGenerator.typeModulePage);
});


// Rest API - pages

app.get('/api-convention/', (req, res) => {
    res.send(pageGenerator.apiConventionPage);
});

app.get('/crud/', (req, res) => {
    res.send(pageGenerator.crudPage);
});

app.get('/fetch/', (req, res) => {
    res.send(pageGenerator.fetchPage);
});

app.get('/get-request/', (req, res) => {
    res.send(pageGenerator.getRequestPage);
});


// Deployment

app.get('/deployment/', (req, res) => {
    res.send(pageGenerator.deploymentPage);
});

/* Admin panel */

app.get('/admin-panel/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        res.send(pageGenerator.adminPanelPage);
    } else {
        res.redirect('/login');
    }
});


// API

/* auth */
app.post('/auth/', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (user && user.password === password) {
        req.session.userId = user.username;
        res.redirect('/admin-panel');
    } else {
        res.send({
            error: 'Username or password is incorrect',
        });
    }
});

app.post('/signup', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (existingUser) {
        res.status(409).send({error : 'Sorry!! The username is already taken',
                            status : 409});
    } else {
        users.push({ username, email, password });
        res.status(200).send({succes : 'You have successfully signed up!',
                            status : 200});
    }
    console.log(users);
});

app.post('/forgot-password/', (req, res) => {

});


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});