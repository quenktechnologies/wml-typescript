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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0Fic3RyYWN0U3ludGF4VHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3dCQUFxQixZQUFZOzs7OytCQUNMLG1CQUFtQjs7Ozs2QkFDckIsaUJBQWlCOzs7OytCQUNmLG1CQUFtQjs7OzttQkFDL0IsT0FBTzs7Ozt5QkFDRCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7Ozs2QkFDakIsaUJBQWlCOzs7OzhCQUNoQixrQkFBa0I7Ozs7NkJBQ25CLGlCQUFpQjs7Ozs2QkFDakIsaUJBQWlCOzs7OzRCQUNsQixnQkFBZ0I7Ozs7K0JBQ2IsbUJBQW1COzs7OzBCQUN4QixjQUFjOzs7O3NCQUNsQixVQUFVOzs7O2lDQUNDLHFCQUFxQjs7OztnQ0FDdEIsb0JBQW9COzs7OytCQUNyQixtQkFBbUI7Ozs7a0NBQ2hCLHNCQUFzQjs7OztnQ0FDeEIsb0JBQW9COzs7OzhCQUN0QixrQkFBa0I7Ozs7NEJBQ3BCLGdCQUFnQjs7OzsyQkFDakIsZUFBZTs7OzsrQkFDWCxtQkFBbUI7Ozs7NkJBQ3JCLGlCQUFpQjs7OztnQ0FDZCxvQkFBb0I7Ozs7Ozs7O0lBSzNDLGtCQUFrQixHQUVULFNBRlQsa0JBQWtCLEdBRU47MEJBRlosa0JBQWtCOztBQUloQixRQUFJLENBQUMsUUFBUSx3QkFBVyxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxHQUFHLG1CQUFNLENBQUM7QUFDZixRQUFJLENBQUMsU0FBUyx5QkFBWSxDQUFDO0FBQzNCLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxjQUFjLDhCQUFpQixDQUFDO0FBQ3JDLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxZQUFZLDRCQUFlLENBQUM7QUFDakMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLFVBQVUsMEJBQWEsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxzQkFBUyxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxpQkFBaUIsaUNBQW9CLENBQUM7QUFDM0MsUUFBSSxDQUFDLGdCQUFnQixnQ0FBbUIsQ0FBQztBQUN6QyxRQUFJLENBQUMsZUFBZSwrQkFBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsa0JBQWtCLGtDQUFxQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLGNBQWMsOEJBQWlCLENBQUM7QUFDckMsUUFBSSxDQUFDLFlBQVksNEJBQWUsQ0FBQztBQUNqQyxRQUFJLENBQUMsV0FBVywyQkFBYyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxhQUFhLDZCQUFnQixDQUFDO0FBQ25DLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7Q0FFNUM7O3FCQUlVLGtCQUFrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9UZW1wbGF0ZSc7XG5pbXBvcnQgSW1wb3J0U3RhdGVtZW50IGZyb20gJy4vSW1wb3J0U3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0TWVtYmVyIGZyb20gJy4vRGVmYXVsdE1lbWJlcic7XG5pbXBvcnQgQ29tcG9zaXRlTWVtYmVyIGZyb20gJy4vQ29tcG9zaXRlTWVtYmVyJztcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuaW1wb3J0IEF0dHJpYnV0ZSBmcm9tICcuL0F0dHJpYnV0ZSc7XG5pbXBvcnQgSW50ZXJwb2xhdGlvbiBmcm9tICcuL0ludGVycG9sYXRpb24nO1xuaW1wb3J0IE9iamVjdExpdGVyYWwgZnJvbSAnLi9PYmplY3RMaXRlcmFsJztcbmltcG9ydCBCb29sZWFuTGl0ZXJhbCBmcm9tICcuL0Jvb2xlYW5MaXRlcmFsJztcbmltcG9ydCBOdW1iZXJMaXRlcmFsIGZyb20gJy4vTnVtYmVyTGl0ZXJhbCc7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbCBmcm9tICcuL1N0cmluZ0xpdGVyYWwnO1xuaW1wb3J0IEFycmF5TGl0ZXJhbCBmcm9tICcuL0FycmF5TGl0ZXJhbCc7XG5pbXBvcnQgRnVuY3Rpb25MaXRlcmFsIGZyb20gJy4vRnVuY3Rpb25MaXRlcmFsJztcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gJy4vQ2hhcmFjdGVycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCBUZXJuYXJ5RXhwcmVzc2lvbiBmcm9tICcuL1Rlcm5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBCaW5hcnlFeHByZXNzaW9uIGZyb20gJy4vQmluYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgVW5hcnlFeHByZXNzaW9uIGZyb20gJy4vVW5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBGdW5jdGlvbkV4cHJlc3Npb24gZnJvbSAnLi9GdW5jdGlvbkV4cHJlc3Npb24nO1xuaW1wb3J0IE1ldGhvZEV4cHJlc3Npb24gZnJvbSAnLi9NZXRob2RFeHByZXNzaW9uJztcbmltcG9ydCBCaW5kRXhwcmVzc2lvbiBmcm9tICcuL0JpbmRFeHByZXNzaW9uJztcbmltcG9ydCBGb3JTdGF0ZW1lbnQgZnJvbSAnLi9Gb3JTdGF0ZW1lbnQnO1xuaW1wb3J0IElmU3RhdGVtZW50IGZyb20gJy4vSWZTdGF0ZW1lbnQnO1xuaW1wb3J0IFN3aXRjaFN0YXRlbWVudCBmcm9tICcuL1N3aXRjaFN0YXRlbWVudCc7XG5pbXBvcnQgQ2FzZVN0YXRlbWVudCBmcm9tICcuL0Nhc2VTdGF0ZW1lbnQnO1xuaW1wb3J0IEluY2x1ZGVTdGF0ZW1lbnQgZnJvbSAnLi9JbmNsdWRlU3RhdGVtZW50JztcblxuLyoqXG4gKiBBYnN0cmFjdFN5bnRheFRyZWUgXG4gKi9cbmNsYXNzIEFic3RyYWN0U3ludGF4VHJlZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLlRlbXBsYXRlID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuSW1wb3J0U3RhdGVtZW50ID0gSW1wb3J0U3RhdGVtZW50O1xuICAgICAgICB0aGlzLkRlZmF1bHRNZW1iZXIgPSBEZWZhdWx0TWVtYmVyO1xuICAgICAgICB0aGlzLkNvbXBvc2l0ZU1lbWJlciA9IENvbXBvc2l0ZU1lbWJlcjtcbiAgICAgICAgdGhpcy5UYWcgPSBUYWc7XG4gICAgICAgIHRoaXMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuICAgICAgICB0aGlzLkludGVycG9sYXRpb24gPSBJbnRlcnBvbGF0aW9uO1xuICAgICAgICB0aGlzLkJvb2xlYW5MaXRlcmFsID0gQm9vbGVhbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuTnVtYmVyTGl0ZXJhbCA9IE51bWJlckxpdGVyYWw7XG4gICAgICAgIHRoaXMuU3RyaW5nTGl0ZXJhbCA9IFN0cmluZ0xpdGVyYWw7XG4gICAgICAgIHRoaXMuQXJyYXlMaXRlcmFsID0gQXJyYXlMaXRlcmFsO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uTGl0ZXJhbCA9IEZ1bmN0aW9uTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVGVybmFyeUV4cHJlc3Npb24gPSBUZXJuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5hcnlFeHByZXNzaW9uID0gQmluYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5VbmFyeUV4cHJlc3Npb24gPSBVbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRnVuY3Rpb25FeHByZXNzaW9uID0gRnVuY3Rpb25FeHByZXNzaW9uO1xuICAgICAgICB0aGlzLk1ldGhvZEV4cHJlc3Npb24gPSBNZXRob2RFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmRFeHByZXNzaW9uID0gQmluZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRm9yU3RhdGVtZW50ID0gRm9yU3RhdGVtZW50O1xuICAgICAgICB0aGlzLklmU3RhdGVtZW50ID0gSWZTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuU3dpdGNoU3RhdGVtZW50ID0gU3dpdGNoU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkNhc2VTdGF0ZW1lbnQgPSBDYXNlU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkluY2x1ZGVTdGF0ZW1lbnQgPSBJbmNsdWRlU3RhdGVtZW50O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0U3ludGF4VHJlZVxuIl19