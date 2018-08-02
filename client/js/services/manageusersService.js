angular.module('app').factory('manageusersService', ['$q', '$http', function($q,$http) {
  return({

  });
  function manageusers() {
    $http.get('api/users/getusers?role='+$localStorage.role+'&access_token='+$localStorage.accessToken, {

    })
  }
}]);
