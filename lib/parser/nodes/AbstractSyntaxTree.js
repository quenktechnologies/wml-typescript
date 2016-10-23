'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Template = require('./Template');

var _Template2 = _interopRequireDefault(_Template);

var _ImportStatement = require('./ImportStatement');

var _ImportStatement2 = _interopRequireDefault(_ImportStatement);

var _DefaultMember = require('./DefaultMember');

var _DefaultMember2 = _interopRequireDefault(_DefaultMember);

var _CompositeMember = require('./CompositeMember');

var _CompositeMember2 = _interopRequireDefault(_CompositeMember);

var _AggregateMember = require('./AggregateMember');

var _AggregateMember2 = _interopRequireDefault(_AggregateMember);

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

var _NewExpression = require('./NewExpression');

var _NewExpression2 = _interopRequireDefault(_NewExpression);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * AbstractSyntaxTree 
 */
var AbstractSyntaxTree = function AbstractSyntaxTree() {
    _classCallCheck(this, AbstractSyntaxTree);

    this.Template = _Template2.default;
    this.ImportStatement = _ImportStatement2.default;
    this.DefaultMember = _DefaultMember2.default;
    this.CompositeMember = _CompositeMember2.default;
    this.AggregateMember = _AggregateMember2.default;
    this.Tag = _Tag2.default;
    this.Attribute = _Attribute2.default;
    this.Interpolation = _Interpolation2.default;
    this.VariableExpression = _VariableExpression2.default;
    this.BooleanLiteral = _BooleanLiteral2.default;
    this.NumberLiteral = _NumberLiteral2.default;
    this.StringLiteral = _StringLiteral2.default;
    this.ArrayLiteral = _ArrayLiteral2.default;
    this.FunctionLiteral = _FunctionLiteral2.default;
    this.NewExpression = _NewExpression2.default;
    this.Characters = _Characters2.default;
    this.Filter = _Filter2.default;
    this.TernaryExpression = _TernaryExpression2.default;
    this.BinaryExpression = _BinaryExpression2.default;
    this.UnaryExpression = _UnaryExpression2.default;
    this.FunctionExpression = _FunctionExpression2.default;
    this.PropertyExpression = _PropertyExpression2.default;
    this.MethodExpression = _MethodExpression2.default;
    this.BindExpression = _BindExpression2.default;
    this.ForStatement = _ForStatement2.default;
    this.IfStatement = _IfStatement2.default;
    this.SwitchStatement = _SwitchStatement2.default;
    this.CaseStatement = _CaseStatement2.default;
    this.IncludeStatement = _IncludeStatement2.default;
};

