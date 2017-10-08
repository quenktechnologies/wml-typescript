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
 * Type
 * @property {Identifier} name
 * @property {Type[]} generics
 * @property {Location} location
 */
var Type = function (_Node) {
    _inherits(Type, _Node);

    function Type(name, generics, location) {
        _classCallCheck(this, Type);

        var _this = _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this));

        _this.type = 'type';
        _this.name = name;
        _this.generics = generics;
        _this.location = location;

        return _this;
    }

    _createClass(Type, [{
        key: 'transpile',
        value: function transpile(o) {

            var g = this.generics.length > 0 ? '<' + this.generics.map(function (g) {
                return g.transpile(o);
            }).join(',') + '>' : '';

            return '' + this.name.transpile(o) + g;
        }
    }]);

    return Type;
}(_Node3.default);

exports.default = Type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHlwZS5qcyJdLCJuYW1lcyI6WyJUeXBlIiwibmFtZSIsImdlbmVyaWNzIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsImciLCJsZW5ndGgiLCJtYXAiLCJ0cmFuc3BpbGUiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLEk7OztBQUVGLGtCQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFDQSxjQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5rQztBQVFyQzs7OztrQ0FFU0UsQyxFQUFHOztBQUVULGdCQUFJQyxJQUFJLEtBQUtKLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixDQUF2QixTQUNBLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQjtBQUFBLHVCQUFHRixFQUFFRyxTQUFGLENBQVlKLENBQVosQ0FBSDtBQUFBLGFBQWxCLEVBQXFDSyxJQUFyQyxDQUEwQyxHQUExQyxDQURBLFNBRUosRUFGSjs7QUFJQSx3QkFBVSxLQUFLVCxJQUFMLENBQVVRLFNBQVYsQ0FBb0JKLENBQXBCLENBQVYsR0FBbUNDLENBQW5DO0FBRUg7Ozs7OztrQkFJVU4sSSIsImZpbGUiOiJUeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUeXBlXG4gKiBAcHJvcGVydHkge0lkZW50aWZpZXJ9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7VHlwZVtdfSBnZW5lcmljc1xuICogQHByb3BlcnR5IHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVHlwZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZ2VuZXJpY3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3R5cGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdlbmVyaWNzID0gZ2VuZXJpY3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgbGV0IGcgPSB0aGlzLmdlbmVyaWNzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgYDwke3RoaXMuZ2VuZXJpY3MubWFwKGc9PmcudHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9PmA6XG4gICAgICAgICAgICAnJztcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lLnRyYW5zcGlsZShvKX0ke2d9YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlXG4iXX0=