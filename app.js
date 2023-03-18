import express from 'express';
import path from 'path';
import { loginPage, frontPage, variablesPage } from './util/pageGenerator.js';
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(frontPage);
});

app.get('/login/', (req, res) => {
    res.send(loginPage);
});     

// JavaScript

app.get('/variables/', (req, res) => {
    // res.sendFile(path.resolve('public/pages/javascript/variables/variables.html'));
    res.send(variablesPage);
});

app.get('/clean-code/', (req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/clean-code/clean-code.html'));
});

app.get('/variables-functions/', (req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/variables-functions/variables-functions.html'));
});

app.get('/callback-functions/',(req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/callback-functions/callback-functions.html'));
});

app.get('/loops/', (req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/loops/loops.html'));
});

app.get('/time/', (req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/time/time.html'));
});

// Node.js

app.get('/nodejs/', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/intro-to-node/intro-to-node.html'));
});

app.get('/express/', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/express/express.html'));
});

app.get('/html-express/', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/html-express/html-express.html'));
});

app.get('/package-json', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/package-json/package-json.html'));
});

app.get('/server-rendering', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/server-rendering/server-rendering.html'));
});

app.get('/client-server-redirection', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/client-vs-server-redirection/client-vs-server-redirection.html'));
});

app.get('/type-module', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/commonjs-vs-nodejs-type-module/commonjs-vs-module.html'));
});


// Rest API

app.get('/api-convention/', (req, res) => {
    res.sendFile(path.resolve('public/pages/rest-api/api-convention/api-convention.html'));
});

app.get('/crud/', (req, res) => {
    res.sendFile(path.resolve('public/pages/rest-api/crud/crud.html'));
});

app.get('/fetch/', (req, res) => {
    res.sendFile(path.resolve('public/pages/rest-api/fetch/fetch.html'));
});

app.get('/get-request/', (req, res) => {
    res.sendFile(path.resolve('public/pages/rest-api/get-request/get-request.html'));
});


// Deployment

app.get('/deployment/', (req, res) => {
    res.sendFile(path.resolve('public/pages/deployment/deployment.html'));
});







app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});