app.controller('appointmentcontroller', function ($scope,  $location, mainfactory){
         mainfactory.getAppointments(function(data){
      $scope.appointments = [];
    var current = new Date ();
        console.log(current);
        for (var i = 0; i < data.length; i ++){
          console.log("hehre", new Date(data[i].date));
          if (new Date(data[i].date) >= current){
            $scope.appointments.push(data[i]);
          }
        }
            // $scope.appointments = data;
            // console.log("appot#", $scope.appointments);
      });
var num = 0;
         // console.log(logged_user);
         $scope.logged_user = logged_user;
         // console.log("lol", $scope.logged_user);
          $scope.addAppointment = function(){
            $scope.new_appointment.patient = logged_user;
            console.log("date formate", new Date($scope.new_appointment.date));
            
            // console.log("num", $scope.appointments);
            //  console.log("33", new Date($scope.new_appointment.date));
                // console.log("44", new Date($scope.appointments[j].date));


              for(var j = 0; j < $scope.appointments; j++){
                console.log("in j");
                console.log("33", new Date($scope.new_appointment.date));
                console.log("44", new Date($scope.appointments[j].date));
                if (new Date($scope.new_appointment.date) == new Date($scope.appointments[j].date)) {num= num +1;
                  console.log(num);
                }
              }

              // console.log($scope.new_appointment);
              // console.log($scope.new_appointment.time.getUTCHours());
                  if (new Date($scope.new_appointment.date)<new Date()){
                  $scope.err = {err: " Future date pls!"}; }
                  else if(1 < $scope.new_appointment.time.getUTCHours() && $scope.new_appointment.time.getUTCHours() < 16){
                    $scope.timeerr = {timeerr: "time needs to between 8Am and 5 Pm!"}; 
                  }
                  else if (num >=3)
                  {
                  $scope.numerr = {numerr: "more than 3 appoints on that day"}; 
                  }                 
                  else{
                  mainfactory.addAppointment($scope.new_appointment, function(output){ 
                  // console.log("controller", output);
                  $scope.appointments.push(output);
                 $scope.new_appointment={};
                   $location.path("/");
                // $location.path("/guidelogin/" + output._id);
                  });
                }
              //   }
            }

  $scope.cancelAppointment = function(appointment){
    console.log(appointment);
    mainfactory.cancelAppointment(appointment, function(data){
      // console.log(data);
       $scope.appointments = [];
        current = new Date ();
         for (var i = 0; i < data.length; i ++){
          console.log("hehre", new Date(data[i].date));
          if (new Date(data[i].date) >= current){
            $scope.appointments.push(data[i]);
          }
        }
  // $scope.appointments = output;
     $location.path("/");
    })
  }

});



