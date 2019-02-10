"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodes = require("@quenk/wml-parser/lib/ast");
var record_1 = require("@quenk/noni/lib/data/record");
var CONTEXT = '___context';
var VIEW = '___view';
var WML = '___wml';
var prims = ['String', 'Boolean', 'Number', 'Object', 'Undefined', 'Null', 'Void', 'Never', 'Any'];
/**
 * Types and functions for generating typescript program text.
 */
var _throwNotKnown = function (n) {
    throw new Error("Unsupported AST node " + (typeof n === 'object' ? n.constructor.name : n) + "!");
};
var noop = function () { return "function () {}"; };
/**
 * view template.
 */
exports.view = function (id, typeClasses, params, ctx, tag) {
    return "export class " + id + typeClasses + " extends " + WML + ".AppView<" + ctx + "> {\n\n    constructor(" + CONTEXT + ": " + ctx + (params ? ',' + params : '') + ") {\n\n        super(" + CONTEXT + ");\n\n        this.template = (" + VIEW + ":" + WML + ".AppView<" + ctx + ">) =>\n          " + (tag ? tag : '<Node>document.createDocumentFragment()') + ";\n\n       }\n\n     }\n";
};
/**
 * code turns an AST into typescript code.
 */
exports.code = function (n, o) { return exports.module2TS(n, o); };
/**
 * module2TS converts a module to a typescript module.
 */
exports.module2TS = function (n, _a) {
    var module = _a.module;
    return "\nimport * as " + WML + " from '" + module + "';\n" + n.imports.map(exports.importStatement2TS).join(';\n') + "\n\n" + n.exports.map(exports.exports2TS).join(';\n') + "\n\n" + (n.main ? exports.main2TS(n.main) : '') + "\n";
};
/**
 * exports2TS converts various exports to typescript.
 */
exports.exports2TS = function (n) {
    if (n instanceof nodes.ExportStatement)
        return exports.exportStatement2TS(n);
    else if (n instanceof nodes.FunStatement)
        return exports.funStatement2TS(n);
    else if (n instanceof nodes.ViewStatement)
        return exports.viewStatement2TS(n);
    else
        return _throwNotKnown(n);
};
/**
 * importStatement2TS converts an import statement.
 */
exports.importStatement2TS = function (n) {
    return "import " + exports.importMember2TS(n.member) + " from '" + n.module.value + "'; ";
};
/**
 * importMember2TS converts the members of an import to typescript.
 */
exports.importMember2TS = function (n) {
    if (n instanceof nodes.AggregateMember)
        return exports.aggregateMember2TS(n);
    else if (n instanceof nodes.AliasedMember)
        return exports.aliasedMember2TS(n);
    else if (n instanceof nodes.CompositeMember)
        return exports.compositeMember2TS(n);
    else
        return _throwNotKnown;
};
/**
 * aliasedMember2TS converts a member alias to typescript.
 */
exports.aliasedMember2TS = function (n) {
    return exports.identifierOrConstructor2TS(n.member) + " as " + exports.identifierOrConstructor2TS(n.alias) + " ";
};
/**
 * aggregateMember2TS converts a qualified member to typescript.
 */
exports.aggregateMember2TS = function (n) {
    return "* as " + exports.identifierOrConstructor2TS(n.id) + " ";
};
/**
 * compositeMember2TS coverts to typescript.
 */
exports.compositeMember2TS = function (n) {
    return '{' + (n.members.map(function (m) { return (m instanceof nodes.AliasedMember) ?
        exports.aliasedMember2TS(m) :
        exports.identifierOrConstructor2TS(m); }).join(',')) + '}';
};
/**
 * main2TS converts to typescript.
 */
exports.main2TS = function (n) {
    return (n instanceof nodes.TypedMain) ?
        exports.typedMain2TS(n) :
        exports.untypedMain2TS(n);
};
/**
 * typedMain2TS converts a typed main file to typescript.
 */
exports.typedMain2TS = function (n) {
    return exports.view(n.id ? exports.unqualifiedIdentifier2TS(n.id) : 'Main', exports.typeClasses2TS(n.typeClasses), n.parameters.map(exports.parameter2TS).join(','), exports.type2TS(n.context), exports.tag2TS(n.tag));
};
/**
 * untypedMain2TS converts an untyped main file to typescript.
 */
