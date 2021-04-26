const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})