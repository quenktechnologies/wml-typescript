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
        value: function transpile() {

            var children;
            var butes = {
                html: []
            };
            var spreads = this.attributes.filter(function (a) {
                return a.type === 'attribute-spread';
            });

            var tag = this.name[0] === this.name[0].toUpperCase() ? 'make.widget(' + this.name : 'make.node(\'' + this.name + '\'';

            this.attributes.forEach(function (a) {
                return a.pushStringOnNamespace(butes);
            });

            butes = spreads.reduce(function (prev, current) {
                return current.wrapAttributesString(prev);
            }, '{' + Object.keys(butes).map(function (ns) {
                return ns + ':{' + butes[ns].join(',') + '}';
            }) + '}');

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
            var butes = {
                html: []
            };
            var spreads = this.attributes.filter(function (a) {
                return a.type === 'attribute-spread';
            });
            var buffer = [];

            var isEle = this.name[0] === this.name[0].toUpperCase() ? false : true;

            this.attributes.forEach(function (a) {
                return a.pushNodeOnNamespace(butes, o);
            });

            buffer.push('{');

            Object.keys(butes).forEach(function (key, i, all) {

                buffer.push([key, ': {']);
                butes[key][butes[key].length - 1].pop(); //Remove trailing comma (,)
                butes[key].forEach(function (a) {
                    return buffer.push(a);
                }); //Adds an array [key, ':', value, ','];
                buffer.push(i < all.length - 1 ? ['}', ','] : '}');
            });

            buffer.push('}');

            butes = spreads.reduce(function (prev, current) {
                return current.wrapAttributes(prev, o);
            }, buffer);

            node.add('make.').add(isEle ? 'widget(' + this.name : 'node(\'' + this.name + '\')').add(',');

            node.add.apply(node, buffer); // add everything in the buffer all at once.
            node.add([',', '[']);

            return this.compileList(this.children, node, o).add([']', ')']);
        }
    }]);

    return Tag;
}(_Node3.default);

