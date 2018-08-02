angular.module('app').controller('manageusersController', ['$state','$stateParams','manageusersService', 'getusersService', '$window', '$rootScope', '$scope','$location', '$http','$q','$localStorage',
function( $state, $stateParams, manageusersService, getusersService, $window, $rootScope, $scope, $location, $http, $q, $localStorage) {

  $scope.manageusers=function(){
    var value = {
      role: $localStorage.role,
      accessToken:$localStorage.accessToken
    }
    getusersService.getusers(value).then(function(data){
      console.log(data);
      $scope.userdata=data;
    }).catch(function(data){

    });
  }
}]);
