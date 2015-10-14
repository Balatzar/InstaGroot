// ROUTES

var Todo = require('./models/todo.js');

// expose the routes to our app with module.exports

module.exports = function(app) {

  // get all todos
  app.get('/api/todos', function(req, res) {
    var params = JSON.parse(req.headers.params);
    Todo.find({"list": params.list}, function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
  
  // get all lists
  app.get('/api/lists', function(req, res) {
    Todo.find({"type": "list"}, function(err, todos) {
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
  
  app.post('/api/lists', function(req, res) {
    Todo.create({
      text: req.body.text,
      type: "list"
    }, function(err, todo) {
      if (err)
        res.send(err);
      Todo.find({"type": "list"}, function(err, todos) {
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
    })
  });

  // delete a todo
  app.delete('/api/lists/:list_id', function(req, res) {
    Todo.remove({
      _id: req.params.list_id
    }, function(err, todo) {
      if(err)
        res.send(err);
    })
  });

};