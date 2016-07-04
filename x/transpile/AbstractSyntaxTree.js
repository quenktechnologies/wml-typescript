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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQWJzdHJhY3RTeW50YXhUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7d0JBQXFCLFlBQVk7Ozs7K0JBQ0wsbUJBQW1COzs7OzZCQUNyQixpQkFBaUI7Ozs7K0JBQ2YsbUJBQW1COzs7O21CQUMvQixPQUFPOzs7O3lCQUNELGFBQWE7Ozs7NkJBQ1QsaUJBQWlCOzs7OzZCQUNqQixpQkFBaUI7Ozs7OEJBQ2hCLGtCQUFrQjs7Ozs2QkFDbkIsaUJBQWlCOzs7OzZCQUNqQixpQkFBaUI7Ozs7NEJBQ2xCLGdCQUFnQjs7OzsrQkFDYixtQkFBbUI7Ozs7MEJBQ3hCLGNBQWM7Ozs7c0JBQ2xCLFVBQVU7Ozs7aUNBQ0MscUJBQXFCOzs7O2dDQUN0QixvQkFBb0I7Ozs7K0JBQ3JCLG1CQUFtQjs7OztrQ0FDaEIsc0JBQXNCOzs7O2dDQUN4QixvQkFBb0I7Ozs7OEJBQ3RCLGtCQUFrQjs7Ozs0QkFDcEIsZ0JBQWdCOzs7OzJCQUNqQixlQUFlOzs7OytCQUNYLG1CQUFtQjs7Ozs2QkFDckIsaUJBQWlCOzs7O2dDQUNkLG9CQUFvQjs7Ozs7Ozs7SUFLM0Msa0JBQWtCLEdBRVQsU0FGVCxrQkFBa0IsR0FFTjswQkFGWixrQkFBa0I7O0FBSWhCLFFBQUksQ0FBQyxRQUFRLHdCQUFXLENBQUM7QUFDekIsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLEdBQUcsbUJBQU0sQ0FBQztBQUNmLFFBQUksQ0FBQyxTQUFTLHlCQUFZLENBQUM7QUFDM0IsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGNBQWMsOEJBQWlCLENBQUM7QUFDckMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLFlBQVksNEJBQWUsQ0FBQztBQUNqQyxRQUFJLENBQUMsZUFBZSwrQkFBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsVUFBVSwwQkFBYSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxNQUFNLHNCQUFTLENBQUM7QUFDckIsUUFBSSxDQUFDLGlCQUFpQixpQ0FBb0IsQ0FBQztBQUMzQyxRQUFJLENBQUMsZ0JBQWdCLGdDQUFtQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxrQkFBa0Isa0NBQXFCLENBQUM7QUFDN0MsUUFBSSxDQUFDLGdCQUFnQixnQ0FBbUIsQ0FBQztBQUN6QyxRQUFJLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUNyQyxRQUFJLENBQUMsWUFBWSw0QkFBZSxDQUFDO0FBQ2pDLFFBQUksQ0FBQyxXQUFXLDJCQUFjLENBQUM7QUFDL0IsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGdCQUFnQixnQ0FBbUIsQ0FBQztDQUU1Qzs7cUJBSVUsa0JBQWtCIiwiZmlsZSI6IkFic3RyYWN0U3ludGF4VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL1RlbXBsYXRlJztcbmltcG9ydCBJbXBvcnRTdGF0ZW1lbnQgZnJvbSAnLi9JbXBvcnRTdGF0ZW1lbnQnO1xuaW1wb3J0IERlZmF1bHRNZW1iZXIgZnJvbSAnLi9EZWZhdWx0TWVtYmVyJztcbmltcG9ydCBDb21wb3NpdGVNZW1iZXIgZnJvbSAnLi9Db21wb3NpdGVNZW1iZXInO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5pbXBvcnQgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcbmltcG9ydCBJbnRlcnBvbGF0aW9uIGZyb20gJy4vSW50ZXJwb2xhdGlvbic7XG5pbXBvcnQgT2JqZWN0TGl0ZXJhbCBmcm9tICcuL09iamVjdExpdGVyYWwnO1xuaW1wb3J0IEJvb2xlYW5MaXRlcmFsIGZyb20gJy4vQm9vbGVhbkxpdGVyYWwnO1xuaW1wb3J0IE51bWJlckxpdGVyYWwgZnJvbSAnLi9OdW1iZXJMaXRlcmFsJztcbmltcG9ydCBTdHJpbmdMaXRlcmFsIGZyb20gJy4vU3RyaW5nTGl0ZXJhbCc7XG5pbXBvcnQgQXJyYXlMaXRlcmFsIGZyb20gJy4vQXJyYXlMaXRlcmFsJztcbmltcG9ydCBGdW5jdGlvbkxpdGVyYWwgZnJvbSAnLi9GdW5jdGlvbkxpdGVyYWwnO1xuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSAnLi9DaGFyYWN0ZXJzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IFRlcm5hcnlFeHByZXNzaW9uIGZyb20gJy4vVGVybmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEJpbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9CaW5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBVbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9VbmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEZ1bmN0aW9uRXhwcmVzc2lvbiBmcm9tICcuL0Z1bmN0aW9uRXhwcmVzc2lvbic7XG5pbXBvcnQgTWV0aG9kRXhwcmVzc2lvbiBmcm9tICcuL01ldGhvZEV4cHJlc3Npb24nO1xuaW1wb3J0IEJpbmRFeHByZXNzaW9uIGZyb20gJy4vQmluZEV4cHJlc3Npb24nO1xuaW1wb3J0IEZvclN0YXRlbWVudCBmcm9tICcuL0ZvclN0YXRlbWVudCc7XG5pbXBvcnQgSWZTdGF0ZW1lbnQgZnJvbSAnLi9JZlN0YXRlbWVudCc7XG5pbXBvcnQgU3dpdGNoU3RhdGVtZW50IGZyb20gJy4vU3dpdGNoU3RhdGVtZW50JztcbmltcG9ydCBDYXNlU3RhdGVtZW50IGZyb20gJy4vQ2FzZVN0YXRlbWVudCc7XG5pbXBvcnQgSW5jbHVkZVN0YXRlbWVudCBmcm9tICcuL0luY2x1ZGVTdGF0ZW1lbnQnO1xuXG4vKipcbiAqIEFic3RyYWN0U3ludGF4VHJlZSBcbiAqL1xuY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5JbXBvcnRTdGF0ZW1lbnQgPSBJbXBvcnRTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuRGVmYXVsdE1lbWJlciA9IERlZmF1bHRNZW1iZXI7XG4gICAgICAgIHRoaXMuQ29tcG9zaXRlTWVtYmVyID0gQ29tcG9zaXRlTWVtYmVyO1xuICAgICAgICB0aGlzLlRhZyA9IFRhZztcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4gICAgICAgIHRoaXMuSW50ZXJwb2xhdGlvbiA9IEludGVycG9sYXRpb247XG4gICAgICAgIHRoaXMuQm9vbGVhbkxpdGVyYWwgPSBCb29sZWFuTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OdW1iZXJMaXRlcmFsID0gTnVtYmVyTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5TdHJpbmdMaXRlcmFsID0gU3RyaW5nTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5BcnJheUxpdGVyYWwgPSBBcnJheUxpdGVyYWw7XG4gICAgICAgIHRoaXMuRnVuY3Rpb25MaXRlcmFsID0gRnVuY3Rpb25MaXRlcmFsO1xuICAgICAgICB0aGlzLkNoYXJhY3RlcnMgPSBDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLkZpbHRlciA9IEZpbHRlcjtcbiAgICAgICAgdGhpcy5UZXJuYXJ5RXhwcmVzc2lvbiA9IFRlcm5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLlVuYXJ5RXhwcmVzc2lvbiA9IFVuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkV4cHJlc3Npb24gPSBGdW5jdGlvbkV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuTWV0aG9kRXhwcmVzc2lvbiA9IE1ldGhvZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuQmluZEV4cHJlc3Npb24gPSBCaW5kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5Gb3JTdGF0ZW1lbnQgPSBGb3JTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuSWZTdGF0ZW1lbnQgPSBJZlN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5Td2l0Y2hTdGF0ZW1lbnQgPSBTd2l0Y2hTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuQ2FzZVN0YXRlbWVudCA9IENhc2VTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuSW5jbHVkZVN0YXRlbWVudCA9IEluY2x1ZGVTdGF0ZW1lbnQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RTeW50YXhUcmVlXG4iXX0=