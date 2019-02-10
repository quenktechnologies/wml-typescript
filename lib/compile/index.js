"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("./typescript");
var parse_1 = require("../parse");
/**
 * compile a string of WML into typescript code.
 */
exports.compile = function (src, opts) {
    if (opts === void 0) { opts = {}; }
    return parse_1.parse(src).map(function (m) { return ts.code(m, opts); });
};
//# sourceMappingURL=index.js.map