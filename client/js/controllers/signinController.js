angular.module('app').controller('signinController', ['$state','signinService','$http','$window','$rootScope', '$scope','$location','$q','$localStorage'
,function( $state,signinService, $http,$window, $rootScope,$scope, $location, $q,$localStorage) {
  $scope.signin = function(value){
    $scope.default=false;
    if ($scope.form.$valid) {
        signinService.signin(value).then(function(result) {
          $localStorage.accessToken = result.status.token;
          $localStorage.role = result.status.role;
          $localStorage.id = result.status.id;
          console.log(result);
          console.log($localStorage);
          console.log(result.status.token);
            $scope.isLoad = false;
            $state.go('/profile');
            // $state.go('getusers',{role:result.status.role},{access_token:result.status.token});
        }).catch(function(error) {
              $scope.isLoad = false;
            if (value.error) {
            console.log($scope.error);
            } else {
              console.log(error);
            }
          });
    } else {
        $scope.default=true;
        console.log($scope.result);
    }
  };
  $scope.click = function() {
    $state.go('signup');
  }
}]);
