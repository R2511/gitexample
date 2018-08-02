angular.module('app').factory('getusersService', ['$q', '$http', function($q,$http) {

  return({
        getusers:getusers,
        // getid:getid
          });

      function getusers(value) {
        var deferred = $q.defer(value);
        console.log(value.role);
        console.log(value.accessToken);

        $http.get('api/users/getusers?role='+value.role+'&access_token='+value.accessToken, {
        })
            .success(function(data, status) {
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
          }

      // function getid(value) {
      //       var deferred = $q.defer(value);
      //       console.log(value.id,'id');
      //       console.log(value.accessToken,'aaaaaaaaaaaaaaaa');
      //
      //       $http.get('api/users/getusers?id='+value.id+'&access_token='+value.accessToken, {
      //       })
      //           .success(function(data, status) {
      //               if (status === 200) {
      //                 deferred.resolve(data);
      //               } else {
      //                 deferred.reject(data);
      //               }
      //             })
      //           .error(function(error) {
      //             deferred.reject(error);
      //           });
      //           return deferred.promise;
      //         }
}]);
