var express = require('express');
var app = express();
const all = require("everyday-fun");
var randomColor = require('randomcolor'); 
var color = randomColor();

var port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Node")
})

app.get('/joke', (req,res) => {
    res.send(all.getRandomJoke())
})

app.get('/color', (req,res) => {
    res.send(color)
})

app.get('/date', (req,res) => {
    console.log(Date.now())
})

app.get('/riddle', (req,res) => {
    res.send(all.getRandomRiddle())
})


app.get('/quote', (req,res) => {
    res.send(all.getRandomQuote())
})

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})