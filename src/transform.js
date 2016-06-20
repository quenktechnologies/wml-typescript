var Transpiler = require('./transpile/Transpiler');
var through = require('through');
var babel = require('babel-core');

var transpiler = new Transpiler();

function transform(file) {

    var data = '';

    function write(buf) {
        data += buf;
    }

    function end() {

        var js;

        try {
            js = transpiler.transpile(data);
        } catch (e) {
            console.error(e);
            throw e;
        }

        this.queue(babel.transform(js, {
            sourceMaps: true,
            presets: ['es2015'],
            plugins: ['add-module-exports'],
            highlightCode: false
        }).code);

        this.queue(null);

    }

    if (!(/\.wml$/).test(file)) return through();
    return through(write, end);

}

module.exports = transform;
