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
      $scope.userdetail=detail;
    }).catch(function(detail){

    });
  }
}]);
