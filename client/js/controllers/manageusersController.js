angular.module('app').controller('manageusersController', ['$state','$stateParams', 'commonService','manageusersService', 'getusersService', '$window', '$rootScope', '$scope','$location', '$http','$q','$localStorage',
function($state,$stateParams,commonService, manageusersService,getusersService, $window, $rootScope, $scope, $location, $http, $q, $localStorage) {

  $scope.manageusers=function(){
    var value = {
      role: $localStorage.role,
      accessToken:$localStorage.accessToken,
      id:$localStorage.id
    }
    getusersService.getusers(value).then(function(data){
      console.log(data);
      $scope.userdata=data;
    }).catch(function(data){

    });
  }

  $scope.getuser = function(id){
    var getvalue = {
    id : id,
    accessToken : $localStorage.accessToken
  }
  console.log(getvalue)
  manageusersService.getuser(getvalue).then(function(data){
    console.log(data)
    $scope.inputDetails= data.status[0];

  }).catch(function(data){

  });
}

$scope.update = function(marks) {
  var token= {
    marks:marks,
    accessToken :$localStorage.accessToken
  }
console.log(token);
manageusersService.update(token).then(function(value){
  console.log(value)
  $scope.inputDetails = value;


}).catch(function(value){
});
};


}]);
