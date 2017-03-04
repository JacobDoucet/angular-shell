var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var nconf = require('nconf');

nconf.file({ file : __dirname + '/config/' + app.get('env') + '.json'});
var serverPort = nconf.get('serverPort');

console.log("APP (env : " + app.get('env') + ") listening on port" + serverPort);
