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
    function Template(imports, root, location) {
        _classCallCheck(this, Template);

        this.imports = imports;
        this.root = root;
        this.location = location;
    }

    _createClass(Template, [{
        key: 'toString',
        value: function toString() {

            var str = '';

            this.imports.forEach(function (i) {
                return str = str + i + '\n';
            });

            str = str + ('export default function (make) { return ' + this.root + '; }');

            return str;
        }
    }]);

    return Template;
})();

exports['default'] = Template;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBS00sUUFBUTtBQUVDLGFBRlQsUUFBUSxDQUVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZuQyxRQUFROztBQUlOLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFSQyxRQUFROztlQVVGLG9CQUFHOztBQUVQLGdCQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRWIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJO2FBQUEsQ0FBQyxDQUFDOztBQUVoRCxlQUFHLEdBQUcsR0FBRyxpREFBOEMsSUFBSSxDQUFDLElBQUksU0FBSyxDQUFBOztBQUdyRSxtQkFBTyxHQUFHLENBQUM7U0FFZDs7O1dBckJDLFFBQVE7OztxQkF5QkMsUUFBUSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0cyBcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKi9cbmNsYXNzIFRlbXBsYXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGltcG9ydHMsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgICAgIHRoaXMuaW1wb3J0cy5mb3JFYWNoKGkgPT4gc3RyID0gc3RyICsgaSArICdcXG4nKTtcblxuICAgICAgICBzdHIgPSBzdHIgKyBgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2UpIHsgcmV0dXJuICR7dGhpcy5yb290fTsgfWBcblxuXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcbiJdfQ==