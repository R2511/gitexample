angular.module('app').factory('profileService', ['$q', '$http', function($q,$http,) {
  return({
        user:user
  });
  function user (value) {
    var deferred = $q.defer();
    $http.get('api/users/getusersid?id='+value.id+'&access_token='+value.accessToken, {

    }).success(function(data, status) {
      if (status === 200) {
        deferred.resolve(data);
      } else {
        deferred.reject(data);
      }
    })
    .error(function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };
}]);
