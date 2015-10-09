var mongoose = require('mongoose');
module.exports = mongoose.model('User', {
  username: {
    type:String, default: ''
  },
  name: {
    type:String, default: ''
  },
  firstname: {
    type:String, default: ''
  },
  age: {
    type:Number
  },
  password: {
    type: String
  }
});