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
 * CaseStatement 
 * @param {ValueExpression} expression
 * @param {array<Expression>} children 
 * @param {Location} location
 */

var CaseStatement = (function (_Node) {
    _inherits(CaseStatement, _Node);

    function CaseStatement(expression, children, location) {
        _classCallCheck(this, CaseStatement);

        _get(Object.getPrototypeOf(CaseStatement.prototype), 'constructor', this).call(this, location);
        this.expression = expression;
        this.children = children;
        this.location = location;
    }

    _createClass(CaseStatement, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;
            return 'function case_statement' + count + '() { return' + ('[' + this.transpileList(this.children) + '];}.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            count = count + 1;

            var node = this.sourceNode(o.fileName, 'function case_statement' + count + '() { return [');

            return this.compileList(this.children, node, o).add('];}.bind(this');
        }
    }]);

    return CaseStatement;
})(_Node3['default']);

exports['default'] = CaseStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9DYXNlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7QUFFekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRUixhQUFhO2NBQWIsYUFBYTs7QUFFSixhQUZULGFBQWEsQ0FFSCxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs4QkFGMUMsYUFBYTs7QUFJWCxtQ0FKRixhQUFhLDZDQUlMLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsYUFBYTs7ZUFXTixxQkFBRzs7QUFFUixpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbEIsbUJBQU8sNEJBQTBCLEtBQUssMEJBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBZ0IsQ0FBQztTQUUzRDs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsOEJBQTRCLEtBQUssbUJBQWdCLENBQUM7O0FBRXZGLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQy9DLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUV4Qjs7O1dBNUJDLGFBQWE7OztxQkFnQ0osYUFBYSIsImZpbGUiOiJDYXNlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcblxuLyoqXG4gKiBDYXNlU3RhdGVtZW50IFxuICogQHBhcmFtIHtWYWx1ZUV4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ2FzZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBjYXNlX3N0YXRlbWVudCR7Y291bnR9KCkgeyByZXR1cm5gK1xuICAgICAgICAgIGBbJHt0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5jaGlsZHJlbil9XTt9LmJpbmQodGhpcylgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYGZ1bmN0aW9uIGNhc2Vfc3RhdGVtZW50JHtjb3VudH0oKSB7IHJldHVybiBbYCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnXTt9LmJpbmQodGhpcycpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdGF0ZW1lbnRcbiJdfQ==