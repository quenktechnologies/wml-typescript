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
 * SwitchStatement
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases
 * @param {Location} location
 */
var SwitchStatement = function (_Node) {
    _inherits(SwitchStatement, _Node);

    function SwitchStatement(expression, cases, location) {
        _classCallCheck(this, SwitchStatement);

        var _this = _possibleConstructorReturn(this, (SwitchStatement.__proto__ || Object.getPrototypeOf(SwitchStatement)).call(this, location));

        _this.type = 'switch-statement';
        _this.expression = expression;
        _this.cases = cases;

        return _this;
    }

    _createClass(SwitchStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var str = '{';

            this.cases.forEach(function (c) {

                str = str + ' ' + (c.expression ? c.expression.transpile(o) : 'default') + (' : ' + c.transpile(o) + ', ');
            });

            str = str.substring(0, str.length - 1);
            str = str + '}';

            return '$$switch(' + this.expression.transpile(o) + ',' + str + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add('$$switch(').add(this.expression.compile(o)).add(',{');

            this.cases.forEach(function (c, k, all) {

                node.add(c.expression ? c.expression.compile(o) : 'default').add(':').add(c.compile(o));

                if (k < all.length - 1) node.add(',');
            });

            return node.add('})');
        }
    }]);

    return SwitchStatement;
}(_Node3.default);

exports.default = SwitchStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvU3dpdGNoU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlN3aXRjaFN0YXRlbWVudCIsImV4cHJlc3Npb24iLCJjYXNlcyIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzdHIiLCJmb3JFYWNoIiwiYyIsInRyYW5zcGlsZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiayIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxlOzs7QUFFRiw2QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQUE7O0FBQUEsc0lBRS9CQSxRQUYrQjs7QUFHckMsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBTHFDO0FBT3hDOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsZ0JBQUlDLE1BQU0sR0FBVjs7QUFFQSxpQkFBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CLGFBQUs7O0FBRXBCRCxzQkFBU0EsR0FBSCxVQUFXRSxFQUFFUCxVQUFILEdBQWlCTyxFQUFFUCxVQUFGLENBQWFRLFNBQWIsQ0FBdUJKLENBQXZCLENBQWpCLEdBQTZDLFNBQXZELGFBQ0lHLEVBQUVDLFNBQUYsQ0FBWUosQ0FBWixDQURKLFFBQU47QUFHSCxhQUxEOztBQU9BQyxrQkFBTUEsSUFBSUksU0FBSixDQUFjLENBQWQsRUFBaUJKLElBQUlLLE1BQUosR0FBYSxDQUE5QixDQUFOO0FBQ0FMLGtCQUFNQSxNQUFNLEdBQVo7O0FBRUEsaUNBQW1CLEtBQUtMLFVBQUwsQ0FBZ0JRLFNBQWhCLENBQTBCSixDQUExQixDQUFuQixTQUFtREMsR0FBbkQ7QUFFSDs7O2dDQUVPRCxDLEVBQUc7O0FBRVAsZ0JBQUlPLE9BQU8sS0FBS0MsVUFBTCxDQUFnQlIsRUFBRVMsUUFBbEIsRUFBNEIsRUFBNUIsQ0FBWDs7QUFFQUYsaUJBQUtHLEdBQUwsY0FDQUEsR0FEQSxDQUNJLEtBQUtkLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCWCxDQUF4QixDQURKLEVBRUFVLEdBRkEsQ0FFSSxJQUZKOztBQUlBLGlCQUFLYixLQUFMLENBQVdLLE9BQVgsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJUyxDQUFKLEVBQU9DLEdBQVAsRUFBZTs7QUFFOUJOLHFCQUFLRyxHQUFMLENBQVVQLEVBQUVQLFVBQUgsR0FBaUJPLEVBQUVQLFVBQUYsQ0FBYWUsT0FBYixDQUFxQlgsQ0FBckIsQ0FBakIsWUFBVCxFQUNBVSxHQURBLENBQ0ksR0FESixFQUVBQSxHQUZBLENBRUlQLEVBQUVRLE9BQUYsQ0FBVVgsQ0FBVixDQUZKOztBQUlBLG9CQUFJWSxJQUFJQyxJQUFJUCxNQUFKLEdBQWEsQ0FBckIsRUFDSUMsS0FBS0csR0FBTCxDQUFTLEdBQVQ7QUFFUCxhQVREOztBQVdBLG1CQUFPSCxLQUFLRyxHQUFMLENBQVMsSUFBVCxDQUFQO0FBRUg7Ozs7OztrQkFJVWYsZSIsImZpbGUiOiJTd2l0Y2hTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFN3aXRjaFN0YXRlbWVudFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PENhc2VTdGF0ZW1lbnQ+fSBjYXNlc1xuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgU3dpdGNoU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjYXNlcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzd2l0Y2gtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5jYXNlcyA9IGNhc2VzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgc3RyID0gJ3snO1xuXG4gICAgICAgIHRoaXMuY2FzZXMuZm9yRWFjaChjID0+IHtcblxuICAgICAgICAgICAgc3RyID0gYCR7c3RyfSAkeyhjLmV4cHJlc3Npb24pID8gYy5leHByZXNzaW9uLnRyYW5zcGlsZShvKSA6ICdkZWZhdWx0J31gICtcbiAgICAgICAgICAgICAgICBgIDogJHtjLnRyYW5zcGlsZShvKX0sIGA7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gICAgICAgIHN0ciA9IHN0ciArICd9JztcblxuICAgICAgICByZXR1cm4gYCQkc3dpdGNoKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZShvKX0sJHtzdHJ9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQoYCQkc3dpdGNoKGApLlxuICAgICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJyx7Jyk7XG5cbiAgICAgICAgdGhpcy5jYXNlcy5mb3JFYWNoKChjLCBrLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoKGMuZXhwcmVzc2lvbikgPyBjLmV4cHJlc3Npb24uY29tcGlsZShvKSA6IGBkZWZhdWx0YCkuXG4gICAgICAgICAgICBhZGQoJzonKS5cbiAgICAgICAgICAgIGFkZChjLmNvbXBpbGUobykpO1xuXG4gICAgICAgICAgICBpZiAoayA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCd9KScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0YXRlbWVudFxuIl19