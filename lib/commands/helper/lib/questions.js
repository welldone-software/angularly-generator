var fs = require('fs');
var path = require('path');
var argv = require('yargs').argv;

function checkForArgv(name){
    return function(answers){
        if(typeof(argv[name]) !== 'undefined'){
            answers[name] = argv[name];
            return false;
        }
        return true;
    }
}


module.exports.parentDir = function(){
    return {
        name: 'parentDir',
        message: 'Project parent directory',
        default: '.',
        when : checkForArgv('parentDir')
    }
};

module.exports.projectDir = function(){
    return {
        name: 'projectDir',
        message: 'Directory of project',
        when : function(answers){
            var dir = argv.projectDir || (fs.existsSync('./client/modules') ? '.' : undefined);
            if(typeof(dir) !== 'undefined'){
                answers.projectDir = dir;
                return false;
            }
            return true;
        }
    };
};

module.exports.module = function(){

    return {
        type: 'list',
        name: 'module',
        message: 'Module name',
        choices: function(prevAnswers){
            var mouduleDir = path.join(prevAnswers.projectDir, './client/modules');
            var children = fs.readdirSync(mouduleDir);
            return children.filter(function(c){ return fs.statSync(path.join(mouduleDir, c)).isDirectory(); })
        },
        when : checkForArgv('module')
    };
};


module.exports.name = function(objectType){
    return {
        name: 'name',
        message: objectType + ' Name',
        when : checkForArgv('name')
    };
};

module.exports.empty = function(){
    return {
        type: 'boolean',
        name: 'empty',
        message: 'Empty (no files)',
        when : checkForArgv('minimum')
    };
};
