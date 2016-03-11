module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    captureTimeout: 60000,
    colors: true,
    frameworks: ['mocha'],
    files: ['example_spec.js'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    preprocessors: {
      'example_spec.js': ['webpack']
    },
    webpack: {},
    webpackMiddleware: {}
  });
}
