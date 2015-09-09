(function(){

  'use strict';

  angular.module('<%= data.module %>').directive('<%= ex.angularlyName(data.module, data.name) %>', function(){

    return {
      restrict: 'E',
      scope: {
        arg: '=',
        callback: '&'
      },
      //link: function(scope, el, atts, ctrls) {}
      controllerAs: 'vm',
      controller: Ctrl
    };


    // @ngInject
    function Ctrl(){
      var vm = this;
      vm.type = 'directive';
    }

  });

})();