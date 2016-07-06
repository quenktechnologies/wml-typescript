'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _AbstractSyntaxTree = require('./AbstractSyntaxTree');

var _AbstractSyntaxTree2 = _interopRequireDefault(_AbstractSyntaxTree);

/**
 * Compiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a compiler if backward support is desired.
 *
 */

var Compiler = (function () {
  function Compiler() {
    _classCallCheck(this, Compiler);
  }

  _createClass(Compiler, [{
    key: 'compile',

    /**
     * compile a string into js code.
     * @param {string} src 
     */
    value: function compile(src) {

      return '' + _Parser2['default'].parse(src, new _AbstractSyntaxTree2['default']());
    }
  }]);

  return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHJhbnNwaWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7c0JBQW1CLFVBQVU7Ozs7a0NBQ0Usc0JBQXNCOzs7Ozs7Ozs7Ozs7SUFTL0MsUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7Ozs7OztXQU1ILGlCQUFDLEdBQUcsRUFBRTs7QUFFVCxhQUFPLEVBQUUsR0FBRyxvQkFBTyxLQUFLLENBQUMsR0FBRyxFQUFFLHFDQUF3QixDQUFDLENBQUM7S0FFM0Q7OztTQVZDLFFBQVE7OztxQkFjQyxRQUFRIiwiZmlsZSI6IlRyYW5zcGlsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vUGFyc2VyJztcbmltcG9ydCBBYnN0cmFjdFN5bnRheFRyZWUgZnJvbSAnLi9BYnN0cmFjdFN5bnRheFRyZWUnO1xuXG4vKipcbiAqIENvbXBpbGVyIHR1cm5zIHdtbCBtYXJrdXAgaW50byBqYXZhc2NyaXB0LlxuICpcbiAqIFRoZSBjb2RlIHByb2R1Y2VkIHVzZXMgc29tZXMgRVMyMDE1IGFuZCBzaG91bGQgYmUgcmFuIHRocm91Z2hcbiAqIGEgY29tcGlsZXIgaWYgYmFja3dhcmQgc3VwcG9ydCBpcyBkZXNpcmVkLlxuICpcbiAqL1xuY2xhc3MgQ29tcGlsZXIge1xuXG4gICAgLyoqXG4gICAgICogY29tcGlsZSBhIHN0cmluZyBpbnRvIGpzIGNvZGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBcbiAgICAgKi9cbiAgICBjb21waWxlKHNyYykge1xuXG4gICAgICAgIHJldHVybiAnJyArIFBhcnNlci5wYXJzZShzcmMsIG5ldyBBYnN0cmFjdFN5bnRheFRyZWUoKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGlsZXJcbiJdfQ==