import * as ast from '@quenk/wml-parser/lib/ast';
import {
    CONTEXT,
    WML,
    THIS,
    children2TS,
    groupAttrs,
    attrs2String,
    constructor2TS,
    identifier2TS,
    expression2TS,
    parameter2TS,
    typeParameters,
    unqualifiedIdentifier2TS,
    type2TS,
    tag2TS,
    eol
} from '../output';
import { Context } from '../';
import { Generator } from './';

const MAYBE = '__Maybe';

const FROM_NULLABLE = '__fromNullable';

const FROM_ARRAY = '__fromArray';

const NODE_PARAMS = `tag:string, attrs:${WML}.AttributeMap<any>, ` +
    `children: ${WML}.Content[]`;

const WIDGET_PARAMS =
    `C: ${WML}.WidgetConstructor<${WML}.AttributeMap<A>>,` +
    `attrs:${WML}.AttributeMap<A>, children: ${WML}.Content[]`;

const REGISTER_PARAMS = `e:${WML}.WMLElement, ` +
    `attrs:${WML}.AttributeMap<any>`;

const THROW_CHILD_ERR = '         throw new TypeError(`Can not adopt ' +
    'child ${c} of type \${typeof c}`);';

const THROW_INVALIDATE_ERR = `       throw new Error('Cannot invalidate a view ` +
    ` that has not been rendered!');`;

/**
 * DOMGenerator targets the client side DOM.
 */
export class DOMGenerator implements Generator {

    imports(ctx: Context) {

        return [
            `import {`,
            `Maybe as ${MAYBE},`,
            `fromNullable as ${FROM_NULLABLE},`,
            `fromArray as ${FROM_ARRAY}`,
            `}`,
            `from '@quenk/noni/lib/data/maybe';`
        ].join(eol(ctx));

    }

    definitions(ctx: Context) {

        return [

            `export type NodeFunc = `,
            `(${NODE_PARAMS}) => ${WML}.Content;`,
            ``,
            `export type WidgetFunc<A> = `,
            `(${WIDGET_PARAMS}) => ${WML}.Content;`

        ].join(eol(ctx));

    }

    view(ctx: Context, n: ast.ViewStatement) {

        let id = n.id ? constructor2TS(n.id) : 'Main';

        let typeParams = typeParameters(n.typeParameters);

        let c = type2TS(n.context);

        let template = tag2TS(ctx, n.root);

        return [

            `export class ${id} ${typeParams} implements ${WML}.View {`,
            ``,
            `   constructor(${CONTEXT}: ${c}) {`,
            ``,
            `       this.template = (${THIS}:${WML}.Registry) => {`,
            ``,
            `           return ${template};`,
            ``,
            `       }`,
            ``,
            `   }`,
            ``,
            `   ids: { [key: string]: ${WML}.WMLElement } = {};`,
            ``,
            `   groups: { [key: string]: ${WML}.WMLElement[] } = {};`,
            ``,
            `   widgets: ${WML}.Widget[] = [];`,
            ``,
            `   tree: ${WML}.Content = document.createElement('div');`,
            ``,
            `   template: ${WML}.Template;`,
            ``,
            `   register(${REGISTER_PARAMS}) {`,
            ``,
            `       let id = (<${WML}.Attrs><any>attrs).wml.id;`,
            `       let group = <string>(<${WML}.Attrs><any>attrs).wml.group;`,
            ``,
            `       if(id != null) {`,
            ``,
            `           if (this.ids.hasOwnProperty(id))`,
            `             throw new Error(\`Duplicate id '\${id}' detected!\`);`,
            ``,
            `           this.ids[id] = e;`,
            ``,
            `       }`,
            ``,
            `       if(group != null) {`,
            ``,
            `           this.groups[group] = this.groups[group] || [];`,
            `           this.groups[group].push(e);`,
            ``,
            `       }`,
            ``,
            `       return e;`,
            `}`,
            ``,
            `   node(${NODE_PARAMS}) {`,
            ``,
            `       let e = document.createElement(tag);`,
            ``,
            `       if (typeof attrs['html'] === 'object')`,
            ``,
            `       Object.keys(attrs['html']).forEach(key => {`,
            ``,
            `           let value = (<any>attrs['html'])[key];`,
            ``,
            `           if (typeof value === 'function') {`,
            ``,
            `           (<any>e)[key] = value;`,
            ``,
            `           } else if (typeof value === 'string') {`,
            ``,
            `               //prevent setting things like disabled=''`,
            `               if (value !== '')`,
            `               e.setAttribute(key, value);`,
            ``,
            `           } else if (typeof value === 'boolean') {`,
            ``,
            `             e.setAttribute(key, \`\${value}\`);`,
            ``,
            `           }`,
            ``,
            `       });`,
            ``,
            `       children.forEach(c => {`,
            ``,
            `               switch (typeof c) {`,
            ``,
            `                   case 'string':`,
            `                   case 'number':`,
            `                   case 'boolean':`,
            `                     let tn = document.createTextNode(''+c);`,
            `                     e.appendChild(tn)`,
            `                   case 'object':`,
            `                       e.appendChild(<Node>c);`,
            `                   break;`,
            `                   default:`,
            `                       ${THROW_CHILD_ERR}`,
            ``,
            `               }})`,
            ``,
            ``,
            `       this.register(e, attrs);`,
            ``,
            `       return e;`,
            ``,
            `   }`,
            ``,
            ``,
            `   widget<A>(${WIDGET_PARAMS}) {`,
            ``,
            `       let w = new C(attrs, children);`,
            ``,
            `       this.register(w, attrs);`,
            ``,
            `       this.widgets.push(w);`,
            ``,
            `       return w.render();`,
            ``,
            `   }`,
            ``,
            `   findById<E extends ${WML}.WMLElement>(id: string): ${MAYBE}<E> {`,
            ``,
            `       return ${FROM_NULLABLE}<E>(<E>this.ids[id])`,
            ``,
            `   }`,
            ``,
            `   findByGroup<E extends ${WML}.WMLElement>(name: string): ` +
            `${MAYBE}<E[]> {`,
            ``,
            `       return ${FROM_ARRAY}(this.groups.hasOwnProperty(name) ?`,
            `           <any>this.groups[name] : `,
            `           []);`,
            ``,
            `   }`,
            ``,
            `   invalidate() : void {`,
            ``,
            `       let {tree} = this;`,
            `       let parent = <Node>tree.parentNode;`,
            ``,
            `       if (tree == null)`,
            `           return console.warn('invalidate(): '+` +
            `       'Cannot invalidate a view that has not been rendered!');`,
            ``,
            `       if (tree.parentNode == null)`,
            `           ${THROW_INVALIDATE_ERR}`,
            ``,
            `       parent.replaceChild(this.render(), tree) `,
            ``,
            `   }`,
            ``,
            `   render(): ${WML}.Content {`,
            ``,
            `       this.ids = {};`,
            `       this.widgets.forEach(w => w.removed());`,
            `       this.widgets = [];`,
            `       this.tree = this.template(this);`,
            ``,
            `       this.ids['root'] = (this.ids['root']) ?`,
            `       this.ids['root'] : `,
            `       this.tree;`,
            ``,
            `       this.widgets.forEach(w => w.rendered());`,
            ``,
            `       return this.tree;`,
            ``,
            `   }`,
            ``,
            `}`

        ].join(eol(ctx))

    }

