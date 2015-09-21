var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var AppointmentSchema = new mongoose.Schema({
	patient:String,
	date: Date,
	time: String,
	complain: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Appointment', AppointmentSchema);