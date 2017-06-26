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

    function NewExpression(name, args, location) {
        _classCallCheck(this, NewExpression);

        var _this = _possibleConstructorReturn(this, (NewExpression.__proto__ || Object.getPrototypeOf(NewExpression)).call(this, location));

        _this.type = 'new-expression';
        _this.name = name;
        _this.arguments = args;

        return _this;
    }

    _createClass(NewExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return 'new ' + this.name + '(' + args + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTmV3RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJOZXdFeHByZXNzaW9uIiwibmFtZSIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJ0cmFuc3BpbGVMaXN0IiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUEsa0lBRXhCQSxRQUZ3Qjs7QUFHOUIsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0ksU0FBTCxHQUFpQkgsSUFBakI7O0FBTDhCO0FBT2pDOzs7O29DQUVXOztBQUVSLGdCQUFJQSxPQUFPLEtBQUtJLGFBQUwsQ0FBbUIsS0FBS0QsU0FBeEIsQ0FBWDtBQUNBLDRCQUFjLEtBQUtKLElBQW5CLFNBQTJCQyxJQUEzQjtBQUVIOzs7Z0NBRU9LLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixXQUFtQyxLQUFLVCxJQUF4QyxFQUNYVSxHQURXLENBQ1AsR0FETyxDQUFYOztBQUdBLG1CQUFPLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1AsU0FBdEIsRUFBaUNHLElBQWpDLEVBQXVDRCxDQUF2QyxDQUFQO0FBRUg7Ozs7OztrQkFHVVAsYSIsImZpbGUiOiJOZXdFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBOZXdFeHByZXNzaW9uXG4gKi9cbmNsYXNzIE5ld0V4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbmV3LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gYG5ldyAke3RoaXMubmFtZX0oJHthcmdzfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYG5ldyAke3RoaXMubmFtZX1gKS5cbiAgICAgICAgYWRkKCcoJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOZXdFeHByZXNzaW9uXG4iXX0=