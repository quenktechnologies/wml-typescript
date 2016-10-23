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
 * FunctionExpression
 */
var FunctionExpression = function (_Node) {
    _inherits(FunctionExpression, _Node);

    function FunctionExpression(name, args, location) {
        _classCallCheck(this, FunctionExpression);

        var _this = _possibleConstructorReturn(this, (FunctionExpression.__proto__ || Object.getPrototypeOf(FunctionExpression)).call(this, location));

        _this.type = 'function-expression';
        _this.name = name;
        _this.arguments = args;

        return _this;
    }

    _createClass(FunctionExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return this.name + '(' + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, this.name).add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return FunctionExpression;
}(_Node3.default);

exports.default = FunctionExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnVuY3Rpb25FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uRXhwcmVzc2lvbiIsIm5hbWUiLCJhcmdzIiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwidHJhbnNwaWxlTGlzdCIsIm8iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVGLGdDQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQSw0SUFFeEJBLFFBRndCOztBQUc5QixjQUFLQyxJQUFMLEdBQVkscUJBQVo7QUFDQSxjQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLSSxTQUFMLEdBQWlCSCxJQUFqQjs7QUFMOEI7QUFPakM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUlBLE9BQU8sS0FBS0ksYUFBTCxDQUFtQixLQUFLRCxTQUF4QixDQUFYO0FBQ0EsbUJBQVUsS0FBS0osSUFBZixTQUF1QkMsSUFBdkI7QUFFSDs7O2dDQUVPSyxDLEVBQUc7O0FBRVAsZ0JBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsS0FBS1QsSUFBakMsRUFDWFUsR0FEVyxDQUNQLEdBRE8sQ0FBWDs7QUFHQSxtQkFBTyxLQUFLQyxXQUFMLENBQWlCLEtBQUtQLFNBQXRCLEVBQWlDRyxJQUFqQyxFQUF1Q0QsQ0FBdkMsRUFDUEksR0FETyxDQUNILEdBREcsQ0FBUDtBQUdIOzs7Ozs7a0JBR1VYLGtCIiwiZmlsZSI6IkZ1bmN0aW9uRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRnVuY3Rpb25FeHByZXNzaW9uXG4gKi9cbmNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0oJHthcmdzfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5uYW1lKS5cbiAgICAgICAgYWRkKCcoJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJyknKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25FeHByZXNzaW9uXG4iXX0=