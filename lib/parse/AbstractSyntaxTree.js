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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTSxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7Ozs7Ozs7O2lCQUFKLElBQUk7O2VBRUUsb0JBQUc7OztBQUVQLGdCQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQUssQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQy9DLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUI7OztXQVJDLElBQUk7OztJQWtCSixRQUFRO2NBQVIsUUFBUTs7QUFFQyxhQUZULFFBQVEsQ0FFRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTs4QkFGN0IsUUFBUTs7QUFHTixtQ0FIRixRQUFRLDZDQUdFO0FBQ1IsWUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7Ozs7Ozs7V0FSQyxRQUFRO0dBQVMsSUFBSTs7SUFrQnJCLE1BQU07Y0FBTixNQUFNOztBQUVHLGFBRlQsTUFBTSxDQUVJLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxNQUFNOztBQUdKLG1DQUhGLE1BQU0sNkNBR0k7QUFDUixZQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFH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QyxRQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUNyQyxRQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxRQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxRQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxRQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUNqQyxRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixRQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDM0MsUUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFFBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM3QyxRQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FFMUI7O3FCQTFCZ0Isa0JBQWtCIiwiZmlsZSI6IkFic3RyYWN0U3ludGF4VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIG8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGsgPT4gb1trXSA9IHRoaXNba10pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobyk7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSByZXByZXNlbnRzIHRoZSBlbnRpcmUgZmlsZSBjb250ZW50cy5cbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0cyBcbiAqIEBwYXJhbSB7VGFnfSB0YWcgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2MgXG4gKi9cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB0YWcsIGxvYykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGVtcGxhdGUnO1xuICAgICAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvYztcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJbXBvcnQgcmVwcmVzZW50cyBhbiBpbXBvcnQgbm9kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZW1iZXIgXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEltcG9ydCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbXBvcnQnO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUYWcgcmVwcmVzZW50cyBhIHRhZyBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHthcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge2FycmF5PFRhZ3xUZXh0fEZvckxvb3B8SWZDb25kaXRpb24+fSBjaGlsZHJlblxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0YWcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIFxuICogQHBhcmFtIHtTdHJpbmdMaXRlcmFsfE51bWJlckxpdGVyYWx8Qm9vbGVhbkxpdGVyYWx9IHZhbHVlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBuYW1lc3BhY2UsIHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGZpbHRlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGZpbHRlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbnRlcnBvbGF0aW9uJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBCb29sZWFuTGl0ZXJhbCBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBCb29sZWFuTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib29sZWFuJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxufVxuXG4vKipcbiAqIE51bWJlckxpdGVyYWwgXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdudW1iZXInO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFN0cmluZ0xpdGVyYWwgXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgU3RyaW5nTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2FycmF5JztcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRnVuY3Rpb25MaXRlcmFsIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBwYXJhbWV0ZXJzIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBib2R5IFxuICovXG5jbGFzcyBGdW5jdGlvbkxpdGVyYWwge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycywgYm9keSkge1xuXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDaGFyYWN0ZXJzIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIENoYXJhY3RlcnMgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY2hhcmFjdGVycyc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogRmlsdGVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbHRlcic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEV4cHJlc3Npb24gXG4gKi9cbmNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxufVxuXG4vKipcbiAqIFRlcm5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBsb2dpYyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZ0cnVlIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZmZhbHNlXG4gKi9cbmNsYXNzIFRlcm5hcnlFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGxvZ2ljLCBpZnRydWUsIGlmZmFsc2UpIHtcblxuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBVbmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gb3AgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcCwgZXhwcmVzc2lvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndW5hcnktZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQmluYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbGVmdCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcCBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gcmlnaHQgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3AsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdiaW5hcnktZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBGdW5jdGlvbkV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3NcbiAqL1xuY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcblxuICAgIH1cblxufVxuXG4vKipcbiAqIE1ldGhvZEV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgXG4gKi9cbmNsYXNzIE1ldGhvZEV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFyZ3MpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWV0aG9kLWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIH1cblxufVxuXG4vKipcbiAqIEJpbmRFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBCaW5kRXhwcmVzc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRhcmdldCwgYXJncykge1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcblxuICAgIH1cblxufVxuXG5cbi8qKlxuICogRm9yTG9vcCBcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YXJpYWJsZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaW5kZXhOYW1lPSdpbmRleF0gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb258QXJyYXlMaXRlcmFsfSB0YXJnZXRcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEZvckxvb3AgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleE5hbWUsIHRhcmdldCwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2Zvci1sb29wJztcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgICAgICB0aGlzLmluZGV4TmFtZSA9IGluZGV4TmFtZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogSWZDb25kaXRpb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge2FycmF5fSBpZnRydWUgXG4gKiBAcGFyYW0ge2FycmF5fSBpZmZhbHNlIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIElmQ29uZGl0aW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpZnRydWUsIGlmZmFsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2lmLWNvbmRpdGlvbic7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cblxuY2xhc3MgSW5jbHVkZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodG1wbCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5jbHVkZSc7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0bXBsO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0U3ludGF4VHJlZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLlRlbXBsYXRlID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuSW1wb3J0ID0gSW1wb3J0O1xuICAgICAgICB0aGlzLlRhZyA9IFRhZztcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4gICAgICAgIHRoaXMuSW50ZXJwb2xhdGlvbiA9IEludGVycG9sYXRpb247XG4gICAgICAgIHRoaXMuQm9vbGVhbkxpdGVyYWwgPSBCb29sZWFuTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OdW1iZXJMaXRlcmFsID0gTnVtYmVyTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5TdHJpbmdMaXRlcmFsID0gU3RyaW5nTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkxpdGVyYWwgPSBGdW5jdGlvbkxpdGVyYWw7XG4gICAgICAgIHRoaXMuQXJyYXlMaXRlcmFsID0gQXJyYXlMaXRlcmFsO1xuICAgICAgICB0aGlzLkNoYXJhY3RlcnMgPSBDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLkZpbHRlciA9IEZpbHRlcjtcbiAgICAgICAgdGhpcy5UZXJuYXJ5RXhwcmVzc2lvbiA9IFRlcm5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLlVuYXJ5RXhwcmVzc2lvbiA9IFVuYXJ5RXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5GdW5jdGlvbkV4cHJlc3Npb24gPSBGdW5jdGlvbkV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuTWV0aG9kRXhwcmVzc2lvbiA9IE1ldGhvZEV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuQmluZEV4cHJlc3Npb24gPSBCaW5kRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5Gb3JMb29wID0gRm9yTG9vcDtcbiAgICAgICAgdGhpcy5JZkNvbmRpdGlvbiA9IElmQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLkluY2x1ZGUgPSBJbmNsdWRlO1xuXG4gICAgfVxuXG59XG4iXX0=