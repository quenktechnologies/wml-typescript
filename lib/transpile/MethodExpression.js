/**
 * MethodExpression 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MethodExpression = (function () {
    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        this.path = path;
        this.args = args;
        this.location = location;
    }

    _createClass(MethodExpression, [{
        key: 'toString',
        value: function toString() {

            return this.path + '(' + this.args.join(',') + ')';
        }
    }]);

    return MethodExpression;
})();

exports['default'] = MethodExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvTWV0aG9kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sZ0JBQWdCO0FBRVAsYUFGVCxnQkFBZ0IsQ0FFTixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGaEMsZ0JBQWdCOztBQUlkLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFSQyxnQkFBZ0I7O2VBVVYsb0JBQUc7O0FBRVAsbUJBQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBSTtTQUVqRDs7O1dBZEMsZ0JBQWdCOzs7cUJBaUJQLGdCQUFnQiIsImZpbGUiOiJNZXRob2RFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uIFxuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGF0aH0oJHt0aGlzLmFyZ3Muam9pbignLCcpfSlgO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNZXRob2RFeHByZXNzaW9uXG4iXX0=