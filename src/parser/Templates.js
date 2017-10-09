const _rootElement = (root, o) =>
    root ? root.transpile(o) : (o.typescript) ?
    '<HTMLElement><Node>document.createDocumentFragment()' :
    'document.createDocumentFragment()';

export const runtime = path => `
import {
    empty as $$empty,
    box as $$box,
    resolve as $$resolve,
    text as $$text,
    node as $$node,
    widget as $$widget,
    ifE as $$if,
    forE as $$for,
    switchE as $$switch,
    domify as $$domify,
    AppView} from "${path}";
`;

export const _typeClasses = (classes, o) =>
classes ? '<' + classes.map(c=>c.transpile(o)) + '>' : '<C>';

export const _hint = (name, o) =>
    name.hint ? name.hint.transpile(o) : 'C';

export const view = (id,hint,classes,tag,o) => `
export class ${id}${_typeClasses(classes, o)} extends AppView<${hint}> {

    constructor(context: ${hint}) {

        super(context);

        let view = this;

        this.template = function($$ctx:${hint}) {
            return ${_rootElement(tag, o)}
        }

       }

     }

`;

export const main = (tag, o) => `
export class Main<C> extends AppView<C> {

    constructor(context:C) {

        super(context);

        let view = this;

        this.template = function($$ctx:C) {
            return ${_rootElement(tag, o)}
        }

       }

     }
`;
