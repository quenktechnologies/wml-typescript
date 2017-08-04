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

    function Identifier(name, hint, location) {
        _classCallCheck(this, Identifier);

        var _this = _possibleConstructorReturn(this, (Identifier.__proto__ || Object.getPrototypeOf(Identifier)).call(this, location));

        _this.type = 'identifier';
        _this.name = name;
        _this.hint = hint;

        return _this;
    }

    _createClass(Identifier, [{
        key: 'transpile',
        value: function transpile(o) {

            return o.typescript ? this.hint ? this.name + ' as ' + this.hint : this.name : this.name;
        }
    }]);

    return Identifier;
}(_Node3.default);

exports.default = Identifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWRlbnRpZmllci5qcyJdLCJuYW1lcyI6WyJJZGVudGlmaWVyIiwibmFtZSIsImhpbnQiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHlwZXNjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsVTs7O0FBRUYsd0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLDRIQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUw4QjtBQU9qQzs7OztrQ0FFU0csQyxFQUFHOztBQUVULG1CQUFPQSxFQUFFQyxVQUFGLEdBQ0YsS0FBS0osSUFBTCxHQUFlLEtBQUtELElBQXBCLFlBQStCLEtBQUtDLElBQXBDLEdBQTZDLEtBQUtELElBRGhELEdBRUgsS0FBS0EsSUFGVDtBQUlIOzs7Ozs7a0JBSVVELFUiLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSWRlbnRpZmllclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuY2xhc3MgSWRlbnRpZmllciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaGludCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpZGVudGlmaWVyJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5oaW50ID0gaGludDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIG8udHlwZXNjcmlwdCA/XG4gICAgICAgICAgICAodGhpcy5oaW50ID8gYCR7dGhpcy5uYW1lfSBhcyAke3RoaXMuaGludH1gIDogdGhpcy5uYW1lKTpcbiAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZGVudGlmaWVyXG4iXX0=