var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
  var search = /.(?=(\s*)(}\);)\s*(}\)\(\);)\s*$)/;
  var replaceWith = function(fileContent){
    return '$&\n\n' + fileContent.replace(/^./gm, '    $&');
  };

  return helper.merge([
    helper.inject(['state.js.tpl'], '.', 'routes.js',  args, search, replaceWith),
    require('./view').generate(args)
  ]);
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.module(),
    helper.questions.name('State')
  ], module.exports.generate);
};