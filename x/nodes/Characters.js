'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * Characters 
 */

var Characters = (function (_Node) {
    _inherits(Characters, _Node);

    function Characters(value, location) {
        _classCallCheck(this, Characters);

        _get(Object.getPrototypeOf(Characters.prototype), 'constructor', this).call(this, location);
        this.value = value;
    }

    _createClass(Characters, [{
        key: 'transpile',
        value: function transpile() {

            return 'make.text(`' + this.value + '`)';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'make.text(').add('`' + this.value + '`');
        }
    }]);

    return Characters;
})(_Node3['default']);

exports['default'] = Characters;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9DaGFyYWN0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLFVBQVU7Y0FBVixVQUFVOztBQUVELGFBRlQsVUFBVSxDQUVBLEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjNCLFVBQVU7O0FBSVYsbUNBSkEsVUFBVSw2Q0FJSixRQUFRLEVBQUU7QUFDZCxZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUV0Qjs7aUJBUEMsVUFBVTs7ZUFTSCxxQkFBRzs7QUFFUixtQ0FBc0IsSUFBSSxDQUFDLEtBQUssUUFBTTtTQUV6Qzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVYLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsZUFBZSxDQUM1QyxHQUFHLE9BQU0sSUFBSSxDQUFDLEtBQUssT0FBSyxDQUFDO1NBRTVCOzs7V0FwQkMsVUFBVTs7O3FCQXVCRCxVQUFVIiwiZmlsZSI6IkNoYXJhY3RlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENoYXJhY3RlcnMgXG4gKi9cbmNsYXNzIENoYXJhY3RlcnMgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYG1ha2UudGV4dChcXGAke3RoaXMudmFsdWV9XFxgKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYG1ha2UudGV4dChgKS5cbiAgICAgICAgYWRkKGBcXGAke3RoaXMudmFsdWV9XFxgYCk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnNcbiJdfQ==