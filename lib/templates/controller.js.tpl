(function(){

  'use strict';

  angular.module('<%= data.module %>').controller('<%= _.capitalize(data.name) %>Ctrl', Ctrl);

  function Ctrl(){
    var vm = this;
    vm.type = 'controller';
  }

})();