// ROUTES

var List = require('../models/list.js');

// expose the routes to our app with module.exports

module.exports = function(app) {
  
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
};