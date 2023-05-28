const express = require("express");

const adminroute=express.Router();

adminroute.use('/addproduct', (req, res, next) => {
    res.send('<form action="/product" method="post">' +
      '<input type="text" name="productName" placeholder="Enter product name" required><br>' +
      '<input type="text" name="productSize" placeholder="Enter product size" required><br>' +
      '<button type="submit">Add Product</button></form>');
  });
module.exports=adminroute;