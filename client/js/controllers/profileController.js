angular.module('app').controller('profileController', ['$state','$stateParams','profileService', '$window', '$rootScope', '$scope','$location', '$http','$q','$localStorage',
function( $state, $stateParams, profileService, $window, $rootScope, $scope, $location, $http, $q, $localStorage) {
  $scope.profile = function(){
    var value = {
      role: $localStorage.role,
      accessToken:$localStorage.accessToken,
      id:$localStorage.id
    }
    profileService.user(value).then(function(detail){
      console.log(detail);
      $scope.userdetail = detail;
    }).catch(function(detail){

    });
  };



  function getMarkList(){
    var student ={
      id:$localStorage.id,
      accessToken:$localStorage.accessToken
    }
    profileService.getMarkList(student).then(function(result){
      console.log(result);
      $scope.marklist= result.status[0];

    }).catch(function(result) {

    });
}
getMarkList();




}]);
