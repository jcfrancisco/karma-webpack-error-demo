import gulp from 'gulp';
import { Server as KarmaServer } from 'karma';

gulp.task('test', (cb) => {
  new KarmaServer({
    configFile: `${__dirname}/karma.conf.js`
  }, cb).start();
});
