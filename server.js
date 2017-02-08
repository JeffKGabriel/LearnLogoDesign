var express = require('express');
var path = require('path');

// serve site
var site = express();
site.use('/', express.static(path.resolve(__dirname, 'dist')));

site.listen(80, function () {
  console.log('site served on port :80');
})


//serve api

var api = require('./api/index');
var router = require('./api/router');

api.use('/api', router);
api.listen(8888);
console.log("api started on port :8888");

module.exports = api;
