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
        html: [],
        wml: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGFnLmpzIl0sIm5hbWVzIjpbIlRhZyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJidXRlcyIsImxpc3QiLCJjYiIsImZvckVhY2giLCJ2YWwiLCJhIiwibmFtZXNwYWNlIiwicHVzaCIsImh0bWwiLCJ3bWwiLCJzcHJlYWRzIiwiZmlsdGVyIiwidGFnIiwidG9VcHBlckNhc2UiLCJwdXNoU3RyaW5nT25OYW1lc3BhY2UiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsIndyYXBBdHRyaWJ1dGVzU3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5zIiwiam9pbiIsImMiLCJ0cmFuc3BpbGUiLCJvIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImJ1ZmZlciIsImlzRWxlIiwicHVzaE5vZGVPbk5hbWVzcGFjZSIsImtleSIsImkiLCJhbGwiLCJsZW5ndGgiLCJwb3AiLCJ3cmFwQXR0cmlidXRlcyIsImFkZCIsImFwcGx5IiwiY29tcGlsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFNQSxHOzs7QUFFSixlQUFZQyxJQUFaLEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQUEsMEdBRTFDQSxRQUYwQzs7QUFHaEQsVUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxVQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5nRDtBQVFqRDs7Ozt3Q0FFbUJHLEssRUFBT0MsSSxFQUFNQyxFLEVBQUk7O0FBRW5DRCxXQUFLRSxPQUFMLENBQWEsYUFBSzs7QUFFaEIsWUFBSUMsTUFBTUYsR0FBR0csQ0FBSCxDQUFWOztBQUVBLFlBQUlBLEVBQUVDLFNBQU4s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Q3JDLGNBQU1pQyxHQUFOLEVBQVc5QixPQUFYLENBQW1CO0FBQUEsaUJBQUsyQixPQUFPdkIsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxTQUFuQixFQUowQyxDQUlEO0FBQ3pDeUIsZUFBT3ZCLElBQVAsQ0FBYTJCLElBQUlDLElBQUlDLE1BQUosR0FBYSxDQUFsQixHQUF1QixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXZCLEdBQW9DLEdBQWhEO0FBRUQsT0FQRDs7QUFTQU4sYUFBT3ZCLElBQVAsQ0FBWSxHQUFaOztBQUVBUCxjQUFRVSxRQUFRSyxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQO0FBQUEsZUFDckJBLFFBQVFxQixjQUFSLENBQXVCdEIsSUFBdkIsRUFBNkJVLENBQTdCLENBRHFCO0FBQUEsT0FBZixFQUMyQkksTUFEM0IsQ0FBUjs7QUFHQUgsV0FBS1ksR0FBTCxDQUFTLE9BQVQsRUFDQUEsR0FEQSxDQUNJUixvQkFDUSxLQUFLcEMsSUFEYixlQUVPLEtBQUtBLElBRlosUUFESixFQUlBNEMsR0FKQSxDQUlJLEdBSko7O0FBTUFaLFdBQUtZLEdBQUwsQ0FBU0MsS0FBVCxDQUFlYixJQUFmLEVBQXFCRyxNQUFyQixFQXJDUyxDQXFDcUI7QUFDOUJILFdBQUtZLEdBQUwsQ0FBUyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVQ7O0FBRUEsYUFBTyxLQUFLRSxXQUFMLENBQWlCLEtBQUs1QyxRQUF0QixFQUFnQzhCLElBQWhDLEVBQXNDRCxDQUF0QyxFQUNQYSxHQURPLENBQ0gsQ0FBQyxHQUFELEVBQU0sR0FBTixDQURHLENBQVA7QUFHRDs7Ozs7O2tCQUlZN0MsRyIsImZpbGUiOiJUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKiBAdG9kbyByZWZhY3RvciBzcHJlYWRzLlxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnR5cGUgPSAndGFnJztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gIH1cblxuICBfb3JnYW5pemVOYW1lc3BhY2VzKGJ1dGVzLCBsaXN0LCBjYikge1xuXG4gICAgbGlzdC5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICB2YXIgdmFsID0gY2IoYSk7XG5cbiAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgIGJ1dGVzW2EubmFtZXNwYWNlXSA9IGJ1dGVzW2EubmFtZXNwYWNlXSB8fCBbXTtcbiAgICAgICAgYnV0ZXNbYS5uYW1lc3BhY2VdLnB1c2godmFsKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBidXRlcy5odG1sID0gYnV0ZXMuaHRtbCB8fCBbXTtcbiAgICAgICAgYnV0ZXMuaHRtbC5wdXNoKHZhbCk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dGVzO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgdmFyIGJ1dGVzID0ge1xuICAgICAgaHRtbDogW10sXG4gICAgICAgIHdtbDpbXVxuICAgIH07XG4gICAgdmFyIHNwcmVhZHMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGEgPT4gYS50eXBlID09PSAnYXR0cmlidXRlLXNwcmVhZCcpO1xuXG4gICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICBgJCR3aWRnZXQoJHt0aGlzLm5hbWV9YCA6IGAkJG5vZGUoJyR7dGhpcy5uYW1lfSdgO1xuXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goYSA9PiBhLnB1c2hTdHJpbmdPbk5hbWVzcGFjZShidXRlcykpO1xuXG4gICAgYnV0ZXMgPSBzcHJlYWRzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC53cmFwQXR0cmlidXRlc1N0cmluZyhwcmV2KSwgJ3snICsgKFxuICAgICAgT2JqZWN0LmtleXMoYnV0ZXMpLm1hcChucyA9PiBucyArICc6eycgKyBidXRlc1tuc10uam9pbignLCcpICsgJ30nKSkgKyAnfScpO1xuXG4gICAgY2hpbGRyZW4gPSBgWyR7dGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XWA7XG4gICAgcmV0dXJuIGAke3RhZ30sJHtidXRlc30sJHtjaGlsZHJlbn0sIHZpZXcpYDtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuICAgIHZhciBidXRlcyA9IHtcbiAgICAgIGh0bWw6IFtdXG4gICAgfTtcbiAgICB2YXIgc3ByZWFkcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoYSA9PiBhLnR5cGUgPT09ICdhdHRyaWJ1dGUtc3ByZWFkJyk7XG4gICAgdmFyIGJ1ZmZlciA9IFtdO1xuXG4gICAgdmFyIGlzRWxlID0gKHRoaXMubmFtZVswXSA9PT0gdGhpcy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgIGZhbHNlIDogdHJ1ZTtcblxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGEgPT4gYS5wdXNoTm9kZU9uTmFtZXNwYWNlKGJ1dGVzLCBvKSk7XG5cbiAgICBidWZmZXIucHVzaCgneycpO1xuXG4gICAgT2JqZWN0LmtleXMoYnV0ZXMpLmZvckVhY2goKGtleSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgIGJ1ZmZlci5wdXNoKFtrZXksICc6IHsnXSk7XG4gICAgICBidXRlc1trZXldW2J1dGVzW2tleV0ubGVuZ3RoIC0gMV0ucG9wKCk7IC8vUmVtb3ZlIHRyYWlsaW5nIGNvbW1hICgsKVxuICAgICAgYnV0ZXNba2V5XS5mb3JFYWNoKGEgPT4gYnVmZmVyLnB1c2goYSkpOyAvL0FkZHMgYW4gYXJyYXkgW2tleSwgJzonLCB2YWx1ZSwgJywnXTtcbiAgICAgIGJ1ZmZlci5wdXNoKChpIDwgYWxsLmxlbmd0aCAtIDEpID8gWyd9JywgJywnXSA6ICd9Jyk7XG5cbiAgICB9KTtcblxuICAgIGJ1ZmZlci5wdXNoKCd9Jyk7XG5cbiAgICBidXRlcyA9IHNwcmVhZHMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PlxuICAgICAgY3VycmVudC53cmFwQXR0cmlidXRlcyhwcmV2LCBvKSwgYnVmZmVyKTtcblxuICAgIG5vZGUuYWRkKCdtYWtlLicpLlxuICAgIGFkZChpc0VsZSA/XG4gICAgICBgd2lkZ2V0KCR7dGhpcy5uYW1lfWAgOlxuICAgICAgYG5vZGUoJyR7dGhpcy5uYW1lfScpYCkuXG4gICAgYWRkKCcsJyk7XG5cbiAgICBub2RlLmFkZC5hcHBseShub2RlLCBidWZmZXIpOyAvLyBhZGQgZXZlcnl0aGluZyBpbiB0aGUgYnVmZmVyIGFsbCBhdCBvbmNlLlxuICAgIG5vZGUuYWRkKFsnLCcsICdbJ10pO1xuXG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgYWRkKFsnXScsICcpJ10pO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcblxuIl19