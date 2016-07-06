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
            return list.map(function (m) {
                return m.transpile();
            }).join(',') || '';
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

            return JSON.stringify(this);
        }
    }]);

    return Node;
})();

exports['default'] = Node;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7eUJBQXNCLFlBQVk7Ozs7Ozs7O0lBSzVCLElBQUk7QUFFSyxhQUZULElBQUksQ0FFTSxRQUFRLEVBQUU7OEJBRnBCLElBQUk7O0FBSUYsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQU5DLElBQUk7O2VBUUksb0JBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTs7QUFFcEIsbUJBQU8sSUFBSSx1QkFBVSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUMxQixJQUFJLEVBQ0osS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBRXRCOzs7ZUFFWSx1QkFBQyxJQUFJLEVBQUU7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBRXZEOzs7ZUFFVSxxQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTs7QUFFdkIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBSzs7QUFFeEIsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUV0QixvQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFckIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLElBQUksQ0FBQztTQUVmOzs7ZUFFTyxvQkFBRzs7QUFFUCxtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRS9COzs7V0F6Q0MsSUFBSTs7O3FCQTRDSyxJQUFJIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAnO1xuXG4vKipcbiAqIE5vZGUgcGFyZW50IG9mIGFsbCB0aGUgbm9kZXNcbiAqL1xuY2xhc3MgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHNvdXJjZU5vZGUoZmlsZSwgY2h1bmspIHtcblxuICAgICAgICByZXR1cm4gbmV3IHNvdXJjZU1hcC5Tb3VyY2VOb2RlKHRoaXMubG9jYXRpb24uZmlyc3RfbGluZSxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGNodW5rIHx8IG51bGwpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlTGlzdChsaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0Lm1hcChtID0+IG0udHJhbnNwaWxlKCkpLmpvaW4oJywnKSB8fCAnJztcblxuICAgIH1cblxuICAgIGNvbXBpbGVMaXN0KGxpc3QsIG5vZGUsIG8pIHtcblxuICAgICAgICBsaXN0LmZvckVhY2goKGEsIGksIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChhLmNvbXBpbGUobykpXG5cbiAgICAgICAgICAgIGlmIChpIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZVxuIl19