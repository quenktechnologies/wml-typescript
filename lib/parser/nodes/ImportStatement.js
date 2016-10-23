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

            return 'import ' + this.member.transpile() + ' from ' + this.module.transpile() + ';\n';
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW1wb3J0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkltcG9ydFN0YXRlbWVudCIsIm1lbWJlciIsIm1vZHVsZSIsImxvY2F0aW9uIiwidHlwZSIsInRyYW5zcGlsZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBTU1BLGU7OztBQUVGLDZCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTmtDO0FBUXJDOzs7O29DQUVXOztBQUVSLCtCQUFpQixLQUFLRixNQUFMLENBQVlJLFNBQVosRUFBakIsY0FBaUQsS0FBS0gsTUFBTCxDQUFZRyxTQUFaLEVBQWpEO0FBRUg7OztnQ0FFT0MsQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLFNBQTVCLEVBQ1BDLEdBRE8sQ0FDSCxLQUFLUixNQUFMLENBQVlTLE9BQVosQ0FBb0JKLENBQXBCLENBREcsRUFFUEcsR0FGTyxDQUVILEdBRkcsRUFHUEEsR0FITyxDQUdILEtBQUtQLE1BQUwsQ0FBWVEsT0FBWixDQUFvQkosQ0FBcEIsQ0FIRyxFQUlQRyxHQUpPLENBSUgsR0FKRyxFQUtQQSxHQUxPLE1BQVA7QUFPSDs7Ozs7O2tCQUlVVCxlIiwiZmlsZSI6IkltcG9ydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG4vKipcbiAqIEltcG9ydFN0YXRlbWVudFxuICogQHBhcmFtIHtNZW1iZXJ9IG1lbWJlclxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfSBtb2R1bGVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIEltcG9ydFN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ltcG9ydC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYGltcG9ydCAke3RoaXMubWVtYmVyLnRyYW5zcGlsZSgpfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O1xcbmA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdpbXBvcnQgJykuXG4gICAgICAgIGFkZCh0aGlzLm1lbWJlci5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcgJykuXG4gICAgICAgIGFkZCh0aGlzLm1vZHVsZS5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCc7JykuXG4gICAgICAgIGFkZChgXFxuYCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U3RhdGVtZW50XG4iXX0=