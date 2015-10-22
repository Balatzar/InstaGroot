var Post = require('../models/post.js');

module.exports = function(app) {
  
  /*CRUD POST*/
  
  // create post
  app.post('/api/posts', function(req, res) {
    Post.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      photo: req.body.picture
    }, function(err, post) {
      if (err)
        res.send(err);
      res.status(200).end();
      var tags = req.body.tags;
      for (i = 0; i < tags.length; ++i) {
        Post.findByIdAndUpdate(
        post._id,
        {$push: {"tags": tags[i]}},
        function(err, post) {
            console.log(err);
          }
        );
      }
    });
  });
  
  // get one post
  app.get('/api/posts/:post_id', function(req, res) {
    Post.find({"_id": req.params._id}, function(err, posts) {
      if (err)
        res.send(err);
      res.json(posts);
    });
  });
  
  // get all posts
  app.get('/api/posts', function(req, res) {
    Post.find(function(err, posts) {
      if (err)
        res.send(err);
      res.json(posts);
    });
  });
  
  // delete a post
  app.delete('/api/posts/:post_id', function(req, res) {
    console.log(req.params.post_id);
    Post.remove({
      _id: req.params.post_id
    }, function(err, post) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });
  
  // delete all posts
  app.delete('/api/posts', function(req, res) {
    console.log(req.params.post_id);
    Post.remove(function(err, post) {
      if(err)
        res.send(err);
      res.status(200).end();
    })
  });

}