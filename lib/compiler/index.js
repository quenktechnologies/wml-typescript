"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var ts = require("./code/output");
var dom_1 = require("./code/generator/dom");
var wml_parser_1 = require("@quenk/wml-parser");
/**
 * compile a string of WML into typescript code.
 */
exports.compile = function (src, opts) {
    if (opts === void 0) { opts = {}; }
    return wml_parser_1.parse(src).map(function (m) { return ts.module2TS(newContext(opts), m); });
};
var newContext = function (opts) {
    var options = opts;
    opts.EOL = os.EOL;
    return { options: options, generator: new dom_1.DOMGenerator() };
};
//# sourceMappingURL=index.js.map