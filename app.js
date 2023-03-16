import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'));
});

app.get('/login/', (req, res) => {
    res.sendFile(path.resolve('public/pages/auth/auth.html'));
});     

// JavaScript

app.get('/variables/', (req, res) => {
    res.sendFile(path.resolve('public/pages/javascript/variables/variables.html'));
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

app.get('/intro/nodejs/', (req, res) => {
    res.sendFile(path.resolve('public/pages/nodejs/intro-to-node/intro-to-node.html'));
})

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});