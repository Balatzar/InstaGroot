var Post = require('../models/post.js');
var Message = require('../models/message.js');

module.exports = function(app) {

  /*CRUD POST*/

  // create post
  app.post('/api/posts', function(req, res) {
    Post.create({
      author: req.body.author,
      description: req.body.description,
      photo: req.body.picture,
      filter: req.body.filter
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
  app.get('/api/posts/:id', function(req, res) {
    Post.find({"_id": req.params.id}, function(err, posts) {
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

  // get all posts of a user
  app.post('/api/posts/all', function(req, res) {
    Post.find({"author": req.body.author}, function(err, posts) {
      if (err)
        res.send(err);
      res.json(posts);
    });
  });

  // update all posts of a user
  app.put('/api/posts/all', function(req, res) {
   Post.find({author: req.body.oldUsername},
    function(err, posts) {
      if (err)
        res.send(err);
      for (var i = 0; i < posts.length; i++) {
        Post.findByIdAndUpdate(
          posts[i]._id,
          {author : req.body.username},
          function(err) {
            if (err)
              console.log(err)
            res.status(200).end();
          }
        )
      }
      res.json(posts);
    });
  });

  // post a message
  app.put('/api/posts/messages', function(req, res) {
    Post.findById(req.body.id, function(err, post){
      if (err)
        res.send(err);
      var messageModel = new Message();
      messageModel.author = req.body.author;
      messageModel.text = req.body.text;
      post.message.push(messageModel);
      post.save();
      console.log(post);
      res.json(post);
    });
  })

  //get all posts from a search
  app.post('/api/posts/search', function(req, res) {
    console.log(req.body)
    Post.find({tags: req.body.search}, function(err, posts) {
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
    });
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
  
  // update put like if user isn't already there
  app.put('/api/posts/like', function(req, res) {
     Post.findByIdAndUpdate(
      req.body.id,
      {$push: {"likes" :  req.body.user}},
      function(err, post) {
        if(err)
          res.send(err);
      res.json(post);
     })
  });

  // update unlike if user had already liked
  app.put('/api/posts/unlike', function(req, res) {
     Post.findByIdAndUpdate(
      req.body.id,
      {$pull: {"likes" :  req.body.user}},
      function(err, post) {
        if(err)
          res.send(err);
      res.json(post);
     })
  })

}
