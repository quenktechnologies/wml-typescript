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

var count = 0;
/**
 * ForLoop 
 */

var ForLoop = (function (_Node) {
    _inherits(ForLoop, _Node);

    function ForLoop(variable, indexName, target, children, location) {
        _classCallCheck(this, ForLoop);

        _get(Object.getPrototypeOf(ForLoop.prototype), 'constructor', this).call(this, location);
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
    }

    _createClass(ForLoop, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;

            return 'make.forloop(' + this.target.transpile() + ',' + ('function for_' + count + ' (' + this.variable + ', ' + this.indexName + ') {') + ('return [' + this.transpileList(this.children) + ']; }.bind(this))');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            count = count + 1;

            node.add('make.forloop(').add(this.target.compile(o)).add('function for_' + count + ' (' + this.variable + ', ' + this.indexName + ') {').add('return [');

            this.compileList(this.children, node, o);
            return node.add(']; }.bind(this))');
        }
    }]);

    return ForLoop;
})(_Node3['default']);

exports['default'] = ForLoop;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRm9yTG9vcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7O0FBRXpCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFJUixPQUFPO2NBQVAsT0FBTzs7QUFFRSxhQUZULE9BQU8sQ0FFRyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOzhCQUYzRCxPQUFPOztBQUlMLG1DQUpGLE9BQU8sNkNBSUMsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFWQyxPQUFPOztlQVlBLHFCQUFHOztBQUVSLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsbUJBQU8sa0JBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLDRCQUMxQixLQUFLLFVBQUssSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFLLGlCQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQWtCLENBQUM7U0FFdEU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRWxCLGdCQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxtQkFBaUIsS0FBSyxVQUFLLElBQUksQ0FBQyxRQUFRLFVBQUssSUFBSSxDQUFDLFNBQVMsU0FBTSxDQUNwRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWhCLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUd2Qzs7O1dBckNDLE9BQU87OztxQkF5Q0UsT0FBTyIsImZpbGUiOiJGb3JMb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcbi8qKlxuICogRm9yTG9vcCBcbiAqL1xuY2xhc3MgRm9yTG9vcCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFyaWFibGUsIGluZGV4TmFtZSwgdGFyZ2V0LCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICAgICAgdGhpcy5pbmRleE5hbWUgPSBpbmRleE5hbWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLmZvcmxvb3AoJHt0aGlzLnRhcmdldC50cmFuc3BpbGUoKX0sYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gZm9yXyR7Y291bnR9ICgke3RoaXMudmFyaWFibGV9LCAke3RoaXMuaW5kZXhOYW1lfSkge2AgK1xuICAgICAgICAgICAgYHJldHVybiBbJHt0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5jaGlsZHJlbil9XTsgfS5iaW5kKHRoaXMpKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgbm9kZS5hZGQoJ21ha2UuZm9ybG9vcCgnKS5cbiAgICAgICAgYWRkKHRoaXMudGFyZ2V0LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoYGZ1bmN0aW9uIGZvcl8ke2NvdW50fSAoJHt0aGlzLnZhcmlhYmxlfSwgJHt0aGlzLmluZGV4TmFtZX0pIHtgKS5cbiAgICAgICAgYWRkKCdyZXR1cm4gWycpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbyk7XG4gICAgICAgIHJldHVybiBub2RlLmFkZCgnXTsgfS5iaW5kKHRoaXMpKScpO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yTG9vcFxuIl19