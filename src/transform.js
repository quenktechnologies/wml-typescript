var Transpiler = require('./transpiler/Transpiler');
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
            sourceMaps: true
        }).code);

        this.queue(null);

    }

    if (!(/\.wml$/).test(file)) return through();
    return through(write, end);

}

module.exports = transform;
