const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    type : {
        type: String,
        required: true,
    
    },
    descript : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    }
  
})

const services = mongoose.model('services', schema);
module.exports = services;