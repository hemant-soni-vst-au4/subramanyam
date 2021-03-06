const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const exphbs = require('express-handlebars');
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/post/:postId', async(req, res) => {
    const postId = req.params.postId;
    console.log("postId", postId);
    const resultPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response);
    const resultComment = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response);
    console.log("comment", resultComment);
    res.render('post', { 
        post : resultPost.data,
        comment : resultComment
    });
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})