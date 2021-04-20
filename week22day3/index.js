const express = require("express");
const app = express();
const axios = require('axios');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>WEEK 22 day 3</h1>`)
})
app.get('/postWithComment', async (req, res) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const newUser = [];

    for (i = 0; i < 100; i++) {
        newUser.push(posts.data[i])
        newUser[i].comments = [];
        start = i
        end = start + 5
        for (start; start < end; start++) {
            newUser[i].comments.push(comments.data[start])
        }
    }
    res.send(newUser);

})

app.listen(PORT, () => {
    console.log(`App is connected on ${PORT}`)
})