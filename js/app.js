var app = angular.module('movie', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'movieSearch',
  })
  .when('/:movieID', {
    templateUrl: 'partials/movie.html',
    controller: 'singleMovie'
  })
  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
});
