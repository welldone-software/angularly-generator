(function(){

  'use strict';

  angular.module('<%= data.module %>').factory('<%= ex.angularlyName(data.module, data.name) %>Svc', factory);

  function factory(){
    return {

    };
  }

})();