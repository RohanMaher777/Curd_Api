const express = require('express');
const { getUsers, getUser, postUser, deleteUser, patchUser} = require('../controller/user.controller');

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({message: "Hello"})
})

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', postUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', patchUser);


module.exports = router 