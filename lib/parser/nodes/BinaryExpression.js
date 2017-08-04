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
 * BinaryExpression
 */
var BinaryExpression = function (_Node) {
    _inherits(BinaryExpression, _Node);

    function BinaryExpression(left, op, right, location) {
        _classCallCheck(this, BinaryExpression);

        var _this = _possibleConstructorReturn(this, (BinaryExpression.__proto__ || Object.getPrototypeOf(BinaryExpression)).call(this, location));

        _this.type = 'binary-expression';
        _this.left = left;
        _this.op = op;
        _this.right = right;

        return _this;
    }

    _createClass(BinaryExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            return this.left.transpile(o) + ' ' + this.op + ' ' + this.right.transpile(o);
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.left.compile(o)).add(this.op).add(this.right.compile(o));
        }
    }]);

    return BinaryExpression;
}(_Node3.default);

exports.default = BinaryExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQmluYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJCaW5hcnlFeHByZXNzaW9uIiwibGVmdCIsIm9wIiwicmlnaHQiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxnQjs7O0FBRUYsOEJBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCQyxLQUF0QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFBQTs7QUFBQSx3SUFFN0JBLFFBRjZCOztBQUduQyxjQUFLQyxJQUFMLEdBQVksbUJBQVo7QUFDQSxjQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBTm1DO0FBUXRDOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsbUJBQVUsS0FBS0wsSUFBTCxDQUFVTSxTQUFWLENBQW9CRCxDQUFwQixDQUFWLFNBQW9DLEtBQUtKLEVBQXpDLFNBQStDLEtBQUtDLEtBQUwsQ0FBV0ksU0FBWCxDQUFxQkQsQ0FBckIsQ0FBL0M7QUFFSDs7O2dDQUVPQSxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS0UsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsRUFBNUIsRUFDUEMsR0FETyxDQUNILEtBQUtULElBQUwsQ0FBVVUsT0FBVixDQUFrQkwsQ0FBbEIsQ0FERyxFQUVQSSxHQUZPLENBRUgsS0FBS1IsRUFGRixFQUdQUSxHQUhPLENBR0gsS0FBS1AsS0FBTCxDQUFXUSxPQUFYLENBQW1CTCxDQUFuQixDQUhHLENBQVA7QUFLQzs7Ozs7O2tCQUdVTixnQiIsImZpbGUiOiJCaW5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCaW5hcnlFeHByZXNzaW9uXG4gKi9cbmNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIG9wLCByaWdodCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdiaW5hcnktZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5sZWZ0LnRyYW5zcGlsZShvKX0gJHt0aGlzLm9wfSAke3RoaXMucmlnaHQudHJhbnNwaWxlKG8pfWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKHRoaXMubGVmdC5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKHRoaXMub3ApLlxuICAgICAgICBhZGQodGhpcy5yaWdodC5jb21waWxlKG8pKTtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZXhwb3J0IGRlZmF1bHQgQmluYXJ5RXhwcmVzc2lvblxuIl19