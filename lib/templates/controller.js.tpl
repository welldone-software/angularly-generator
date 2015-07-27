(function(){

  'use strict';

  angular.module('<%= data.module %>').controller('<%= _.capitalize(_.camelCase(data.name)) %>Ctrl', Ctrl);

  function Ctrl(){
    var vm = this;
    vm.type = 'controller';
  }

})();