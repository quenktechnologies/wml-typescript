/**
 * Input 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Input = (function () {
    function Input() {
        _classCallCheck(this, Input);
    }

    _createClass(Input, [{
        key: 'onDOM',
        value: function onDOM(attrs, childs) {

            var input = document.createElement('input');
            input.addEventListener('change', {
                handleEvent: function handleEvent(e) {
                    console.log('we had an event ', e);
                }
            });
            return input;
        }
    }]);

    return Input;
})();

Input.create = function () {

    return new Input();
};
exports['default'] = Input;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlcy9hcHAvSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdNLEtBQUs7QUFFSSxhQUZULEtBQUssR0FFTzs4QkFGWixLQUFLO0tBSU47O2lCQUpDLEtBQUs7O2VBTUYsZUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFOztBQUVqQixnQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxpQkFBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtBQUM3QiwyQkFBVyxFQUFBLHFCQUFDLENBQUMsRUFBRTtBQUNYLDJCQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN0QzthQUNKLENBQUMsQ0FBQztBQUNYLG1CQUFPLEtBQUssQ0FBQztTQUNSOzs7V0FmQyxLQUFLOzs7QUFtQlgsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFXOztBQUV0QixXQUFPLElBQUksS0FBSyxFQUFFLENBQUM7Q0FFdEIsQ0FBQztxQkFDYSxLQUFLIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnB1dCBcbiAqL1xuY2xhc3MgSW5wdXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvbkRPTShhdHRycywgY2hpbGRzKSB7XG5cbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBoYWQgYW4gZXZlbnQgJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xucmV0dXJuIGlucHV0O1xuICAgIH1cblxufVxuXG5JbnB1dC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiBuZXcgSW5wdXQoKTtcblxufTtcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=