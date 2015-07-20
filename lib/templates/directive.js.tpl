(function(){

  'use strict';

  angular.module('<%= data.module %>').directive('<%= data.name %>', function(){

    return {
      restrict: 'E',
      scope: {
        arg: '=',
        callback: '&'
      },
      //link: function(scope, el, atts, ctrls) {}
      controllerAs: 'vm',
      controller: Ctrl,
    };


    function Ctrl(){
      var vm = this;
      vm.type = 'directive';
    }

  });

})();