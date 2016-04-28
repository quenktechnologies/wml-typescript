'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var count = 0;
/**
 * ForLoop 
 */

var ForLoop = (function () {
    function ForLoop(variable, indexName, target, children, location) {
        _classCallCheck(this, ForLoop);

        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
        this.location = location;
    }

    _createClass(ForLoop, [{
        key: 'toString',
        value: function toString() {

            count = count + 1;

            return 'make.forloop(' + this.target + ',' + ('function for_' + count + ' (' + this.variable + ', ' + this.indexName + ') {') + ('return [' + this.children.join(',') + ']; }.bind(this))');
        }
    }]);

    return ForLoop;
})();

exports['default'] = ForLoop;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRm9yTG9vcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUlSLE9BQU87QUFFRSxhQUZULE9BQU8sQ0FFRyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOzhCQUYzRCxPQUFPOztBQUlMLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFWQyxPQUFPOztlQVlELG9CQUFHOztBQUVULGlCQUFLLEdBQUcsS0FBSyxHQUFFLENBQUMsQ0FBQzs7QUFFZixtQkFBTyxrQkFBZ0IsSUFBSSxDQUFDLE1BQU0sNEJBQ2QsS0FBSyxVQUFLLElBQUksQ0FBQyxRQUFRLFVBQUssSUFBSSxDQUFDLFNBQVMsU0FBSyxpQkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFrQixDQUFDO1NBRTVEOzs7V0FwQkMsT0FBTzs7O3FCQXdCRSxPQUFPIiwiZmlsZSI6IkZvckxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGb3JMb29wIFxuICovXG5jbGFzcyBGb3JMb29wIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleE5hbWUsIHRhcmdldCwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgICAgICB0aGlzLmluZGV4TmFtZSA9IGluZGV4TmFtZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgIGNvdW50ID0gY291bnQgKzE7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLmZvcmxvb3AoJHt0aGlzLnRhcmdldH0sYCtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBmb3JfJHtjb3VudH0gKCR7dGhpcy52YXJpYWJsZX0sICR7dGhpcy5pbmRleE5hbWV9KSB7YCArXG4gICAgICAgICAgICBgcmV0dXJuIFske3RoaXMuY2hpbGRyZW4uam9pbignLCcpfV07IH0uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvckxvb3BcbiJdfQ==