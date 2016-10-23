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
        value: function transpile() {

            var args = this.arguments.map(function (a) {
                return a.transpile();
            });
            return this.name + '.apply(this, [' + args + '])';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add(this.name + '.apply(this,').add('[');

            return this.compileList(this.arguments, node, o).add('])');
        }
    }]);

    return Filter;
}(_Node3.default);

exports.default = Filter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRmlsdGVyLmpzIl0sIm5hbWVzIjpbIkZpbHRlciIsIm5hbWUiLCJhcmdzIiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwibyIsImNvbmNhdCIsIm1hcCIsImEiLCJ0cmFuc3BpbGUiLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsTTs7O0FBRUYsb0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLG9IQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0ksU0FBTCxHQUFpQkgsSUFBakI7O0FBTDhCO0FBT2pDOzs7O2lDQUVRSSxDLEVBQUc7O0FBRVIsaUJBQUtELFNBQUwsR0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxNQUFKLENBQVcsS0FBS0YsU0FBaEIsQ0FBakI7QUFDQSxtQkFBTyxJQUFQO0FBRUg7OztvQ0FFVzs7QUFFUixnQkFBSUgsT0FBTyxLQUFLRyxTQUFMLENBQWVHLEdBQWYsQ0FBbUI7QUFBQSx1QkFBR0MsRUFBRUMsU0FBRixFQUFIO0FBQUEsYUFBbkIsQ0FBWDtBQUNBLG1CQUFVLEtBQUtULElBQWYsc0JBQW9DQyxJQUFwQztBQUVIOzs7Z0NBRU9JLEMsRUFBRzs7QUFFUCxnQkFBSUssT0FBTyxLQUFLQyxVQUFMLENBQWdCTixFQUFFTyxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBRixpQkFBS0csR0FBTCxDQUFZLEtBQUtiLElBQWpCLG1CQUNBYSxHQURBLENBQ0ksR0FESjs7QUFHQSxtQkFBTyxLQUFLQyxXQUFMLENBQWlCLEtBQUtWLFNBQXRCLEVBQWlDTSxJQUFqQyxFQUF1Q0wsQ0FBdkMsRUFDUFEsR0FETyxDQUNILElBREcsQ0FBUDtBQUdIOzs7Ozs7a0JBSVVkLE0iLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWx0ZXIgXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICBhZGRWYWx1ZShvKSB7XG5cbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBbb10uY29uY2F0KHRoaXMuYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAoYT0+YS50cmFuc3BpbGUoKSk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LmFwcGx5KHRoaXMsIFske2FyZ3N9XSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKGAke3RoaXMubmFtZX0uYXBwbHkodGhpcyxgKS5cbiAgICAgICAgYWRkKCdbJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJ10pJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXX0=