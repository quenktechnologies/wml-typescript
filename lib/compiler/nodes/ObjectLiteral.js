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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9PYmplY3RMaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7SUFPbkIsYUFBYTtjQUFiLGFBQWE7O0FBRUosYUFGVCxhQUFhLENBRUgsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGMUIsYUFBYTs7QUFJWCxtQ0FKRixhQUFhLDZDQUlMLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQzdCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFUQyxhQUFhOztlQVdOLHFCQUFHOztBQUVSLG1CQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQU8sQ0FBQyxDQUFDLEdBQUcsU0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTthQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBRXRGOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7QUFFNUMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFJOztBQUVuQixvQkFBSSxDQUFDLEdBQUcsUUFBSyxDQUFDLENBQUMsR0FBRyxRQUFJLENBQUM7QUFDdkIsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUVoQyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxtQkFBTyxJQUFJLENBQUM7U0FFZjs7O1dBL0JDLGFBQWE7OztxQkFtQ0osYUFBYSIsImZpbGUiOiJPYmplY3RMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBPYmplY3RMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheTxvYmplY3Q+fSBrdnBzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIE9iamVjdExpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGt2cHMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb2JqZWN0LWxpdGVyYWwnO1xuICAgICAgICB0aGlzLmt2cHMgPSBrdnNwO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICd7JyArIHRoaXMua3Zwcy5tYXAocCA9PiBgJHtrLmtleX06JHtrLnZhbHVlLnRyYW5zcGlsZSgpfWApLmpvaW4oJywnKSArICd9JztcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICd7Jyk7XG5cbiAgICAgICAgdGhpcy5rdnBzLmZvckVhY2gocCA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGAnJHtwLmtleX0nYCk7XG4gICAgICAgICAgICBub2RlLmFkZChrLnZhbHVlLmNvbXBpbGUobykpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vZGUuYWRkKCd9Jyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdExpdGVyYWxcbiJdfQ==