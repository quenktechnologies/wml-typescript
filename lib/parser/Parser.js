'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserImpl = require('./ParserImpl');

var _ParserImpl2 = _interopRequireDefault(_ParserImpl);

var _nodes = require('./nodes');

var nodes = _interopRequireWildcard(_nodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var help = {
    convertUsage: function convertUsage(list) {

        if (!list) return '';

        if (list.length < 0) return '';

        return [','].con;
    },
    parseNumber: function parseNumber(str) {

        return str;
    },
    parseBoolean: function parseBoolean(bool) {
        return bool;
    },
    ensureTagsMatch: function ensureTagsMatch() {},
    convertOperator: function convertOperator(op) {

        switch (op) {

            case '==':
                return '===';

            case '!=':
                return '!==';

            default:
                return op;

        }
    }
};

var Parser = function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, null, [{
        key: 'parse',


        /**
         * parse input and return an AST
         * @param {string} input
         * @param {object} userAST
         * @returns {object}
         */
        value: function parse(input, userAST) {
            _ParserImpl2.default.parser.yy = {};
            _ParserImpl2.default.parser.yy.help = help;
            _ParserImpl2.default.parser.yy.ast = (typeof userAST === 'undefined' ? 'undefined' : _typeof(userAST)) === 'object' ? userAST : nodes;
            return _ParserImpl2.default.parser.parse(input);
        }
    }]);

    return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIm5vZGVzIiwiaGVscCIsImNvbnZlcnRVc2FnZSIsImxpc3QiLCJsZW5ndGgiLCJjb24iLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlQm9vbGVhbiIsImJvb2wiLCJlbnN1cmVUYWdzTWF0Y2giLCJjb252ZXJ0T3BlcmF0b3IiLCJvcCIsIlBhcnNlciIsImlucHV0IiwidXNlckFTVCIsInBhcnNlciIsInl5IiwiYXN0IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxLOzs7Ozs7OztBQUVaLElBQUlDLE9BQU87QUFFUEMsZ0JBRk8sd0JBRU1DLElBRk4sRUFFWTs7QUFFZixZQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLEVBQVA7O0FBRVgsWUFBSUEsS0FBS0MsTUFBTCxHQUFjLENBQWxCLEVBQXFCLE9BQU8sRUFBUDs7QUFFckIsZUFBTyxDQUFDLEdBQUQsRUFBTUMsR0FBYjtBQUVILEtBVk07QUFXUEMsZUFYTyx1QkFXS0MsR0FYTCxFQVdVOztBQUViLGVBQU9BLEdBQVA7QUFFSCxLQWZNO0FBZ0JQQyxnQkFoQk8sd0JBZ0JNQyxJQWhCTixFQWdCWTtBQUNmLGVBQU9BLElBQVA7QUFFSCxLQW5CTTtBQW9CUEMsbUJBcEJPLDZCQW9CVyxDQUVqQixDQXRCTTtBQXVCUEMsbUJBdkJPLDJCQXVCU0MsRUF2QlQsRUF1QmE7O0FBRWhCLGdCQUFRQSxFQUFSOztBQUVJLGlCQUFLLElBQUw7QUFDSSx1QkFBTyxLQUFQOztBQUVKLGlCQUFLLElBQUw7QUFDSSx1QkFBTyxLQUFQOztBQUVKO0FBQ0ksdUJBQU9BLEVBQVA7O0FBVFI7QUFhSDtBQXRDTSxDQUFYOztJQTBDTUMsTTs7Ozs7Ozs7O0FBRUY7Ozs7Ozs4QkFNYUMsSyxFQUFPQyxPLEVBQVM7QUFDekIsaUNBQVdDLE1BQVgsQ0FBa0JDLEVBQWxCLEdBQXVCLEVBQXZCO0FBQ0EsaUNBQVdELE1BQVgsQ0FBa0JDLEVBQWxCLENBQXFCaEIsSUFBckIsR0FBNEJBLElBQTVCO0FBQ0EsaUNBQVdlLE1BQVgsQ0FBa0JDLEVBQWxCLENBQXFCQyxHQUFyQixHQUE0QixRQUFPSCxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXBCLEdBQWdDQSxPQUFoQyxHQUEwQ2YsS0FBckU7QUFDQSxtQkFBTyxxQkFBV2dCLE1BQVgsQ0FBa0JHLEtBQWxCLENBQXdCTCxLQUF4QixDQUFQO0FBRUg7Ozs7OztrQkFJVUQsTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0ICogYXMgbm9kZXMgZnJvbSAnLi9ub2Rlcyc7XG5cbmxldCBoZWxwID0ge1xuXG4gICAgY29udmVydFVzYWdlKGxpc3QpIHtcblxuICAgICAgICBpZiAoIWxpc3QpIHJldHVybiAnJztcblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPCAwKSByZXR1cm4gJyc7XG5cbiAgICAgICAgcmV0dXJuIFsnLCddLmNvblxuXG4gICAgfSxcbiAgICBwYXJzZU51bWJlcihzdHIpIHtcblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgfSxcbiAgICBwYXJzZUJvb2xlYW4oYm9vbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcblxuICAgIH0sXG4gICAgZW5zdXJlVGFnc01hdGNoKCkge1xuXG4gICAgfSxcbiAgICBjb252ZXJ0T3BlcmF0b3Iob3ApIHtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJz09PSc7XG5cbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyE9PSc7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuY2xhc3MgUGFyc2VyIHtcblxuICAgIC8qKlxuICAgICAqIHBhcnNlIGlucHV0IGFuZCByZXR1cm4gYW4gQVNUXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHVzZXJBU1RcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZShpbnB1dCwgdXNlckFTVCkge1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eSA9IHt9O1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5oZWxwID0gaGVscDtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuYXN0ID0gKHR5cGVvZiB1c2VyQVNUID09PSAnb2JqZWN0JykgPyB1c2VyQVNUIDogbm9kZXM7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlci5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=