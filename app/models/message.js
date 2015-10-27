// app/models/message.js

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  author: String,
  text: String,
  created_at: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Message', messageSchema);
