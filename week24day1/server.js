const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const exphbs  = require('express-handlebars');
let arr = [];
const handlebars = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');

const PORT = 3000;

app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/add', (req, res) => {
    const data = req.body;
    arr.push(data);
    res.redirect('/profile');
})

app.get('/profile', (req, res) => {
    console.log("arr", arr);
    res.render('profile', { data : arr });
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
