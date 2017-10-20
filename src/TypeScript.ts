import * as nodes from './AST';
import * as afpl from 'afpl';
import { Options } from './';

const CONTEXT = '$context';
const VIEW = '$view';

/**
 * Types and functions for generating typescript program text.
 */

const _throwNotKnown = (n: nodes.AST): string => {

    throw new Error(`Unsupported AST node ${typeof n === 'object' ? n.constructor.name : n}!`);

}

const noop = () => `function () {}`;
/**
 * view template.
 */
export const view = (id: string, typeClasses: string, params: string, ctx: string, tag: string) =>
    `export class ${id}${typeClasses} extends $wml.AppView<${ctx}> {

    constructor(context: ${ctx}${params ? ',' + params : ''}) {

        super(context);

        this.template = (${CONTEXT}:${ctx}, ${VIEW}:$wml.AppView<${ctx}>) =>
          ${tag ? tag : '<Node>document.createDocumentFragment()'};

       }

     }
`;

/**
 * code turns an AST into typescript code.
 */
export const code = (n: nodes.Module, o: Options): string => module2TS(n, o);

/**
 * module2TS converts a module to a typescript module.
 */
export const module2TS = (n: nodes.Module, { module }: Options) => `
import * as $wml from '${module}';
${n.imports.map(importStatement2TS).join(';\n')}

${n.exports.map(exports2TS).join(';\n')}

${n.main ? main2TS(n.main) : ''}
`;

/**
 * exports2TS converts various exports to typescript.
 */
export const exports2TS = (n: nodes.Export) => {

    if (n instanceof nodes.ExportStatement)
        return exportStatement2TS(n)
    else if (n instanceof nodes.FunStatement)
        return funStatement2TS(n);
    else if (n instanceof nodes.ViewStatement)
        return viewStatement2TS(n);
    else
        return _throwNotKnown(n);

}

/**
 * importStatement2TS converts an import statement.
 */
export const importStatement2TS = (n: nodes.ImportStatement) =>
    `import ${importMember2TS(n.member)} from '${n.module.value}'; `;

/**
 * importMember2TS converts the members of an import to typescript.
 */
export const importMember2TS = (n: nodes.ImportMember) => {

    if (n instanceof nodes.AggregateMember)
        return aggregateMember2TS(n);
    else if (n instanceof nodes.AliasedMember)
        return aliasedMember2TS(n);
    else if (n instanceof nodes.CompositeMember)
        return compositeMember2TS(n);
    else
        return _throwNotKnown;

}

/**
 * aliasedMember2TS converts a member alias to typescript.
 */
export const aliasedMember2TS = (n: nodes.AliasedMember) =>
    `${identifierOrConstructor2TS(n.member)} as ${identifierOrConstructor2TS(n.alias)} `;

/**
 * aggregateMember2TS converts a qualified member to typescript.
 */
export const aggregateMember2TS = (n: nodes.AggregateMember) =>
    `* as ${identifierOrConstructor2TS(n.id)} `;

/**
 * compositeMember2TS coverts to typescript.
 */
export const compositeMember2TS = (n: nodes.CompositeMember) =>
    '{' + (n.members.map(m => (m instanceof nodes.AliasedMember) ?
        aliasedMember2TS(m) :
        identifierOrConstructor2TS(m)).join(',')) + '}'

/**
 * main2TS converts to typescript.
 */
export const main2TS = (n: nodes.Main) =>
    (n instanceof nodes.TypedMain) ?
        typedMain2TS(n) :
        untypedMain2TS(n);

/**
 * typedMain2TS converts a typed main file to typescript.
 */
export const typedMain2TS = (n: nodes.TypedMain) =>
    view('Main',
        typeClasses2TS(n.typeClasses),
        n.parameters.map(parameter2TS).join(','),
        type2TS(n.context),
        tag2TS(n.tag));

/**
 * untypedMain2TS converts an untyped main file to typescript.
 */
export const untypedMain2TS = (n: nodes.UntypedMain) =>
    view('Main', '', '', 'void', tag2TS(n.tag));

/**
 * exportStatement2TS converts an export statement to typescript.
 */
export const exportStatement2TS = (n: nodes.ExportStatement) =>
    `export ${compositeMember2TS(n.members)} from '${n.module.value}';\n`

