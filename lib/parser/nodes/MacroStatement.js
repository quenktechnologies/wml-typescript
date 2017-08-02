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
 * MacroStatement
 */
var MacroStatement = function (_Node) {
    _inherits(MacroStatement, _Node);

    function MacroStatement(id, args, children, location) {
        _classCallCheck(this, MacroStatement);

        var _this = _possibleConstructorReturn(this, (MacroStatement.__proto__ || Object.getPrototypeOf(MacroStatement)).call(this));

        _this.type = 'macro-statement';
        _this.id = id;
        _this.children = children;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(MacroStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = ['view'].concat(this.arguments.map(function (a) {
                return a.transpile(o);
            }));
            var kids = this.children.map(function (c) {
                return c.transpile(o);
            }).join(',');

            return '\n        export function ' + this.id + '(' + args + ') {\n        return $$box([' + kids + ']);}\n        ';
        }
    }]);

    return MacroStatement;
}(_Node3.default);

exports.default = MacroStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWFjcm9TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTWFjcm9TdGF0ZW1lbnQiLCJpZCIsImFyZ3MiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidHlwZSIsImFyZ3VtZW50cyIsIm8iLCJjb25jYXQiLCJtYXAiLCJhIiwidHJhbnNwaWxlIiwia2lkcyIsImMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGM7OztBQUVGLDRCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsUUFBdEIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQUE7O0FBQUE7O0FBSXRDLGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtKLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGNBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0csU0FBTCxHQUFpQkosSUFBakI7QUFDQSxjQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjs7QUFSc0M7QUFVekM7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCxnQkFBSUwsT0FBTyxDQUFDLE1BQUQsRUFBU00sTUFBVCxDQUFnQixLQUFLRixTQUFMLENBQWVHLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZSixDQUFaLENBQUw7QUFBQSxhQUFuQixDQUFoQixDQUFYO0FBQ0EsZ0JBQUlLLE9BQU8sS0FBS1QsUUFBTCxDQUFjTSxHQUFkLENBQWtCO0FBQUEsdUJBQUtJLEVBQUVGLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsYUFBbEIsRUFBdUNPLElBQXZDLENBQTRDLEdBQTVDLENBQVg7O0FBRUEsa0RBQ2tCLEtBQUtiLEVBRHZCLFNBQzZCQyxJQUQ3QixtQ0FFZ0JVLElBRmhCO0FBS0g7Ozs7OztrQkFJVVosYyIsImZpbGUiOiJNYWNyb1N0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTWFjcm9TdGF0ZW1lbnRcbiAqL1xuY2xhc3MgTWFjcm9TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBhcmdzLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdtYWNyby1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBhcmdzID0gWyd2aWV3J10uY29uY2F0KHRoaXMuYXJndW1lbnRzLm1hcChhID0+IGEudHJhbnNwaWxlKG8pKSk7XG4gICAgICAgIGxldCBraWRzID0gdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLnRyYW5zcGlsZShvKSkuam9pbignLCcpO1xuXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiAke3RoaXMuaWR9KCR7YXJnc30pIHtcbiAgICAgICAgcmV0dXJuICQkYm94KFske2tpZHN9XSk7fVxuICAgICAgICBgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3JvU3RhdGVtZW50XG4iXX0=