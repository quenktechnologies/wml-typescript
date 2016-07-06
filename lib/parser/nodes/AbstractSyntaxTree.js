'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Template = require('./Template');

var _Template2 = _interopRequireDefault(_Template);

var _ImportStatement = require('./ImportStatement');

var _ImportStatement2 = _interopRequireDefault(_ImportStatement);

var _DefaultMember = require('./DefaultMember');

var _DefaultMember2 = _interopRequireDefault(_DefaultMember);

var _CompositeMember = require('./CompositeMember');

var _CompositeMember2 = _interopRequireDefault(_CompositeMember);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Attribute = require('./Attribute');

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Interpolation = require('./Interpolation');

var _Interpolation2 = _interopRequireDefault(_Interpolation);

var _VariableExpression = require('./VariableExpression');

var _VariableExpression2 = _interopRequireDefault(_VariableExpression);

var _ObjectLiteral = require('./ObjectLiteral');

var _ObjectLiteral2 = _interopRequireDefault(_ObjectLiteral);

var _BooleanLiteral = require('./BooleanLiteral');

var _BooleanLiteral2 = _interopRequireDefault(_BooleanLiteral);

var _NumberLiteral = require('./NumberLiteral');

var _NumberLiteral2 = _interopRequireDefault(_NumberLiteral);

var _StringLiteral = require('./StringLiteral');

var _StringLiteral2 = _interopRequireDefault(_StringLiteral);

var _ArrayLiteral = require('./ArrayLiteral');

var _ArrayLiteral2 = _interopRequireDefault(_ArrayLiteral);

var _FunctionLiteral = require('./FunctionLiteral');

var _FunctionLiteral2 = _interopRequireDefault(_FunctionLiteral);

var _Characters = require('./Characters');

var _Characters2 = _interopRequireDefault(_Characters);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _TernaryExpression = require('./TernaryExpression');

var _TernaryExpression2 = _interopRequireDefault(_TernaryExpression);

var _BinaryExpression = require('./BinaryExpression');

var _BinaryExpression2 = _interopRequireDefault(_BinaryExpression);

var _UnaryExpression = require('./UnaryExpression');

var _UnaryExpression2 = _interopRequireDefault(_UnaryExpression);

var _FunctionExpression = require('./FunctionExpression');

var _FunctionExpression2 = _interopRequireDefault(_FunctionExpression);

var _PropertyExpression = require('./PropertyExpression');

var _PropertyExpression2 = _interopRequireDefault(_PropertyExpression);

var _MethodExpression = require('./MethodExpression');

var _MethodExpression2 = _interopRequireDefault(_MethodExpression);

var _BindExpression = require('./BindExpression');

var _BindExpression2 = _interopRequireDefault(_BindExpression);

var _ForStatement = require('./ForStatement');

var _ForStatement2 = _interopRequireDefault(_ForStatement);

var _IfStatement = require('./IfStatement');

var _IfStatement2 = _interopRequireDefault(_IfStatement);

var _SwitchStatement = require('./SwitchStatement');

var _SwitchStatement2 = _interopRequireDefault(_SwitchStatement);

var _CaseStatement = require('./CaseStatement');

var _CaseStatement2 = _interopRequireDefault(_CaseStatement);

var _IncludeStatement = require('./IncludeStatement');

var _IncludeStatement2 = _interopRequireDefault(_IncludeStatement);

/**
 * AbstractSyntaxTree 
 */

