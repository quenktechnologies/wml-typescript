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

/**
 * CompositeMember 
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */

var CompositeMember = (function (_Node) {
    _inherits(CompositeMember, _Node);

    function CompositeMember(member, module, location) {
        _classCallCheck(this, CompositeMember);

        _get(Object.getPrototypeOf(CompositeMember.prototype), 'constructor', this).call(this, location);
        this.member = member;
        this.module = module;
    }

    _createClass(CompositeMember, [{
        key: 'transpile',
        value: function transpile() {

            return 'import * as ' + this.member.transpile() + ' from ' + this.module.transpile() + ';';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'import * as').add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return CompositeMember;
})(_Node3['default']);

exports['default'] = CompositeMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9Db21wb3NpdGVNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7SUFRbkIsZUFBZTtjQUFmLGVBQWU7O0FBRU4sYUFGVCxlQUFlLENBRUwsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLGVBQWU7O0FBR2IsbUNBSEYsZUFBZSw2Q0FHUCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDeEI7O2lCQU5DLGVBQWU7O2VBUVIscUJBQUc7O0FBRVIsb0NBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBSTtTQUVwRjs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRS9COzs7V0FwQkMsZUFBZTs7O3FCQXdCTixlQUFlIiwiZmlsZSI6IkNvbXBvc2l0ZU1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29tcG9zaXRlTWVtYmVyIFxuICogQHBhcmFtIHtNZW1iZXJ9IG1lbWJlclxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfSBtb2R1bGVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIENvbXBvc2l0ZU1lbWJlciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYGltcG9ydCAqIGFzICR7dGhpcy5tZW1iZXIudHJhbnNwaWxlKCl9IGZyb20gJHt0aGlzLm1vZHVsZS50cmFuc3BpbGUoKX07YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ2ltcG9ydCAqIGFzJykuXG4gICAgICAgIGFkZCh0aGlzLm1lbWJlci5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKHRoaXMubW9kdWxlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2l0ZU1lbWJlclxuIl19