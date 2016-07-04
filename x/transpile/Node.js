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
            return JSON.stringify(o);
        }
    }]);

    return Node;
})();

exports['default'] = Node;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7eUJBQXNCLFlBQVk7Ozs7Ozs7O0lBSzVCLElBQUk7QUFFSyxhQUZULElBQUksQ0FFTSxRQUFRLEVBQUU7OEJBRnBCLElBQUk7O0FBSUYsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQU5DLElBQUk7O2VBUUksb0JBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTs7QUFFcEIsbUJBQU8sSUFBSSx1QkFBVSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUMxQixJQUFJLEVBQ0osS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBRXRCOzs7ZUFFWSx1QkFBQyxJQUFJLEVBQUU7O0FBRWhCLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUV6RDs7O2VBRVUscUJBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7O0FBRXZCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUs7O0FBRXhCLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFdEIsb0JBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRXJCLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxJQUFJLENBQUM7U0FFZjs7O2VBRU8sb0JBQUc7OztBQUVQLGdCQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQUssQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQy9DLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUI7OztXQTVDQyxJQUFJOzs7cUJBK0NLLElBQUkiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3VyY2VNYXAgZnJvbSAnc291cmNlLW1hcCc7XG5cbi8qKlxuICogTm9kZSBwYXJlbnQgb2YgYWxsIHRoZSBub2Rlc1xuICovXG5jbGFzcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgc291cmNlTm9kZShmaWxlLCBjaHVuaykge1xuXG4gICAgICAgIHJldHVybiBuZXcgc291cmNlTWFwLlNvdXJjZU5vZGUodGhpcy5sb2NhdGlvbi5maXJzdF9saW5lLFxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgY2h1bmsgfHwgbnVsbCk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGVMaXN0KGxpc3QpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLm1hcChtID0+IG0udHJhbnNwaWxlKCkpLmpvaW4oJywnKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGVMaXN0KGxpc3QsIG5vZGUsIG8pIHtcblxuICAgICAgICBsaXN0LmZvckVhY2goKGEsIGksIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChhLmNvbXBpbGUobykpXG5cbiAgICAgICAgICAgIGlmIChpIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHZhciBvID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChrID0+IG9ba10gPSB0aGlzW2tdKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8pO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlXG4iXX0=