// app/models/post.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
  photo: String
});