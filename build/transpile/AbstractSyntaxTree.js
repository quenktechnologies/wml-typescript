'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Template = require('./Template');

var _Template2 = _interopRequireDefault(_Template);

var _Import = require('./Import');

var _Import2 = _interopRequireDefault(_Import);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Attribute = require('./Attribute');

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Interpolation = require('./Interpolation');

var _Interpolation2 = _interopRequireDefault(_Interpolation);

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

var _ForLoop = require('./ForLoop');

var _ForLoop2 = _interopRequireDefault(_ForLoop);

var _IfCondition = require('./IfCondition');

var _IfCondition2 = _interopRequireDefault(_IfCondition);

/**
 * AbstractSyntaxTree 
 */

var AbstractSyntaxTree = function AbstractSyntaxTree() {
    _classCallCheck(this, AbstractSyntaxTree);

    this.Template = _Template2['default'];
    this.Import = _Import2['default'];
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
    this.ForLoop = _ForLoop2['default'];
    this.IfCondition = _IfCondition2['default'];
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQWJzdHJhY3RTeW50YXhUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7d0JBQXFCLFlBQVk7Ozs7c0JBQ2QsVUFBVTs7OzttQkFDYixPQUFPOzs7O3lCQUNELGFBQWE7Ozs7NkJBQ1QsaUJBQWlCOzs7OzhCQUNoQixrQkFBa0I7Ozs7NkJBQ25CLGlCQUFpQjs7Ozs2QkFDakIsaUJBQWlCOzs7OzRCQUNsQixnQkFBZ0I7Ozs7K0JBQ2IsbUJBQW1COzs7OzBCQUN4QixjQUFjOzs7O3NCQUNsQixVQUFVOzs7O2lDQUNDLHFCQUFxQjs7OztnQ0FDdEIsb0JBQW9COzs7OytCQUNyQixtQkFBbUI7Ozs7a0NBQ2hCLHNCQUFzQjs7OztnQ0FDeEIsb0JBQW9COzs7OzhCQUN0QixrQkFBa0I7Ozs7dUJBQ3pCLFdBQVc7Ozs7MkJBQ1AsZUFBZTs7Ozs7Ozs7SUFLakMsa0JBQWtCLEdBRVQsU0FGVCxrQkFBa0IsR0FFTjswQkFGWixrQkFBa0I7O0FBSWhCLFFBQUksQ0FBQyxRQUFRLHdCQUFXLENBQUM7QUFDekIsUUFBSSxDQUFDLE1BQU0sc0JBQVMsQ0FBQztBQUNyQixRQUFJLENBQUMsR0FBRyxtQkFBTSxDQUFDO0FBQ2YsUUFBSSxDQUFDLFNBQVMseUJBQVksQ0FBQztBQUMzQixRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUNyQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsYUFBYSw2QkFBZ0IsQ0FBQztBQUNuQyxRQUFJLENBQUMsWUFBWSw0QkFBZSxDQUFDO0FBQ2pDLFFBQUksQ0FBQyxlQUFlLCtCQUFrQixDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxVQUFVLDBCQUFhLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sc0JBQVMsQ0FBQztBQUNyQixRQUFJLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzNDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGtCQUFrQixrQ0FBcUIsQ0FBQztBQUM3QyxRQUFJLENBQUMsZ0JBQWdCLGdDQUFtQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxjQUFjLDhCQUFpQixDQUFDO0FBQ3JDLFFBQUksQ0FBQyxPQUFPLHVCQUFVLENBQUM7QUFDdkIsUUFBSSxDQUFDLFdBQVcsMkJBQWMsQ0FBQztDQUVsQzs7cUJBSVUsa0JBQWtCIiwiZmlsZSI6IkFic3RyYWN0U3ludGF4VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL1RlbXBsYXRlJztcbmltcG9ydCBJbXBvcnQgZnJvbSAnLi9JbXBvcnQnO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5pbXBvcnQgQXR0cmlidXRlIGZyb20gJy4vQXR0cmlidXRlJztcbmltcG9ydCBJbnRlcnBvbGF0aW9uIGZyb20gJy4vSW50ZXJwb2xhdGlvbic7XG5pbXBvcnQgQm9vbGVhbkxpdGVyYWwgZnJvbSAnLi9Cb29sZWFuTGl0ZXJhbCc7XG5pbXBvcnQgTnVtYmVyTGl0ZXJhbCBmcm9tICcuL051bWJlckxpdGVyYWwnO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWwgZnJvbSAnLi9TdHJpbmdMaXRlcmFsJztcbmltcG9ydCBBcnJheUxpdGVyYWwgZnJvbSAnLi9BcnJheUxpdGVyYWwnO1xuaW1wb3J0IEZ1bmN0aW9uTGl0ZXJhbCBmcm9tICcuL0Z1bmN0aW9uTGl0ZXJhbCc7XG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tICcuL0NoYXJhY3RlcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgVGVybmFyeUV4cHJlc3Npb24gZnJvbSAnLi9UZXJuYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgQmluYXJ5RXhwcmVzc2lvbiBmcm9tICcuL0JpbmFyeUV4cHJlc3Npb24nO1xuaW1wb3J0IFVuYXJ5RXhwcmVzc2lvbiBmcm9tICcuL1VuYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgRnVuY3Rpb25FeHByZXNzaW9uIGZyb20gJy4vRnVuY3Rpb25FeHByZXNzaW9uJztcbmltcG9ydCBNZXRob2RFeHByZXNzaW9uIGZyb20gJy4vTWV0aG9kRXhwcmVzc2lvbic7XG5pbXBvcnQgQmluZEV4cHJlc3Npb24gZnJvbSAnLi9CaW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgRm9yTG9vcCBmcm9tICcuL0Zvckxvb3AnO1xuaW1wb3J0IElmQ29uZGl0aW9uIGZyb20gJy4vSWZDb25kaXRpb24nO1xuXG4vKipcbiAqIEFic3RyYWN0U3ludGF4VHJlZSBcbiAqL1xuY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5JbXBvcnQgPSBJbXBvcnQ7XG4gICAgICAgIHRoaXMuVGFnID0gVGFnO1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5JbnRlcnBvbGF0aW9uID0gSW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkxpdGVyYWwgPSBGdW5jdGlvbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuQ2hhcmFjdGVycyA9IENoYXJhY3RlcnM7XG4gICAgICAgIHRoaXMuRmlsdGVyID0gRmlsdGVyO1xuICAgICAgICB0aGlzLlRlcm5hcnlFeHByZXNzaW9uID0gVGVybmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuQmluYXJ5RXhwcmVzc2lvbiA9IEJpbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuVW5hcnlFeHByZXNzaW9uID0gVW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uRXhwcmVzc2lvbiA9IEZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5NZXRob2RFeHByZXNzaW9uID0gTWV0aG9kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5kRXhwcmVzc2lvbiA9IEJpbmRFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZvckxvb3AgPSBGb3JMb29wO1xuICAgICAgICB0aGlzLklmQ29uZGl0aW9uID0gSWZDb25kaXRpb247XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RTeW50YXhUcmVlXG4iXX0=