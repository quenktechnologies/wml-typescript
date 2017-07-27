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
 * Identifier
 * @param {string} name
 */
var Identifier = function (_Node) {
    _inherits(Identifier, _Node);

    function Identifier(name, location) {
        _classCallCheck(this, Identifier);

        var _this = _possibleConstructorReturn(this, (Identifier.__proto__ || Object.getPrototypeOf(Identifier)).call(this, location));

        _this.type = 'identifier';
        _this.name = name;

        return _this;
    }

    _createClass(Identifier, [{
        key: 'transpile',
        value: function transpile() {

            return this.name;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.name);
        }
    }]);

    return Identifier;
}(_Node3.default);

exports.default = Identifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWRlbnRpZmllci5qcyJdLCJuYW1lcyI6WyJJZGVudGlmaWVyIiwibmFtZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLFU7OztBQUVGLHdCQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QjtBQUFBOztBQUFBLDRIQUVsQkEsUUFGa0I7O0FBR3hCLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS0YsSUFBTCxHQUFZQSxJQUFaOztBQUp3QjtBQU0zQjs7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLQSxJQUFaO0FBRUg7OztnQ0FFT0csQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLEtBQUtMLElBQWpDLENBQVA7QUFFSDs7Ozs7O2tCQUlVRCxVIiwiZmlsZSI6IklkZW50aWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIElkZW50aWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmNsYXNzIElkZW50aWZpZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWRlbnRpZmllcic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5uYW1lKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZGVudGlmaWVyXG4iXX0=