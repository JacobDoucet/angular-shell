(function(){
  'user strict';

  angular.module('>>app<<', [
    'ngRoute'
  ]);

  function AppConfig($routeProvider){
    $routeProvider
      .when('/page', {
        redirectTo : '/page'
      })
  }

  angular
    .module('>>app<<')
    .config(AppConfig);
})();
