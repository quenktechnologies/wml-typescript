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
 * @param {array} nodeData 
 * @implements {Node}
 */

var CompositeNode = (function () {
    function CompositeNode(nodeData) {
        _classCallCheck(this, CompositeNode);

        this.nodeData = nodeData;
    }

    _createClass(CompositeNode, [{
        key: 'render',
        value: function render(w) {

            var cons = this.nodeData[0];
            var attrs = this.nodeData[1];
            var childs = this.nodeData[2];
            var children;
            var el;

            children = childs.map(function (c) {
                return Array.isArray(c) ? new CompositeNode(c) : new _TextNode2['default'](c);
            });

            if (typeof cons === 'string') {

                el = document.createElement(cons);
                Object.keys(attrs).forEach(function (k) {
                    return el.setAttribute(k, attrs[k]);
                });
                children.forEach(function (c) {
                    return el.appendChild(c.render(w));
                });
                return el;
            } else if (typeof cons === 'function') {

                el = cons.create(attrs);

                if (attrs['data-wml-id']) w.register(attrs['data-wml-id'], el);

                return el.onDOM(attrs, children);
            }

            throw new Error('Widgets must be string or function not \'' + typeof cons + '\'');
        }
    }]);

    return CompositeNode;
})();

exports['default'] = CompositeNode;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3NpdGVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBcUIsWUFBWTs7Ozs7Ozs7OztJQU8zQixhQUFhO0FBRUosYUFGVCxhQUFhLENBRUgsUUFBUSxFQUFFOzhCQUZwQixhQUFhOztBQUdYLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0tBQzNCOztpQkFKQyxhQUFhOztlQU1ULGdCQUFDLENBQUMsRUFBRTs7QUFFTixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixnQkFBSSxRQUFRLENBQUM7QUFDYixnQkFBSSxFQUFFLENBQUM7O0FBRVAsb0JBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxBQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ3hDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLDBCQUFhLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQzs7QUFFNUMsZ0JBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFOztBQUUxQixrQkFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsc0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzsyQkFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxDQUFDO0FBQzlELHdCQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzsyQkFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUEsQ0FBQyxDQUFDO0FBQ25ELHVCQUFPLEVBQUUsQ0FBQzthQUViLE1BQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7O0FBRW5DLGtCQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFeEIsb0JBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFekMsdUJBQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFFcEM7O0FBRUQsa0JBQU0sSUFBSSxLQUFLLCtDQUE0QyxPQUFPLElBQUksUUFBSSxDQUFDO1NBRTlFOzs7V0FyQ0MsYUFBYTs7O3FCQXlDSixhQUFhIiwiZmlsZSI6IkNvbXBvc2l0ZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9UZXh0Tm9kZSc7XG5cbi8qKlxuICogQ29tcG9zaXRlTm9kZSByZXByZXNlbnRzIGEgbm9kZSB0aGF0IGNhbiBoYXZlIGNoaWxkcmVuLlxuICogQHBhcmFtIHthcnJheX0gbm9kZURhdGEgXG4gKiBAaW1wbGVtZW50cyB7Tm9kZX1cbiAqL1xuY2xhc3MgQ29tcG9zaXRlTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlRGF0YSkge1xuICAgICAgICB0aGlzLm5vZGVEYXRhID0gbm9kZURhdGFcbiAgICB9XG5cbiAgICByZW5kZXIodykge1xuXG4gICAgICAgIHZhciBjb25zID0gdGhpcy5ub2RlRGF0YVswXTtcbiAgICAgICAgdmFyIGF0dHJzID0gdGhpcy5ub2RlRGF0YVsxXTtcbiAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMubm9kZURhdGFbMl07XG4gICAgICAgIHZhciBjaGlsZHJlbjtcbiAgICAgICAgdmFyIGVsO1xuXG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRzLm1hcChjID0+IChBcnJheS5pc0FycmF5KGMpKSA/XG4gICAgICAgICAgICBuZXcgQ29tcG9zaXRlTm9kZShjKSA6IG5ldyBUZXh0Tm9kZShjKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29ucyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrID0+IGVsLnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSkpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IGVsLmFwcGVuZENoaWxkKGMucmVuZGVyKHcpKSk7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29ucyA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICBlbCA9IGNvbnMuY3JlYXRlKGF0dHJzKTtcblxuICAgICAgICAgICAgaWYgKGF0dHJzWydkYXRhLXdtbC1pZCddKVxuICAgICAgICAgICAgICAgIHcucmVnaXN0ZXIoYXR0cnNbJ2RhdGEtd21sLWlkJ10sIGVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsLm9uRE9NKGF0dHJzLCBjaGlsZHJlbik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV2lkZ2V0cyBtdXN0IGJlIHN0cmluZyBvciBmdW5jdGlvbiBub3QgJyR7dHlwZW9mIGNvbnN9J2ApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2l0ZU5vZGVcbiJdfQ==