exports.untypedMain2TS = function (n) {
    return exports.view('Main', '', '', 'void', exports.tag2TS(n.tag));
};
/**
 * exportStatement2TS converts an export statement to typescript.
 */
exports.exportStatement2TS = function (n) {
    return "export " + exports.compositeMember2TS(n.members) + " from '" + n.module.value + "';\n";
};
/**
 * viewStatement2TS converts a view statement into a typescript class.
 */
exports.viewStatement2TS = function (n) {
    return exports.view(exports.constructor2TS(n.id), exports.typeClasses2TS(n.typeClasses), n.parameters.map(exports.parameter2TS).join(','), exports.type2TS(n.context), exports.tag2TS(n.tag));
};
var _funContext = function (n) { return "(" + CONTEXT + ":" + exports.type2TS(n) + ")=>"; };
var _funView = function () { return "(" + VIEW + ":" + WML + ".View)=>"; };
var _curry = function (n) {
    return n.map(exports.parameter2TS).map(function (s) { return "(" + s + ")=>"; }).join('');
};
/**
 * funStatement2TS converts a function statement to typescript.
 */
exports.funStatement2TS = function (n) {
    return "export const " + exports.unqualifiedIdentifier2TS(n.id) + " = " +
        ("" + exports.typeClasses2TS(n.typeClasses)) +
        ((n.context != null) ? _funContext(n.context) : '') +
        ("" + _curry(n.parameters) + _funView()) +
        ((Array.isArray(n.body) ? exports.children2TS(n.body) : exports.child2TS(n.body)) + ";");
};
/**
 * typeClasses2TS converts a list of typeclasses into the a list of typescript typeclasses.
 */
exports.typeClasses2TS = function (ns) {
    return (ns.length === 0) ? '' : "< " + ns.map(exports.typeClass2TS).join(',') + ">";
};
/**
 * typeClass2TS converts a typeclass into a typescript typeclass.
 */
exports.typeClass2TS = function (n) {
    return exports.identifierOrConstructor2TS(n.id) + " " +
        ((n.constraint ? 'extends ' + exports.type2TS(n.constraint) : '') + " ");
};
var _toPrim = function (typ) {
    return prims.indexOf(typ) > -1 ? typ.toLowerCase() : typ;
};
/**
 * type2TS converts a type hint to a typescript type hint.
 */
exports.type2TS = function (n) {
    return _toPrim(exports.identifierOrConstructor2TS(n.id)) + " " +
        (exports.typeClasses2TS(n.typeClasses) + " " + (n.list ? '[]' : ''));
};
/**
 * parameter2TS converts a parameter to a typescript parameter.
 */
exports.parameter2TS = function (n) {
    return (n instanceof nodes.TypedParameter) ? exports.typedParameter2TS(n) :
        (n instanceof nodes.UntypedParameter) ? exports.untypedParameter2TS(n) :
            _throwNotKnown;
};
/**
 * typedParameter2TS converts a typed parameter into a non-any typescript parameter.
 */
exports.typedParameter2TS = function (n) {
    return exports.identifier2TS(n.id) + ":" + exports.type2TS(n.hint) + " ";
};
/**
 * untypedParameter2TS converts an type inferred parameter to a typescript parameter.
 */
exports.untypedParameter2TS = function (n) {
    return exports.identifier2TS(n.id) + " ";
};
/**
 * children2TS converts a list of children to typescript.
 */
exports.children2TS = function (list) {
    return (list.length === 0) ? 'document.createDocumentFragment();' :
        (list.length === 1) ? exports.child2TS(list[0]) :
            WML + ".box(" + list.map(function (l) { return exports.child2TS(l); }).join(',') + ") ";
};
/**
 * child2TS converts children to typescript.
 */
exports.child2TS = function (n) {
    if ((n instanceof nodes.Node) || (n instanceof nodes.Widget))
        return exports.tag2TS(n);
    else if (n instanceof nodes.Interpolation)
        return WML + ".domify(" + exports.interpolation2TS(n) + ") ";
    else if (n instanceof nodes.IfStatement)
        return exports.ifStatement2TS(n);
    else if (n instanceof nodes.ForStatement)
        return exports.forStatement2TS(n);
    else if (n instanceof nodes.Characters)
        return exports.characters2TS(n);
    else if (n instanceof nodes.ContextProperty)
        return exports.contextProperty2TS(n);
    else if (n instanceof nodes.QualifiedConstructor)
        return exports.qualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedConstructor)
        return exports.unqualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedIdentifier)
        return exports.unqualifiedIdentifier2TS(n);
    else if (n instanceof nodes.QualifiedIdentifier)
        return exports.qualifiedIdentifier2TS(n);
    else
        return _throwNotKnown(n);
};
/**
 * tag2TS converts a tag (node/widget) to typescript.
 */
