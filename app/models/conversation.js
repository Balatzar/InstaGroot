// app/models/conversation.js

var mongoose = require('mongoose');
var Message = require('./message.js');

module.exports = mongoose.model('Conversation', {
  messages: [Message.schema],
  created_at: {type: Date, default: new Date()},
  people: [String]
});
