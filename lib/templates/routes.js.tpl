(function(){

  'use strict';

  var module = angular.module('<%= data.module %>');

  module.config(function($stateProvider <% if(!data.minimum) { %>, $urlRouterProvider, $locationProvider<% } %>){

        <% if(!data.minimum) { %>

        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/');

        <% } %>

  });

})();