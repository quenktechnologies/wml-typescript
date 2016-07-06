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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL05vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQUFzQixZQUFZOzs7Ozs7OztJQUs1QixJQUFJO0FBRUssYUFGVCxJQUFJLENBRU0sUUFBUSxFQUFFOzhCQUZwQixJQUFJOztBQUlGLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFOQyxJQUFJOztlQVFJLG9CQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7O0FBRXBCLG1CQUFPLElBQUksdUJBQVUsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFDMUIsSUFBSSxFQUNKLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztTQUV0Qjs7O2VBRVksdUJBQUMsSUFBSSxFQUFFOztBQUVoQixtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFekQ7OztlQUVVLHFCQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOztBQUV2QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFLOztBQUV4QixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXRCLG9CQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUVyQixDQUFDLENBQUM7O0FBRUgsbUJBQU8sSUFBSSxDQUFDO1NBRWY7OztlQUVPLG9CQUFHOzs7QUFFUCxnQkFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixrQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFLLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztBQUMvQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNuQixtQkFBTyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ2xCLGFBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUU1Qjs7O1dBL0NDLElBQUk7OztxQkFrREssSUFBSSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvdXJjZU1hcCBmcm9tICdzb3VyY2UtbWFwJztcblxuLyoqXG4gKiBOb2RlIHBhcmVudCBvZiBhbGwgdGhlIG5vZGVzXG4gKi9cbmNsYXNzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBzb3VyY2VOb2RlKGZpbGUsIGNodW5rKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBzb3VyY2VNYXAuU291cmNlTm9kZSh0aGlzLmxvY2F0aW9uLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBjaHVuayB8fCBudWxsKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZUxpc3QobGlzdCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZUxpc3QobGlzdCwgbm9kZSwgbykge1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoYSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGEuY29tcGlsZShvKSlcblxuICAgICAgICAgICAgaWYgKGkgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIG8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGsgPT4gb1trXSA9IHRoaXNba10pO1xuICAgICAgICB2YXIgbCA9IG8ubG9jYXRpb247XG4gICAgICAgIGRlbGV0ZSBvLmxvY2F0aW9uO1xuICAgICAgICBvLmxvY2F0aW9uID0gbDtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8pO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlXG4iXX0=