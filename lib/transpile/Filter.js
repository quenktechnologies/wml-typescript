
/**
 * Filter 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Filter = (function () {
  function Filter(name, args, location) {
    _classCallCheck(this, Filter);

    this.name = name;
    this.arguments = args;
    this.location = location;
  }

  _createClass(Filter, [{
    key: 'wrap',
    value: function wrap(value) {

      var args = this.arguments.slice();

      args.unshift(value);

      return this.name + '.apply(this, [' + args.join(',') + '])';
    }
  }, {
    key: 'toString',
    value: function toString() {

      return '';
    }
  }]);

  return Filter;
})();

exports['default'] = Filter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sTUFBTTtBQUVDLFdBRlAsTUFBTSxDQUVFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzBCQUY5QixNQUFNOztBQUlSLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBRTFCOztlQVJHLE1BQU07O1dBVU4sY0FBQyxLQUFLLEVBQUU7O0FBRVYsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFbEMsVUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFcEIsYUFBVSxJQUFJLENBQUMsSUFBSSxzQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBSztLQUV4RDs7O1dBRU8sb0JBQUc7O0FBRVQsYUFBTyxFQUFFLENBQUM7S0FFWDs7O1NBeEJHLE1BQU07OztxQkEyQkcsTUFBTSIsImZpbGUiOiJGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRmlsdGVyIFxuICovXG5jbGFzcyBGaWx0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHdyYXAodmFsdWUpIHtcblxuICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMuc2xpY2UoKTtcblxuICAgIGFyZ3MudW5zaGlmdCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfS5hcHBseSh0aGlzLCBbJHthcmdzLmpvaW4oJywnKX1dKWA7ICBcblxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG5cbiAgICByZXR1cm4gJyc7XG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcblxuIl19