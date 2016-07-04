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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9UYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7O0lBU25CLEdBQUc7Y0FBSCxHQUFHOztBQUVNLGFBRlQsR0FBRyxDQUVPLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs4QkFGaEQsR0FBRzs7QUFJRCxtQ0FKRixHQUFHLDZDQUlLLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsR0FBRzs7ZUFXYyw2QkFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFOztBQUUxQixnQkFBSSxLQUFLLEdBQUc7QUFDUixvQkFBSSxFQUFFLEVBQUU7YUFDWCxDQUFDOztBQUVGLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFJOztBQUVkLG9CQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhCLG9CQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7O0FBRWIseUJBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMseUJBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUVoQyxNQUFNOztBQUVILHlCQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFeEI7YUFFSixDQUFDLENBQUM7O0FBRUgsbUJBQU8sS0FBSyxDQUFDO1NBRWhCOzs7ZUFFUSxxQkFBRzs7QUFFUixnQkFBSSxRQUFRLENBQUM7QUFDYixnQkFBSSxLQUFLLENBQUM7QUFDVixnQkFBSSxHQUFHLEdBQUcsQUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLHFCQUNsQyxJQUFJLENBQUMsSUFBSSxvQkFBbUIsSUFBSSxDQUFDLElBQUksT0FBRyxDQUFDOztBQUU3RCxpQkFBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUM1QyxVQUFBLENBQUM7OEJBQVEsQ0FBQyxDQUFDLElBQUksV0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFbkQsaUJBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUU7dUJBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRzthQUFBLENBQUMsQ0FBQzs7QUFFdEUsb0JBQVEsU0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQzs7QUFFbEUsbUJBQVUsR0FBRyxTQUFJLEtBQUssU0FBSSxRQUFRLE9BQUk7U0FFekM7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxRQUFRLENBQUM7O0FBRWIsZ0JBQUksS0FBSyxHQUFHLEFBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUNwRCxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUVqQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDakIsR0FBRyxDQUFDLEtBQUssZ0JBQ00sSUFBSSxDQUFDLElBQUksZUFDWCxJQUFJLENBQUMsSUFBSSxRQUFJLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVWLGdCQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDcEMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7dUJBQUssUUFBSyxDQUFDLENBQUMsSUFBSSxVQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQzthQUFBLENBQUMsQ0FBQzs7QUFFbEYsZ0JBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRVo7OztXQWhGQyxHQUFHOzs7cUJBb0ZNLEdBQUciLCJmaWxlIjoiVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUYWcgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlcyBcbiAqIEBwYXJhbSB7YXJyYXk8VGFnfFRleHR8Rm9yTG9vcHxJZkNvbmRpdGlvbj59IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB9XG5cbiAgICBfb3JnYW5pemVOYW1lc3BhY2VzKGxpc3QsIGNiKSB7XG5cbiAgICAgICAgdmFyIGJ1dGVzID0ge1xuICAgICAgICAgICAgaHRtbDogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0LmZvckVhY2goYSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBjYihhKTtcblxuICAgICAgICAgICAgaWYgKGEubmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgICAgICBidXRlc1thLm5hbWVzcGFjZV0gPSBidXRlc1thLm5hbWVzcGFjZV0gfHwgW107XG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGJ1dGVzLmh0bWwucHVzaCh2YWwpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJ1dGVzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBjaGlsZHJlbjtcbiAgICAgICAgdmFyIGJ1dGVzO1xuICAgICAgICB2YXIgdGFnID0gKHRoaXMubmFtZVswXSA9PT0gdGhpcy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgICAgICAgIGBtYWtlLmVsZW1lbnQoJHt0aGlzLm5hbWV9YCA6IGBtYWtlLm5vZGUoJyR7dGhpcy5uYW1lfSdgO1xuXG4gICAgICAgIGJ1dGVzID0gdGhpcy5fb3JnYW5pemVOYW1lc3BhY2VzKHRoaXMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGEgPT4gYCcke2EubmFtZX0nOiR7YS50cmFuc3BpbGUoKX1gKS5qb2luKCcsJyk7XG5cbiAgICAgICAgYnV0ZXMgPSBPYmplY3Qua2V5cyhidXRlcykubWFwKG5zID0+ICd7JyArIGJ1dGVzW25zXS5qb2luKCcsJykgKyAnfScpO1xuXG4gICAgICAgIGNoaWxkcmVuID0gYFske3RoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy50cmFuc3BpbGUoKSkuam9pbignLCcpfV1gO1xuXG4gICAgICAgIHJldHVybiBgJHt0YWd9LCR7YnV0ZXN9LCR7Y2hpbGRyZW59KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG5cbiAgICAgICAgdmFyIGlzRWxlID0gKHRoaXMubmFtZVswXSA9PT0gdGhpcy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgICAgICAgIHRydWUgOiBmYWxzZTtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ21ha2UuJykuXG4gICAgICAgIGFkZChpc0VsZSA/XG4gICAgICAgICAgICBgZWxlbWVudCgke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgIGBub2RlKCcke3RoaXMubmFtZX0nKWApLlxuICAgICAgICBhZGQoJyx7Jyk7XG5cbiAgICAgICAgdGhpcy5fb3JnYW5pemVOYW1lc3BhY2VzKHRoaXMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIChhLCBpLCBhbGwpID0+IFtgJyR7YS5uYW1lfSc6YCwgYS5jb21waWxlKG8pKGkgPCBhbGwubGVuZ3RoIC0gMSkgPyAnLCcgOiAnJ10pO1xuXG4gICAgICAgIG5vZGUuYWRkKCd9LCcpLmFkZCgnWycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuY2hpbGRyZW4sIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJ10nKS5cbiAgICAgICAgYWRkKCcpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=