var AbstractSyntaxTree = function AbstractSyntaxTree() {
    _classCallCheck(this, AbstractSyntaxTree);

    this.Template = _Template2['default'];
    this.ImportStatement = _ImportStatement2['default'];
    this.DefaultMember = _DefaultMember2['default'];
    this.CompositeMember = _CompositeMember2['default'];
    this.Tag = _Tag2['default'];
    this.Attribute = _Attribute2['default'];
    this.Interpolation = _Interpolation2['default'];
    this.VariableExpression = _VariableExpression2['default'];
    this.BooleanLiteral = _BooleanLiteral2['default'];
    this.NumberLiteral = _NumberLiteral2['default'];
    this.StringLiteral = _StringLiteral2['default'];
    this.ArrayLiteral = _ArrayLiteral2['default'];
    this.FunctionLiteral = _FunctionLiteral2['default'];
    this.Characters = _Characters2['default'];
    this.Filter = _Filter2['default'];
    this.TernaryExpression = _TernaryExpression2['default'];
    this.BinaryExpression = _BinaryExpression2['default'];
    this.UnaryExpression = _UnaryExpression2['default'];
    this.FunctionExpression = _FunctionExpression2['default'];
    this.PropertyExpression = _PropertyExpression2['default'];
    this.MethodExpression = _MethodExpression2['default'];
    this.BindExpression = _BindExpression2['default'];
    this.ForStatement = _ForStatement2['default'];
    this.IfStatement = _IfStatement2['default'];
    this.SwitchStatement = _SwitchStatement2['default'];
    this.CaseStatement = _CaseStatement2['default'];
    this.IncludeStatement = _IncludeStatement2['default'];
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQWJzdHJhY3RTeW50YXhUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7d0JBQXFCLFlBQVk7Ozs7K0JBQ0wsbUJBQW1COzs7OzZCQUNyQixpQkFBaUI7Ozs7K0JBQ2YsbUJBQW1COzs7O21CQUMvQixPQUFPOzs7O3lCQUNELGFBQWE7Ozs7NkJBQ1QsaUJBQWlCOzs7O2tDQUNaLHNCQUFzQjs7Ozs2QkFDM0IsaUJBQWlCOzs7OzhCQUNoQixrQkFBa0I7Ozs7NkJBQ25CLGlCQUFpQjs7Ozs2QkFDakIsaUJBQWlCOzs7OzRCQUNsQixnQkFBZ0I7Ozs7K0JBQ2IsbUJBQW1COzs7OzBCQUN4QixjQUFjOzs7O3NCQUNsQixVQUFVOzs7O2lDQUNDLHFCQUFxQjs7OztnQ0FDdEIsb0JBQW9COzs7OytCQUNyQixtQkFBbUI7Ozs7a0NBQ2hCLHNCQUFzQjs7OztrQ0FDdEIsc0JBQXNCOzs7O2dDQUN4QixvQkFBb0I7Ozs7OEJBQ3RCLGtCQUFrQjs7Ozs0QkFDcEIsZ0JBQWdCOzs7OzJCQUNqQixlQUFlOzs7OytCQUNYLG1CQUFtQjs7Ozs2QkFDckIsaUJBQWlCOzs7O2dDQUNkLG9CQUFvQjs7Ozs7Ozs7SUFLM0Msa0JBQWtCLEdBRVQsU0FGVCxrQkFBa0IsR0FFTjswQkFGWixrQkFBa0I7O0FBSWhCLFFBQUksQ0FBQyxRQUFRLHdCQUFXLENBQUM7QUFDekIsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLEdBQUcsbUJBQU0sQ0FBQztBQUNmLFFBQUksQ0FBQyxTQUFTLHlCQUFZLENBQUM7QUFDM0IsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGtCQUFrQixrQ0FBcUIsQ0FBQztBQUM3QyxRQUFJLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUNyQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsWUFBWSw0QkFBZSxDQUFDO0FBQ2pDLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxVQUFVLDBCQUFhLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sc0JBQVMsQ0FBQztBQUNyQixRQUFJLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzNDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGtCQUFrQixrQ0FBcUIsQ0FBQztBQUM3QyxRQUFJLENBQUMsa0JBQWtCLGtDQUFxQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLGNBQWMsOEJBQWlCLENBQUM7QUFDckMsUUFBSSxDQUFDLFlBQVksNEJBQWUsQ0FBQztBQUNqQyxRQUFJLENBQUMsV0FBVywyQkFBYyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7Q0FFNUM7O3FCQUlVLGtCQUFrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9UZW1wbGF0ZSc7XG5pbXBvcnQgSW1wb3J0U3RhdGVtZW50IGZyb20gJy4vSW1wb3J0U3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0TWVtYmVyIGZyb20gJy4vRGVmYXVsdE1lbWJlcic7XG5pbXBvcnQgQ29tcG9zaXRlTWVtYmVyIGZyb20gJy4vQ29tcG9zaXRlTWVtYmVyJztcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuaW1wb3J0IEF0dHJpYnV0ZSBmcm9tICcuL0F0dHJpYnV0ZSc7XG5pbXBvcnQgSW50ZXJwb2xhdGlvbiBmcm9tICcuL0ludGVycG9sYXRpb24nO1xuaW1wb3J0IFZhcmlhYmxlRXhwcmVzc2lvbiBmcm9tICcuL1ZhcmlhYmxlRXhwcmVzc2lvbic7XG5pbXBvcnQgT2JqZWN0TGl0ZXJhbCBmcm9tICcuL09iamVjdExpdGVyYWwnO1xuaW1wb3J0IEJvb2xlYW5MaXRlcmFsIGZyb20gJy4vQm9vbGVhbkxpdGVyYWwnO1xuaW1wb3J0IE51bWJlckxpdGVyYWwgZnJvbSAnLi9OdW1iZXJMaXRlcmFsJztcbmltcG9ydCBTdHJpbmdMaXRlcmFsIGZyb20gJy4vU3RyaW5nTGl0ZXJhbCc7XG5pbXBvcnQgQXJyYXlMaXRlcmFsIGZyb20gJy4vQXJyYXlMaXRlcmFsJztcbmltcG9ydCBGdW5jdGlvbkxpdGVyYWwgZnJvbSAnLi9GdW5jdGlvbkxpdGVyYWwnO1xuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSAnLi9DaGFyYWN0ZXJzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IFRlcm5hcnlFeHByZXNzaW9uIGZyb20gJy4vVGVybmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEJpbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9CaW5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBVbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9VbmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEZ1bmN0aW9uRXhwcmVzc2lvbiBmcm9tICcuL0Z1bmN0aW9uRXhwcmVzc2lvbic7XG5pbXBvcnQgUHJvcGVydHlFeHByZXNzaW9uIGZyb20gJy4vUHJvcGVydHlFeHByZXNzaW9uJztcbmltcG9ydCBNZXRob2RFeHByZXNzaW9uIGZyb20gJy4vTWV0aG9kRXhwcmVzc2lvbic7XG5pbXBvcnQgQmluZEV4cHJlc3Npb24gZnJvbSAnLi9CaW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgRm9yU3RhdGVtZW50IGZyb20gJy4vRm9yU3RhdGVtZW50JztcbmltcG9ydCBJZlN0YXRlbWVudCBmcm9tICcuL0lmU3RhdGVtZW50JztcbmltcG9ydCBTd2l0Y2hTdGF0ZW1lbnQgZnJvbSAnLi9Td2l0Y2hTdGF0ZW1lbnQnO1xuaW1wb3J0IENhc2VTdGF0ZW1lbnQgZnJvbSAnLi9DYXNlU3RhdGVtZW50JztcbmltcG9ydCBJbmNsdWRlU3RhdGVtZW50IGZyb20gJy4vSW5jbHVkZVN0YXRlbWVudCc7XG5cbi8qKlxuICogQWJzdHJhY3RTeW50YXhUcmVlIFxuICovXG5jbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLkltcG9ydFN0YXRlbWVudCA9IEltcG9ydFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5EZWZhdWx0TWVtYmVyID0gRGVmYXVsdE1lbWJlcjtcbiAgICAgICAgdGhpcy5Db21wb3NpdGVNZW1iZXIgPSBDb21wb3NpdGVNZW1iZXI7XG4gICAgICAgIHRoaXMuVGFnID0gVGFnO1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5JbnRlcnBvbGF0aW9uID0gSW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5WYXJpYWJsZUV4cHJlc3Npb24gPSBWYXJpYWJsZUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuQm9vbGVhbkxpdGVyYWwgPSBCb29sZWFuTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OdW1iZXJMaXRlcmFsID0gTnVtYmVyTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5TdHJpbmdMaXRlcmFsID0gU3RyaW5nTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5BcnJheUxpdGVyYWwgPSBBcnJheUxpdGVyYWw7XG4gICAgICAgIHRoaXMuRnVuY3Rpb25MaXRlcmFsID0gRnVuY3Rpb25MaXRlcmFsO1xuICAgICAgICB0aGlzLkNoYXJhY3RlcnMgPSBDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLkZpbHRlciA9IEZpbHRlcjtcbiAgICAgICAgdGhpcy5UZXJuYXJ5RXhwcmVzc2lvbiA9IFRlcm5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLlVuYXJ5RXhwcmVzc2lvbiA9IFVuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkV4cHJlc3Npb24gPSBGdW5jdGlvbkV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuUHJvcGVydHlFeHByZXNzaW9uID0gUHJvcGVydHlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLk1ldGhvZEV4cHJlc3Npb24gPSBNZXRob2RFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmRFeHByZXNzaW9uID0gQmluZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRm9yU3RhdGVtZW50ID0gRm9yU3RhdGVtZW50O1xuICAgICAgICB0aGlzLklmU3RhdGVtZW50ID0gSWZTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuU3dpdGNoU3RhdGVtZW50ID0gU3dpdGNoU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkNhc2VTdGF0ZW1lbnQgPSBDYXNlU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkluY2x1ZGVTdGF0ZW1lbnQgPSBJbmNsdWRlU3RhdGVtZW50O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0U3ludGF4VHJlZVxuIl19