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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9Td2l0Y2hTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUN6QixLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRSixlQUFlO2NBQWYsZUFBZTs7QUFFTixhQUZULGVBQWUsQ0FFTCxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGdkMsZUFBZTs7QUFJYixtQ0FKRixlQUFlLDZDQUlQLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUV0Qjs7aUJBUkMsZUFBZTs7ZUFVUixxQkFBRzs7QUFFUixnQkFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVkLGlCQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFDaEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRzthQUFBLENBQUMsQ0FBQzs7QUFFakUsZUFBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkMsZUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWhCLG9DQUFzQixLQUFLLFNBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBSSxHQUFHLE9BQUk7U0FFeEU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUU1QyxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbEIsZ0JBQUksQ0FBQyxHQUFHLGtCQUFnQixLQUFLLE9BQUksQ0FDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFVixnQkFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBSzs7QUFFOUIsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWxCLG9CQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUVyQixDQUFDLENBQUM7O0FBRUgsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUV6Qjs7O1dBaERDLGVBQWU7OztxQkFvRE4sZUFBZSIsImZpbGUiOiJTd2l0Y2hTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuY291bnQgPSAwO1xuXG4vKipcbiAqIFN3aXRjaFN0YXRlbWVudCBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxDYXNlU3RhdGVtZW50Pn0gY2FzZXMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgU3dpdGNoU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjYXNlcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuY2FzZXMgPSBjYXNlcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgc3RyID0gJ3snO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHRoaXMuY2FzZXMuZm9yRWFjaChjID0+XG4gICAgICAgICAgICBzdHIgPSBzdHIgKyBjLnZhbHVlLnRyYW5zcGlsZSgpICsgJzonICsgYy50cmFuc3BpbGUoKSArICcsJyk7XG5cbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gICAgICAgIHN0ciA9IHN0ciArICd9JztcblxuICAgICAgICByZXR1cm4gYG1ha2UuJHN3aXRjaCR7Y291bnR9KCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwke3N0cn0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG4gICAgICAgIG5vZGUuYWRkKGBtYWtlLiRzd2l0Y2gke2NvdW50fShgKS5cbiAgICAgICAgYWRkKHRoaXMuZXhwcmVzc2lvbi5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcseycpO1xuXG4gICAgICAgIHRoaXMuY2FzZXMuZm9yRWFjaCgoYywgaywgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGMudmFsdWUuY29tcGlsZShvKSkuXG4gICAgICAgICAgICBhZGQoJzonKS5cbiAgICAgICAgICAgIGFkZChjLmNvbXBpbGUobykpO1xuXG4gICAgICAgICAgICBpZiAoayA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCd9KScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0YXRlbWVudFxuIl19