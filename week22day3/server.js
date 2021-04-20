const express = require('express');
const app = express();
const axios = require('axios');

app.get('/postWithComment', async (req, res) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments')
    const newUser = []
    for (i = 0; i < 100; i++) {
        newUser.push(posts.data[i])
        newUser[i].comments = []
        start = 5*i
        end = start + 5
        for (start; start < end; start++){
            newUser[i].comments.push(comments.data[start])
        }
    }
    res.send(newUser)
})

app.listen(3000, () => {
    console.log('App is running on 3000')
})