const express = require("express");

const shop=express.Router();

shop.post('/product',(req,res,next)=>{
    `Product: ${req.body[0]}, Quantity: ${req.body[1]}`
next();
})

shop.get('/data',(req,res,next)=>{
    res.status(400).send('<h2>Page not found</h2>')
})
module.exports=shop

