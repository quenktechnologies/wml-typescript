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

            var butes = {};

            list.forEach(function (a) {

                var val = cb(a);

                if (a.namespace) {

                    butes[a.namespace] = butes[a.namespace] || [];
                    butes[a.namespace].push(val);
                } else {

                    butes.html = butes.html || [];
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
            });

            butes = '{' + Object.keys(butes).map(function (ns) {
                return ns + ':{' + butes[ns].join(',') + '}';
            }) + '}';

            children = '[' + this.children.map(function (c) {
                return c.transpile();
            }).join(',') + ']';

            return tag + ',' + butes + ',' + children + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var children;
            var node = this.sourceNode(o.fileName, '');
            var butes;

            var isEle = this.name[0] === this.name[0].toUpperCase() ? true : false;

            node.add('make.').add(isEle ? 'element(' + this.name : 'node(\'' + this.name + '\')').add(',{');

            butes = this._organizeNamespaces(this.attributes, function (a, i, all) {
                return ['\'' + a.name + '\':', a.compile(o)(i < all.length - 1) ? ',' : ''];
            });

            Object.keys(butes).forEach(function (key, i, all) {

                node.add([key, ': {']).butes[key].forEach(function (attr) {
                    return node.add(attr);
                });
                node.add('}');

                if (i < all.length - 1) node.add(',');
            });

            node.add('},').add('[');

            return this.compileList(this.children, node, o).add(']').add(')');
        }
    }]);

    return Tag;
})(_Node3['default']);

exports['default'] = Tag;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7OztJQVNuQixHQUFHO2NBQUgsR0FBRzs7QUFFTSxhQUZULEdBQUcsQ0FFTyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7OEJBRmhELEdBQUc7O0FBSUQsbUNBSkYsR0FBRyw2Q0FJSyxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVZDLEdBQUc7O2VBWWMsNkJBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTs7QUFFMUIsZ0JBQUksS0FBSyxHQUFHLEVBQ1gsQ0FBQzs7QUFFRixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsRUFBSTs7QUFFZCxvQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoQixvQkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFOztBQUViLHlCQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlDLHlCQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFaEMsTUFBTTs7QUFFTCx5QkFBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUM1Qix5QkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBRXhCO2FBRUosQ0FBQyxDQUFDOztBQUVI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QUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRVo7OztXQTlGQyxHQUFHOzs7cUJBa0dNLEdBQUciLCJmaWxlIjoiVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUYWcgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlcyBcbiAqIEBwYXJhbSB7YXJyYXk8VGFnfFRleHR8Rm9yTG9vcHxJZkNvbmRpdGlvbj59IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGFnJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgfVxuXG4gICAgX29yZ2FuaXplTmFtZXNwYWNlcyhsaXN0LCBjYikge1xuXG4gICAgICAgIHZhciBidXRlcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0LmZvckVhY2goYSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBjYihhKTtcblxuICAgICAgICAgICAgaWYgKGEubmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgICAgICBidXRlc1thLm5hbWVzcGFjZV0gPSBidXRlc1thLm5hbWVzcGFjZV0gfHwgW107XG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBidXRlcy5odG1sID0gYnV0ZXMuaHRtbCB8fCBbXTtcbiAgICAgICAgICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXRlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG4gICAgICAgIHZhciBidXRlcztcbiAgICAgICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICBgbWFrZS5lbGVtZW50KCR7dGhpcy5uYW1lfWAgOiBgbWFrZS5ub2RlKCcke3RoaXMubmFtZX0nYDtcblxuICAgICAgICBidXRlcyA9IHRoaXMuX29yZ2FuaXplTmFtZXNwYWNlcyh0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhID0+IGAnJHthLm5hbWV9Jzoke2EudHJhbnNwaWxlKCl9YCk7XG5cbiAgICAgICAgYnV0ZXMgPSAneycgKyAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhidXRlcykubWFwKG5zID0+IG5zICsgJzp7JyArIGJ1dGVzW25zXS5qb2luKCcsJykgKyAnfScpKSArICd9JztcblxuICAgICAgICBjaGlsZHJlbiA9IGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKCkpLmpvaW4oJywnKX1dYDtcblxuICAgICAgICByZXR1cm4gYCR7dGFnfSwke2J1dGVzfSwke2NoaWxkcmVufSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG4gICAgICAgIHZhciBidXRlcztcblxuICAgICAgICB2YXIgaXNFbGUgPSAodGhpcy5uYW1lWzBdID09PSB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSkgP1xuICAgICAgICAgICAgdHJ1ZSA6IGZhbHNlO1xuXG5cbiAgICAgICAgbm9kZS5hZGQoJ21ha2UuJykuXG4gICAgICAgIGFkZChpc0VsZSA/XG4gICAgICAgICAgICBgZWxlbWVudCgke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgIGBub2RlKCcke3RoaXMubmFtZX0nKWApLlxuICAgICAgICBhZGQoJyx7Jyk7XG5cbiAgICAgICAgYnV0ZXMgPSB0aGlzLl9vcmdhbml6ZU5hbWVzcGFjZXModGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgKGEsIGksIGFsbCkgPT4gW2AnJHthLm5hbWV9JzpgLCBhLmNvbXBpbGUobykoaSA8IGFsbC5sZW5ndGggLSAxKSA/ICcsJyA6ICcnXSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYnV0ZXMpLmZvckVhY2goKGtleSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKFtrZXksICc6IHsnXSkuXG4gICAgICAgICAgICBidXRlc1trZXldLmZvckVhY2goYXR0ciA9PiBub2RlLmFkZChhdHRyKSk7XG4gICAgICAgICAgICBub2RlLmFkZCgnfScpO1xuXG4gICAgICAgICAgICBpZiAoaSA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ30sJykuYWRkKCdbJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnXScpLlxuICAgICAgICBhZGQoJyknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcbiJdfQ==