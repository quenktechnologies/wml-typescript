/**
 * Template
 * @param {array<Import>} imports 
 * @param {Tag} root
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Template = (function () {
    function Template(imports, args, root, location) {
        _classCallCheck(this, Template);

        this.imports = imports;
        this.arguments = args;
        this.root = root;
        this.location = location;
    }

    _createClass(Template, [{
        key: 'toString',
        value: function toString() {

            var str = '';
            var args = this.arguments.join(',');

            args = args ? ' ,' + args : args;

            this.imports.forEach(function (i) {
                return str = str + i + '\n';
            });

            str = str + ('export default function (make' + args + ') { return ' + this.root + '; }');

            return str;
        }
    }]);

    return Template;
})();

exports['default'] = Template;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBS00sUUFBUTtBQUVDLGFBRlQsUUFBUSxDQUVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGekMsUUFBUTs7QUFJTixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsUUFBUTs7ZUFXRixvQkFBRzs7QUFFUCxnQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVwQyxnQkFBSSxHQUFHLEFBQUMsSUFBSSxHQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVuQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7YUFBQSxDQUFDLENBQUM7O0FBRWhELGVBQUcsR0FBRyxHQUFHLHNDQUFtQyxJQUFJLG1CQUFjLElBQUksQ0FBQyxJQUFJLFNBQUssQ0FBQTs7QUFFNUUsbUJBQU8sR0FBRyxDQUFDO1NBRWQ7OztXQXhCQyxRQUFROzs7cUJBNEJDLFFBQVEiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlbXBsYXRlXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHMgXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICovXG5jbGFzcyBUZW1wbGF0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCBhcmdzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzLmpvaW4oJywnKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHRoaXMuaW1wb3J0cy5mb3JFYWNoKGkgPT4gc3RyID0gc3RyICsgaSArICdcXG4nKTtcblxuICAgICAgICBzdHIgPSBzdHIgKyBgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2Uke2FyZ3N9KSB7IHJldHVybiAke3RoaXMucm9vdH07IH1gXG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuIl19