'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FragmentStatement
 */
var FragmentStatement = function (_Node) {
    _inherits(FragmentStatement, _Node);

    function FragmentStatement(id, generics, params, context, children, location) {
        _classCallCheck(this, FragmentStatement);

        var _this = _possibleConstructorReturn(this, (FragmentStatement.__proto__ || Object.getPrototypeOf(FragmentStatement)).call(this));

        _this.type = 'fragment-statement';
        _this.id = id;
        _this.generics = generics;
        _this.parameters = params;
        _this.context = context;
        _this.children = children;
        _this.location = location;

        return _this;
    }

    _createClass(FragmentStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var generics = this.generics.length > 0 ? '<' + this.generics.map(function (g) {
                return g.transpile(o);
            }).join(',') + '>' : '';

            var ctx = this.context.transpile(o);

            var args = ['$$ctx:' + ctx + ', view:AppView<$$ctx>'].concat(this.parameters.map(function (a) {
                return a.transpile(o);
            }));

            var id = this.id.transpile(o);

            return 'export function ' + id + generics + '(' + args + ')' + ('{ return ' + (0, _util.flatten)(this.children, o) + '; } ');
        }
    }]);

    return FragmentStatement;
}(_Node3.default);

exports.default = FragmentStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnJhZ21lbnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiRnJhZ21lbnRTdGF0ZW1lbnQiLCJpZCIsImdlbmVyaWNzIiwicGFyYW1zIiwiY29udGV4dCIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJ0eXBlIiwicGFyYW1ldGVycyIsIm8iLCJsZW5ndGgiLCJtYXAiLCJnIiwidHJhbnNwaWxlIiwiam9pbiIsImN0eCIsImFyZ3MiLCJjb25jYXQiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGlCOzs7QUFFRiwrQkFBWUMsRUFBWixFQUFnQkMsUUFBaEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsUUFBM0MsRUFBcURDLFFBQXJELEVBQStEO0FBQUE7O0FBQUE7O0FBSTNELGNBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUtOLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS00sVUFBTCxHQUFrQkwsTUFBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYyRDtBQVk5RDs7OztrQ0FFU0csQyxFQUFHOztBQUVULGdCQUFJUCxXQUNBLEtBQUtBLFFBQUwsQ0FBY1EsTUFBZCxHQUF1QixDQUF2QixTQUNJLEtBQUtSLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlKLENBQVosQ0FBTDtBQUFBLGFBQWxCLEVBQXVDSyxJQUF2QyxDQUE0QyxHQUE1QyxDQURKLFNBRUEsRUFISjs7QUFLQSxnQkFBSUMsTUFBTSxLQUFLWCxPQUFMLENBQWFTLFNBQWIsQ0FBdUJKLENBQXZCLENBQVY7O0FBRUEsZ0JBQUlPLE9BQU8sWUFBVUQsR0FBViw0QkFDTkUsTUFETSxDQUNDLEtBQUtULFVBQUwsQ0FBZ0JHLEdBQWhCLENBQW9CO0FBQUEsdUJBQUtPLEVBQUVMLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsYUFBcEIsQ0FERCxDQUFYOztBQUdBLGdCQUFJUixLQUFLLEtBQUtBLEVBQUwsQ0FBUVksU0FBUixDQUFrQkosQ0FBbEIsQ0FBVDs7QUFFQSxtQkFBTyxxQkFBbUJSLEVBQW5CLEdBQXdCQyxRQUF4QixTQUFvQ2MsSUFBcEMsd0JBQ1MsbUJBQVEsS0FBS1gsUUFBYixFQUF1QkksQ0FBdkIsQ0FEVCxVQUFQO0FBR0g7Ozs7OztrQkFJVVQsaUIiLCJmaWxlIjoiRnJhZ21lbnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqIEZyYWdtZW50U3RhdGVtZW50XG4gKi9cbmNsYXNzIEZyYWdtZW50U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgZ2VuZXJpY3MsIHBhcmFtcywgY29udGV4dCwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnZnJhZ21lbnQtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmdlbmVyaWNzID0gZ2VuZXJpY3M7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBnZW5lcmljcyA9XG4gICAgICAgICAgICB0aGlzLmdlbmVyaWNzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgYDwke3RoaXMuZ2VuZXJpY3MubWFwKGcgPT4gZy50cmFuc3BpbGUobykpLmpvaW4oJywnKX0+YCA6XG4gICAgICAgICAgICAnJztcblxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0LnRyYW5zcGlsZShvKTtcblxuICAgICAgICBsZXQgYXJncyA9IFtgJCRjdHg6JHtjdHh9LCB2aWV3OkFwcFZpZXc8JCRjdHg+YF1cbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5wYXJhbWV0ZXJzLm1hcChhID0+IGEudHJhbnNwaWxlKG8pKSk7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZC50cmFuc3BpbGUobyk7XG5cbiAgICAgICAgcmV0dXJuIGBleHBvcnQgZnVuY3Rpb24gJHtpZH0ke2dlbmVyaWNzfSgke2FyZ3N9KWAgK1xuICAgICAgICAgICAgYHsgcmV0dXJuICR7ZmxhdHRlbih0aGlzLmNoaWxkcmVuLCBvKX07IH0gYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudFN0YXRlbWVudFxuIl19