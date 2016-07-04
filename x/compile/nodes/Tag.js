'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * Tag 
 * @param {string} name 
 * @param {array<Attribute>} attributes 
 * @param {array<Tag|Text|ForLoop|IfCondition>} children 
 * @param {Location} location 
 */

var Tag = (function (_Node) {
    _inherits(Tag, _Node);

    function Tag(name, attributes, children, location) {
        _classCallCheck(this, Tag);

        _get(Object.getPrototypeOf(Tag.prototype), 'constructor', this).call(this, location);
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }

    _createClass(Tag, [{
        key: '_organizeNamespaces',
        value: function _organizeNamespaces(list, cb) {

            var butes = {
                html: []
            };

            list.forEach(function (a) {

                var val = cb(a);

                if (a.namespace) {

                    butes[a.namespace] = butes[a.namespace] || [];
                    butes[a.namespace].push(val);
                } else {

                    butes.html.push(val);
                }
            });

            return butes;
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            var children;
            var butes;
            var tag = this.name[0] === this.name[0].toUpperCase() ? 'make.element(' + this.name : 'make.node(\'' + this.name + '\'';

            butes = this._organizeNamespaces(this.attributes, function (a) {
                return '\'' + a.name + '\':' + a.transpile();
            }).join(',');

            butes = Object.keys(butes).map(function (ns) {
                return '{' + butes[ns].join(',') + '}';
            });

            children = '[' + this.children.map(function (c) {
                return c.transpile();
            }).join(',') + ']';

            return tag + ',' + butes + ',' + children + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var children;

            var isEle = this.name[0] === this.name[0].toUpperCase() ? true : false;

            var node = this.sourceNode(o.fileName, '');

            node.add('make.').add(isEle ? 'element(' + this.name : 'node(\'' + this.name + '\')').add(',{');

            this._organizeNamespaces(this.attributes, function (a, i, all) {
                return ['\'' + a.name + '\':', a.compile(o)(i < all.length - 1) ? ',' : ''];
            });

            node.add('},').add('[');

            return this.compileList(this.children, node, o).add(']').add(')');
        }
    }]);

    return Tag;
})(_Node3['default']);

exports['default'] = Tag;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1RhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7Ozs7SUFTbkIsR0FBRztjQUFILEdBQUc7O0FBRU0sYUFGVCxHQUFHLENBRU8sSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOzhCQUZoRCxHQUFHOztBQUlELG1DQUpGLEdBQUcsNkNBSUssUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFUQyxHQUFHOztlQVdjLDZCQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7O0FBRTFCLGdCQUFJLEtBQUssR0FBRztBQUNSLG9CQUFJLEVBQUUsRUFBRTthQUNYLENBQUM7O0FBRUYsZ0JBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUk7O0FBRWQsb0JBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEIsb0JBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTs7QUFFYix5QkFBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5Qyx5QkFBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBRWhDLE1BQU07O0FBRUgseUJBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUV4QjthQUVKLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxLQUFLLENBQUM7U0FFaEI7OztlQUVRLHFCQUFHOztBQUVSLGdCQUFJLFFBQVEsQ0FBQztBQUNiLGdCQUFJLEtBQUssQ0FBQztBQUNWLGdCQUFJLEdBQUcsR0FBRyxBQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUscUJBQ2xDLElBQUksQ0FBQyxJQUFJLG9CQUFtQixJQUFJLENBQUMsSUFBSSxPQUFHLENBQUM7O0FBRTdELGlCQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzVDLFVBQUEsQ0FBQzs4QkFBUSxDQUFDLENBQUMsSUFBSSxXQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVuRCxpQkFBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRTt1QkFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHO2FBQUEsQ0FBQyxDQUFDOztBQUV0RSxvQkFBUSxTQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDOztBQUVsRSxtQkFBVSxHQUFHLFNBQUksS0FBSyxTQUFJLFFBQVEsT0FBSTtTQUV6Qzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLFFBQVEsQ0FBQzs7QUFFYixnQkFBSSxLQUFLLEdBQUcsQUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQ3BELElBQUksR0FBRyxLQUFLLENBQUM7O0FBRWpCLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUNqQixHQUFHLENBQUMsS0FBSyxnQkFDTSxJQUFJLENBQUMsSUFBSSxlQUNYLElBQUksQ0FBQyxJQUFJLFFBQUksQ0FBQyxDQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRVYsZ0JBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUNwQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRzt1QkFBSyxRQUFLLENBQUMsQ0FBQyxJQUFJLFVBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO2FBQUEsQ0FBQyxDQUFDOztBQUVsRixnQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXhCLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDUixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFWjs7O1dBaEZDLEdBQUc7OztxQkFvRk0sR0FBRyIsImZpbGUiOiJUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRhZyBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzIFxuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVGFnIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIH1cblxuICAgIF9vcmdhbml6ZU5hbWVzcGFjZXMobGlzdCwgY2IpIHtcblxuICAgICAgICB2YXIgYnV0ZXMgPSB7XG4gICAgICAgICAgICBodG1sOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaChhID0+IHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IGNiKGEpO1xuXG4gICAgICAgICAgICBpZiAoYS5uYW1lc3BhY2UpIHtcblxuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXSA9IGJ1dGVzW2EubmFtZXNwYWNlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBidXRlc1thLm5hbWVzcGFjZV0ucHVzaCh2YWwpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXMuaHRtbC5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYnV0ZXM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuICAgICAgICB2YXIgYnV0ZXM7XG4gICAgICAgIHZhciB0YWcgPSAodGhpcy5uYW1lWzBdID09PSB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSkgP1xuICAgICAgICAgICAgYG1ha2UuZWxlbWVudCgke3RoaXMubmFtZX1gIDogYG1ha2Uubm9kZSgnJHt0aGlzLm5hbWV9J2A7XG5cbiAgICAgICAgYnV0ZXMgPSB0aGlzLl9vcmdhbml6ZU5hbWVzcGFjZXModGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgYSA9PiBgJyR7YS5uYW1lfSc6JHthLnRyYW5zcGlsZSgpfWApLmpvaW4oJywnKTtcblxuICAgICAgICBidXRlcyA9IE9iamVjdC5rZXlzKGJ1dGVzKS5tYXAobnMgPT4gJ3snICsgYnV0ZXNbbnNdLmpvaW4oJywnKSArICd9Jyk7XG5cbiAgICAgICAgY2hpbGRyZW4gPSBgWyR7dGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XWA7XG5cbiAgICAgICAgcmV0dXJuIGAke3RhZ30sJHtidXRlc30sJHtjaGlsZHJlbn0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBjaGlsZHJlbjtcblxuICAgICAgICB2YXIgaXNFbGUgPSAodGhpcy5uYW1lWzBdID09PSB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSkgP1xuICAgICAgICAgICAgdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBub2RlLmFkZCgnbWFrZS4nKS5cbiAgICAgICAgYWRkKGlzRWxlID9cbiAgICAgICAgICAgIGBlbGVtZW50KCR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgYG5vZGUoJyR7dGhpcy5uYW1lfScpYCkuXG4gICAgICAgIGFkZCgnLHsnKTtcblxuICAgICAgICB0aGlzLl9vcmdhbml6ZU5hbWVzcGFjZXModGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgKGEsIGksIGFsbCkgPT4gW2AnJHthLm5hbWV9JzpgLCBhLmNvbXBpbGUobykoaSA8IGFsbC5sZW5ndGggLSAxKSA/ICcsJyA6ICcnXSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ30sJykuYWRkKCdbJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnXScpLlxuICAgICAgICBhZGQoJyknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcbiJdfQ==