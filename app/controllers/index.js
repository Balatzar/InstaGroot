// CONTROLLERS

module.exports 	= function(app) {

	'use strict';
  	var fs   = require('fs');
  	var path = require('path');

  	fs.readdir('./app/controllers', loadControllers);

	function loadControllers(error, files) {
		if (error)
		  throw error;
		else
		  files.forEach(requireController);

		// application -------------------------------------------------------------
		app.get('*', function(req, res) {
			res.sendFile(path.join(__dirname, '../../public', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
		});

	}

	function requireController(file) {
		// remove the file extension
		var controller = file.substr(0, file.lastIndexOf('.'));
		// do not require index.js (this file)
		if (controller !== 'index') {
		  // require the controller
		  require('./' + controller)(app);
		}
	}
}
