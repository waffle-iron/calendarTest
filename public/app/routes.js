angular.module('CalendarTest')
  .config(function($routeProvider){
    $routeProvider.when('/signup', {
      templateUrl: '/signup.html'
    });
  });
