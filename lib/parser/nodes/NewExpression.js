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
 * NewExpression
 */
var NewExpression = function (_Node) {
    _inherits(NewExpression, _Node);

    function NewExpression(callee, args, location) {
        _classCallCheck(this, NewExpression);

        var _this = _possibleConstructorReturn(this, (NewExpression.__proto__ || Object.getPrototypeOf(NewExpression)).call(this, location));

        _this.type = 'new-expression';
        _this.callee = callee;
        _this.arguments = args;

        return _this;
    }

    _createClass(NewExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var callee = this.callee.transpile(o);
            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            });
            return 'new ' + callee + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, 'new ' + this.name).add('(');

            return this.compileList(this.arguments, node, o);
        }
    }]);

    return NewExpression;
}(_Node3.default);

exports.default = NewExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTmV3RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJOZXdFeHByZXNzaW9uIiwiY2FsbGVlIiwiYXJncyIsImxvY2F0aW9uIiwidHlwZSIsImFyZ3VtZW50cyIsIm8iLCJ0cmFuc3BpbGUiLCJtYXAiLCJhIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsIm5hbWUiLCJhZGQiLCJjb21waWxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEJDLFFBQTFCLEVBQW9DO0FBQUE7O0FBQUEsa0lBRTFCQSxRQUYwQjs7QUFHaEMsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0ksU0FBTCxHQUFpQkgsSUFBakI7O0FBTGdDO0FBT25DOzs7O2tDQUVTSSxDLEVBQUc7O0FBRVQsZ0JBQUlMLFNBQVMsS0FBS0EsTUFBTCxDQUFZTSxTQUFaLENBQXNCRCxDQUF0QixDQUFiO0FBQ0EsZ0JBQUlKLE9BQU8sS0FBS0csU0FBTCxDQUFlRyxHQUFmLENBQW1CO0FBQUEsdUJBQUdDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFIO0FBQUEsYUFBbkIsQ0FBWDtBQUNBLDRCQUFjTCxNQUFkLFNBQXdCQyxJQUF4QjtBQUVIOzs7Z0NBRU9JLEMsRUFBRzs7QUFFUCxnQkFBSUksT0FBTyxLQUFLQyxVQUFMLENBQWdCTCxFQUFFTSxRQUFsQixXQUFtQyxLQUFLQyxJQUF4QyxFQUNYQyxHQURXLENBQ1AsR0FETyxDQUFYOztBQUdBLG1CQUFPLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1YsU0FBdEIsRUFBaUNLLElBQWpDLEVBQXVDSixDQUF2QyxDQUFQO0FBRUg7Ozs7OztrQkFHVU4sYSIsImZpbGUiOiJOZXdFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBOZXdFeHByZXNzaW9uXG4gKi9cbmNsYXNzIE5ld0V4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICduZXctZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBjYWxsZWUgPSB0aGlzLmNhbGxlZS50cmFuc3BpbGUobyk7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMubWFwKGE9PmEudHJhbnNwaWxlKG8pKTtcbiAgICAgICAgcmV0dXJuIGBuZXcgJHtjYWxsZWV9KCR7YXJnc30pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIGBuZXcgJHt0aGlzLm5hbWV9YCkuXG4gICAgICAgIGFkZCgnKCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTmV3RXhwcmVzc2lvblxuIl19