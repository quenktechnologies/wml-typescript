
/**
 * ArrayLiteral 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ArrayLiteral = (function () {
  function ArrayLiteral(members, location) {
    _classCallCheck(this, ArrayLiteral);

    this.members = members;
    this.location = location;
  }

  _createClass(ArrayLiteral, [{
    key: 'toString',
    value: function toString() {

      return '[ ' + this.members.join(',') + ' ]';
    }
  }]);

  return ArrayLiteral;
})();

exports['default'] = ArrayLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQXJyYXlMaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sWUFBWTtBQUVMLFdBRlAsWUFBWSxDQUVKLE9BQU8sRUFBRSxRQUFRLEVBQUU7MEJBRjNCLFlBQVk7O0FBR2xCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBQ3RCOztlQUxHLFlBQVk7O1dBT1Isb0JBQUc7O0FBRVQsb0JBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQUs7S0FFeEM7OztTQVhHLFlBQVk7OztxQkFlSCxZQUFZIiwiZmlsZSI6IkFycmF5TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCB7XG5cbiAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcbnRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG50aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICB0b1N0cmluZygpIHtcblxuICAgIHJldHVybiBgWyAke3RoaXMubWVtYmVycy5qb2luKCcsJyl9IF1gO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUxpdGVyYWxcblxuIl19