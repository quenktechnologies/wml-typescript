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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7OztJQVNuQixHQUFHO2NBQUgsR0FBRzs7QUFFTSxhQUZULEdBQUcsQ0FFTyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7OEJBRmhELEdBQUc7O0FBSUQsbUNBSkYsR0FBRyw2Q0FJSyxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVRDLEdBQUc7O2VBV2MsNkJBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTs7QUFFMUIsZ0JBQUksS0FBSyxHQUFHO0FBQ1Isb0JBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQzs7QUFFRixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsRUFBSTs7QUFFZCxvQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoQixvQkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFOztBQUViLHlCQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlDLHlCQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFaEMsTUFBTTs7QUFFSCx5QkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBRXhCO2FBRUosQ0FBQyxDQUFDOztBQUVILG1CQUFPLEtBQUssQ0FBQztTQUVoQjs7O2VBRVEscUJBQUc7O0FBRVIsZ0JBQUksUUFBUSxDQUFDO0FBQ2IsZ0JBQUksS0FBSyxDQUFDO0FBQ1YsZ0JBQUksR0FBRyxHQUFHLEFBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxxQkFDbEMsSUFBSSxDQUFDLElBQUksb0JBQW1CLElBQUksQ0FBQyxJQUFJLE9BQUcsQ0FBQzs7QUFFN0QsaUJBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDNUMsVUFBQSxDQUFDOzhCQUFRLENBQUMsQ0FBQyxJQUFJLFdBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5ELGlCQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFO3VCQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7YUFBQSxDQUFDLENBQUM7O0FBRXRFLG9CQUFRLFNBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7O0FBRWxFLG1CQUFVLEdBQUcsU0FBSSxLQUFLLFNBQUksUUFBUSxPQUFJO1NBRXpDOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksUUFBUSxDQUFDOztBQUViLGdCQUFJLEtBQUssR0FBRyxBQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FDcEQsSUFBSSxHQUFHLEtBQUssQ0FBQzs7QUFFakIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFM0MsZ0JBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ2pCLEdBQUcsQ0FBQyxLQUFLLGdCQUNNLElBQUksQ0FBQyxJQUFJLGVBQ1gsSUFBSSxDQUFDLElBQUksUUFBSSxDQUFDLENBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFVixnQkFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3BDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO3VCQUFLLFFBQUssQ0FBQyxDQUFDLElBQUksVUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFBQSxDQUFDLENBQUM7O0FBRWxGLGdCQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFeEIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNSLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUVaOzs7V0FoRkMsR0FBRzs7O3FCQW9GTSxHQUFHIiwiZmlsZSI6IlRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGFnIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5PEF0dHJpYnV0ZT59IGF0dHJpYnV0ZXMgXG4gKiBAcGFyYW0ge2FycmF5PFRhZ3xUZXh0fEZvckxvb3B8SWZDb25kaXRpb24+fSBjaGlsZHJlbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgfVxuXG4gICAgX29yZ2FuaXplTmFtZXNwYWNlcyhsaXN0LCBjYikge1xuXG4gICAgICAgIHZhciBidXRlcyA9IHtcbiAgICAgICAgICAgIGh0bWw6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gY2IoYSk7XG5cbiAgICAgICAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdID0gYnV0ZXNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXRlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG4gICAgICAgIHZhciBidXRlcztcbiAgICAgICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICBgbWFrZS5lbGVtZW50KCR7dGhpcy5uYW1lfWAgOiBgbWFrZS5ub2RlKCcke3RoaXMubmFtZX0nYDtcblxuICAgICAgICBidXRlcyA9IHRoaXMuX29yZ2FuaXplTmFtZXNwYWNlcyh0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhID0+IGAnJHthLm5hbWV9Jzoke2EudHJhbnNwaWxlKCl9YCkuam9pbignLCcpO1xuXG4gICAgICAgIGJ1dGVzID0gT2JqZWN0LmtleXMoYnV0ZXMpLm1hcChucyA9PiAneycgKyBidXRlc1tuc10uam9pbignLCcpICsgJ30nKTtcblxuICAgICAgICBjaGlsZHJlbiA9IGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKCkpLmpvaW4oJywnKX1dYDtcblxuICAgICAgICByZXR1cm4gYCR7dGFnfSwke2J1dGVzfSwke2NoaWxkcmVufSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuXG4gICAgICAgIHZhciBpc0VsZSA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKCdtYWtlLicpLlxuICAgICAgICBhZGQoaXNFbGUgP1xuICAgICAgICAgICAgYGVsZW1lbnQoJHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICBgbm9kZSgnJHt0aGlzLm5hbWV9JylgKS5cbiAgICAgICAgYWRkKCcseycpO1xuXG4gICAgICAgIHRoaXMuX29yZ2FuaXplTmFtZXNwYWNlcyh0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAoYSwgaSwgYWxsKSA9PiBbYCcke2EubmFtZX0nOmAsIGEuY29tcGlsZShvKShpIDwgYWxsLmxlbmd0aCAtIDEpID8gJywnIDogJyddKTtcblxuICAgICAgICBub2RlLmFkZCgnfSwnKS5hZGQoJ1snKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCddJykuXG4gICAgICAgIGFkZCgnKScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIl19