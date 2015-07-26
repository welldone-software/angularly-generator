var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {
    var streams = [helper.generate(['controller.js.tpl', 'view.html.tpl'], 'views', args)];
    if(args.addStateForView){
        streams.push(require('./state').generate(args));
    }
    return helper.merge(streams);
};

module.exports.cli = function cli() {
    helper.cli([
        helper.questions.projectDir(),
        helper.questions.module(),
        helper.questions.name('View')
    ], function(answers){
        return module.exports.generate(_.extend(answers, {addStateForView: true}));
    });
};