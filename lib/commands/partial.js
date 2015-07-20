var helper = require('./helper');

module.exports.generate = function core(args) {
    return helper.generate(['view.html.tpl'], 'views/partials', args);
};

module.exports.cli = function cli() {

    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('partial')
    ], module.exports.generate);

};