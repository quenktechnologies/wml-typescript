#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs = require("fs");
var os = require("os");
var docopt = require("docopt");
var Promise = require("bluebird");
var Maybe_1 = require("afpl/lib/monad/Maybe");
var _1 = require("./");
var compileError = function (path, e) {
    return new Error("Error while processing " + path + ":" + os.EOL + (e.stack ? e.stack : e.message));
};
var node = Promise.fromCallback;
var getFileName = function (file) {
    return path_1.dirname(file) + "/" + path_1.basename(file, path_1.extname(file));
};
var expand = function (parent) { return function (path) { return path_1.resolve(parent, path); }; };
exports.stat = function (path) {
    return node(function (cb) { return fs.stat(path, cb); });
};
exports.isDirectory = function (path) {
    return exports.stat(path).then(function (stats) { return Maybe_1.Maybe.fromBoolean(stats.isDirectory()); });
};
exports.readdir = function (path) {
    return node(function (cb) { return fs.readdir(path, cb); });
};
exports.readFile = function (path) {
    return node(function (cb) { return fs.readFile(path, { encoding: 'utf8' }, cb); });
};
exports.writeFile = function (path) { return function (contents) {
    return node(function (cb) { return fs.writeFile(path, contents, cb); });
}; };
exports.getOptions = function (args) { return ({
    es5: args['--es5'],
    pretty: args['--pretty'],
    main: args['--main']
}); };
exports.executeList = function (path) { return function (list) {
    return Promise.all(list.map(expand(path)).map(execute));
}; };
exports.compile = function (path, options) { return function (txt) { return _1.compile(txt, options).cata(function (e) { return Promise.reject(compileError(path, e)); }, function (s) { return Promise.resolve(s); }); }; };
var args = docopt.docopt("\n\nUsage:\n  wml [options] <path>\n\nOptions:\n  -h --help          Show this screen.\n  --extension ext    The file extension to use when writing files. [default: js]\n  --es5              Output ES5 javascript.\n  --pretty           Pretty prints the output.\n  --version          Show version.\n", {
    version: require('../package.json').version
});
var execute = function (path) {
    return exports.isDirectory(path)
        .then(function (m) {
        return m
            .map(function () { return exports.readdir(path).then(exports.executeList(path)); })
            .orJust(function () { return (path_1.extname(path) !== '.wml') ? Promise.resolve(null) :
            exports.readFile(path)
                .then(exports.compile(path, exports.getOptions(args)))
                .then(exports.writeFile(getFileName(path) + "." + args['--extension'])); })
            .get();
    });
};
execute(expand(process.cwd())(args['<path>']))
    .then(function () { return process.exit(0); })
    .catch(function (e) { return (console.error(e.stack ? e.stack : e), process.exit(255)); });
//# sourceMappingURL=cli.js.map