angular.module('app').controller('getusersController', ['$state','$stateParams','getusersService', '$window', '$rootScope', '$scope','$location', '$http','$q','$localStorage',
function( $state, $stateParams, getusersService, $window, $rootScope, $scope, $location, $http, $q, $localStorage) {

  $scope.manageusers = function() {
    console.log($localStorage);
        var value = {
          role: $stateParams.role,
          accessToken:$localStorage.accessToken,
          id:$localStorage.id
            }
          getusersService.getusers(value).then(function(result) {
            $scope.list=result.status;
              console.log($scope.list);
              console.log(result,'result');
              console.log($stateParams);
              $scope.isLoad = false;
       }).catch(function(error) {
            $scope.isLoad = false;
            if (value.error) {
            console.log($scope.error);
            } else {
           console.log(error);
            }
        });

      };


}]);
