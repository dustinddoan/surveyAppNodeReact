const mongoose = require('mongoose');
// const Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0}
})
// table users, use schema userSchema 
mongoose.model('users', userSchema);