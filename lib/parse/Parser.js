'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ParserImpl = require('./ParserImpl');

var _ParserImpl2 = _interopRequireDefault(_ParserImpl);

var _AbstractSyntaxTree = require('./AbstractSyntaxTree');

var _AbstractSyntaxTree2 = _interopRequireDefault(_AbstractSyntaxTree);

var help = {

    location: function location(src, firstToken, lastToken) {

        return {

            match: src,
            start: {
                line: firstToken.first_line,
                column: firstToken.first_column
            },
            end: {
                line: lastToken.last_line,
                column: lastToken.last_column
            }

        };
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
            _ParserImpl2['default'].parser.yy.ast = typeof userAST === 'object' ? userAST : new _AbstractSyntaxTree2['default']();
            return _ParserImpl2['default'].parser.parse(input);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9QYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzBCQUF1QixjQUFjOzs7O2tDQUNOLHNCQUFzQjs7OztBQUVyRCxJQUFJLElBQUksR0FBRzs7QUFFUCxZQUFRLEVBQUEsa0JBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7O0FBRWpDLGVBQU87O0FBRUgsaUJBQUssRUFBRSxHQUFHO0FBQ1YsaUJBQUssRUFBRTtBQUNILG9CQUFJLEVBQUUsVUFBVSxDQUFDLFVBQVU7QUFDM0Isc0JBQU0sRUFBRSxVQUFVLENBQUMsWUFBWTthQUNsQztBQUNELGVBQUcsRUFBRTtBQUNELG9CQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVM7QUFDekIsc0JBQU0sRUFBRSxTQUFTLENBQUMsV0FBVzthQUNoQzs7U0FFSixDQUFDO0tBR0w7QUFDRCxlQUFXLEVBQUEscUJBQUMsR0FBRyxFQUFFOztBQUViLGVBQU8sR0FBRyxDQUFDO0tBRWQ7QUFDRCxnQkFBWSxFQUFBLHNCQUFDLElBQUksRUFBRTtBQUNmLGVBQU8sSUFBSSxDQUFDO0tBRWY7QUFDRCxtQkFBZSxFQUFBLDJCQUFHLEVBRWpCO0FBQ0QsbUJBQWUsRUFBQSx5QkFBQyxFQUFFLEVBQUU7O0FBRWhCLGdCQUFRLEVBQUU7O0FBRU4saUJBQUssSUFBSTtBQUNMLHVCQUFPLEtBQUssQ0FBQzs7QUFBQSxBQUVqQixpQkFBSyxJQUFJO0FBQ0wsdUJBQU8sS0FBSyxDQUFDOztBQUFBLEFBRWpCO0FBQ0ksdUJBQU8sRUFBRSxDQUFDOztBQUFBLFNBRWpCO0tBRUo7O0NBRUosQ0FBQzs7SUFFSSxNQUFNO2FBQU4sTUFBTTs4QkFBTixNQUFNOzs7aUJBQU4sTUFBTTs7Ozs7Ozs7O2VBUUksZUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFOztBQUV6QixvQ0FBVyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMxQixvQ0FBVyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakMsb0NBQVcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQUFBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUksT0FBTyxHQUFHLHFDQUF3QixDQUFDO0FBQzlGLG1CQUFPLHdCQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFekM7OztXQWZDLE1BQU07OztxQkFtQkcsTUFBTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0IEFic3RyYWN0U3ludGF4VHJlZSBmcm9tICcuL0Fic3RyYWN0U3ludGF4VHJlZSc7XG5cbmxldCBoZWxwID0ge1xuXG4gICAgbG9jYXRpb24oc3JjLCBmaXJzdFRva2VuLCBsYXN0VG9rZW4pIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBtYXRjaDogc3JjLFxuICAgICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBsaW5lOiBmaXJzdFRva2VuLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgY29sdW1uOiBmaXJzdFRva2VuLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBsaW5lOiBsYXN0VG9rZW4ubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogbGFzdFRva2VuLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuXG4gICAgfSxcbiAgICBwYXJzZU51bWJlcihzdHIpIHtcblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgfSxcbiAgICBwYXJzZUJvb2xlYW4oYm9vbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcblxuICAgIH0sXG4gICAgZW5zdXJlVGFnc01hdGNoKCkge1xuXG4gICAgfSxcbiAgICBjb252ZXJ0T3BlcmF0b3Iob3ApIHtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJz09PSc7XG5cbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyE9PSc7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuY2xhc3MgUGFyc2VyIHtcblxuICAgIC8qKiBcbiAgICAgKiBwYXJzZSBpbnB1dCBhbmQgcmV0dXJuIGFuIEFTVFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBcbiAgICAgKiBAcGFyYW0ge0Fic3RyYWN0U3ludGF4VHJlZX0gdXNlckFTVCBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZShpbnB1dCwgdXNlckFTVCkge1xuXG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5ID0ge307XG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5LmhlbHAgPSBoZWxwO1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5hc3QgPSAodHlwZW9mIHVzZXJBU1QgPT09ICdvYmplY3QnKSA/IHVzZXJBU1QgOiBuZXcgQWJzdHJhY3RTeW50YXhUcmVlKCk7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlci5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=