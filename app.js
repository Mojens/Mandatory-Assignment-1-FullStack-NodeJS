import express from 'express';
import session from 'express-session'; // This does i can create a session for the user and store the user id in the session so i can check if the user is logged in or not
import pageGenerator from './util/pageGenerator.js';
import { userList, getNextId } from './util/users.js';
import nodemailer from 'nodemailer';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This is needed to be able to read the body of the request from the client in the post request 
app.use(session({
    secret: 'RETWEW123$&123!!6//8321%&/€#WW', // A long, random string used to sign the session ID cookie to prevent tampering or spoofing.
    resave: false, // Determines whether to save the session to the store on every request. true saves even if not modified, false saves only if modified.
    saveUninitialized: true //  Determines whether to create a session even if not modified during the request. true creates session even for anonymous users, false only creates if modified.
}));
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: 'keamohammadmnodejs@gmail.com',
        pass: 'msxcdacvcclglxyn'
    },
    secure: false
});
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(pageGenerator.frontPage);
});

app.get('/login/', (req, res) => {
    res.send(pageGenerator.loginPage);
});

// JavaScript

app.get('/javascript/variables/', (req, res) => {
    res.send(pageGenerator.variablesPage);
});

app.get('/javascript/clean-code/', (req, res) => {
    res.send(pageGenerator.cleanCodePage);
});

app.get('/javascript/callback-functions/', (req, res) => {
    res.send(pageGenerator.callbackFunctionsPage);
});

app.get('/javascript/loopsAndArray/', (req, res) => {
    res.send(pageGenerator.loopsAndArrayPage);
});

app.get('/javascript/time/', (req, res) => {
    res.send(pageGenerator.timePage);
});

app.get('/extra/tools/', (req, res) => {
    res.send(pageGenerator.toolsPage);
});

// Node.js

app.get('/nodejs/express-nodemon/', (req, res) => {
    res.send(pageGenerator.expressNodemonPage);
});

app.get('/nodejs/package-json', (req, res) => {
    res.send(pageGenerator.packageJsonPage);
});

app.get('/nodejs/server-rendering', (req, res) => {
    res.send(pageGenerator.serverRenderingPage);
});

app.get('/nodejs/client-server-redirection', (req, res) => {
    res.send(pageGenerator.clientServerRedirectionPage);
});

app.get('/nodejs/type-module', (req, res) => {
    res.send(pageGenerator.typeModulePage);
});


// Rest API - pages

app.get('/restapi/api-convention/', (req, res) => {
    res.send(pageGenerator.apiConventionPage);
});

app.get('/restapi/crud/', (req, res) => {
    res.send(pageGenerator.crudPage);
});

app.get('/restapi/fetch/', (req, res) => {
    res.send(pageGenerator.fetchPage);
});

app.get('/restapi/get-request/', (req, res) => {
    res.send(pageGenerator.getRequestPage);
});


// About git

app.get('/extra/git/', (req, res) => {
    res.send(pageGenerator.aboutGitPage);
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

app.post('/api/newpage/', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
        const config = {
            category: req.body.category,
            title: req.body.title,
            content: req.body.content,
            url: req.body.url
        }

        const createdPage = pageGenerator.createdPage(config);
        const endpoint = `/${config.category}/${config.url}/`;

        app.get(endpoint, (req, res) => {
            res.send(createdPage);
        });

        /*
        This code is for creating a new page and with a new endpoint.
        It works but because we dont have a database, the new page will be deleted when the server is restarted.
        */

        res.redirect(endpoint);
    } else {
        res.redirect('/login');
    }
});





// API

/* auth */

app.put('/api/users/:id', (req, res) => {
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


app.post('/api/auth/', (req, res) => {
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

app.post('/api/signup', (req, res) => {
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
        const mailData = {
            from: 'testMail@outlook.dk',
            to: email,
            subject: 'Login Details',
            text: `Welcome, this is your new account info\n username: ${username} \n password: ${password}`,
            html: `Welcome, this is your new account info<br> username: ${username} <br> password: ${password}`
        }
        transporter.sendMail(mailData, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
            res.redirect("/login");
        });
    }
});

app.post('/api/forgot-password/', (req, res) => {
    const clientEmail = req.body.forgotPasswordMail;
    const mailData = {
        from: 'testMail@outlook.dk',
        to: clientEmail,
        subject: 'Login Details',
        text: 'Login with username: Admin123 and password: test123',
        html: '<p>Login with username: Admin123 and password: test123</p>'
    };
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        res.redirect("/login");
    });
});

app.get('/logout/', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

/*
// this is commented out because otherwise the new route that will be created at "/api/newpage/" will not work.
// 404 - Page not found
app.get('*', function (req, res) {
    res.send(pageGenerator.pageNotFound);
});
*/

// Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${PORT}`);
});