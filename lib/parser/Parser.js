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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvUGFyc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQkFBdUIsY0FBYzs7Ozt1Q0FDTiw0QkFBNEI7Ozs7QUFFM0QsSUFBSSxJQUFJLEdBQUc7O0FBRVQsZ0JBQVksRUFBQSxzQkFBQyxJQUFJLEVBQUU7O0FBRWpCLFlBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7O0FBRXBCLFlBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUcsT0FBTyxFQUFFLENBQUM7O0FBRS9CLGVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7S0FFZjtBQUNELGVBQVcsRUFBQSxxQkFBQyxHQUFHLEVBQUU7O0FBRWIsZUFBTyxHQUFHLENBQUM7S0FFZDtBQUNELGdCQUFZLEVBQUEsc0JBQUMsSUFBSSxFQUFFO0FBQ2YsZUFBTyxJQUFJLENBQUM7S0FFZjtBQUNELG1CQUFlLEVBQUEsMkJBQUcsRUFFakI7QUFDRCxtQkFBZSxFQUFBLHlCQUFDLEVBQUUsRUFBRTs7QUFFaEIsZ0JBQVEsRUFBRTs7QUFFTixpQkFBSyxJQUFJO0FBQ0wsdUJBQU8sS0FBSyxDQUFDOztBQUFBLEFBRWpCLGlCQUFLLElBQUk7QUFDTCx1QkFBTyxLQUFLLENBQUM7O0FBQUEsQUFFakI7QUFDSSx1QkFBTyxFQUFFLENBQUM7O0FBQUEsU0FFakI7S0FFSjs7Q0FFSixDQUFDOztJQUVJLE1BQU07YUFBTixNQUFNOzhCQUFOLE1BQU07OztpQkFBTixNQUFNOzs7Ozs7Ozs7ZUFRSSxlQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7O0FBRXpCLG9DQUFXLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzFCLG9DQUFXLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQyxvQ0FBVyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxBQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsR0FBSSxPQUFPLEdBQUcsMENBQXdCLENBQUM7QUFDOUYsbUJBQU8sd0JBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUV6Qzs7O1dBZkMsTUFBTTs7O3FCQW1CRyxNQUFNIiwiZmlsZSI6IlBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXJJbXBsIGZyb20gJy4vUGFyc2VySW1wbCc7XG5pbXBvcnQgQWJzdHJhY3RTeW50YXhUcmVlIGZyb20gJy4vbm9kZXMvQWJzdHJhY3RTeW50YXhUcmVlJztcblxubGV0IGhlbHAgPSB7XG5cbiAgY29udmVydFVzYWdlKGxpc3QpIHtcblxuICAgIGlmKCFsaXN0KSByZXR1cm4gJyc7XG5cbiAgICBpZihsaXN0Lmxlbmd0aCA8IDAgKSByZXR1cm4gJyc7XG5cbiAgICByZXR1cm4gWycsJ10uY29uXG4gICAgXG4gICAgfSxcbiAgICBwYXJzZU51bWJlcihzdHIpIHtcblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgfSxcbiAgICBwYXJzZUJvb2xlYW4oYm9vbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcblxuICAgIH0sXG4gICAgZW5zdXJlVGFnc01hdGNoKCkge1xuXG4gICAgfSxcbiAgICBjb252ZXJ0T3BlcmF0b3Iob3ApIHtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJz09PSc7XG5cbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyE9PSc7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuY2xhc3MgUGFyc2VyIHtcblxuICAgIC8qKiBcbiAgICAgKiBwYXJzZSBpbnB1dCBhbmQgcmV0dXJuIGFuIEFTVFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBcbiAgICAgKiBAcGFyYW0ge0Fic3RyYWN0U3ludGF4VHJlZX0gdXNlckFTVCBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZShpbnB1dCwgdXNlckFTVCkge1xuXG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5ID0ge307XG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5LmhlbHAgPSBoZWxwO1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5hc3QgPSAodHlwZW9mIHVzZXJBU1QgPT09ICdvYmplY3QnKSA/IHVzZXJBU1QgOiBuZXcgQWJzdHJhY3RTeW50YXhUcmVlKCk7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlci5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=