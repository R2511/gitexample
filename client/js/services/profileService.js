angular.module('app').factory('profileService', ['$q', '$http', function($q,$http,) {
  return({
        user:user,
        getMarkList:getMarkList

  });
  function user (value) {
    var deferred = $q.defer();
    $http.get('api/users/getusersid?id='+value.id+'&access_token='+value.accessToken, {

    }).success(function(data, status) {
      console.log(data)
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


function getMarkList(student) {
        var deferred =$q.defer();

$http.get('api/studentmarks/student-getmarks?student_id='+student.id+'&access_token='+student.accessToken,{
        }).success(function(data, status) {
          console.log(student.id);
          console.log(data);
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
