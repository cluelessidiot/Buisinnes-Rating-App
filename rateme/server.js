var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
//express session api  
var session = require ('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var app = express();

//to create a data base,we use mongoose.connect() if we are using only one data base,if we want to use several connection we can use mongoose.createconnection
mongoose.connect('mongodb://localhost/rateme');
//we declare public folder as static ,so we have acces to allfolder inide it
app.use(express.static('public'));
app.engine('ejs',engine);
//view engine
app.set('view engine','ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(session({
    //used to sign session id to cookies,only session id is saved in cookie ,every other saved in db
    //adding secret allow session data to be used across different pages
    secret:'Thisismytestkey',
    resave:false,
    saveUninitialized: false,
   //without this store when we refresh our page data will be destroyed 
    store: new MongoStore({mongooseConnection:mongoose.connection })
}));

app.get('/',function(req,res,next){
    res.render('index');
})

app.get('/test',function(req,res,next){
    res.render('test');
})
app.listen(3000, function(){
    console.log('Listening to Port 3000');
}) 