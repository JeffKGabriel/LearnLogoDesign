const express = require('express')
const path = require('path')

const site = express()
const server = require('http').Server(site)


site.use('/', express.static(path.resolve(__dirname, 'dist')))

server.listen(80, () => {
  console.log('site served on port :80')
})

//serve api

let api = require('./api/index');
let router = require('./api/router');

api.use('/api', router);
api.listen(8888);
console.log("api started on port :8888")

module.exports = api;


// socketIO active users


const io = require('socket.io')(server);

let numClients = 0
let maxUsers = 0

console.log("uhh",io.sockets.clients().length)


io.on('connection', (socket) => {
  numClients++


  console.log('Connected clients:', numClients)


  if(numClients > maxUsers){
    maxUsers = numClients;
    console.log("max users today = ", maxUsers)
  }

  io.emit('stats', { numClients, maxUsers })


  socket.on('disconnect', () => {
    numClients--;
    io.emit('stats', { numClients })

    console.log('Connected clients:', numClients)
  });

});


setInterval(() => {
  console.log(Date.now());
  console.log("numClients",numClients)
  console.log("maxUsers",maxUsers);
}, 5 * 1000);


//ssl
/*
var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/fullchain.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/chain.pem')
}

var server = https.createServer(options, site);
*/


// this http redirect works
/*
var redirectApp = express () ,
redirectServer = http.createServer(redirectApp);

redirectApp.use(function requireHTTPS(req, res, next) {
  if (!req.secure) {
    console.log("redirect 80 to ssl : " + req.url);
    //console.log("code = " + req.query.code);
    //return res.redirect('https://' + req.headers.host + req.url);
    res.redirect('https://yoursitehere.xyz'+ req.url);
  }
  next();
})

redirectServer.listen(80);

*/


// serve site
/*
site.use('/', express.static(path.resolve(__dirname, 'dist')));

server.listen(443, function () {
  console.log('site served on port :80');
})
*/
