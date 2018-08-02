angular.module('app').factory('signinService', ['$q', '$http',function($q,$http,) {

  return({
        signin:signin
          });

    function signin(value){
  	var deferred = $q.defer();
		$http.post('api/users/signin', value, {

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
}]);







// app.controller('sinupController'),function($scope) {
//     $scope.data=$scope.signup();
//     var deferred = $q.defer();
//     $http.get($localStorage.baseURL + 'api/users/signUp' + data + '/redis', {
//           headers: {
//               'Authorization': $localStorage.accessToken
//           }
//       }).success(function(data, status) {
//             if (status === 204) {
//               deferred.resolve(data);
//             } else {
//               deferred.reject(data);
//             }
//       }).error(function(data) {
//           deferred.reject(data);
//       });
//             return deferred.promise;
//         }
//     }
