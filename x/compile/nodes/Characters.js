'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * Characters 
 */

var Characters = (function (_Node) {
    _inherits(Characters, _Node);

    function Characters(value, location) {
        _classCallCheck(this, Characters);

        _get(Object.getPrototypeOf(Characters.prototype), 'constructor', this).call(this, location);
        this.value = value;
    }

    _createClass(Characters, [{
        key: 'transpile',
        value: function transpile() {

            return 'make.text(`' + this.value + '`)';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'make.text(').add('`' + this.value + '`');
        }
    }]);

    return Characters;
})(_Node3['default']);

exports['default'] = Characters;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0NoYXJhY3RlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7SUFLbkIsVUFBVTtjQUFWLFVBQVU7O0FBRUQsYUFGVCxVQUFVLENBRUEsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGM0IsVUFBVTs7QUFJVixtQ0FKQSxVQUFVLDZDQUlKLFFBQVEsRUFBRTtBQUNkLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBRXRCOztpQkFQQyxVQUFVOztlQVNILHFCQUFHOztBQUVSLG1DQUFzQixJQUFJLENBQUMsS0FBSyxRQUFNO1NBRXpDOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVgsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxlQUFlLENBQzVDLEdBQUcsT0FBTSxJQUFJLENBQUMsS0FBSyxPQUFLLENBQUM7U0FFNUI7OztXQXBCQyxVQUFVOzs7cUJBdUJELFVBQVUiLCJmaWxlIjoiQ2hhcmFjdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ2hhcmFjdGVycyBcbiAqL1xuY2xhc3MgQ2hhcmFjdGVycyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgbWFrZS50ZXh0KFxcYCR7dGhpcy52YWx1ZX1cXGApYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBgbWFrZS50ZXh0KGApLlxuICAgICAgICBhZGQoYFxcYCR7dGhpcy52YWx1ZX1cXGBgKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyc1xuIl19