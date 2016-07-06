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
        this.type = 'tag';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9UYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7O0lBU25CLEdBQUc7Y0FBSCxHQUFHOztBQUVNLGFBRlQsR0FBRyxDQUVPLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs4QkFGaEQsR0FBRzs7QUFJRCxtQ0FKRixHQUFHLDZDQUlLLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVkMsR0FBRzs7ZUFZYyw2QkFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFOztBQUUxQixnQkFBSSxLQUFLLEdBQUc7QUFDUixvQkFBSSxFQUFFLEVBQUU7YUFDWCxDQUFDOztBQUVGLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFJOztBQUVkLG9CQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhCLG9CQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7O0FBRWIseUJBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMseUJBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUVoQyxNQUFNOztBQUVILHlCQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFeEI7YUFFSixDQUFDLENBQUM7O0FBRUgsbUJBQU8sS0FBSyxDQUFDO1NBRWhCOzs7ZUFFUSxxQkFBRzs7QUFFUixnQkFBSSxRQUFRLENBQUM7QUFDYixnQkFBSSxLQUFLLENBQUM7QUFDVixnQkFBSSxHQUFHLEdBQUcsQUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLHFCQUNsQyxJQUFJLENBQUMsSUFBSSxvQkFBbUIsSUFBSSxDQUFDLElBQUksT0FBRyxDQUFDOztBQUU3RCxpQkFBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUM1QyxVQUFBLENBQUM7OEJBQVEsQ0FBQyxDQUFDLElBQUksV0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFbkQsaUJBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUU7dUJBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRzthQUFBLENBQUMsQ0FBQzs7QUFFdEUsb0JBQVEsU0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQzs7QUFFbEUsbUJBQVUsR0FBRyxTQUFJLEtBQUssU0FBSSxRQUFRLE9BQUk7U0FFekM7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxRQUFRLENBQUM7O0FBRWIsZ0JBQUksS0FBSyxHQUFHLEFBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUNwRCxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUVqQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDakIsR0FBRyxDQUFDLEtBQUssZ0JBQ00sSUFBSSxDQUFDLElBQUksZUFDWCxJQUFJLENBQUMsSUFBSSxRQUFJLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVWLGdCQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDcEMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7dUJBQUssUUFBSyxDQUFDLENBQUMsSUFBSSxVQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQzthQUFBLENBQUMsQ0FBQzs7QUFFbEYsZ0JBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRVo7OztXQWpGQyxHQUFHOzs7cUJBcUZNLEdBQUciLCJmaWxlIjoiVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUYWcgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlcyBcbiAqIEBwYXJhbSB7YXJyYXk8VGFnfFRleHR8Rm9yTG9vcHxJZkNvbmRpdGlvbj59IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGFnJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgfVxuXG4gICAgX29yZ2FuaXplTmFtZXNwYWNlcyhsaXN0LCBjYikge1xuXG4gICAgICAgIHZhciBidXRlcyA9IHtcbiAgICAgICAgICAgIGh0bWw6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gY2IoYSk7XG5cbiAgICAgICAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdID0gYnV0ZXNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXRlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG4gICAgICAgIHZhciBidXRlcztcbiAgICAgICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICBgbWFrZS5lbGVtZW50KCR7dGhpcy5uYW1lfWAgOiBgbWFrZS5ub2RlKCcke3RoaXMubmFtZX0nYDtcblxuICAgICAgICBidXRlcyA9IHRoaXMuX29yZ2FuaXplTmFtZXNwYWNlcyh0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhID0+IGAnJHthLm5hbWV9Jzoke2EudHJhbnNwaWxlKCl9YCkuam9pbignLCcpO1xuXG4gICAgICAgIGJ1dGVzID0gT2JqZWN0LmtleXMoYnV0ZXMpLm1hcChucyA9PiAneycgKyBidXRlc1tuc10uam9pbignLCcpICsgJ30nKTtcblxuICAgICAgICBjaGlsZHJlbiA9IGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKCkpLmpvaW4oJywnKX1dYDtcblxuICAgICAgICByZXR1cm4gYCR7dGFnfSwke2J1dGVzfSwke2NoaWxkcmVufSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuXG4gICAgICAgIHZhciBpc0VsZSA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKCdtYWtlLicpLlxuICAgICAgICBhZGQoaXNFbGUgP1xuICAgICAgICAgICAgYGVsZW1lbnQoJHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICBgbm9kZSgnJHt0aGlzLm5hbWV9JylgKS5cbiAgICAgICAgYWRkKCcseycpO1xuXG4gICAgICAgIHRoaXMuX29yZ2FuaXplTmFtZXNwYWNlcyh0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAoYSwgaSwgYWxsKSA9PiBbYCcke2EubmFtZX0nOmAsIGEuY29tcGlsZShvKShpIDwgYWxsLmxlbmd0aCAtIDEpID8gJywnIDogJyddKTtcblxuICAgICAgICBub2RlLmFkZCgnfSwnKS5hZGQoJ1snKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCddJykuXG4gICAgICAgIGFkZCgnKScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIl19