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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21waWxlL1BhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MEJBQXVCLGNBQWM7Ozs7dUNBQ04sNEJBQTRCOzs7O0FBRTNELElBQUksSUFBSSxHQUFHOztBQUVULGdCQUFZLEVBQUEsc0JBQUMsSUFBSSxFQUFFOztBQUVqQixZQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDOztBQUVwQixZQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHLE9BQU8sRUFBRSxDQUFDOztBQUUvQixlQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFBO0tBRWY7QUFDRCxlQUFXLEVBQUEscUJBQUMsR0FBRyxFQUFFOztBQUViLGVBQU8sR0FBRyxDQUFDO0tBRWQ7QUFDRCxnQkFBWSxFQUFBLHNCQUFDLElBQUksRUFBRTtBQUNmLGVBQU8sSUFBSSxDQUFDO0tBRWY7QUFDRCxtQkFBZSxFQUFBLDJCQUFHLEVBRWpCO0FBQ0QsbUJBQWUsRUFBQSx5QkFBQyxFQUFFLEVBQUU7O0FBRWhCLGdCQUFRLEVBQUU7O0FBRU4saUJBQUssSUFBSTtBQUNMLHVCQUFPLEtBQUssQ0FBQzs7QUFBQSxBQUVqQixpQkFBSyxJQUFJO0FBQ0wsdUJBQU8sS0FBSyxDQUFDOztBQUFBLEFBRWpCO0FBQ0ksdUJBQU8sRUFBRSxDQUFDOztBQUFBLFNBRWpCO0tBRUo7O0NBRUosQ0FBQzs7SUFFSSxNQUFNO2FBQU4sTUFBTTs4QkFBTixNQUFNOzs7aUJBQU4sTUFBTTs7Ozs7Ozs7O2VBUUksZUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFOztBQUV6QixvQ0FBVyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMxQixvQ0FBVyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakMsb0NBQVcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQUFBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUksT0FBTyxHQUFHLDBDQUF3QixDQUFDO0FBQzlGLG1CQUFPLHdCQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFekM7OztXQWZDLE1BQU07OztxQkFtQkcsTUFBTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0IEFic3RyYWN0U3ludGF4VHJlZSBmcm9tICcuL25vZGVzL0Fic3RyYWN0U3ludGF4VHJlZSc7XG5cbmxldCBoZWxwID0ge1xuXG4gIGNvbnZlcnRVc2FnZShsaXN0KSB7XG5cbiAgICBpZighbGlzdCkgcmV0dXJuICcnO1xuXG4gICAgaWYobGlzdC5sZW5ndGggPCAwICkgcmV0dXJuICcnO1xuXG4gICAgcmV0dXJuIFsnLCddLmNvblxuICAgIFxuICAgIH0sXG4gICAgcGFyc2VOdW1iZXIoc3RyKSB7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIH0sXG4gICAgcGFyc2VCb29sZWFuKGJvb2wpIHtcbiAgICAgICAgcmV0dXJuIGJvb2w7XG5cbiAgICB9LFxuICAgIGVuc3VyZVRhZ3NNYXRjaCgpIHtcblxuICAgIH0sXG4gICAgY29udmVydE9wZXJhdG9yKG9wKSB7XG5cbiAgICAgICAgc3dpdGNoIChvcCkge1xuXG4gICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc9PT0nO1xuXG4gICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICchPT0nO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBvcDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG5cbmNsYXNzIFBhcnNlciB7XG5cbiAgICAvKiogXG4gICAgICogcGFyc2UgaW5wdXQgYW5kIHJldHVybiBhbiBBU1RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdFN5bnRheFRyZWV9IHVzZXJBU1QgXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoaW5wdXQsIHVzZXJBU1QpIHtcblxuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eSA9IHt9O1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5oZWxwID0gaGVscDtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuYXN0ID0gKHR5cGVvZiB1c2VyQVNUID09PSAnb2JqZWN0JykgPyB1c2VyQVNUIDogbmV3IEFic3RyYWN0U3ludGF4VHJlZSgpO1xuICAgICAgICByZXR1cm4gUGFyc2VySW1wbC5wYXJzZXIucGFyc2UoaW5wdXQpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNlclxuIl19