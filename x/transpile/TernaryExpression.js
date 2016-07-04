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
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */

var TernaryExpression = (function (_Node) {
    _inherits(TernaryExpression, _Node);

    function TernaryExpression(logic, iftrue, iffalse, location) {
        _classCallCheck(this, TernaryExpression);

        _get(Object.getPrototypeOf(TernaryExpression.prototype), 'constructor', this).call(this, location);
        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
    }

    _createClass(TernaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return '(' + this.logic.transpile() + ')? ' + this.iftrue.transpile() + ' : ' + this.iffalse.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '(').add(this.logic.compile(o)).add(')?').add(this.iftrue.compile(o)).add(':').add(this.iffalse.compile(o));
        }
    }]);

    return TernaryExpression;
})(_Node3['default']);

exports['default'] = TernaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGVybmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7SUFRbkIsaUJBQWlCO2NBQWpCLGlCQUFpQjs7QUFFUixhQUZULGlCQUFpQixDQUVQLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs4QkFGNUMsaUJBQWlCOztBQUlqQixtQ0FKQSxpQkFBaUIsNkNBSVgsUUFBUSxFQUFFO0FBQ2QsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FFMUI7O2lCQVRDLGlCQUFpQjs7ZUFXVixxQkFBRzs7QUFFUix5QkFBVyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBRztTQUVsRzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FDVCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRWhDOzs7V0ExQkMsaUJBQWlCOzs7cUJBOEJSLGlCQUFpQiIsImZpbGUiOiJUZXJuYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGVybmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxvZ2ljIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZnRydWUgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmZmFsc2UgXG4gKi9cbmNsYXNzIFRlcm5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgaWZ0cnVlLCBpZmZhbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5pZnRydWUgPSBpZnRydWU7XG4gICAgICAgIHRoaXMuaWZmYWxzZSA9IGlmZmFsc2U7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAoJHt0aGlzLmxvZ2ljLnRyYW5zcGlsZSgpfSk/ICR7dGhpcy5pZnRydWUudHJhbnNwaWxlKCl9IDogJHt0aGlzLmlmZmFsc2UudHJhbnNwaWxlKCl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcoJykuXG4gICAgICAgIGFkZCh0aGlzLmxvZ2ljLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJyk/JykuXG4gICAgICAgIGFkZCh0aGlzLmlmdHJ1ZS5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCc6JykuXG4gICAgICAgIGFkZCh0aGlzLmlmZmFsc2UuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVybmFyeUV4cHJlc3Npb25cbiJdfQ==