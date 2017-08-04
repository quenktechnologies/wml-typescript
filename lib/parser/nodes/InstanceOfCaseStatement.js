'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InstanceOfCaseStatement
 */
var InstanceOfCaseStatement = function (_Node) {
    _inherits(InstanceOfCaseStatement, _Node);

    function InstanceOfCaseStatement(candidate, body, location) {
        _classCallCheck(this, InstanceOfCaseStatement);

        var _this = _possibleConstructorReturn(this, (InstanceOfCaseStatement.__proto__ || Object.getPrototypeOf(InstanceOfCaseStatement)).call(this));

        _this.type = 'instanceof-case-statement';
        _this.candidate = candidate;
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(InstanceOfCaseStatement, [{
        key: 'toExpression',
        value: function toExpression(id, otherwise, o) {

            var body = (0, _util.flatten)(this.body, o);

            return '(' + id + ' instanceof ' + this.candidate.transpile(o) + ')? ' + body + ' : ' + otherwise;
        }
    }, {
        key: 'transpile',
        value: function transpile(o) {

            throw new Error('InstanceOfCaseStatement cannot be traspiled!');
        }
    }]);

    return InstanceOfCaseStatement;
}(_Node3.default);

exports.default = InstanceOfCaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW5zdGFuY2VPZkNhc2VTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiSW5zdGFuY2VPZkNhc2VTdGF0ZW1lbnQiLCJjYW5kaWRhdGUiLCJib2R5IiwibG9jYXRpb24iLCJ0eXBlIiwiaWQiLCJvdGhlcndpc2UiLCJvIiwidHJhbnNwaWxlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsdUI7OztBQUVGLHFDQUFZQyxTQUFaLEVBQXVCQyxJQUF2QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFBQTs7QUFBQTs7QUFJbkMsY0FBS0MsSUFBTCxHQUFZLDJCQUFaO0FBQ0EsY0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQbUM7QUFTdEM7Ozs7cUNBRVlFLEUsRUFBSUMsUyxFQUFXQyxDLEVBQUc7O0FBRTNCLGdCQUFJTCxPQUFPLG1CQUFRLEtBQUtBLElBQWIsRUFBbUJLLENBQW5CLENBQVg7O0FBRUEseUJBQVdGLEVBQVgsb0JBQTRCLEtBQUtKLFNBQUwsQ0FBZU8sU0FBZixDQUF5QkQsQ0FBekIsQ0FBNUIsV0FBNkRMLElBQTdELFdBQXVFSSxTQUF2RTtBQUVIOzs7a0NBRVNDLEMsRUFBRzs7QUFFVCxrQkFBTSxJQUFJRSxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUVIOzs7Ozs7a0JBSVVULHVCIiwiZmlsZSI6Ikluc3RhbmNlT2ZDYXNlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBJbnN0YW5jZU9mQ2FzZVN0YXRlbWVudFxuICovXG5jbGFzcyBJbnN0YW5jZU9mQ2FzZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY2FuZGlkYXRlLCBib2R5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ2luc3RhbmNlb2YtY2FzZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9FeHByZXNzaW9uKGlkLCBvdGhlcndpc2UsIG8pIHtcblxuICAgICAgICB2YXIgYm9keSA9IGZsYXR0ZW4odGhpcy5ib2R5LCBvKTtcblxuICAgICAgICByZXR1cm4gYCgke2lkfSBpbnN0YW5jZW9mICR7dGhpcy5jYW5kaWRhdGUudHJhbnNwaWxlKG8pfSk/ICR7Ym9keX0gOiAke290aGVyd2lzZX1gO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbmNlT2ZDYXNlU3RhdGVtZW50IGNhbm5vdCBiZSB0cmFzcGlsZWQhJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPZkNhc2VTdGF0ZW1lbnRcbiJdfQ==