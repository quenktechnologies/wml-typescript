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

            return 'make.$for(' + this.target.transpile() + ',' + ('function for_' + count + ' (' + this.variable + ', ' + this.index + ', ' + this.array + ') {') + ('return [' + this.transpileList(this.children) + ']; }.bind(this))');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5IiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGUiLCJ0cmFuc3BpbGVMaXN0IiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7O0lBR01DLFk7OztBQUVGLDBCQUFZQyxRQUFaLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLE1BQXBDLEVBQTRDQyxRQUE1QyxFQUFzREMsUUFBdEQsRUFBZ0U7QUFBQTs7QUFBQSxnSUFFdERBLFFBRnNEOztBQUc1RCxjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtOLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUjREO0FBVS9EOzs7O29DQUVXOztBQUVSTixvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxtQkFBTyxlQUFhLEtBQUtLLE1BQUwsQ0FBWUksU0FBWixFQUFiLDRCQUNhVCxLQURiLFVBQ3VCLEtBQUtFLFFBRDVCLFVBQ3lDLEtBQUtDLEtBRDlDLFVBQ3dELEtBQUtDLEtBRDdELDBCQUVRLEtBQUtNLGFBQUwsQ0FBbUIsS0FBS0osUUFBeEIsQ0FGUixzQkFBUDtBQUlIOzs7Z0NBRU9LLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBZCxvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQVksaUJBQUtHLEdBQUwsQ0FBUyxZQUFULEVBQ0FBLEdBREEsQ0FDSSxLQUFLVixNQUFMLENBQVlXLE9BQVosQ0FBb0JMLENBQXBCLENBREosRUFFQUksR0FGQSxtQkFFb0JmLEtBRnBCLFVBRThCLEtBQUtFLFFBRm5DLFVBRWdELEtBQUtDLEtBRnJELFVBRStELEtBQUtDLEtBRnBFLFVBR0FXLEdBSEEsQ0FHSSxVQUhKOztBQUtBLGlCQUFLRSxXQUFMLENBQWlCLEtBQUtYLFFBQXRCLEVBQWdDTSxJQUFoQyxFQUFzQ0QsQ0FBdEM7QUFDQSxtQkFBT0MsS0FBS0csR0FBTCxDQUFTLGtCQUFULENBQVA7QUFHSDs7Ozs7O2tCQUlVZCxZIiwiZmlsZSI6IkZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG4vKipcbiAqIEZvclN0YXRlbWVudCBcbiAqL1xuY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgaW5kZXgsIGFycmF5LCB0YXJnZXQsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2Zvci1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgbWFrZS4kZm9yKCR7dGhpcy50YXJnZXQudHJhbnNwaWxlKCl9LGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGZvcl8ke2NvdW50fSAoJHt0aGlzLnZhcmlhYmxlfSwgJHt0aGlzLmluZGV4fSwgJHt0aGlzLmFycmF5fSkge2AgK1xuICAgICAgICAgICAgYHJldHVybiBbJHt0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5jaGlsZHJlbil9XTsgfS5iaW5kKHRoaXMpKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgbm9kZS5hZGQoJ21ha2UuJGZvcignKS5cbiAgICAgICAgYWRkKHRoaXMudGFyZ2V0LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoYGZ1bmN0aW9uIGZvcl8ke2NvdW50fSAoJHt0aGlzLnZhcmlhYmxlfSwgJHt0aGlzLmluZGV4fSwgJHt0aGlzLmFycmF5fSkge2ApLlxuICAgICAgICBhZGQoJ3JldHVybiBbJyk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKTtcbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCddOyB9LmJpbmQodGhpcykpJyk7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JTdGF0ZW1lbnRcbiJdfQ==