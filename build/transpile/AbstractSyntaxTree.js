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

var _Characters = require('./Characters');

var _Characters2 = _interopRequireDefault(_Characters);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _UnaryExpression = require('./UnaryExpression');

var _UnaryExpression2 = _interopRequireDefault(_UnaryExpression);

var _BinaryExpression = require('./BinaryExpression');

var _BinaryExpression2 = _interopRequireDefault(_BinaryExpression);

var _FunctionExpression = require('./FunctionExpression');

var _FunctionExpression2 = _interopRequireDefault(_FunctionExpression);

var _MethodExpression = require('./MethodExpression');

var _MethodExpression2 = _interopRequireDefault(_MethodExpression);

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
    this.Characters = _Characters2['default'];
    this.Filter = _Filter2['default'];
    this.UnaryExpression = _UnaryExpression2['default'];
    this.BinaryExpression = _BinaryExpression2['default'];
    this.FunctionExpression = _FunctionExpression2['default'];
    this.MethodExpression = _MethodExpression2['default'];
    this.ForLoop = _ForLoop2['default'];
    this.IfCondition = _IfCondition2['default'];
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQWJzdHJhY3RTeW50YXhUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7d0JBQXFCLFlBQVk7Ozs7c0JBQ2QsVUFBVTs7OzttQkFDYixPQUFPOzs7O3lCQUNELGFBQWE7Ozs7NkJBQ1QsaUJBQWlCOzs7OzhCQUNoQixrQkFBa0I7Ozs7NkJBQ25CLGlCQUFpQjs7Ozs2QkFDakIsaUJBQWlCOzs7OzRCQUNsQixnQkFBZ0I7Ozs7MEJBQ2xCLGNBQWM7Ozs7c0JBQ2xCLFVBQVU7Ozs7K0JBQ0QsbUJBQW1COzs7O2dDQUNsQixvQkFBb0I7Ozs7a0NBQ2xCLHNCQUFzQjs7OztnQ0FDeEIsb0JBQW9COzs7O3VCQUM3QixXQUFXOzs7OzJCQUNQLGVBQWU7Ozs7Ozs7O0lBS2pDLGtCQUFrQixHQUVULFNBRlQsa0JBQWtCLEdBRU47MEJBRlosa0JBQWtCOztBQUloQixRQUFJLENBQUMsUUFBUSx3QkFBVyxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxNQUFNLHNCQUFTLENBQUM7QUFDckIsUUFBSSxDQUFDLEdBQUcsbUJBQU0sQ0FBQztBQUNmLFFBQUksQ0FBQyxTQUFTLHlCQUFZLENBQUM7QUFDM0IsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGNBQWMsOEJBQWlCLENBQUM7QUFDckMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLGFBQWEsNkJBQWdCLENBQUM7QUFDbkMsUUFBSSxDQUFDLFlBQVksNEJBQWUsQ0FBQztBQUNqQyxRQUFJLENBQUMsVUFBVSwwQkFBYSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxNQUFNLHNCQUFTLENBQUM7QUFDckIsUUFBSSxDQUFDLGVBQWUsK0JBQWtCLENBQUM7QUFDdkMsUUFBSSxDQUFDLGdCQUFnQixnQ0FBbUIsQ0FBQztBQUN6QyxRQUFJLENBQUMsa0JBQWtCLGtDQUFxQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxnQkFBZ0IsZ0NBQW1CLENBQUM7QUFDekMsUUFBSSxDQUFDLE9BQU8sdUJBQVUsQ0FBQztBQUN2QixRQUFJLENBQUMsV0FBVywyQkFBYyxDQUFDO0NBRWxDOztxQkFJVSxrQkFBa0IiLCJmaWxlIjoiQWJzdHJhY3RTeW50YXhUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vVGVtcGxhdGUnO1xuaW1wb3J0IEltcG9ydCBmcm9tICcuL0ltcG9ydCc7XG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcbmltcG9ydCBBdHRyaWJ1dGUgZnJvbSAnLi9BdHRyaWJ1dGUnO1xuaW1wb3J0IEludGVycG9sYXRpb24gZnJvbSAnLi9JbnRlcnBvbGF0aW9uJztcbmltcG9ydCBCb29sZWFuTGl0ZXJhbCBmcm9tICcuL0Jvb2xlYW5MaXRlcmFsJztcbmltcG9ydCBOdW1iZXJMaXRlcmFsIGZyb20gJy4vTnVtYmVyTGl0ZXJhbCc7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbCBmcm9tICcuL1N0cmluZ0xpdGVyYWwnO1xuaW1wb3J0IEFycmF5TGl0ZXJhbCBmcm9tICcuL0FycmF5TGl0ZXJhbCc7XG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tICcuL0NoYXJhY3RlcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgVW5hcnlFeHByZXNzaW9uIGZyb20gJy4vVW5hcnlFeHByZXNzaW9uJztcbmltcG9ydCBCaW5hcnlFeHByZXNzaW9uIGZyb20gJy4vQmluYXJ5RXhwcmVzc2lvbic7XG5pbXBvcnQgRnVuY3Rpb25FeHByZXNzaW9uIGZyb20gJy4vRnVuY3Rpb25FeHByZXNzaW9uJztcbmltcG9ydCBNZXRob2RFeHByZXNzaW9uIGZyb20gJy4vTWV0aG9kRXhwcmVzc2lvbic7XG5pbXBvcnQgRm9yTG9vcCBmcm9tICcuL0Zvckxvb3AnO1xuaW1wb3J0IElmQ29uZGl0aW9uIGZyb20gJy4vSWZDb25kaXRpb24nO1xuXG4vKipcbiAqIEFic3RyYWN0U3ludGF4VHJlZSBcbiAqL1xuY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5JbXBvcnQgPSBJbXBvcnQ7XG4gICAgICAgIHRoaXMuVGFnID0gVGFnO1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5JbnRlcnBvbGF0aW9uID0gSW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVW5hcnlFeHByZXNzaW9uID0gVW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uRXhwcmVzc2lvbiA9IEZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5NZXRob2RFeHByZXNzaW9uID0gTWV0aG9kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5Gb3JMb29wID0gRm9yTG9vcDtcbiAgICAgICAgdGhpcy5JZkNvbmRpdGlvbiA9IElmQ29uZGl0aW9uO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0U3ludGF4VHJlZVxuIl19