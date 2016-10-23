var compile = require('./');
var through = require('through');
var babel = require('babel-core');

function transform(file) {

  var data = '';

  function write(buf) {
    data += buf;
  }

  function end() {

    var js;

    try {
      js = compile(data);
    } catch (e) {
      console.error('An error occurred while parsing ' + file + '!');
      console.error(e.stack ? e.stack : e);
      throw e;
    }

    this.queue(babel.transform(js, {
      sourceMaps: true,
      presets: ['es2015'],
      plugins: ['transform-export-extensions'],
      highlightCode: false
    }).code);

    this.queue(null);

  }

  if (!(/\.wml$/).test(file)) return through();
  return through(write, end);

}

module.exports = transform;

