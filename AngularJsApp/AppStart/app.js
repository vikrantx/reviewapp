var app = angular.module("myApp", ['ngRoute', 'ngResource', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/modal', {
          templateUrl: "view/partialview.html",
          controller: "myController"
      })
      .otherwise({
          redirectTo: '/'
      });
}]);