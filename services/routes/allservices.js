const express = require('express');
const route = express.Router();
const ServicesModel = require('./collection'); // Use a different variable name here
const connect = require('./mongoconnect');

route.get('/', async (req, res) => {
    try {
        const servicesData = await ServicesModel.find(); // Use the correct variable name here
        res.render('allservices', { services: servicesData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
route.post('/cartlist', async(req, res) => {
    try {
        // Assuming you have stored selected service IDs in the user session
        const selectedServiceIds = req.session.cart || [];
    
        // Retrieve the details of the selected services from the database
        const selectedServices = await ServicesModel.find({ _id: { $in: selectedServiceIds } });
    
        // Render the 'cartlist' template with the selected services
        res.render('cartlist', { selectedServices });
    
        // Alternatively, you can perform any other necessary actions, such as updating the database, calculating total price, etc.
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });

module.exports = route;
