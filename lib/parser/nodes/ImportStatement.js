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
    function ImportStatement(member, module, location) {
        _classCallCheck(this, ImportStatement);

        this.type = 'import-statement';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW1wb3J0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTSxlQUFlO0FBRU4sYUFGVCxlQUFlLENBRUwsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLGVBQWU7O0FBSWYsWUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUM3QixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsZUFBZTs7ZUFXUixxQkFBRzs7QUFFUiwrQkFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFJO1NBRS9FOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFL0I7OztXQXZCQyxlQUFlOzs7cUJBMkJOLGVBQWUiLCJmaWxlIjoiSW1wb3J0U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnRTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge01lbWJlcn0gbWVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgSW1wb3J0U3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgbW9kdWxlLCBsb2NhdGlvbikge1xuXG4gICAgICB0aGlzLnR5cGUgPSAnaW1wb3J0LXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgaW1wb3J0ICR7dGhpcy5tZW1iZXIudHJhbnNwaWxlKCl9IGZyb20gJHt0aGlzLm1vZHVsZS50cmFuc3BpbGUoKX07YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ2ltcG9ydCcpLlxuICAgICAgICBhZGQodGhpcy5tZW1iZXIuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm1vZHVsZS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRTdGF0ZW1lbnRcbiJdfQ==