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
    }, {
        key: 'compile',
        value: function compile(o) {

            var parts = this.path.split('.');
            var head = parts.shift();

            parts = parts.join('.');

            return this.sourceNode(o.fileName, '$$resolve(' + head + ', \'' + parts + '\')');
        }
    }]);

    return MemberExpression;
}(_Node3.default);

exports.default = MemberExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWVtYmVyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwibWVtYmVyIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInRyYW5zcGlsZSIsInBhcnRzIiwicGF0aCIsInNwbGl0IiwiaGVhZCIsInNoaWZ0Iiwiam9pbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsZ0I7OztBQUVGLDhCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsbUJBQVUsS0FBS0osTUFBTCxDQUFZSyxTQUFaLENBQXNCRCxDQUF0QixDQUFWLFNBQXNDLEtBQUtILE1BQUwsQ0FBWUksU0FBWixDQUFzQkQsQ0FBdEIsQ0FBdEM7QUFFSDs7O2dDQUVPQSxDLEVBQUc7O0FBRVAsZ0JBQUlFLFFBQVEsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCLEdBQWhCLENBQVo7QUFDQSxnQkFBSUMsT0FBT0gsTUFBTUksS0FBTixFQUFYOztBQUVBSixvQkFBUUEsTUFBTUssSUFBTixDQUFXLEdBQVgsQ0FBUjs7QUFFQSxtQkFBTyxLQUFLQyxVQUFMLENBQWdCUixFQUFFUyxRQUFsQixpQkFBeUNKLElBQXpDLFlBQW1ESCxLQUFuRCxTQUFQO0FBRUg7Ozs7OztrQkFHVVAsZ0IiLCJmaWxlIjoiTWVtYmVyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgSWRlbnRpZmllciBmcm9tICcuL0lkZW50aWZpZXInO1xuXG4vKipcbiAqIE1lbWJlckV4cHJlc3Npb25cbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gb2JqZWN0XG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IG1lbWJlclxuICovXG5jbGFzcyBNZW1iZXJFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIG1lbWJlciwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWVtYmVyLWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMub2JqZWN0LnRyYW5zcGlsZShvKX0uJHt0aGlzLm1lbWJlci50cmFuc3BpbGUobyl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBwYXJ0cyA9IHRoaXMucGF0aC5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgaGVhZCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0cy5qb2luKCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBgJCRyZXNvbHZlKCR7aGVhZH0sICcke3BhcnRzfScpYCk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckV4cHJlc3Npb25cbiJdfQ==