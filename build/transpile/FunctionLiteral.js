'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var count = 0;
/**
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 */

var FunctionLiteral = (function () {
    function FunctionLiteral(parameters, body) {
        _classCallCheck(this, FunctionLiteral);

        this.parameters = parameters;
        this.body = body;
    }

    _createClass(FunctionLiteral, [{
        key: 'toString',
        value: function toString() {

            count = count + 1;

            return 'function func_literal_' + count + '(' + this.parameters.join('') + ')' + ('{ return ' + this.body + '; }.bind(this)');
        }
    }]);

    return FunctionLiteral;
})();

exports['default'] = FunctionLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRnVuY3Rpb25MaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7SUFNUixlQUFlO0FBRU4sYUFGVCxlQUFlLENBRUwsVUFBVSxFQUFFLElBQUksRUFBRTs4QkFGNUIsZUFBZTs7QUFJYixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVwQjs7aUJBUEMsZUFBZTs7ZUFTVCxvQkFBRzs7QUFFUCxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRWxCLG1CQUFPLDJCQUF5QixLQUFLLFNBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUNqRCxJQUFJLENBQUMsSUFBSSxvQkFBZ0IsQ0FBQztTQUU3Qzs7O1dBaEJDLGVBQWU7OztxQkFvQk4sZUFBZSIsImZpbGUiOiJGdW5jdGlvbkxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGdW5jdGlvbkxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHBhcmFtZXRlcnMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGJvZHkgXG4gKi9cbmNsYXNzIEZ1bmN0aW9uTGl0ZXJhbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCBib2R5KSB7XG5cbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgZnVuY3Rpb24gZnVuY19saXRlcmFsXyR7Y291bnR9KCR7dGhpcy5wYXJhbWV0ZXJzLmpvaW4oJycpfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke3RoaXMuYm9keX07IH0uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25MaXRlcmFsXG4iXX0=