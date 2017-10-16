/**
 * Types corresponding to the WML AST.
 */

/**
 * Location is jison's location tracking information.
 */
export interface Location {

    [key: string]: string | number

};

/**
 * Node is the interface of all the nodes
 */
export interface Node {

    type: string;
    location: Location;

}

/**
 * Module is what a wml file compiles to.
 *
 * A module contains a list of imports and exported symbols.
 * All declarations in wml are exported. There is no such thing
 * as private here.
 */
export class Module {

    type = 'module'

    constructor(
        public imports: ImportStatement[],
        public exports: Export[],
        public main: Main,
        public location) { }

}

/**
 * ImportStatement
 */
export class ImportStatement {

    type = 'import-statement';

    constructor(
        public member: ImportMember,
        public module: StringLiteral,
        public location: Location) { }

}

/**
 * ImportMember 
 */
export type ImportMember
    = DefaultMember
    | QualifiedMember
    | AliasedMember
    | CompositeMember
    ;

/**
 * DefaultMember
 * @property {Identifier} member - The identifier the default export is introduced as.
 */
export class DefaultMember {

    type = 'default-member'

    constructor(public member: UnqualifiedIdentifier, public location: Location) { }

}

/**
 * AliasedMember 
 * @property {Identifier} alias - The identifier introduced to scope.
 * @property {Identifier} member - The identifier that is aliased.
 */
export class AliasedMember {

    type = 'aliased-member';

    constructor(
        public member: UnqualifiedIdentifier,
        public alias: UnqualifiedIdentifier,
        public location: Location) { }

}

/**
 * QualifiedMember
 * @property {Identifier} member - The member that all imports are qualified to.
 */
export class QualifiedMember {

    type = 'qualified-member';

    constructor(public member: UnqualifiedIdentifier, public location: Location) { }

}

/**
 * CompositeMember 
 * @property {...Identifier|Aliased_Member} members
 */
export class CompositeMember {

    type = 'composite-member';

    constructor(
        public members: (UnqualifiedIdentifier | AliasedMember)[],
        public location: Location) { }

}

export type Main
  = TypedMain
  | UntypedMain
  ;

export class TypedMain {

    type = 'typed-main';

    constructor(
        public typeClasses: TypeClass[],
        public context: Type,
        public tag: Tag,
        public location: Location) { }

}

export class UntypedMain {

  type = 'untyped-main';

  constructor(
    public tag : Tag,
    public location: Location) {}

}

export type Export
    = ExportStatement
    ;

export class ExportStatement {

    type = 'export-statement';

    constructor(public id: UnqualifiedIdentifier,
        public module: StringLiteral,
        public location: Location) { }

}

/**
 * ViewStatement
 */
export class ViewStatement {

    type = 'view-statement';

    constructor(
        public id: UnqualifiedConstructor,
        public typeClasses: TypeClass[],
        public context: Type,
        public view: Tag,
        public location: Location) { }

}

export class FunStatement {

    type = 'fun-statement';

    constructor(
        public name: UnqualifiedIdentifier,
        public typeClasses: TypeClass[],
        public parameters: Parameter[],
        public body: Child,
        public location: Location) { }

}

/**
 * TypeClass
 */
export class TypeClass {

    type = 'type-class';

    constructor(
        public value: UnqualifiedIdentifier,
        public constraint: Type,
        public location: Location) { }

}

export class Type {

    type = 'type';

    constructor(
        public name: UnqualifiedIdentifier | Constructor,
        public typeClasses: TypeClass[],
        public location: Location) { }

}

export type Parameter
    = TypedParameter
    | UntypedParameter
    ;

export class TypedParameter {

    type = 'typed-parameter';

    constructor(
        public id: UnqualifiedIdentifier,
        public hint: Type,
        public location: Location) { }

}

export class UntypedParameter {

    type = 'untyped-parameter';

    constructor(
        public id: UnqualifiedIdentifier,
        public location: Location) { }

}

export type Child
    = Tag
    | Interpolation
    | Control
    | Characters
    | Identifier
    ;

export type Tag
    = Node
    | Widget
    ;

export class Node {

    type = 'node';

    constructor(
        public open: Identifier,
        public attributes: Attribute[],
        public children: Child[],
        public close: Identifier) { }

}

export class Widget {

    type = 'widget';

    constructor(
        public open: Constructor,
        public attributes: Attribute[],
        public children: Child[],
        public close: Constructor) { }

}

export class Attribute {

    type = 'attribute';

