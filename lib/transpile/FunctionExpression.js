
/**
 * FunctionExpression
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FunctionExpression = (function () {
  function FunctionExpression(name, args) {
    _classCallCheck(this, FunctionExpression);

    this.name = name;
    this.args = args;
  }

  _createClass(FunctionExpression, [{
    key: 'toString',
    value: function toString() {

      return this.name + '(' + this.args.join(',') + ')';
    }
  }]);

  return FunctionExpression;
})();

exports['default'] = FunctionExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRnVuY3Rpb25FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sa0JBQWtCO0FBRVgsV0FGUCxrQkFBa0IsQ0FFVixJQUFJLEVBQUUsSUFBSSxFQUFFOzBCQUZwQixrQkFBa0I7O0FBSXBCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBRWxCOztlQVBHLGtCQUFrQjs7V0FTZCxvQkFBRzs7QUFFVCxhQUFVLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQUk7S0FFL0M7OztTQWJHLGtCQUFrQjs7O3FCQWdCVCxrQkFBa0IiLCJmaWxlIjoiRnVuY3Rpb25FeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEZ1bmN0aW9uRXhwcmVzc2lvblxuICovXG5jbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24ge1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MpIHtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcmdzID0gYXJncztcblxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG5cbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke3RoaXMuYXJncy5qb2luKCcsJyl9KWA7XG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkV4cHJlc3Npb25cblxuIl19