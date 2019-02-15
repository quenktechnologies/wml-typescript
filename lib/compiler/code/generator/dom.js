"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var output_1 = require("../output");
var MAYBE = '__Maybe';
var FROM_NULLABLE = '__fromNullable';
var FROM_ARRAY = '__fromArray';
var NODE_PARAMS = "tag:string, attrs:" + output_1.WML + ".AttributeMap<any>, " +
    ("children: " + output_1.WML + ".Content[]");
var WIDGET_PARAMS = "C: " + output_1.WML + ".WidgetConstructor<A>," +
    ("attrs:" + output_1.WML + ".AttributeMap<any>, children: " + output_1.WML + ".Content[]");
var REGISTER_PARAMS = "e:" + output_1.WML + ".WMLElement, " +
    ("attrs:" + output_1.WML + ".AttributeMap<any>");
var THROW_CHILD_ERR = '         throw new TypeError(`Can not adopt ' +
    'child ${c} of type \${typeof c}`);';
/**
 * DOMGenerator targets the client side DOM.
 */
var DOMGenerator = /** @class */ (function () {
    function DOMGenerator() {
    }
    DOMGenerator.prototype.imports = function (ctx) {
        return [
            "import {",
            "Maybe as " + MAYBE + ",",
            "fromNullable as " + FROM_NULLABLE + ",",
            "fromArray as " + FROM_ARRAY,
            "}",
            "from '@quenk/noni/lib/data/maybe';"
        ].join(output_1.eol(ctx));
    };
    DOMGenerator.prototype.definitions = function (ctx) {
        return [
            "type NodeFunc = ",
            "(" + NODE_PARAMS + ") => " + output_1.WML + ".Content;",
            "",
            "type WidgetFunc = ",
            "(" + WIDGET_PARAMS + ") => " + output_1.WML + ".Content;"
        ].join(output_1.eol(ctx));
    };
    DOMGenerator.prototype.view = function (ctx, n) {
        var id = n.id ? output_1.constructor2TS(n.id) : 'Main';
        var typeParams = output_1.typeParameters(n.typeParameters);
        var c = output_1.type2TS(n.context);
        var template = output_1.tag2TS(ctx, n.root);
        return [
            "export class " + id + " " + typeParams + " implements " + output_1.WML + ".View {",
            "",
            "   constructor(" + output_1.CONTEXT + ": " + c + ") {",
            "",
            "       this.template = (" + output_1.THIS + ":" + output_1.WML + ".Registry) => {",
            "",
            "           return " + template + ";",
            "",
            "       }",
            "",
            "   }",
            "",
            "   ids: { [key: string]: " + output_1.WML + ".WMLElement } = {};",
            "",
            "   groups: { [key: string]: " + output_1.WML + ".WMLElement[] } = {};",
            "",
            "   widgets: " + output_1.WML + ".Widget[] = [];",
            "",
            "   tree: " + output_1.WML + ".Content = document.createElement('div');",
            "",
            "   template: " + output_1.WML + ".Template;",
            "",
            "   register(" + REGISTER_PARAMS + ") {",
            "",
            "       let id = (<" + output_1.WML + ".Attrs><any>attrs).wml.id;",
            "       let group = (<" + output_1.WML + ".Attrs><any>attrs).wml.group;",
            "",
            "       if(id != null) {",
            "",
            "           if (this.ids.hasOwnProperty(id))",
            "             throw new Error(`Duplicate id '${id}' detected!`);",
            "",
            "           this.ids[id] = e;",
            "",
            "       }",
            "",
            "       if(group !== null) {",
            "",
            "           this.groups[group] = this.groups[group] || [];",
            "           this.groups[group].push(e);",
            "",
            "       }",
            "",
            "       return e;",
            "}",
            "",
            "   node(" + NODE_PARAMS + ") {",
            "",
            "       let e = document.createElement(tag);",
            "",
            "       if (typeof attrs['html'] === 'object')",
            "",
            "       Object.keys(attrs['html']).forEach(key => {",
            "",
            "           let value = (<any>attrs['html'])[key];",
            "",
            "           if (typeof value === 'function') {",
            "",
            "           (<any>e)[key] = value;",
            "",
            "           } else if (typeof value === 'string') {",
            "",
            "               //prevent setting things like disabled=''",
            "               if (value !== '')",
            "               e.setAttribute(key, value);",
            "",
            "           } else if (typeof value === 'boolean') {",
            "",
            "             e.setAttribute(key, `${value}`);",
            "",
            "           }",
            "",
            "       });",
            "",
            "       children.forEach(c => {",
            "",
            "               switch (typeof c) {",
            "",
            "                   case 'string':",
            "                   case 'number':",
            "                   case 'boolean':",
            "                     let tn = document.createTextNode(''+c);",
            "                     e.appendChild(tn)",
            "                   case 'object':",
            "                       e.appendChild(<Node>c);",
            "                   break;",
            "                   default:",
            "                       " + THROW_CHILD_ERR,
            "",
            "               }})",
            "",
            "",
            "       this.register(e, attrs);",
            "",
            "       return e;",
            "",
            "   }",
            "",
            "",
            "   widget<A>(" + WIDGET_PARAMS + ") {",
            "",
            "       let childs: " + output_1.WML + ".Content[] = [];",
            "       let w;",
            "",
            "       children.forEach(child => (child instanceof Array) ?",
            "           childs.push.apply(childs, child) :",
            "           childs.push(child));",
            "",
            "       w = new C<any>(attrs, childs);",
            "",
            "       this.register(w, attrs);",
            "",
            "       this.widgets.push(w);",
            "",
            "       return w.render();",
            "",
            "   }",
            "",
            "   findById<E extends " + output_1.WML + ".WMLElement>(id: string): " + MAYBE + "<E> {",
            "",
            "       return " + FROM_NULLABLE + "<E>(<E>this.ids[id])",
            "",
            "   }",
            "",
            "   findByGroup(name: string): " + MAYBE + "<" + output_1.WML + ".WMLElement[]> {",
            "",
            "       return " + FROM_ARRAY + "(this.groups.hasOwnProperty(name) ?",
            "           this.groups[name] : ",
            "           []);",
            "",
            "   }",
            "",
            "   invalidate() : void {",
            "",
            "       let childs;",
            "",
            "       let realFirstChildIndex = -1;",
            "       let {tree} = this;",
            "       let parent = <Node>tree.parentNode;",
            "",
            "       if (tree == null)",
            "           return console.warn('invalidate(): '+" +
                "       'Cannot invalidate a view that has not been rendered!');",
            "",
            "       if (tree.parentNode == null)",
            "           return console.warn('invalidate(): Attempt to '+\n                        'invalidate a view that has not been inserted to DOM!');",
            "",
            "       childs = (<Element>tree.parentNode).children;",
            "",
            "       parent.replaceChild(this.render(), tree) ",
            "",
            "   }",
            "",
            "   render(): " + output_1.WML + ".Content {",
            "",
            "       this.ids = {};",
            "       this.widgets.forEach(w => w.removed());",
            "       this.widgets = [];",
            "       this.tree = this.template();",
            "",
            "       this.ids['root'] = (this.ids['root']) ?",
            "       this.ids['root'] : ",
            "       this.tree;",
            "",
            "       this.widgets.forEach(w => w.rendered());",
            "",
            "       return this.tree;",
            "",
            "   }",
            "",
            "}"
        ].join(output_1.eol(ctx));
    };
    DOMGenerator.prototype.fun = function (ctx, n) {
        var id = output_1.unqualifiedIdentifier2TS(n.id);
        var typeParams = output_1.typeParameters(n.typeParameters);
        var params = n.parameters.map(output_1.parameter2TS).map(function (s) { return "(" + s + ")=> "; }).join('');
        var factory = "(node: NodeFunc, widget:WidgetFunc) => ";
        var body = output_1.children2TS(ctx, n.body);
        return [
            "export const " + id + " = ",
            "",
            "" + typeParams + factory + params + " {",
            "",
            "   return " + body + ";",
            "",
            "};"
        ].join(output_1.eol(ctx));
    };
    /**
     * widget construction generator.
     */
    DOMGenerator.prototype.widget = function (ctx, w) {
        var name = output_1.constructor2TS(w.open);
        var attrs = output_1.attrs2String(output_1.groupAttrs(ctx, w.attributes));
        var childs = output_1.children2TS(ctx, w.children);
        return "this.widget(" + name + ", " + attrs + ", " + childs + ")";
    };
    DOMGenerator.prototype.node = function (ctx, n) {
        var name = output_1.identifier2TS(n.open);
        var attrs = output_1.attrs2String(output_1.groupAttrs(ctx, n.attributes));
        var childs = output_1.children2TS(ctx, n.children);
        return "this.node('" + name + "', " + attrs + ", " + childs + ")";
    };
    DOMGenerator.prototype.forIn = function (ctx, n) {
        var expr = output_1.expression2TS(ctx, n.expression);
        var value = output_1.parameter2TS(n.variables[0]);
        var key = n.variables.length > 1 ? output_1.parameter2TS(n.variables[1]) : '';
        var all = n.variables.length > 2 ? output_1.parameter2TS(n.variables[2]) : '';
        var params = [value, key, all].filter(function (x) { return x; }).join(',');
        var body = output_1.children2TS(ctx, n.body);
        var alt = n.otherwise.length > 0 ? output_1.children2TS(ctx, n.otherwise) : '[]';
        return "(x=>x.length > 0 ? " + output_1.eol(ctx) + "\n            x.map((" + params + ") => (" + body + ")) : " + output_1.eol(ctx) + "\n            " + alt + ")(" + expr + ")";
    };
    DOMGenerator.prototype.forOf = function (ctx, n) {
        var expr = output_1.expression2TS(ctx, n.expression);
        var value = output_1.parameter2TS(n.variables[0]);
        var key = n.variables.length > 1 ? output_1.parameter2TS(n.variables[1]) : '$$k';
        var all = n.variables.length > 2 ? output_1.parameter2TS(n.variables[2]) : '$all';
        var body = output_1.children2TS(ctx, n.body);
        var alt = n.otherwise.length > 0 ? output_1.children2TS(ctx, n.otherwise) : '[]';
        return [
            "(" + all + " => { ",
            "",
            "   let $$keys = Object.keys(" + all + ");",
            "",
            "   return ($$keys.length > 0) ?",
            "       $$keys.map(" + key + " => {",
            "",
            "   " + value + " = " + all + "[" + key + "];",
            "",
            "   return " + body + ";",
            "",
            "   " + alt + ")(" + expr + ")"
        ].join(output_1.eol(ctx));
    };
    DOMGenerator.prototype.text = function (_, str) {
        return "document.createTextNode('" + str + "')";
    };
    return DOMGenerator;
}());
exports.DOMGenerator = DOMGenerator;
//# sourceMappingURL=dom.js.map