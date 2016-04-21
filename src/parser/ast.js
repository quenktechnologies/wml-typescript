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
 * @param {Tag} tag 
 * @param {Location} loc 
 */
export class Template extends Node {

    constructor(imports, tag, loc) {
        super();
        this.type = 'template';
        this.imports = imports;
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
export class Import extends Node {

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
 * @param {stringg} name
 * @param {array<Attribute>} attributes
 * @param {array<Tag|Text|ControlStructure>} children
 * @param {Location} location 
 */
export class Tag extends Node {

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
export class Attribute extends Node {

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
export class Interpolation extends Node {

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
export class BooleanLiteral extends Node {

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
export class NumberLiteral extends Node {

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
export class StringLiteral extends Node {

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
export class ArrayLiteral extends Node {

    constructor(members, location) {
        super();
        this.type = 'array';
        this.members = members;
        this.location = location;

    }

}


/**
 * Characters 
 * @param {string} value 
 * @param {Location} location 
 */
export class Characters extends Node {

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
export class Filter extends Node {

    constructor(name, args) {
        super();
        this.type = 'filter';
        this.name = name;
        this.args = args;

    }

}

/**
 * Expression 
 */
class Expression extends Node {

}

/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
export class UnaryExpression extends Expression {

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
export class BinaryExpression extends Expression {

    constructor(left, op, right, location) {

        super();
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
export class FunctionExpression extends Expression {

    constructor(name, args) {
        super();
        this.type = 'function';
        this.name = name;
        this.args = args;

    }

}

/**
 * MethodExpression 
 * @param {string} name 
 * @param {array} args 
 */
export class MethodExpression extends Expression {

    constructor(name, args) {

        super();
        this.type = 'method';
        this.name = name;
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
export class ForLoop extends Node {

    constructor(variable, indexName, target, children, location) {

        super();
        this.type = 'for';
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
 * @param {array} template 
 * @param {Location} location 
 */
export class IfCondition extends Node {

    constructor(expression, template, location) {

        super();
        this.expression = expression;
        this.template = template;
        this.location = location;

    }

}
