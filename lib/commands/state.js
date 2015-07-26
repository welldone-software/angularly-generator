var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
  var search = /.(?=(\s*)(}\);)\s*(}\)\(\);)\s*$)/;
  var replaceWith = function(fileContent){
    return '$&\n\n' + fileContent.replace(/^./gm, '    $&');
  };

  return helper.inject(['state.js.tpl'], '.', 'routes.js',  args, search, replaceWith);
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.module(),
    helper.questions.name('State')
  ], module.exports.generate);
};