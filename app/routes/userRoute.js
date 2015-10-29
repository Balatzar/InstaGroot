var User = require('../models/user.js');

module.exports = function(app) {

  /*-----USER CRUD-----*/

    // get all users
    app.get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  });

  // get one user
  app.get('/api/users/:username', function(req, res) {
    User.find({"username": req.params.username}, function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });

  // create user
  app.post('/api/users', function(req, res) {
    User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      type: "user"
    }, function(err, user) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

  // delete user
  app.delete('/api/users/:user_id', function(req, res) {
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });

  // update user
  app.put('/api/users/:user_id', function(req, res){
    User.update({
        _id: req.params.user_id
    }, {$set: {username: req.body.username,
              password: req.body.password,
              name: req.body.name,
              lastname: req.body.lastname},
        $inc: {__v: 1}
    }, {overwrite: true}, function(err){
      if (err)
        res.send(err);
      res.status(200).end();
    })
  });

//checkUser
  app.post('/api/login', function(req, res) {
    User.find({
      username: req.body.username,
      password: req.body.pwd
    }, function(err, user){
      if (err || user.length == 0)
          res.status(404).end();
      res.status(200).end();
    })
  });
}