exports.default = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQWJzdHJhY3RTeW50YXhUcmVlLmpzIl0sIm5hbWVzIjpbIkFic3RyYWN0U3ludGF4VHJlZSIsIlRlbXBsYXRlIiwiSW1wb3J0U3RhdGVtZW50IiwiRGVmYXVsdE1lbWJlciIsIkNvbXBvc2l0ZU1lbWJlciIsIkFnZ3JlZ2F0ZU1lbWJlciIsIlRhZyIsIkF0dHJpYnV0ZSIsIkludGVycG9sYXRpb24iLCJWYXJpYWJsZUV4cHJlc3Npb24iLCJCb29sZWFuTGl0ZXJhbCIsIk51bWJlckxpdGVyYWwiLCJTdHJpbmdMaXRlcmFsIiwiQXJyYXlMaXRlcmFsIiwiRnVuY3Rpb25MaXRlcmFsIiwiTmV3RXhwcmVzc2lvbiIsIkNoYXJhY3RlcnMiLCJGaWx0ZXIiLCJUZXJuYXJ5RXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJGdW5jdGlvbkV4cHJlc3Npb24iLCJQcm9wZXJ0eUV4cHJlc3Npb24iLCJNZXRob2RFeHByZXNzaW9uIiwiQmluZEV4cHJlc3Npb24iLCJGb3JTdGF0ZW1lbnQiLCJJZlN0YXRlbWVudCIsIlN3aXRjaFN0YXRlbWVudCIsIkNhc2VTdGF0ZW1lbnQiLCJJbmNsdWRlU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztJQUdNQSxrQixHQUVGLDhCQUFjO0FBQUE7O0FBRVYsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxHQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxrQkFBTDtBQUNBLFNBQUtDLGNBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxNQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDQSxTQUFLQyxnQkFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxrQkFBTDtBQUNBLFNBQUtDLGtCQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBRUgsQzs7a0JBSVU3QixrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9UZW1wbGF0ZSc7XG5pbXBvcnQgSW1wb3J0U3RhdGVtZW50IGZyb20gJy4vSW1wb3J0U3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0TWVtYmVyIGZyb20gJy4vRGVmYXVsdE1lbWJlcic7XG5pbXBvcnQgQ29tcG9zaXRlTWVtYmVyIGZyb20gJy4vQ29tcG9zaXRlTWVtYmVyJztcbmltcG9ydCBBZ2dyZWdhdGVNZW1iZXIgZnJvbSAnLi9BZ2dyZWdhdGVNZW1iZXInO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5pbXBvcnQgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcbmltcG9ydCBJbnRlcnBvbGF0aW9uIGZyb20gJy4vSW50ZXJwb2xhdGlvbic7XG5pbXBvcnQgVmFyaWFibGVFeHByZXNzaW9uIGZyb20gJy4vVmFyaWFibGVFeHByZXNzaW9uJztcbmltcG9ydCBPYmplY3RMaXRlcmFsIGZyb20gJy4vT2JqZWN0TGl0ZXJhbCc7XG5pbXBvcnQgQm9vbGVhbkxpdGVyYWwgZnJvbSAnLi9Cb29sZWFuTGl0ZXJhbCc7XG5pbXBvcnQgTnVtYmVyTGl0ZXJhbCBmcm9tICcuL051bWJlckxpdGVyYWwnO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWwgZnJvbSAnLi9TdHJpbmdMaXRlcmFsJztcbmltcG9ydCBBcnJheUxpdGVyYWwgZnJvbSAnLi9BcnJheUxpdGVyYWwnO1xuaW1wb3J0IEZ1bmN0aW9uTGl0ZXJhbCBmcm9tICcuL0Z1bmN0aW9uTGl0ZXJhbCc7XG5pbXBvcnQgTmV3RXhwcmVzc2lvbiBmcm9tICcuL05ld0V4cHJlc3Npb24nO1xuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSAnLi9DaGFyYWN0ZXJzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IFRlcm5hcnlFeHByZXNzaW9uIGZyb20gJy4vVGVybmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEJpbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9CaW5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBVbmFyeUV4cHJlc3Npb24gZnJvbSAnLi9VbmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IEZ1bmN0aW9uRXhwcmVzc2lvbiBmcm9tICcuL0Z1bmN0aW9uRXhwcmVzc2lvbic7XG5pbXBvcnQgUHJvcGVydHlFeHByZXNzaW9uIGZyb20gJy4vUHJvcGVydHlFeHByZXNzaW9uJztcbmltcG9ydCBNZXRob2RFeHByZXNzaW9uIGZyb20gJy4vTWV0aG9kRXhwcmVzc2lvbic7XG5pbXBvcnQgQmluZEV4cHJlc3Npb24gZnJvbSAnLi9CaW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgRm9yU3RhdGVtZW50IGZyb20gJy4vRm9yU3RhdGVtZW50JztcbmltcG9ydCBJZlN0YXRlbWVudCBmcm9tICcuL0lmU3RhdGVtZW50JztcbmltcG9ydCBTd2l0Y2hTdGF0ZW1lbnQgZnJvbSAnLi9Td2l0Y2hTdGF0ZW1lbnQnO1xuaW1wb3J0IENhc2VTdGF0ZW1lbnQgZnJvbSAnLi9DYXNlU3RhdGVtZW50JztcbmltcG9ydCBJbmNsdWRlU3RhdGVtZW50IGZyb20gJy4vSW5jbHVkZVN0YXRlbWVudCc7XG5cbi8qKlxuICogQWJzdHJhY3RTeW50YXhUcmVlIFxuICovXG5jbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLkltcG9ydFN0YXRlbWVudCA9IEltcG9ydFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5EZWZhdWx0TWVtYmVyID0gRGVmYXVsdE1lbWJlcjtcbiAgICAgICAgdGhpcy5Db21wb3NpdGVNZW1iZXIgPSBDb21wb3NpdGVNZW1iZXI7XG4gICAgICAgIHRoaXMuQWdncmVnYXRlTWVtYmVyID0gQWdncmVnYXRlTWVtYmVyO1xuICAgICAgICB0aGlzLlRhZyA9IFRhZztcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4gICAgICAgIHRoaXMuSW50ZXJwb2xhdGlvbiA9IEludGVycG9sYXRpb247XG4gICAgICAgIHRoaXMuVmFyaWFibGVFeHByZXNzaW9uID0gVmFyaWFibGVFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJvb2xlYW5MaXRlcmFsID0gQm9vbGVhbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuTnVtYmVyTGl0ZXJhbCA9IE51bWJlckxpdGVyYWw7XG4gICAgICAgIHRoaXMuU3RyaW5nTGl0ZXJhbCA9IFN0cmluZ0xpdGVyYWw7XG4gICAgICAgIHRoaXMuQXJyYXlMaXRlcmFsID0gQXJyYXlMaXRlcmFsO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uTGl0ZXJhbCA9IEZ1bmN0aW9uTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OZXdFeHByZXNzaW9uID0gTmV3RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVGVybmFyeUV4cHJlc3Npb24gPSBUZXJuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5hcnlFeHByZXNzaW9uID0gQmluYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5VbmFyeUV4cHJlc3Npb24gPSBVbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRnVuY3Rpb25FeHByZXNzaW9uID0gRnVuY3Rpb25FeHByZXNzaW9uO1xuICAgICAgICB0aGlzLlByb3BlcnR5RXhwcmVzc2lvbiA9IFByb3BlcnR5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5NZXRob2RFeHByZXNzaW9uID0gTWV0aG9kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5kRXhwcmVzc2lvbiA9IEJpbmRFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZvclN0YXRlbWVudCA9IEZvclN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5JZlN0YXRlbWVudCA9IElmU3RhdGVtZW50O1xuICAgICAgICB0aGlzLlN3aXRjaFN0YXRlbWVudCA9IFN3aXRjaFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5DYXNlU3RhdGVtZW50ID0gQ2FzZVN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5JbmNsdWRlU3RhdGVtZW50ID0gSW5jbHVkZVN0YXRlbWVudDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFN5bnRheFRyZWVcbiJdfQ==