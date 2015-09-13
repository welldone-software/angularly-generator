$stateProvider.
  state('<%= data.name %>', {
    url: '/<%= _.camelCase(_.last(data.name.split('.'))) %>',
    templateUrl: 'modules/<%= data.module %>/views/<%= data.name %>.html',
    controller: '<%= ex.angularlyName(data.module, data.name) %>Ctrl as vm'
});