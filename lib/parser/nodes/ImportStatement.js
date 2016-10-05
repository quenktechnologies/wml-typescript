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
        value: function transpile() {

            return 'import ' + this.member.transpile() + ' from ' + this.module.transpile() + ';';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'import ').add(this.member.compile(o)).add(' ').add(this.module.compile(o)).add(';');
        }
    }]);

    return ImportStatement;
}(_Node3.default);

exports.default = ImportStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW1wb3J0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkltcG9ydFN0YXRlbWVudCIsIm1lbWJlciIsIm1vZHVsZSIsImxvY2F0aW9uIiwidHlwZSIsInRyYW5zcGlsZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBTU1BLGU7OztBQUVGLDZCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O29DQUVXOztBQUVSLCtCQUFpQixLQUFLRixNQUFMLENBQVlJLFNBQVosRUFBakIsY0FBaUQsS0FBS0gsTUFBTCxDQUFZRyxTQUFaLEVBQWpEO0FBRUg7OztnQ0FFT0MsQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLFNBQTVCLEVBQ1BDLEdBRE8sQ0FDSCxLQUFLUixNQUFMLENBQVlTLE9BQVosQ0FBb0JKLENBQXBCLENBREcsRUFFUEcsR0FGTyxDQUVILEdBRkcsRUFHUEEsR0FITyxDQUdILEtBQUtQLE1BQUwsQ0FBWVEsT0FBWixDQUFvQkosQ0FBcEIsQ0FIRyxFQUlQRyxHQUpPLENBSUgsR0FKRyxDQUFQO0FBTUg7Ozs7OztrQkFJVVQsZSIsImZpbGUiOiJJbXBvcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuLyoqXG4gKiBJbXBvcnRTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge01lbWJlcn0gbWVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgSW1wb3J0U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIG1vZHVsZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW1wb3J0LXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgaW1wb3J0ICR7dGhpcy5tZW1iZXIudHJhbnNwaWxlKCl9IGZyb20gJHt0aGlzLm1vZHVsZS50cmFuc3BpbGUoKX07YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ2ltcG9ydCAnKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJyAnKS5cbiAgICAgICAgYWRkKHRoaXMubW9kdWxlLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJzsnKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRTdGF0ZW1lbnRcbiJdfQ==