angular.module('app').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'assets/partials/someModule/someModule.html',
        controller: 'someModuleCtrl'
      }).
      when('/otherURL/', {
        templateUrl: 'assets/partials/otherModule/otherModule.html',
        controller: 'otherModuleCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);
