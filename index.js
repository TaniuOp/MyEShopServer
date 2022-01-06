// Import basic elements required  
const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// GENERAL SETUP
app.use(cors());
app.set('port', 3000);


app.listen(app.get('port'), () => {
    console.log('Server connected and listening port: ' + app.get('port'))
    // Listen to the previous port defined 
});

//setting the bodyparser so it can properly handle the requests 
app.use(bodyParser.json({ limit: "20mb", extended: true })) //we are going to be sendig some images that have to be limited in size 
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))

// ROUTES  
app.use('/', productsRoutes);
