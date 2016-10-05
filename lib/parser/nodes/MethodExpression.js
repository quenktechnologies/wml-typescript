'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */
var MethodExpression = function (_Node) {
    _inherits(MethodExpression, _Node);

    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        var _this = _possibleConstructorReturn(this, (MethodExpression.__proto__ || Object.getPrototypeOf(MethodExpression)).call(this, location));

        _this.type = 'method-expression';
        _this.path = path;
        _this.arguments = args;

        return _this;
    }

    _createClass(MethodExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments.map(function (m) {
                return m.transpile();
            }).join(',');
            return this.path + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, this.path);

            node.add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return MethodExpression;
}(_Node3.default);

exports.default = MethodExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWV0aG9kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJNZXRob2RFeHByZXNzaW9uIiwicGF0aCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsIm8iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxnQjs7O0FBRUYsOEJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLHdJQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCOztBQUw4QjtBQU9qQzs7OztvQ0FFVzs7QUFFUixnQkFBSUEsT0FBTyxLQUFLRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixFQUFMO0FBQUEsYUFBbkIsRUFBdUNDLElBQXZDLENBQTRDLEdBQTVDLENBQVg7QUFDQSxtQkFBVSxLQUFLUixJQUFmLFNBQXVCQyxJQUF2QjtBQUVIOzs7Z0NBRU9RLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixLQUFLWixJQUFqQyxDQUFYOztBQUVBVSxpQkFBS0csR0FBTCxDQUFTLEdBQVQ7O0FBRUEsbUJBQU8sS0FBS0MsV0FBTCxDQUFpQixLQUFLVixTQUF0QixFQUFpQ00sSUFBakMsRUFBdUNELENBQXZDLEVBQ1BJLEdBRE8sQ0FDSCxHQURHLENBQVA7QUFJSDs7Ozs7O2tCQUdVZCxnQiIsImZpbGUiOiJNZXRob2RFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21ldGhvZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wYXRofSgke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnBhdGgpO1xuXG4gICAgICAgIG5vZGUuYWRkKCcoJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJyknKTtcblxuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNZXRob2RFeHByZXNzaW9uXG4iXX0=