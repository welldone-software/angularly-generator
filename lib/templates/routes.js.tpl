(function(){

  'use strict';

  var module = angular.module('<%= data.module %>');

  module.config(function($stateProvider , $urlRouterProvider, $locationProvider){

    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

  });

})();