module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    captureTimeout: 60000,
    colors: true,
    frameworks: ['mocha'],
    files: ['spec/*.js'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    preprocessors: {
      'spec/*.js': ['webpack']
    },
    webpack: {},
    webpackMiddleware: {
      noInfo: true
    }
  });
}
