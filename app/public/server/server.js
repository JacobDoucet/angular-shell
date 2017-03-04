var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var nconf = require('nconf');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

nconf.file({ file : __dirname + '/config/' + app.get('env') + '.json'});
var serverPort = //nconf.get('serverPort');
                  3000;

app.use(bodyParser.urlencoded({
  extended : false
}));

app.use(cookieParser);

app.use(expressSession({
  secret : 'secret',
  resave : false,
  saveUninitialized : false
}));

app.get('/', function(req, res){
  console.log("Hit default");
  res.send("Helloooooo!");
});

app.use(express.static(__dirname + "web/assets"));

app.listen(serverPort)
console.log("APP (env : " + app.get('env') + ") listening on port " + serverPort);
