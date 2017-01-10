var express = require('express');

var api = express();
var bodyParser = require('body-parser');

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

module.exports = api;
