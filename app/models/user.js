// app/models/user.js

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  name: String,
  lastname: String,
  username: String,
  password: String,
  type: String
});