exports.tag2TS = function (n) {
    var children = n.children.map(exports.child2TS);
    var attrs = exports.attrs2String(exports.groupAttrs(n.attributes));
    var name = exports.identifierOrConstructor2TS(n.open);
    return (n.type === 'widget') ? WML + ".widget(" + name + ", " + attrs + ", [" + children + "], " + VIEW + ")" :
        WML + ".node('" + name + "', " + attrs + ", [" + children + "], " + VIEW + ") ";
};
/**
 * attrs2String
 */
exports.attrs2String = function (attrs) { return '{' +
    (Object.keys(attrs).map(function (ns) { return ns + " : { " + attrs[ns].join(',') + " } "; })) + '}'; };
/**
 * groupAttrs groups attributes according to their namespace.
 */
exports.groupAttrs = function (ns) { return ns.reduce(function (p, c) {
    var _a;
    return record_1.merge(p, (_a = {},
        _a[c.namespace.id || 'html'] = (p[c.namespace.id || 'html'] || []).concat(exports.attribute2TS(c)),
        _a));
}, { html: [], wml: [] }); };
/**
 * attribute2Value
 */
exports.attribute2TS = function (n) {
    return "'" + exports.unqualifiedIdentifier2TS(n.name) + "' : " + exports.attributeValue2TS(n.value) + " ";
};
/**
 * attributeValue2TS converts an attribute value to typescript.
 */
exports.attributeValue2TS = function (n) {
    return (n instanceof nodes.Interpolation) ? exports.interpolation2TS(n) : exports.literal2TS(n);
};
/**
 * interpolation2TS converts interpolation expressions to typescript.
 */
exports.interpolation2TS = function (n) {
    return n.filters.reduce(function (p, c) { return exports.expression2TS(c) + " (" + p + ")"; }, exports.expression2TS(n.expression));
};
/**
 * forStatement2TS converts a for statement to typescript.
 */
exports.forStatement2TS = function (n) {
    return WML + ".map(" + exports.expression2TS(n.list) + ", function _map" +
        ("(" + [n.variable, n.index, n.all].filter(function (x) { return x; }).map(exports.parameter2TS).join(',') + ") ") +
        ("{ return " + exports.children2TS(n.body) + " }, ") +
        ("function otherwise() { return " + exports.children2TS(n.otherwise) + " }) ");
};
/**
 * ifStatement2TS converts an if statement to typescript.
 */
exports.ifStatement2TS = function (n) {
    return "(" + exports.expression2TS(n.condition) + ")? " +
        (exports.children2TS(n.then) + ":") +
        ("" + (n.elseClause ? else2TS(n.elseClause) : noop()));
};
var else2TS = function (n) {
    return (n instanceof nodes.ElseClause) ? exports.children2TS(n.children) :
        (n instanceof nodes.ElseIfClause) ? exports.ifStatement2TS(n) :
            _throwNotKnown(n);
};
/**
 * characters2TS converts character text to a typescript string.
 */
exports.characters2TS = function (n) { return WML + ".text(`" + n.value + "`)"; };
/**
 * expression2TS converts a wml expression to a typescript expression.
 */
