const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Hello Everyone</h1>`)
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/survey', (req, res) => {
    let data = req.body;
    console.log("data", data);
    res.redirect('/')
})



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})