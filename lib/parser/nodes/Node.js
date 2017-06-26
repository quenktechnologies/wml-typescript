'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sourceMap = require('source-map');

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Node parent of all the nodes
 */
var Node = function () {
    function Node(location) {
        _classCallCheck(this, Node);

        this.location = location;
    }

    _createClass(Node, [{
        key: 'sourceNode',
        value: function sourceNode(file, chunk) {

            return new _sourceMap2.default.SourceNode(this.location.first_line, this.location.first_column, file, chunk || null);
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
}();

exports.default = Node;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTm9kZS5qcyJdLCJuYW1lcyI6WyJOb2RlIiwibG9jYXRpb24iLCJmaWxlIiwiY2h1bmsiLCJTb3VyY2VOb2RlIiwiZmlyc3RfbGluZSIsImZpcnN0X2NvbHVtbiIsImxpc3QiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsIm5vZGUiLCJvIiwiZm9yRWFjaCIsImEiLCJpIiwiYWxsIiwiYWRkIiwiY29tcGlsZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJO0FBRUYsa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFFbEIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFFSDs7OzttQ0FFVUMsSSxFQUFNQyxLLEVBQU87O0FBRXBCLG1CQUFPLElBQUksb0JBQVVDLFVBQWQsQ0FBeUIsS0FBS0gsUUFBTCxDQUFjSSxVQUF2QyxFQUNILEtBQUtKLFFBQUwsQ0FBY0ssWUFEWCxFQUVISixJQUZHLEVBR0hDLFNBQVMsSUFITixDQUFQO0FBS0g7OztzQ0FFYUksSSxFQUFNOztBQUVoQixtQkFBT0EsS0FBS0MsR0FBTCxDQUFTO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsRUFBTDtBQUFBLGFBQVQsRUFBNkJDLElBQTdCLENBQWtDLEdBQWxDLEtBQTBDLEVBQWpEO0FBRUg7OztvQ0FFV0osSSxFQUFNSyxJLEVBQU1DLEMsRUFBRzs7QUFFdkJOLGlCQUFLTyxPQUFMLENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEdBQVAsRUFBZTs7QUFFeEJMLHFCQUFLTSxHQUFMLENBQVNILEVBQUVJLE9BQUYsQ0FBVU4sQ0FBVixDQUFUOztBQUVBLG9CQUFJRyxJQUFJQyxJQUFJRyxNQUFKLEdBQWEsQ0FBckIsRUFDSVIsS0FBS00sR0FBTCxDQUFTLEdBQVQ7QUFFUCxhQVBEOztBQVNBLG1CQUFPTixJQUFQO0FBRUg7OzttQ0FFVTs7QUFFUCxtQkFBT1MsS0FBS0MsU0FBTCxDQUFlLElBQWYsQ0FBUDtBQUVIOzs7Ozs7a0JBR1V0QixJIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAnO1xuXG4vKipcbiAqIE5vZGUgcGFyZW50IG9mIGFsbCB0aGUgbm9kZXNcbiAqL1xuY2xhc3MgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHNvdXJjZU5vZGUoZmlsZSwgY2h1bmspIHtcblxuICAgICAgICByZXR1cm4gbmV3IHNvdXJjZU1hcC5Tb3VyY2VOb2RlKHRoaXMubG9jYXRpb24uZmlyc3RfbGluZSxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGNodW5rIHx8IG51bGwpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlTGlzdChsaXN0KSB7XG5cbiAgICAgICAgcmV0dXJuIGxpc3QubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpIHx8ICcnO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZUxpc3QobGlzdCwgbm9kZSwgbykge1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoYSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGEuY29tcGlsZShvKSlcblxuICAgICAgICAgICAgaWYgKGkgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlXG4iXX0=