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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbIk1ha2VyIiwidGVtcGxhdGUiLCJjb250ZXh0IiwiX2lkcyIsIl93aWRnZXRzIiwiX3RlbXBsYXRlIiwiX2NvbnRleHQiLCJoZWFkIiwicGF0aCIsInJldCIsInVuZGVmaW5lZCIsImNoaWxkIiwiZSIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJfYWRvcHQiLCJpbm5lckNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaWQiLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidmFsdWUiLCJ0YWciLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsImh0bWwiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiYyIsIndtbCIsInJlZ2lzdGVyIiwiQ29uc3RydWN0b3IiLCJjaGlsZHMiLCJ3IiwicHVzaCIsImFwcGx5IiwicmVuZGVyIiwicHJlZGljYXRlIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsImNvbGxlY3Rpb24iLCJjYiIsIm1hcCIsImkiLCJhbGwiLCJjYXNlcyIsInJlc3VsdCIsImRlZmF1bCIsImRlZmF1bHQiLCJkZWFmdWwiLCJhdHRycyIsImNyZWF0ZSIsIlR5cGVFcnJvciIsImsiLCJzZXQiLCJ0cmVlIiwib25SZW1vdmVkIiwiY2FsbCIsIm9uUmVuZGVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUNBOzs7OztBQUtBOzs7OztBQUtBOzs7Ozs7Ozs7O0FBV0E7Ozs7OztJQU1NQSxLO0FBRUYsbUJBQVlDLFFBQVosRUFBc0JDLE9BQXRCLEVBQStCO0FBQUE7O0FBRTNCLGFBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUJKLFFBQWpCO0FBQ0EsYUFBS0ssUUFBTCxHQUFnQkosT0FBaEI7QUFFSDs7QUFFRDs7Ozs7Ozs7OztnQ0FNUUssSSxFQUFNQyxJLEVBQU07O0FBRWhCLGdCQUFJQyxNQUFNLDRCQUFTRixJQUFULEVBQWVDLElBQWYsQ0FBVjs7QUFFQSxnQkFBS0MsUUFBUUMsU0FBVCxJQUF3QkQsUUFBUSxJQUFwQyxFQUNJQSxNQUFNLEVBQU47O0FBRUosbUJBQU9BLEdBQVA7QUFFSDs7QUFFRDs7Ozs7OytCQUdPRSxLLEVBQU9DLEMsRUFBRztBQUFBOztBQUViLGdCQUFJQyxNQUFNQyxPQUFOLENBQWNILEtBQWQsQ0FBSixFQUNJLE9BQU9BLE1BQU1JLE9BQU4sQ0FBYztBQUFBLHVCQUFjLE1BQUtDLE1BQUwsQ0FBWUMsVUFBWixFQUF3QkwsQ0FBeEIsQ0FBZDtBQUFBLGFBQWQsQ0FBUDs7QUFFSixnQkFBSUQsS0FBSixFQUNJQyxFQUFFTSxXQUFGLENBQ0ssUUFBT1AsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFsQixHQUNBQSxLQURBLEdBQ1FRLFNBQVNDLGNBQVQsQ0FBd0JULFNBQVMsRUFBakMsQ0FGWjtBQUlQOztBQUVEOzs7Ozs7OztpQ0FLU1UsRSxFQUFJQyxNLEVBQVE7O0FBRWpCLGdCQUFJLEtBQUtuQixJQUFMLENBQVVvQixjQUFWLENBQXlCRixFQUF6QixDQUFKLEVBQ0ksTUFBTSxJQUFJRyxLQUFKLHFCQUEyQkgsRUFBM0Isa0JBQU47O0FBRUosaUJBQUtsQixJQUFMLENBQVVrQixFQUFWLElBQWdCQyxNQUFoQjtBQUVIOztBQUVEOzs7Ozs7OzZCQUlLRyxLLEVBQU87O0FBRVIsbUJBQU9OLFNBQVNDLGNBQVQsQ0FBd0JLLFNBQVMsRUFBakMsQ0FBUDtBQUVIOztBQUVEOzs7Ozs7Ozs7NkJBTUtDLEcsRUFBS0MsVSxFQUFZQyxRLEVBQVU7QUFBQTs7QUFFNUIsZ0JBQUloQixJQUFLYyxRQUFRLFVBQVQsR0FBdUJQLFNBQVNVLHNCQUFULEVBQXZCLEdBQTJEVixTQUFTVyxhQUFULENBQXVCSixHQUF2QixDQUFuRTs7QUFFQSxnQkFBSSxRQUFPQyxXQUFXSSxJQUFsQixNQUEyQixRQUEvQixFQUNJQyxPQUFPQyxJQUFQLENBQVlOLFdBQVdJLElBQXZCLEVBQTZCaEIsT0FBN0IsQ0FBcUMsZUFBTzs7QUFFeEMsb0JBQUksT0FBT1ksV0FBV0ksSUFBWCxDQUFnQkcsR0FBaEIsQ0FBUCxLQUFnQyxVQUFwQyxFQUFnRDtBQUM1Q3RCLHNCQUFFc0IsR0FBRixJQUFTUCxXQUFXSSxJQUFYLENBQWdCRyxHQUFoQixDQUFUO0FBQ0gsaUJBRkQsTUFFTztBQUNIdEIsc0JBQUV1QixZQUFGLENBQWVELEdBQWYsRUFBb0JQLFdBQVdJLElBQVgsQ0FBZ0JHLEdBQWhCLENBQXBCO0FBQ0g7QUFDSixhQVBEOztBQVNKTixxQkFBU2IsT0FBVCxDQUFpQjtBQUFBLHVCQUFLLE9BQUtDLE1BQUwsQ0FBWW9CLENBQVosRUFBZXhCLENBQWYsQ0FBTDtBQUFBLGFBQWpCOztBQUVBLGdCQUFJZSxXQUFXVSxHQUFmLEVBQ0ksSUFBSVYsV0FBV1UsR0FBWCxDQUFlaEIsRUFBbkIsRUFDSSxLQUFLaUIsUUFBTCxDQUFjWCxXQUFXVSxHQUFYLENBQWVoQixFQUE3QixFQUFpQ1QsQ0FBakM7O0FBRVIsbUJBQU9BLENBQVA7QUFFSDs7QUFFRDs7Ozs7Ozs7OzsrQkFPTzJCLFcsRUFBYVosVSxFQUFZQyxRLEVBQVU7O0FBRXRDLGdCQUFJWSxTQUFTLEVBQWI7QUFDQSxnQkFBSUMsQ0FBSjs7QUFFQWIscUJBQVNiLE9BQVQsQ0FBaUI7QUFBQSx1QkFBU0YsTUFBTUMsT0FBTixDQUFjSCxLQUFkLElBQ3RCNkIsT0FBT0UsSUFBUCxDQUFZQyxLQUFaLENBQWtCSCxNQUFsQixFQUEwQjdCLEtBQTFCLENBRHNCLEdBQ2E2QixPQUFPRSxJQUFQLENBQVkvQixLQUFaLENBRHRCO0FBQUEsYUFBakI7O0FBR0E4QixnQkFBSSxJQUFJRixXQUFKLENBQWdCLHlCQUFlWixVQUFmLENBQWhCLEVBQTRDYSxNQUE1QyxDQUFKOztBQUVBLGdCQUFJYixXQUFXVSxHQUFmLEVBQ0ksSUFBSVYsV0FBV1UsR0FBWCxDQUFlaEIsRUFBbkIsRUFDSSxLQUFLaUIsUUFBTCxDQUFjWCxXQUFXVSxHQUFYLENBQWVoQixFQUE3QixFQUFpQ29CLENBQWpDOztBQUVSLGlCQUFLckMsUUFBTCxDQUFjc0MsSUFBZCxDQUFtQkQsQ0FBbkI7QUFDQSxtQkFBT0EsRUFBRUcsTUFBRixFQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7Ozs0QkFNSUMsUyxFQUFXQyxRLEVBQVVDLFEsRUFBVTs7QUFFL0IsbUJBQVFGLFNBQUQsR0FBY0MsVUFBZCxHQUEyQkMsVUFBbEM7QUFFSDs7QUFFRDs7Ozs7Ozs7NkJBS0tDLFUsRUFBWUMsRSxFQUFJOztBQUVqQixnQkFBSXBDLE1BQU1DLE9BQU4sQ0FBY2tDLFVBQWQsQ0FBSixFQUErQjs7QUFFM0IsdUJBQU9BLFdBQVdFLEdBQVgsQ0FBZUQsRUFBZixDQUFQO0FBRUgsYUFKRCxNQUlPLElBQUksUUFBT0QsVUFBUCx5Q0FBT0EsVUFBUCxPQUFzQixRQUExQixFQUFvQzs7QUFFdkMsdUJBQU9oQixPQUFPQyxJQUFQLENBQVllLFVBQVosRUFBd0JFLEdBQXhCLENBQTRCLFVBQUNoQixHQUFELEVBQU1pQixDQUFOLEVBQVNDLEdBQVQ7QUFBQSwyQkFBaUJILEdBQUdELFdBQVdkLEdBQVgsQ0FBSCxFQUFvQkEsR0FBcEIsRUFBeUJrQixHQUF6QixDQUFqQjtBQUFBLGlCQUE1QixDQUFQO0FBRUg7O0FBRUQsbUJBQU8sRUFBUDtBQUNIOztBQUVEOzs7Ozs7OztnQ0FLUTNCLEssRUFBTzRCLEssRUFBTzs7QUFFbEIsZ0JBQUlDLFNBQVNELE1BQU01QixLQUFOLENBQWI7QUFDQSxnQkFBSThCLFNBQVNGLE1BQU1HLE9BQW5COztBQUVBLGdCQUFJRixNQUFKLEVBQVksT0FBT0EsTUFBUDs7QUFFWixnQkFBSUMsTUFBSixFQUFZLE9BQU9FLE1BQVA7QUFFZjs7QUFFRDs7Ozs7Ozs7OytCQU1PaEMsSyxFQUFPaUMsSyxFQUFPeEIsRyxFQUFLOztBQUV4QixnQkFBSVosTUFBSjs7QUFFRW9DLG9CQUFRQSxTQUFTMUIsT0FBTzJCLE1BQVAsQ0FBYyxJQUFkLENBQWpCOztBQUVBLGdCQUFJLFFBQU9sQyxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQXJCLEVBQ0ksTUFBTSxJQUFJbUMsU0FBSiw4REFBdUVuQyxLQUF2RSx5Q0FBdUVBLEtBQXZFLFdBQU47O0FBRUosZ0JBQUdTLFFBQVEsRUFBWCxFQUFlOztBQUViWix5QkFBUyw0QkFBU29DLEtBQVQsRUFBZ0J4QixHQUFoQixLQUF3QkYsT0FBTzJCLE1BQVAsQ0FBYyxJQUFkLENBQWpDO0FBQ0EzQix1QkFBT0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CVixPQUFuQixDQUEyQjtBQUFBLDJCQUFHTyxPQUFPdUMsQ0FBUCxJQUFZcEMsTUFBTW9DLENBQU4sQ0FBZjtBQUFBLGlCQUEzQjtBQUNBLHVDQUFTQyxHQUFULENBQWFKLEtBQWIsRUFBb0J4QixHQUFwQixFQUEwQlosTUFBMUI7QUFFRCxhQU5ELE1BTU07O0FBRUpVLHVCQUFPQyxJQUFQLENBQVlSLEtBQVosRUFBbUJWLE9BQW5CLENBQTJCO0FBQUEsMkJBQUcyQyxNQUFNRyxDQUFOLElBQVdwQyxNQUFNb0MsQ0FBTixDQUFkO0FBQUEsaUJBQTNCO0FBRUQ7O0FBRUQsbUJBQU9ILEtBQVA7QUFFSDs7QUFFRDs7Ozs7Ozs7aUNBS1NyQyxFLEVBQUk7O0FBRVQsbUJBQVEsS0FBS2xCLElBQUwsQ0FBVWtCLEVBQVYsQ0FBRCxHQUFrQixLQUFLbEIsSUFBTCxDQUFVa0IsRUFBVixDQUFsQixHQUFrQyxJQUF6QztBQUVIOztBQUVEOzs7Ozs7O2lDQUlTOztBQUVMLGdCQUFJMEMsT0FBTyxJQUFYOztBQUVBLGlCQUFLNUQsSUFBTCxHQUFZLEVBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFjVyxPQUFkLENBQXNCO0FBQUEsdUJBQUswQixFQUFFdUIsU0FBRixFQUFMO0FBQUEsYUFBdEI7QUFDQSxpQkFBSzVELFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEyRCxtQkFBTyxLQUFLMUQsU0FBTCxDQUFlNEQsSUFBZixDQUFvQixLQUFLM0QsUUFBekIsRUFBbUMsSUFBbkMsQ0FBUDs7QUFFQSxpQkFBS0YsUUFBTCxDQUFjVyxPQUFkLENBQXNCO0FBQUEsdUJBQUswQixFQUFFeUIsVUFBRixFQUFMO0FBQUEsYUFBdEI7O0FBRUEsbUJBQU9ILElBQVA7QUFFSDs7Ozs7O2tCQUlVL0QsSyIsImZpbGUiOiJNYWtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdHRyaWJ1dGVzIGZyb20gJy4vQXR0cmlidXRlcyc7XG5pbXBvcnQgcHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgV2lkZ2V0c1xuICogQGludGVyZmFjZSBXaWRnZXRcbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNyZWF0ZSBXaWRnZXRzXG4gKiBAaW50ZXJmYWNlIEZhY3RvcnlcbiAqL1xuXG4vKipcbiAqIFxuICogY3JlYXRlIHRoZSB3aWRnZXRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBuYW1lIEZhY3RvcnkuY3JlYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gaHRtbEF0dHJpYnV0ZXMgQSBoYXNoIG9mIGF0dHJpYnV0ZXMgZXhwZWN0ZWQgdG8gYmUgcGFzc2VkIGludG8gRE9NLlxuICogQHBhcmFtIHtvYmplY3R9IG5zQXR0cmlidXRlcyAgIEEgaGFzaCBvZiBuYW1lc3BhY2VkIGF0dHJpYnV0ZXMgZm9yIGZyYW1ld29yayB1c2FnZS5cbiAqL1xuXG5cbi8qKlxuICogTWFrZXIgaXMgdXNlZCBieSBhIHdtbCBqYXZhc2NyaXB0IHRlbXBsYXRlIHRvIGNyZWF0ZSBhc3NldHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFxuICogQHRvZG8gQ2xlYW4gdXAgcmVsYXRpb25zaGlwIGJldHdlZW4gVmlld3MgYW5kIHRoZWlyIE1ha2Vycy5cbiAqL1xuY2xhc3MgTWFrZXIge1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLl9pZHMgPSB7fTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlc29sdmUgYSBwcm9wZXJ0eSBhY2Nlc3MgZXhwcmVzc2lvbiB0byBhdm9pZFxuICAgICAqIHRob3dpbmcgZXJyb3JzIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoZWFkIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICAgICAqL1xuICAgIHJlc29sdmUoaGVhZCwgcGF0aCkge1xuXG4gICAgICAgIHZhciByZXQgPSBwcm9wZXJ0eShoZWFkLCBwYXRoKTtcblxuICAgICAgICBpZiAoKHJldCA9PT0gdW5kZWZpbmVkKSB8fCAocmV0ID09PSBudWxsKSlcbiAgICAgICAgICAgIHJldCA9ICcnO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBwcml2YXRlXG4gICAgICovXG4gICAgX2Fkb3B0KGNoaWxkLCBlKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmZvckVhY2goaW5uZXJDaGlsZCA9PiB0aGlzLl9hZG9wdChpbm5lckNoaWxkLCBlKSk7XG5cbiAgICAgICAgaWYgKGNoaWxkKVxuICAgICAgICAgICAgZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JykgP1xuICAgICAgICAgICAgICAgIGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQgfHwgJycpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlZ2lzdGVyIGEgV2lkZ2V0IG9yIE5vZGUgYnkgdGhlIHNwZWNpZmllZCB3bWw6aWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtXaWRnZXR8Tm9kZX0gdGFyZ2V0XG4gICAgICovXG4gICAgcmVnaXN0ZXIoaWQsIHRhcmdldCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9pZHMuaGFzT3duUHJvcGVydHkoaWQpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgaWQgJyR7aWR9JyBkZXRlY3RlZCFgKTtcblxuICAgICAgICB0aGlzLl9pZHNbaWRdID0gdGFyZ2V0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGV4dCBjcmVhdGVzIGEgRE9NVGV4dE5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gICAgICovXG4gICAgdGV4dCh2YWx1ZSkge1xuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSB8fCAnJyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2RlIGlzIGNhbGxlZCB0byBjcmVhdGUgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8V2lkZ2V0Pn0gY2hpbGRyZW4gXG4gICAgICovXG4gICAgbm9kZSh0YWcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSB7XG5cbiAgICAgICAgdmFyIGUgPSAodGFnID09PSAnZnJhZ21lbnQnKSA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuaHRtbCA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLmh0bWwpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5odG1sW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZVtrZXldID0gYXR0cmlidXRlcy5odG1sW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzLmh0bWxba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IHRoaXMuX2Fkb3B0KGMsIGUpKTtcblxuICAgICAgICBpZiAoYXR0cmlidXRlcy53bWwpXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy53bWwuaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihhdHRyaWJ1dGVzLndtbC5pZCwgZSk7XG5cbiAgICAgICAgcmV0dXJuIGU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3aWRnZXQgY3JlYXRlcyBhIHdtbCB3aWRnZXQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gQ29uc3RydXRvciBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8V2lkZ2V0Pn0gY2hpbGRyZW4gXG4gICAgICogQHJldHVybiB7V2lkZ2V0fVxuICAgICAqL1xuICAgIHdpZGdldChDb25zdHJ1Y3RvciwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblxuICAgICAgICB2YXIgY2hpbGRzID0gW107XG4gICAgICAgIHZhciB3O1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gQXJyYXkuaXNBcnJheShjaGlsZCkgP1xuICAgICAgICAgICAgY2hpbGRzLnB1c2guYXBwbHkoY2hpbGRzLCBjaGlsZCkgOiBjaGlsZHMucHVzaChjaGlsZCkpO1xuXG4gICAgICAgIHcgPSBuZXcgQ29uc3RydWN0b3IobmV3IEF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIGNoaWxkcyk7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMud21sKVxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMud21sLmlkKVxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoYXR0cmlidXRlcy53bWwuaWQsIHcpO1xuXG4gICAgICAgIHRoaXMuX3dpZGdldHMucHVzaCh3KTtcbiAgICAgICAgcmV0dXJuIHcucmVuZGVyKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAkaWYgaXMgY2FsbGVkIHRvIGNyZWF0ZSBhbiBpZiBjb25kaXRpb25hbCBjb25zdHJ1Y3RcbiAgICAgKiBAcGFyYW0geyp9IHByZWRpY2F0ZSBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwb3NpdGl2ZSBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBuZWdhdGl2ZSBcbiAgICAgKi9cbiAgICAkaWYocHJlZGljYXRlLCBwb3NpdGl2ZSwgbmVnYXRpdmUpIHtcblxuICAgICAgICByZXR1cm4gKHByZWRpY2F0ZSkgPyBwb3NpdGl2ZSgpIDogbmVnYXRpdmUoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICRmb3IgaXMgY2FsbGVkIHRvIGNyZWF0ZSBhIGZvciBsb29wIGNvbnN0cnVjdFxuICAgICAqIEBwYXJhbSB7SXRlcmFibGV9IGNvbGxlY3Rpb24gXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgXG4gICAgICovXG4gICAgJGZvcihjb2xsZWN0aW9uLCBjYikge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcChjYik7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLm1hcCgoa2V5LCBpLCBhbGwpID0+IGNiKGNvbGxlY3Rpb25ba2V5XSwga2V5LCBhbGwpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICRzd2l0Y2ggc2ltdWxhdGVzIGEgc3dpdGNoIHN0YXRlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSB2YWx1ZSBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY2FzZXMgXG4gICAgICovXG4gICAgJHN3aXRjaCh2YWx1ZSwgY2FzZXMpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZXNbdmFsdWVdO1xuICAgICAgICB2YXIgZGVmYXVsID0gY2FzZXMuZGVmYXVsdDtcblxuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIGlmIChkZWZhdWwpIHJldHVybiBkZWFmdWw7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzcHJlYWQgYSB2YXJpYWJsZSBpbnRvIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gdmFsdWUgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJzIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgXG4gICAgICovXG4gICAgc3ByZWFkKHZhbHVlLCBhdHRycywga2V5KSB7XG5cbiAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgYXR0cnMgPSBhdHRycyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU3ByZWFkIHZhbHVlcyBtdXN0IGJlIGFuIGFycmF5IG9yIG9iamVjdCEgR290ICcke3R5cGVvZiB2YWx1ZX0nIWApO1xuXG4gICAgICAgIGlmKGtleSAhPT0gJycpIHtcblxuICAgICAgICAgIHRhcmdldCA9IHByb3BlcnR5KGF0dHJzLCBrZXkpIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goaz0+dGFyZ2V0W2tdID0gdmFsdWVba10pO1xuICAgICAgICAgIHByb3BlcnR5LnNldChhdHRycywga2V5LCAgdGFyZ2V0KTtcblxuICAgICAgICB9ZWxzZSB7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrPT5hdHRyc1trXSA9IHZhbHVlW2tdKTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXR0cnM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXR1cm5zIGEgd2lkZ2V0IGZyb20gdGhlIGludGVybmFsIGxpc3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5faWRzW2lkXSkgPyB0aGlzLl9pZHNbaWRdIDogbnVsbDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbmRlciB0aGUgRE9NLlxuICAgICAqIEByZXR1cm4ge0RPTVRyZWV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB0cmVlID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9pZHMgPSB7fTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5vblJlbW92ZWQoKSk7XG4gICAgICAgIHRoaXMuX3dpZGdldHMgPSBbXTtcblxuICAgICAgICB0cmVlID0gdGhpcy5fdGVtcGxhdGUuY2FsbCh0aGlzLl9jb250ZXh0LCB0aGlzKTtcblxuICAgICAgICB0aGlzLl93aWRnZXRzLmZvckVhY2godyA9PiB3Lm9uUmVuZGVyZWQoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRyZWU7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZXJcbiJdfQ==