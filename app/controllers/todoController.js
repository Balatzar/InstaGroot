// CONTROLLER TODO

var Todo = require('../models/todo.js');

module.exports = function(app) {

	app.get('/todos', function(req, res) {
		Todo.find(function (err, data) {
			res.json(data); 
		});
	});

	app.get('/todos/:id', function(req, res) {
		Todo.find({
			_id: req.params.id
		},function (err, data) {
			res.json(data); 
		});
	});

	app.post('/todos', function(req, res){
		Todo.create({
			description: req.body.message
		}, function(){
			res.sendStatus(200);
		})
	});

	app.put('/todos/:id', function(req, res){
		Todo.update({
			_id: req.params.id
		}, {$set:
			{description: req.body.message}, $inc: {__v: 1}
		}, {overwrite: true}, function(){
			res.sendStatus(200);
		})
	});

	app.delete('/todos/:id', function(req, res){
		Todo.remove({
			_id: req.params.id
		}, function(){
			res.sendStatus(200);
		})
	});

}