/**
 * viewStatement2TS converts a view statement into a typescript class.
 */
export const viewStatement2TS = (n: nodes.ViewStatement) =>
    view(
        constructor2TS(n.id),
        typeClasses2TS(n.typeClasses),
        n.parameters.map(parameter2TS).join(','),
        type2TS(n.context), tag2TS(n.tag));

/**
 * funStatement2TS converts a function statement to typescript.
 */
export const funStatement2TS = (n: nodes.FunStatement) =>
    `export const ${unqualifiedIdentifier2TS(n.id)} = ` +
    `${typeClasses2TS(n.typeClasses)}(${n.parameters.map(parameter2TS).join(',')})=>` +
    `<C>(${VIEW}:$wml.AppView<C>)=>` +
    `${Array.isArray(n.body) ? children2TS(n.body) : child2TS(n.body)};`;

/**
 * typeClasses2TS converts a list of typeclasses into the a list of typescript typeclasses.
 */
export const typeClasses2TS = (ns: nodes.TypeClass[]): string =>
    (ns.length === 0) ? '' : `< ${ns.map(typeClass2TS).join(',')}>`;

/**
 * typeClass2TS converts a typeclass into a typescript typeclass.
 */
export const typeClass2TS = (n: nodes.TypeClass) =>
    `${identifierOrConstructor2TS(n.id)} ${n.constraint ? 'extends ' + type2TS(n.constraint) : ''} `;

/**
 * type2TS converts a type hint to a typescript type hint.
 */
export const type2TS = (n: nodes.Type) =>
    `${identifierOrConstructor2TS(n.id)} ${typeClasses2TS(n.typeClasses)} `;

/**
 * parameter2TS converts a parameter to a typescript parameter.
 */
export const parameter2TS = (n: nodes.Parameter) =>
    (n instanceof nodes.TypedParameter) ? typedParameter2TS(n) :
        (n instanceof nodes.UntypedParameter) ? untypedParameter2TS(n) :
            _throwNotKnown;

/**
 * typedParameter2TS converts a typed parameter into a non-any typescript parameter.
 */
export const typedParameter2TS = (n: nodes.TypedParameter) =>
    `${identifier2TS(n.id)}:${type2TS(n.hint)} `;

/**
 * untypedParameter2TS converts an type inferred parameter to a typescript parameter.
 */
export const untypedParameter2TS = (n: nodes.UntypedParameter) =>
    `${identifier2TS(n.id)} `;

/**
 * children2TS converts a list of children to typescript.
 */
export const children2TS = (list: nodes.Child[]): string =>
    (list.length === 0) ? 'document.createDocumentFragment();' :
        (list.length === 1) ? child2TS(list[0]) :
            `$$box(${list.map(l => child2TS(l)).join(',')}) `;

/**
 * child2TS converts children to typescript.
 */
export const child2TS = (n: nodes.Child): string => {
    if ((n instanceof nodes.Node) || (n instanceof nodes.Widget))
        return tag2TS(n);
    else if (n instanceof nodes.Interpolation)
        return `$wml.domify(${interpolation2TS(n)}) `;
    else if (n instanceof nodes.IfStatement)
        return ifStatement2TS(n);
    else if (n instanceof nodes.ForStatement)
        return forStatement2TS(n);
    else if (n instanceof nodes.Characters)
        return characters2TS(n);
    else if (n instanceof nodes.ContextProperty)
        return contextProperty2TS(n);
    else if (n instanceof nodes.QualifiedConstructor)
        return qualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedConstructor)
        return unqualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedIdentifier)
        return unqualifiedIdentifier2TS(n);
    else if (n instanceof nodes.QualifiedIdentifier)
        return qualifiedIdentifier2TS(n);
    else
        return _throwNotKnown(n);

}

/**
 * tag2TS converts a tag (node/widget) to typescript.
 */
export const tag2TS = (n: nodes.Tag) => {

    let children = n.children.map(child2TS);
    let attrs = attrs2String(groupAttrs(n.attributes));
    let name = identifierOrConstructor2TS(n.open);

    return (n.type === 'widget') ? `$wml.widget(${name}, ${attrs}, [${children}], ${VIEW})` :
        `$wml.node('${name}', ${attrs}, [${children}], ${VIEW}) `;

}

/**
 * attrs2String 
 */
