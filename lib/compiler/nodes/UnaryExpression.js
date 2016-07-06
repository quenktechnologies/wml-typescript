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
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */

var UnaryExpression = (function (_Node) {
  _inherits(UnaryExpression, _Node);

  function UnaryExpression(op, expression, location) {
    _classCallCheck(this, UnaryExpression);

    _get(Object.getPrototypeOf(UnaryExpression.prototype), 'constructor', this).call(this, location);
    this.op = op;
    this.expression = expression;
  }

  _createClass(UnaryExpression, [{
    key: 'transpile',
    value: function transpile() {

      return '' + this.op + this.expression.transpile();
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.op).add(this.expression.compile(o));
    }
  }]);

  return UnaryExpression;
})(_Node3['default']);

exports['default'] = UnaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9VbmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7SUFRbkIsZUFBZTtZQUFmLGVBQWU7O0FBRVIsV0FGUCxlQUFlLENBRVAsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7MEJBRmxDLGVBQWU7O0FBSWpCLCtCQUpFLGVBQWUsNkNBSVgsUUFBUSxFQUFFO0FBQ2hCLFFBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7R0FFOUI7O2VBUkcsZUFBZTs7V0FVVixxQkFBRzs7QUFFZCxrQkFBVSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUc7S0FFL0M7OztXQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFVCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBRW5DOzs7U0FyQkcsZUFBZTs7O3FCQXdCTixlQUFlIiwiZmlsZSI6IlVuYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVW5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG9wIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG9wLCBleHByZXNzaW9uLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMub3AgPSBvcDtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbnJldHVybiBgJHt0aGlzLm9wfSR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLm9wKS5cbiAgICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSk7XG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBVbmFyeUV4cHJlc3Npb25cblxuIl19