// ROUTES

var Todo = require('./models/todo.js');
var User = require('./models/user.js');
var List = require('./models/list.js');

// expose the routes to our app with module.exports

module.exports = function(app) {
  
  /*-----TODO CRUD-----*/
  
  // get all todos
  app.get('/api/todos/all', function(req, res) {
    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });

  // get all todos from a list
  app.get('/api/todos', function(req, res) {
    var params = JSON.parse(req.headers.params);
    Todo.find({"list": params.list}, function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
  

  // create todo and get all the todos
  app.post('/api/todos', function(req, res) {
    Todo.create({
      text: req.body.text,
      type: "todo",
      list: req.body.list
    }, function(err, todo) {
      if (err)
        res.send(err);
      // get and return all the todos
      Todo.find({"list": req.body.list}, function(err, todos) {
        if (err)
          res.send(err);
        res.json(todos);
      });
    });
  });

  // delete a todo
  app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id: req.params.todo_id
    }, function(err, todo) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });
  
  /*-----LIST CRUD------*/
  
  // get all lists
  app.get('/api/lists', function(req, res) {
    List.find({"type": "list"}, function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
  
  // create a list
  app.post('/api/lists', function(req, res) {
    List.create({
      text: req.body.text,
      type: "list"
    }, function(err, todo) {
      if (err)
        res.send(err);
      List.find({"type": "list"}, function(err, todos) {
        if (err)
          res.send(err);
        res.json(todos);
      });
    });
  });

  // delete a list
  app.delete('/api/lists/:list_id', function(req, res) {
    List.remove({
      _id: req.params.list_id
    }, function(err, todo) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });
  
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
  
  app.delete('/api/users/:user_id', function(req, res) {
    console.log(req.params.user_id);
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });
  
  app.put('/api/users/:id', function(req, res){
    console.log(req.body.username)
    console.log(req.params.id)
      User.update({
          _id: req.params.id
      }, {$set:
          {username: req.body.username}, 
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

};