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
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 * @param {Location} location 
 */

var FunctionLiteral = (function (_Node) {
    _inherits(FunctionLiteral, _Node);

    function FunctionLiteral(parameters, body, location) {
        _classCallCheck(this, FunctionLiteral);

        _get(Object.getPrototypeOf(FunctionLiteral.prototype), 'constructor', this).call(this, location);
        this.parameters = parameters;
        this.body = body;
    }

    _createClass(FunctionLiteral, [{
        key: 'transpile',
        value: function transpile() {

            var params = this.parameters.join(',');
            count = count + 1;

            return 'function function_literal_' + count + '(' + params + ')' + ('{ return ' + this.body.transpile() + '; }.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add('function function_literal_' + count + '(' + this.parameters.join(',') + ')').add('{ return ');

            return this.compileList(this.body.compile(o)).add('; } bind(this)');
        }
    }]);

    return FunctionLiteral;
})(_Node3['default']);

exports['default'] = FunctionLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9GdW5jdGlvbkxpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0lBT1IsZUFBZTtjQUFmLGVBQWU7O0FBRU4sYUFGVCxlQUFlLENBRUwsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRnRDLGVBQWU7O0FBSWIsbUNBSkYsZUFBZSw2Q0FJUCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FFcEI7O2lCQVJDLGVBQWU7O2VBVVIscUJBQUc7O0FBRVIsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsbUJBQU8sK0JBQTZCLEtBQUssU0FBSSxNQUFNLHdCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBZ0IsQ0FBQztTQUV6RDs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGdCQUFJLENBQUMsR0FBRyxnQ0FBOEIsS0FBSyxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFJLENBQzFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFakIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUU3Qjs7O1dBOUJDLGVBQWU7OztxQkFrQ04sZUFBZSIsImZpbGUiOiJGdW5jdGlvbkxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGdW5jdGlvbkxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHBhcmFtZXRlcnMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGJvZHkgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRnVuY3Rpb25MaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCBib2R5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKTtcbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7cGFyYW1zfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke3RoaXMuYm9keS50cmFuc3BpbGUoKX07IH0uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICBub2RlLmFkZChgZnVuY3Rpb24gZnVuY3Rpb25fbGl0ZXJhbF8ke2NvdW50fSgke3RoaXMucGFyYW1ldGVycy5qb2luKCcsJyl9KWApLlxuICAgICAgICBhZGQoJ3sgcmV0dXJuICcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYm9keS5jb21waWxlKG8pKS5cbiAgICAgICAgICAgIGFkZCgnOyB9IGJpbmQodGhpcyknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkxpdGVyYWxcbiJdfQ==