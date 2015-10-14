// app/models/user.js

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: String,
  password: String,
  type: String
});