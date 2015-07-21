var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
  return helper.generate(['routes.js.tpl'], '.',  _.merge({}, args, {name: 'routes'}));
};

module.exports.cli = function cli() {
  helper.cli([
    helper.questions.projectDir(),
    helper.questions.module()
  ], module.exports.generate);
};