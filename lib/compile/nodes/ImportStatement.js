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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0ltcG9ydFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBTU0sZUFBZTtBQUVOLGFBRlQsZUFBZSxDQUVMLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxlQUFlOztBQUliLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFSQyxlQUFlOztlQVVSLHFCQUFHOztBQUVSLCtCQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQUk7U0FFL0U7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUvQjs7O1dBdEJDLGVBQWU7OztxQkEwQk4sZUFBZSIsImZpbGUiOiJJbXBvcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltcG9ydFN0YXRlbWVudCBcbiAqIEBwYXJhbSB7TWVtYmVyfSBtZW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nTGl0ZXJhbH0gbW9kdWxlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBJbXBvcnRTdGF0ZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgJHt0aGlzLm1lbWJlci50cmFuc3BpbGUoKX0gZnJvbSAke3RoaXMubW9kdWxlLnRyYW5zcGlsZSgpfTtgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnaW1wb3J0JykuXG4gICAgICAgIGFkZCh0aGlzLm1lbWJlci5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKHRoaXMubW9kdWxlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydFN0YXRlbWVudFxuIl19