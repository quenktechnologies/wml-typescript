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

var count = 0;
/**
 * ForStatement
 */

var ForStatement = function (_Node) {
    _inherits(ForStatement, _Node);

    function ForStatement(variable, index, array, src, children, otherwise, location) {
        _classCallCheck(this, ForStatement);

        var _this = _possibleConstructorReturn(this, (ForStatement.__proto__ || Object.getPrototypeOf(ForStatement)).call(this, location));

        _this.type = 'for-statement';
        _this.variable = variable;
        _this.index = index;
        _this.array = array;
        _this.src = src;
        _this.children = children;
        _this.otherwise = otherwise;

        return _this;
    }

    _createClass(ForStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = [this.variable.transpile(o), this.index && this.index.transpile(o), this.array && this.array.transpile(o)].filter(function (a) {
                return a;
            }).join(',');

            var src = this.src.transpile(o);
            var otherwise = this.otherwise.map(function (c) {
                return c.transpile(o);
            });

            count = count + 1;

            return '$$for(' + src + ', function for' + count + ' (' + args + ')' + ('{ return ' + (0, _util.flatten)(this.children, o) + ' },') + ('function for_otherwise' + count + '()') + ('{ return ' + (0, _util.flatten)(this.otherwise, o) + ' })');
        }
    }]);

    return ForStatement;
}(_Node3.default);

exports.default = ForStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5Iiwic3JjIiwiY2hpbGRyZW4iLCJvdGhlcndpc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwiYXJncyIsInRyYW5zcGlsZSIsImZpbHRlciIsImEiLCJqb2luIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaO0FBQ0E7Ozs7SUFHTUMsWTs7O0FBRUYsMEJBQVlDLFFBQVosRUFBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsR0FBcEMsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4REMsUUFBOUQsRUFBd0U7QUFBQTs7QUFBQSxnSUFFOURBLFFBRjhEOztBQUdwRSxjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtQLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFUb0U7QUFXdkU7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCxnQkFBSUMsT0FBTyxDQUNQLEtBQUtULFFBQUwsQ0FBY1UsU0FBZCxDQUF3QkYsQ0FBeEIsQ0FETyxFQUVQLEtBQUtQLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdTLFNBQVgsQ0FBcUJGLENBQXJCLENBRlAsRUFHUCxLQUFLTixLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXUSxTQUFYLENBQXFCRixDQUFyQixDQUhQLEVBSVRHLE1BSlMsQ0FJRjtBQUFBLHVCQUFLQyxDQUFMO0FBQUEsYUFKRSxFQUlNQyxJQUpOLENBSVcsR0FKWCxDQUFYOztBQU1BLGdCQUFJVixNQUFNLEtBQUtBLEdBQUwsQ0FBU08sU0FBVCxDQUFtQkYsQ0FBbkIsQ0FBVjtBQUNBLGdCQUFJSCxZQUFZLEtBQUtBLFNBQUwsQ0FBZVMsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFTCxTQUFGLENBQVlGLENBQVosQ0FBTDtBQUFBLGFBQW5CLENBQWhCOztBQUVBVixvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxtQkFBTyxXQUFTSyxHQUFULHNCQUE2QkwsS0FBN0IsVUFBdUNXLElBQXZDLHdCQUNTLG1CQUFRLEtBQUtMLFFBQWIsRUFBdUJJLENBQXZCLENBRFQsd0NBRXNCVixLQUZ0QiwwQkFHUyxtQkFBUSxLQUFLTyxTQUFiLEVBQXdCRyxDQUF4QixDQUhULFNBQVA7QUFPSDs7Ozs7O2tCQUdVVCxZIiwiZmlsZSI6IkZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi4vdXRpbCc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZvclN0YXRlbWVudFxuICovXG5jbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleCwgYXJyYXksIHNyYywgY2hpbGRyZW4sIG90aGVyd2lzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmb3Itc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5vdGhlcndpc2UgPSBvdGhlcndpc2U7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gW1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZS50cmFuc3BpbGUobyksXG4gICAgICAgICAgICB0aGlzLmluZGV4ICYmIHRoaXMuaW5kZXgudHJhbnNwaWxlKG8pLFxuICAgICAgICAgICAgdGhpcy5hcnJheSAmJiB0aGlzLmFycmF5LnRyYW5zcGlsZShvKVxuICAgICAgICBdLmZpbHRlcihhID0+IGEpLmpvaW4oJywnKTtcblxuICAgICAgICB2YXIgc3JjID0gdGhpcy5zcmMudHJhbnNwaWxlKG8pO1xuICAgICAgICB2YXIgb3RoZXJ3aXNlID0gdGhpcy5vdGhlcndpc2UubWFwKGMgPT4gYy50cmFuc3BpbGUobykpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgJCRmb3IoJHtzcmN9LCBmdW5jdGlvbiBmb3Ike2NvdW50fSAoJHthcmdzfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy5jaGlsZHJlbiwgbyl9IH0sYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gZm9yX290aGVyd2lzZSR7Y291bnR9KClgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy5vdGhlcndpc2UsIG8pfSB9KWA7XG5cblxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JTdGF0ZW1lbnRcbiJdfQ==