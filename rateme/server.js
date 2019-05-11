var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require ('express-session');


var app = express();
//we declare public folder as static ,so we have acces to allfolder inide it
app.use(express.static('public'));
app.engine('ejs',engine);
//view engine
app.set('view engine','ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/',function(req,res,next){
    res.render('index');
})
app.listen(3000, function(){
    console.log('Listening to Port 3000');
}) 