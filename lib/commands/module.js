var helper = require('./helper');
var _ = require('lodash');

module.exports.generate = function core(args) {

    var adjustedArgs = {projectDir: args.projectDir, module: args.name, name: 'sample'};

    var streams = ['view', 'service', 'directive'].map(function(cmdName){
        var cmd = require('./' + cmdName);
        return cmd.generate(adjustedArgs);
    });

    streams.push(helper.generate('routes.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'routes'})) );

    streams.push(helper.generate('module.js.tpl', '.', _.merge({}, adjustedArgs, {name: 'module'})));

    streams = _.flatten(streams);

    return helper.merge(streams);

};

module.exports.cli = function cli() {
    helper.cli([
        helper.questions.projectDir(),
        helper.questions.name('module')
    ], module.exports.generate);
};