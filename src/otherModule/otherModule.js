angular.module('otherModule').controller('otherModuleCtrl', ['$scope', '$http', 'appServerURL',
  function($scope, $http, appServerURL) {
    $http.get(appServerURL + '/backend/otherModule/list/').success(function(data) {
      $scope.things = data;
    });
  }]);
