const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname + '/static/about.html'))
})


app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname + '/static/contact.html'))
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})