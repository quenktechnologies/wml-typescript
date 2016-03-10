'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _TextNode = require('./TextNode');

var _TextNode2 = _interopRequireDefault(_TextNode);

/**
 * CompositeNode represents a node that can have children.
 * @param {string|function} cons 
 * @param {object} attrs 
 * @param {array} children 
 * @param {WMLTree} tree 
 * @implements {Node}
 */

var CompositeNode = (function () {
    function CompositeNode(cons, attrs, children, tree) {
        _classCallCheck(this, CompositeNode);

        this._cons = cons;
        this._attrs = attrs;
        this._children = children;
        this._tree = tree;
    }

    _createClass(CompositeNode, [{
        key: 'toDOMNode',
        value: function toDOMNode() {
            var _this = this;

            var children;
            var el;

            children = this._children.map(function (c) {
                return Array.isArray(c) ? new CompositeNode(c[0], c[1], c[2], _this._tree) : new _TextNode2['default'](c);
            });

            if (typeof this._cons === 'string') {

                el = document.createElement(this._cons);

                Object.keys(this._attrs).forEach(function (k) {
                    return typeof _this._attrs[k] === 'function' ? el[k] = _this._attrs[k] : el.setAttribute(k, _this._attrs[k]);
                });

                children.forEach(function (c) {
                    return el.appendChild(c.toDOMNode());
                });

                return el;
            } else if (typeof this._cons === 'function') {

                el = this._cons.create(this._attrs);
                if (this._attrs['data-wml-id']) this._tree.register(this._attrs['data-wml-id'], el);

                return el.onDOM(this._attrs, children);
            }

            throw new Error('Widgets must be string or function not \'' + typeof this._cons + '\'');
        }
    }]);

    return CompositeNode;
})();

exports['default'] = CompositeNode;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL0NvbXBvc2l0ZU5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3dCQUFxQixZQUFZOzs7Ozs7Ozs7Ozs7O0lBVTNCLGFBQWE7QUFFSixhQUZULGFBQWEsQ0FFSCxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7OEJBRnZDLGFBQWE7O0FBR1gsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIsWUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7QUFDMUIsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDckI7O2lCQVBDLGFBQWE7O2VBU04scUJBQUc7OztBQUVSLGdCQUFJLFFBQVEsQ0FBQztBQUNiLGdCQUFJLEVBQUUsQ0FBQzs7QUFFUCxvQkFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxBQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ2hELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQUssS0FBSyxDQUFDLEdBQy9DLDBCQUFhLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQzs7QUFFckIsZ0JBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTs7QUFFaEMsa0JBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFeEMsc0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUN4QixPQUFPLENBQUMsVUFBQSxDQUFDOzJCQUFJLEFBQUMsT0FBTyxNQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEdBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFBQSxDQUFDLENBQUM7O0FBRWpFLHdCQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzsyQkFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFBQSxDQUFDLENBQUM7O0FBRXJELHVCQUFPLEVBQUUsQ0FBQzthQUViLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFOztBQUV6QyxrQkFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUV4RCx1QkFBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFFMUM7O0FBRUQsa0JBQU0sSUFBSSxLQUFLLCtDQUE0QyxPQUFPLElBQUksQ0FBQyxLQUFLLFFBQUksQ0FBQztTQUVwRjs7O1dBMUNDLGFBQWE7OztxQkE4Q0osYUFBYSIsImZpbGUiOiJDb21wb3NpdGVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHROb2RlIGZyb20gJy4vVGV4dE5vZGUnO1xuXG4vKipcbiAqIENvbXBvc2l0ZU5vZGUgcmVwcmVzZW50cyBhIG5vZGUgdGhhdCBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBjb25zIFxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJzIFxuICogQHBhcmFtIHthcnJheX0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge1dNTFRyZWV9IHRyZWUgXG4gKiBAaW1wbGVtZW50cyB7Tm9kZX1cbiAqL1xuY2xhc3MgQ29tcG9zaXRlTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25zLCBhdHRycywgY2hpbGRyZW4sIHRyZWUpIHtcbiAgICAgICAgdGhpcy5fY29ucyA9IGNvbnM7XG4gICAgICAgIHRoaXMuX2F0dHJzID0gYXR0cnM7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMuX3RyZWUgPSB0cmVlO1xuICAgIH1cblxuICAgIHRvRE9NTm9kZSgpIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG4gICAgICAgIHZhciBlbDtcblxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLm1hcChjID0+IChBcnJheS5pc0FycmF5KGMpKSA/XG4gICAgICAgICAgICBuZXcgQ29tcG9zaXRlTm9kZShjWzBdLCBjWzFdLCBjWzJdLCB0aGlzLl90cmVlKSA6XG4gICAgICAgICAgICBuZXcgVGV4dE5vZGUoYykpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29ucyA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuX2NvbnMpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9hdHRycykuXG4gICAgICAgICAgICBmb3JFYWNoKGsgPT4gKHR5cGVvZiB0aGlzLl9hdHRyc1trXSA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgIGVsW2tdID0gdGhpcy5fYXR0cnNba10gOiBlbC5zZXRBdHRyaWJ1dGUoaywgdGhpcy5fYXR0cnNba10pKTtcblxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IGVsLmFwcGVuZENoaWxkKGMudG9ET01Ob2RlKCkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbnMgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgZWwgPSB0aGlzLl9jb25zLmNyZWF0ZSh0aGlzLl9hdHRycyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXR0cnNbJ2RhdGEtd21sLWlkJ10pXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlZS5yZWdpc3Rlcih0aGlzLl9hdHRyc1snZGF0YS13bWwtaWQnXSwgZWwpO1xuXG4gICAgICAgICAgICByZXR1cm4gZWwub25ET00odGhpcy5fYXR0cnMsIGNoaWxkcmVuKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXaWRnZXRzIG11c3QgYmUgc3RyaW5nIG9yIGZ1bmN0aW9uIG5vdCAnJHt0eXBlb2YgdGhpcy5fY29uc30nYCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zaXRlTm9kZVxuIl19