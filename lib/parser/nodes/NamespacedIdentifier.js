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
 * Identifier
 * @param {string} name
 */
var Identifier = function (_Node) {
    _inherits(Identifier, _Node);

    function Identifier(name, hint, location) {
        _classCallCheck(this, Identifier);

        var _this = _possibleConstructorReturn(this, (Identifier.__proto__ || Object.getPrototypeOf(Identifier)).call(this, location));

        _this.type = 'identifier';
        _this.name = name;
        _this.hint = hint;

        return _this;
    }

    _createClass(Identifier, [{
        key: 'transpile',
        value: function transpile(o) {

            return o.typescript ? this.hint ? this.name + ' as ' + this.hint : this.name : this.name;
        }
    }]);

    return Identifier;
}(_Node3.default);

exports.default = Identifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTmFtZXNwYWNlZElkZW50aWZpZXIuanMiXSwibmFtZXMiOlsiSWRlbnRpZmllciIsIm5hbWUiLCJoaW50IiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInR5cGVzY3JpcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLFU7OztBQUVGLHdCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQSw0SEFFeEJBLFFBRndCOztBQUc5QixjQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFMOEI7QUFPakM7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCxtQkFBT0EsRUFBRUMsVUFBRixHQUNGLEtBQUtKLElBQUwsR0FBZSxLQUFLRCxJQUFwQixZQUErQixLQUFLQyxJQUFwQyxHQUE2QyxLQUFLRCxJQURoRCxHQUVILEtBQUtBLElBRlQ7QUFJSDs7Ozs7O2tCQUlVRCxVIiwiZmlsZSI6Ik5hbWVzcGFjZWRJZGVudGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBJZGVudGlmaWVyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5jbGFzcyBJZGVudGlmaWVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBoaW50LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2lkZW50aWZpZXInO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmhpbnQgPSBoaW50O1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gby50eXBlc2NyaXB0ID9cbiAgICAgICAgICAgICh0aGlzLmhpbnQgPyBgJHt0aGlzLm5hbWV9IGFzICR7dGhpcy5oaW50fWAgOiB0aGlzLm5hbWUpOlxuICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElkZW50aWZpZXJcbiJdfQ==