import * as nodes from './AST';
import { Options } from './';
/**
 * view template.
 */
export declare const view: (id: string, typeClasses: string, params: string, ctx: string, tag: string) => string;
/**
 * code turns an AST into typescript code.
 */
export declare const code: (n: nodes.Module, _: Options) => string;
/**
 * module2TS converts a module to a typescript module.
 */
export declare const module2TS: (n: nodes.Module) => string;
/**
 * exports2TS converts various exports to typescript.
 */
export declare const exports2TS: (n: nodes.Export) => string;
/**
 * importStatement2TS converts an import statement.
 */
export declare const importStatement2TS: (n: nodes.ImportStatement) => string;
/**
 * importMember2TS converts the members of an import to typescript.
 */
export declare const importMember2TS: (n: nodes.ImportMember) => string | ((n: nodes.AST) => string);
/**
 * aliasedMember2TS converts a member alias to typescript.
 */
export declare const aliasedMember2TS: (n: nodes.AliasedMember) => string;
/**
 * aggregateMember2TS converts a qualified member to typescript.
 */
export declare const aggregateMember2TS: (n: nodes.AggregateMember) => string;
/**
 * compositeMember2TS coverts to typescript.
 */
export declare const compositeMember2TS: (n: nodes.CompositeMember) => string;
/**
 * main2TS converts to typescript.
 */
export declare const main2TS: (n: nodes.Main) => string;
/**
 * typedMain2TS converts a typed main file to typescript.
 */
export declare const typedMain2TS: (n: nodes.TypedMain) => string;
/**
 * untypedMain2TS converts an untyped main file to typescript.
 */
export declare const untypedMain2TS: (n: nodes.UntypedMain) => string;
/**
 * exportStatement2TS converts an export statement to typescript.
 */
export declare const exportStatement2TS: (n: nodes.ExportStatement) => string;
/**
 * viewStatement2TS converts a view statement into a typescript class.
 */
export declare const viewStatement2TS: (n: nodes.ViewStatement) => string;
/**
 * funStatement2TS converts a function statement to typescript.
 */
export declare const funStatement2TS: (n: nodes.FunStatement) => string;
/**
 * typeClasses2TS converts a list of typeclasses into the a list of typescript typeclasses.
 */
export declare const typeClasses2TS: (ns: nodes.TypeClass[]) => string;
/**
 * typeClass2TS converts a typeclass into a typescript typeclass.
 */
export declare const typeClass2TS: (n: nodes.TypeClass) => string;
/**
 * type2TS converts a type hint to a typescript type hint.
 */
export declare const type2TS: (n: nodes.Type) => string;
/**
 * parameter2TS converts a parameter to a typescript parameter.
 */
export declare const parameter2TS: (n: nodes.Parameter) => string | ((n: nodes.AST) => string);
/**
 * typedParameter2TS converts a typed parameter into a non-any typescript parameter.
 */
export declare const typedParameter2TS: (n: nodes.TypedParameter) => string;
/**
 * untypedParameter2TS converts an type inferred parameter to a typescript parameter.
 */
export declare const untypedParameter2TS: (n: nodes.UntypedParameter) => string;
/**
 * children2TS converts a list of children to typescript.
 */
export declare const children2TS: (list: nodes.Child[]) => string;
/**
 * child2TS converts children to typescript.
 */
export declare const child2TS: (n: nodes.Child) => string;
/**
 * tag2TS converts a tag (node/widget) to typescript.
 */
export declare const tag2TS: (n: nodes.Tag) => string;
/**
 * attrs2String
 */
export declare const attrs2String: (attrs: {
    [key: string]: string[];
}) => string;
/**
 * groupAttrs groups attributes according to their namespace.
 */
export declare const groupAttrs: (ns: nodes.Attribute[]) => any;
/**
 * attribute2Value
 */
export declare const attribute2TS: (n: nodes.Attribute) => string;
/**
 * attributeValue2TS converts an attribute value to typescript.
 */
export declare const attributeValue2TS: (n: nodes.AttributeValue) => string;
/**
 * interpolation2TS converts interpolation expressions to typescript.
 */
export declare const interpolation2TS: (n: nodes.Interpolation) => string;
/**
 * forStatement2TS converts a for statement to typescript.
 */
export declare const forStatement2TS: (n: nodes.ForStatement) => string;
/**
 * ifStatement2TS converts an if statement to typescript.
 */
export declare const ifStatement2TS: (n: nodes.IfStatement) => string;
/**
 * elseClause2TS converts the else clause of an if statement to typescript.
 */
export declare const elseClause2TS: (n: nodes.ElseClause) => string;
/**
 * elseIfClause2TS converts an else if clause to typescript.
 */
export declare const elseIfClause2TS: (n: nodes.ElseIfClause) => string;
/**
 * characters2TS converts character text to a typescript string.
 */
