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
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */

var TernaryExpression = (function (_Node) {
    _inherits(TernaryExpression, _Node);

    function TernaryExpression(logic, iftrue, iffalse, location) {
        _classCallCheck(this, TernaryExpression);

        _get(Object.getPrototypeOf(TernaryExpression.prototype), 'constructor', this).call(this, location);
        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
    }

    _createClass(TernaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return '(' + this.logic.transpile() + ')? ' + this.iftrue.transpile() + ' : ' + this.iffalse.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '(').add(this.logic.compile(o)).add(')?').add(this.iftrue.compile(o)).add(':').add(this.iffalse.compile(o));
        }
    }]);

    return TernaryExpression;
})(_Node3['default']);

exports['default'] = TernaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1Rlcm5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7O0lBUW5CLGlCQUFpQjtjQUFqQixpQkFBaUI7O0FBRVIsYUFGVCxpQkFBaUIsQ0FFUCxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7OEJBRjVDLGlCQUFpQjs7QUFJakIsbUNBSkEsaUJBQWlCLDZDQUlYLFFBQVEsRUFBRTtBQUNkLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBRTFCOztpQkFUQyxpQkFBaUI7O2VBV1YscUJBQUc7O0FBRVIseUJBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsV0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUc7U0FFbEc7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFVCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDUixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVoQzs7O1dBMUJDLGlCQUFpQjs7O3FCQThCUixpQkFBaUIiLCJmaWxlIjoiVGVybmFyeUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRlcm5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBsb2dpYyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZ0cnVlIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZmZhbHNlIFxuICovXG5jbGFzcyBUZXJuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobG9naWMsIGlmdHJ1ZSwgaWZmYWxzZSwgbG9jYXRpb24pIHtcblxuICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy5sb2dpYy50cmFuc3BpbGUoKX0pPyAke3RoaXMuaWZ0cnVlLnRyYW5zcGlsZSgpfSA6ICR7dGhpcy5pZmZhbHNlLnRyYW5zcGlsZSgpfWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnKCcpLlxuICAgICAgICBhZGQodGhpcy5sb2dpYy5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcpPycpLlxuICAgICAgICBhZGQodGhpcy5pZnRydWUuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOicpLlxuICAgICAgICBhZGQodGhpcy5pZmZhbHNlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm5hcnlFeHByZXNzaW9uXG4iXX0=