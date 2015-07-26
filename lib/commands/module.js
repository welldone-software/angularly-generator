var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
  var adjustedArgs = {projectDir: args.projectDir, module: args.name, name: 'sample'};

  var streams = [
    require('./service').generate(adjustedArgs),
    require('./directive').generate(adjustedArgs),
    helper.generate('routes.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'routes'})),
    helper.generate('module.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'module'}))
  ];

  return helper.sequance([
    helper.merge(streams),
    function(){
      return require('./state').generate(adjustedArgs);
    }
  ]);
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.name('Module')
  ], module.exports.generate);
};