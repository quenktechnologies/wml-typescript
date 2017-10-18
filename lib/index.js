"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = require("./Parser");
var nodes = require("./AST");
var afpl = require("afpl");
var TypeScript = require("./TypeScript");
var afpl_1 = require("afpl");
var Context = /** @class */ (function () {
    function Context(text) {
        this.text = text;
    }
    return Context;
}());
exports.Context = Context;
exports.defaultOptions = {
    debug: false,
    main: 'Main',
    module: '@quenk/wml-runtime',
};
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
exports.compile = function (src, options) {
    if (options === void 0) { options = {}; }
    var opts = afpl.util.merge(exports.defaultOptions, options);
    try {
        return exports.parse(src).map(function (m) { return TypeScript.code(m, opts); });
    }
    catch (e) {
        return afpl_1.Either.left(e);
    }
};
//# sourceMappingURL=index.js.map