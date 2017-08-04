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
            var spreads = this.attributes.filter(function (a) {
                return a.type === 'attribute-spread';
            });

            var tag = this.name[0] === this.name[0].toUpperCase() ? '$$widget(' + this.name : '$$node(\'' + this.name + '\'';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbIlRhZyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJidXRlcyIsImxpc3QiLCJjYiIsImZvckVhY2giLCJ2YWwiLCJhIiwibmFtZXNwYWNlIiwicHVzaCIsImh0bWwiLCJvIiwid21sIiwic3ByZWFkcyIsImZpbHRlciIsInRhZyIsInRvVXBwZXJDYXNlIiwicHVzaFN0cmluZ09uTmFtZXNwYWNlIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJ3cmFwQXR0cmlidXRlc1N0cmluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJucyIsImpvaW4iLCJjIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRTUEsRzs7O0FBRUYsaUJBQVlDLElBQVosRUFBa0JDLFVBQWxCLEVBQThCQyxRQUE5QixFQUF3Q0MsUUFBeEMsRUFBa0Q7QUFBQTs7QUFBQSw4R0FFeENBLFFBRndDOztBQUc5QyxjQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLGNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTjhDO0FBUWpEOzs7OzRDQUVtQkcsSyxFQUFPQyxJLEVBQU1DLEUsRUFBSTs7QUFFakNELGlCQUFLRSxPQUFMLENBQWEsYUFBSzs7QUFFZCxvQkFBSUMsTUFBTUYsR0FBR0csQ0FBSCxDQUFWOztBQUVBLG9CQUFJQSxFQUFFQyxTQUFOLEVBQWlCOztBQUViTiwwQkFBTUssRUFBRUMsU0FBUixJQUFxQk4sTUFBTUssRUFBRUMsU0FBUixLQUFzQixFQUEzQztBQUNBTiwwQkFBTUssRUFBRUMsU0FBUixFQUFtQkMsSUFBbkIsQ0FBd0JILEdBQXhCO0FBRUgsaUJBTEQsTUFLTzs7QUFFSEosMEJBQU1RLElBQU4sR0FBYVIsTUFBTVEsSUFBTixJQUFjLEVBQTNCO0FBQ0FSLDBCQUFNUSxJQUFOLENBQVdELElBQVgsQ0FBZ0JILEdBQWhCO0FBRUg7QUFFSixhQWhCRDs7QUFrQkEsbUJBQU9KLEtBQVA7QUFFSDs7O2tDQUVTUyxDLEVBQUc7O0FBRVQsZ0JBQUlaLFFBQUo7QUFDQSxnQkFBSUcsUUFBUTtBQUNSUSxzQkFBTSxFQURFO0FBRVJFLHFCQUFLO0FBRkcsYUFBWjtBQUlBLGdCQUFJQyxVQUFVLEtBQUtmLFVBQUwsQ0FBZ0JnQixNQUFoQixDQUF1QjtBQUFBLHVCQUFLUCxFQUFFTixJQUFGLEtBQVcsa0JBQWhCO0FBQUEsYUFBdkIsQ0FBZDs7QUFFQSxnQkFBSWMsTUFBTyxLQUFLbEIsSUFBTCxDQUFVLENBQVYsTUFBaUIsS0FBS0EsSUFBTCxDQUFVLENBQVYsRUFBYW1CLFdBQWIsRUFBbEIsaUJBQ00sS0FBS25CLElBRFgsaUJBQytCLEtBQUtBLElBRHBDLE9BQVY7O0FBR0EsaUJBQUtDLFVBQUwsQ0FBZ0JPLE9BQWhCLENBQXdCO0FBQUEsdUJBQUtFLEVBQUVVLHFCQUFGLENBQXdCZixLQUF4QixFQUErQlMsQ0FBL0IsQ0FBTDtBQUFBLGFBQXhCOztBQUVBVCxvQkFBUVcsUUFBUUssTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsb0JBQVIsQ0FBNkJGLElBQTdCLENBQW5CO0FBQUEsYUFBZixFQUFzRSxNQUMxRUcsT0FBT0MsSUFBUCxDQUFZckIsS0FBWixFQUFtQnNCLEdBQW5CLENBQXVCO0FBQUEsdUJBQU1DLEtBQUssSUFBTCxHQUFZdkIsTUFBTXVCLEVBQU4sRUFBVUMsSUFBVixDQUFlLEdBQWYsQ0FBWixHQUFrQyxHQUF4QztBQUFBLGFBQXZCLENBRDBFLEdBQ0gsR0FEbkUsQ0FBUjs7QUFHQTNCLDZCQUFlLEtBQUtBLFFBQUwsQ0FBY3lCLEdBQWQsQ0FBa0I7QUFBQSx1QkFBS0csRUFBRUMsU0FBRixDQUFZakIsQ0FBWixDQUFMO0FBQUEsYUFBbEIsRUFBdUNlLElBQXZDLENBQTRDLEdBQTVDLENBQWY7QUFDQSxtQkFBVVgsR0FBVixTQUFpQmIsS0FBakIsU0FBMEJILFFBQTFCO0FBRUg7Ozs7OztrQkFJVUgsRyIsImZpbGUiOiJUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKiBAdG9kbyByZWZhY3RvciBzcHJlYWRzLlxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3RhZyc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIH1cblxuICAgIF9vcmdhbml6ZU5hbWVzcGFjZXMoYnV0ZXMsIGxpc3QsIGNiKSB7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gY2IoYSk7XG5cbiAgICAgICAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdID0gYnV0ZXNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBidXRlcy5odG1sID0gYnV0ZXMuaHRtbCB8fCBbXTtcbiAgICAgICAgICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXRlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuICAgICAgICB2YXIgYnV0ZXMgPSB7XG4gICAgICAgICAgICBodG1sOiBbXSxcbiAgICAgICAgICAgIHdtbDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNwcmVhZHMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGEgPT4gYS50eXBlID09PSAnYXR0cmlidXRlLXNwcmVhZCcpO1xuXG4gICAgICAgIHZhciB0YWcgPSAodGhpcy5uYW1lWzBdID09PSB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSkgP1xuICAgICAgICAgICAgYCQkd2lkZ2V0KCR7dGhpcy5uYW1lfWAgOiBgJCRub2RlKCcke3RoaXMubmFtZX0nYDtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChhID0+IGEucHVzaFN0cmluZ09uTmFtZXNwYWNlKGJ1dGVzLCBvKSk7XG5cbiAgICAgICAgYnV0ZXMgPSBzcHJlYWRzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC53cmFwQXR0cmlidXRlc1N0cmluZyhwcmV2KSwgJ3snICsgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnV0ZXMpLm1hcChucyA9PiBucyArICc6eycgKyBidXRlc1tuc10uam9pbignLCcpICsgJ30nKSkgKyAnfScpO1xuXG4gICAgICAgIGNoaWxkcmVuID0gYFske3RoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy50cmFuc3BpbGUobykpLmpvaW4oJywnKX1dYDtcbiAgICAgICAgcmV0dXJuIGAke3RhZ30sJHtidXRlc30sJHtjaGlsZHJlbn0sIHZpZXcpYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcbiJdfQ==