import express from 'express';
const app = express();
const port = 3000;
import users from './db.js';

app.use(express.urlencoded());
app.use(express.json());

app.get('/api/users', (req, res) => {
    res.status(200).send({ 
        success : true,
        message : "app is connected properly",
        users : users
    })
})

app.post('/api/users', (req, res) => {
    // get body from request
    if(!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        })
    } else if(!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'body is required'
        })
    }
    const newUser = {
        userId : 1,
        id : users.length+1, 
        title : req.body.title,
        body : req.body.description
    }
    users.push(newUser);
    return res.status(201).send({
        success : 'true',
        message : ' user has been added',
        newUser
    })
})
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users.map((user) => {
        if (user.id === id) {
            return res.status(200).send({
                success : 'true',
                message : 'User is retrived',
                user
            })
        }
    })
    return res.status(404).send({
        success : 'false',
        message : 'User is not retrived'        
    })
})




app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})