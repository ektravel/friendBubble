const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const moment = require("moment");
const passport = require('passport'), 
LocalStrategy = require('passport-local').Strategy;
const APIroutes = require("./routes/API.js");
const User = require("./models/user.js");

const PORT = process.env.PORT || 3001;

//Define middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/friendBubble");

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

app.use("/api",APIroutes);

app.use(passport.initialize());

// =========================================================================
// passport session setup ==================================================
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


//Define Passport
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));



passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    // usernameField : 'email',
    // passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, username, password, done) {

    console.log('Passport local-sign up HIT!');
    console.log('username: ' + username);
    console.log('password:  ' + password);
    console.log('email:  ' + req.body.email);
    console.log(req.body);
    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.username' :  username }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false);            
                // return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.username    = username;
                newUser.password = newUser.generateHash(password);
                newUser.email = req.body.email;

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

    });

}));

// app.post("/signup", (req, res) => {
//     console.log(req.body);
//     console.log("POST signup hit");
//     // db.Plans.create(req.body).then(dbPlans => {
//     //     res.json(dbPlans);
//     // });
// });

app.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "api/landing",
    failureRedirect: "api/signup",
    failureFlash: false
}));

app.post('/login', passport
   .authenticate('local', {
    successRedirect: 'api/landing',
    failureRedirect: 'api/login',
    failureFlash: false })
);


// passport.use("local-signup", new LocalStrategy({
//     passReqToCallback: true
// },
// function(req, email,password, done){
//     process.nextTick(function(){
//         User.findOne({ 'local.email' :  email }, function(err, user) {if (err)
//             return done(err);
//             if (user) {
//                 return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//             } else {
//               const newUser = new User();
//               newUser.local.email    = email;
//                 newUser.local.password = newUser.generateHash(password);
//                 newUser.save(function(err) {
//                     if (err)
//                         throw err;
//                     return done(null, newUser);
//                 });


//     });
// }));



// app.use("*", function(req, res){
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

//Start the API server
app.listen(PORT, function(){
    console.log(`API Server now listening on port ${PORT}`);
});
