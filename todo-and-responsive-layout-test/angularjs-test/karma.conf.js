// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/vendor/bower_components/angular/angular.min.js',
      'app/vendor/bower_components/angular-mocks/angular-mocks.js',

      'app/src/app.js',

      'app/src/shoppingList/controllers/*.js',
      'app/src/shoppingList/directives/*.js',
      'app/src/shoppingList/filters/*.js',
      'app/src/shoppingList/services/*.js',

      'app/src/shoppingList/controllers/test/*.js',
      'app/src/shoppingList/directives/test/*.js',
      'app/src/shoppingList/filters/test/*.js',
      'app/src/shoppingList/services/test/*.js'

    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
      // ,'Firefox'
      // ,'IE'
      // ,'Chrome'
    ],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};