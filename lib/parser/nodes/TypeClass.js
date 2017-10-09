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
 * TypeClass
 * @property {Identifier} name
 * @property {Type} constraint
 * @property {Location} location
 */
var Type = function (_Node) {
    _inherits(Type, _Node);

    function Type(name, constraint, location) {
        _classCallCheck(this, Type);

        var _this = _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this));

        _this.type = 'type-class';
        _this.name = name;
        _this.constraint = constraint;
        _this.location = location;

        return _this;
    }

    _createClass(Type, [{
        key: 'transpile',
        value: function transpile(o) {

            var c = this.constraint ? ' extends ' + this.constraint.transpile(o) : '';

            return '' + this.name.transpile(o) + c;
        }
    }]);

    return Type;
}(_Node3.default);

exports.default = Type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHlwZUNsYXNzLmpzIl0sIm5hbWVzIjpbIlR5cGUiLCJuYW1lIiwiY29uc3RyYWludCIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJjIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLEk7OztBQUVGLGtCQUFZQyxJQUFaLEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFBQTs7QUFBQTs7QUFHcEMsY0FBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5vQztBQVF2Qzs7OztrQ0FFU0UsQyxFQUFHOztBQUVULGdCQUFJQyxJQUFJLEtBQUtKLFVBQUwsaUJBQ1EsS0FBS0EsVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJGLENBQTFCLENBRFIsR0FDeUMsRUFEakQ7O0FBR0Esd0JBQVUsS0FBS0osSUFBTCxDQUFVTSxTQUFWLENBQW9CRixDQUFwQixDQUFWLEdBQW1DQyxDQUFuQztBQUVIOzs7Ozs7a0JBSVVOLEkiLCJmaWxlIjoiVHlwZUNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUeXBlQ2xhc3NcbiAqIEBwcm9wZXJ0eSB7SWRlbnRpZmllcn0gbmFtZVxuICogQHByb3BlcnR5IHtUeXBlfSBjb25zdHJhaW50XG4gKiBAcHJvcGVydHkge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBUeXBlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb25zdHJhaW50LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0eXBlLWNsYXNzJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb25zdHJhaW50ID0gY29uc3RyYWludDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICBsZXQgYyA9IHRoaXMuY29uc3RyYWludCA/XG4gICAgICAgICAgICBgIGV4dGVuZHMgJHt0aGlzLmNvbnN0cmFpbnQudHJhbnNwaWxlKG8pfWAgOiAnJztcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lLnRyYW5zcGlsZShvKX0ke2N9YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlXG4iXX0=