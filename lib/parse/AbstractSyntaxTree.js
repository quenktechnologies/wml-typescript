'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Node = (function () {
    function Node() {
        _classCallCheck(this, Node);
    }

    /**
     * Template represents the entire file contents.
     * @param {array<Import>} imports 
     * @param {Tag} tag 
     * @param {Location} loc 
     */

    _createClass(Node, [{
        key: 'toString',
        value: function toString() {
            var _this = this;

            var o = Object.create(null);
            Object.keys(this).forEach(function (k) {
                return o[k] = _this[k];
            });
            return JSON.stringify(o);
        }
    }]);

    return Node;
})();

var Template = (function (_Node) {
    _inherits(Template, _Node);

    function Template(imports, tag, loc) {
        _classCallCheck(this, Template);

        _get(Object.getPrototypeOf(Template.prototype), 'constructor', this).call(this);
        this.type = 'template';
        this.imports = imports;
        this.tag = tag;
        this.location = loc;
    }

    /**
     * Import represents an import node.
     * @param {string} member 
     * @param {string} module 
     * @param {Location} location 
     */
    return Template;
})(Node);

var Import = (function (_Node2) {
    _inherits(Import, _Node2);

    function Import(member, module, location) {
        _classCallCheck(this, Import);

        _get(Object.getPrototypeOf(Import.prototype), 'constructor', this).call(this);
        this.type = 'import';
        this.member = member;
        this.module = module;
        this.location = location;
    }

    /**
     * Tag represents a tag node
     * @param {string} name
     * @param {array<Attribute>} attributes
     * @param {array<Tag|Text|ForLoop|IfCondition>} children
     * @param {Location} location 
     */
    return Import;
})(Node);

var Tag = (function (_Node3) {
    _inherits(Tag, _Node3);

    function Tag(name, attributes, children, location) {
        _classCallCheck(this, Tag);

        _get(Object.getPrototypeOf(Tag.prototype), 'constructor', this).call(this);
        this.type = 'tag';
        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.location = location;
    }

    /**
     * Attribute
     * @param {string} name 
     * @param {string} namespace 
     * @param {StringLiteral|NumberLiteral|BooleanLiteral} value
     * @param {Location} location 
     */
    return Tag;
})(Node);

var Attribute = (function (_Node4) {
    _inherits(Attribute, _Node4);

    function Attribute(name, namespace, value, location) {
        _classCallCheck(this, Attribute);

        _get(Object.getPrototypeOf(Attribute.prototype), 'constructor', this).call(this);
        this.type = 'attribute';
        this.name = name;
        this.namespace = namespace;
        this.value = value;
        this.location = location;
    }

    /**
     * Interpolation
     * @param {string} value 
     * @param {array<string>} filters 
     * @param {Location} location 
     */
    return Attribute;
})(Node);

var Interpolation = (function (_Node5) {
    _inherits(Interpolation, _Node5);

    function Interpolation(value, filters, location) {
        _classCallCheck(this, Interpolation);

        _get(Object.getPrototypeOf(Interpolation.prototype), 'constructor', this).call(this);
        this.type = 'interpolation';
        this.value = value;
        this.filters = filters;
        this.location = location;
    }

    /**
     * BooleanLiteral 
     * @param {boolean} value
     * @param {Location} location 
     */
    return Interpolation;
})(Node);

var BooleanLiteral = (function (_Node6) {
    _inherits(BooleanLiteral, _Node6);

    function BooleanLiteral(value, location) {
        _classCallCheck(this, BooleanLiteral);

        _get(Object.getPrototypeOf(BooleanLiteral.prototype), 'constructor', this).call(this);
        this.type = 'boolean';
        this.value = value;
    }

    /**
     * NumberLiteral 
     * @param {number} value 
     * @param {Location} location 
     */
    return BooleanLiteral;
})(Node);

var NumberLiteral = (function (_Node7) {
    _inherits(NumberLiteral, _Node7);

    function NumberLiteral(value, location) {
        _classCallCheck(this, NumberLiteral);

        _get(Object.getPrototypeOf(NumberLiteral.prototype), 'constructor', this).call(this);
        this.type = 'number';
        this.value = value;
        this.location = location;
    }

    /**
     * StringLiteral 
     * @param {string} value 
     * @param {Location} location 
     */
    return NumberLiteral;
})(Node);

