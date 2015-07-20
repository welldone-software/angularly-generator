(function(){

  'use strict';

  angular.module('<%= data.module %>').factory('<%= _.capitalize(data.name) %>Svc', Factory);

  function Factory(){
    return {

    };
  }

})();