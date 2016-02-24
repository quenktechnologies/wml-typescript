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
        this.tree = tree;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3NpdGVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBcUIsWUFBWTs7Ozs7Ozs7Ozs7OztJQVUzQixhQUFhO0FBRUosYUFGVCxhQUFhLENBRUgsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFOzhCQUZ2QyxhQUFhOztBQUdYLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzFCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztpQkFQQyxhQUFhOztlQVNOLHFCQUFHOzs7QUFFUixnQkFBSSxRQUFRLENBQUM7QUFDYixnQkFBSSxFQUFFLENBQUM7O0FBRVAsb0JBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUNoRCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFLLEtBQUssQ0FBQyxHQUMvQywwQkFBYSxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7O0FBRXJCLGdCQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7O0FBRWhDLGtCQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXhDLHNCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEIsT0FBTyxDQUFDLFVBQUEsQ0FBQzsyQkFBSSxBQUFDLE9BQU8sTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxHQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxDQUFDOztBQUVqRSx3QkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7MkJBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQUEsQ0FBQyxDQUFDOztBQUVyRCx1QkFBTyxFQUFFLENBQUM7YUFFYixNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTs7QUFFekMsa0JBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXBDLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRXhELHVCQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQzthQUUxQzs7QUFFRCxrQkFBTSxJQUFJLEtBQUssK0NBQTRDLE9BQU8sSUFBSSxDQUFDLEtBQUssUUFBSSxDQUFDO1NBRXBGOzs7V0EzQ0MsYUFBYTs7O3FCQStDSixhQUFhIiwiZmlsZSI6IkNvbXBvc2l0ZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9UZXh0Tm9kZSc7XG5cbi8qKlxuICogQ29tcG9zaXRlTm9kZSByZXByZXNlbnRzIGEgbm9kZSB0aGF0IGNhbiBoYXZlIGNoaWxkcmVuLlxuICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IGNvbnMgXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cnMgXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZHJlbiBcbiAqIEBwYXJhbSB7V01MVHJlZX0gdHJlZSBcbiAqIEBpbXBsZW1lbnRzIHtOb2RlfVxuICovXG5jbGFzcyBDb21wb3NpdGVOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnMsIGF0dHJzLCBjaGlsZHJlbiwgdHJlZSkge1xuICAgICAgICB0aGlzLl9jb25zID0gY29ucztcbiAgICAgICAgdGhpcy5fYXR0cnMgPSBhdHRycztcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy50cmVlID0gdHJlZTtcbiAgICB9XG5cbiAgICB0b0RPTU5vZGUoKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuICAgICAgICB2YXIgZWw7XG5cbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZHJlbi5tYXAoYyA9PiAoQXJyYXkuaXNBcnJheShjKSkgP1xuICAgICAgICAgICAgbmV3IENvbXBvc2l0ZU5vZGUoY1swXSwgY1sxXSwgY1syXSwgdGhpcy5fdHJlZSkgOlxuICAgICAgICAgICAgbmV3IFRleHROb2RlKGMpKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbnMgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLl9jb25zKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fYXR0cnMpLlxuICAgICAgICAgICAgICBmb3JFYWNoKGsgPT4gKHR5cGVvZiB0aGlzLl9hdHRyc1trXSA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgIGVsW2tdID0gdGhpcy5fYXR0cnNba10gOiBlbC5zZXRBdHRyaWJ1dGUoaywgdGhpcy5fYXR0cnNba10pKTtcblxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IGVsLmFwcGVuZENoaWxkKGMudG9ET01Ob2RlKCkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbnMgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgZWwgPSB0aGlzLl9jb25zLmNyZWF0ZSh0aGlzLl9hdHRycyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9hdHRyc1snZGF0YS13bWwtaWQnXSlcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVlLnJlZ2lzdGVyKHRoaXMuX2F0dHJzWydkYXRhLXdtbC1pZCddLCBlbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBlbC5vbkRPTSh0aGlzLl9hdHRycywgY2hpbGRyZW4pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdpZGdldHMgbXVzdCBiZSBzdHJpbmcgb3IgZnVuY3Rpb24gbm90ICcke3R5cGVvZiB0aGlzLl9jb25zfSdgKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVOb2RlXG4iXX0=