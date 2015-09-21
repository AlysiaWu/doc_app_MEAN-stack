var logged_user = prompt("Please enter your name to log in: ");
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'partials/home.html'
      })
      .when('/new_appointment',{
        templateUrl: 'partials/new_appointment.html'    
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory("mainfactory", function($http){
    var factory = {};
    var appointments = [];
      factory.getAppointments = function(callback) {
          $http.get('/getAppointments').success(function(output) {
            appointments = output;
            callback(appointments);
          });
        };
      

      factory.addAppointment = function(info, callback) {
        console.log('in add Appointmentin mainfactory');
        $http.post('/addAppointment',info).success(function(output) {
          console.log('new apppp', output);
          if (Array.isArray(output)){
            error(output);
          } 
          else {
            callback(output);
          }       
        });
      };

      factory.cancelAppointment = function (info, callback){
        // console.log(info);
        $http.post('/cancelAppointment', info).success(
          function(output){
            // console.log("cancelf", output);
            appointments.splice(appointments.indexOf(info), 1);
      callback(appointments);
          // callback(output);
        });
      };
      // factory.getGuides = function(callback) {
      //   $http.get('/guides').success(function(output) {
      //     guides = output;
      //     callback(guides);
      //   });
      // };

      // factory.getGuide = function(id, callback){

      //   $http.get('/guides/'+id).success(function(output) {
      //     guide = output;
      //     callback(guide);
      //   });
      // };
 //      factory.addGuide = function(info, callback) {
 //        $http.post('/addGuide',info).success(function(output) {
 //          console.log('new guide', output);
 //          if (Array.isArray(output)){
 //            error(output);
 //          } else {
 //            callback(output);
 //          }         
 //        });
 //      };
 //      factory.addR = function(info, callback){
 //        $http.post('/addR',info).success(function(output){
 //          callback(output);
 //        })
 //      };
 // factory.getR = function(info, callback){
 //  console.log(info, "lol");

 //        $http.post('/getR',{_guide:info}).success(function(output){
 //          callback(output);
 //        })
 //      };




return factory;
  }); 