export const attrs2String = (attrs: { [key: string]: string[] }) => '{' +
    (Object.keys(attrs).map(ns => `${ns} : { ${attrs[ns].join(',')} } `)) + '}';

/**
 * groupAttrs groups attributes according to their namespace.
 */
export const groupAttrs = (ns: nodes.Attribute[]) => ns.reduce((p, c) =>
    afpl.util.merge<any, any>(p, {
        [c.namespace.id || 'html']: (p[c.namespace.id || 'html'] || []).concat(
            attribute2TS(c))
    }), ({ html: [], wml: [] } as { [key: string]: string[] }));

/**
 * attribute2Value 
 */
export const attribute2TS = (n: nodes.Attribute) =>
    `${unqualifiedIdentifier2TS(n.name)} : ${attributeValue2TS(n.value)} `;

/**
 * attributeValue2TS converts an attribute value to typescript.
 */
export const attributeValue2TS = (n: nodes.Interpolation | nodes.Literal) =>
    (n instanceof nodes.Interpolation) ? interpolation2TS(n) : literal2TS(n);

/**
 * interpolation2TS converts interpolation expressions to typescript.
 */
export const interpolation2TS = (n: nodes.Interpolation) =>
    n.filters.reduce((p, c) => `${expression2TS(c)} (${p})`, expression2TS(n.expression));

/**
 * forStatement2TS converts a for statement to typescript.
 */
export const forStatement2TS = (n: nodes.ForStatement) =>
    `$wml.map(${expression2TS(n.list)}, function _map` +
    `(${[n.variable, n.index, n.all].filter(x => x).map(parameter2TS).join(',')}) ` +
    `{ return ${children2TS(n.body)} }, ` +
    `function otherwise() { return ${children2TS(n.otherwise)} }) `;

/**
 * ifStatement2TS converts an if statement to typescript.
 */
export const ifStatement2TS = (n: nodes.IfStatement) =>
    `$wml.ifthen(${expression2TS(n.condition)}, ` +
    `function then()` +
    `{ return ${children2TS(n.then)} }, ${n.elseClause ? else2TS(n.elseClause) : noop()}) `;

const else2TS = (n: nodes.ElseClause | nodes.ElseIfClause): string =>
    (n instanceof nodes.ElseClause) ? elseClause2TS(n) :
        (n instanceof nodes.ElseIfClause) ? elseIfClause2TS(n) :
            _throwNotKnown(n);

/**
 * elseClause2TS converts the else clause of an if statement to typescript.
 */
export const elseClause2TS = (n: nodes.ElseClause) =>
    `function else_clause() { return ${children2TS(n.children)} } `;

/**
 * elseIfClause2TS converts an else if clause to typescript.
 */
export const elseIfClause2TS = (n: nodes.ElseIfClause) =>
    `function elseif()` +
    `{ return $wml.ifthen(${expression2TS(n.condition)}, ` +
    `function then() ` +
    `{ return ${children2TS(n.then)}; }, ` +
    `${else2TS(n.elseClause)});}`;

/**
 * characters2TS converts character text to a typescript string.
 */
export const characters2TS = (n: nodes.Characters) => `$wml.text(\`${n.value}\`)`;

/**
 * expression2TS converts a wml expression to a typescript expression.
 */
export const expression2TS = (n: nodes.Expression): string => {

    if (n instanceof nodes.IfThenExpression)
        return ifThenExpression2TS(n)
    else if (n instanceof nodes.BinaryExpression)
        return binaryExpression2TS(n)
    else if (n instanceof nodes.UnaryExpression)
        return unaryExpression2TS(n);
    else if (n instanceof nodes.ViewConstruction)
        return viewConstruction2TS(n);
    else if (n instanceof nodes.FunApplication)
        return funApplication2TS(n);
    else if (n instanceof nodes.ConstructExpression)
        return constructExpression2TS(n);
    else if (n instanceof nodes.CallExpression)
        return callExpression2TS(n);
    else if (n instanceof nodes.MemberExpression)
        return memberExpression2TS(n);
    else if (n instanceof nodes.ReadExpression)
        return readExpression2TS(n);
    else if (n instanceof nodes.FunctionExpression)
        return functionExpression2TS(n);
    else if (n instanceof nodes.Record)
        return record2TS(n)
    else if (n instanceof nodes.List)
        return list2TS(n)
    else if (n instanceof nodes.BooleanLiteral)
        return boolean2TS(n);
    else if (n instanceof nodes.NumberLiteral)
        return number2TS(n);
    else if (n instanceof nodes.StringLiteral)
        return string2TS(n);
    else if (n instanceof nodes.ContextProperty)
        return contextProperty2TS(n);
    else if (n instanceof nodes.QualifiedConstructor)
        return qualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedConstructor)
        return unqualifiedConstructor2TS(n);
    else if (n instanceof nodes.UnqualifiedIdentifier)
        return unqualifiedIdentifier2TS(n);
    else if (n instanceof nodes.QualifiedIdentifier)
        return qualifiedIdentifier2TS(n);
    else if (n instanceof nodes.ContextVariable)
        return contextVariable2TS(n);
    else
        _throwNotKnown(n);

}

