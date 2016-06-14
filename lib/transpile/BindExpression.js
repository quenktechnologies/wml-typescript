/**
 * BindExpression 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BindExpression = (function () {
    function BindExpression(parent, target, args) {
        _classCallCheck(this, BindExpression);

        this.parent = parent;
        this.target = target;
        this.args = args;
    }

    _createClass(BindExpression, [{
        key: 'toString',
        value: function toString() {

            var args = this.args.length > 0 ? this.args.join(',') : '';
            return this.parent + '.' + this.target + '.bind(' + this.parent + ', ' + args + ')';
        }
    }]);

    return BindExpression;
})();

exports['default'] = BindExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQmluZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdNLGNBQWM7QUFFTCxhQUZULGNBQWMsQ0FFSixNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFGaEMsY0FBYzs7QUFJWixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVwQjs7aUJBUkMsY0FBYzs7ZUFVUixvQkFBRzs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsQUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzdELG1CQUFVLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLE1BQU0sY0FBUyxJQUFJLENBQUMsTUFBTSxVQUFLLElBQUksT0FBSTtTQUV4RTs7O1dBZkMsY0FBYzs7O3FCQW9CTCxjQUFjIiwiZmlsZSI6IkJpbmRFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCaW5kRXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgQmluZEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0YXJnZXQsIGFyZ3MpIHtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICB2YXIgYXJncyA9ICh0aGlzLmFyZ3MubGVuZ3RoID4gMCkgPyB0aGlzLmFyZ3Muam9pbignLCcpIDogJyc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhcmVudH0uJHt0aGlzLnRhcmdldH0uYmluZCgke3RoaXMucGFyZW50fSwgJHthcmdzfSlgO1xuXG4gICAgfVxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgQmluZEV4cHJlc3Npb25cbiJdfQ==