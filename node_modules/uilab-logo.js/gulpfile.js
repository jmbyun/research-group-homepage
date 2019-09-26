const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

gulp.task('build-webpack', callback => {
  webpack(webpackConfig('production'), (err, stats) => {
    if (err) {
      throw Error('build-webpack', err);
    }
    if (stats.hasErrors()) {
      throw Error('Compile errors have occurred.');
    }
    callback();
  });
});

gulp.task('build-babel', () => {
  return gulp.src(['src/**/*', '!src/browser.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('dev-webpack', () => {
  const config = webpackConfig('development');
  DevServer.addDevServerEntrypoints(config, {
    ...config.devServer,
    host: 'localhost',
  });
  const compiler = webpack(config);
  const server = new DevServer(compiler, config.devServer);
  server.listen(4000, 'localhost', err => {
    if (err) {
      throw err;
    }
    console.log('Dev server is running.');
  });
});

gulp.task('dev', ['dev-webpack']);
gulp.task('build', ['build-babel', 'build-webpack']);