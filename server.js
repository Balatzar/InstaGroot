// server.js

// set up ========================
var express         = require('express');
var app             = express();                  // create our app w/ express
var mongoose        = require('mongoose');        // mongoose for mongodb
var morgan          = require('morgan');          // log requests to the console (express4)
var bodyParser      = require('body-parser');     // pull information from HTML POST (express4)
var methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)
var database        = require('./config/database.js');

// load the config
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({extended: 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==========================

require('./app/routes/userRoute.js')(app);
require('./app/routes/postRoute.js')(app);
require('./app/routes/conversationRoute.js')(app);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
