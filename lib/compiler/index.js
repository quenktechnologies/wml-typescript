"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("./typescript");
var parser_1 = require("../parser");
/**
 * compile a string of WML into typescript code.
 */
exports.compile = function (src, opts) {
    if (opts === void 0) { opts = {}; }
    return parser_1.parse(src).map(function (m) { return ts.code(m, opts); });
};
//# sourceMappingURL=index.js.map