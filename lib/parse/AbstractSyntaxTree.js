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
     * @param {array} args
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

    function Template(imports, args, tag, loc) {
        _classCallCheck(this, Template);

        _get(Object.getPrototypeOf(Template.prototype), 'constructor', this).call(this);
        this.type = 'template';
        this.imports = imports;
        this.arguments = args;
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
        this.arguments = args;
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

var Include = (function (_Node15) {
    _inherits(Include, _Node15);

    function Include(tmpl, args, location) {
        _classCallCheck(this, Include);

        _get(Object.getPrototypeOf(Include.prototype), 'constructor', this).call(this);
        this.type = 'include';
        this.template = tmpl;
        this.arguments = args;
        this.location = location;
    }

    return Include;
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
    this.Include = Include;
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTSxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7Ozs7Ozs7OztpQkFBSixJQUFJOztlQUVFLG9CQUFHOzs7QUFFUCxnQkFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixrQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFLLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztBQUMvQyxtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRTVCOzs7V0FSQyxJQUFJOzs7SUFtQkosUUFBUTtjQUFSLFFBQVE7O0FBRUMsYUFGVCxRQUFRLENBRUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFOzhCQUZuQyxRQUFROztBQUdOLG1DQUhGLFFBQVEsNkNBR0U7QUFDUixZQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixZQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOzs7Ozs7OztXQVRDLFFBQVE7R0FBUyxJQUFJOztJQW1CckIsTUFBTTtjQUFOLE1BQU07O0FBRUcsYUFGVCxNQUFNLENBRUksTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLE1BQU07O0FBR0osbUNBSEYsTUFBTSw2Q0FHSTtBQUNSLFlBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3JCLFlBQUksQ0FB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UyxDQUFDO0FBQzNCLFFBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFFBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFFBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFFBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQ2pDLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztBQUMzQyxRQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsUUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsUUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUN6QyxRQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUNyQyxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUUxQjs7cUJBMUJnQixrQkFBa0IiLCJmaWxlIjoiQWJzdHJhY3RTeW50YXhUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICB2YXIgbyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goayA9PiBvW2tdID0gdGhpc1trXSk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIFRlbXBsYXRlIHJlcHJlc2VudHMgdGhlIGVudGlyZSBmaWxlIGNvbnRlbnRzLlxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzIFxuICogQHBhcmFtIHthcnJheX0gYXJnc1xuICogQHBhcmFtIHtUYWd9IHRhZyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvYyBcbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGltcG9ydHMsIGFyZ3MsIHRhZywgbG9jKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2M7XG4gICAgfVxuXG59XG5cbi8qKlxuICogSW1wb3J0IHJlcHJlc2VudHMgYW4gaW1wb3J0IG5vZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBJbXBvcnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgbW9kdWxlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW1wb3J0JztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGFnIHJlcHJlc2VudHMgYSB0YWcgbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7YXJyYXk8QXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGFnJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBcbiAqIEBwYXJhbSB7U3RyaW5nTGl0ZXJhbHxOdW1iZXJMaXRlcmFsfEJvb2xlYW5MaXRlcmFsfSB2YWx1ZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgbmFtZXNwYWNlLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXR0cmlidXRlJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBmaWx0ZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEludGVycG9sYXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBmaWx0ZXJzLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW50ZXJwb2xhdGlvbic7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQm9vbGVhbkxpdGVyYWwgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQm9vbGVhbkxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm9vbGVhbic7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBOdW1iZXJMaXRlcmFsIFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIE51bWJlckxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBTdHJpbmdMaXRlcmFsIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFN0cmluZ0xpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cbi8qKlxuICogQXJyYXlMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheX0gbWVtYmVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBBcnJheUxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhcnJheSc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZ1bmN0aW9uTGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gcGFyYW1ldGVycyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gYm9keSBcbiAqL1xuY2xhc3MgRnVuY3Rpb25MaXRlcmFsIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIGJvZHkpIHtcblxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ2hhcmFjdGVycyBcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBDaGFyYWN0ZXJzIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NoYXJhY3RlcnMnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZpbHRlciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBFeHByZXNzaW9uIFxuICovXG5jbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbn1cblxuLyoqXG4gKiBUZXJuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbG9naWMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmdHJ1ZSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZmYWxzZVxuICovXG5jbGFzcyBUZXJuYXJ5RXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgaWZ0cnVlLCBpZmZhbHNlKSB7XG5cbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgICAgICB0aGlzLmlmdHJ1ZSA9IGlmdHJ1ZTtcbiAgICAgICAgdGhpcy5pZmZhbHNlID0gaWZmYWxzZTtcblxuICAgIH1cblxufVxuXG5cbi8qKlxuICogVW5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG9wIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3AsIGV4cHJlc3Npb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3VuYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEJpbmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxlZnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3AgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IHJpZ2h0IFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIG9wLCByaWdodCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYmluYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRnVuY3Rpb25FeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzXG4gKi9cbmNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZnVuY3Rpb24tZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21ldGhvZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBCaW5kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0IFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgQmluZEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0YXJnZXQsIGFyZ3MpIHtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG5cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEZvckxvb3AgXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFyaWFibGUgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2luZGV4TmFtZT0naW5kZXhdIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufEFycmF5TGl0ZXJhbH0gdGFyZ2V0XG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZHJlbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBGb3JMb29wIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgaW5kZXhOYW1lLCB0YXJnZXQsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmb3ItbG9vcCc7XG4gICAgICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICAgICAgdGhpcy5pbmRleE5hbWUgPSBpbmRleE5hbWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIElmQ29uZGl0aW9uIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHthcnJheX0gaWZ0cnVlIFxuICogQHBhcmFtIHthcnJheX0gaWZmYWxzZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBJZkNvbmRpdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgaWZ0cnVlLCBpZmZhbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpZi1jb25kaXRpb24nO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmlmdHJ1ZSA9IGlmdHJ1ZTtcbiAgICAgICAgdGhpcy5pZmZhbHNlID0gaWZmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbmNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRtcGwsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luY2x1ZGUnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLkltcG9ydCA9IEltcG9ydDtcbiAgICAgICAgdGhpcy5UYWcgPSBUYWc7XG4gICAgICAgIHRoaXMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuICAgICAgICB0aGlzLkludGVycG9sYXRpb24gPSBJbnRlcnBvbGF0aW9uO1xuICAgICAgICB0aGlzLkJvb2xlYW5MaXRlcmFsID0gQm9vbGVhbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuTnVtYmVyTGl0ZXJhbCA9IE51bWJlckxpdGVyYWw7XG4gICAgICAgIHRoaXMuU3RyaW5nTGl0ZXJhbCA9IFN0cmluZ0xpdGVyYWw7XG4gICAgICAgIHRoaXMuRnVuY3Rpb25MaXRlcmFsID0gRnVuY3Rpb25MaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVGVybmFyeUV4cHJlc3Npb24gPSBUZXJuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5CaW5hcnlFeHByZXNzaW9uID0gQmluYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5VbmFyeUV4cHJlc3Npb24gPSBVbmFyeUV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRnVuY3Rpb25FeHByZXNzaW9uID0gRnVuY3Rpb25FeHByZXNzaW9uO1xuICAgICAgICB0aGlzLk1ldGhvZEV4cHJlc3Npb24gPSBNZXRob2RFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmRFeHByZXNzaW9uID0gQmluZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuRm9yTG9vcCA9IEZvckxvb3A7XG4gICAgICAgIHRoaXMuSWZDb25kaXRpb24gPSBJZkNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5JbmNsdWRlID0gSW5jbHVkZTtcblxuICAgIH1cblxufVxuIl19