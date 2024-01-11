const express = require('express');
const route = express.Router();
const ServicesModel = require('./collection'); // Use a different variable name here
const connect = require('./mongoconnect');

route.get('/', async (req, res) => {
    try {
        const servicesData = await ServicesModel.find({ type: 'body' }); // Use the correct variable name here
        res.render('bodyservices', { services: servicesData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = route;