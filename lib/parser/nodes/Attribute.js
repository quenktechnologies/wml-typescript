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
        value: function pushStringOnNamespace(namespaces) {

            var val = '\'' + this.name + '\': ' + this.value.transpile();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQXR0cmlidXRlLmpzIl0sIm5hbWVzIjpbIkF0dHJpYnV0ZSIsIm5hbWUiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIm5hbWVzcGFjZXMiLCJ2YWwiLCJ0cmFuc3BpbGUiLCJwdXNoIiwiaHRtbCIsIm8iLCJjb21waWxlIiwiVHlwZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFM7OztBQUVGLHVCQUFZQyxJQUFaLEVBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUEsMEhBRXBDQSxRQUZvQzs7QUFHMUMsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFOMEM7QUFRN0M7O0FBRUQ7Ozs7Ozs7OzhDQUlzQkcsVSxFQUFZOztBQUU5QixnQkFBSUMsYUFBVSxLQUFLTixJQUFmLFlBQXlCLEtBQUtFLEtBQUwsQ0FBV0ssU0FBWCxFQUE3Qjs7QUFFQSxnQkFBSSxLQUFLTixTQUFULEVBQW9COztBQUVoQkksMkJBQVcsS0FBS0osU0FBaEIsSUFBNkJJLFdBQVcsS0FBS0osU0FBaEIsS0FBOEIsRUFBM0Q7QUFDQUksMkJBQVcsS0FBS0osU0FBaEIsRUFBMkJPLElBQTNCLENBQWdDRixHQUFoQztBQUVILGFBTEQsTUFLTzs7QUFFSEQsMkJBQVdJLElBQVgsQ0FBZ0JELElBQWhCLENBQXFCRixHQUFyQjtBQUVIO0FBRUo7O0FBRUQ7Ozs7Ozs7NENBSW9CRCxVLEVBQVlLLEMsRUFBRzs7QUFFL0IsZ0JBQUksS0FBS1QsU0FBVCxFQUFvQjs7QUFFaEJJLDJCQUFXLEtBQUtKLFNBQWhCLElBQTZCSSxXQUFXLEtBQUtKLFNBQWhCLEtBQThCLEVBQTNEO0FBQ0FJLDJCQUFXLEtBQUtKLFNBQWhCLEVBQTJCTyxJQUEzQixRQUFvQyxLQUFLUixJQUF6QyxTQUFrRCxHQUFsRCxFQUF1RCxLQUFLRSxLQUFMLENBQVdTLE9BQVgsQ0FBbUJELENBQW5CLENBQXZELEVBQThFLEdBQTlFO0FBRUgsYUFMRCxNQUtPOztBQUVITCwyQkFBV0ksSUFBWCxDQUFnQkQsSUFBaEIsUUFBeUIsS0FBS1IsSUFBOUIsU0FBdUMsR0FBdkMsRUFBNEMsS0FBS0UsS0FBTCxDQUFXUyxPQUFYLENBQW1CRCxDQUFuQixDQUE1QyxFQUFtRSxHQUFuRTtBQUVIO0FBQ0o7OztvQ0FFVzs7QUFFUixrQkFBTSxJQUFJRSxTQUFKLENBQWMsNERBQWQsQ0FBTjtBQUVIOzs7Z0NBRU9GLEMsRUFBRzs7QUFFUCxrQkFBTSxJQUFJRSxTQUFKLENBQWMsd0RBQWQsQ0FBTjtBQUVIOzs7Ozs7a0JBSVViLFMiLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBdHRyaWJ1dGUgXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgbmFtZXNwYWNlLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHVzaFN0cmluZ09uTmFtZXNwYWNlIGFkZHMgdGhpcyBhdHRyaWJ1dGUncyB2YWx1ZSB0byBpdCdzIG5hbWVzcGFjZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmFtZXNwYWNlcyBcbiAgICAgKi9cbiAgICBwdXNoU3RyaW5nT25OYW1lc3BhY2UobmFtZXNwYWNlcykge1xuXG4gICAgICAgIHZhciB2YWwgPSBgJyR7dGhpcy5uYW1lfSc6ICR7dGhpcy52YWx1ZS50cmFuc3BpbGUoKX1gO1xuXG4gICAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2VzW3RoaXMubmFtZXNwYWNlXSA9IG5hbWVzcGFjZXNbdGhpcy5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgbmFtZXNwYWNlc1t0aGlzLm5hbWVzcGFjZV0ucHVzaCh2YWwpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZXMuaHRtbC5wdXNoKHZhbCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHVzaE5vZGVPbk5hbWVzcGFjZSBhZGRzIHRoaXMgYXR0cmlidXRlJ3MgU291cmNlTm9kZSB0byBpdCdzIG5hbWVzcGFjZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmFtZXNwYWNlc3MgXG4gICAgICovXG4gICAgcHVzaE5vZGVPbk5hbWVzcGFjZShuYW1lc3BhY2VzLCBvKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZXNbdGhpcy5uYW1lc3BhY2VdID0gbmFtZXNwYWNlc1t0aGlzLm5hbWVzcGFjZV0gfHwgW107XG4gICAgICAgICAgICBuYW1lc3BhY2VzW3RoaXMubmFtZXNwYWNlXS5wdXNoKGAnJHt0aGlzLm5hbWV9J2AsICc6JywgdGhpcy52YWx1ZS5jb21waWxlKG8pLCAnLCcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZXMuaHRtbC5wdXNoKGAnJHt0aGlzLm5hbWV9J2AsICc6JywgdGhpcy52YWx1ZS5jb21waWxlKG8pLCAnLCcpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IHRyYW5zcGlsZSBhbiBBdHRyaWJ1dGUgdXNlIHB1c2hTdHJpbmdPbk5hbWVzcGFjZSgpIScpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbXBpbGUgYW4gQXR0cmlidXRlIHVzZSBwdXNoTm9kZU9uTmFtZXNwYWNlKCkhJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlXG4iXX0=