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
    value: function transpile() {

      var children;
      var butes = {
        html: []
      };
      var spreads = this.attributes.filter(function (a) {
        return a.type === 'attribute-spread';
      });

      var tag = this.name[0] === this.name[0].toUpperCase() ? '$$widget(' + this.name : '$$node(\'' + this.name + '\'';

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
      return tag + ',' + butes + ',' + children + ', view)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbIlRhZyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJidXRlcyIsImxpc3QiLCJjYiIsImZvckVhY2giLCJ2YWwiLCJhIiwibmFtZXNwYWNlIiwicHVzaCIsImh0bWwiLCJzcHJlYWRzIiwiZmlsdGVyIiwidGFnIiwidG9VcHBlckNhc2UiLCJwdXNoU3RyaW5nT25OYW1lc3BhY2UiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsIndyYXBBdHRyaWJ1dGVzU3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5zIiwiam9pbiIsImMiLCJ0cmFuc3BpbGUiLCJvIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImJ1ZmZlciIsImlzRWxlIiwicHVzaE5vZGVPbk5hbWVzcGFjZSIsImtleSIsImkiLCJhbGwiLCJsZW5ndGgiLCJwb3AiLCJ3cmFwQXR0cmlidXRlcyIsImFkZCIsImFwcGx5IiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFNQSxHOzs7QUFFSixlQUFZQyxJQUFaLEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQUEsMEdBRTFDQSxRQUYwQzs7QUFHaEQsVUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxVQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5nRDtBQVFqRDs7Ozt3Q0FFbUJHLEssRUFBT0MsSSxFQUFNQyxFLEVBQUk7O0FBRW5DRCxXQUFLRSxPQUFMLENBQWEsYUFBSzs7QUFFaEIsWUFBSUMsTUFBTUYsR0FBR0csQ0FBSCxDQUFWOztBQUVBLFlBQUlBLEVBQUVDLFNBQU4sRUFBaUI7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LE9BQVgsQ0FBbUI7QUFBQSxpQkFBSzBCLE9BQU90QixJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLFNBQW5CLEVBSjBDLENBSUQ7QUFDekN3QixlQUFPdEIsSUFBUCxDQUFhMEIsSUFBSUMsSUFBSUMsTUFBSixHQUFhLENBQWxCLEdBQXVCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBdkIsR0FBb0MsR0FBaEQ7QUFFRCxPQVBEOztBQVNBTixhQUFPdEIsSUFBUCxDQUFZLEdBQVo7O0FBRUFQLGNBQVFTLFFBQVFLLE1BQVIsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSxlQUNyQkEsUUFBUXFCLGNBQVIsQ0FBdUJ0QixJQUF2QixFQUE2QlUsQ0FBN0IsQ0FEcUI7QUFBQSxPQUFmLEVBQzJCSSxNQUQzQixDQUFSOztBQUdBSCxXQUFLWSxHQUFMLENBQVMsT0FBVCxFQUNBQSxHQURBLENBQ0lSLG9CQUNRLEtBQUtuQyxJQURiLGVBRU8sS0FBS0EsSUFGWixRQURKLEVBSUEyQyxHQUpBLENBSUksR0FKSjs7QUFNQVosV0FBS1ksR0FBTCxDQUFTQyxLQUFULENBQWViLElBQWYsRUFBcUJHLE1BQXJCLEVBckNTLENBcUNxQjtBQUM5QkgsV0FBS1ksR0FBTCxDQUFTLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBVDs7QUFFQSxhQUFPLEtBQUtFLFdBQUwsQ0FBaUIsS0FBSzNDLFFBQXRCLEVBQWdDNkIsSUFBaEMsRUFBc0NELENBQXRDLEVBQ1BhLEdBRE8sQ0FDSCxDQUFDLEdBQUQsRUFBTSxHQUFOLENBREcsQ0FBUDtBQUdEOzs7Ozs7a0JBSVk1QyxHIiwiZmlsZSI6IlRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHthcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge2FycmF5PFRhZ3xUZXh0fEZvckxvb3B8SWZDb25kaXRpb24+fSBjaGlsZHJlblxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqIEB0b2RvIHJlZmFjdG9yIHNwcmVhZHMuXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMudHlwZSA9ICd0YWcnO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgfVxuXG4gIF9vcmdhbml6ZU5hbWVzcGFjZXMoYnV0ZXMsIGxpc3QsIGNiKSB7XG5cbiAgICBsaXN0LmZvckVhY2goYSA9PiB7XG5cbiAgICAgIHZhciB2YWwgPSBjYihhKTtcblxuICAgICAgaWYgKGEubmFtZXNwYWNlKSB7XG5cbiAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdID0gYnV0ZXNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICBidXRlc1thLm5hbWVzcGFjZV0ucHVzaCh2YWwpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGJ1dGVzLmh0bWwgPSBidXRlcy5odG1sIHx8IFtdO1xuICAgICAgICBidXRlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0ZXM7XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHZhciBjaGlsZHJlbjtcbiAgICB2YXIgYnV0ZXMgPSB7XG4gICAgICBodG1sOiBbXVxuICAgIH07XG4gICAgdmFyIHNwcmVhZHMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGEgPT4gYS50eXBlID09PSAnYXR0cmlidXRlLXNwcmVhZCcpO1xuXG4gICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICBgJCR3aWRnZXQoJHt0aGlzLm5hbWV9YCA6IGAkJG5vZGUoJyR7dGhpcy5uYW1lfSdgO1xuXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goYSA9PiBhLnB1c2hTdHJpbmdPbk5hbWVzcGFjZShidXRlcykpO1xuXG4gICAgYnV0ZXMgPSBzcHJlYWRzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC53cmFwQXR0cmlidXRlc1N0cmluZyhwcmV2KSwgJ3snICsgKFxuICAgICAgT2JqZWN0LmtleXMoYnV0ZXMpLm1hcChucyA9PiBucyArICc6eycgKyBidXRlc1tuc10uam9pbignLCcpICsgJ30nKSkgKyAnfScpO1xuXG4gICAgY2hpbGRyZW4gPSBgWyR7dGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XWA7XG4gICAgcmV0dXJuIGAke3RhZ30sJHtidXRlc30sJHtjaGlsZHJlbn0sIHZpZXcpYDtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuICAgIHZhciBidXRlcyA9IHtcbiAgICAgIGh0bWw6IFtdXG4gICAgfTtcbiAgICB2YXIgc3ByZWFkcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoYSA9PiBhLnR5cGUgPT09ICdhdHRyaWJ1dGUtc3ByZWFkJyk7XG4gICAgdmFyIGJ1ZmZlciA9IFtdO1xuXG4gICAgdmFyIGlzRWxlID0gKHRoaXMubmFtZVswXSA9PT0gdGhpcy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgIGZhbHNlIDogdHJ1ZTtcblxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGEgPT4gYS5wdXNoTm9kZU9uTmFtZXNwYWNlKGJ1dGVzLCBvKSk7XG5cbiAgICBidWZmZXIucHVzaCgneycpO1xuXG4gICAgT2JqZWN0LmtleXMoYnV0ZXMpLmZvckVhY2goKGtleSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgIGJ1ZmZlci5wdXNoKFtrZXksICc6IHsnXSk7XG4gICAgICBidXRlc1trZXldW2J1dGVzW2tleV0ubGVuZ3RoIC0gMV0ucG9wKCk7IC8vUmVtb3ZlIHRyYWlsaW5nIGNvbW1hICgsKVxuICAgICAgYnV0ZXNba2V5XS5mb3JFYWNoKGEgPT4gYnVmZmVyLnB1c2goYSkpOyAvL0FkZHMgYW4gYXJyYXkgW2tleSwgJzonLCB2YWx1ZSwgJywnXTtcbiAgICAgIGJ1ZmZlci5wdXNoKChpIDwgYWxsLmxlbmd0aCAtIDEpID8gWyd9JywgJywnXSA6ICd9Jyk7XG5cbiAgICB9KTtcblxuICAgIGJ1ZmZlci5wdXNoKCd9Jyk7XG5cbiAgICBidXRlcyA9IHNwcmVhZHMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PlxuICAgICAgY3VycmVudC53cmFwQXR0cmlidXRlcyhwcmV2LCBvKSwgYnVmZmVyKTtcblxuICAgIG5vZGUuYWRkKCdtYWtlLicpLlxuICAgIGFkZChpc0VsZSA/XG4gICAgICBgd2lkZ2V0KCR7dGhpcy5uYW1lfWAgOlxuICAgICAgYG5vZGUoJyR7dGhpcy5uYW1lfScpYCkuXG4gICAgYWRkKCcsJyk7XG5cbiAgICBub2RlLmFkZC5hcHBseShub2RlLCBidWZmZXIpOyAvLyBhZGQgZXZlcnl0aGluZyBpbiB0aGUgYnVmZmVyIGFsbCBhdCBvbmNlLlxuICAgIG5vZGUuYWRkKFsnLCcsICdbJ10pO1xuXG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgYWRkKFsnXScsICcpJ10pO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcblxuIl19