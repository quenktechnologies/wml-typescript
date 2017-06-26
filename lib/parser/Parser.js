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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIm5vZGVzIiwiaGVscCIsImNvbnZlcnRVc2FnZSIsImxpc3QiLCJsZW5ndGgiLCJjb24iLCJwYXJzZU51bWJlciIsInN0ciIsInBhcnNlQm9vbGVhbiIsImJvb2wiLCJlbnN1cmVUYWdzTWF0Y2giLCJjb252ZXJ0T3BlcmF0b3IiLCJvcCIsIlBhcnNlciIsImlucHV0IiwidXNlckFTVCIsInBhcnNlciIsInl5IiwiYXN0IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxLOzs7Ozs7OztBQUVaLElBQUlDLE9BQU87QUFFUEMsZ0JBRk8sd0JBRU1DLElBRk4sRUFFWTs7QUFFZixZQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLEVBQVA7O0FBRVgsWUFBSUEsS0FBS0MsTUFBTCxHQUFjLENBQWxCLEVBQXFCLE9BQU8sRUFBUDs7QUFFckIsZUFBTyxDQUFDLEdBQUQsRUFBTUMsR0FBYjtBQUVILEtBVk07QUFXUEMsZUFYTyx1QkFXS0MsR0FYTCxFQVdVOztBQUViLGVBQU9BLEdBQVA7QUFFSCxLQWZNO0FBZ0JQQyxnQkFoQk8sd0JBZ0JNQyxJQWhCTixFQWdCWTtBQUNmLGVBQU9BLElBQVA7QUFFSCxLQW5CTTtBQW9CUEMsbUJBcEJPLDZCQW9CVyxDQUVqQixDQXRCTTtBQXVCUEMsbUJBdkJPLDJCQXVCU0MsRUF2QlQsRUF1QmE7O0FBRWhCLGdCQUFRQSxFQUFSOztBQUVJLGlCQUFLLElBQUw7QUFDSSx1QkFBTyxLQUFQOztBQUVKLGlCQUFLLElBQUw7QUFDSSx1QkFBTyxLQUFQOztBQUVKO0FBQ0ksdUJBQU9BLEVBQVA7O0FBVFI7QUFhSDtBQXRDTSxDQUFYOztJQTBDTUMsTTs7Ozs7Ozs7O0FBRUY7Ozs7Ozs4QkFNYUMsSyxFQUFPQyxPLEVBQVM7O0FBRXpCLGlDQUFXQyxNQUFYLENBQWtCQyxFQUFsQixHQUF1QixFQUF2QjtBQUNBLGlDQUFXRCxNQUFYLENBQWtCQyxFQUFsQixDQUFxQmhCLElBQXJCLEdBQTRCQSxJQUE1QjtBQUNBLGlDQUFXZSxNQUFYLENBQWtCQyxFQUFsQixDQUFxQkMsR0FBckIsR0FBNEIsUUFBT0gsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFwQixHQUFnQ0EsT0FBaEMsR0FBMENmLEtBQXJFO0FBQ0EsbUJBQU8scUJBQVdnQixNQUFYLENBQWtCRyxLQUFsQixDQUF3QkwsS0FBeEIsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVELE0iLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlckltcGwgZnJvbSAnLi9QYXJzZXJJbXBsJztcbmltcG9ydCAqIGFzIG5vZGVzIGZyb20gJy4vbm9kZXMnO1xuXG5sZXQgaGVscCA9IHtcblxuICAgIGNvbnZlcnRVc2FnZShsaXN0KSB7XG5cbiAgICAgICAgaWYgKCFsaXN0KSByZXR1cm4gJyc7XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoIDwgMCkgcmV0dXJuICcnO1xuXG4gICAgICAgIHJldHVybiBbJywnXS5jb25cblxuICAgIH0sXG4gICAgcGFyc2VOdW1iZXIoc3RyKSB7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIH0sXG4gICAgcGFyc2VCb29sZWFuKGJvb2wpIHtcbiAgICAgICAgcmV0dXJuIGJvb2w7XG5cbiAgICB9LFxuICAgIGVuc3VyZVRhZ3NNYXRjaCgpIHtcblxuICAgIH0sXG4gICAgY29udmVydE9wZXJhdG9yKG9wKSB7XG5cbiAgICAgICAgc3dpdGNoIChvcCkge1xuXG4gICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc9PT0nO1xuXG4gICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICchPT0nO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBvcDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG5cbmNsYXNzIFBhcnNlciB7XG5cbiAgICAvKiogXG4gICAgICogcGFyc2UgaW5wdXQgYW5kIHJldHVybiBhbiBBU1RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHVzZXJBU1QgXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoaW5wdXQsIHVzZXJBU1QpIHtcblxuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eSA9IHt9O1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5oZWxwID0gaGVscDtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuYXN0ID0gKHR5cGVvZiB1c2VyQVNUID09PSAnb2JqZWN0JykgPyB1c2VyQVNUIDogbm9kZXM7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlci5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=