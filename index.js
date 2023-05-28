const exp = require('constants');
const express=require('express')
const app=express()
const admin=require("./routes/admin");
const shop=require("./routes/shop");
const bodyParser = require('body-parser');
//const router=express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(admin)
app.use(shop)
app.use('/',(req,res,next)=>{
        res.send("Hello")
})
app.listen(3000);