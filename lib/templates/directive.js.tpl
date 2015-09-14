(function(){

  'use strict';

  angular.module('<%= data.module %>').directive('<%= ex.angularlyName(data.module, data.name) %>', function(){

    return {
      restrict: 'E',
      scope: {
        //arg: '=',
        //callback: '&'
      }
      templateUrl: 'modules/<%= data.module %>/views/<%= data.name %>.html',
      controllerAs: 'vm',
      controller: ctrl,
      //link: link
    };


    // @ngInject
    function ctrl($scope){
      var vm = this;
      vm.type = 'directive';
    }


    //function link(scope, el, atts, ctrls) {
    //}

  });

})();