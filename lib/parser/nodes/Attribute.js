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
 * Attribute
 */
var Attribute = function (_Node) {
    _inherits(Attribute, _Node);

    function Attribute(name, namespace, value, location) {
        _classCallCheck(this, Attribute);

        var _this = _possibleConstructorReturn(this, (Attribute.__proto__ || Object.getPrototypeOf(Attribute)).call(this, location));

        _this.type = 'attribute';
        _this.name = name;
        _this.namespace = namespace;
        _this.value = value;

        return _this;
    }

    /**
     * pushStringOnNamespace adds this attribute's value to it's namespace.
     * @param {object} namespaces
     */


    _createClass(Attribute, [{
        key: 'pushStringOnNamespace',
        value: function pushStringOnNamespace(namespaces, o) {

            var val = '\'' + this.name + '\': ' + this.value.transpile(o);

            if (this.namespace) {

                namespaces[this.namespace] = namespaces[this.namespace] || [];
                namespaces[this.namespace].push(val);
            } else {

                namespaces.html.push(val);
            }
        }

        /**
         * pushNodeOnNamespace adds this attribute's SourceNode to it's namespace.
         * @param {object} namespacess
         */

    }, {
        key: 'pushNodeOnNamespace',
        value: function pushNodeOnNamespace(namespaces, o) {

            if (this.namespace) {

                namespaces[this.namespace] = namespaces[this.namespace] || [];
                namespaces[this.namespace].push('\'' + this.name + '\'', ':', this.value.compile(o), ',');
            } else {

                namespaces.html.push('\'' + this.name + '\'', ':', this.value.compile(o), ',');
            }
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            throw new TypeError('Cannot transpile an Attribute use pushStringOnNamespace()!');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            throw new TypeError('Cannot compile an Attribute use pushNodeOnNamespace()!');
        }
    }]);

    return Attribute;
}(_Node3.default);

