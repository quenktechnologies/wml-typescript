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
 * ReadExpression
 * @param {Expression} path
 * @param {Expression} default
 * @param {Location} location
 */
var ReadExpression = function (_Node) {
    _inherits(ReadExpression, _Node);

    function ReadExpression(path, defaults, location) {
        _classCallCheck(this, ReadExpression);

        var _this = _possibleConstructorReturn(this, (ReadExpression.__proto__ || Object.getPrototypeOf(ReadExpression)).call(this));

        _this.type = 'read-expression';
        _this.path = path;
        _this.defaults = defaults;
        _this.location = location;

        return _this;
    }

    _createClass(ReadExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var d = this.defaults ? this.defaults.transpile(o) : '\'\'';
            return 'that.attributes.read(' + this.path.transpile(o) + ', ' + d + '),';
        }
    }]);

    return ReadExpression;
}(_Node3.default);

exports.default = ReadExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvUmVhZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiUmVhZEV4cHJlc3Npb24iLCJwYXRoIiwiZGVmYXVsdHMiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwiZCIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxjOzs7QUFFRiw0QkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQUE7O0FBQUE7O0FBR2xDLGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsZ0JBQUlDLElBQUksS0FBS0osUUFBTCxHQUFpQixLQUFLQSxRQUFMLENBQWNLLFNBQWQsQ0FBd0JGLENBQXhCLENBQWpCLFNBQVI7QUFDQSw2Q0FBK0IsS0FBS0osSUFBTCxDQUFVTSxTQUFWLENBQW9CRixDQUFwQixDQUEvQixVQUEwREMsQ0FBMUQ7QUFFSDs7Ozs7O2tCQUlVTixjIiwiZmlsZSI6IlJlYWRFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBSZWFkRXhwcmVzc2lvblxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBwYXRoXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGRlZmF1bHRcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIFJlYWRFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBkZWZhdWx0cywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAncmVhZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBkID0gdGhpcy5kZWZhdWx0cyA/ICB0aGlzLmRlZmF1bHRzLnRyYW5zcGlsZShvKSA6IGAnJ2A7XG4gICAgICAgIHJldHVybiBgdGhhdC5hdHRyaWJ1dGVzLnJlYWQoJHt0aGlzLnBhdGgudHJhbnNwaWxlKG8pfSwgJHtkfSksYFxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRFeHByZXNzaW9uXG4iXX0=