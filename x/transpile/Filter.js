'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * Filter 
 */

var Filter = (function (_Node) {
    _inherits(Filter, _Node);

    function Filter(name, args, location) {
        _classCallCheck(this, Filter);

        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this, location);
        this.name = name;
        this.arguments = args;
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

            var args = this.arguments.slice();
            return this.name + '.apply(this, [' + this.transpileList(this.arguments) + '])';
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
})(_Node3['default']);

exports['default'] = Filter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLE1BQU07Y0FBTixNQUFNOztBQUVHLGFBRlQsTUFBTSxDQUVJLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZoQyxNQUFNOztBQUlKLG1DQUpGLE1BQU0sNkNBSUUsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBRXpCOztpQkFSQyxNQUFNOztlQVVBLGtCQUFDLENBQUMsRUFBRTs7QUFFUixnQkFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsbUJBQU8sSUFBSSxDQUFDO1NBRWY7OztlQUVRLHFCQUFHOztBQUVSLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xDLG1CQUFVLElBQUksQ0FBQyxJQUFJLHNCQUFpQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBSztTQUU5RTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGdCQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGtCQUFlLENBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFVCxtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFYjs7O1dBbENDLE1BQU07OztxQkFzQ0csTUFBTSIsImZpbGUiOiJGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZpbHRlciBcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgYWRkVmFsdWUobykge1xuXG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gW29dLmNvbmNhdCh0aGlzLmFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0uYXBwbHkodGhpcywgWyR7dGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuYXJndW1lbnRzKX1dKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQoYCR7dGhpcy5uYW1lfS5hcHBseSh0aGlzLGApLlxuICAgICAgICBhZGQoJ1snKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnXSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiJdfQ==