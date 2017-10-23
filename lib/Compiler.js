"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='Parser.d.ts' />
var Parser = require("./Parser");
var nodes = require("./AST");
var afpl = require("afpl");
var jsfmt = require("js-beautify");
var TypeScript = require("./TypeScript");
var afpl_1 = require("afpl");
var defaultOptions = {
    debug: false,
    main: 'Main',
    module: '@quenk/wml',
};
/**
 * parse a string as WML returning either an error or an AST.
 */
exports.parse = function (str, ast) {
    if (ast === void 0) { ast = nodes; }
    Parser.parser.yy = { ast: ast };
    try {
        return afpl_1.Either.right(Parser.parser.parse(str));
    }
    catch (e) {
        return afpl_1.Either.left(e);
    }
};
/**
 * pretty up the output.
 */
exports.pretty = function (doit) { return function (s) {
    return doit ? jsfmt(s, {}) : s;
}; };
/**
 * compile a string of WML turning it into typescript code.
 */
exports.compile = function (src, options) {
    if (options === void 0) { options = {}; }
    var opts = afpl.util.merge(defaultOptions, options);
    return exports.parse(src)
        .map(function (m) { return TypeScript.code(m, opts); })
        .map(exports.pretty(options.pretty));
};
//# sourceMappingURL=Compiler.js.map