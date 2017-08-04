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
        value: function transpile(o) {

            var args = this.arguments.map(function (m) {
                return m.transpile(o);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWV0aG9kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJNZXRob2RFeHByZXNzaW9uIiwicGF0aCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJvIiwibWFwIiwibSIsInRyYW5zcGlsZSIsImpvaW4iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxnQjs7O0FBRUYsOEJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLHdJQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCOztBQUw4QjtBQU9qQzs7OztrQ0FFU0ksQyxFQUFHOztBQUVULGdCQUFJSixPQUFPLEtBQUtHLFNBQUwsQ0FBZUUsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlILENBQVosQ0FBTDtBQUFBLGFBQW5CLEVBQXdDSSxJQUF4QyxDQUE2QyxHQUE3QyxDQUFYO0FBQ0EsbUJBQVUsS0FBS1QsSUFBZixTQUF1QkMsSUFBdkI7QUFFSDs7O2dDQUVPSSxDLEVBQUc7O0FBRVAsZ0JBQUlLLE9BQU8sS0FBS0MsVUFBTCxDQUFnQk4sRUFBRU8sUUFBbEIsRUFBNEIsS0FBS1osSUFBakMsQ0FBWDs7QUFFQVUsaUJBQUtHLEdBQUwsQ0FBUyxHQUFUOztBQUVBLG1CQUFPLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1YsU0FBdEIsRUFBaUNNLElBQWpDLEVBQXVDTCxDQUF2QyxFQUNQUSxHQURPLENBQ0gsR0FERyxDQUFQO0FBSUg7Ozs7OztrQkFHVWQsZ0IiLCJmaWxlIjoiTWV0aG9kRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTWV0aG9kRXhwcmVzc2lvblxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3NcbiAqL1xuY2xhc3MgTWV0aG9kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdtZXRob2QtZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAobSA9PiBtLnRyYW5zcGlsZShvKSkuam9pbignLCcpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wYXRofSgke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnBhdGgpO1xuXG4gICAgICAgIG5vZGUuYWRkKCcoJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJyknKTtcblxuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNZXRob2RFeHByZXNzaW9uXG4iXX0=