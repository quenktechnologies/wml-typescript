'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ParserImpl = require('./ParserImpl');

var _ParserImpl2 = _interopRequireDefault(_ParserImpl);

var _nodesAbstractSyntaxTree = require('./nodes/AbstractSyntaxTree');

var _nodesAbstractSyntaxTree2 = _interopRequireDefault(_nodesAbstractSyntaxTree);

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

var Parser = (function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, null, [{
        key: 'parse',

        /** 
         * parse input and return an AST
         * @param {string} input 
         * @param {AbstractSyntaxTree} userAST 
         * @returns {object}
         */
        value: function parse(input, userAST) {

            _ParserImpl2['default'].parser.yy = {};
            _ParserImpl2['default'].parser.yy.help = help;
            _ParserImpl2['default'].parser.yy.ast = typeof userAST === 'object' ? userAST : new _nodesAbstractSyntaxTree2['default']();
            return _ParserImpl2['default'].parser.parse(input);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21waWxlci9QYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzBCQUF1QixjQUFjOzs7O3VDQUNOLDRCQUE0Qjs7OztBQUUzRCxJQUFJLElBQUksR0FBRzs7QUFFVCxnQkFBWSxFQUFBLHNCQUFDLElBQUksRUFBRTs7QUFFakIsWUFBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7QUFFcEIsWUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRyxPQUFPLEVBQUUsQ0FBQzs7QUFFL0IsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtLQUVmO0FBQ0QsZUFBVyxFQUFBLHFCQUFDLEdBQUcsRUFBRTs7QUFFYixlQUFPLEdBQUcsQ0FBQztLQUVkO0FBQ0QsZ0JBQVksRUFBQSxzQkFBQyxJQUFJLEVBQUU7QUFDZixlQUFPLElBQUksQ0FBQztLQUVmO0FBQ0QsbUJBQWUsRUFBQSwyQkFBRyxFQUVqQjtBQUNELG1CQUFlLEVBQUEseUJBQUMsRUFBRSxFQUFFOztBQUVoQixnQkFBUSxFQUFFOztBQUVOLGlCQUFLLElBQUk7QUFDTCx1QkFBTyxLQUFLLENBQUM7O0FBQUEsQUFFakIsaUJBQUssSUFBSTtBQUNMLHVCQUFPLEtBQUssQ0FBQzs7QUFBQSxBQUVqQjtBQUNJLHVCQUFPLEVBQUUsQ0FBQzs7QUFBQSxTQUVqQjtLQUVKOztDQUVKLENBQUM7O0lBRUksTUFBTTthQUFOLE1BQU07OEJBQU4sTUFBTTs7O2lCQUFOLE1BQU07Ozs7Ozs7OztlQVFJLGVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTs7QUFFekIsb0NBQVcsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDMUIsb0NBQVcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLG9DQUFXLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEFBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxHQUFJLE9BQU8sR0FBRywwQ0FBd0IsQ0FBQztBQUM5RixtQkFBTyx3QkFBVyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBRXpDOzs7V0FmQyxNQUFNOzs7cUJBbUJHLE1BQU0iLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlckltcGwgZnJvbSAnLi9QYXJzZXJJbXBsJztcbmltcG9ydCBBYnN0cmFjdFN5bnRheFRyZWUgZnJvbSAnLi9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUnO1xuXG5sZXQgaGVscCA9IHtcblxuICBjb252ZXJ0VXNhZ2UobGlzdCkge1xuXG4gICAgaWYoIWxpc3QpIHJldHVybiAnJztcblxuICAgIGlmKGxpc3QubGVuZ3RoIDwgMCApIHJldHVybiAnJztcblxuICAgIHJldHVybiBbJywnXS5jb25cbiAgICBcbiAgICB9LFxuICAgIHBhcnNlTnVtYmVyKHN0cikge1xuXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICB9LFxuICAgIHBhcnNlQm9vbGVhbihib29sKSB7XG4gICAgICAgIHJldHVybiBib29sO1xuXG4gICAgfSxcbiAgICBlbnN1cmVUYWdzTWF0Y2goKSB7XG5cbiAgICB9LFxuICAgIGNvbnZlcnRPcGVyYXRvcihvcCkge1xuXG4gICAgICAgIHN3aXRjaCAob3ApIHtcblxuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnPT09JztcblxuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnIT09JztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gb3A7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuXG5jbGFzcyBQYXJzZXIge1xuXG4gICAgLyoqIFxuICAgICAqIHBhcnNlIGlucHV0IGFuZCByZXR1cm4gYW4gQVNUXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFxuICAgICAqIEBwYXJhbSB7QWJzdHJhY3RTeW50YXhUcmVlfSB1c2VyQVNUIFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlKGlucHV0LCB1c2VyQVNUKSB7XG5cbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkgPSB7fTtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuaGVscCA9IGhlbHA7XG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5LmFzdCA9ICh0eXBlb2YgdXNlckFTVCA9PT0gJ29iamVjdCcpID8gdXNlckFTVCA6IG5ldyBBYnN0cmFjdFN5bnRheFRyZWUoKTtcbiAgICAgICAgcmV0dXJuIFBhcnNlckltcGwucGFyc2VyLnBhcnNlKGlucHV0KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJzZXJcbiJdfQ==