"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("./typescript");
var wml_parser_1 = require("@quenk/wml-parser");
/**
 * compile a string of WML into typescript code.
 */
exports.compile = function (src, opts) {
    if (opts === void 0) { opts = {}; }
    return wml_parser_1.parse(src).map(function (m) { return ts.code(m, opts); });
};
//# sourceMappingURL=index.js.map