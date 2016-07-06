'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sourceMap = require('source-map');

var _sourceMap2 = _interopRequireDefault(_sourceMap);

/**
 * Node parent of all the nodes
 */

var Node = (function () {
    function Node(location) {
        _classCallCheck(this, Node);

        this.location = location;
    }

    _createClass(Node, [{
        key: 'sourceNode',
        value: function sourceNode(file, chunk) {

            return new _sourceMap2['default'].SourceNode(this.location.first_line, this.location.first_column, file, chunk || null);
        }
    }, {
        key: 'transpileList',
        value: function transpileList(list) {

            return this.members.map(function (m) {
                return m.transpile();
            }).join(',');
        }
    }, {
        key: 'compileList',
        value: function compileList(list, node, o) {

            list.forEach(function (a, i, all) {

                node.add(a.compile(o));

                if (i < all.length - 1) node.add(',');
            });

            return node;
        }
    }, {
        key: 'toString',
        value: function toString() {
            var _this = this;

            var o = Object.create(null);
            Object.keys(this).forEach(function (k) {
                return o[k] = _this[k];
            });
            var l = o.location;
            delete o.location;
            o.location = l;
            return JSON.stringify(o);
        }
    }]);

    return Node;
})();

exports['default'] = Node;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9Ob2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFBc0IsWUFBWTs7Ozs7Ozs7SUFLNUIsSUFBSTtBQUVLLGFBRlQsSUFBSSxDQUVNLFFBQVEsRUFBRTs4QkFGcEIsSUFBSTs7QUFJRixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBTkMsSUFBSTs7ZUFRSSxvQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFOztBQUVwQixtQkFBTyxJQUFJLHVCQUFVLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQzFCLElBQUksRUFDSixLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7U0FFdEI7OztlQUVZLHVCQUFDLElBQUksRUFBRTs7QUFFaEIsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRXpEOzs7ZUFFVSxxQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTs7QUFFdkIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBSzs7QUFFeEIsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUV0QixvQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFckIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLElBQUksQ0FBQztTQUVmOzs7ZUFFTyxvQkFBRzs7O0FBRVAsZ0JBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBSyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7QUFDL0MsZ0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbkIsbUJBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNsQixhQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNmLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUI7OztXQS9DQyxJQUFJOzs7cUJBa0RLLElBQUkiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3VyY2VNYXAgZnJvbSAnc291cmNlLW1hcCc7XG5cbi8qKlxuICogTm9kZSBwYXJlbnQgb2YgYWxsIHRoZSBub2Rlc1xuICovXG5jbGFzcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgc291cmNlTm9kZShmaWxlLCBjaHVuaykge1xuXG4gICAgICAgIHJldHVybiBuZXcgc291cmNlTWFwLlNvdXJjZU5vZGUodGhpcy5sb2NhdGlvbi5maXJzdF9saW5lLFxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgY2h1bmsgfHwgbnVsbCk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGVMaXN0KGxpc3QpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLm1hcChtID0+IG0udHJhbnNwaWxlKCkpLmpvaW4oJywnKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGVMaXN0KGxpc3QsIG5vZGUsIG8pIHtcblxuICAgICAgICBsaXN0LmZvckVhY2goKGEsIGksIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChhLmNvbXBpbGUobykpXG5cbiAgICAgICAgICAgIGlmIChpIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHZhciBvID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChrID0+IG9ba10gPSB0aGlzW2tdKTtcbiAgICAgICAgdmFyIGwgPSBvLmxvY2F0aW9uO1xuICAgICAgICBkZWxldGUgby5sb2NhdGlvbjtcbiAgICAgICAgby5sb2NhdGlvbiA9IGw7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZVxuIl19