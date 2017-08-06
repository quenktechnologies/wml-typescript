'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tag
 * @param {string} name
 * @param {array<Attribute>} attributes
 * @param {array<Tag|Text|ForLoop|IfCondition>} children
 * @param {Location} location
 * @todo refactor spreads.
 */
var Tag = function (_Node) {
    _inherits(Tag, _Node);

    function Tag(name, attributes, children, location) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, location));

        _this.type = 'tag';
        _this.name = name;
        _this.attributes = attributes;
        _this.children = children;

        return _this;
    }

    _createClass(Tag, [{
        key: '_organizeNamespaces',
        value: function _organizeNamespaces(butes, list, cb) {

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
        value: function transpile(o) {

            var children;
            var butes = {
                html: [],
                wml: []
            };
            var name = this.name.transpile(o);
            var spreads = this.attributes.filter(function (a) {
                return a.type === 'attribute-spread';
            });

            var tag = name[0] === name[0].toUpperCase() ? '$$widget(' + name : '$$node(\'' + name + '\'';

            this.attributes.forEach(function (a) {
                return a.pushStringOnNamespace(butes, o);
            });

            butes = spreads.reduce(function (prev, current) {
                return current.wrapAttributesString(prev);
            }, '{' + Object.keys(butes).map(function (ns) {
                return ns + ':{' + butes[ns].join(',') + '}';
            }) + '}');

            children = '[' + this.children.map(function (c) {
                return c.transpile(o);
            }).join(',') + ']';
            return tag + ',' + butes + ',' + children + ', view)';
        }
    }]);

    return Tag;
}(_Node3.default);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbIlRhZyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJidXRlcyIsImxpc3QiLCJjYiIsImZvckVhY2giLCJ2YWwiLCJhIiwibmFtZXNwYWNlIiwicHVzaCIsImh0bWwiLCJvIiwid21sIiwidHJhbnNwaWxlIiwic3ByZWFkcyIsImZpbHRlciIsInRhZyIsInRvVXBwZXJDYXNlIiwicHVzaFN0cmluZ09uTmFtZXNwYWNlIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJ3cmFwQXR0cmlidXRlc1N0cmluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJucyIsImpvaW4iLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRTUEsRzs7O0FBRUYsaUJBQVlDLElBQVosRUFBa0JDLFVBQWxCLEVBQThCQyxRQUE5QixFQUF3Q0MsUUFBeEMsRUFBa0Q7QUFBQTs7QUFBQSw4R0FFeENBLFFBRndDOztBQUc5QyxjQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLGNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTjhDO0FBUWpEOzs7OzRDQUVtQkcsSyxFQUFPQyxJLEVBQU1DLEUsRUFBSTs7QUFFakNELGlCQUFLRSxPQUFMLENBQWEsYUFBSzs7QUFFZCxvQkFBSUMsTUFBTUYsR0FBR0csQ0FBSCxDQUFWOztBQUVBLG9CQUFJQSxFQUFFQyxTQUFOLEVBQWlCOztBQUViTiwwQkFBTUssRUFBRUMsU0FBUixJQUFxQk4sTUFBTUssRUFBRUMsU0FBUixLQUFzQixFQUEzQztBQUNBTiwwQkFBTUssRUFBRUMsU0FBUixFQUFtQkMsSUFBbkIsQ0FBd0JILEdBQXhCO0FBRUgsaUJBTEQsTUFLTzs7QUFFSEosMEJBQU1RLElBQU4sR0FBYVIsTUFBTVEsSUFBTixJQUFjLEVBQTNCO0FBQ0FSLDBCQUFNUSxJQUFOLENBQVdELElBQVgsQ0FBZ0JILEdBQWhCO0FBRUg7QUFFSixhQWhCRDs7QUFrQkEsbUJBQU9KLEtBQVA7QUFFSDs7O2tDQUVTUyxDLEVBQUc7O0FBRVQsZ0JBQUlaLFFBQUo7QUFDQSxnQkFBSUcsUUFBUTtBQUNSUSxzQkFBTSxFQURFO0FBRVJFLHFCQUFLO0FBRkcsYUFBWjtBQUlBLGdCQUFJZixPQUFPLEtBQUtBLElBQUwsQ0FBVWdCLFNBQVYsQ0FBb0JGLENBQXBCLENBQVg7QUFDQSxnQkFBSUcsVUFBVSxLQUFLaEIsVUFBTCxDQUFnQmlCLE1BQWhCLENBQXVCO0FBQUEsdUJBQUtSLEVBQUVOLElBQUYsS0FBVyxrQkFBaEI7QUFBQSxhQUF2QixDQUFkOztBQUVBLGdCQUFJZSxNQUFPbkIsS0FBSyxDQUFMLE1BQVlBLEtBQUssQ0FBTCxFQUFRb0IsV0FBUixFQUFiLGlCQUNNcEIsSUFETixpQkFDMEJBLElBRDFCLE9BQVY7O0FBR0EsaUJBQUtDLFVBQUwsQ0FBZ0JPLE9BQWhCLENBQXdCO0FBQUEsdUJBQUtFLEVBQUVXLHFCQUFGLENBQXdCaEIsS0FBeEIsRUFBK0JTLENBQS9CLENBQUw7QUFBQSxhQUF4Qjs7QUFFQVQsb0JBQVFZLFFBQVFLLE1BQVIsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFBbUJBLFFBQVFDLG9CQUFSLENBQTZCRixJQUE3QixDQUFuQjtBQUFBLGFBQWYsRUFBc0UsTUFDMUVHLE9BQU9DLElBQVAsQ0FBWXRCLEtBQVosRUFBbUJ1QixHQUFuQixDQUF1QjtBQUFBLHVCQUFNQyxLQUFLLElBQUwsR0FBWXhCLE1BQU13QixFQUFOLEVBQVVDLElBQVYsQ0FBZSxHQUFmLENBQVosR0FBa0MsR0FBeEM7QUFBQSxhQUF2QixDQUQwRSxHQUNILEdBRG5FLENBQVI7O0FBR0E1Qiw2QkFBZSxLQUFLQSxRQUFMLENBQWMwQixHQUFkLENBQWtCO0FBQUEsdUJBQUtHLEVBQUVmLFNBQUYsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsYUFBbEIsRUFBdUNnQixJQUF2QyxDQUE0QyxHQUE1QyxDQUFmO0FBQ0EsbUJBQVVYLEdBQVYsU0FBaUJkLEtBQWpCLFNBQTBCSCxRQUExQjtBQUVIOzs7Ozs7a0JBSVVILEciLCJmaWxlIjoiVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUYWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge2FycmF5PEF0dHJpYnV0ZT59IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7YXJyYXk8VGFnfFRleHR8Rm9yTG9vcHxJZkNvbmRpdGlvbj59IGNoaWxkcmVuXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICogQHRvZG8gcmVmYWN0b3Igc3ByZWFkcy5cbiAqL1xuY2xhc3MgVGFnIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0YWcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB9XG5cbiAgICBfb3JnYW5pemVOYW1lc3BhY2VzKGJ1dGVzLCBsaXN0LCBjYikge1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaChhID0+IHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IGNiKGEpO1xuXG4gICAgICAgICAgICBpZiAoYS5uYW1lc3BhY2UpIHtcblxuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXSA9IGJ1dGVzW2EubmFtZXNwYWNlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBidXRlc1thLm5hbWVzcGFjZV0ucHVzaCh2YWwpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXMuaHRtbCA9IGJ1dGVzLmh0bWwgfHwgW107XG4gICAgICAgICAgICAgICAgYnV0ZXMuaHRtbC5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYnV0ZXM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBjaGlsZHJlbjtcbiAgICAgICAgdmFyIGJ1dGVzID0ge1xuICAgICAgICAgICAgaHRtbDogW10sXG4gICAgICAgICAgICB3bWw6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lLnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIHNwcmVhZHMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGEgPT4gYS50eXBlID09PSAnYXR0cmlidXRlLXNwcmVhZCcpO1xuXG4gICAgICAgIHZhciB0YWcgPSAobmFtZVswXSA9PT0gbmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICBgJCR3aWRnZXQoJHtuYW1lfWAgOiBgJCRub2RlKCcke25hbWV9J2A7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goYSA9PiBhLnB1c2hTdHJpbmdPbk5hbWVzcGFjZShidXRlcywgbykpO1xuXG4gICAgICAgIGJ1dGVzID0gc3ByZWFkcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQud3JhcEF0dHJpYnV0ZXNTdHJpbmcocHJldiksICd7JyArIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ1dGVzKS5tYXAobnMgPT4gbnMgKyAnOnsnICsgYnV0ZXNbbnNdLmpvaW4oJywnKSArICd9JykpICsgJ30nKTtcblxuICAgICAgICBjaGlsZHJlbiA9IGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9XWA7XG4gICAgICAgIHJldHVybiBgJHt0YWd9LCR7YnV0ZXN9LCR7Y2hpbGRyZW59LCB2aWV3KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=