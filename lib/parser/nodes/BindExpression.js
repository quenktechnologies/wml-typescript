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
 * BindExpression
 * @param {string} path
 * @param {string} target
 * @param {array<Expression>} args
 */
var BindExpression = function (_Node) {
    _inherits(BindExpression, _Node);

    function BindExpression(object, member, args, location) {
        _classCallCheck(this, BindExpression);

        var _this = _possibleConstructorReturn(this, (BindExpression.__proto__ || Object.getPrototypeOf(BindExpression)).call(this, location));

        _this.type = 'bind-expression';
        _this.object = object;
        _this.member = member;
        _this.arguments = args;

        return _this;
    }

    _createClass(BindExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            }).join(',');
            var object = this.object.transpile(o);
            var member = this.member.transpile(o);

            args = args ? ' ,' + args : args;

            return object + '.' + member + '.bind(' + object + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add(this.path).add('.').add(this.target).add('.bind(');
            return this.compileList(this.arguments, node, o);
        }
    }]);

    return BindExpression;
}(_Node3.default);

exports.default = BindExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQmluZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiQmluZEV4cHJlc3Npb24iLCJvYmplY3QiLCJtZW1iZXIiLCJhcmdzIiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwibyIsIm1hcCIsImEiLCJ0cmFuc3BpbGUiLCJqb2luIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsInBhdGgiLCJ0YXJnZXQiLCJjb21waWxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxjOzs7QUFFRiw0QkFBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEJDLElBQTVCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUFBOztBQUFBLG9JQUVsQ0EsUUFGa0M7O0FBR3hDLGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCOztBQU53QztBQVEzQzs7OztrQ0FFU0ksQyxFQUFHOztBQUVULGdCQUFJSixPQUFPLEtBQUtHLFNBQUwsQ0FBZUUsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlILENBQVosQ0FBTDtBQUFBLGFBQW5CLEVBQXdDSSxJQUF4QyxDQUE2QyxHQUE3QyxDQUFYO0FBQ0EsZ0JBQUlWLFNBQVMsS0FBS0EsTUFBTCxDQUFZUyxTQUFaLENBQXNCSCxDQUF0QixDQUFiO0FBQ0EsZ0JBQUlMLFNBQVMsS0FBS0EsTUFBTCxDQUFZUSxTQUFaLENBQXNCSCxDQUF0QixDQUFiOztBQUVBSixtQkFBUUEsSUFBRCxHQUFTLE9BQU9BLElBQWhCLEdBQXVCQSxJQUE5Qjs7QUFFQSxtQkFBVUYsTUFBVixTQUFvQkMsTUFBcEIsY0FBbUNELE1BQW5DLEdBQTRDRSxJQUE1QztBQUVIOzs7Z0NBRU9JLEMsRUFBRzs7QUFFUCxnQkFBSUssT0FBTyxLQUFLQyxVQUFMLENBQWdCTixFQUFFTyxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBRixpQkFBS0csR0FBTCxDQUFTLEtBQUtDLElBQWQsRUFDQUQsR0FEQSxDQUNJLEdBREosRUFFQUEsR0FGQSxDQUVJLEtBQUtFLE1BRlQsRUFHQUYsR0FIQSxDQUdJLFFBSEo7QUFJQSxtQkFBTyxLQUFLRyxXQUFMLENBQWlCLEtBQUtaLFNBQXRCLEVBQWlDTSxJQUFqQyxFQUF1Q0wsQ0FBdkMsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVQLGMiLCJmaWxlIjoiQmluZEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEJpbmRFeHByZXNzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gYXJnc1xuICovXG5jbGFzcyBCaW5kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBtZW1iZXIsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYmluZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMubWFwKGEgPT4gYS50cmFuc3BpbGUobykpLmpvaW4oJywnKTtcbiAgICAgICAgdmFyIG9iamVjdCA9IHRoaXMub2JqZWN0LnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMubWVtYmVyLnRyYW5zcGlsZShvKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHJldHVybiBgJHtvYmplY3R9LiR7bWVtYmVyfS5iaW5kKCR7b2JqZWN0fSR7YXJnc30pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBub2RlLmFkZCh0aGlzLnBhdGgpLlxuICAgICAgICBhZGQoJy4nKS5cbiAgICAgICAgYWRkKHRoaXMudGFyZ2V0KS5cbiAgICAgICAgYWRkKCcuYmluZCgnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZEV4cHJlc3Npb25cbiJdfQ==