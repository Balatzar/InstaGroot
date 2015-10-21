// app/models/post.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
  title: String,
  author: String,
  description: String,
  tags: String,
  created_at: {type: Date, default: new Date()},
  photo: String
});