var helper = require('./helper');


module.exports.generate = function core(args) {
  return helper.generate(['service.js.tpl'], 'services', args);
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.module(),
    helper.questions.name('service')
  ], module.exports.generate);
};