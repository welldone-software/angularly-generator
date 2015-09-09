(function(){

  'use strict';

  angular.module('<%= data.module %>').controller('<%= ex.angularlyName(data.module, data.name) %>Ctrl', ctrl);

  function ctrl(){
    var vm = this;
    vm.type = 'controller';
  }

})();