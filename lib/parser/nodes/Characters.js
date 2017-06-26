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
 * Characters 
 */
var Characters = function (_Node) {
    _inherits(Characters, _Node);

    function Characters(value, location) {
        _classCallCheck(this, Characters);

        var _this = _possibleConstructorReturn(this, (Characters.__proto__ || Object.getPrototypeOf(Characters)).call(this, location));

        _this.type = 'characters';
        _this.value = value;

        return _this;
    }

    _createClass(Characters, [{
        key: 'transpile',
        value: function transpile() {

            return 'make.text(`' + this.value + '`)';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'make.text(').add('`' + this.value + '`');
        }
    }]);

    return Characters;
}(_Node3.default);

exports.default = Characters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJzIiwidmFsdWUiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFU7OztBQUVGLHdCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUFBLDRIQUVyQkEsUUFGcUI7O0FBRzNCLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0UsY0FBS0YsS0FBTCxHQUFhQSxLQUFiOztBQUp5QjtBQU01Qjs7OztvQ0FFVzs7QUFFUixtQ0FBc0IsS0FBS0EsS0FBM0I7QUFFSDs7O2dDQUVPRyxDLEVBQUc7O0FBRVgsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsZ0JBQ0hDLEdBREcsT0FDTSxLQUFLTixLQURYLE9BQVA7QUFHQzs7Ozs7O2tCQUdVRCxVIiwiZmlsZSI6IkNoYXJhY3RlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENoYXJhY3RlcnMgXG4gKi9cbmNsYXNzIENoYXJhY3RlcnMgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICB0aGlzLnR5cGUgPSAnY2hhcmFjdGVycyc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYG1ha2UudGV4dChcXGAke3RoaXMudmFsdWV9XFxgKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYG1ha2UudGV4dChgKS5cbiAgICAgICAgYWRkKGBcXGAke3RoaXMudmFsdWV9XFxgYCk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnNcbiJdfQ==