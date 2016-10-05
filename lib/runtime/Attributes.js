'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Attributes provides an API for reading the 
 * attributes supplied to an Element.
 * @param {object} attrs 
 */
var Attributes = function () {
    function Attributes(attrs) {
        _classCallCheck(this, Attributes);

        this._attrs = attrs;
    }

    _createClass(Attributes, [{
        key: 'read',


        /**
         * read a value form the internal list.
         * @param {string} path 
         * @param {*} defaultValue - This value is returned if the value is not set.
         */
        value: function read(path, defaultValue) {

            var ret = (0, _propertySeek2.default)(this._attrs, path.split(':').join('.'));

            defaultValue = Attributes.isset(defaultValue) ? defaultValue : '';

            if (!Attributes.isset(ret)) return defaultValue;

            return ret;
        }

        /**
         * require is like read but throws an Error if the value is not supplied.
         * @param {string} path 
         * @returns {*}
         */

    }, {
        key: 'require',
        value: function require(path) {

            var ret = this.read(path);

            if (!Attributes.isset(ret)) throw new ReferenceError(path + ' is required!');

            return ret;
        }

        /**
         * requireArray requires the value to be an array, if no 
         * value is read then default is provided.
         * @param {string} path 
         * @param {*} defaultValue 
         */

    }, {
        key: 'requireArray',
        value: function requireArray(path, defaultValue) {

            var ret = this.read(path);

            if (!Attributes.isset(ret)) {

                if (Attributes.isset(defaultValue)) return defaultValue;

                throw new ReferenceError(path + ' is required!');
            } else {

                if (Array.isArray(ret)) return ret;

                throw new TypeError(path + ' must be an array got ' + (typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) + '!');
            }
        }
    }], [{
        key: 'isset',
        value: function isset(value) {

            return [null, undefined].indexOf(value) < 0;
        }
    }]);

    return Attributes;
}();

