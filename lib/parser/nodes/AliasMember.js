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
 * AliasMember 
 * @param {string} member
 * @param {string} alias 
 * @param {Location} location
 */
var AliasMember = function (_Node) {
    _inherits(AliasMember, _Node);

    function AliasMember(member, alias, location) {
        _classCallCheck(this, AliasMember);

        var _this = _possibleConstructorReturn(this, (AliasMember.__proto__ || Object.getPrototypeOf(AliasMember)).call(this, location));

        _this.type = 'alias-member';
        _this.member = member;
        _this.alias = alias;

        return _this;
    }

    _createClass(AliasMember, [{
        key: 'transpile',
        value: function transpile() {

            return this.member + ' as ' + this.alias;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.member + ' as ' + this.alias).add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return AliasMember;
}(_Node3.default);

exports.default = AliasMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQWxpYXNNZW1iZXIuanMiXSwibmFtZXMiOlsiQWxpYXNNZW1iZXIiLCJtZW1iZXIiLCJhbGlhcyIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLFc7OztBQUVGLHlCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsUUFBM0IsRUFBcUM7QUFBQTs7QUFBQSw4SEFFM0JBLFFBRjJCOztBQUdqQyxjQUFLQyxJQUFMLEdBQVksY0FBWjtBQUNBLGNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFMaUM7QUFPcEM7Ozs7b0NBRVc7O0FBRVIsbUJBQVUsS0FBS0QsTUFBZixZQUE0QixLQUFLQyxLQUFqQztBQUVIOzs7Z0NBRU9HLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUErQixLQUFLTixNQUFwQyxZQUFpRCxLQUFLQyxLQUF0RCxFQUNQTSxHQURPLENBQ0gsS0FBS1AsTUFBTCxDQUFZUSxPQUFaLENBQW9CSixDQUFwQixDQURHLEVBRVBHLEdBRk8sQ0FFSCxLQUFLRSxNQUFMLENBQVlELE9BQVosQ0FBb0JKLENBQXBCLENBRkcsQ0FBUDtBQUlIOzs7Ozs7a0JBSVVMLFciLCJmaWxlIjoiQWxpYXNNZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEFsaWFzTWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lbWJlclxuICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQWxpYXNNZW1iZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgYWxpYXMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYWxpYXMtbWVtYmVyJztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5tZW1iZXJ9IGFzICR7dGhpcy5hbGlhc31gO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBgJHt0aGlzLm1lbWJlcn0gYXMgJHt0aGlzLmFsaWFzfWApLlxuICAgICAgICBhZGQodGhpcy5tZW1iZXIuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm1vZHVsZS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGlhc01lbWJlclxuIl19