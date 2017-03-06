var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var nconf = require('nconf');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

nconf.file({ file : __dirname + '/config/' + app.get('env') + '.json'});
var serverPort = nconf.get('serverPort');
                //3000;

app.use(bodyParser.urlencoded({
  extended : false
}));

app.use(cookieParser());

app.use(expressSession({
  secret : 'secret',
  resave : false,
  saveUninitialized : false
}));

app.use(express.static(__dirname.replace("\\>>server-path<<", "/>>app-path<<") + "/assets"));
app.use("/", express.static(__dirname.replace("\\>>server-path<<", "/>>app-path<<")));

app.listen(serverPort)
console.log(">>app-name<<");
console.log("   -listening on port : " + serverPort);
console.log("   -environment       : " + app.get('env'));
console.log("   -directory         : " + __dirname);
