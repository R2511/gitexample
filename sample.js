angular.module('myApp').controller('userSettingsController', ['$alert','$filter', '$scope', '$location', '$localStorage', '$stateParams', '$http','userSettingsService','commonService', 'AuthService','$popover',
function($alert,$filter, $scope, $location, $localStorage, $stateParams, $http, userSettingsService, commonService, AuthService,$popover) {
	$scope.isLoad = false;
	$scope.submitForm = function(formData) {
		if(formData != undefined){
			userSettingsService.Updatesetvalue(formData).then(function(data) {
				$scope.isLoad = false;
				commonService.alertMessage('Employee Id updated successfully','success',$alert);
				$scope.userSetting = {};
			}).catch(function(data) {
				$scope.isLoad = false;
				if (data.error) {
					commonService.alertMessage(data.error.message,'error',$alert);
				} else {
					commonService.alertMessage(null,'error',$alert);
				}
			});
		}
	};
}]);
