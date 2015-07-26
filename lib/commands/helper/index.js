var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge2');
var inquirer = require('inquirer');
var es = require('event-stream');
var _ = require('lodash');
var argv = require('yargs').argv;

var defaultTemplatesDir = path.join(__dirname, '../../templates');

module.exports = {

  get templatesDir() {
    return argv.templatesDir || defaultTemplatesDir;
  },

  questions: require('./lib/questions'),

  //prompt : inquirer.prompt,

  //plugins: $,
  //
  //dest: gulp.dest,
  //
  //src: gulp.src,

  merge: function (streams) {
    var merged = merge.apply(null, arguments).on('queueDrain', function () {
      merged.end();
      merged.emit('end');
    });
    return merged;
  },

  sequance: function(streams){
    var ps = es.pause();
    ps.pause();

    (function runStream(i){
      if(i >= streams.length){
        ps.resume();
        return;
      }
      var stream = streams[i];
      stream = _.isFunction(stream) ? stream() : stream;
      stream.on('end', function(){
        runStream(i + 1);
      });
    })(0);

    return ps;
  },

  inject: function(tpls, subdir, fileName, args, find, replaceWith){
    var dest = path.join(args.projectDir, 'client/modules', args.module, subdir),
      destFilePath = path.join(dest, fileName);

    return gulp.src(tpls, {cwd: module.exports.templatesDir})
      .pipe($.template(args, {variable: 'data'}))
      .pipe($.concat(fileName, {newLine: '\n\n'}))
      .pipe($.injectSelf(destFilePath, find, {replaceWith: replaceWith}))
      .pipe(gulp.dest(dest));
  },

  generate: function (tpls, subdir, args) {

    var dest = path.join(args.projectDir, 'client/modules', args.module, subdir);

    return gulp.src(tpls, {cwd: module.exports.templatesDir})
      .pipe($.rename(function (f) {
        f.extname = path.extname(f.basename);
        f.basename = args.name;
      }))
      .pipe($.template(args, {variable: 'data'}))
      .pipe($.conflict(dest))
      .pipe(gulp.dest(dest));
  },

  cli: function (questions, core) {

    inquirer.prompt(questions, function (answers) {

      var stream = core(answers);

      stream.on('end', function () {
        process.exit();
      });

    });
  }
};