//this is a config file that connects to MongoDB and loads all of our models for us. We do this here because we dont want to have to connect to the DB every time we require a model! 
var mongoose = require('mongoose');
//require file-system so that we can load, read, require all of the model files
var fs = require('fs');
//connect to the database
mongoose.connect('mongodb://localhost/appointments');
//specify the path to all of the models
var models_path = __dirname + '/../server/models';
//read all of the files in the models_path and for each one check if it is a javascript file before require it
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
		require(models_path + '/' + file);
	}
})