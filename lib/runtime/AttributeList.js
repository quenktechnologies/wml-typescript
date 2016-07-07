'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

/**
 * AttributeList provides an API for reading the 
 * attributes supplied to an Element.
 * @param {object} attrs 
 */

var AttributeList = (function () {
    function AttributeList(attrs) {
        _classCallCheck(this, AttributeList);

        this._attrs = attrs;
    }

    /**
     * read a value form the internal list.
     * @param {string} path 
     * @param {*} defaultValue - This value is returned if the value is not set.
     */

    _createClass(AttributeList, [{
        key: 'read',
        value: function read(path, defaultValue) {

            return _propertySeek2['default'].get(this._attrs, path) || defaultValue;
        }
    }]);

    return AttributeList;
})();

exports['default'] = AttributeList;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL0F0dHJpYnV0ZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzRCQUFxQixlQUFlOzs7Ozs7Ozs7O0lBTzlCLGFBQWE7QUFFSixhQUZULGFBQWEsQ0FFSCxLQUFLLEVBQUU7OEJBRmpCLGFBQWE7O0FBSVgsWUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FFdkI7Ozs7Ozs7O2lCQU5DLGFBQWE7O2VBYVgsY0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFOztBQUVyQixtQkFBTywwQkFBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUM7U0FFMUQ7OztXQWpCQyxhQUFhOzs7cUJBc0JKLGFBQWEiLCJmaWxlIjoiQXR0cmlidXRlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBBdHRyaWJ1dGVMaXN0IHByb3ZpZGVzIGFuIEFQSSBmb3IgcmVhZGluZyB0aGUgXG4gKiBhdHRyaWJ1dGVzIHN1cHBsaWVkIHRvIGFuIEVsZW1lbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cnMgXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZUxpc3Qge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cnMpIHtcblxuICAgICAgICB0aGlzLl9hdHRycyA9IGF0dHJzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVhZCBhIHZhbHVlIGZvcm0gdGhlIGludGVybmFsIGxpc3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAgICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWUgLSBUaGlzIHZhbHVlIGlzIHJldHVybmVkIGlmIHRoZSB2YWx1ZSBpcyBub3Qgc2V0LlxuICAgICAqL1xuICAgIHJlYWQocGF0aCwgZGVmYXVsdFZhbHVlKSB7XG5cbiAgICAgICAgcmV0dXJuIFByb3BlcnR5LmdldCh0aGlzLl9hdHRycywgcGF0aCkgfHwgZGVmYXVsdFZhbHVlO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlTGlzdFxuIl19