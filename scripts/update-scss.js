const fs = require('fs');

const glob = require('glob');

const styles = glob.sync('src/components/**/*.scss')
  .map((path) => `@import '${path.replace('src/', '')}';\n`)
  .join('');

const signal = '/* Components */';
const signalEx = signal.replace(/\*/g, '\\*');

const style = fs.readFileSync('src/App.scss', { encoding: 'utf-8' })
  .replace(
    new RegExp(`${signalEx}\n(.*\n)*${signalEx}`),
    `${signal}\n${styles}${signal}`,
  );

fs.writeFileSync('src/App.scss', style, { encoding: 'utf-8' });
