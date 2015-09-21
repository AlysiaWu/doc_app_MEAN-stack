var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = (function(){
return {
	show:function(req, res){
		Appointment.find({}, function(err, results){
			if (err){
				console.log(err);
			}else {
				res.json(results);
			}
		})
	},
	add:function(req, res){
		var new_appointment = new Appointment(req.body);
			new_appointment.save(function(err, results){
			if(err){
				console.log("ERROR");
			}else{
				
				res.json(results);
			}
		})
	}, 
	 cancel:function(req, res){
	 	console.log("backedn", req.body);
			Appointment.remove(req.body, function(err, results){
			if(err){
				console.log("ERROR");
			}else{	
			console.log("kk", results);		
				res.send("success");
			}
		})
	}
	// showone:function(req,res){
	// 	// console.log("showone");
	// 	// console.log(req.params.id);
	// 	// Guide.findOne({_id:req.params.id}).populate('reviews').exec(function(err, guide){

	// 	// 	console.log('inshowone');
	// 	// 	console.log(guide);
	// 	// 	res.json(guide);
	// 	// })
	// 	Guide.findOne({_id:req.params.id}, function(err, guide){
	// 		if(err){
	// 			console.log(err);
	// 		}else {
	// 			// con sole.log(guide);
	// 			res.json(guide);
	// 		}
	// 	});

	// }, 
	// searchGuides:function(req,res){
	// 	// console.log(req.body);
	// Guide.find(req.body, function(err, result){
	// 	if(err){
	// 			console.log(err);
	// 		}else {
	// 			// console.log(guide);
	// 			res.json(result);
	// 		}	
	// 	});
	// }, 
	// login: function(req, res){
	// 	// console.log(req.body);
	// Guide.find(req.body, function(err, result){
	// 		if(err){
	// 			console.log(err);
	// 		}else {
	// 			// console.log(result);
	// 			res.json(result);
	// 		}

	// 	})

	// }

	}

})();