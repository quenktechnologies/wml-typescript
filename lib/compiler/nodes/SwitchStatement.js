'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var count = 0;

/**
 * SwitchStatement 
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases 
 * @param {Location} location 
 */

var SwitchStatement = (function (_Node) {
    _inherits(SwitchStatement, _Node);

    function SwitchStatement(expression, cases, location) {
        _classCallCheck(this, SwitchStatement);

        _get(Object.getPrototypeOf(SwitchStatement.prototype), 'constructor', this).call(this, location);
        this.type = 'switch-statement';
        this.expression = expression;
        this.cases = cases;
    }

    _createClass(SwitchStatement, [{
        key: 'transpile',
        value: function transpile() {

            var str = '{';

            count = count + 1;

            this.cases.forEach(function (c) {
                return str = str + c.value.transpile() + ':' + c.transpile() + ',';
            });

            str = str.substring(0, str.length - 1);
            str = str + '}';

            return 'make.$switch' + count + '(' + this.expression.transpile() + ',' + str + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            count = count + 1;
            node.add('make.$switch' + count + '(').add(this.expression.compile(o)).add(',{');

            this.cases.forEach(function (c, k, all) {

                node.add(c.value.compile(o)).add(':').add(c.compile(o));

                if (k < all.length - 1) node.add(',');
            });

            return node.add('})');
        }
    }]);

    return SwitchStatement;
})(_Node3['default']);

exports['default'] = SwitchStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9Td2l0Y2hTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztJQVFSLGVBQWU7Y0FBZixlQUFlOztBQUVOLGFBRlQsZUFBZSxDQUVMLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUZ2QyxlQUFlOztBQUliLG1DQUpGLGVBQWUsNkNBSVAsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFDL0IsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FFdEI7O2lCQVRDLGVBQWU7O2VBV1IscUJBQUc7O0FBRVIsZ0JBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFZCxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRWxCLGdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQ2hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUc7YUFBQSxDQUFDLENBQUM7O0FBRWpFLGVBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLGVBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVoQixvQ0FBc0IsS0FBSyxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFNBQUksR0FBRyxPQUFJO1NBRXhFOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFNUMsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsR0FBRyxrQkFBZ0IsS0FBSyxPQUFJLENBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRVYsZ0JBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUs7O0FBRTlCLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDUixHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVsQixvQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFckIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFekI7OztXQWpEQyxlQUFlOzs7cUJBcUROLGVBQWUiLCJmaWxlIjoiU3dpdGNoU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogU3dpdGNoU3RhdGVtZW50IFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PENhc2VTdGF0ZW1lbnQ+fSBjYXNlcyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGNhc2VzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3N3aXRjaC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmNhc2VzID0gY2FzZXM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICd7JztcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICB0aGlzLmNhc2VzLmZvckVhY2goYyA9PlxuICAgICAgICAgICAgc3RyID0gc3RyICsgYy52YWx1ZS50cmFuc3BpbGUoKSArICc6JyArIGMudHJhbnNwaWxlKCkgKyAnLCcpO1xuXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgICAgICBzdHIgPSBzdHIgKyAnfSc7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLiRzd2l0Y2gke2NvdW50fSgke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKX0sJHtzdHJ9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9ICB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICBub2RlLmFkZChgbWFrZS4kc3dpdGNoJHtjb3VudH0oYCkuXG4gICAgICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnLHsnKTtcblxuICAgICAgICB0aGlzLmNhc2VzLmZvckVhY2goKGMsIGssIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChjLnZhbHVlLmNvbXBpbGUobykpLlxuICAgICAgICAgICAgYWRkKCc6JykuXG4gICAgICAgICAgICBhZGQoYy5jb21waWxlKG8pKTtcblxuICAgICAgICAgICAgaWYgKGsgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlLmFkZCgnfSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hTdGF0ZW1lbnRcbiJdfQ==