/**
 * ifThenExpression2TS converts an if-then-else expression to typescript.
 */
export const ifThenExpression2TS = (n: nodes.IfThenExpression): string =>
    `(${expression2TS(n.condition)}) ? ${expression2TS(n.iftrue)} : ${expression2TS(n.iffalse)} `;

/**
 * binaryExpression2TS converts a binary expression to typescript.
 */
export const binaryExpression2TS = (n: nodes.BinaryExpression) =>
    `(${expression2TS(n.left)} ${convertOperator(n.operator)} ${expression2TS(n.right)}) `;

/**
 * convertOperator for strictness.
 */
export const convertOperator = (op: string) =>
    (op === '==') ? '===' :
        (op === '!=') ? '!==' :
            op;

/**
 * unaryExpression2TS converts a unary expression to typescript.
 */
export const unaryExpression2TS = (n: nodes.UnaryExpression) =>
    `${n.operator} (${expression2TS(n.expression)})`;

/**
 * viewConstruction2TS convers a view construction to typescript.
 */
export const viewConstruction2TS = (n: nodes.ViewConstruction) =>
    `(new ${constructor2TS(n.cons)}(${args2TS(n.args)})).render()`;

/**
 * funApplication2TS converts a fun application to typescript.
 */
export const funApplication2TS = (n: nodes.FunApplication) =>
    `${expression2TS(n.target)} ${typeArgs2TS(n.typeArgs)} ` +
    `(${args2TS(n.args)})(${VIEW})`;

/**
 * constructExpression2TS converts a construct expression to a typescript new expression.
 */
export const constructExpression2TS = (n: nodes.ConstructExpression) =>
    `new ${constructor2TS(n.cons)} (${args2TS(n.args)})`;

/**
 * callExpression2TS converts a call expression (apply) to a typescript invocation.
 */
export const callExpression2TS = (n: nodes.CallExpression) =>
    `${expression2TS(n.target)} ${typeArgs2TS(n.typeArgs)} (${args2TS(n.args)})`;

/**
 * typeArgs2TS converts passed type arguments to typescript
 */
export const typeArgs2TS = (ns: nodes.Type[]) =>
    ns.length === 0 ? '' : `< ${ns.map(type2TS).join(',')}>`;

/**
 * args2TS converts a list of arguments to a typescript argument tupple.
 */
export const args2TS = (ns: nodes.Expression[]) =>
    (ns.length === 0) ? '' : ns.map(expression2TS).join(',');

/**
 * memberExpression2TS converts a member expression into a typescript member expression.
 */
export const memberExpression2TS = (n: nodes.MemberExpression) =>
    `${expression2TS(n.target)}.${identifier2TS(n.member)} `;

/**
 * readExpression2TS converts a read expression to side effect full property look up.
 *
 * NOTE: this part of the language is most likely to change.
 */
export const readExpression2TS = (n: nodes.ReadExpression) =>
    `$wml.read < ${type2TS(n.hint)}>(${expression2TS(n.path)}, ${expression2TS(n.target)} ` +
    `${n.defaults ? ',' + expression2TS(n.defaults) : ''})`;

/**
 * functionExpression2TS converts a function expression to a typescript function expression.
 */
export const functionExpression2TS = (n: nodes.FunctionExpression) =>
    `function function_expression(${n.parameters.map(parameter2TS).join(',')})` +
    `{ return ${expression2TS(n.body)} } `;

/**
 * literal2TS converts literals.
 */
