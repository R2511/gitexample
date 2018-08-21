 var app = angular.module('app', ['ui.router','lbServices','ngStorage']).config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,
      $urlRouterProvider,$httpProvider) {
    $stateProvider
        .state('common', {
        templateUrl: '/views/common.html',
        controller:'commonController',
        abstract : true,

      }).state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          controller: 'signupController',

      }).state('signin', {
          url: '/signin',
          templateUrl: 'views/signin.html',
          controller: 'signinController',

      }).state('/profile',{
        url: '/profile',
        parent: 'common',
        templateUrl:'views/profile.html',
        controller:'profileController',

      }).state('/getusers',{
         url: '/getusers/:role',
         parent: 'common',
         templateUrl: 'views/getusers.html',
         controller:'getusersController',


      }).state('/managestudents',{
        url: '/managestudents',
        parent:'common',
        templateUrl:'views/manageusers.html',
        controller:'manageusersController',
      });
$urlRouterProvider.otherwise('signin');
      }]);
