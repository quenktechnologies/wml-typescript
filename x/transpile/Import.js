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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSW1wb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTSxlQUFlO0FBRU4sYUFGVCxlQUFlLENBRUwsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnJDLGVBQWU7O0FBSWIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVJDLGVBQWU7O2VBVVIscUJBQUc7O0FBRVIsK0JBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBSTtTQUUvRTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRS9COzs7V0F0QkMsZUFBZTs7O3FCQTBCTixlQUFlIiwiZmlsZSI6IkltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0U3RhdGVtZW50IFxuICogQHBhcmFtIHtNZW1iZXJ9IG1lbWJlclxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfSBtb2R1bGVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIEltcG9ydFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgJHt0aGlzLm1lbWJlci50cmFuc3BpbGUoKX0gZnJvbSAke3RoaXMubW9kdWxlLnRyYW5zcGlsZSgpfTtgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnaW1wb3J0JykuXG4gICAgICAgIGFkZCh0aGlzLm1lbWJlci5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKHRoaXMubW9kdWxlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydFN0YXRlbWVudFxuIl19