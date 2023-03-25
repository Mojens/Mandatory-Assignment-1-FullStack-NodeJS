import express from 'express';
import session from 'express-session'; // This does i can create a session for the user and store the user id in the session so i can check if the user is logged in or not
import pageGenerator from './util/pageGenerator.js';
import { userList, getNextId } from './util/users.js';
const app = express();
app.use(express.json());
app.use(session({
    secret: 'RETWEW123$&123!!6//8321%&/€#WW', // A long, random string used to sign the session ID cookie to prevent tampering or spoofing.
    resave: false, // Determines whether to save the session to the store on every request. true saves even if not modified, false saves only if modified.
    saveUninitialized: true //  Determines whether to create a session even if not modified during the request. true creates session even for anonymous users, false only creates if modified.
}));
const port = 8080;

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

app.get('/loopsAndArray/', (req, res) => {
    res.send(pageGenerator.loopsAndArrayPage);
});

app.get('/time/', (req, res) => {
    res.send(pageGenerator.timePage);
});

// Node.js

app.get('/express-nodemon/', (req, res) => {
    res.send(pageGenerator.expressNodemonPage);
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

/* Admin Pages */

// Admin Panel
app.get('/admin-panel/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        res.send(pageGenerator.adminPanelPage);
    } else {
        res.redirect('/login');
    }
});

app.get('/admin/profile/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        res.send(pageGenerator.profilePage);
    } else {
        res.redirect('/login');
    }
});

app.get('/admin/edit-profile/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        res.send(pageGenerator.editProfilePage);
    } else {
        res.redirect('/login');
    }
});

app.get('/admin/new-doc-page/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        res.send(pageGenerator.newDocPage);
    } else {
        res.redirect('/login');
    }
});




// API

/* auth */

app.put('/users/:id', (req, res) => {
    const userId = req.session.userId;
    const id = Number(req.params.id);
    if (userId) {
        const user = userList.find(user => user.UUID === id);
        if (user) {
            if (req.body.username) {
                user.username = req.body.username; 
                console.log(req.body.username);
            }
            if (req.body.email) {
                user.email = req.body.email;
                console.log(req.body.email);
            }
            if (req.body.password) {
                user.password = req.body.password;
                console.log(req.body.password);
            }
            res.send({
                success: 'You have successfully updated your profile',
                status: 200
            });
        } else {
            res.status(404).send({
                error: 'User not found',
                status: 404
            });
        }
    } else {
        res.redirect('/login');
    }
});


app.post('/auth/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = userList.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (user && user.password === password) {
        req.session.userId = user.username;
        res.send({
            success: 'You have successfully logged in',
            status: 200,
            token: user.UUID,
            username: user.username,
            email: user.email,

        });
    } else {
        res.send({
            error: 'Username or password is incorrect',
            status: 401
        });
    }
});

app.post('/signup', (req, res) => {
    const UUID = getNextId();
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = userList.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (existingUser) {
        res.status(409).send({
            error: 'Sorry!! The username is already taken',
            status: 409
        });
    } else {
        userList.push({ UUID, username, email, password });
        res.status(200).send({
            succes: 'You have successfully signed up!',
            status: 200
        });
    }
});

app.post('/forgot-password/', (req, res) => {

});

app.get('/logout/', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


// 404 - Page not found
app.get('*', function (req, res) {
    res.send(pageGenerator.pageNotFound);
});


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});