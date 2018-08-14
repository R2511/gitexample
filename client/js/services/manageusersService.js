angular.module('app').factory('manageusersService', ['$q', '$http', function($q,$http) {
  return({
       getuser:getuser,
       update:update
  });
  function manageusers() {
    $http.get('api/users/getusers?role='+$localStorage.role+'&access_token='+$localStorage.accessToken, {

    })
  }
  function getuser(getvalue) {
    var deferred = $q.defer();
    console.log(getvalue.id)
    console.log(getvalue)
    $http.get('api/users/getusersid?id='+getvalue.id+'&access_token='+getvalue.accessToken,{
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

function update(token) {
  var deferred =$q.defer();
  console.log(token.marks);
  $http.post('api/studentmarks/update-marks?access_token='+token.accessToken,token.marks,{
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
