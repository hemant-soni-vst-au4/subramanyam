const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3000;
const arr = [];

app.use(express.urlencoded());
app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about', {data : arr })
})

app.post('/data', (req, res) => {
    const data = req.body;
    arr.push(data);
    res.redirect('/about');
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
});