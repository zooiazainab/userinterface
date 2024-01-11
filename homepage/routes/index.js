const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.render('homepage')
});
module.exports= route;