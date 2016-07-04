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
 * ForStatement 
 */

var ForStatement = (function (_Node) {
    _inherits(ForStatement, _Node);

    function ForStatement(variable, indexName, target, children, location) {
        _classCallCheck(this, ForStatement);

        _get(Object.getPrototypeOf(ForStatement.prototype), 'constructor', this).call(this, location);
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
    }

    _createClass(ForStatement, [{
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

    return ForStatement;
})(_Node3['default']);

exports['default'] = ForStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7QUFFekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUlSLFlBQVk7Y0FBWixZQUFZOztBQUVILGFBRlQsWUFBWSxDQUVGLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7OEJBRjNELFlBQVk7O0FBSVYsbUNBSkYsWUFBWSw2Q0FJSixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVZDLFlBQVk7O2VBWUwscUJBQUc7O0FBRVIsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixtQkFBTyxrQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsNEJBQzFCLEtBQUssVUFBSyxJQUFJLENBQUMsUUFBUSxVQUFLLElBQUksQ0FBQyxTQUFTLFNBQUssaUJBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBa0IsQ0FBQztTQUV0RTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsZ0JBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQixHQUFHLG1CQUFpQixLQUFLLFVBQUssSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFNLENBQ3BFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFaEIsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBR3ZDOzs7V0FyQ0MsWUFBWTs7O3FCQXlDSCxZQUFZIiwiZmlsZSI6IkZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZvclN0YXRlbWVudCBcbiAqL1xuY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgaW5kZXhOYW1lLCB0YXJnZXQsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgICAgICB0aGlzLmluZGV4TmFtZSA9IGluZGV4TmFtZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICByZXR1cm4gYG1ha2UuZm9ybG9vcCgke3RoaXMudGFyZ2V0LnRyYW5zcGlsZSgpfSxgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBmb3JfJHtjb3VudH0gKCR7dGhpcy52YXJpYWJsZX0sICR7dGhpcy5pbmRleE5hbWV9KSB7YCArXG4gICAgICAgICAgICBgcmV0dXJuIFske3RoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmNoaWxkcmVuKX1dOyB9LmJpbmQodGhpcykpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICBub2RlLmFkZCgnbWFrZS5mb3Jsb29wKCcpLlxuICAgICAgICBhZGQodGhpcy50YXJnZXQuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgZnVuY3Rpb24gZm9yXyR7Y291bnR9ICgke3RoaXMudmFyaWFibGV9LCAke3RoaXMuaW5kZXhOYW1lfSkge2ApLlxuICAgICAgICBhZGQoJ3JldHVybiBbJyk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKTtcbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCddOyB9LmJpbmQodGhpcykpJyk7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JTdGF0ZW1lbnRcbiJdfQ==