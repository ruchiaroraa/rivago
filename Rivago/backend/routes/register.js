const express = require('express');
const ruser = require('../schema/registerModal')
 const route = express.Router();

const mongoose = require('mongoose')
const url = '/user'


route.get('/showuser',async(req,res)=>{
    try {
        const data = await ruser.find()
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

route.post('/adduser',async(req,res)=>{
    const mydata = req.body
    const data = new ruser(mydata);

    try {
        await data.save();
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = route