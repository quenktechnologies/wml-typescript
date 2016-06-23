class Node {

    toString() {

        var o = Object.create(null);
        Object.keys(this).forEach(k => o[k] = this[k]);
        return JSON.stringify(o);

    }

}

/**
 * Template represents the entire file contents.
 * @param {array<Import>} imports 
 * @param {array} args
 * @param {Tag} tag 
 * @param {Location} loc 
 */
class Template extends Node {

    constructor(imports, args, tag, loc) {
        super();
        this.type = 'template';
        this.imports = imports;
        this.arguments = args;
        this.tag = tag;
        this.location = loc;
    }

}

/**
 * Import represents an import node.
 * @param {string} member 
 * @param {string} module 
 * @param {Location} location 
 */
class Import extends Node {

    constructor(member, module, location) {
        super();
        this.type = 'import';
        this.member = member;
        this.module = module;
        this.location = location;
    }

}

/**
 * Tag represents a tag node
 * @param {string} name
 * @param {array<Attribute>} attributes
 * @param {array<Tag|Text|ForLoop|IfCondition>} children
 * @param {Location} location 
 */
class Tag extends Node {

    constructor(name, attributes, children, location) {
        super();
        this.type = 'tag';
        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.location = location;

    }

}

/**
 * Attribute
 * @param {string} name 
 * @param {string} namespace 
 * @param {StringLiteral|NumberLiteral|BooleanLiteral} value
 * @param {Location} location 
 */
class Attribute extends Node {

    constructor(name, namespace, value, location) {

        super();
        this.type = 'attribute';
        this.name = name;
        this.namespace = namespace;
        this.value = value;
        this.location = location;

    }

}

/**
 * Interpolation
 * @param {string} value 
 * @param {array<string>} filters 
 * @param {Location} location 
 */
class Interpolation extends Node {

    constructor(value, filters, location) {
        super();
        this.type = 'interpolation';
        this.value = value;
        this.filters = filters;
        this.location = location;

    }

}

/**
 * BooleanLiteral 
 * @param {boolean} value
 * @param {Location} location 
 */
class BooleanLiteral extends Node {

    constructor(value, location) {
        super();
        this.type = 'boolean';
        this.value = value;
    }

}

/**
 * NumberLiteral 
 * @param {number} value 
 * @param {Location} location 
 */
class NumberLiteral extends Node {

    constructor(value, location) {
        super();
        this.type = 'number';
        this.value = value;
        this.location = location;
    }

}


/**
 * StringLiteral 
 * @param {string} value 
 * @param {Location} location 
 */
class StringLiteral extends Node {

    constructor(value, location) {
        super();
        this.type = 'string';
        this.value = value;
        this.location = location;
    }

}

/**
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */
class ArrayLiteral extends Node {

    constructor(members, location) {
        super();
        this.type = 'array';
        this.members = members;
        this.location = location;

    }

}

/**
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 */
class FunctionLiteral {

    constructor(parameters, body) {

        this.parameters = parameters;
        this.body = body;

    }

}

/**
 * Characters 
 * @param {string} value 
 * @param {Location} location 
 */
class Characters extends Node {

    constructor(value, location) {
        super();
        this.type = 'characters';
        this.value = value;
        this.location = location;

    }

}

/**
 * Filter 
 * @param {string} name 
 * @param {array} args 
 */
class Filter extends Node {

    constructor(name, args) {
        super();
        this.type = 'filter';
        this.name = name;
        this.arguments = args;

    }

}

/**
 * Expression 
 */
class Expression extends Node {

}

/**
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse
 */
class TernaryExpression {

    constructor(logic, iftrue, iffalse) {

        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;

    }

}


/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
class UnaryExpression extends Expression {

    constructor(op, expression, location) {

        super();
        this.type = 'unary-expression';
        this.op = op;
        this.expression = expression;
        this.location = location;

    }

}

/**
 * BinaryExpression 
 * @param {Expression} left 
 * @param {string} op 
 * @param {Expression} right 
 * @param {Location} location 
 */
class BinaryExpression extends Expression {

    constructor(left, op, right, location) {

        super();
        this.type = 'binary-expression';
        this.left = left;
        this.op = op;
        this.right = right;
        this.location = location;

    }

}

/**
 * FunctionExpression 
 * @param {string} name 
 * @param {array} args
 */
class FunctionExpression extends Expression {

    constructor(name, args) {
        super();
        this.type = 'function-expression';
        this.name = name;
        this.args = args;

    }

}

/**
 * MethodExpression 
 * @param {string} name 
 * @param {array} args 
 */
class MethodExpression extends Expression {

    constructor(name, args) {

        super();
        this.type = 'method-expression';
        this.name = name;
        this.args = args;
    }

}

/**
 * BindExpression 
 * @param {string} parent 
 * @param {string} target 
 * @param {array} args 
 */
class BindExpression {

    constructor(parent, target, args) {

        this.parent = parent;
        this.target = target;
        this.args = args;

    }

}


/**
 * ForLoop 
 * @param {string} variable 
 * @param {string} [indexName='index] 
 * @param {Expression|ArrayLiteral} target
 * @param {array} children 
 * @param {Location} location 
 */
class ForLoop extends Node {

    constructor(variable, indexName, target, children, location) {

        super();
        this.type = 'for-loop';
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
        this.location = location;

    }

}

/**
 * IfCondition 
 * @param {Expression} expression 
 * @param {array} iftrue 
 * @param {array} iffalse 
 * @param {Location} location 
 */
class IfCondition extends Node {

    constructor(expression, iftrue, iffalse, location) {

        super();
        this.type = 'if-condition';
        this.expression = expression;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
        this.location = location;

    }

}

class Include extends Node {

    constructor(tmpl, args, location) {

        super();
        this.type = 'include';
        this.template = tmpl;
        this.arguments = args;
        this.location = location;

    }


}

export default class AbstractSyntaxTree {

    constructor() {

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

    }

}
