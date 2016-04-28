'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var thens = 0;
var elses = 0;

/**
 * IfCondition 
 */

var IfCondition = (function () {
    function IfCondition(expression, ithen, ielse, location) {
        _classCallCheck(this, IfCondition);

        this.expression = expression;
        this.then = ithen;
        this['else'] = [];
        this.location = location;
    }

    _createClass(IfCondition, [{
        key: 'toString',
        value: function toString() {

            return 'make.ifcondition(' + this.expression + ', ' + ('function if_' + thens + '(){ return [' + this.then.join(',') + '];}.bind(this), ') + ('function else_' + elses + '(){ return [' + this['else'].join(',') + '];}.bind(this))');
        }
    }]);

    return IfCondition;
})();

exports['default'] = IfCondition;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSWZDb25kaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0lBS1IsV0FBVztBQUVGLGFBRlQsV0FBVyxDQUVELFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGOUMsV0FBVzs7QUFJVCxZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixZQUFJLFFBQUssR0FBRyxFQUFFLENBQUM7QUFDZixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsV0FBVzs7ZUFXTCxvQkFBRzs7QUFFUCxtQkFBTyxzQkFBb0IsSUFBSSxDQUFDLFVBQVUsNEJBQ3ZCLEtBQUssb0JBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFrQix1QkFDdkQsS0FBSyxvQkFBZSxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFpQixDQUFDO1NBRWpGOzs7V0FqQkMsV0FBVzs7O3FCQXFCRixXQUFXIiwiZmlsZSI6IklmQ29uZGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRoZW5zID0gMDtcbnZhciBlbHNlcyA9IDA7XG5cbi8qKlxuICogSWZDb25kaXRpb24gXG4gKi9cbmNsYXNzIElmQ29uZGl0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGl0aGVuLCBpZWxzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLnRoZW4gPSBpdGhlbjtcbiAgICAgICAgdGhpcy5lbHNlID0gW107XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiBgbWFrZS5pZmNvbmRpdGlvbigke3RoaXMuZXhwcmVzc2lvbn0sIGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGlmXyR7dGhlbnN9KCl7IHJldHVybiBbJHt0aGlzLnRoZW4uam9pbignLCcpfV07fS5iaW5kKHRoaXMpLCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBlbHNlXyR7ZWxzZXN9KCl7IHJldHVybiBbJHt0aGlzLmVsc2Uuam9pbignLCcpfV07fS5iaW5kKHRoaXMpKWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWZDb25kaXRpb25cbiJdfQ==