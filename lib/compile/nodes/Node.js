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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL05vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQUFzQixZQUFZOzs7Ozs7OztJQUs1QixJQUFJO0FBRUssYUFGVCxJQUFJLENBRU0sUUFBUSxFQUFFOzhCQUZwQixJQUFJOztBQUlGLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFOQyxJQUFJOztlQVFJLG9CQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7O0FBRXBCLG1CQUFPLElBQUksdUJBQVUsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFDMUIsSUFBSSxFQUNKLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztTQUV0Qjs7O2VBRVksdUJBQUMsSUFBSSxFQUFFOztBQUVoQixtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFekQ7OztlQUVVLHFCQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOztBQUV2QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFLOztBQUV4QixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXRCLG9CQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUVyQixDQUFDLENBQUM7O0FBRUgsbUJBQU8sSUFBSSxDQUFDO1NBRWY7OztlQUVPLG9CQUFHOzs7QUFFUCxnQkFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixrQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFLLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztBQUMvQyxtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRTVCOzs7V0E1Q0MsSUFBSTs7O3FCQStDSyxJQUFJIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAnO1xuXG4vKipcbiAqIE5vZGUgcGFyZW50IG9mIGFsbCB0aGUgbm9kZXNcbiAqL1xuY2xhc3MgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHNvdXJjZU5vZGUoZmlsZSwgY2h1bmspIHtcblxuICAgICAgICByZXR1cm4gbmV3IHNvdXJjZU1hcC5Tb3VyY2VOb2RlKHRoaXMubG9jYXRpb24uZmlyc3RfbGluZSxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGNodW5rIHx8IG51bGwpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlTGlzdChsaXN0KSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlTGlzdChsaXN0LCBub2RlLCBvKSB7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKChhLCBpLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYS5jb21waWxlKG8pKVxuXG4gICAgICAgICAgICBpZiAoaSA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICB2YXIgbyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goayA9PiBvW2tdID0gdGhpc1trXSk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZVxuIl19