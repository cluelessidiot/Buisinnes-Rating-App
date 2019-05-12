module.exports = (app) => {
    
    app.get('/',(req,res,next) =>{
    res.render('index');
});
   app.get('/signup',(req,res) =>
          {res.render('user/signup');
          });
}