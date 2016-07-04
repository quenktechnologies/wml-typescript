'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _parseParser = require('../parse/Parser');

var _parseParser2 = _interopRequireDefault(_parseParser);

var _AbstractSyntaxTree = require('./AbstractSyntaxTree');

var _AbstractSyntaxTree2 = _interopRequireDefault(_AbstractSyntaxTree);

/**
 * Transpiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a transpiler if backward support is desired.
 *
 */

var Transpiler = (function () {
  function Transpiler() {
    _classCallCheck(this, Transpiler);
  }

  _createClass(Transpiler, [{
    key: 'transpile',

    /**
     * transpile a string into js code.
     * @param {string} src 
     */
    value: function transpile(src) {

      return '' + _parseParser2['default'].parse(src, new _AbstractSyntaxTree2['default']());
    }
  }]);

  return Transpiler;
})();

exports['default'] = Transpiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVHJhbnNwaWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MkJBQW1CLGlCQUFpQjs7OztrQ0FDTCxzQkFBc0I7Ozs7Ozs7Ozs7OztJQVMvQyxVQUFVO1dBQVYsVUFBVTswQkFBVixVQUFVOzs7ZUFBVixVQUFVOzs7Ozs7O1dBTUgsbUJBQUMsR0FBRyxFQUFFOztBQUVYLGFBQU8sRUFBRSxHQUFDLHlCQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUscUNBQXdCLENBQUMsQ0FBQztLQUV6RDs7O1NBVkMsVUFBVTs7O3FCQWNELFVBQVUiLCJmaWxlIjoiVHJhbnNwaWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXIgZnJvbSAnLi4vcGFyc2UvUGFyc2VyJztcbmltcG9ydCBBYnN0cmFjdFN5bnRheFRyZWUgZnJvbSAnLi9BYnN0cmFjdFN5bnRheFRyZWUnO1xuXG4vKipcbiAqIFRyYW5zcGlsZXIgdHVybnMgd21sIG1hcmt1cCBpbnRvIGphdmFzY3JpcHQuXG4gKlxuICogVGhlIGNvZGUgcHJvZHVjZWQgdXNlcyBzb21lcyBFUzIwMTUgYW5kIHNob3VsZCBiZSByYW4gdGhyb3VnaFxuICogYSB0cmFuc3BpbGVyIGlmIGJhY2t3YXJkIHN1cHBvcnQgaXMgZGVzaXJlZC5cbiAqXG4gKi9cbmNsYXNzIFRyYW5zcGlsZXIge1xuXG4gICAgLyoqXG4gICAgICogdHJhbnNwaWxlIGEgc3RyaW5nIGludG8ganMgY29kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFxuICAgICAqL1xuICAgIHRyYW5zcGlsZShzcmMpIHtcblxuICAgICAgICByZXR1cm4gJycrUGFyc2VyLnBhcnNlKHNyYywgbmV3IEFic3RyYWN0U3ludGF4VHJlZSgpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc3BpbGVyXG4iXX0=