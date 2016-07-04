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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9Ob2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFBc0IsWUFBWTs7Ozs7Ozs7SUFLNUIsSUFBSTtBQUVLLGFBRlQsSUFBSSxDQUVNLFFBQVEsRUFBRTs4QkFGcEIsSUFBSTs7QUFJRixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBTkMsSUFBSTs7ZUFRSSxvQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFOztBQUVwQixtQkFBTyxJQUFJLHVCQUFVLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQzFCLElBQUksRUFDSixLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7U0FFdEI7OztlQUVZLHVCQUFDLElBQUksRUFBRTs7QUFFaEIsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRXpEOzs7ZUFFVSxxQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTs7QUFFdkIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBSzs7QUFFeEIsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUV0QixvQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFckIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLElBQUksQ0FBQztTQUVmOzs7ZUFFTyxvQkFBRzs7O0FBRVAsZ0JBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBSyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7QUFDL0MsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUU1Qjs7O1dBNUNDLElBQUk7OztxQkErQ0ssSUFBSSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvdXJjZU1hcCBmcm9tICdzb3VyY2UtbWFwJztcblxuLyoqXG4gKiBOb2RlIHBhcmVudCBvZiBhbGwgdGhlIG5vZGVzXG4gKi9cbmNsYXNzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBzb3VyY2VOb2RlKGZpbGUsIGNodW5rKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBzb3VyY2VNYXAuU291cmNlTm9kZSh0aGlzLmxvY2F0aW9uLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBjaHVuayB8fCBudWxsKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZUxpc3QobGlzdCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZUxpc3QobGlzdCwgbm9kZSwgbykge1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoYSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGEuY29tcGlsZShvKSlcblxuICAgICAgICAgICAgaWYgKGkgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIG8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGsgPT4gb1trXSA9IHRoaXNba10pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobyk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVcbiJdfQ==