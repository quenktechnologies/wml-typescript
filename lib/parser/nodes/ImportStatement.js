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
 * ImportStatement
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */
var ImportStatement = function (_Node) {
    _inherits(ImportStatement, _Node);

    function ImportStatement(member, module, location) {
        _classCallCheck(this, ImportStatement);

        var _this = _possibleConstructorReturn(this, (ImportStatement.__proto__ || Object.getPrototypeOf(ImportStatement)).call(this));

        _this.type = 'import-statement';
        _this.member = member;
        _this.module = module;
        _this.location = location;

        return _this;
    }

    _createClass(ImportStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            return 'import ' + this.member.transpile(o) + ' from ' + this.module.transpile(o) + ';\n';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'import ').add(this.member.compile(o)).add(' ').add(this.module.compile(o)).add(';').add('\n');
        }
    }]);

    return ImportStatement;
}(_Node3.default);

exports.default = ImportStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW1wb3J0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkltcG9ydFN0YXRlbWVudCIsIm1lbWJlciIsIm1vZHVsZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJ0cmFuc3BpbGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBTU1BLGU7OztBQUVGLDZCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsK0JBQWlCLEtBQUtKLE1BQUwsQ0FBWUssU0FBWixDQUFzQkQsQ0FBdEIsQ0FBakIsY0FBa0QsS0FBS0gsTUFBTCxDQUFZSSxTQUFaLENBQXNCRCxDQUF0QixDQUFsRDtBQUVIOzs7Z0NBRU9BLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLRSxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixTQUE1QixFQUNQQyxHQURPLENBQ0gsS0FBS1IsTUFBTCxDQUFZUyxPQUFaLENBQW9CTCxDQUFwQixDQURHLEVBRVBJLEdBRk8sQ0FFSCxHQUZHLEVBR1BBLEdBSE8sQ0FHSCxLQUFLUCxNQUFMLENBQVlRLE9BQVosQ0FBb0JMLENBQXBCLENBSEcsRUFJUEksR0FKTyxDQUlILEdBSkcsRUFLUEEsR0FMTyxNQUFQO0FBT0g7Ozs7OztrQkFJVVQsZSIsImZpbGUiOiJJbXBvcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuLyoqXG4gKiBJbXBvcnRTdGF0ZW1lbnRcbiAqIEBwYXJhbSB7TWVtYmVyfSBtZW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nTGl0ZXJhbH0gbW9kdWxlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBJbXBvcnRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgbW9kdWxlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbXBvcnQtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHJldHVybiBgaW1wb3J0ICR7dGhpcy5tZW1iZXIudHJhbnNwaWxlKG8pfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKG8pfTtcXG5gO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnaW1wb3J0ICcpLlxuICAgICAgICBhZGQodGhpcy5tZW1iZXIuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnICcpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOycpLlxuICAgICAgICBhZGQoYFxcbmApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydFN0YXRlbWVudFxuIl19