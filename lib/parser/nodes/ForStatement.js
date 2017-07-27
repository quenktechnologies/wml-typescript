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

var count = 0;
/**
 * ForStatement
 */

var ForStatement = function (_Node) {
    _inherits(ForStatement, _Node);

    function ForStatement(variable, index, array, src, children, otherwise, location) {
        _classCallCheck(this, ForStatement);

        var _this = _possibleConstructorReturn(this, (ForStatement.__proto__ || Object.getPrototypeOf(ForStatement)).call(this, location));

        _this.type = 'for-statement';
        _this.variable = variable;
        _this.index = index;
        _this.array = array;
        _this.src = src;
        _this.children = children;
        _this.otherwise = otherwise;

        return _this;
    }

    _createClass(ForStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var variable = this.variable.transpile(o);
            var index = this.index ? this.index.transpile(o) : '_';
            var array = this.array ? this.array.transpile(o) : '__';
            var src = this.src.transpile(o);
            var children = this.children.map(function (c) {
                return c.transpile(o);
            });
            var otherwise = this.otherwise.map(function (c) {
                return c.transpile(o);
            });

            count = count + 1;

            return '$$for(' + src + ',' + ('function for' + count + ' (' + variable + ', ' + index + ', ' + array + ') {') + ('return [' + children + ']; }.bind(this),') + ('function otherwise' + count + '() {\n               return [' + otherwise + '];\n            })');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            count = count + 1;

            node.add('make.$for(').add(this.target.compile(o)).add('function for_' + count + ' (' + this.variable + ', ' + this.index + ', ' + this.array + ') {').add('return [');

            this.compileList(this.children, node, o);
            return node.add(']; }.bind(this))');
        }
    }]);

    return ForStatement;
}(_Node3.default);

exports.default = ForStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5Iiwic3JjIiwiY2hpbGRyZW4iLCJvdGhlcndpc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIiwibWFwIiwiYyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJ0YXJnZXQiLCJjb21waWxlIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7O0lBR01DLFk7OztBQUVGLDBCQUFZQyxRQUFaLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEdBQXBDLEVBQXlDQyxRQUF6QyxFQUFtREMsU0FBbkQsRUFBOERDLFFBQTlELEVBQXdFO0FBQUE7O0FBQUEsZ0lBRTlEQSxRQUY4RDs7QUFHcEUsY0FBS0MsSUFBTCxHQUFZLGVBQVo7QUFDQSxjQUFLUCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBVG9FO0FBV3ZFOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsZ0JBQUlSLFdBQVcsS0FBS0EsUUFBTCxDQUFjUyxTQUFkLENBQXdCRCxDQUF4QixDQUFmO0FBQ0EsZ0JBQUlQLFFBQVEsS0FBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV1EsU0FBWCxDQUFxQkQsQ0FBckIsQ0FBYixHQUF1QyxHQUFuRDtBQUNBLGdCQUFJTixRQUFRLEtBQUtBLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdPLFNBQVgsQ0FBcUJELENBQXJCLENBQWIsR0FBdUMsSUFBbkQ7QUFDQSxnQkFBSUwsTUFBTSxLQUFLQSxHQUFMLENBQVNNLFNBQVQsQ0FBbUJELENBQW5CLENBQVY7QUFDQSxnQkFBSUosV0FBVyxLQUFLQSxRQUFMLENBQWNNLEdBQWQsQ0FBa0I7QUFBQSx1QkFBS0MsRUFBRUYsU0FBRixDQUFZRCxDQUFaLENBQUw7QUFBQSxhQUFsQixDQUFmO0FBQ0EsZ0JBQUlILFlBQVksS0FBS0EsU0FBTCxDQUFlSyxHQUFmLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFMO0FBQUEsYUFBbkIsQ0FBaEI7O0FBRUFWLG9CQUFRQSxRQUFRLENBQWhCOztBQUVBLG1CQUFPLFdBQVNLLEdBQVQsMkJBQ1lMLEtBRFosVUFDc0JFLFFBRHRCLFVBQ21DQyxLQURuQyxVQUM2Q0MsS0FEN0MsMEJBRVFFLFFBRlIsaURBR2tCTixLQUhsQixxQ0FJVU8sU0FKVix3QkFBUDtBQU9IOzs7Z0NBRU9HLEMsRUFBRzs7QUFFUCxnQkFBSUksT0FBTyxLQUFLQyxVQUFMLENBQWdCTCxFQUFFTSxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBaEIsb0JBQVFBLFFBQVEsQ0FBaEI7O0FBRUFjLGlCQUFLRyxHQUFMLENBQVMsWUFBVCxFQUNBQSxHQURBLENBQ0ksS0FBS0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CVCxDQUFwQixDQURKLEVBRUFPLEdBRkEsbUJBRW9CakIsS0FGcEIsVUFFOEIsS0FBS0UsUUFGbkMsVUFFZ0QsS0FBS0MsS0FGckQsVUFFK0QsS0FBS0MsS0FGcEUsVUFHQWEsR0FIQSxDQUdJLFVBSEo7O0FBS0EsaUJBQUtHLFdBQUwsQ0FBaUIsS0FBS2QsUUFBdEIsRUFBZ0NRLElBQWhDLEVBQXNDSixDQUF0QztBQUNBLG1CQUFPSSxLQUFLRyxHQUFMLENBQVMsa0JBQVQsQ0FBUDtBQUdIOzs7Ozs7a0JBSVVoQixZIiwiZmlsZSI6IkZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZvclN0YXRlbWVudFxuICovXG5jbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleCwgYXJyYXksIHNyYywgY2hpbGRyZW4sIG90aGVyd2lzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmb3Itc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5vdGhlcndpc2UgPSBvdGhlcndpc2U7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGUudHJhbnNwaWxlKG8pO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4ID8gdGhpcy5pbmRleC50cmFuc3BpbGUobykgOiAnXyc7XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXkgPyB0aGlzLmFycmF5LnRyYW5zcGlsZShvKSA6ICdfXyc7XG4gICAgICAgIHZhciBzcmMgPSB0aGlzLnNyYy50cmFuc3BpbGUobyk7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy50cmFuc3BpbGUobykpO1xuICAgICAgICB2YXIgb3RoZXJ3aXNlID0gdGhpcy5vdGhlcndpc2UubWFwKGMgPT4gYy50cmFuc3BpbGUobykpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgJCRmb3IoJHtzcmN9LGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGZvciR7Y291bnR9ICgke3ZhcmlhYmxlfSwgJHtpbmRleH0sICR7YXJyYXl9KSB7YCArXG4gICAgICAgICAgICBgcmV0dXJuIFske2NoaWxkcmVufV07IH0uYmluZCh0aGlzKSxgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBvdGhlcndpc2Uke2NvdW50fSgpIHtcbiAgICAgICAgICAgICAgIHJldHVybiBbJHtvdGhlcndpc2V9XTtcbiAgICAgICAgICAgIH0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICBub2RlLmFkZCgnbWFrZS4kZm9yKCcpLlxuICAgICAgICBhZGQodGhpcy50YXJnZXQuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgZnVuY3Rpb24gZm9yXyR7Y291bnR9ICgke3RoaXMudmFyaWFibGV9LCAke3RoaXMuaW5kZXh9LCAke3RoaXMuYXJyYXl9KSB7YCkuXG4gICAgICAgIGFkZCgncmV0dXJuIFsnKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuY2hpbGRyZW4sIG5vZGUsIG8pO1xuICAgICAgICByZXR1cm4gbm9kZS5hZGQoJ107IH0uYmluZCh0aGlzKSknKTtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvclN0YXRlbWVudFxuIl19