var StringLiteral = (function (_Node8) {
    _inherits(StringLiteral, _Node8);

    function StringLiteral(value, location) {
        _classCallCheck(this, StringLiteral);

        _get(Object.getPrototypeOf(StringLiteral.prototype), 'constructor', this).call(this);
        this.type = 'string';
        this.value = value;
        this.location = location;
    }

    /**
     * ArrayLiteral 
     * @param {array} members 
     * @param {Location} location 
     */
    return StringLiteral;
})(Node);

var ArrayLiteral = (function (_Node9) {
    _inherits(ArrayLiteral, _Node9);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        _get(Object.getPrototypeOf(ArrayLiteral.prototype), 'constructor', this).call(this);
        this.type = 'array';
        this.members = members;
        this.location = location;
    }

    /**
     * FunctionLiteral 
     * @param {array<string>} parameters 
     * @param {Expression} body 
     */
    return ArrayLiteral;
})(Node);

var FunctionLiteral = function FunctionLiteral(parameters, body) {
    _classCallCheck(this, FunctionLiteral);

    this.parameters = parameters;
    this.body = body;
}

/**
 * Characters 
 * @param {string} value 
 * @param {Location} location 
 */
;

var Characters = (function (_Node10) {
    _inherits(Characters, _Node10);

    function Characters(value, location) {
        _classCallCheck(this, Characters);

        _get(Object.getPrototypeOf(Characters.prototype), 'constructor', this).call(this);
        this.type = 'characters';
        this.value = value;
        this.location = location;
    }

    /**
     * Filter 
     * @param {string} name 
     * @param {array} args 
     */
    return Characters;
})(Node);

var Filter = (function (_Node11) {
    _inherits(Filter, _Node11);

    function Filter(name, args) {
        _classCallCheck(this, Filter);

        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this);
        this.type = 'filter';
        this.name = name;
        this.args = args;
    }

    /**
     * Expression 
     */
    return Filter;
})(Node);

