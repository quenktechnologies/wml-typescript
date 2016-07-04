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
 * BinaryExpression 
 */

var BinaryExpression = (function (_Node) {
    _inherits(BinaryExpression, _Node);

    function BinaryExpression(left, op, right, location) {
        _classCallCheck(this, BinaryExpression);

        _get(Object.getPrototypeOf(BinaryExpression.prototype), 'constructor', this).call(this, location);
        this.left = left;
        this.op = op;
        this.right = right;
    }

    _createClass(BinaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.left.transpile() + ' ' + this.op + ' ' + this.right.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.left.compile(o)).add(this.op).add(this.right.compile(o));
        }
    }]);

    return BinaryExpression;
})(_Node3['default']);

exports['default'] = BinaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQmluYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixnQkFBZ0I7Y0FBaEIsZ0JBQWdCOztBQUVQLGFBRlQsZ0JBQWdCLENBRU4sSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUZyQyxnQkFBZ0I7O0FBSWQsbUNBSkYsZ0JBQWdCLDZDQUlSLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBRXRCOztpQkFUQyxnQkFBZ0I7O2VBV1QscUJBQUc7O0FBRVIsbUJBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBSSxJQUFJLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUc7U0FFMUU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRTFCOzs7V0F4QkgsZ0JBQWdCOzs7cUJBMkJILGdCQUFnQiIsImZpbGUiOiJCaW5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCaW5hcnlFeHByZXNzaW9uIFxuICovXG5jbGFzcyBCaW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCBvcCwgcmlnaHQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5sZWZ0LnRyYW5zcGlsZSgpfSAke3RoaXMub3B9ICR7dGhpcy5yaWdodC50cmFuc3BpbGUoKX1gO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmxlZnQuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm9wKS5cbiAgICAgICAgYWRkKHRoaXMucmlnaHQuY29tcGlsZShvKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGV4cG9ydCBkZWZhdWx0IEJpbmFyeUV4cHJlc3Npb25cbiJdfQ==