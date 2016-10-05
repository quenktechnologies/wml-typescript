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
 * StringLiteral 
 */
var StringLiteral = function (_Node) {
    _inherits(StringLiteral, _Node);

    function StringLiteral(value, location) {
        _classCallCheck(this, StringLiteral);

        var _this = _possibleConstructorReturn(this, (StringLiteral.__proto__ || Object.getPrototypeOf(StringLiteral)).call(this, location));

        _this.type = 'string-literal';
        _this.value = value;

        return _this;
    }

    _createClass(StringLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return this.value;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.value);
        }
    }]);

    return StringLiteral;
}(_Node3.default);

exports.default = StringLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvU3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJTdHJpbmdMaXRlcmFsIiwidmFsdWUiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGE7OztBQUVGLDJCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUFBLGtJQUVuQkEsUUFGbUI7O0FBR3pCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtGLEtBQUwsR0FBYUEsS0FBYjs7QUFKeUI7QUFNNUI7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sS0FBS0EsS0FBWjtBQUVIOzs7Z0NBRU9HLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUE0QixLQUFLTCxLQUFqQyxDQUFQO0FBRUg7Ozs7OztrQkFJVUQsYSIsImZpbGUiOiJTdHJpbmdMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBTdHJpbmdMaXRlcmFsIFxuICovXG5jbGFzcyBTdHJpbmdMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzdHJpbmctbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nTGl0ZXJhbFxuIl19