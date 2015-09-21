var appointments = require('../server/controllers/appointments.js');
// var topics = require('../server/controllers/topics.js');
// var posts = require('../server/controllers/posts.js');
// var comments = require('../server/controllers/comments.js');
//this is our routes.js file located in the /config/routes.js
//This is where we define all of our routing rules
// we will have to require this in the server.js file (pass it app!)
module.exports = function(app){
	app.post('/addAppointment', function(req,res){
		// console.log(req.body);
		appointments.add(req,res);
	})
	app.get('/getAppointments', function(req,res){	
		appointments.show(req,res);		
	});
	app.post('/cancelAppointment', function(req, res){
		console.log(req.body);
		console.log('in the cancel route');
		appointments.cancel(req,res);
	});
	// app.post('/remove', function(req, res){
	// 	console.log("haha");
	// 	console.log(req.body._id);
	// 	customers.remove(req,res);
	
	// });
	// 	app.get('/topics', function(req,res){	
	// 	topics.show(req,res);		
	// });
	// app.post('/addTopic', function(req, res){
	// 	// console.log("hee", req.body);
	// 	topics.add(req,res);
	// });

	// app.get('/Posts', function(req,res){	
	// 	posts.show(req,res);		
	// });
	// app.post('/Posts', function(req, res){
	// 	console.log(req.body.name);
	// 	console.log('in the route');
	// 	posts.add(req,res);
	// });
	// app.get('/Comments', function(req,res){	
	// 	comments.show(req,res);		
	// });
	// app.post('/Comments', function(req, res){
	// 	console.log(req.body.name);
	// 	console.log('in the route');
	// 	comments.add(req,res);
	// });
};

