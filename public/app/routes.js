angular.module('CalendarTest')
  .config(function($routeProvider){
    $routeProvider.when('/signup', {
      templateUrl: '/signup.html'
    })
    $routeProvider.when('/login', {
      templateUrl: '/login.html'
    })
    $routeProvider.when('/testPage', {
      templateUrl: '/testPage.html'
    })
    $routeProvider.when('/visitform', {
      templateUrl: '/visitform.html'
    })
  });
