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

export const _hint = (name, o) =>
    name.hint ? name.hint.transpile(o) : 'C';

export const view = (id,classes,context,tag,o) => `
export class ${id}${classes} extends AppView<${context}> {

    constructor(context: ${context}) {

        super(context);

        let view = this;

        this.template = function($$ctx:${context}) {
            return ${_rootElement(tag, o)}
        }

       }

     }

`;
