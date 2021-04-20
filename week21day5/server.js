const express = require('express');
const app = express();
let counter = 0;

app.get('/', (req, res) => {
    counter++
    res.send(`<h1>You have visited here ${counter} times</h1>`)
})

app.get('/reset', (req,res) => {
    res.send(`your counter is reset to ${counter}`)
    counter = 0;
})



app.listen(3000, () => {
    console.log("server is connected")
})