exports.expression2TS = function (n) {
    if (n instanceof nodes.IfThenExpression)
        return exports.ifThenExpression2TS(n);
    else if (n instanceof nodes.BinaryExpression)
        return exports.binaryExpression2TS(n);
    else if (n instanceof nodes.UnaryExpression)
        return exports.unaryExpression2TS(n);
    else if (n instanceof nodes.ViewConstruction)
        return exports.viewConstruction2TS(n);
    else if (n instanceof nodes.FunApplication)
        return exports.funApplication2TS(n);
    else if (n instanceof nodes.ConstructExpression)
        return exports.constructExpression2TS(n);
    else if (n instanceof nodes.CallExpression)
        return exports.callExpression2TS(n);
    else if (n instanceof nodes.MemberExpression)
        return exports.memberExpression2TS(n);
    else if (n instanceof nodes.ReadExpression)
        return exports.readExpression2TS(n);
    else if (n instanceof nodes.FunctionExpression)
        return exports.functionExpression2TS(n);
    else if (n instanceof nodes.Record)
        return exports.record2TS(n);
    else if (n instanceof nodes.List)
        return exports.list2TS(n);
    else if (n instanceof nodes.BooleanLiteral)
        return exports.boolean2TS(n);
    else if (n instanceof nodes.NumberLiteral)
        return exports.number2TS(n);
    else if (n instanceof nodes.StringLiteral)
        return exports.string2TS(n);
    else if (n instanceof nodes.ContextProperty)
        return exports.contextProperty2TS(n);
    else if (n instanceof nodes.QualifiedConstructor)
        return exports.qualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedConstructor)
        return exports.unqualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedIdentifier)
        return exports.unqualifiedIdentifier2TS(n);
    else if (n instanceof nodes.QualifiedIdentifier)
        return exports.qualifiedIdentifier2TS(n);
    else if (n instanceof nodes.ContextVariable)
        return exports.contextVariable2TS(n);
    else
        return _throwNotKnown(n);
};
/**
 * ifThenExpression2TS converts an if-then-else expression to typescript.
 */
exports.ifThenExpression2TS = function (n) {
    return "(" + exports.expression2TS(n.condition) + ") ? " + exports.expression2TS(n.iftrue) + " : " + exports.expression2TS(n.iffalse) + " ";
};
/**
 * binaryExpression2TS converts a binary expression to typescript.
 */
exports.binaryExpression2TS = function (n) {
    return "(" + exports.expression2TS(n.left) + " " + exports.convertOperator(n.operator) + " " + exports.expression2TS(n.right) + ") ";
};
/**
 * convertOperator for strictness.
 */
exports.convertOperator = function (op) {
    return (op === '==') ? '===' :
        (op === '!=') ? '!==' :
            op;
};
/**
 * unaryExpression2TS converts a unary expression to typescript.
 */
exports.unaryExpression2TS = function (n) {
    return n.operator + " (" + exports.expression2TS(n.expression) + ")";
};
/**
 * viewConstruction2TS convers a view construction to typescript.
 */
exports.viewConstruction2TS = function (n) {
    return "(new " + exports.constructor2TS(n.cons) + "(" + exports.args2TS(n.context) + ")).render()";
};
exports._curriedApplication = function (ns) {
    return (ns.length === 0) ? '' : ns.map(function (e) { return "(" + exports.expression2TS(e) + ")"; }).join('');
};
/**
 * funApplication2TS converts a fun application to typescript.
 */
exports.funApplication2TS = function (n) {
    return "" + exports.expression2TS(n.target) + exports.typeArgs2TS(n.typeArgs) + " " +
        (exports._curriedApplication(n.args) + "(" + VIEW + ")");
};
/**
 * constructExpression2TS converts a construct expression to a typescript new expression.
 */
exports.constructExpression2TS = function (n) {
    return "new " + exports.constructor2TS(n.cons) + " (" + exports.args2TS(n.args) + ")";
};
/**
 * callExpression2TS converts a call expression (apply) to a typescript invocation.
 */
exports.callExpression2TS = function (n) {
    return exports.expression2TS(n.target) + " " + exports.typeArgs2TS(n.typeArgs) + " (" + exports.args2TS(n.args) + ")";
};
/**
 * typeArgs2TS converts passed type arguments to typescript
 */
exports.typeArgs2TS = function (ns) {
    return ns.length === 0 ? '' : "< " + ns.map(exports.type2TS).join(',') + ">";
};
/**
 * args2TS converts a list of arguments to a typescript argument tupple.
 */
exports.args2TS = function (ns) {
    return (ns.length === 0) ? '' : ns.map(exports.expression2TS).join(',');
};
/**
 * memberExpression2TS converts a member expression into a typescript member expression.
 */
exports.memberExpression2TS = function (n) {
    return exports.expression2TS(n.target) + "." + exports.identifier2TS(n.member) + " ";
};
/**
 * readExpression2TS converts a read expression to side effect full property look up.
 *
 * NOTE: this part of the language is most likely to change.
 */
exports.readExpression2TS = function (n) {
    return WML + ".read < " + exports.type2TS(n.hint) + ">(" + exports.expression2TS(n.path) + ", " + exports.expression2TS(n.target) + " " +
        ((n.defaults ? ',' + exports.expression2TS(n.defaults) : '') + ")");
};
/**
 * functionExpression2TS converts a function expression to a typescript function expression.
 */
