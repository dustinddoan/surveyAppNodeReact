const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
const bodyParser = require('body-parser')
require('./models/User')
require('./services/passport')
require('./models/Survey')

mongoose.connect(keys.mongoURI)

const app = express();
// app.use middleware
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveryRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // express will serve production asset like main.js file, or main.css
  app.use(express.static('client/build'))

  // express will server up index.html if it doesnot recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