export const literal2TS = (n: nodes.Literal) =>
    (n instanceof nodes.BooleanLiteral) ? boolean2TS(n) :
        (n instanceof nodes.StringLiteral) ? string2TS(n) :
            (n instanceof nodes.NumberLiteral) ? number2TS(n) :
                (n instanceof nodes.Record) ? record2TS(n) :
                    (n instanceof nodes.List) ? list2TS(n) :
                        _throwNotKnown(n);

/**
 * boolean2TS converts a boolean literal to a typescript boolean literal.
 */
export const boolean2TS = (n: nodes.BooleanLiteral) => `${n.value} `;

/**
 * string2TS converts a string literal to a typescript string literal.
 */
export const string2TS = (n: nodes.StringLiteral) => `\`${n.value}\``;

/**
 * number2TS converts a number literal to a typecript number literal.
 */
export const number2TS = (n: nodes.NumberLiteral) => `${parseFloat(n.value)}`;

/**
 * record2TS converts a record to a typescript object literal.
 */
export const record2TS = (n: nodes.Record) =>
    `{${n.properties.map(property2TS).join(',')}}`;

/**
 * list2TS converts a list to a typescript array literal.
 */
export const list2TS = (n: nodes.List) =>
    `[${n.members.map(expression2TS).join(',')}]`;

/**
 * property2TS converts a property of a a record to typescript.
 */
export const property2TS = (n: nodes.Property) =>
    `'${key2TS(n.key)}' : ${expression2TS(n.value)}`;

/**
 * key2TS converts a single key on a record.
 */
export const key2TS = (n: nodes.StringLiteral | nodes.UnqualifiedIdentifier) =>
    (n instanceof nodes.StringLiteral) ? string2TS(n) : identifier2TS(n);

/**
 * contextProperty2TS turns property access on the context to regular TS 
 * property access.
 */
export const contextProperty2TS = (n: nodes.ContextProperty) =>
    `${CONTEXT}.${identifier2TS(n.member)}`;

/**
 * contextVariable2TS turns the context variable into the context identifier.
 */
export const contextVariable2TS = (_: nodes.ContextVariable) => `${CONTEXT}`;

/**
 * identifierOrConstructor2TS
 */
export const identifierOrConstructor2TS = (n: nodes.Identifier | nodes.Constructor) => {

    if ((n instanceof nodes.UnqualifiedIdentifier) ||
        (n instanceof nodes.QualifiedIdentifier))
        return identifier2TS(n);
    else if ((n instanceof nodes.UnqualifiedConstructor) ||
        (n instanceof nodes.QualifiedConstructor))
        return constructor2TS(n);
    else
        return _throwNotKnown(n);

}

/**
 * constructor2TS turns a constructor to a typescript identifier.
 *
 * Remember constructors are proper cased.
 */
export const constructor2TS = (n: nodes.Constructor) =>
    (n instanceof nodes.QualifiedConstructor) ? qualifiedConstructor2TS(n) :
        (n instanceof nodes.UnqualifiedConstructor) ? unqualifiedConstructor2TS(n) :
            _throwNotKnown(n);

/**
 * unqualifiedConstructor2TS converts an unqualified constructor to typescript
 */
export const unqualifiedConstructor2TS = (n: nodes.UnqualifiedConstructor) => `${n.id}`;

/**
 * qualifiedConstructor converts a qualified constructor to typescript.
 */
export const qualifiedConstructor2TS = (n: nodes.QualifiedConstructor) =>
    `${n.qualifier}.${n.member}`;

/**
 * identifier2TS turns an identifier to a typescript identifier.
 */
export const identifier2TS = (n: nodes.Identifier) =>
    (n instanceof nodes.QualifiedIdentifier) ? qualifiedIdentifier2TS(n) :
        (n instanceof nodes.UnqualifiedIdentifier) ? unqualifiedIdentifier2TS(n) :
            _throwNotKnown(n);

/**
 * qualifiedIdentifier2TS converts a qualified identifier to typescript
 */
export const qualifiedIdentifier2TS = (n: nodes.QualifiedIdentifier) =>
    `${n.qualifier}.${n.member}`;

/**
 * unqualifiedIdentifier2TS converts an unqualified identifier to typescript
 */
export const unqualifiedIdentifier2TS = (n: nodes.UnqualifiedIdentifier) => `${n.id}`;
