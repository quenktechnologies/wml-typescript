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

    function ForStatement(variable, index, array, target, children, location) {
        _classCallCheck(this, ForStatement);

        var _this = _possibleConstructorReturn(this, (ForStatement.__proto__ || Object.getPrototypeOf(ForStatement)).call(this, location));

        _this.type = 'for-statement';
        _this.variable = variable;
        _this.index = index;
        _this.array = array;
        _this.target = target;
        _this.children = children;

        return _this;
    }

    _createClass(ForStatement, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;

            return '$$for(' + this.target.transpile() + ',' + ('function for_' + count + ' (' + this.variable + ', ' + this.index + ', ' + this.array + ') {') + ('return [' + this.transpileList(this.children) + ']; }.bind(this))');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5IiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGUiLCJ0cmFuc3BpbGVMaXN0IiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7O0lBR01DLFk7OztBQUVGLDBCQUFZQyxRQUFaLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLE1BQXBDLEVBQTRDQyxRQUE1QyxFQUFzREMsUUFBdEQsRUFBZ0U7QUFBQTs7QUFBQSxnSUFFdERBLFFBRnNEOztBQUc1RCxjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtOLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUjREO0FBVS9EOzs7O29DQUVXOztBQUVSTixvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxtQkFBTyxXQUFTLEtBQUtLLE1BQUwsQ0FBWUksU0FBWixFQUFULDRCQUNhVCxLQURiLFVBQ3VCLEtBQUtFLFFBRDVCLFVBQ3lDLEtBQUtDLEtBRDlDLFVBQ3dELEtBQUtDLEtBRDdELDBCQUVRLEtBQUtNLGFBQUwsQ0FBbUIsS0FBS0osUUFBeEIsQ0FGUixzQkFBUDtBQUlIOzs7Z0NBRU9LLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBZCxvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQVksaUJBQUtHLEdBQUwsQ0FBUyxZQUFULEVBQ0FBLEdBREEsQ0FDSSxLQUFLVixNQUFMLENBQVlXLE9BQVosQ0FBb0JMLENBQXBCLENBREosRUFFQUksR0FGQSxtQkFFb0JmLEtBRnBCLFVBRThCLEtBQUtFLFFBRm5DLFVBRWdELEtBQUtDLEtBRnJELFVBRStELEtBQUtDLEtBRnBFLFVBR0FXLEdBSEEsQ0FHSSxVQUhKOztBQUtBLGlCQUFLRSxXQUFMLENBQWlCLEtBQUtYLFFBQXRCLEVBQWdDTSxJQUFoQyxFQUFzQ0QsQ0FBdEM7QUFDQSxtQkFBT0MsS0FBS0csR0FBTCxDQUFTLGtCQUFULENBQVA7QUFHSDs7Ozs7O2tCQUlVZCxZIiwiZmlsZSI6IkZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZvclN0YXRlbWVudFxuICovXG5jbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleCwgYXJyYXksIHRhcmdldCwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZm9yLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgcmV0dXJuIGAkJGZvcigke3RoaXMudGFyZ2V0LnRyYW5zcGlsZSgpfSxgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBmb3JfJHtjb3VudH0gKCR7dGhpcy52YXJpYWJsZX0sICR7dGhpcy5pbmRleH0sICR7dGhpcy5hcnJheX0pIHtgICtcbiAgICAgICAgICAgIGByZXR1cm4gWyR7dGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuY2hpbGRyZW4pfV07IH0uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIG5vZGUuYWRkKCdtYWtlLiRmb3IoJykuXG4gICAgICAgIGFkZCh0aGlzLnRhcmdldC5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKGBmdW5jdGlvbiBmb3JfJHtjb3VudH0gKCR7dGhpcy52YXJpYWJsZX0sICR7dGhpcy5pbmRleH0sICR7dGhpcy5hcnJheX0pIHtgKS5cbiAgICAgICAgYWRkKCdyZXR1cm4gWycpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbyk7XG4gICAgICAgIHJldHVybiBub2RlLmFkZCgnXTsgfS5iaW5kKHRoaXMpKScpO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yU3RhdGVtZW50XG4iXX0=