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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt3QkFBcUIsWUFBWTs7OzsrQkFDTCxtQkFBbUI7Ozs7NkJBQ3JCLGlCQUFpQjs7OzsrQkFDZixtQkFBbUI7Ozs7bUJBQy9CLE9BQU87Ozs7eUJBQ0QsYUFBYTs7Ozs2QkFDVCxpQkFBaUI7Ozs7NkJBQ2pCLGlCQUFpQjs7Ozs4QkFDaEIsa0JBQWtCOzs7OzZCQUNuQixpQkFBaUI7Ozs7NkJBQ2pCLGlCQUFpQjs7Ozs0QkFDbEIsZ0JBQWdCOzs7OytCQUNiLG1CQUFtQjs7OzswQkFDeEIsY0FBYzs7OztzQkFDbEIsVUFBVTs7OztpQ0FDQyxxQkFBcUI7Ozs7Z0NBQ3RCLG9CQUFvQjs7OzsrQkFDckIsbUJBQW1COzs7O2tDQUNoQixzQkFBc0I7Ozs7Z0NBQ3hCLG9CQUFvQjs7Ozs4QkFDdEIsa0JBQWtCOzs7OzRCQUNwQixnQkFBZ0I7Ozs7MkJBQ2pCLGVBQWU7Ozs7K0JBQ1gsbUJBQW1COzs7OzZCQUNyQixpQkFBaUI7Ozs7Z0NBQ2Qsb0JBQW9COzs7Ozs7OztJQUszQyxrQkFBa0IsR0FFVCxTQUZULGtCQUFrQixHQUVOOzBCQUZaLGtCQUFrQjs7QUFJaEIsUUFBSSxDQUFDLFFBQVEsd0JBQVcsQ0FBQztBQUN6QixRQUFJLENBQUMsZUFBZSwrQkFBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsZUFBZSwrQkFBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsR0FBRyxtQkFBTSxDQUFDO0FBQ2YsUUFBSSxDQUFDLFNBQVMseUJBQVksQ0FBQztBQUMzQixRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUNyQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsWUFBWSw0QkFBZSxDQUFDO0FBQ2pDLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxVQUFVLDBCQUFhLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sc0JBQVMsQ0FBQztBQUNyQixRQUFJLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzNDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGtCQUFrQixrQ0FBcUIsQ0FBQztBQUM3QyxRQUFJLENBQUMsZ0JBQWdCLGdDQUFtQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxjQUFjLDhCQUFpQixDQUFDO0FBQ3JDLFFBQUksQ0FBQyxZQUFZLDRCQUFlLENBQUM7QUFDakMsUUFBSSxDQUFDLFdBQVcsMkJBQWMsQ0FBQztBQUMvQixRQUFJLENBQUMsZUFBZSwrQkFBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsZ0JBQWdCLGdDQUFtQixDQUFDO0NBRTVDOztxQkFJVSxrQkFBa0IiLCJmaWxlIjoiQWJzdHJhY3RTeW50YXhUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vVGVtcGxhdGUnO1xuaW1wb3J0IEltcG9ydFN0YXRlbWVudCBmcm9tICcuL0ltcG9ydFN0YXRlbWVudCc7XG5pbXBvcnQgRGVmYXVsdE1lbWJlciBmcm9tICcuL0RlZmF1bHRNZW1iZXInO1xuaW1wb3J0IENvbXBvc2l0ZU1lbWJlciBmcm9tICcuL0NvbXBvc2l0ZU1lbWJlcic7XG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcbmltcG9ydCBBdHRyaWJ1dGUgZnJvbSAnLi9BdHRyaWJ1dGUnO1xuaW1wb3J0IEludGVycG9sYXRpb24gZnJvbSAnLi9JbnRlcnBvbGF0aW9uJztcbmltcG9ydCBPYmplY3RMaXRlcmFsIGZyb20gJy4vT2JqZWN0TGl0ZXJhbCc7XG5pbXBvcnQgQm9vbGVhbkxpdGVyYWwgZnJvbSAnLi9Cb29sZWFuTGl0ZXJhbCc7XG5pbXBvcnQgTnVtYmVyTGl0ZXJhbCBmcm9tICcuL051bWJlckxpdGVyYWwnO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWwgZnJvbSAnLi9TdHJpbmdMaXRlcmFsJztcbmltcG9ydCBBcnJheUxpdGVyYWwgZnJvbSAnLi9BcnJheUxpdGVyYWwnO1xuaW1wb3J0IEZ1bmN0aW9uTGl0ZXJhbCBmcm9tICcuL0Z1bmN0aW9uTGl0ZXJhbCc7XG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tICcuL0NoYXJhY3RlcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgVGVybmFyeUV4cHJlc3Npb24gZnJvbSAnLi9UZXJuYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgQmluYXJ5RXhwcmVzc2lvbiBmcm9tICcuL0JpbmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IFVuYXJ5RXhwcmVzc2lvbiBmcm9tICcuL1VuYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgRnVuY3Rpb25FeHByZXNzaW9uIGZyb20gJy4vRnVuY3Rpb25FeHByZXNzaW9uJztcbmltcG9ydCBNZXRob2RFeHByZXNzaW9uIGZyb20gJy4vTWV0aG9kRXhwcmVzc2lvbic7XG5pbXBvcnQgQmluZEV4cHJlc3Npb24gZnJvbSAnLi9CaW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgRm9yU3RhdGVtZW50IGZyb20gJy4vRm9yU3RhdGVtZW50JztcbmltcG9ydCBJZlN0YXRlbWVudCBmcm9tICcuL0lmU3RhdGVtZW50JztcbmltcG9ydCBTd2l0Y2hTdGF0ZW1lbnQgZnJvbSAnLi9Td2l0Y2hTdGF0ZW1lbnQnO1xuaW1wb3J0IENhc2VTdGF0ZW1lbnQgZnJvbSAnLi9DYXNlU3RhdGVtZW50JztcbmltcG9ydCBJbmNsdWRlU3RhdGVtZW50IGZyb20gJy4vSW5jbHVkZVN0YXRlbWVudCc7XG5cbi8qKlxuICogQWJzdHJhY3RTeW50YXhUcmVlIFxuICovXG5jbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLkltcG9ydFN0YXRlbWVudCA9IEltcG9ydFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5EZWZhdWx0TWVtYmVyID0gRGVmYXVsdE1lbWJlcjtcbiAgICAgICAgdGhpcy5Db21wb3NpdGVNZW1iZXIgPSBDb21wb3NpdGVNZW1iZXI7XG4gICAgICAgIHRoaXMuVGFnID0gVGFnO1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5JbnRlcnBvbGF0aW9uID0gSW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkxpdGVyYWwgPSBGdW5jdGlvbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuQ2hhcmFjdGVycyA9IENoYXJhY3RlcnM7XG4gICAgICAgIHRoaXMuRmlsdGVyID0gRmlsdGVyO1xuICAgICAgICB0aGlzLlRlcm5hcnlFeHByZXNzaW9uID0gVGVybmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuQmluYXJ5RXhwcmVzc2lvbiA9IEJpbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuVW5hcnlFeHByZXNzaW9uID0gVW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uRXhwcmVzc2lvbiA9IEZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5NZXRob2RFeHByZXNzaW9uID0gTWV0aG9kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5kRXhwcmVzc2lvbiA9IEJpbmRFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZvclN0YXRlbWVudCA9IEZvclN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5JZlN0YXRlbWVudCA9IElmU3RhdGVtZW50O1xuICAgICAgICB0aGlzLlN3aXRjaFN0YXRlbWVudCA9IFN3aXRjaFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5DYXNlU3RhdGVtZW50ID0gQ2FzZVN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5JbmNsdWRlU3RhdGVtZW50ID0gSW5jbHVkZVN0YXRlbWVudDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFN5bnRheFRyZWVcbiJdfQ==