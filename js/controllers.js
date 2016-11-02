app.controller('movieSearch', ['$scope', '$http','$rootScope', function($scope, $http, $rootScope){
  $scope.view = {};
  $scope.view.maxHeight = '250px';
  $scope.view.maxWidth = '250px';
  $scope.view.submit = function (search) {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + search
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data.Search);
        $rootScope.movies = response.data.Search;
      });
  }
}])

app.controller('singleMovie', ['$scope', '$http', '$routeParams','$rootScope', '$location', function($scope, $http, $routeParams,$rootScope, $location) {
  $scope.view = {};
  $scope.view.maxHeight = '250px';
  $scope.view.maxWidth = '250px';
  let movie = $routeParams.movieID
  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?i=' + movie
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response.data);
      $rootScope.movie = response.data;
    });
  $scope.view.submit = function (search) {
      $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s=' + search
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data.Search);
          $location.path('/')
          $rootScope.movies = response.data.Search;
        });
}
}])
