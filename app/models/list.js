// app/models/list.js

var mongoose = require('mongoose');

module.exports = mongoose.model('List', {
  text : String,
  type : String
});