exports.default = Tag;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbIlRhZyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJidXRlcyIsImxpc3QiLCJjYiIsImZvckVhY2giLCJ2YWwiLCJhIiwibmFtZXNwYWNlIiwicHVzaCIsImh0bWwiLCJzcHJlYWRzIiwiZmlsdGVyIiwidGFnIiwidG9VcHBlckNhc2UiLCJwdXNoU3RyaW5nT25OYW1lc3BhY2UiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsIndyYXBBdHRyaWJ1dGVzU3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5zIiwiam9pbiIsImMiLCJ0cmFuc3BpbGUiLCJvIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImJ1ZmZlciIsImlzRWxlIiwicHVzaE5vZGVPbk5hbWVzcGFjZSIsImtleSIsImkiLCJhbGwiLCJsZW5ndGgiLCJwb3AiLCJ3cmFwQXR0cmlidXRlcyIsImFkZCIsImFwcGx5IiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT01BLEc7OztBQUVGLGlCQUFZQyxJQUFaLEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQUEsOEdBRXhDQSxRQUZ3Qzs7QUFHOUMsY0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxjQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU44QztBQVFqRDs7Ozs0Q0FFbUJHLEssRUFBT0MsSSxFQUFNQyxFLEVBQUk7O0FBRWpDRCxpQkFBS0UsT0FBTCxDQUFhLGFBQUs7O0FBRWQsb0JBQUlDLE1BQU1GLEdBQUdHLENBQUgsQ0FBVjs7QUFFQSxvQkFBSUEsRUFBRUMsU0FBTixFQUFp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Q0FHQztBQUN6Q3BDLHNCQUFNZ0MsR0FBTixFQUFXN0IsT0FBWCxDQUFtQjtBQUFBLDJCQUFLMEIsT0FBT3RCLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsaUJBQW5CLEVBSndDLENBSUM7QUFDekN3Qix1QkFBT3RCLElBQVAsQ0FBYTBCLElBQUlDLElBQUlDLE1BQUosR0FBYSxDQUFsQixHQUF1QixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXZCLEdBQW9DLEdBQWhEO0FBRUgsYUFQRDs7QUFTQU4sbUJBQU90QixJQUFQLENBQVksR0FBWjs7QUFFQVAsb0JBQVFTLFFBQVFLLE1BQVIsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFDbkJBLFFBQVFxQixjQUFSLENBQXVCdEIsSUFBdkIsRUFBNkJVLENBQTdCLENBRG1CO0FBQUEsYUFBZixFQUM2QkksTUFEN0IsQ0FBUjs7QUFHQUgsaUJBQUtZLEdBQUwsQ0FBUyxPQUFULEVBQ0FBLEdBREEsQ0FDSVIsb0JBQ1UsS0FBS25DLElBRGYsZUFFUyxLQUFLQSxJQUZkLFFBREosRUFJQTJDLEdBSkEsQ0FJSSxHQUpKOztBQU1BWixpQkFBS1ksR0FBTCxDQUFTQyxLQUFULENBQWViLElBQWYsRUFBcUJHLE1BQXJCLEVBckNPLENBcUN1QjtBQUM5QkgsaUJBQUtZLEdBQUwsQ0FBUyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVQ7O0FBRUEsbUJBQU8sS0FBS0UsV0FBTCxDQUFpQixLQUFLM0MsUUFBdEIsRUFBZ0M2QixJQUFoQyxFQUFzQ0QsQ0FBdEMsRUFDUGEsR0FETyxDQUNILENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FERyxDQUFQO0FBR0g7Ozs7OztrQkFJVTVDLEciLCJmaWxlIjoiVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUYWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge2FycmF5PEF0dHJpYnV0ZT59IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7YXJyYXk8VGFnfFRleHR8Rm9yTG9vcHxJZkNvbmRpdGlvbj59IGNoaWxkcmVuXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3RhZyc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIH1cblxuICAgIF9vcmdhbml6ZU5hbWVzcGFjZXMoYnV0ZXMsIGxpc3QsIGNiKSB7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gY2IoYSk7XG5cbiAgICAgICAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdID0gYnV0ZXNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBidXRlcy5odG1sID0gYnV0ZXMuaHRtbCB8fCBbXTtcbiAgICAgICAgICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXRlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW47XG4gICAgICAgIHZhciBidXRlcyA9IHtcbiAgICAgICAgICAgIGh0bWw6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzcHJlYWRzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihhID0+IGEudHlwZSA9PT0gJ2F0dHJpYnV0ZS1zcHJlYWQnKTtcblxuICAgICAgICB2YXIgdGFnID0gKHRoaXMubmFtZVswXSA9PT0gdGhpcy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgICAgICAgIGBtYWtlLndpZGdldCgke3RoaXMubmFtZX1gIDogYG1ha2Uubm9kZSgnJHt0aGlzLm5hbWV9J2A7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goYSA9PiBhLnB1c2hTdHJpbmdPbk5hbWVzcGFjZShidXRlcykpO1xuXG4gICAgICAgIGJ1dGVzID0gc3ByZWFkcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQud3JhcEF0dHJpYnV0ZXNTdHJpbmcocHJldiksICd7JyArIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ1dGVzKS5tYXAobnMgPT4gbnMgKyAnOnsnICsgYnV0ZXNbbnNdLmpvaW4oJywnKSArICd9JykpICsgJ30nKTtcblxuICAgICAgICBjaGlsZHJlbiA9IGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKCkpLmpvaW4oJywnKX1dYDtcbiAgICAgICAgcmV0dXJuIGAke3RhZ30sJHtidXRlc30sJHtjaGlsZHJlbn0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBjaGlsZHJlbjtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuICAgICAgICB2YXIgYnV0ZXMgPSB7XG4gICAgICAgICAgICBodG1sOiBbXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgc3ByZWFkcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoYSA9PiBhLnR5cGUgPT09ICdhdHRyaWJ1dGUtc3ByZWFkJyk7XG4gICAgICAgIHZhciBidWZmZXIgPSBbXTtcblxuICAgICAgICB2YXIgaXNFbGUgPSAodGhpcy5uYW1lWzBdID09PSB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSkgP1xuICAgICAgICAgICAgZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGEgPT4gYS5wdXNoTm9kZU9uTmFtZXNwYWNlKGJ1dGVzLCBvKSk7XG5cbiAgICAgICAgYnVmZmVyLnB1c2goJ3snKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhidXRlcykuZm9yRWFjaCgoa2V5LCBpLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgYnVmZmVyLnB1c2goW2tleSwgJzogeyddKTtcbiAgICAgICAgICAgIGJ1dGVzW2tleV1bYnV0ZXNba2V5XS5sZW5ndGggLSAxXS5wb3AoKTsgLy9SZW1vdmUgdHJhaWxpbmcgY29tbWEgKCwpXG4gICAgICAgICAgICBidXRlc1trZXldLmZvckVhY2goYSA9PiBidWZmZXIucHVzaChhKSk7IC8vQWRkcyBhbiBhcnJheSBba2V5LCAnOicsIHZhbHVlLCAnLCddO1xuICAgICAgICAgICAgYnVmZmVyLnB1c2goKGkgPCBhbGwubGVuZ3RoIC0gMSkgPyBbJ30nLCAnLCddIDogJ30nKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBidWZmZXIucHVzaCgnfScpO1xuXG4gICAgICAgIGJ1dGVzID0gc3ByZWFkcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICBjdXJyZW50LndyYXBBdHRyaWJ1dGVzKHByZXYsIG8pLCBidWZmZXIpO1xuXG4gICAgICAgIG5vZGUuYWRkKCdtYWtlLicpLlxuICAgICAgICBhZGQoaXNFbGUgP1xuICAgICAgICAgICAgYHdpZGdldCgke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgIGBub2RlKCcke3RoaXMubmFtZX0nKWApLlxuICAgICAgICBhZGQoJywnKTtcblxuICAgICAgICBub2RlLmFkZC5hcHBseShub2RlLCBidWZmZXIpOyAvLyBhZGQgZXZlcnl0aGluZyBpbiB0aGUgYnVmZmVyIGFsbCBhdCBvbmNlLlxuICAgICAgICBub2RlLmFkZChbJywnLCAnWyddKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKFsnXScsICcpJ10pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIl19