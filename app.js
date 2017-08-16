const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console, using Morgan
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//All routes will send this message.
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World!!',
}));

module.exports = app;