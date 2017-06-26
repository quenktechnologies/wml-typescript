'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ObjectLiteral
 * @param {array<object>} keys
 * @param {Location} location
 */
var ObjectLiteral = function (_Node) {
    _inherits(ObjectLiteral, _Node);

    function ObjectLiteral(keys, location) {
        _classCallCheck(this, ObjectLiteral);

        var _this = _possibleConstructorReturn(this, (ObjectLiteral.__proto__ || Object.getPrototypeOf(ObjectLiteral)).call(this, location));

        _this.type = 'object-literal';
        _this.keys = keys;
        _this.location = location;

        return _this;
    }

    _createClass(ObjectLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '{' + this.keys.map(function (k) {
                return k.key + ':' + k.value.transpile();
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '{');

            this.keys.forEach(function (p, i, all) {
                node.add(['\'' + p.key + '\':', p.value.compile(o)]);
                if (i < all.length - 1) node.add(',');
            });

            return node.add('}');
        }
    }]);

    return ObjectLiteral;
}(_Node3.default);

exports.default = ObjectLiteral;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvT2JqZWN0TGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJPYmplY3RMaXRlcmFsIiwia2V5cyIsImxvY2F0aW9uIiwidHlwZSIsIm1hcCIsImsiLCJrZXkiLCJ2YWx1ZSIsInRyYW5zcGlsZSIsImpvaW4iLCJvIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlIiwiZm9yRWFjaCIsInAiLCJpIiwiYWxsIiwiYWRkIiwiY29tcGlsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLGE7OztBQUVGLDJCQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QjtBQUFBOztBQUFBLGtJQUVsQkEsUUFGa0I7O0FBR3hCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUx3QjtBQU8zQjs7OztvQ0FFVzs7QUFFUixtQkFBTyxNQUFNLEtBQUtELElBQUwsQ0FBVUcsR0FBVixDQUFjO0FBQUEsdUJBQVFDLEVBQUVDLEdBQVYsU0FBaUJELEVBQUVFLEtBQUYsQ0FBUUMsU0FBUixFQUFqQjtBQUFBLGFBQWQsRUFBc0RDLElBQXRELENBQTJELEdBQTNELENBQU4sR0FBd0UsR0FBL0U7QUFFSDs7O2dDQUVPQyxDLEVBQUc7O0FBRVAsZ0JBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsSUFBbEIsRUFBd0IsR0FBeEIsQ0FBWDs7QUFFQSxpQkFBS1osSUFBTCxDQUFVYSxPQUFWLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxHQUFQLEVBQWU7QUFDN0JOLHFCQUFLTyxHQUFMLENBQVMsUUFBS0gsRUFBRVQsR0FBUCxVQUFnQlMsRUFBRVIsS0FBRixDQUFRWSxPQUFSLENBQWdCVCxDQUFoQixDQUFoQixDQUFUO0FBQ0Esb0JBQUdNLElBQUtDLElBQUlHLE1BQUosR0FBYSxDQUFyQixFQUNGVCxLQUFLTyxHQUFMLENBQVMsR0FBVDtBQUNELGFBSkQ7O0FBTUEsbUJBQU9QLEtBQUtPLEdBQUwsQ0FBUyxHQUFULENBQVA7QUFBMEI7Ozs7OztrQkFJbkJsQixhIiwiZmlsZSI6Ik9iamVjdExpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE9iamVjdExpdGVyYWxcbiAqIEBwYXJhbSB7YXJyYXk8b2JqZWN0Pn0ga2V5c1xuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgT2JqZWN0TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa2V5cywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvYmplY3QtbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gJ3snICsgdGhpcy5rZXlzLm1hcChrID0+IGAke2sua2V5fToke2sudmFsdWUudHJhbnNwaWxlKCl9YCkuam9pbignLCcpICsgJ30nO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlLCAneycpO1xuXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKChwLCBpLCBhbGwpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkKFtgJyR7cC5rZXl9JzpgLCBwLnZhbHVlLmNvbXBpbGUobyldKTtcbiAgICAgICAgICAgIGlmKGkgPCAoYWxsLmxlbmd0aCAtIDEpKVxuICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlLmFkZCgnfScpOyAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0TGl0ZXJhbFxuIl19