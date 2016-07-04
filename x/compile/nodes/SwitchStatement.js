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

count = 0;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1N3aXRjaFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7O0FBQ3pCLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztJQVFKLGVBQWU7Y0FBZixlQUFlOztBQUVOLGFBRlQsZUFBZSxDQUVMLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUZ2QyxlQUFlOztBQUliLG1DQUpGLGVBQWUsNkNBSVAsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBRXRCOztpQkFSQyxlQUFlOztlQVVSLHFCQUFHOztBQUVSLGdCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWQsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixnQkFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUNoQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHO2FBQUEsQ0FBQyxDQUFDOztBQUVqRSxlQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2QyxlQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFaEIsb0NBQXNCLEtBQUssU0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFJLEdBQUcsT0FBSTtTQUV4RTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTVDLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNsQixnQkFBSSxDQUFDLEdBQUcsa0JBQWdCLEtBQUssT0FBSSxDQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVWLGdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFLOztBQUU5QixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQ1IsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFbEIsb0JBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRXJCLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRXpCOzs7V0FoREMsZUFBZTs7O3FCQW9ETixlQUFlIiwiZmlsZSI6IlN3aXRjaFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5jb3VudCA9IDA7XG5cbi8qKlxuICogU3dpdGNoU3RhdGVtZW50IFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PENhc2VTdGF0ZW1lbnQ+fSBjYXNlcyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGNhc2VzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5jYXNlcyA9IGNhc2VzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBzdHIgPSAneyc7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgdGhpcy5jYXNlcy5mb3JFYWNoKGMgPT5cbiAgICAgICAgICAgIHN0ciA9IHN0ciArIGMudmFsdWUudHJhbnNwaWxlKCkgKyAnOicgKyBjLnRyYW5zcGlsZSgpICsgJywnKTtcblxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgICAgICAgc3RyID0gc3RyICsgJ30nO1xuXG4gICAgICAgIHJldHVybiBgbWFrZS4kc3dpdGNoJHtjb3VudH0oJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LCR7c3RyfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSAgdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICAgICAgbm9kZS5hZGQoYG1ha2UuJHN3aXRjaCR7Y291bnR9KGApLlxuICAgICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJyx7Jyk7XG5cbiAgICAgICAgdGhpcy5jYXNlcy5mb3JFYWNoKChjLCBrLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYy52YWx1ZS5jb21waWxlKG8pKS5cbiAgICAgICAgICAgIGFkZCgnOicpLlxuICAgICAgICAgICAgYWRkKGMuY29tcGlsZShvKSk7XG5cbiAgICAgICAgICAgIGlmIChrIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZS5hZGQoJ30pJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoU3RhdGVtZW50XG4iXX0=