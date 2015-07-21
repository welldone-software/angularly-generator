$stateProvider.
  state('<%= data.name %>', {
    url: '/<%= data.name %>',
    templateUrl: 'modules/<%= data.module %>/views/<%= data.name %>.html',
    controller: '<%= _.capitalize(data.name) %>Ctrl',
    controllerAs: 'vm',
    //resolve: {
    //  vl: function(){
    //    title: 'Home',
    //    iconClass: 'fa fa-home'
    //  }
    //}
    //data: {
    //  menu: {
    //    title: 'Home',
    //      iconClass: 'fa fa-home'
    //  },
    //  //pageHeader: 'Platform for all your time series data',
    //  roles: rolesSvc.rolesEqualOrHigherThen('customer-user')
    //}
});