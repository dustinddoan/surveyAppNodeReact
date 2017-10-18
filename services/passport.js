const passport = require('passport');
const GoogleStrategry = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

// const User = mongoose.model('users')
// require('../models/User');
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})


passport.use(
  new GoogleStrategry({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id})
      .then((existingUser) => {
        if (existingUser) {
          done(null, existingUser)
          console.log('existingUser', existingUser)
        } else {
          new User({ googleId: profile.id})
            .save()
            .then(newUser => done(null, newUser))
        }
      })
  })
);