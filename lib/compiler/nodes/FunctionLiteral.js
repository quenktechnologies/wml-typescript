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
        this.type = 'function-literal';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9GdW5jdGlvbkxpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0lBT1IsZUFBZTtjQUFmLGVBQWU7O0FBRU4sYUFGVCxlQUFlLENBRUwsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRnRDLGVBQWU7O0FBSWIsbUNBSkYsZUFBZSw2Q0FJUCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVwQjs7aUJBVEMsZUFBZTs7ZUFXUixxQkFBRzs7QUFFUixnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixtQkFBTywrQkFBNkIsS0FBSyxTQUFJLE1BQU0sd0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFnQixDQUFDO1NBRXpEOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVQsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFM0MsZ0JBQUksQ0FBQyxHQUFHLGdDQUE4QixLQUFLLFNBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQUksQ0FDMUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVqQixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBRTdCOzs7V0EvQkMsZUFBZTs7O3FCQW1DTixlQUFlIiwiZmlsZSI6IkZ1bmN0aW9uTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZ1bmN0aW9uTGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gcGFyYW1ldGVycyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gYm9keSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBGdW5jdGlvbkxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIGJvZHksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZnVuY3Rpb24tbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucGFyYW1ldGVycy5qb2luKCcsJyk7XG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgZnVuY3Rpb24gZnVuY3Rpb25fbGl0ZXJhbF8ke2NvdW50fSgke3BhcmFtc30pYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJHt0aGlzLmJvZHkudHJhbnNwaWxlKCl9OyB9LmJpbmQodGhpcylgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgbm9kZS5hZGQoYGZ1bmN0aW9uIGZ1bmN0aW9uX2xpdGVyYWxfJHtjb3VudH0oJHt0aGlzLnBhcmFtZXRlcnMuam9pbignLCcpfSlgKS5cbiAgICAgICAgYWRkKCd7IHJldHVybiAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmJvZHkuY29tcGlsZShvKSkuXG4gICAgICAgICAgICBhZGQoJzsgfSBiaW5kKHRoaXMpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25MaXRlcmFsXG4iXX0=