exports.default = Attributes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL0F0dHJpYnV0ZXMuanMiXSwibmFtZXMiOlsiQXR0cmlidXRlcyIsImF0dHJzIiwiX2F0dHJzIiwicGF0aCIsImRlZmF1bHRWYWx1ZSIsInJldCIsInNwbGl0Iiwiam9pbiIsImlzc2V0IiwicmVhZCIsIlJlZmVyZW5jZUVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLFU7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUVmLGFBQUtDLE1BQUwsR0FBY0QsS0FBZDtBQUVIOzs7Ozs7QUFRRDs7Ozs7NkJBS0tFLEksRUFBTUMsWSxFQUFjOztBQUVyQixnQkFBSUMsTUFBTSw0QkFBUyxLQUFLSCxNQUFkLEVBQXNCQyxLQUFLRyxLQUFMLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBdEIsQ0FBVjs7QUFFQUgsMkJBQWVKLFdBQVdRLEtBQVgsQ0FBaUJKLFlBQWpCLElBQWdDQSxZQUFoQyxHQUErQyxFQUE5RDs7QUFFQSxnQkFBRyxDQUFDSixXQUFXUSxLQUFYLENBQWlCSCxHQUFqQixDQUFKLEVBQ0ksT0FBT0QsWUFBUDs7QUFFSixtQkFBT0MsR0FBUDtBQUVIOztBQUVEOzs7Ozs7OztnQ0FLUUYsSSxFQUFNOztBQUVWLGdCQUFJRSxNQUFNLEtBQUtJLElBQUwsQ0FBVU4sSUFBVixDQUFWOztBQUVBLGdCQUFHLENBQUNILFdBQVdRLEtBQVgsQ0FBaUJILEdBQWpCLENBQUosRUFDSSxNQUFNLElBQUlLLGNBQUosQ0FBc0JQLElBQXRCLG1CQUFOOztBQUVKLG1CQUFPRSxHQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7OztxQ0FNYUYsSSxFQUFNQyxZLEVBQWM7O0FBRTdCLGdCQUFJQyxNQUFNLEtBQUtJLElBQUwsQ0FBVU4sSUFBVixDQUFWOztBQUVBLGdCQUFHLENBQUNILFdBQVdRLEtBQVgsQ0FBaUJILEdBQWpCLENBQUosRUFBMkI7O0FBRXZCLG9CQUFJTCxXQUFXUSxLQUFYLENBQWlCSixZQUFqQixDQUFKLEVBQ0ksT0FBT0EsWUFBUDs7QUFFSixzQkFBTSxJQUFJTSxjQUFKLENBQXNCUCxJQUF0QixtQkFBTjtBQUVILGFBUEQsTUFPTzs7QUFFSCxvQkFBSVEsTUFBTUMsT0FBTixDQUFjUCxHQUFkLENBQUosRUFDSSxPQUFPQSxHQUFQOztBQUVKLHNCQUFNLElBQUlRLFNBQUosQ0FBaUJWLElBQWpCLHNDQUFxREUsR0FBckQseUNBQXFEQSxHQUFyRCxTQUFOO0FBRUg7QUFFSjs7OzhCQWxFWVMsSyxFQUFPOztBQUVsQixtQkFBTyxDQUFDLElBQUQsRUFBT0MsU0FBUCxFQUFrQkMsT0FBbEIsQ0FBMEJGLEtBQTFCLElBQW1DLENBQTFDO0FBRUQ7Ozs7OztrQkFtRVVkLFUiLCJmaWxlIjoiQXR0cmlidXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBBdHRyaWJ1dGVzIHByb3ZpZGVzIGFuIEFQSSBmb3IgcmVhZGluZyB0aGUgXG4gKiBhdHRyaWJ1dGVzIHN1cHBsaWVkIHRvIGFuIEVsZW1lbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cnMgXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZXMge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cnMpIHtcblxuICAgICAgICB0aGlzLl9hdHRycyA9IGF0dHJzO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGlzc2V0KHZhbHVlKSB7XG5cbiAgICAgIHJldHVybiBbbnVsbCwgdW5kZWZpbmVkXS5pbmRleE9mKHZhbHVlKSA8IDA7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkIGEgdmFsdWUgZm9ybSB0aGUgaW50ZXJuYWwgbGlzdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICAgKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZSAtIFRoaXMgdmFsdWUgaXMgcmV0dXJuZWQgaWYgdGhlIHZhbHVlIGlzIG5vdCBzZXQuXG4gICAgICovXG4gICAgcmVhZChwYXRoLCBkZWZhdWx0VmFsdWUpIHtcblxuICAgICAgICB2YXIgcmV0ID0gcHJvcGVydHkodGhpcy5fYXR0cnMsIHBhdGguc3BsaXQoJzonKS5qb2luKCcuJykpO1xuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IEF0dHJpYnV0ZXMuaXNzZXQoZGVmYXVsdFZhbHVlKT8gZGVmYXVsdFZhbHVlIDogJyc7XG5cbiAgICAgICAgaWYoIUF0dHJpYnV0ZXMuaXNzZXQocmV0KSlcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlcXVpcmUgaXMgbGlrZSByZWFkIGJ1dCB0aHJvd3MgYW4gRXJyb3IgaWYgdGhlIHZhbHVlIGlzIG5vdCBzdXBwbGllZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZXF1aXJlKHBhdGgpIHtcblxuICAgICAgICB2YXIgcmV0ID0gdGhpcy5yZWFkKHBhdGgpO1xuXG4gICAgICAgIGlmKCFBdHRyaWJ1dGVzLmlzc2V0KHJldCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYCR7cGF0aH0gaXMgcmVxdWlyZWQhYCk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlcXVpcmVBcnJheSByZXF1aXJlcyB0aGUgdmFsdWUgdG8gYmUgYW4gYXJyYXksIGlmIG5vIFxuICAgICAqIHZhbHVlIGlzIHJlYWQgdGhlbiBkZWZhdWx0IGlzIHByb3ZpZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICAgICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlIFxuICAgICAqL1xuICAgIHJlcXVpcmVBcnJheShwYXRoLCBkZWZhdWx0VmFsdWUpIHtcblxuICAgICAgICB2YXIgcmV0ID0gdGhpcy5yZWFkKHBhdGgpO1xuXG4gICAgICAgIGlmKCFBdHRyaWJ1dGVzLmlzc2V0KHJldCkpIHtcblxuICAgICAgICAgICAgaWYgKEF0dHJpYnV0ZXMuaXNzZXQoZGVmYXVsdFZhbHVlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYCR7cGF0aH0gaXMgcmVxdWlyZWQhYCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmV0KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3BhdGh9IG11c3QgYmUgYW4gYXJyYXkgZ290ICR7dHlwZW9mIHJldH0hYCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlc1xuIl19