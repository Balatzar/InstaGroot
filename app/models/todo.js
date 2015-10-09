// MODEL TODO

var mongoose = require('mongoose');
module.exports = mongoose.model('Todo', {description: {type:String, default: ''}});
