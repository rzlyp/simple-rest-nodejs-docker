var express = require('express');
var halson = require('halson');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port, defaulting if nothing is specified in the env
var port = process.env.PORT || 8080;
// load app configurations from config.js
var config = require('./config/db');

// configure our connection to MongoDB
var mongoose = require('mongoose');
app.use('/api', require('./routes/index'));

mongoose.connect(config.db[app.settings.env]);

// Start the server
app.listen(port);
console.log('Running on port ' + port);
