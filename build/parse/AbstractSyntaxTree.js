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
     * Characters 
     * @param {string} value 
     * @param {Location} location 
     */
    return ArrayLiteral;
})(Node);

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
     * UnaryExpression 
     * @param {string} op 
     * @param {Expression} expression 
     * @param {Location} location 
     */
    return Expression;
})(Node);

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
     * ForLoop 
     * @param {string} variable 
     * @param {string} [indexName='index] 
     * @param {Expression|ArrayLiteral} target
     * @param {array} children 
     * @param {Location} location 
     */
    return MethodExpression;
})(Expression);

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
     * @param {array} template 
     * @param {Location} location 
     */
    return ForLoop;
})(Node);

var IfCondition = (function (_Node14) {
    _inherits(IfCondition, _Node14);

    function IfCondition(expression, template, location) {
        _classCallCheck(this, IfCondition);

        _get(Object.getPrototypeOf(IfCondition.prototype), 'constructor', this).call(this);
        this.type = 'if-condition';
        this.expression = expression;
        this.template = template;
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
    this.ArrayLiteral = ArrayLiteral;
    this.Characters = Characters;
    this.Filter = Filter;
    this.UnaryExpression = UnaryExpression;
    this.BinaryExpression = BinaryExpression;
    this.FunctionExpression = FunctionExpression;
    this.MethodExpression = MethodExpression;
    this.ForLoop = ForLoop;
    this.IfCondition = IfCondition;
};

exports['default'] = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTSxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7Ozs7Ozs7O2lCQUFKLElBQUk7O2VBRUUsb0JBQUc7OztBQUVQLGdCQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQUssQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQy9DLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUI7OztXQVJDLElBQUk7OztJQWtCSixRQUFRO2NBQVIsUUFBUTs7QUFFQyxhQUZULFFBQVEsQ0FFRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTs4QkFGN0IsUUFBUTs7QUFHTixtQ0FIRixRQUFRLDZDQUdFO0FBQ1IsWUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7Ozs7Ozs7V0FSQyxRQUFRO0dBQVMsSUFBSTs7SUFrQnJCLE1BQU07Y0FBTixNQUFNOztBQUVHLGFBRlQsTUFBTSxDQUVJLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxNQUFNOztBQUdKLG1DQUhGLE1BQU0sNkNBR0k7QUFDUixZQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFH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SSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsUUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDakMsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsUUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM3QyxRQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Q0FFbEM7O3FCQXRCZ0Isa0JBQWtCIiwiZmlsZSI6IkFic3RyYWN0U3ludGF4VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIG8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGsgPT4gb1trXSA9IHRoaXNba10pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobyk7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSByZXByZXNlbnRzIHRoZSBlbnRpcmUgZmlsZSBjb250ZW50cy5cbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0cyBcbiAqIEBwYXJhbSB7VGFnfSB0YWcgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2MgXG4gKi9cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB0YWcsIGxvYykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGVtcGxhdGUnO1xuICAgICAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvYztcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJbXBvcnQgcmVwcmVzZW50cyBhbiBpbXBvcnQgbm9kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZW1iZXIgXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEltcG9ydCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbXBvcnQnO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUYWcgcmVwcmVzZW50cyBhIHRhZyBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHthcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge2FycmF5PFRhZ3xUZXh0fEZvckxvb3B8SWZDb25kaXRpb24+fSBjaGlsZHJlblxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0YWcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIFxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfE51bWJlckxpdGVyYWx8Qm9vbGVhbkxpdGVyYWx9IHZhbHVlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBuYW1lc3BhY2UsIHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGZpbHRlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGZpbHRlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbnRlcnBvbGF0aW9uJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBCb29sZWFuTGl0ZXJhbCBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBCb29sZWFuTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib29sZWFuJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxufVxuXG4vKipcbiAqIE51bWJlckxpdGVyYWwgXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdudW1iZXInO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFN0cmluZ0xpdGVyYWwgXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgU3RyaW5nTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2FycmF5JztcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ2hhcmFjdGVycyBcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBDaGFyYWN0ZXJzIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NoYXJhY3RlcnMnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEZpbHRlciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG59XG5cbi8qKlxuICogVW5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG9wIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3AsIGV4cHJlc3Npb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3VuYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEJpbmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxlZnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3AgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IHJpZ2h0IFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIG9wLCByaWdodCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYmluYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRnVuY3Rpb25FeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzXG4gKi9cbmNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZnVuY3Rpb24tZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21ldGhvZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBGb3JMb29wIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhcmlhYmxlIFxuICogQHBhcmFtIHtzdHJpbmd9IFtpbmRleE5hbWU9J2luZGV4XSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbnxBcnJheUxpdGVyYWx9IHRhcmdldFxuICogQHBhcmFtIHthcnJheX0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRm9yTG9vcCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFyaWFibGUsIGluZGV4TmFtZSwgdGFyZ2V0LCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZm9yLWxvb3AnO1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgICAgIHRoaXMuaW5kZXhOYW1lID0gaW5kZXhOYW1lO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJZkNvbmRpdGlvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7YXJyYXl9IHRlbXBsYXRlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIElmQ29uZGl0aW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCB0ZW1wbGF0ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWYtY29uZGl0aW9uJztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5JbXBvcnQgPSBJbXBvcnQ7XG4gICAgICAgIHRoaXMuVGFnID0gVGFnO1xuICAgICAgICB0aGlzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5JbnRlcnBvbGF0aW9uID0gSW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJzID0gQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuVW5hcnlFeHByZXNzaW9uID0gVW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZ1bmN0aW9uRXhwcmVzc2lvbiA9IEZ1bmN0aW9uRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5NZXRob2RFeHByZXNzaW9uID0gTWV0aG9kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5Gb3JMb29wID0gRm9yTG9vcDtcbiAgICAgICAgdGhpcy5JZkNvbmRpdGlvbiA9IElmQ29uZGl0aW9uO1xuXG4gICAgfVxuXG59XG4iXX0=