    fun(ctx: Context, n: ast.FunStatement) {

        let id = unqualifiedIdentifier2TS(n.id);

        let typeParams = typeParameters(n.typeParameters);

        let params = n.parameters.map(parameter2TS).map(s => `(${s})=> `).join('');

        let factory = `(node: NodeFunc<any>, widget:WidgetFunc<any>) => `;

        let body = children2TS(ctx, n.body);

        return [

            `export const ${id} = `,
            ``,
            `${typeParams}${factory}${params} {`,
            ``,
            `   return ${body};`,
            ``,
            `};`

        ].join(eol(ctx));

    }

    /**
     * widget construction generator.
     */
    widget(ctx: Context, w: ast.Widget) {

        let name = constructor2TS(w.open);
        let attrs = attrs2String(groupAttrs(ctx, w.attributes));
        let childs = children2TS(ctx, w.children);

        return `this.widget(${name}, ${attrs}, ${childs})`;

    }

    node(ctx: Context, n: ast.Node) {

        let name = identifier2TS(n.open);
        let attrs = attrs2String(groupAttrs(ctx, n.attributes));
        let childs = children2TS(ctx, n.children);

        return `this.node('${name}', ${attrs}, ${childs})`;

    }

    forIn(ctx: Context, n: ast.ForInStatement) {

        let expr = expression2TS(ctx, n.expression);

        let value = parameter2TS(n.variables[0]);

        let key = n.variables.length > 1 ? parameter2TS(n.variables[1]) : '';

        let all = n.variables.length > 2 ? parameter2TS(n.variables[2]) : '';

        let params = [value, key, all].filter(x => x).join(',');

        let body = children2TS(ctx, n.body);

        let alt = n.otherwise.length > 0 ? children2TS(ctx, n.otherwise) : '[]';

        return `...((x=>x.length > 0 ? ${eol(ctx)}
            x.map((${params}) => (${body})) : ${eol(ctx)}
            ${alt})(${expr}))`;

    }

    forOf(ctx: Context, n: ast.ForOfStatement) {

        let expr = expression2TS(ctx, n.expression);

        let value = parameter2TS(n.variables[0]);

        let key = n.variables.length > 1 ? parameter2TS(n.variables[1]) : '$$k';

        let all = n.variables.length > 2 ? parameter2TS(n.variables[2]) : '$all';

        let body = children2TS(ctx, n.body);

        let alt = n.otherwise.length > 0 ? children2TS(ctx, n.otherwise) : '[]';

        return [
            `...((${all} => { `,
            ``,
            `   let $$keys = Object.keys(${all});`,
            ``,
            `   return ($$keys.length > 0) ?`,
            `       $$keys.map(${key} => {`,
            ``,
            `   ${value} = ${all}[${key}];`,
            ``,
            `   return ${body};`,
            ``,
            `   ${alt})(${expr}))`

        ].join(eol(ctx));

    }

    text(_: Context, str: string) {

        return `document.createTextNode('${str}')`;

    }

}
