var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/memecoinlist.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/memecoinlist.com/fullchain.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpsServer = https.createServer(credentials, app);

app.get('/', function (req, res) {
  res.send('Hello NodeJS with SSL')
})

httpsServer.listen(3000);
console.log('NodeJS is running on port 3000');