var Expression = (function (_Node12) {
    _inherits(Expression, _Node12);

    function Expression() {
        _classCallCheck(this, Expression);

        _get(Object.getPrototypeOf(Expression.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * TernaryExpression 
     * @param {Expression} logic 
     * @param {Expression} iftrue 
     * @param {Expression} iffalse
     */
    return Expression;
})(Node);

var TernaryExpression = function TernaryExpression(logic, iftrue, iffalse) {
    _classCallCheck(this, TernaryExpression);

    this.logic = logic;
    this.iftrue = iftrue;
    this.iffalse = iffalse;
}

/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
;

var UnaryExpression = (function (_Expression) {
    _inherits(UnaryExpression, _Expression);

    function UnaryExpression(op, expression, location) {
        _classCallCheck(this, UnaryExpression);

        _get(Object.getPrototypeOf(UnaryExpression.prototype), 'constructor', this).call(this);
        this.type = 'unary-expression';
        this.op = op;
        this.expression = expression;
        this.location = location;
    }

    /**
     * BinaryExpression 
     * @param {Expression} left 
     * @param {string} op 
     * @param {Expression} right 
     * @param {Location} location 
     */
    return UnaryExpression;
})(Expression);

var BinaryExpression = (function (_Expression2) {
    _inherits(BinaryExpression, _Expression2);

    function BinaryExpression(left, op, right, location) {
        _classCallCheck(this, BinaryExpression);

        _get(Object.getPrototypeOf(BinaryExpression.prototype), 'constructor', this).call(this);
        this.type = 'binary-expression';
        this.left = left;
        this.op = op;
        this.right = right;
        this.location = location;
    }

    /**
     * FunctionExpression 
     * @param {string} name 
     * @param {array} args
     */
    return BinaryExpression;
})(Expression);

var FunctionExpression = (function (_Expression3) {
    _inherits(FunctionExpression, _Expression3);

    function FunctionExpression(name, args) {
        _classCallCheck(this, FunctionExpression);

        _get(Object.getPrototypeOf(FunctionExpression.prototype), 'constructor', this).call(this);
        this.type = 'function-expression';
        this.name = name;
        this.args = args;
    }

    /**
     * MethodExpression 
     * @param {string} name 
     * @param {array} args 
     */
    return FunctionExpression;
})(Expression);

var MethodExpression = (function (_Expression4) {
    _inherits(MethodExpression, _Expression4);

    function MethodExpression(name, args) {
        _classCallCheck(this, MethodExpression);

        _get(Object.getPrototypeOf(MethodExpression.prototype), 'constructor', this).call(this);
        this.type = 'method-expression';
        this.name = name;
        this.args = args;
    }

    /**
     * BindExpression 
     * @param {string} parent 
     * @param {string} target 
     * @param {array} args 
     */
    return MethodExpression;
})(Expression);

var BindExpression = function BindExpression(parent, target, args) {
    _classCallCheck(this, BindExpression);

    this.parent = parent;
    this.target = target;
    this.args = args;
}

/**
 * ForLoop 
 * @param {string} variable 
 * @param {string} [indexName='index] 
 * @param {Expression|ArrayLiteral} target
 * @param {array} children 
 * @param {Location} location 
 */
;

var ForLoop = (function (_Node13) {
    _inherits(ForLoop, _Node13);

    function ForLoop(variable, indexName, target, children, location) {
        _classCallCheck(this, ForLoop);

        _get(Object.getPrototypeOf(ForLoop.prototype), 'constructor', this).call(this);
        this.type = 'for-loop';
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
        this.location = location;
    }

    /**
     * IfCondition 
     * @param {Expression} expression 
     * @param {array} iftrue 
     * @param {array} iffalse 
     * @param {Location} location 
     */
    return ForLoop;
})(Node);

var IfCondition = (function (_Node14) {
    _inherits(IfCondition, _Node14);

    function IfCondition(expression, iftrue, iffalse, location) {
        _classCallCheck(this, IfCondition);

        _get(Object.getPrototypeOf(IfCondition.prototype), 'constructor', this).call(this);
        this.type = 'if-condition';
        this.expression = expression;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
        this.location = location;
    }

    return IfCondition;
})(Node);

var AbstractSyntaxTree = function AbstractSyntaxTree() {
    _classCallCheck(this, AbstractSyntaxTree);

    this.Template = Template;
    this.Import = Import;
    this.Tag = Tag;
    this.Attribute = Attribute;
    this.Interpolation = Interpolation;
    this.BooleanLiteral = BooleanLiteral;
    this.NumberLiteral = NumberLiteral;
    this.StringLiteral = StringLiteral;
    this.FunctionLiteral = FunctionLiteral;
    this.ArrayLiteral = ArrayLiteral;
    this.Characters = Characters;
    this.Filter = Filter;
    this.TernaryExpression = TernaryExpression;
    this.BinaryExpression = BinaryExpression;
    this.UnaryExpression = UnaryExpression;
    this.FunctionExpression = FunctionExpression;
    this.MethodExpression = MethodExpression;
    this.BindExpression = BindExpression;
    this.ForLoop = ForLoop;
    this.IfCondition = IfCondition;
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTSxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7Ozs7Ozs7O2lCQUFKLElBQUk7O2VBRUUsb0JBQUc7OztBQUVQLGdCQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQUssQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQy9DLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUI7OztXQVJDLElBQUk7OztJQWtCSixRQUFRO2NBQVIsUUFBUTs7QUFFQyxhQUZULFFBQVEsQ0FFRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTs4QkFGN0IsUUFBUTs7QUFHTixtQ0FIRixRQUFRLDZDQUdFO0FBQ1IsWUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7Ozs7Ozs7V0FSQyxRQUFRO0dBQVMsSUFBSTs7SUFrQnJCLE1BQU07Y0FBTixNQUFNOztBQUVHLGFBRlQsTUFBTSxDQUVJLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxNQUFNOztBQUdKLG1DQUhGLE1BQU0sNkNBR0k7QUFDUixZQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFH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QUFpQixDQUFDO0FBQzNDLFFBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUN6QyxRQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxRQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7QUFDN0MsUUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0NBRWxDOztxQkF6QmdCLGtCQUFrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHZhciBvID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChrID0+IG9ba10gPSB0aGlzW2tdKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8pO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogVGVtcGxhdGUgcmVwcmVzZW50cyB0aGUgZW50aXJlIGZpbGUgY29udGVudHMuXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHMgXG4gKiBAcGFyYW0ge1RhZ30gdGFnIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jIFxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgdGFnLCBsb2MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2M7XG4gICAgfVxuXG59XG5cbi8qKlxuICogSW1wb3J0IHJlcHJlc2VudHMgYW4gaW1wb3J0IG5vZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBJbXBvcnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgbW9kdWxlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW1wb3J0JztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGFnIHJlcHJlc2VudHMgYSB0YWcgbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGFnJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBcbiAqIEBwYXJhbSB7U3RyaW5nTGl0ZXJhbHxOdW1iZXJMaXRlcmFsfEJvb2xlYW5MaXRlcmFsfSB2YWx1ZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgbmFtZXNwYWNlLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXR0cmlidXRlJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBmaWx0ZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEludGVycG9sYXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBmaWx0ZXJzLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW50ZXJwb2xhdGlvbic7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQm9vbGVhbkxpdGVyYWwgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQm9vbGVhbkxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm9vbGVhbic7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBOdW1iZXJMaXRlcmFsIFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIE51bWJlckxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBTdHJpbmdMaXRlcmFsIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFN0cmluZ0xpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cbi8qKlxuICogQXJyYXlMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheX0gbWVtYmVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBBcnJheUxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhcnJheSc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZ1bmN0aW9uTGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gcGFyYW1ldGVycyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gYm9keSBcbiAqL1xuY2xhc3MgRnVuY3Rpb25MaXRlcmFsIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIGJvZHkpIHtcblxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ2hhcmFjdGVycyBcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBDaGFyYWN0ZXJzIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NoYXJhY3RlcnMnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZpbHRlciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG59XG5cbi8qKlxuICogVGVybmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxvZ2ljIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZnRydWUgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmZmFsc2VcbiAqL1xuY2xhc3MgVGVybmFyeUV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobG9naWMsIGlmdHJ1ZSwgaWZmYWxzZSkge1xuXG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5pZnRydWUgPSBpZnRydWU7XG4gICAgICAgIHRoaXMuaWZmYWxzZSA9IGlmZmFsc2U7XG5cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFVuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcCBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBVbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wLCBleHByZXNzaW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd1bmFyeS1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5vcCA9IG9wO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBCaW5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBsZWZ0IFxuICogQHBhcmFtIHtzdHJpbmd9IG9wIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSByaWdodCBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBCaW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCBvcCwgcmlnaHQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JpbmFyeS1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcCA9IG9wO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZ1bmN0aW9uRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheX0gYXJnc1xuICovXG5jbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2Z1bmN0aW9uLWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogTWV0aG9kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgTWV0aG9kRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncykge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdtZXRob2QtZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQmluZEV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50IFxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldCBcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgXG4gKi9cbmNsYXNzIEJpbmRFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGFyZ2V0LCBhcmdzKSB7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBGb3JMb29wIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhcmlhYmxlIFxuICogQHBhcmFtIHtzdHJpbmd9IFtpbmRleE5hbWU9J2luZGV4XSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbnxBcnJheUxpdGVyYWx9IHRhcmdldFxuICogQHBhcmFtIHthcnJheX0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRm9yTG9vcCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFyaWFibGUsIGluZGV4TmFtZSwgdGFyZ2V0LCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZm9yLWxvb3AnO1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgICAgIHRoaXMuaW5kZXhOYW1lID0gaW5kZXhOYW1lO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJZkNvbmRpdGlvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7YXJyYXl9IGlmdHJ1ZSBcbiAqIEBwYXJhbSB7YXJyYXl9IGlmZmFsc2UgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgSWZDb25kaXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGlmdHJ1ZSwgaWZmYWxzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWYtY29uZGl0aW9uJztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5pZnRydWUgPSBpZnRydWU7XG4gICAgICAgIHRoaXMuaWZmYWxzZSA9IGlmZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLkltcG9ydCA9IEltcG9ydDtcbiAgICAgICAgdGhpcy5UYWcgPSBUYWc7XG4gICAgICAgIHRoaXMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuICAgICAgICB0aGlzLkludGVycG9sYXRpb24gPSBJbnRlcnBvbGF0aW9uO1xuICAgICAgICB0aGlzLkJvb2xlYW5MaXRlcmFsID0gQm9vbGVhbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuTnVtYmVyTGl0ZXJhbCA9IE51bWJlckxpdGVyYWw7XG4gICAgICAgIHRoaXMuU3RyaW5nTGl0ZXJhbCA9IFN0cmluZ0xpdGVyYWw7XG4gICAgICAgIHRoaXMuRnVuY3Rpb25MaXRlcmFsID0gRnVuY3Rpb25MaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVGVybmFyeUV4cHJlc3Npb24gPSBUZXJuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5hcnlFeHByZXNzaW9uID0gQmluYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5VbmFyeUV4cHJlc3Npb24gPSBVbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRnVuY3Rpb25FeHByZXNzaW9uID0gRnVuY3Rpb25FeHByZXNzaW9uO1xuICAgICAgICB0aGlzLk1ldGhvZEV4cHJlc3Npb24gPSBNZXRob2RFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmRFeHByZXNzaW9uID0gQmluZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRm9yTG9vcCA9IEZvckxvb3A7XG4gICAgICAgIHRoaXMuSWZDb25kaXRpb24gPSBJZkNvbmRpdGlvbjtcblxuICAgIH1cblxufVxuIl19