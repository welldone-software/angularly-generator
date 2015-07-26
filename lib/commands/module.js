var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
  var adjustedArgs = {projectDir: args.projectDir, module: args.name, name: 'sample'};

  var streams = _.flatten([
    ['view', 'service', 'directive'].map(function(cmdName){
      var cmd = require('./' + cmdName);
      return cmd.generate(adjustedArgs);
    }),
    helper.generate('routes.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'routes'})),
    helper.generate('module.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'module'}))
  ]);

  return helper.merge(streams);
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.name('Module')
  ], module.exports.generate);
};