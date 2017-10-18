// COMMIT THIS 
if (process.env.NODE_ENV === 'production') {
  // we are in production 
  module.export = require('./prod')
} else {
  // we are in dev 
  module.exports = require('./dev');
}