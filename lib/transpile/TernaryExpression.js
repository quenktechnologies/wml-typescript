/**
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Exoression} iftrue 
 * @param {Expression} iffalse 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TernaryExpression = (function () {
    function TernaryExpression(logic, iftrue, iffalse) {
        _classCallCheck(this, TernaryExpression);

        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
    }

    _createClass(TernaryExpression, [{
        key: "toString",
        value: function toString() {

            return "(" + this.logic + ")? " + this.iftrue + " : " + this.iffalse;
        }
    }]);

    return TernaryExpression;
})();

exports["default"] = TernaryExpression;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGVybmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQU1NLGlCQUFpQjtBQUVSLGFBRlQsaUJBQWlCLENBRVAsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7OEJBRmxDLGlCQUFpQjs7QUFJZixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUUxQjs7aUJBUkMsaUJBQWlCOztlQVVYLG9CQUFHOztBQUVQLHlCQUFXLElBQUksQ0FBQyxLQUFLLFdBQU0sSUFBSSxDQUFDLE1BQU0sV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFHO1NBRTlEOzs7V0FkQyxpQkFBaUI7OztxQkFrQlIsaUJBQWlCIiwiZmlsZSI6IlRlcm5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUZXJuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbG9naWMgXG4gKiBAcGFyYW0ge0V4b3Jlc3Npb259IGlmdHJ1ZSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZmYWxzZSBcbiAqL1xuY2xhc3MgVGVybmFyeUV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobG9naWMsIGlmdHJ1ZSwgaWZmYWxzZSkge1xuXG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5pZnRydWUgPSBpZnRydWU7XG4gICAgICAgIHRoaXMuaWZmYWxzZSA9IGlmZmFsc2U7XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gYCgke3RoaXMubG9naWN9KT8gJHt0aGlzLmlmdHJ1ZX0gOiAke3RoaXMuaWZmYWxzZX1gO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm5hcnlFeHByZXNzaW9uXG4iXX0=