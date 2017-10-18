const mongoose = require('mongoose');
// const Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
})
// table users, use schema userSchema 
mongoose.model('users', userSchema);