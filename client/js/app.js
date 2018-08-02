 var app = angular.module('app', ['ui.router','lbServices','ngStorage']).config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,
      $urlRouterProvider,$httpProvider) {
    $stateProvider
        .state('common', {
        templateUrl: '/views/common.html',
        abstract : true,

      }).state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          parent : 'common',
          controller: 'signupController',

      }).state('signin', {
          url: '/signin',
          templateUrl: 'views/signin.html',
          controller: 'signinController',

      }).state('/profile',{
        url: '/profile',
        parent: 'common',
        templateUrl:'views/profile.html',

      }).state('/getusers',{
         url: '/getusers/:role',
         parent: 'common',
         templateUrl: 'views/getusers.html',
         controller:'getusersController',


      }).state('/manageusers',{
        url: '/manageusers',
        parent:'common',
        templateUrl:'views/manageusers.html',
        controller:'manageusersController',
      });



    $urlRouterProvider.otherwise('signin');
      }]);

app.directive('left-menu', function() {
    return {
        restrict: 'AE',
        templateUrl: 'client/views/common/left_menu.html',
        replace: 'true',
        scope: {
            menu: '=menu',
            profile: '&profile'
        },
    };
});
app.directive('top-navigation', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/views/common/top_navigation.html',
        scope: {
            logout: '&logout',
            menu: '=menu'
        },
    };
});
