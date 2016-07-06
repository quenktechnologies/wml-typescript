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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL09iamVjdExpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7OztJQU9uQixhQUFhO2NBQWIsYUFBYTs7QUFFSixhQUZULGFBQWEsQ0FFSCxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUYxQixhQUFhOztBQUlYLG1DQUpGLGFBQWEsNkNBSUwsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVRDLGFBQWE7O2VBV04scUJBQUc7O0FBRVIsbUJBQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBTyxDQUFDLENBQUMsR0FBRyxTQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO2FBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7U0FFdEY7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUU1QyxnQkFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUk7O0FBRW5CLG9CQUFJLENBQUMsR0FBRyxRQUFLLENBQUMsQ0FBQyxHQUFHLFFBQUksQ0FBQztBQUN2QixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRWhDLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLG1CQUFPLElBQUksQ0FBQztTQUVmOzs7V0EvQkMsYUFBYTs7O3FCQW1DSixhQUFhIiwiZmlsZSI6Ik9iamVjdExpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE9iamVjdExpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PG9iamVjdD59IGt2cHMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgT2JqZWN0TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa3ZwcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvYmplY3QtbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMua3ZwcyA9IGt2c3A7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gJ3snICsgdGhpcy5rdnBzLm1hcChwID0+IGAke2sua2V5fToke2sudmFsdWUudHJhbnNwaWxlKCl9YCkuam9pbignLCcpICsgJ30nO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ3snKTtcblxuICAgICAgICB0aGlzLmt2cHMuZm9yRWFjaChwID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYCcke3Aua2V5fSdgKTtcbiAgICAgICAgICAgIG5vZGUuYWRkKGsudmFsdWUuY29tcGlsZShvKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ30nKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0TGl0ZXJhbFxuIl19