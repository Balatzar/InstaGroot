var Conversation = require('../models/conversation.js');
var Message = require('../models/message.js');

module.exports = function(app) {

  /*CRUD CONVERSATION*/

  // create conversation
  app.post('/api/conversations', function(req, res) {
    Conversation.create({
    }, function(err, conv) {
      if (err)
        res.send(err);
      var authors = req.body.authors;
      for (var i = 0; i < authors.length; ++i) {
        console.log(authors[i])
        Conversation.findByIdAndUpdate(
        conv._id,
        {$push: {"people": authors[i]}},
        function(err, conv) {
          if (err)
            console.log(err);
          console.log(conv);
        }
        )
      }
      var messageModel = new Message();
      messageModel.author = req.body.message.author;
      messageModel.text = req.body.message.text;
      conv.messages.push(messageModel);
      conv.save();
      res.status(200).end();
    });
  })

  app.post('/api/conversations/user', function(req, res) {
    Conversation.find({people: req.body.search}, function(err, conversations) {
      if (err)
        res.send(err);
      res.json(conversations);
    });
  });

}
