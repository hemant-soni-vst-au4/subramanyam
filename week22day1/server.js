const express = require('express');
const app = express();
// const data = require('./user.json')

const user = [
    {
        "id": 1,
        "username": "rahul",
        "age": 25
    },
    {
        "id": 3,
        "username": "hemant",
        "age": 26
    }
]

const PORT = 3000;



app.get('/userinfo', (req, res) => {
    let username = req.query.username;
    let age = req.query.age;
    let id = req.query.id;    
  let output = user.filter(data => data.username === username );
  console.log(output)
})


app.listen(PORT, () => {
    console.log(`App is connected with ${PORT}`)
})