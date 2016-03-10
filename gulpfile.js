var gulp = require('gulp');
var Karma = require('karma').Server;
var path = require('path');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();
var pkg = require(path.resolve('package.json'));

/**
 * File patterns
 **/

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './modules');

var sourceFiles = [
  // Make sure module files are handled first
  path.join(sourceDirectory, '/**/*.module.js'),

  // Then add all JavaScript files
  path.join(sourceDirectory, '/**/*.js')
];

var today = new Date();
var month = (today.getMonth() + 1) < '10' ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
today = today.getDate() + '/' + month + '/' + today.getFullYear();

var banner = [
  '/**',
  ' * @name <%= pkg.name %>',
  ' * @version <%= pkg.version %>',
  ' * @author Build by <%= pkg.author.name %> <%= pkg.author.email %>',
  ' * @license <%= pkg.license %>',
  ' * Built on ' + today,
  ' */',
  ''
].join('\n');

var lintFiles = [
  'gulpfile.js',
  // Karma configuration
  'karma-*.conf.js'
].concat(sourceFiles);

gulp.task('build', function() {
  gulp.src(sourceFiles)
    .pipe($.plumber())
    .pipe($.concat('angular-elastic-grid.js'))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/'))
    .pipe($.uglify())
    .pipe($.rename('angular-elastic-grid.min.js'))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist'));
});

/**
 * Process
 */
gulp.task('process-all', function (done) {
  runSequence('jshint', 'test-src', 'build', done);
});

/**
 * Watch task
 */
gulp.task('watch', function () {

  // Watch JavaScript files
  gulp.watch(sourceFiles, ['process-all']);
});

/**
 * Validate source JavaScript
 */
gulp.task('jshint', function () {
  return gulp.src(lintFiles)
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

/**
 * Run test once and exit
 */
gulp.task('test-src', function (done) {
  new Karma({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function (done) {
  new Karma({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function (done) {
  new Karma({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done).start();

});

gulp.task('default', function () {
  runSequence('process-all', 'watch');
});
