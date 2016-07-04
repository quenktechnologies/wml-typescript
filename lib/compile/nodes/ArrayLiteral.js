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
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */

var ArrayLiteral = (function (_Node) {
    _inherits(ArrayLiteral, _Node);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        _get(Object.getPrototypeOf(ArrayLiteral.prototype), 'constructor', this).call(this, location);
        this.members = members;
    }

    _createClass(ArrayLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '[' + this.members.map(function (m) {
                return m.transpile();
            }).join(',') + ']';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '[');
            this.compileList(this.members, node, o);
            return node;
        }
    }]);

    return ArrayLiteral;
})(_Node3['default']);

exports['default'] = ArrayLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0FycmF5TGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7O0lBT25CLFlBQVk7Y0FBWixZQUFZOztBQUVILGFBRlQsWUFBWSxDQUVGLE9BQU8sRUFBRSxRQUFRLEVBQUU7OEJBRjdCLFlBQVk7O0FBR1YsbUNBSEYsWUFBWSw2Q0FHSixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDMUI7O2lCQUxDLFlBQVk7O2VBT0wscUJBQUc7O0FBRVIsbUJBQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7U0FFckU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLG1CQUFPLElBQUksQ0FBQztTQUVmOzs7V0FuQkMsWUFBWTs7O3FCQXNCSCxZQUFZIiwiZmlsZSI6IkFycmF5TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQXJyYXlMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheX0gbWVtYmVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBBcnJheUxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgKyAnXSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnWycpO1xuICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMubWVtYmVycywgbm9kZSwgbyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUxpdGVyYWxcbiJdfQ==