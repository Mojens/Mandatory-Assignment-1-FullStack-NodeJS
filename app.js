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


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${port}`);
});