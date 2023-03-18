import express from 'express';
import pageGenerator from './util/pageGenerator.js';
const app = express();
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

app.get('/callback-functions/',(req, res) => {
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


// Rest API

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




app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});