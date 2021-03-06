// Importing Node modules and initializing Express
const express = require('express'),
      app = express(),
      router = require('./router'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config/main');

const database =   'mongodb://user:password@ds055525.mlab.com:55525/bitch'

// Database Setup
mongoose.connect(config.database);

// Import routes to be served
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);

// Start the server
app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');
