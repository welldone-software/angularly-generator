var helper = require('./helper');

function core(args) {
    return helper.generate(['view.html.tpl'], 'views/partials', args);
};

function cli() {

    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('partial')
    ], core);

};

module.exports.generate = core
module.exports.cli = cli