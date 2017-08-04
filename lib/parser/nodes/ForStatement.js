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

            return '$$for(' + src + ', function for' + count + ' (' + args + ')' + ('{ return ' + (0, _util.flatten)(this.children, o) + ' }.bind(this),') + ('function for_otherwise' + count + '()') + ('{ return ' + (0, _util.flatten)(this.otherwise, o) + ' }.bind(this))');
        }
    }]);

    return ForStatement;
}(_Node3.default);

exports.default = ForStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5Iiwic3JjIiwiY2hpbGRyZW4iLCJvdGhlcndpc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwiYXJncyIsInRyYW5zcGlsZSIsImZpbHRlciIsImEiLCJqb2luIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaO0FBQ0E7Ozs7SUFHTUMsWTs7O0FBRUYsMEJBQVlDLFFBQVosRUFBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsR0FBcEMsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4REMsUUFBOUQsRUFBd0U7QUFBQTs7QUFBQSxnSUFFOURBLFFBRjhEOztBQUdwRSxjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtQLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFUb0U7QUFXdkU7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCxnQkFBSUMsT0FBTyxDQUNQLEtBQUtULFFBQUwsQ0FBY1UsU0FBZCxDQUF3QkYsQ0FBeEIsQ0FETyxFQUVQLEtBQUtQLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdTLFNBQVgsQ0FBcUJGLENBQXJCLENBRlAsRUFHUCxLQUFLTixLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXUSxTQUFYLENBQXFCRixDQUFyQixDQUhQLEVBSVRHLE1BSlMsQ0FJRjtBQUFBLHVCQUFLQyxDQUFMO0FBQUEsYUFKRSxFQUlNQyxJQUpOLENBSVcsR0FKWCxDQUFYOztBQU1BLGdCQUFJVixNQUFNLEtBQUtBLEdBQUwsQ0FBU08sU0FBVCxDQUFtQkYsQ0FBbkIsQ0FBVjtBQUNBLGdCQUFJSCxZQUFZLEtBQUtBLFNBQUwsQ0FBZVMsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFTCxTQUFGLENBQVlGLENBQVosQ0FBTDtBQUFBLGFBQW5CLENBQWhCOztBQUVBVixvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxtQkFBTyxXQUFTSyxHQUFULHNCQUE2QkwsS0FBN0IsVUFBdUNXLElBQXZDLHdCQUNTLG1CQUFRLEtBQUtMLFFBQWIsRUFBdUJJLENBQXZCLENBRFQsbURBRXNCVixLQUZ0QiwwQkFHUyxtQkFBUSxLQUFLTyxTQUFiLEVBQXdCRyxDQUF4QixDQUhULG9CQUFQO0FBT0g7Ozs7OztrQkFHVVQsWSIsImZpbGUiOiJGb3JTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4uL3V0aWwnO1xuXG52YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGb3JTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgaW5kZXgsIGFycmF5LCBzcmMsIGNoaWxkcmVuLCBvdGhlcndpc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZm9yLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMub3RoZXJ3aXNlID0gb3RoZXJ3aXNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgYXJncyA9IFtcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGUudHJhbnNwaWxlKG8pLFxuICAgICAgICAgICAgdGhpcy5pbmRleCAmJiB0aGlzLmluZGV4LnRyYW5zcGlsZShvKSxcbiAgICAgICAgICAgIHRoaXMuYXJyYXkgJiYgdGhpcy5hcnJheS50cmFuc3BpbGUobylcbiAgICAgICAgXS5maWx0ZXIoYSA9PiBhKS5qb2luKCcsJyk7XG5cbiAgICAgICAgdmFyIHNyYyA9IHRoaXMuc3JjLnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIG90aGVyd2lzZSA9IHRoaXMub3RoZXJ3aXNlLm1hcChjID0+IGMudHJhbnNwaWxlKG8pKTtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICByZXR1cm4gYCQkZm9yKCR7c3JjfSwgZnVuY3Rpb24gZm9yJHtjb3VudH0gKCR7YXJnc30pYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJHtmbGF0dGVuKHRoaXMuY2hpbGRyZW4sIG8pfSB9LmJpbmQodGhpcyksYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gZm9yX290aGVyd2lzZSR7Y291bnR9KClgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy5vdGhlcndpc2UsIG8pfSB9LmJpbmQodGhpcykpYDtcblxuXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvclN0YXRlbWVudFxuIl19