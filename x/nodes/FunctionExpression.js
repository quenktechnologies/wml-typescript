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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9GdW5jdGlvbkV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7SUFLbkIsa0JBQWtCO1lBQWxCLGtCQUFrQjs7QUFFWCxXQUZQLGtCQUFrQixDQUVWLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzBCQUY5QixrQkFBa0I7O0FBSXBCLCtCQUpFLGtCQUFrQiw2Q0FJZCxRQUFRLEVBQUU7QUFDaEIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7R0FFdkI7O2VBUkcsa0JBQWtCOztXQVViLHFCQUFHOztBQUVWLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLGFBQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLE9BQUk7S0FFaEM7OztXQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFVCxVQUFJLElBQUksR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRVgsYUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBSWxEOzs7U0ExQkcsa0JBQWtCOzs7cUJBNkJULGtCQUFrQiIsImZpbGUiOiJGdW5jdGlvbkV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZ1bmN0aW9uRXhwcmVzc2lvblxuICovXG5jbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBOb2Rle1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHZhciBhcmdzID0gdGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuYXJndW1lbnRzKTtcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke2FyZ3N9KWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIG5vZGUgID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMubmFtZSkuXG4gICAgICBhZGQoJygnKTtcblxuICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKTtcblxuXG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkV4cHJlc3Npb25cblxuIl19