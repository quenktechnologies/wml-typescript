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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0Nhc2VTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztJQVFSLGFBQWE7Y0FBYixhQUFhOztBQUVKLGFBRlQsYUFBYSxDQUVILFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOzhCQUYxQyxhQUFhOztBQUlYLG1DQUpGLGFBQWEsNkNBSUwsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFUQyxhQUFhOztlQVdOLHFCQUFHOztBQUVSLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNsQixtQkFBTyw0QkFBMEIsS0FBSywwQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFnQixDQUFDO1NBRTNEOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSw4QkFBNEIsS0FBSyxtQkFBZ0IsQ0FBQzs7QUFFdkYsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDL0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBRXhCOzs7V0E1QkMsYUFBYTs7O3FCQWdDSixhQUFhIiwiZmlsZSI6IkNhc2VTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgY291bnQgPSAwO1xuXG4vKipcbiAqIENhc2VTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge1ZhbHVlRXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBDYXNlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGNhc2Vfc3RhdGVtZW50JHtjb3VudH0oKSB7IHJldHVybmArXG4gICAgICAgICAgYFske3RoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmNoaWxkcmVuKX1dO30uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBgZnVuY3Rpb24gY2FzZV9zdGF0ZW1lbnQke2NvdW50fSgpIHsgcmV0dXJuIFtgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCddO30uYmluZCh0aGlzJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0YXRlbWVudFxuIl19