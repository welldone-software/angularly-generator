var helper = require('./helper');

module.exports.generate = function core(args) {
    return helper.generate(['directive.js.tpl', 'view.html.tpl'], 'directives', args);
};

module.exports.cli = function cli() {
    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('directive')
    ], module.exports.generate);
};