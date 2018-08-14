angular.module('app').controller('commonController', ['$state','commonService', '$http','$window','$rootScope', '$scope','$location','$q','$localStorage'
,function( $state,commonService,$http,$window,$rootScope,$scope,$location,$q,$localStorage) {

 $scope.common = function() {
   $scope.getRole = $localStorage.role;
   $scope.getName = $localStorage.Username;
   $scope.id= $localStorage.id;
   console.log($localStorage.id)
   console.log($localStorage.Username)
   console.log($localStorage.role);

};




}]);
