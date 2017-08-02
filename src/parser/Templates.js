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
    AppView} from "${path}";
`;

export const view = (name, tag, o) => `

export class ${name} extends AppView {

    constructor(context) {

        super(context);

        let view = this;

        this.template = function() {
            return ${_rootElement(tag, o)}
        }

       }

       static render(context) {

         return (new ${name}(context)).render();

       }

     }

`;
