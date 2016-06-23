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
        this['else'] = ielse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSWZDb25kaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0lBS1IsV0FBVztBQUVGLGFBRlQsV0FBVyxDQUVELFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGOUMsV0FBVzs7QUFJVCxZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixZQUFJLFFBQUssR0FBRyxLQUFLLENBQUM7QUFDbEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVRDLFdBQVc7O2VBV0wsb0JBQUc7O0FBRVAsbUJBQU8sc0JBQW9CLElBQUksQ0FBQyxVQUFVLDRCQUN2QixLQUFLLG9CQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBa0IsdUJBQ3ZELEtBQUssb0JBQWUsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBaUIsQ0FBQztTQUVqRjs7O1dBakJDLFdBQVc7OztxQkFxQkYsV0FBVyIsImZpbGUiOiJJZkNvbmRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0aGVucyA9IDA7XG52YXIgZWxzZXMgPSAwO1xuXG4vKipcbiAqIElmQ29uZGl0aW9uIFxuICovXG5jbGFzcyBJZkNvbmRpdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpdGhlbiwgaWVsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gYG1ha2UuaWZjb25kaXRpb24oJHt0aGlzLmV4cHJlc3Npb259LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZl8ke3RoZW5zfSgpeyByZXR1cm4gWyR7dGhpcy50aGVuLmpvaW4oJywnKX1dO30uYmluZCh0aGlzKSwgYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gZWxzZV8ke2Vsc2VzfSgpeyByZXR1cm4gWyR7dGhpcy5lbHNlLmpvaW4oJywnKX1dO30uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElmQ29uZGl0aW9uXG4iXX0=