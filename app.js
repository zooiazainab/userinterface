const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const session = require('express-session');


const homerouter = require('./homepage/routes/index.js');
const allservicesrouter = require('./services/routes/allservices.js');
const skinservicesrouter = require('./services/routes/skinservices.js');
const hairservicesrouter = require('./services/routes/hairservices.js');
const bodyservicesrouter = require('./services/routes/bodyservices.js');
const cartlistrouter = require('./cartlist/routes/index.js');




const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/homepage', express.static('./homepage/public'));

// Serve static files from "services/public"
app.use('/services', express.static('./services/public'));

app.use('/cartlist', express.static('./cartlist/public'));

app.set('views', [
    path.join(__dirname, 'homepage', 'views'),
    path.join(__dirname, 'services', 'views'),
    path.join(__dirname, 'cartlist', 'views')


]);

app.use('/', homerouter);
app.use('/allservices', allservicesrouter);
app.use('/skinservices', skinservicesrouter);
app.use('/hairservices', hairservicesrouter);
app.use('/bodyservices', bodyservicesrouter);
app.use('/cartlist', cartlistrouter);







PORT = 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});