export declare const characters2TS: (n: nodes.Characters) => string;
/**
 * expression2TS converts a wml expression to a typescript expression.
 */
export declare const expression2TS: (n: nodes.Expression) => string;
/**
 * ifThenExpression2TS converts an if-then-else expression to typescript.
 */
export declare const ifThenExpression2TS: (n: nodes.IfThenExpression) => string;
/**
 * binaryExpression2TS converts a binary expression to typescript.
 */
export declare const binaryExpression2TS: (n: nodes.BinaryExpression) => string;
/**
 * convertOperator for strictness.
 */
export declare const convertOperator: (op: string) => string;
/**
 * unaryExpression2TS converts a unary expression to typescript
 */
export declare const unaryExpression2TS: (n: nodes.UnaryExpression) => string;
/**
 * constructExpression2TS converts a construct expression to a typescript new expression.
 */
export declare const constructExpression2TS: (n: nodes.ConstructExpression) => string;
/**
 * callExpression2TS converts a call expression (apply) to a typescript invocation.
 */
export declare const callExpression2TS: (n: nodes.CallExpression) => string;
/**
 * typeArgs2TS converts passed type arguments to typescript
 */
export declare const typeArgs2TS: (ns: nodes.Type[]) => string;
/**
 * args2TS converts a list of arguments to a typescript argument tupple.
 */
export declare const args2TS: (ns: nodes.Expression[]) => string;
/**
 * memberExpression2TS converts a member expression into a typescript member expression.
 */
export declare const memberExpression2TS: (n: nodes.MemberExpression) => string;
/**
 * readExpression2TS converts a read expression to side effect full property look up.
 *
 * NOTE: this part of the language is most likely to change.
 */
export declare const readExpression2TS: (n: nodes.ReadExpression) => string;
/**
 * functionExpression2TS converts a function expression to a typescript function expression.
 */
export declare const functionExpression2TS: (n: nodes.FunctionExpression) => string;
/**
 * literal2TS converts literals.
 */
export declare const literal2TS: (n: nodes.Literal) => string;
/**
 * boolean2TS converts a boolean literal to a typescript boolean literal.
 */
export declare const boolean2TS: (n: nodes.BooleanLiteral) => string;
/**
 * string2TS converts a string literal to a typescript string literal.
 */
export declare const string2TS: (n: nodes.StringLiteral) => string;
/**
 * number2TS converts a number literal to a typecript number literal.
 */
export declare const number2TS: (n: nodes.NumberLiteral) => string;
/**
 * record2TS converts a record to a typescript object literal.
 */
export declare const record2TS: (n: nodes.Record) => string;
/**
 * list2TS converts a list to a typescript array literal.
 */
export declare const list2TS: (n: nodes.List) => string;
/**
 * property2TS converts a property of a a record to typescript.
 */
export declare const property2TS: (n: nodes.Property) => string;
/**
 * key2TS converts a single key on a record.
 */
export declare const key2TS: (n: nodes.StringLiteral | nodes.UnqualifiedIdentifier) => string;
/**
 * contextProperty2TS turns property access on the context to regular TS
 * property access.
 */
export declare const contextProperty2TS: (n: nodes.ContextProperty) => string;
/**
 * contextVariable2TS turns the context variable into the context identifier.
 */
export declare const contextVariable2TS: (_: nodes.ContextVariable) => string;
/**
 * identifierOrConstructor2TS
 */
export declare const identifierOrConstructor2TS: (n: nodes.UnqualifiedIdentifier | nodes.UnqualifiedConstructor | nodes.QualifiedIdentifier | nodes.QualifiedConstructor) => string;
/**
 * constructor2TS turns a constructor to a typescript identifier.
 *
 * Remember constructors are proper cased.
 */
export declare const constructor2TS: (n: nodes.Constructor) => string;
/**
 * unqualifiedConstructor2TS converts an unqualified constructor to typescript
 */
export declare const unqualifiedConstructor2TS: (n: nodes.UnqualifiedConstructor) => string;
/**
 * qualifiedConstructor converts a qualified constructor to typescript.
 */
export declare const qualifiedConstructor2TS: (n: nodes.QualifiedConstructor) => string;
/**
 * identifier2TS turns an identifier to a typescript identifier.
 */
export declare const identifier2TS: (n: nodes.Identifier) => string;
/**
 * qualifiedIdentifier2TS converts a qualified identifier to typescript
 */
export declare const qualifiedIdentifier2TS: (n: nodes.QualifiedIdentifier) => string;
/**
 * unqualifiedIdentifier2TS converts an unqualified identifier to typescript
 */
export declare const unqualifiedIdentifier2TS: (n: nodes.UnqualifiedIdentifier) => string;
