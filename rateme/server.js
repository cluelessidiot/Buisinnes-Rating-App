var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require ('express-session');
var app = express();
app.listen(3000, function(){
    console.log('Listening to Port 3000');
}) 