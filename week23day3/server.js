const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})