'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * FunctionExpression
 */

var FunctionExpression = (function (_Node) {
  _inherits(FunctionExpression, _Node);

  function FunctionExpression(name, args, location) {
    _classCallCheck(this, FunctionExpression);

    _get(Object.getPrototypeOf(FunctionExpression.prototype), 'constructor', this).call(this, location);
    this.name = name;
    this.arguments = args;
  }

  _createClass(FunctionExpression, [{
    key: 'transpile',
    value: function transpile() {

      var args = this.transpileList(this.arguments);
      return this.name + '(' + args + ')';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var node = this.sourceNode(o.fileName, this.name).add('(');

      return this.compileList(this.arguments, node, o);
    }
  }]);

  return FunctionExpression;
})(_Node3['default']);

exports['default'] = FunctionExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRnVuY3Rpb25FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLGtCQUFrQjtZQUFsQixrQkFBa0I7O0FBRVgsV0FGUCxrQkFBa0IsQ0FFVixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTswQkFGOUIsa0JBQWtCOztBQUlwQiwrQkFKRSxrQkFBa0IsNkNBSWQsUUFBUSxFQUFFO0FBQ2hCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0dBRXZCOztlQVJHLGtCQUFrQjs7V0FVYixxQkFBRzs7QUFFVixVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxhQUFVLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxPQUFJO0tBRWhDOzs7V0FFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVQsVUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVYLGFBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUlsRDs7O1NBMUJHLGtCQUFrQjs7O3FCQTZCVCxrQkFBa0IiLCJmaWxlIjoiRnVuY3Rpb25FeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGdW5jdGlvbkV4cHJlc3Npb25cbiAqL1xuY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgTm9kZXtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICB2YXIgYXJncyA9IHRoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGAke3RoaXMubmFtZX0oJHthcmdzfSlgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBub2RlICA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLm5hbWUpLlxuICAgICAgYWRkKCcoJyk7XG5cbiAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbyk7XG5cblxuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25FeHByZXNzaW9uXG5cbiJdfQ==