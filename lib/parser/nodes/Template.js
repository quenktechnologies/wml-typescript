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
 * Template
 * @param {array<Import>} imports 
 * @param {array<string>} args 
 * @param {Tag} root
 * @param {Location} location 
 */
var Template = function (_Node) {
    _inherits(Template, _Node);

    function Template(imports, args, root, location) {
        _classCallCheck(this, Template);

        var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this, location));

        _this.type = 'template';
        _this.imports = imports;
        _this.parameters = args;
        _this.root = root;

        return _this;
    }

    _createClass(Template, [{
        key: 'transpile',
        value: function transpile() {

            var str = '';
            var args = this.parameters.map(function (p) {
                return p.transpile();
            }).join(',');

            args = args ? ' ,' + args : args;
            this.imports.forEach(function (i) {
                return str = str + i.transpile() + '\n';
            });
            return str + 'export default function (make' + args + ') { return ' + this.root.transpile() + '; }';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var str = '';
            var args = this.parameters.map(function (p) {
                return p.compile(o);
            });

            args = args ? ' ,' + args : args;

            return this.sourceNode(o.fileName, '').add('export default function (make').add(args).add('{ return ').add(this.imports.map(function (i) {
                return i.compile(o);
            })).add(this.root.compile(o)).add('; }');
        }
    }]);

    return Template;
}(_Node3.default);

exports.default = Template;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbXBvcnRzIiwiYXJncyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJhbWV0ZXJzIiwic3RyIiwibWFwIiwicCIsInRyYW5zcGlsZSIsImpvaW4iLCJmb3JFYWNoIiwiaSIsIm8iLCJjb21waWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9NQSxROzs7QUFFRixzQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUFBOztBQUFBLHdIQUVqQ0EsUUFGaUM7O0FBR3ZDLGNBQUtDLElBQUwsR0FBWSxVQUFaO0FBQ0EsY0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0ssVUFBTCxHQUFrQkosSUFBbEI7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7O0FBTnVDO0FBUTFDOzs7O29DQUVXOztBQUVSLGdCQUFJSSxNQUFNLEVBQVY7QUFDQSxnQkFBSUwsT0FBTyxLQUFLSSxVQUFMLENBQWdCRSxHQUFoQixDQUFvQjtBQUFBLHVCQUFHQyxFQUFFQyxTQUFGLEVBQUg7QUFBQSxhQUFwQixFQUFzQ0MsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBWDs7QUFFQVQsbUJBQVFBLElBQUQsR0FBUyxPQUFPQSxJQUFoQixHQUF1QkEsSUFBOUI7QUFDQSxpQkFBS0QsT0FBTCxDQUFhVyxPQUFiLENBQXFCO0FBQUEsdUJBQUtMLE1BQU1BLE1BQU1NLEVBQUVILFNBQUYsRUFBTixHQUFzQixJQUFqQztBQUFBLGFBQXJCO0FBQ0EsbUJBQVVILEdBQVYscUNBQTZDTCxJQUE3QyxtQkFBK0QsS0FBS0MsSUFBTCxDQUFVTyxTQUFWLEVBQS9EO0FBRUg7OztnQ0FFT0ksQyxFQUFHOztBQUVQLGdCQUFJUCxNQUFNLEVBQVY7QUFDQSxnQkFBSUwsT0FBTyxLQUFLSSxVQUFMLENBQWdCRSxHQUFoQixDQUFvQjtBQUFBLHVCQUFHQyxFQUFFTSxPQUFGLENBQVVELENBQVYsQ0FBSDtBQUFBLGFBQXBCLENBQVg7O0FBRUFaLG1CQUFRQSxJQUFELEdBQVMsT0FBT0EsSUFBaEIsR0FBdUJBLElBQTlCOztBQUVBLG1CQUFPLEtBQUtjLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ1BDLEdBRE8sQ0FDSCwrQkFERyxFQUVQQSxHQUZPLENBRUhoQixJQUZHLEVBR1BnQixHQUhPLENBR0gsV0FIRyxFQUlQQSxHQUpPLENBSUgsS0FBS2pCLE9BQUwsQ0FBYU8sR0FBYixDQUFpQjtBQUFBLHVCQUFLSyxFQUFFRSxPQUFGLENBQVVELENBQVYsQ0FBTDtBQUFBLGFBQWpCLENBSkcsRUFLUEksR0FMTyxDQUtILEtBQUtmLElBQUwsQ0FBVVksT0FBVixDQUFrQkQsQ0FBbEIsQ0FMRyxFQU1QSSxHQU5PLENBTUgsS0FORyxDQUFQO0FBU0g7Ozs7OztrQkFJVWxCLFEiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRlbXBsYXRlXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHMgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGFyZ3MgXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCBhcmdzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gYXJncztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcChwPT5wLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG5cbiAgICAgICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcbiAgICAgICAgdGhpcy5pbXBvcnRzLmZvckVhY2goaSA9PiBzdHIgPSBzdHIgKyBpLnRyYW5zcGlsZSgpICsgJ1xcbicpO1xuICAgICAgICByZXR1cm4gYCR7c3RyfWV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYWtlJHthcmdzfSkgeyByZXR1cm4gJHt0aGlzLnJvb3QudHJhbnNwaWxlKCl9OyB9YFxuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IHRoaXMucGFyYW1ldGVycy5tYXAocD0+cC5jb21waWxlKG8pKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQoJ2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYWtlJykuXG4gICAgICAgIGFkZChhcmdzKS5cbiAgICAgICAgYWRkKCd7IHJldHVybiAnKS5cbiAgICAgICAgYWRkKHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLmNvbXBpbGUobykpKS5cbiAgICAgICAgYWRkKHRoaXMucm9vdC5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCc7IH0nKTtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlXG4iXX0=