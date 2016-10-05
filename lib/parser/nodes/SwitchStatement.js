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
 * SwitchStatement 
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases 
 * @param {Location} location 
 */
var SwitchStatement = function (_Node) {
    _inherits(SwitchStatement, _Node);

    function SwitchStatement(expression, cases, location) {
        _classCallCheck(this, SwitchStatement);

        var _this = _possibleConstructorReturn(this, (SwitchStatement.__proto__ || Object.getPrototypeOf(SwitchStatement)).call(this, location));

        _this.type = 'switch-statement';
        _this.expression = expression;
        _this.cases = cases;

        return _this;
    }

    _createClass(SwitchStatement, [{
        key: 'transpile',
        value: function transpile() {

            var str = '{';

            this.cases.forEach(function (c) {
                return str = str + c.expression.transpile() + ':' + c.transpile() + ',';
            });

            str = str.substring(0, str.length - 1);
            str = str + '}';

            return 'make.$switch(' + this.expression.transpile() + ',' + str + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add('make.$switch(').add(this.expression.compile(o)).add(',{');

            this.cases.forEach(function (c, k, all) {

                node.add(c.value.compile(o)).add(':').add(c.compile(o));

                if (k < all.length - 1) node.add(',');
            });

            return node.add('})');
        }
    }]);

    return SwitchStatement;
}(_Node3.default);

exports.default = SwitchStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvU3dpdGNoU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlN3aXRjaFN0YXRlbWVudCIsImV4cHJlc3Npb24iLCJjYXNlcyIsImxvY2F0aW9uIiwidHlwZSIsInN0ciIsImZvckVhY2giLCJjIiwidHJhbnNwaWxlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiayIsImFsbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUM7QUFBQTs7QUFBQSxzSUFFL0JBLFFBRitCOztBQUdyQyxjQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFMcUM7QUFPeEM7Ozs7b0NBRVc7O0FBRVIsZ0JBQUlHLE1BQU0sR0FBVjs7QUFHQSxpQkFBS0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CO0FBQUEsdUJBQ2ZELE1BQU1BLE1BQU1FLEVBQUVOLFVBQUYsQ0FBYU8sU0FBYixFQUFOLEdBQWlDLEdBQWpDLEdBQXVDRCxFQUFFQyxTQUFGLEVBQXZDLEdBQXVELEdBRDlDO0FBQUEsYUFBbkI7O0FBR0FILGtCQUFNQSxJQUFJSSxTQUFKLENBQWMsQ0FBZCxFQUFpQkosSUFBSUssTUFBSixHQUFhLENBQTlCLENBQU47QUFDQUwsa0JBQU1BLE1BQU0sR0FBWjs7QUFFQSxxQ0FBdUIsS0FBS0osVUFBTCxDQUFnQk8sU0FBaEIsRUFBdkIsU0FBc0RILEdBQXREO0FBRUg7OztnQ0FFT00sQyxFQUFHOztBQUVQLGdCQUFJQyxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEVBQTVCLENBQVg7O0FBRUFGLGlCQUFLRyxHQUFMLGtCQUNBQSxHQURBLENBQ0ksS0FBS2QsVUFBTCxDQUFnQmUsT0FBaEIsQ0FBd0JMLENBQXhCLENBREosRUFFQUksR0FGQSxDQUVJLElBRko7O0FBSUEsaUJBQUtiLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixVQUFDQyxDQUFELEVBQUlVLENBQUosRUFBT0MsR0FBUCxFQUFlOztBQUU5Qk4scUJBQUtHLEdBQUwsQ0FBU1IsRUFBRVksS0FBRixDQUFRSCxPQUFSLENBQWdCTCxDQUFoQixDQUFULEVBQ0FJLEdBREEsQ0FDSSxHQURKLEVBRUFBLEdBRkEsQ0FFSVIsRUFBRVMsT0FBRixDQUFVTCxDQUFWLENBRko7O0FBSUEsb0JBQUlNLElBQUlDLElBQUlSLE1BQUosR0FBYSxDQUFyQixFQUNJRSxLQUFLRyxHQUFMLENBQVMsR0FBVDtBQUVQLGFBVEQ7O0FBV0EsbUJBQU9ILEtBQUtHLEdBQUwsQ0FBUyxJQUFULENBQVA7QUFFSDs7Ozs7O2tCQUlVZixlIiwiZmlsZSI6IlN3aXRjaFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU3dpdGNoU3RhdGVtZW50IFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PENhc2VTdGF0ZW1lbnQ+fSBjYXNlcyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGNhc2VzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3N3aXRjaC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmNhc2VzID0gY2FzZXM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICd7JztcblxuXG4gICAgICAgIHRoaXMuY2FzZXMuZm9yRWFjaChjID0+XG4gICAgICAgICAgICBzdHIgPSBzdHIgKyBjLmV4cHJlc3Npb24udHJhbnNwaWxlKCkgKyAnOicgKyBjLnRyYW5zcGlsZSgpICsgJywnKTtcblxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgICAgICAgc3RyID0gc3RyICsgJ30nO1xuXG4gICAgICAgIHJldHVybiBgbWFrZS4kc3dpdGNoKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwke3N0cn0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBub2RlLmFkZChgbWFrZS4kc3dpdGNoKGApLlxuICAgICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJyx7Jyk7XG5cbiAgICAgICAgdGhpcy5jYXNlcy5mb3JFYWNoKChjLCBrLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYy52YWx1ZS5jb21waWxlKG8pKS5cbiAgICAgICAgICAgIGFkZCgnOicpLlxuICAgICAgICAgICAgYWRkKGMuY29tcGlsZShvKSk7XG5cbiAgICAgICAgICAgIGlmIChrIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZS5hZGQoJ30pJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoU3RhdGVtZW50XG4iXX0=