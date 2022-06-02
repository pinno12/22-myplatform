const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const nunjucks = require('nunjucks');

var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db2 = require('./models');



passport.use(new Strategy(
  function(username, password, cb) {
    db2.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));



passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db2.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


const app = express()

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));



app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


app.get("/level", require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
  res.render("level", { model: {} });
});


app.get('/login',
  function(req, res){
    res.render('login');
  }
  );
  
  app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    if (req.user.username == '1'){
      console.log(req.user.username)
      res.redirect('/');

      
    }else{
      res.redirect('level');
    }
    
  });
  
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });


  // app.get("/",require('connect-ensure-login').ensureLoggedIn(), function (req, res) {
  //   res.render('index',{ user: req.user });
  //  });
  

   app.get("/", function (req, res) {
    res.render('index',{ user: req.user, title : 'About - WISDOM' });
   });
  
   app.get("/about", function (req, res) {
    res.render('index',{ user: req.user, title : 'About - WISDOM' });
   });

   app.get("/sequence-collector", function (req, res) {
    res.render('sequence-collector',{ user: req.user, title: 'Sequence collector - WISDOM' });
   });

  

// ejs template engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// nunjucks like jinja




app.listen(8080, () => {
    console.log("다음 주소에 연결되었어요( http://localhost:8080/ ) !");
});


