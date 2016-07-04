/**
 * ImportStatement 
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ImportStatement = (function () {
    function ImportStatement(members, module, location) {
        _classCallCheck(this, ImportStatement);

        this.member = member;
        this.module = module;
        this.location = location;
    }

    _createClass(ImportStatement, [{
        key: 'transpile',
        value: function transpile() {

            return 'import ' + this.member.transpile() + ' from ' + this.module.transpile() + ';';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'import').add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return ImportStatement;
})();

exports['default'] = ImportStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9JbXBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQU1NLGVBQWU7QUFFTixhQUZULGVBQWUsQ0FFTCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTs4QkFGckMsZUFBZTs7QUFJYixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBUkMsZUFBZTs7ZUFVUixxQkFBRzs7QUFFUiwrQkFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFJO1NBRS9FOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFL0I7OztXQXRCQyxlQUFlOzs7cUJBMEJOLGVBQWUiLCJmaWxlIjoiSW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnRTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge01lbWJlcn0gbWVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgSW1wb3J0U3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIG1vZHVsZSwgbG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYGltcG9ydCAke3RoaXMubWVtYmVyLnRyYW5zcGlsZSgpfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O2A7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdpbXBvcnQnKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U3RhdGVtZW50XG4iXX0=