exports.default = Attribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQXR0cmlidXRlLmpzIl0sIm5hbWVzIjpbIkF0dHJpYnV0ZSIsIm5hbWUiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIm5hbWVzcGFjZXMiLCJvIiwidmFsIiwidHJhbnNwaWxlIiwicHVzaCIsImh0bWwiLCJjb21waWxlIiwiVHlwZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFM7OztBQUVGLHVCQUFZQyxJQUFaLEVBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUEsMEhBRXBDQSxRQUZvQzs7QUFHMUMsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFOMEM7QUFRN0M7O0FBRUQ7Ozs7Ozs7OzhDQUlzQkcsVSxFQUFZQyxDLEVBQUc7O0FBRWpDLGdCQUFJQyxhQUFVLEtBQUtQLElBQWYsWUFBeUIsS0FBS0UsS0FBTCxDQUFXTSxTQUFYLENBQXFCRixDQUFyQixDQUE3Qjs7QUFFQSxnQkFBSSxLQUFLTCxTQUFULEVBQW9COztBQUVoQkksMkJBQVcsS0FBS0osU0FBaEIsSUFBNkJJLFdBQVcsS0FBS0osU0FBaEIsS0FBOEIsRUFBM0Q7QUFDQUksMkJBQVcsS0FBS0osU0FBaEIsRUFBMkJRLElBQTNCLENBQWdDRixHQUFoQztBQUVILGFBTEQsTUFLTzs7QUFFSEYsMkJBQVdLLElBQVgsQ0FBZ0JELElBQWhCLENBQXFCRixHQUFyQjtBQUVIO0FBRUo7O0FBRUQ7Ozs7Ozs7NENBSW9CRixVLEVBQVlDLEMsRUFBRzs7QUFFL0IsZ0JBQUksS0FBS0wsU0FBVCxFQUFvQjs7QUFFaEJJLDJCQUFXLEtBQUtKLFNBQWhCLElBQTZCSSxXQUFXLEtBQUtKLFNBQWhCLEtBQThCLEVBQTNEO0FBQ0FJLDJCQUFXLEtBQUtKLFNBQWhCLEVBQTJCUSxJQUEzQixRQUFvQyxLQUFLVCxJQUF6QyxTQUFrRCxHQUFsRCxFQUF1RCxLQUFLRSxLQUFMLENBQVdTLE9BQVgsQ0FBbUJMLENBQW5CLENBQXZELEVBQThFLEdBQTlFO0FBRUgsYUFMRCxNQUtPOztBQUVIRCwyQkFBV0ssSUFBWCxDQUFnQkQsSUFBaEIsUUFBeUIsS0FBS1QsSUFBOUIsU0FBdUMsR0FBdkMsRUFBNEMsS0FBS0UsS0FBTCxDQUFXUyxPQUFYLENBQW1CTCxDQUFuQixDQUE1QyxFQUFtRSxHQUFuRTtBQUVIO0FBQ0o7OztvQ0FFVzs7QUFFUixrQkFBTSxJQUFJTSxTQUFKLENBQWMsNERBQWQsQ0FBTjtBQUVIOzs7Z0NBRU9OLEMsRUFBRzs7QUFFUCxrQkFBTSxJQUFJTSxTQUFKLENBQWMsd0RBQWQsQ0FBTjtBQUVIOzs7Ozs7a0JBSVViLFMiLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBdHRyaWJ1dGVcbiAqL1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBuYW1lc3BhY2UsIHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2F0dHJpYnV0ZSc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwdXNoU3RyaW5nT25OYW1lc3BhY2UgYWRkcyB0aGlzIGF0dHJpYnV0ZSdzIHZhbHVlIHRvIGl0J3MgbmFtZXNwYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lc3BhY2VzXG4gICAgICovXG4gICAgcHVzaFN0cmluZ09uTmFtZXNwYWNlKG5hbWVzcGFjZXMsIG8pIHtcblxuICAgICAgICB2YXIgdmFsID0gYCcke3RoaXMubmFtZX0nOiAke3RoaXMudmFsdWUudHJhbnNwaWxlKG8pfWA7XG5cbiAgICAgICAgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZXNbdGhpcy5uYW1lc3BhY2VdID0gbmFtZXNwYWNlc1t0aGlzLm5hbWVzcGFjZV0gfHwgW107XG4gICAgICAgICAgICBuYW1lc3BhY2VzW3RoaXMubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbmFtZXNwYWNlcy5odG1sLnB1c2godmFsKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwdXNoTm9kZU9uTmFtZXNwYWNlIGFkZHMgdGhpcyBhdHRyaWJ1dGUncyBTb3VyY2VOb2RlIHRvIGl0J3MgbmFtZXNwYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lc3BhY2Vzc1xuICAgICAqL1xuICAgIHB1c2hOb2RlT25OYW1lc3BhY2UobmFtZXNwYWNlcywgbykge1xuXG4gICAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2VzW3RoaXMubmFtZXNwYWNlXSA9IG5hbWVzcGFjZXNbdGhpcy5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgbmFtZXNwYWNlc1t0aGlzLm5hbWVzcGFjZV0ucHVzaChgJyR7dGhpcy5uYW1lfSdgLCAnOicsIHRoaXMudmFsdWUuY29tcGlsZShvKSwgJywnKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2VzLmh0bWwucHVzaChgJyR7dGhpcy5uYW1lfSdgLCAnOicsIHRoaXMudmFsdWUuY29tcGlsZShvKSwgJywnKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCB0cmFuc3BpbGUgYW4gQXR0cmlidXRlIHVzZSBwdXNoU3RyaW5nT25OYW1lc3BhY2UoKSEnKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb21waWxlIGFuIEF0dHJpYnV0ZSB1c2UgcHVzaE5vZGVPbk5hbWVzcGFjZSgpIScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0ZVxuIl19