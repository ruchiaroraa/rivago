const express = require('express');
const payment = require('../schema/payModal')
 const route = express.Router();

const mongoose = require('mongoose')
const url = '/payment'


route.get('/showpayment',async(req,res)=>{
    try {
        const data = await payment.find()
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

route.post('/addpayment',async(req,res)=>{
    const mydata = req.body
    const data = new payment(mydata);

    try {
        await data.save();
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

route.put('/edit/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const editdata = new payment(data)
    try {
        await payment.updateOne({_id:id},editdata)
        res.json(editdata)
    } catch (error) {
        res.send(error)
    }
})


route.delete('/deldata/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const deletedata = new payment(data)

 try {
     await payment.deleteOne({_id:id},deletedata)
     res.json(deletedata)
 } catch (error) {
     console.log(error)
     res.send(error)
 }
})

module.exports = route