#!/usr/bin/env node

var argv = require('yargs').argv;
var fs = require('fs');
var path = require('path');
var _ = require('lodash');


try{
    var command = loadCommand();
    command.cli(argv);
}
catch(err){
    console.error(err.message);
}


function loadCommand(){

    var commandName = argv._[0];
    var commandsDir = path.join(__dirname, './lib/commands/');
    var commandNames = fs.existsSync(commandsDir) ? fs.readdirSync(commandsDir).map(function(f){return path.basename(f, '.js')}) : [];

    if(commandNames.indexOf(commandName) === -1){
        throw new Error('Invalid command "' + commandName + '". Available commands "' + commandNames.join('|') + '"');
    }

    return require('./lib/commands/' + commandName);
}


