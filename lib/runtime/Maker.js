'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Attributes = require('./Attributes');

var _Attributes2 = _interopRequireDefault(_Attributes);

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Interface for Widgets
 * @interface Widget
 */

/**
 * Interface for objects that create Widgets
 * @interface Factory
 */

/**
 *
 * create the widget
 *
 * @function
 * @name Factory.create
 * @param {object} htmlAttributes A hash of attributes expected to be passed into DOM.
 * @param {object} nsAttributes   A hash of namespaced attributes for framework usage.
 */

/**
 * Maker is used by a wml javascript template to create assets.
 * @param {function} template
 * @param {object} context
 * @todo Clean up relationship between Views and their Makers.
 */
var Maker = function () {
  function Maker(template, context) {
    _classCallCheck(this, Maker);

    this._ids = {};
    this._widgets = [];
    this._template = template;
    this._context = context;
  }

  /**
   * resolve a property access expression to avoid
   * thowing errors if it does not exist.
   * @param {object} head
   * @param {string} path
   */


  _createClass(Maker, [{
    key: 'resolve',
    value: function resolve(head, path) {

      var ret = (0, _propertySeek2.default)(head, path);

      if (ret === undefined || ret === null) ret = '';

      return ret;
    }

    /**
     *@private
     */

  }, {
    key: '_adopt',
    value: function _adopt(child, e) {
      var _this = this;

      if (Array.isArray(child)) return child.forEach(function (innerChild) {
        return _this._adopt(innerChild, e);
      });

      if (child) e.appendChild((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' ? child : document.createTextNode(child || ''));
    }

    /**
     * register a Widget or Node by the specified wml:id
     * @param {string} id
     * @param {Widget|Node} target
     */

  }, {
    key: 'register',
    value: function register(id, target) {

      if (this._ids.hasOwnProperty(id)) throw new Error('Duplicate id \'' + id + '\' detected!');

      this._ids[id] = target;
    }

    /**
     * text creates a DOMTextNode
     * @param {string} value
     */

  }, {
    key: 'text',
    value: function text(value) {

      return document.createTextNode(value || '');
    }

    /**
     * node is called to create a regular DOM node
     * @param {string} tag
     * @param {object} attributes
     * @param {array<string|number|Widget>} children
     */

  }, {
    key: 'node',
    value: function node(tag, attributes, children) {
      var _this2 = this;

      var e = tag === 'fragment' ? document.createDocumentFragment() : document.createElement(tag);

      if (_typeof(attributes.html) === 'object') Object.keys(attributes.html).forEach(function (key) {

        if (typeof attributes.html[key] === 'function') {
          e[key] = attributes.html[key];
        } else {
          e.setAttribute(key, attributes.html[key]);
        }
      });

      children.forEach(function (c) {
        return _this2._adopt(c, e);
      });

      if (attributes.wml) if (attributes.wml.id) this.register(attributes.wml.id, e);

      return e;
    }

    /**
     * widget creates a wml widget.
     * @param {function} Construtor
     * @param {object} attributes
     * @param {array<string|number|Widget>} children
     * @return {Widget}
     */

  }, {
    key: 'widget',
    value: function widget(Constructor, attributes, children) {

      var childs = [];
      var w;

      children.forEach(function (child) {
        return Array.isArray(child) ? childs.push.apply(childs, child) : childs.push(child);
      });

      w = new Constructor(new _Attributes2.default(attributes), childs);

      if (attributes.wml) if (attributes.wml.id) this.register(attributes.wml.id, w);

      this._widgets.push(w);
      return w.render();
    }

    /**
     * $if is called to create an if conditional construct
     * @param {*} predicate
     * @param {function} positive
     * @param {function} negative
     */

  }, {
    key: '$if',
    value: function $if(predicate, positive, negative) {

      return predicate ? positive() : negative();
    }

    /**
     * $for is called to create a for loop construct
     * @param {Iterable} collection
     * @param {function} cb
     */

  }, {
    key: '$for',
    value: function $for(collection, cb) {

      if (Array.isArray(collection)) {

        return collection.map(cb);
      } else if ((typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) === 'object') {

        return Object.keys(collection).map(function (key, i, all) {
          return cb(collection[key], key, all);
        });
      }

      return [];
    }

    /**
     * $switch simulates a switch statement
     * @param {string|number|boolean} value
     * @param {object} cases
     */

  }, {
    key: '$switch',
    value: function $switch(value, cases) {

      var result = cases[value];
      var defaul = cases.default;

      if (result) return result;

      if (defaul) return deaful;
    }

    /**
     * spread a variable into attributes
     * @param {object|array} value
     * @param {object} attrs
     * @param {string} key
     */

  }, {
    key: 'spread',
    value: function spread(value, attrs, key) {

      var target;

      attrs = attrs || Object.create(null);

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') throw new TypeError('Spread values must be an array or object! Got \'' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '\'!');

      if (key !== '') {

        target = (0, _propertySeek2.default)(attrs, key) || Object.create(null);
        Object.keys(value).forEach(function (k) {
          return target[k] = value[k];
        });
        _propertySeek2.default.set(attrs, key, target);
      } else {

        Object.keys(value).forEach(function (k) {
          return attrs[k] = value[k];
        });
      }

      return attrs;
    }

    /**
     * findById returns a widget from the internal list.
     * @param {string} id
     * @return {object}
     */

  }, {
    key: 'findById',
    value: function findById(id) {

      return this._ids[id] ? this._ids[id] : null;
    }

    /**
     * render the DOM.
     * @return {DOMTree}
     */

  }, {
    key: 'render',
    value: function render() {

      var tree = null;

      this._ids = {};
      this._widgets.forEach(function (w) {
        return w.onRemoved();
      });
      this._widgets = [];

      tree = this._template.call(this._context, this);
      this._ids.root = this._ids.root ? this._ids.root : tree;
      this._widgets.forEach(function (w) {
        return w.onRendered();
      });

      return tree;
    }
  }]);

  return Maker;
}();

exports.default = Maker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbIk1ha2VyIiwidGVtcGxhdGUiLCJjb250ZXh0IiwiX2lkcyIsIl93aWRnZXRzIiwiX3RlbXBsYXRlIiwiX2NvbnRleHQiLCJoZWFkIiwicGF0aCIsInJldCIsInVuZGVmaW5lZCIsImNoaWxkIiwiZSIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJfYWRvcHQiLCJpbm5lckNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaWQiLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidmFsdWUiLCJ0YWciLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsImh0bWwiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiYyIsIndtbCIsInJlZ2lzdGVyIiwiQ29uc3RydWN0b3IiLCJjaGlsZHMiLCJ3IiwicHVzaCIsImFwcGx5IiwicmVuZGVyIiwicHJlZGljYXRlIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsImNvbGxlY3Rpb24iLCJjYiIsIm1hcCIsImkiLCJhbGwiLCJjYXNlcyIsInJlc3VsdCIsImRlZmF1bCIsImRlZmF1bHQiLCJkZWFmdWwiLCJhdHRycyIsImNyZWF0ZSIsIlR5cGVFcnJvciIsImsiLCJzZXQiLCJ0cmVlIiwib25SZW1vdmVkIiwiY2FsbCIsInJvb3QiLCJvblJlbmRlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7SUFNTUEsSztBQUVKLGlCQUFZQyxRQUFaLEVBQXNCQyxPQUF0QixFQUErQjtBQUFBOztBQUU3QixTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFL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QyxJQUFuQyxDQUFQO0FBQ0EsV0FBS0gsSUFBTCxDQUFVK0QsSUFBVixHQUFrQixLQUFLL0QsSUFBTCxDQUFVK0QsSUFBWCxHQUFrQixLQUFLL0QsSUFBTCxDQUFVK0QsSUFBNUIsR0FBaUNILElBQWxEO0FBQ0EsV0FBSzNELFFBQUwsQ0FBY1csT0FBZCxDQUFzQjtBQUFBLGVBQUswQixFQUFFMEIsVUFBRixFQUFMO0FBQUEsT0FBdEI7O0FBRUEsYUFBT0osSUFBUDtBQUVEOzs7Ozs7a0JBSVkvRCxLIiwiZmlsZSI6Ik1ha2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0dHJpYnV0ZXMgZnJvbSAnLi9BdHRyaWJ1dGVzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbi8qKlxuICogSW50ZXJmYWNlIGZvciBXaWRnZXRzXG4gKiBAaW50ZXJmYWNlIFdpZGdldFxuICovXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvYmplY3RzIHRoYXQgY3JlYXRlIFdpZGdldHNcbiAqIEBpbnRlcmZhY2UgRmFjdG9yeVxuICovXG5cbi8qKlxuICpcbiAqIGNyZWF0ZSB0aGUgd2lkZ2V0XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAbmFtZSBGYWN0b3J5LmNyZWF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGh0bWxBdHRyaWJ1dGVzIEEgaGFzaCBvZiBhdHRyaWJ1dGVzIGV4cGVjdGVkIHRvIGJlIHBhc3NlZCBpbnRvIERPTS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuc0F0dHJpYnV0ZXMgICBBIGhhc2ggb2YgbmFtZXNwYWNlZCBhdHRyaWJ1dGVzIGZvciBmcmFtZXdvcmsgdXNhZ2UuXG4gKi9cblxuXG4vKipcbiAqIE1ha2VyIGlzIHVzZWQgYnkgYSB3bWwgamF2YXNjcmlwdCB0ZW1wbGF0ZSB0byBjcmVhdGUgYXNzZXRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKiBAdG9kbyBDbGVhbiB1cCByZWxhdGlvbnNoaXAgYmV0d2VlbiBWaWV3cyBhbmQgdGhlaXIgTWFrZXJzLlxuICovXG5jbGFzcyBNYWtlciB7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgIHRoaXMuX2lkcyA9IHt9O1xuICAgIHRoaXMuX3dpZGdldHMgPSBbXTtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuXG4gIH1cblxuICAvKipcbiAgICogcmVzb2x2ZSBhIHByb3BlcnR5IGFjY2VzcyBleHByZXNzaW9uIHRvIGF2b2lkXG4gICAqIHRob3dpbmcgZXJyb3JzIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gaGVhZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKi9cbiAgcmVzb2x2ZShoZWFkLCBwYXRoKSB7XG5cbiAgICB2YXIgcmV0ID0gcHJvcGVydHkoaGVhZCwgcGF0aCk7XG5cbiAgICBpZiAoKHJldCA9PT0gdW5kZWZpbmVkKSB8fCAocmV0ID09PSBudWxsKSlcbiAgICAgIHJldCA9ICcnO1xuXG4gICAgcmV0dXJuIHJldDtcblxuICB9XG5cbiAgLyoqXG4gICAqQHByaXZhdGVcbiAgICovXG4gIF9hZG9wdChjaGlsZCwgZSkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKVxuICAgICAgcmV0dXJuIGNoaWxkLmZvckVhY2goaW5uZXJDaGlsZCA9PiB0aGlzLl9hZG9wdChpbm5lckNoaWxkLCBlKSk7XG5cbiAgICBpZiAoY2hpbGQpXG4gICAgICBlLmFwcGVuZENoaWxkKFxuICAgICAgICAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JykgP1xuICAgICAgICBjaGlsZCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkIHx8ICcnKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciBhIFdpZGdldCBvciBOb2RlIGJ5IHRoZSBzcGVjaWZpZWQgd21sOmlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAcGFyYW0ge1dpZGdldHxOb2RlfSB0YXJnZXRcbiAgICovXG4gIHJlZ2lzdGVyKGlkLCB0YXJnZXQpIHtcblxuICAgIGlmICh0aGlzLl9pZHMuaGFzT3duUHJvcGVydHkoaWQpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgaWQgJyR7aWR9JyBkZXRlY3RlZCFgKTtcblxuICAgIHRoaXMuX2lkc1tpZF0gPSB0YXJnZXQ7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZXh0IGNyZWF0ZXMgYSBET01UZXh0Tm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHRleHQodmFsdWUpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSB8fCAnJyk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBub2RlIGlzIGNhbGxlZCB0byBjcmVhdGUgYSByZWd1bGFyIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcbiAgICogQHBhcmFtIHthcnJheTxzdHJpbmd8bnVtYmVyfFdpZGdldD59IGNoaWxkcmVuXG4gICAqL1xuICBub2RlKHRhZywgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblxuICAgIHZhciBlID0gKHRhZyA9PT0gJ2ZyYWdtZW50JykgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuaHRtbCA9PT0gJ29iamVjdCcpXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLmh0bWwpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuaHRtbFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZVtrZXldID0gYXR0cmlidXRlcy5odG1sW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzLmh0bWxba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IHRoaXMuX2Fkb3B0KGMsIGUpKTtcblxuICAgIGlmIChhdHRyaWJ1dGVzLndtbClcbiAgICAgIGlmIChhdHRyaWJ1dGVzLndtbC5pZClcbiAgICAgICAgdGhpcy5yZWdpc3RlcihhdHRyaWJ1dGVzLndtbC5pZCwgZSk7XG5cbiAgICByZXR1cm4gZTtcblxuICB9XG5cbiAgLyoqXG4gICAqIHdpZGdldCBjcmVhdGVzIGEgd21sIHdpZGdldC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gQ29uc3RydXRvclxuICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlc1xuICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8V2lkZ2V0Pn0gY2hpbGRyZW5cbiAgICogQHJldHVybiB7V2lkZ2V0fVxuICAgKi9cbiAgd2lkZ2V0KENvbnN0cnVjdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgdmFyIGNoaWxkcyA9IFtdO1xuICAgIHZhciB3O1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBBcnJheS5pc0FycmF5KGNoaWxkKSA/XG4gICAgICBjaGlsZHMucHVzaC5hcHBseShjaGlsZHMsIGNoaWxkKSA6IGNoaWxkcy5wdXNoKGNoaWxkKSk7XG5cbiAgICB3ID0gbmV3IENvbnN0cnVjdG9yKG5ldyBBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLCBjaGlsZHMpO1xuXG4gICAgaWYgKGF0dHJpYnV0ZXMud21sKVxuICAgICAgaWYgKGF0dHJpYnV0ZXMud21sLmlkKVxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGF0dHJpYnV0ZXMud21sLmlkLCB3KTtcblxuICAgIHRoaXMuX3dpZGdldHMucHVzaCh3KTtcbiAgICByZXR1cm4gdy5yZW5kZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqICRpZiBpcyBjYWxsZWQgdG8gY3JlYXRlIGFuIGlmIGNvbmRpdGlvbmFsIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0geyp9IHByZWRpY2F0ZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwb3NpdGl2ZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBuZWdhdGl2ZVxuICAgKi9cbiAgJGlmKHByZWRpY2F0ZSwgcG9zaXRpdmUsIG5lZ2F0aXZlKSB7XG5cbiAgICByZXR1cm4gKHByZWRpY2F0ZSkgPyBwb3NpdGl2ZSgpIDogbmVnYXRpdmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqICRmb3IgaXMgY2FsbGVkIHRvIGNyZWF0ZSBhIGZvciBsb29wIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge0l0ZXJhYmxlfSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gICAqL1xuICAkZm9yKGNvbGxlY3Rpb24sIGNiKSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoY2IpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLm1hcCgoa2V5LCBpLCBhbGwpID0+IGNiKGNvbGxlY3Rpb25ba2V5XSwga2V5LCBhbGwpKTtcblxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiAkc3dpdGNoIHNpbXVsYXRlcyBhIHN3aXRjaCBzdGF0ZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59IHZhbHVlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjYXNlc1xuICAgKi9cbiAgJHN3aXRjaCh2YWx1ZSwgY2FzZXMpIHtcblxuICAgIHZhciByZXN1bHQgPSBjYXNlc1t2YWx1ZV07XG4gICAgdmFyIGRlZmF1bCA9IGNhc2VzLmRlZmF1bHQ7XG5cbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG4gICAgaWYgKGRlZmF1bCkgcmV0dXJuIGRlYWZ1bDtcblxuICB9XG5cbiAgLyoqXG4gICAqIHNwcmVhZCBhIHZhcmlhYmxlIGludG8gYXR0cmlidXRlc1xuICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gdmFsdWVcbiAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICovXG4gIHNwcmVhZCh2YWx1ZSwgYXR0cnMsIGtleSkge1xuXG4gICAgdmFyIHRhcmdldDtcblxuICAgIGF0dHJzID0gYXR0cnMgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU3ByZWFkIHZhbHVlcyBtdXN0IGJlIGFuIGFycmF5IG9yIG9iamVjdCEgR290ICcke3R5cGVvZiB2YWx1ZX0nIWApO1xuXG4gICAgaWYgKGtleSAhPT0gJycpIHtcblxuICAgICAgdGFyZ2V0ID0gcHJvcGVydHkoYXR0cnMsIGtleSkgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGsgPT4gdGFyZ2V0W2tdID0gdmFsdWVba10pO1xuICAgICAgcHJvcGVydHkuc2V0KGF0dHJzLCBrZXksIHRhcmdldCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrID0+IGF0dHJzW2tdID0gdmFsdWVba10pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuXG4gIH1cblxuICAvKipcbiAgICogZmluZEJ5SWQgcmV0dXJucyBhIHdpZGdldCBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZmluZEJ5SWQoaWQpIHtcblxuICAgIHJldHVybiAodGhpcy5faWRzW2lkXSkgPyB0aGlzLl9pZHNbaWRdIDogbnVsbDtcblxuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtET01UcmVlfVxuICAgKi9cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRyZWUgPSBudWxsO1xuXG4gICAgdGhpcy5faWRzID0ge307XG4gICAgdGhpcy5fd2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5vblJlbW92ZWQoKSk7XG4gICAgdGhpcy5fd2lkZ2V0cyA9IFtdO1xuXG4gICAgdHJlZSA9IHRoaXMuX3RlbXBsYXRlLmNhbGwodGhpcy5fY29udGV4dCwgdGhpcyk7XG4gICAgdGhpcy5faWRzLnJvb3QgPSAodGhpcy5faWRzLnJvb3QpPyB0aGlzLl9pZHMucm9vdDp0cmVlO1xuICAgIHRoaXMuX3dpZGdldHMuZm9yRWFjaCh3ID0+IHcub25SZW5kZXJlZCgpKTtcblxuICAgIHJldHVybiB0cmVlO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWtlclxuXG4iXX0=