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
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 * @param {Location} location 
 */

var FunctionLiteral = function (_Node) {
    _inherits(FunctionLiteral, _Node);

    function FunctionLiteral(parameters, body, location) {
        _classCallCheck(this, FunctionLiteral);

        var _this = _possibleConstructorReturn(this, (FunctionLiteral.__proto__ || Object.getPrototypeOf(FunctionLiteral)).call(this, location));

        _this.type = 'function-literal';
        _this.parameters = parameters;
        _this.body = body;

        return _this;
    }

    _createClass(FunctionLiteral, [{
        key: 'transpile',
        value: function transpile() {

            var params = this.parameters.join(',');
            count = count + 1;

            return 'function function_literal_' + count + '(' + params + ')' + ('{ return ' + this.body.transpile() + '; }.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add('function function_literal_' + count + '(' + this.parameters.join(',') + ')').add('{ return ');

            return this.compileList(this.body.compile(o)).add('; } bind(this)');
        }
    }]);

    return FunctionLiteral;
}(_Node3.default);

exports.default = FunctionLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnVuY3Rpb25MaXRlcmFsLmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRnVuY3Rpb25MaXRlcmFsIiwicGFyYW1ldGVycyIsImJvZHkiLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJhbXMiLCJqb2luIiwidHJhbnNwaWxlIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlTGlzdCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7Ozs7O0lBTU1DLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxJQUF4QixFQUE4QkMsUUFBOUIsRUFBd0M7QUFBQTs7QUFBQSxzSUFFOUJBLFFBRjhCOztBQUdwQyxjQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFMb0M7QUFPdkM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUlHLFNBQVMsS0FBS0osVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUIsR0FBckIsQ0FBYjtBQUNBUCxvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxtQkFBTywrQkFBNkJBLEtBQTdCLFNBQXNDTSxNQUF0Qyx3QkFDUyxLQUFLSCxJQUFMLENBQVVLLFNBQVYsRUFEVCxvQkFBUDtBQUdIOzs7Z0NBRU9DLEMsRUFBRzs7QUFFVCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixDQUFYOztBQUVBRixpQkFBS0csR0FBTCxnQ0FBc0NiLEtBQXRDLFNBQStDLEtBQUtFLFVBQUwsQ0FBZ0JLLElBQWhCLENBQXFCLEdBQXJCLENBQS9DLFFBQ0VNLEdBREYsQ0FDTSxXQUROOztBQUdFLG1CQUFPLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1gsSUFBTCxDQUFVWSxPQUFWLENBQWtCTixDQUFsQixDQUFqQixFQUNISSxHQURHLENBQ0MsZ0JBREQsQ0FBUDtBQUdIOzs7Ozs7a0JBSVVaLGUiLCJmaWxlIjoiRnVuY3Rpb25MaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcbi8qKlxuICogRnVuY3Rpb25MaXRlcmFsIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBwYXJhbWV0ZXJzIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBib2R5IFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEZ1bmN0aW9uTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycywgYm9keSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1saXRlcmFsJztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKTtcbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7cGFyYW1zfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke3RoaXMuYm9keS50cmFuc3BpbGUoKX07IH0uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICBub2RlLmFkZChgZnVuY3Rpb24gZnVuY3Rpb25fbGl0ZXJhbF8ke2NvdW50fSgke3RoaXMucGFyYW1ldGVycy5qb2luKCcsJyl9KWApLlxuICAgICAgICBhZGQoJ3sgcmV0dXJuICcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYm9keS5jb21waWxlKG8pKS5cbiAgICAgICAgICAgIGFkZCgnOyB9IGJpbmQodGhpcyknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkxpdGVyYWxcbiJdfQ==