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
            return this.template.transpile() + '.apply(this, [make].concat(' + args + '))';
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW5jbHVkZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJJbmNsdWRlU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsInRyYW5zcGlsZSIsIm8iLCJjb21waWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGdCOzs7QUFFRiw4QkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUEsd0lBRXhCQSxRQUZ3Qjs7QUFHOUIsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkosSUFBaEI7QUFDQSxjQUFLSyxTQUFMLEdBQWlCSixJQUFqQjs7QUFMOEI7QUFPakM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUlBLE9BQVEsS0FBS0ksU0FBTCxLQUFtQixJQUFwQixHQUE0QixLQUFLQSxTQUFMLENBQWVDLFNBQWYsRUFBNUIsR0FBeUQsSUFBcEU7QUFDQSxtQkFBVSxLQUFLRixRQUFMLENBQWNFLFNBQWQsRUFBVixtQ0FBaUVMLElBQWpFO0FBRUg7OztnQ0FFT00sQyxFQUFHOztBQUVQLGdCQUFJTixPQUFRLEtBQUtJLFNBQUwsS0FBbUIsSUFBcEIsR0FBNEIsS0FBS0EsU0FBTCxDQUFlRyxPQUFmLEVBQTVCLEdBQXVELElBQWxFOztBQUVBLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEtBQUtOLFFBQUwsQ0FBY0ksT0FBZCxDQUFzQkQsQ0FBdEIsQ0FBNUIsRUFDUEksR0FETyxDQUNILDZCQURHLEVBRVBBLEdBRk8sQ0FFSFYsSUFGRyxFQUdQVSxHQUhPLENBR0gsSUFIRyxDQUFQO0FBS0g7Ozs7OztrQkFJVVosZ0IiLCJmaWxlIjoiSW5jbHVkZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qXG4gKiBJbmNsdWRlU3RhdGVtZW50IFxuICovXG5jbGFzcyBJbmNsdWRlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0bXBsLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luY2x1ZGUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRtcGw7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9ICh0aGlzLmFyZ3VtZW50cyAhPT0gbnVsbCkgPyB0aGlzLmFyZ3VtZW50cy50cmFuc3BpbGUoKSA6ICdbXSc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnRlbXBsYXRlLnRyYW5zcGlsZSgpfS5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KCR7YXJnc30pKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgYXJncyA9ICh0aGlzLmFyZ3VtZW50cyAhPT0gbnVsbCkgPyB0aGlzLmFyZ3VtZW50cy5jb21waWxlKCkgOiAnW10nO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy50ZW1wbGF0ZS5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcuYXBwbHkodGhpcywgW21ha2VdLmNvbmNhdCgnKS5cbiAgICAgICAgYWRkKGFyZ3MpLlxuICAgICAgICBhZGQoJykpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5jbHVkZVN0YXRlbWVudFxuIl19