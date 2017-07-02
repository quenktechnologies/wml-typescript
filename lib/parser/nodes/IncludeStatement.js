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

/*
 * IncludeStatement
 */
var IncludeStatement = function (_Node) {
    _inherits(IncludeStatement, _Node);

    function IncludeStatement(tmpl, args, location) {
        _classCallCheck(this, IncludeStatement);

        var _this = _possibleConstructorReturn(this, (IncludeStatement.__proto__ || Object.getPrototypeOf(IncludeStatement)).call(this, location));

        _this.type = 'include-statement';
        _this.template = tmpl;
        _this.arguments = args;

        return _this;
    }

    _createClass(IncludeStatement, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments !== null ? this.arguments.transpile() : '[]';
            return this.template.transpile() + '.apply(this, [view].concat(' + args + '))';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var args = this.arguments !== null ? this.arguments.compile() : '[]';

            return this.sourceNode(o.fileName, this.template.compile(o)).add('.apply(this, [make].concat(').add(args).add('))');
        }
    }]);

    return IncludeStatement;
}(_Node3.default);

exports.default = IncludeStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW5jbHVkZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJJbmNsdWRlU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsInRyYW5zcGlsZSIsIm8iLCJjb21waWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGdCOzs7QUFFRiw4QkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUEsd0lBRXhCQSxRQUZ3Qjs7QUFHOUIsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkosSUFBaEI7QUFDQSxjQUFLSyxTQUFMLEdBQWlCSixJQUFqQjs7QUFMOEI7QUFPakM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUlBLE9BQVEsS0FBS0ksU0FBTCxLQUFtQixJQUFwQixHQUE0QixLQUFLQSxTQUFMLENBQWVDLFNBQWYsRUFBNUIsR0FBeUQsSUFBcEU7QUFDQSxtQkFBVSxLQUFLRixRQUFMLENBQWNFLFNBQWQsRUFBVixtQ0FBaUVMLElBQWpFO0FBRUg7OztnQ0FFT00sQyxFQUFHOztBQUVQLGdCQUFJTixPQUFRLEtBQUtJLFNBQUwsS0FBbUIsSUFBcEIsR0FBNEIsS0FBS0EsU0FBTCxDQUFlRyxPQUFmLEVBQTVCLEdBQXVELElBQWxFOztBQUVBLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEtBQUtOLFFBQUwsQ0FBY0ksT0FBZCxDQUFzQkQsQ0FBdEIsQ0FBNUIsRUFDUEksR0FETyxDQUNILDZCQURHLEVBRVBBLEdBRk8sQ0FFSFYsSUFGRyxFQUdQVSxHQUhPLENBR0gsSUFIRyxDQUFQO0FBS0g7Ozs7OztrQkFJVVosZ0IiLCJmaWxlIjoiSW5jbHVkZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qXG4gKiBJbmNsdWRlU3RhdGVtZW50XG4gKi9cbmNsYXNzIEluY2x1ZGVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRtcGwsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5jbHVkZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gKHRoaXMuYXJndW1lbnRzICE9PSBudWxsKSA/IHRoaXMuYXJndW1lbnRzLnRyYW5zcGlsZSgpIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudGVtcGxhdGUudHJhbnNwaWxlKCl9LmFwcGx5KHRoaXMsIFt2aWV3XS5jb25jYXQoJHthcmdzfSkpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gKHRoaXMuYXJndW1lbnRzICE9PSBudWxsKSA/IHRoaXMuYXJndW1lbnRzLmNvbXBpbGUoKSA6ICdbXSc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnRlbXBsYXRlLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJy5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KCcpLlxuICAgICAgICBhZGQoYXJncykuXG4gICAgICAgIGFkZCgnKSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNsdWRlU3RhdGVtZW50XG4iXX0=