//require express so that we can build an express app
var express = require('express');
//require path so that we can use path stuff like path.join
var path = require('path');
//instantiate the app
var bodyParser = require('body-parser');

var app = express();
//you must include the mongoose.js
require('./config/mongoose.js');
//set up a static file server that points to the 'client' directory
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./config/routes.js')(app);
app.listen(5678, function(){
	console.log('cool stuff on: 5678');

});