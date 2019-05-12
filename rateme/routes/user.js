module.exports = (app) => {
    
    app.get('/',(req,res,next) =>{
    res.render('index',{title: rateme || df});
});
   app.get('/signup',(req,res) =>
          {res.render('user/signup',{title: signup} );
          });
}