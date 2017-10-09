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
 * Filter
 */
var Filter = function (_Node) {
    _inherits(Filter, _Node);

    function Filter(name, args, location) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, location));

        _this.type = 'filter';
        _this.name = name;
        _this.arguments = args;

        return _this;
    }

    _createClass(Filter, [{
        key: 'addValue',
        value: function addValue(o) {

            this.arguments = [o].concat(this.arguments);
            return this;
        }
    }, {
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            });
            return this.name + '(' + args + ')';
        }
    }]);

    return Filter;
}(_Node3.default);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRmlsdGVyLmpzIl0sIm5hbWVzIjpbIkZpbHRlciIsIm5hbWUiLCJhcmdzIiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwibyIsImNvbmNhdCIsIm1hcCIsImEiLCJ0cmFuc3BpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsTTs7O0FBRUYsb0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLG9IQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0ksU0FBTCxHQUFpQkgsSUFBakI7O0FBTDhCO0FBT2pDOzs7O2lDQUVRSSxDLEVBQUc7O0FBRVIsaUJBQUtELFNBQUwsR0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxNQUFKLENBQVcsS0FBS0YsU0FBaEIsQ0FBakI7QUFDQSxtQkFBTyxJQUFQO0FBRUg7OztrQ0FFU0MsQyxFQUFHOztBQUVULGdCQUFJSixPQUFPLEtBQUtHLFNBQUwsQ0FBZUcsR0FBZixDQUFtQjtBQUFBLHVCQUFHQyxFQUFFQyxTQUFGLENBQVlKLENBQVosQ0FBSDtBQUFBLGFBQW5CLENBQVg7QUFDQSxtQkFBVSxLQUFLTCxJQUFmLFNBQXVCQyxJQUF2QjtBQUVIOzs7Ozs7a0JBSVVGLE0iLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWx0ZXJcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbHRlcic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIGFkZFZhbHVlKG8pIHtcblxuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IFtvXS5jb25jYXQodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAoYT0+YS50cmFuc3BpbGUobykpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke2FyZ3N9KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXX0=