    constructor(
        public name: AttributeName,
        public value: AttributeValue,
        public location: Location) { }

}

export class AttributeName {

    type = 'attribute-name';

    constructor(
        public name: string,
        public namespace?: string) { }

}

export type AttributeValue
    = Interpolation
    | Literal
    ;

export class Interpolation {

    type = 'interpolation';

    constructor(
        public expression: Expression,
        public filters: Filter[],
        public location: Location) { }

}

export class Filter {

    type = 'filter';

    constructor(
        public expression: Expression,
        public location: Location) { }

}

export type Control
    = ForStatement
    | IfStatement
    ;

export class ForStatement {

    type = 'for-statement';

    constructor(
        public variable: Parameter,
        public index: Parameter,
        public all: Parameter,
        public list: Expression,
        public fragment: Child[],
        public otherwise: Child[],
        public location: Location) { }

}

export class IfStatement {

    type = 'if-statement';

    constructor(
        public predicate: Expression,
        public then: Child[],
        public elseClause: ElseClause,
        public location: Location) { }

}

export class ElseClause {

    type = 'else-clause';

    constructor(
        public children: Child[],
        public location: Location) { }

}

export class ElseIfClause {

    type = 'else-if-clause';

    constructor(
        public predicate: Expression,
        public then: Expression,
        public elseClause: Expression,
        public location: Location) { }

}

export class Characters {

    type = 'characters';

    constructor(
        public value: string,
        public location: Location) { }

}

export type Expression
    = ConstructExpression
    | CallExpression
    | MemberExpression
    | ReadExpression
    | FunctionExpression
    | Literal
    | ContextProperty
    | Constructor
    | Identifier
    | ContextVariable
    ;

export class ConstructExpression {

    type = 'construct-expression';

    constructor(
        public cons: Constructor,
        public args: Expression[],
        public location: Location) { }

}

export class CallExpression {

    type = 'call-expression';

    constructor(
        public target: Expression,
        public typeArgs: Type[],
        public args: Expression[],
        public location: Location) { }

}

/**
 * MemberExpression 
 */
export class MemberExpression {

    constructor(
        public target: Expression,
        public member: UnqualifiedIdentifier,
        public location: Location) { }

}

export class ReadExpression {

    type = 'read-expression';

    constructor(
        public target: Expression,
        public path: Expression,
        public hint: Type,
        public defaults: Expression,
        public location: Location) { }

}

export class FunctionExpression {

    type = 'function-expression';

    constructor(
        public parameters: Parameter[],
        public body: Expression,
        public location: Location) { }

}

export type Literal
    = Record
    | List
    | StringLiteral
    | NumberLiteral
    | BooleanLiteral
    ;

export class List {

    type = 'list';
    constructor(public members: Expression[], public location: Location) { }

}

export class Record {

    type = 'record';
    constructor(
        public properties: KVP[],
        public location: Location) { }

}

export class KVP {

    type = 'kvp';

    constructor(
        public key: UnqualifiedIdentifier | StringLiteral,
        public value: Expression,
        public location: Location) { }

}

export class StringLiteral {

    type = 'string';

    constructor(
        public value: string,
        public location: Location) { }

}

export class NumberLiteral {

    type = 'number-literal';
    constructor(public value: string, public location: Location) { }

}

export class BooleanLiteral {

    type = 'boolean-literal';

    constructor(public value: string, public location: Location) { }

}

export class ContextProperty {

    type = 'context-property';

    constructor(
        public member: UnqualifiedIdentifier,
        public location: Location) { }

}

export class ContextVariable {

    type = 'context-variable';

    constructor(public location: Location) { }

}

export type Constructor
    = QualifiedConstructor
    | UnqualifiedConstructor
    ;

export class QualifiedConstructor {

    type = 'qualified-constructor';

    constructor(
        public qualifier: string,
        public name: string,
        public location: Location) { }

}

export class UnqualifiedConstructor {

    type = 'unqualified-constructor';

    constructor(
        public name: string,
        public location: Location) { }

}

/**
 * Identifier 
 */
export type Identifier
    = UnqualifiedIdentifier
    | QualifiedIdentifier
    ;

export class UnqualifiedIdentifier {

    type = 'unqualified-identifier';

    constructor(public value: string, public location: Location) { }

}

/**
 * QualifiedIdentifier
 */
export class QualifiedIdentifier {

    type = 'qualified-identifier';

    constructor(
        public qualifier: Identifier,
        public member: Identifier,
        public location: Location) { }

}

