angular.module('someModule').controller('someModuleCtrl', ['$scope', '$routeParams', '$http', 'appServerURL',
  function($scope, $routeParams, $http, appServerURL) {
    $http.get(appServerURL + '/backend/someModule/list/').success(function(data) {
      $scope.objects = data;
    });
  }]);
