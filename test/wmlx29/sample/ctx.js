"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var panel_1 = require("./panel");
var Ctx = /** @class */ (function () {
    function Ctx() {
        this.view = new panel_1.Main(this);
    }
    Ctx.prototype.getClassname = function () {
        return 'panel';
    };
    Ctx.prototype.getContent = function () {
        return 'foo';
    };
    Ctx.prototype.rendered = function () {
    };
    Ctx.prototype.removed = function () {
    };
    Ctx.prototype.render = function () {
        return this.view.render();
    };
    return Ctx;
}());
exports.Ctx = Ctx;
//# sourceMappingURL=ctx.js.map