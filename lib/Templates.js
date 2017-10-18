"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _rootElement = function (root, o) {
    return root ? root.transpile(o) : (o.typescript) ?
        '<HTMLElement><Node>document.createDocumentFragment()' :
        'document.createDocumentFragment()';
};
exports.runtime = function (path) { return "\nimport {\n    empty as $$empty,\n    box as $$box,\n    resolve as $$resolve,\n    text as $$text,\n    node as $$node,\n    widget as $$widget,\n    ifE as $$if,\n    forE as $$for,\n    switchE as $$switch,\n    domify as $$domify,\n    AppView} from \"" + path + "\";\n"; };
exports._hint = function (name, o) {
    return name.hint ? name.hint.transpile(o) : 'C';
};
exports.view = function (id, classes, context, tag, o) { return "\nexport class " + id + classes + " extends AppView<" + context + "> {\n\n    constructor(context: " + context + ") {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function($$ctx:" + context + ") {\n            return " + _rootElement(tag, o) + "\n        }\n\n       }\n\n     }\n\n"; };
//# sourceMappingURL=Templates.js.map