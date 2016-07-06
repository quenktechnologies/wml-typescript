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
 * ObjectLiteral 
 * @param {array<object>} kvps 
 * @param {Location} location 
 */

var ObjectLiteral = (function (_Node) {
    _inherits(ObjectLiteral, _Node);

    function ObjectLiteral(kvps, location) {
        _classCallCheck(this, ObjectLiteral);

        _get(Object.getPrototypeOf(ObjectLiteral.prototype), 'constructor', this).call(this, location);
        this.type = 'object-literal';
        this.kvps = kvsp;
        this.location = location;
    }

    _createClass(ObjectLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '{' + this.kvps.map(function (p) {
                return k.key + ':' + k.value.transpile();
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '{');

            this.kvps.forEach(function (p) {

                node.add('\'' + p.key + '\'');
                node.add(k.value.compile(o));
            });

            node.add('}');
            return node;
        }
    }]);

    return ObjectLiteral;
})(_Node3['default']);

exports['default'] = ObjectLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvT2JqZWN0TGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7O0lBT25CLGFBQWE7Y0FBYixhQUFhOztBQUVKLGFBRlQsYUFBYSxDQUVILElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRjFCLGFBQWE7O0FBSVgsbUNBSkYsYUFBYSw2Q0FJTCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsYUFBYTs7ZUFXTixxQkFBRzs7QUFFUixtQkFBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFPLENBQUMsQ0FBQyxHQUFHLFNBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7YUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUV0Rjs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7O0FBRTVDLGdCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsRUFBSTs7QUFFbkIsb0JBQUksQ0FBQyxHQUFHLFFBQUssQ0FBQyxDQUFDLEdBQUcsUUFBSSxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFaEMsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsbUJBQU8sSUFBSSxDQUFDO1NBRWY7OztXQS9CQyxhQUFhOzs7cUJBbUNKLGFBQWEiLCJmaWxlIjoiT2JqZWN0TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogT2JqZWN0TGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXk8b2JqZWN0Pn0ga3ZwcyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBPYmplY3RMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihrdnBzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ29iamVjdC1saXRlcmFsJztcbiAgICAgICAgdGhpcy5rdnBzID0ga3ZzcDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiAneycgKyB0aGlzLmt2cHMubWFwKHAgPT4gYCR7ay5rZXl9OiR7ay52YWx1ZS50cmFuc3BpbGUoKX1gKS5qb2luKCcsJykgKyAnfSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAneycpO1xuXG4gICAgICAgIHRoaXMua3Zwcy5mb3JFYWNoKHAgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChgJyR7cC5rZXl9J2ApO1xuICAgICAgICAgICAgbm9kZS5hZGQoay52YWx1ZS5jb21waWxlKG8pKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBub2RlLmFkZCgnfScpO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RMaXRlcmFsXG4iXX0=