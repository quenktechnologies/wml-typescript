'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MemberExpression
 * @param {Expression} object
 * @param {Expression} member
 */
var MemberExpression = function (_Node) {
    _inherits(MemberExpression, _Node);

    function MemberExpression(object, member, location) {
        _classCallCheck(this, MemberExpression);

        var _this = _possibleConstructorReturn(this, (MemberExpression.__proto__ || Object.getPrototypeOf(MemberExpression)).call(this));

        _this.type = 'member-expression';
        _this.object = object;
        _this.member = member;
        _this.location = location;

        return _this;
    }

    _createClass(MemberExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            return this.object.transpile(o) + '.' + this.member.transpile(o);
        }
    }]);

    return MemberExpression;
}(_Node3.default);

exports.default = MemberExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWVtYmVyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwibWVtYmVyIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsZ0I7OztBQUVGLDhCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsbUJBQVUsS0FBS0osTUFBTCxDQUFZSyxTQUFaLENBQXNCRCxDQUF0QixDQUFWLFNBQXNDLEtBQUtILE1BQUwsQ0FBWUksU0FBWixDQUFzQkQsQ0FBdEIsQ0FBdEM7QUFFSDs7Ozs7O2tCQUdVTCxnQiIsImZpbGUiOiJNZW1iZXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBJZGVudGlmaWVyIGZyb20gJy4vSWRlbnRpZmllcic7XG5cbi8qKlxuICogTWVtYmVyRXhwcmVzc2lvblxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBvYmplY3RcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbWVtYmVyXG4gKi9cbmNsYXNzIE1lbWJlckV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgbWVtYmVyLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdtZW1iZXItZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5vYmplY3QudHJhbnNwaWxlKG8pfS4ke3RoaXMubWVtYmVyLnRyYW5zcGlsZShvKX1gO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNZW1iZXJFeHByZXNzaW9uXG4iXX0=