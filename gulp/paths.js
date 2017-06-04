// Paths used for the gulp tasks
const srcDir = './src';
const destDir = './dist';

module.exports = {
  cleanDir: destDir,
  bundleOutput: 'bundle.js',
  srcJs: `${srcDir}/js/*.js`,
  destJs: `${destDir}/js`,
  srcLib: `${srcDir}/lib/*`,
  destLib: `${destDir}/js/lib/`,
  srcCss: `${srcDir}/css/*.css`,
  destCss: `${destDir}/css/`,
  srcImg: `${srcDir}/images/*`,
  destImg: `${destDir}/images/`,
  srcPartials: `${srcDir}/handlebars/partials`,
  srcIndexHbs: `${srcDir}/handlebars/index.handlebars`,
  srcServe: destDir,
  destDir: destDir,
  // use for mocha when testing with fixtures in front end
  srcMocha: [ './mocha', './' ],
  watchMocha: './mocha/*',
  processCommand: './node_modules/.bin/flow-remove-types src-dev/ -d src/'
};
