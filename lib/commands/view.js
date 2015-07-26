var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
    return helper.generate(['controller.js.tpl', 'view.html.tpl'], 'views', args);
};

module.exports.cli = function cli() {
    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('View')
    ], module.exports.generate);
};