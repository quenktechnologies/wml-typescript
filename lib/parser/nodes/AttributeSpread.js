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
 * AttributeSpread 
 */
var AttributeSpread = function (_Node) {
    _inherits(AttributeSpread, _Node);

    function AttributeSpread(value, key, location) {
        _classCallCheck(this, AttributeSpread);

        var _this = _possibleConstructorReturn(this, (AttributeSpread.__proto__ || Object.getPrototypeOf(AttributeSpread)).call(this));

        _this.type = 'attribute-spread';
        _this.key = key;
        _this.value = value;
        _this.location = location;

        return _this;
    }

    /**
     * pushStringOnNamespace adds this attribute's value to it's namespace.
     * @param {object} namespaces 
     */


    _createClass(AttributeSpread, [{
        key: 'pushStringOnNamespace',
        value: function pushStringOnNamespace(namespaces) {}

        /**
         * pushNodeOnNamespace adds this attribute's SourceNode to it's namespace.
         * @param {object} namespacess 
         */

    }, {
        key: 'pushNodeOnNamespace',
        value: function pushNodeOnNamespace(namespaces, o) {}

        /**
         * wrapAttributesString wraps the attributes in a spread call.
         * @param {string} attrs 
         */

    }, {
        key: 'wrapAttributesString',
        value: function wrapAttributesString(attrs) {

            return 'make.spread(' + this.value + ', ' + attrs + ', \'' + this.key + '\')';
        }

        /**
         * wrapAttributes wraps the attributes in a spread call SourceNode
         * @param {array} buf 
         * @param {object} o 
         */

    }, {
        key: 'wrapAttributes',
        value: function wrapAttributes(buf, o) {

            buf.unshift(this.sourceNode(o.fileName, 'make.spread(' + this.value + ','));
            buf.push('\'{this.key}\')');
            return buf;
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            throw new TypeError('Cannot transpile an AttributeSpread use pushStringOnNamespace()!');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            throw new TypeError('Cannot compile an AttributeSpread use pushNodeOnNamespace()!');
        }
    }]);

    return AttributeSpread;
}(_Node3.default);

exports.default = AttributeSpread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQXR0cmlidXRlU3ByZWFkLmpzIl0sIm5hbWVzIjpbIkF0dHJpYnV0ZVNwcmVhZCIsInZhbHVlIiwia2V5IiwibG9jYXRpb24iLCJ0eXBlIiwibmFtZXNwYWNlcyIsIm8iLCJhdHRycyIsImJ1ZiIsInVuc2hpZnQiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJwdXNoIiwiVHlwZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVGLDZCQUFZQyxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFHOUIsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsY0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTjhCO0FBUWpDOztBQUVEOzs7Ozs7Ozs4Q0FJc0JFLFUsRUFBWSxDQUVqQzs7QUFFRDs7Ozs7Ozs0Q0FJb0JBLFUsRUFBWUMsQyxFQUFHLENBRWxDOztBQUVEOzs7Ozs7OzZDQUlxQkMsSyxFQUFPOztBQUV4QixvQ0FBc0IsS0FBS04sS0FBM0IsVUFBcUNNLEtBQXJDLFlBQWdELEtBQUtMLEdBQXJEO0FBRUg7O0FBRUQ7Ozs7Ozs7O3VDQUtlTSxHLEVBQUtGLEMsRUFBRzs7QUFFbkJFLGdCQUFJQyxPQUFKLENBQVksS0FBS0MsVUFBTCxDQUFnQkosRUFBRUssUUFBbEIsbUJBQTJDLEtBQUtWLEtBQWhELE9BQVo7QUFDQU8sZ0JBQUlJLElBQUo7QUFDQSxtQkFBT0osR0FBUDtBQUVIOzs7b0NBRVc7O0FBRVIsa0JBQU0sSUFBSUssU0FBSixDQUFjLGtFQUFkLENBQU47QUFFSDs7O2dDQUVPUCxDLEVBQUc7O0FBRVAsa0JBQU0sSUFBSU8sU0FBSixDQUFjLDhEQUFkLENBQU47QUFFSDs7Ozs7O2tCQUlVYixlIiwiZmlsZSI6IkF0dHJpYnV0ZVNwcmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQXR0cmlidXRlU3ByZWFkIFxuICovXG5jbGFzcyBBdHRyaWJ1dGVTcHJlYWQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBrZXksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2F0dHJpYnV0ZS1zcHJlYWQnO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwdXNoU3RyaW5nT25OYW1lc3BhY2UgYWRkcyB0aGlzIGF0dHJpYnV0ZSdzIHZhbHVlIHRvIGl0J3MgbmFtZXNwYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lc3BhY2VzIFxuICAgICAqL1xuICAgIHB1c2hTdHJpbmdPbk5hbWVzcGFjZShuYW1lc3BhY2VzKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwdXNoTm9kZU9uTmFtZXNwYWNlIGFkZHMgdGhpcyBhdHRyaWJ1dGUncyBTb3VyY2VOb2RlIHRvIGl0J3MgbmFtZXNwYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lc3BhY2VzcyBcbiAgICAgKi9cbiAgICBwdXNoTm9kZU9uTmFtZXNwYWNlKG5hbWVzcGFjZXMsIG8pIHtcbiAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cmFwQXR0cmlidXRlc1N0cmluZyB3cmFwcyB0aGUgYXR0cmlidXRlcyBpbiBhIHNwcmVhZCBjYWxsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRycyBcbiAgICAgKi9cbiAgICB3cmFwQXR0cmlidXRlc1N0cmluZyhhdHRycykge1xuXG4gICAgICAgIHJldHVybiBgbWFrZS5zcHJlYWQoJHt0aGlzLnZhbHVlfSwgJHthdHRyc30sICcke3RoaXMua2V5fScpYDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdyYXBBdHRyaWJ1dGVzIHdyYXBzIHRoZSBhdHRyaWJ1dGVzIGluIGEgc3ByZWFkIGNhbGwgU291cmNlTm9kZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJ1ZiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbyBcbiAgICAgKi9cbiAgICB3cmFwQXR0cmlidXRlcyhidWYsIG8pIHtcblxuICAgICAgICBidWYudW5zaGlmdCh0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYG1ha2Uuc3ByZWFkKCR7dGhpcy52YWx1ZX0sYCkpO1xuICAgICAgICBidWYucHVzaChgJ3t0aGlzLmtleX0nKWApO1xuICAgICAgICByZXR1cm4gYnVmO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCB0cmFuc3BpbGUgYW4gQXR0cmlidXRlU3ByZWFkIHVzZSBwdXNoU3RyaW5nT25OYW1lc3BhY2UoKSEnKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb21waWxlIGFuIEF0dHJpYnV0ZVNwcmVhZCB1c2UgcHVzaE5vZGVPbk5hbWVzcGFjZSgpIScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0ZVNwcmVhZFxuIl19