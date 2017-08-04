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
        value: function transpile(o) {

            return '{' + this.keys.map(function (k) {
                return k.key + ':' + k.value.transpile(o);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvT2JqZWN0TGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJPYmplY3RMaXRlcmFsIiwia2V5cyIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJtYXAiLCJrIiwia2V5IiwidmFsdWUiLCJ0cmFuc3BpbGUiLCJqb2luIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlIiwiZm9yRWFjaCIsInAiLCJpIiwiYWxsIiwiYWRkIiwiY29tcGlsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLGE7OztBQUVGLDJCQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QjtBQUFBOztBQUFBLGtJQUVsQkEsUUFGa0I7O0FBR3hCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUx3QjtBQU8zQjs7OztrQ0FFU0UsQyxFQUFHOztBQUVULG1CQUFPLE1BQU0sS0FBS0gsSUFBTCxDQUFVSSxHQUFWLENBQWM7QUFBQSx1QkFBUUMsRUFBRUMsR0FBVixTQUFpQkQsRUFBRUUsS0FBRixDQUFRQyxTQUFSLENBQWtCTCxDQUFsQixDQUFqQjtBQUFBLGFBQWQsRUFBdURNLElBQXZELENBQTRELEdBQTVELENBQU4sR0FBeUUsR0FBaEY7QUFFSDs7O2dDQUVPTixDLEVBQUc7O0FBRVAsZ0JBQUlPLE9BQU8sS0FBS0MsVUFBTCxDQUFnQlIsRUFBRVMsSUFBbEIsRUFBd0IsR0FBeEIsQ0FBWDs7QUFFQSxpQkFBS1osSUFBTCxDQUFVYSxPQUFWLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxHQUFQLEVBQWU7QUFDN0JOLHFCQUFLTyxHQUFMLENBQVMsUUFBS0gsRUFBRVIsR0FBUCxVQUFnQlEsRUFBRVAsS0FBRixDQUFRVyxPQUFSLENBQWdCZixDQUFoQixDQUFoQixDQUFUO0FBQ0Esb0JBQUdZLElBQUtDLElBQUlHLE1BQUosR0FBYSxDQUFyQixFQUNGVCxLQUFLTyxHQUFMLENBQVMsR0FBVDtBQUNELGFBSkQ7O0FBTUEsbUJBQU9QLEtBQUtPLEdBQUwsQ0FBUyxHQUFULENBQVA7QUFBMEI7Ozs7OztrQkFJbkJsQixhIiwiZmlsZSI6Ik9iamVjdExpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE9iamVjdExpdGVyYWxcbiAqIEBwYXJhbSB7YXJyYXk8b2JqZWN0Pn0ga2V5c1xuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgT2JqZWN0TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa2V5cywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvYmplY3QtbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuICd7JyArIHRoaXMua2V5cy5tYXAoayA9PiBgJHtrLmtleX06JHtrLnZhbHVlLnRyYW5zcGlsZShvKX1gKS5qb2luKCcsJykgKyAnfSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsICd7Jyk7XG5cbiAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goKHAsIGksIGFsbCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hZGQoW2AnJHtwLmtleX0nOmAsIHAudmFsdWUuY29tcGlsZShvKV0pO1xuICAgICAgICAgICAgaWYoaSA8IChhbGwubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgbm9kZS5hZGQoJywnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCd9Jyk7ICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RMaXRlcmFsXG4iXX0=