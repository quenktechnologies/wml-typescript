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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0ltcG9ydFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBTU0sZUFBZTtBQUVOLGFBRlQsZUFBZSxDQUVMLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxlQUFlOztBQUlmLFlBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFDN0IsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVRDLGVBQWU7O2VBV1IscUJBQUc7O0FBRVIsK0JBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBSTtTQUUvRTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRS9COzs7V0F2QkMsZUFBZTs7O3FCQTJCTixlQUFlIiwiZmlsZSI6IkltcG9ydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0U3RhdGVtZW50IFxuICogQHBhcmFtIHtNZW1iZXJ9IG1lbWJlclxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfSBtb2R1bGVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIEltcG9ydFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIG1vZHVsZSwgbG9jYXRpb24pIHtcblxuICAgICAgdGhpcy50eXBlID0gJ2ltcG9ydC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYGltcG9ydCAke3RoaXMubWVtYmVyLnRyYW5zcGlsZSgpfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O2A7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdpbXBvcnQnKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U3RhdGVtZW50XG4iXX0=