// app/models/post.js

var mongoose = require('mongoose');
var Message = require('./message.js');

module.exports = mongoose.model('Post', {
  author: String,
  description: String,
  tags : [],
  created_at: {type: Date, default: new Date()},
  photo: String,
  filter: String,
  message: [Message.schema]
});
