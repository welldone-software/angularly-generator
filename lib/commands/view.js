var helper = require('./helper');


module.exports.generate = function core(args) {
    return helper.generate(['controller.js.tpl', 'view.html.tpl'], 'views', args);
};

module.exports.cli = function cli() {

    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('view')
    ], module.exports.generate);

};