exports.functionExpression2TS = function (n) {
    return "(" + n.parameters.map(exports.parameter2TS).join(',') + ")=>" +
        ("" + exports.expression2TS(n.body));
};
/**
 * literal2TS converts literals.
 */
exports.literal2TS = function (n) {
    return (n instanceof nodes.BooleanLiteral) ? exports.boolean2TS(n) :
        (n instanceof nodes.StringLiteral) ? exports.string2TS(n) :
            (n instanceof nodes.NumberLiteral) ? exports.number2TS(n) :
                (n instanceof nodes.Record) ? exports.record2TS(n) :
                    (n instanceof nodes.List) ? exports.list2TS(n) :
                        _throwNotKnown(n);
};
/**
 * boolean2TS converts a boolean literal to a typescript boolean literal.
 */
exports.boolean2TS = function (n) { return n.value + " "; };
/**
 * string2TS converts a string literal to a typescript string literal.
 */
exports.string2TS = function (n) { return "`" + n.value + "`"; };
/**
 * number2TS converts a number literal to a typecript number literal.
 */
exports.number2TS = function (n) { return "" + parseFloat(n.value); };
/**
 * record2TS converts a record to a typescript object literal.
 */
exports.record2TS = function (n) {
    return "{" + n.properties.map(exports.property2TS).join(',') + "}";
};
/**
 * list2TS converts a list to a typescript array literal.
 */
exports.list2TS = function (n) {
    return "[" + n.members.map(exports.expression2TS).join(',') + "]";
};
/**
 * property2TS converts a property of a a record to typescript.
 */
exports.property2TS = function (n) {
    return "'" + exports.key2TS(n.key) + "' : " + exports.expression2TS(n.value);
};
/**
 * key2TS converts a single key on a record.
 */
exports.key2TS = function (n) {
    return (n instanceof nodes.StringLiteral) ? exports.string2TS(n) : exports.identifier2TS(n);
};
/**
 * contextProperty2TS turns property access on the context to regular TS
 * property access.
 */
exports.contextProperty2TS = function (n) {
    return CONTEXT + "." + exports.identifier2TS(n.member);
};
/**
 * contextVariable2TS turns the context variable into the context identifier.
 */
exports.contextVariable2TS = function (_) { return "" + CONTEXT; };
/**
 * identifierOrConstructor2TS
 */
exports.identifierOrConstructor2TS = function (n) {
    if ((n instanceof nodes.UnqualifiedIdentifier) ||
        (n instanceof nodes.QualifiedIdentifier))
        return exports.identifier2TS(n);
    else if ((n instanceof nodes.UnqualifiedConstructor) ||
        (n instanceof nodes.QualifiedConstructor))
        return exports.constructor2TS(n);
    else
        return _throwNotKnown(n);
};
/**
 * constructor2TS turns a constructor to a typescript identifier.
 *
 * Remember constructors are proper cased.
 */
exports.constructor2TS = function (n) {
    return (n instanceof nodes.QualifiedConstructor) ? exports.qualifiedConstructor2TS(n) :
        (n instanceof nodes.UnqualifiedConstructor) ? exports.unqualifiedConstructor2TS(n) :
            _throwNotKnown(n);
};
/**
 * unqualifiedConstructor2TS converts an unqualified constructor to typescript
 */
exports.unqualifiedConstructor2TS = function (n) { return "" + n.id; };
/**
 * qualifiedConstructor converts a qualified constructor to typescript.
 */
exports.qualifiedConstructor2TS = function (n) {
    return n.qualifier + "." + n.member;
};
/**
 * identifier2TS turns an identifier to a typescript identifier.
 */
exports.identifier2TS = function (n) {
    return (n instanceof nodes.QualifiedIdentifier) ? exports.qualifiedIdentifier2TS(n) :
        (n instanceof nodes.UnqualifiedIdentifier) ? exports.unqualifiedIdentifier2TS(n) :
            _throwNotKnown(n);
};
/**
 * qualifiedIdentifier2TS converts a qualified identifier to typescript
 */
exports.qualifiedIdentifier2TS = function (n) {
    return n.qualifier + "." + n.member;
};
/**
 * unqualifiedIdentifier2TS converts an unqualified identifier to typescript
 */
exports.unqualifiedIdentifier2TS = function (n) { return "" + n.id; };
//# sourceMappingURL=typescript.js.map