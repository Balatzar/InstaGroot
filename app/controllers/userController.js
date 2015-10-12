// CONTROLLER USER

var User = require('../models/user.js');

module.exports = function(app) {

  app.post('/users', function(req, res) {
    User.create({
      username: req.body.username,
      name: req.body.name,
      firstname: req.body.firstname,
      password: req.body.password,
      age: req.body.age
    }, function() {
      res.sendStatus(200);
    })
  });

  app.get('/users', function(req, res) {
    User.find(function (err, data) {
      res.json(data); 
    });
  });

  app.get('/users/:id', function(req, res) {
    User.find({
      _id: req.params.id
    },function (err, data) {
      res.json(data); 
    });
  });
}