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
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */
var ArrayLiteral = function (_Node) {
    _inherits(ArrayLiteral, _Node);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        var _this = _possibleConstructorReturn(this, (ArrayLiteral.__proto__ || Object.getPrototypeOf(ArrayLiteral)).call(this, location));

        _this.type = 'array-literal';
        _this.members = members;
        return _this;
    }

    _createClass(ArrayLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '[' + this.members.map(function (m) {
                return m.transpile();
            }).join(',') + ']';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '[');
            this.compileList(this.members, node, o).add(']');
            return node;
        }
    }]);

    return ArrayLiteral;
}(_Node3.default);

exports.default = ArrayLiteral;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQXJyYXlMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIkFycmF5TGl0ZXJhbCIsIm1lbWJlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsIm8iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiY29tcGlsZUxpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxZOzs7QUFFRiwwQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFBQSxnSUFDckJBLFFBRHFCOztBQUUzQixjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUgyQjtBQUk5Qjs7OztvQ0FFVzs7QUFFUixtQkFBTyxNQUFNLEtBQUtBLE9BQUwsQ0FBYUcsR0FBYixDQUFpQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLEVBQUw7QUFBQSxhQUFqQixFQUFxQ0MsSUFBckMsQ0FBMEMsR0FBMUMsQ0FBTixHQUF1RCxHQUE5RDtBQUVIOzs7Z0NBRU9DLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixHQUE1QixDQUFYO0FBQ0EsaUJBQUtDLFdBQUwsQ0FBaUIsS0FBS1gsT0FBdEIsRUFBK0JRLElBQS9CLEVBQXFDRCxDQUFyQyxFQUF3Q0ssR0FBeEMsQ0FBNEMsR0FBNUM7QUFDQSxtQkFBT0osSUFBUDtBQUVIOzs7Ozs7a0JBR1VULFkiLCJmaWxlIjoiQXJyYXlMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXJyYXktbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiAnWycgKyB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpICsgJ10nO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ1snKTtcbiAgICAgICAgdGhpcy5jb21waWxlTGlzdCh0aGlzLm1lbWJlcnMsIG5vZGUsIG8pLmFkZCgnXScpO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlMaXRlcmFsXG4iXX0=