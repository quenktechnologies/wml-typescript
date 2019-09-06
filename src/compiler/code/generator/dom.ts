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
    partialApplication2TS,
    type2TS,
    typeArgs2TS,
    tag2TS,
    ifStatement2TS,
    eol
} from '../output';
import { Context } from '../';
import { Generator } from './';

const MAYBE = '__Maybe';

const FROM_NULLABLE = '__fromNullable';

const FROM_ARRAY = '__fromArray';

const NODE_PARAMS = `tag:string, attrs:${WML}.Attributes<any>, ` +
    `children: ${WML}.Content[]`;

const WIDGET_PARAMS =
    `C: W, attrs:A, children: ${WML}.Content[]`;

const REGISTER_PARAMS = `e:${WML}.WMLElement, ` +
    `attrs:${WML}.Attributes<any>`;

const THROW_CHILD_ERR = '         throw new TypeError(`Can not adopt ' +
    'child ${c} of type \${typeof c}`);';

const IGNORE_UNUSED = '//@ts-ignore:6192';

const RECORD = '__Record<A>';

const IF = '__if';

const IFARG = `__IfArg`;

const FOR_OF = '__forOf';

const FOR_IN = '__forIn';

const FOR_ALT_TYPE = '__ForAlt';

const FOR_IN_BODY = '__ForInBody<A>';

const FOR_OF_BODY = '__ForOfBody<A>';

/**
 * DOMGenerator targets the client side DOM.
 */
export class DOMGenerator implements Generator {

    imports(ctx: Context) {

        return [
            `//@ts-ignore: 6192`,
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
            `${IGNORE_UNUSED}`,
            `type ${IFARG} = ()=>${WML}.Content[]`,
            ``,
            `${IGNORE_UNUSED}`,
            `type ${FOR_ALT_TYPE} = ()=> ${WML}.Content[]`,
            ``,
            `${IGNORE_UNUSED}`,
            `type ${FOR_IN_BODY} =(val:A, idx:number, all:A[])=>` +
            `${WML}.Content[]`,
            ``,
            `${IGNORE_UNUSED}`,
            `type ${FOR_OF_BODY} = (val:A, key:string, all:object) =>` +
            `${WML}.Content[]`,
            ``,
            `${IGNORE_UNUSED}`,
            `interface ${RECORD} {`,
            ``,
            ` [key:string]: A`,
            ``,
            `}`,
            ``,
            `${IGNORE_UNUSED}`,
            `const ${IF} = (__expr:boolean, __conseq:${IFARG},__alt:${IFARG}) ` +
            `: Content[]=>`,
            `(__expr) ? __conseq() :  __alt();`,
            ``,
            `${IGNORE_UNUSED}`,
            `const ${FOR_IN} = <A>(list:A[], f:${FOR_IN_BODY}, alt:` +
            `${FOR_ALT_TYPE}) : ${WML}.Content[] => {`,
            ``,
            `   let ret:${WML}.Content[] = [];`,
            ``,
            `   for(let i=0; i<list.length; i++)`,
            `       ret = ret.concat(f(list[i], i, list));`,
            ``,
            `   return ret.length === 0 ? alt() : ret;`,
            ``,
            `}`,
            `${IGNORE_UNUSED}`,
            `const ${FOR_OF} = <A>(o:${RECORD}, f:${FOR_OF_BODY},` +
            `alt:${FOR_ALT_TYPE}) : ${WML}.Content[] => {`,
            ``,
            `    let ret:${WML}.Content[] = [];`,
            ``,
            `    for(let key in o)`,
            `  	    if(o.hasOwnProperty(key)) `,
            `	        ret = ret.concat(f((o)[key], key, o));`,
            ``,
            `    return ret.length === 0 ? alt(): ret;`,
            ``,
            `}`

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
            `   widget<A extends ${WML}.Attrs, W extends ${WML}.`,
            `   WidgetConstructor<A>>(${WIDGET_PARAMS}) {`,
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
            `           return console.warn('invalidate(): '+` +
            `         'This view has not been attached to any DOM!`,
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

        let params = (n.parameters.length === 0) ? '() =>' :
            n.parameters.map(parameter2TS).map(s => `(${s})=> `).join('');

        let factory = `(${THIS}:${WML}.Registry) : ${WML}.Content[] =>`;

        let body = children2TS(ctx, n.body);

        return [

            `export const ${id} = `,
            ``,
            `${typeParams}${params}${factory} {`,
            ``,
            `   return ${body};`,
            ``,
            `};`

        ].join(eol(ctx));

    }

    funApplication(ctx: Context, n: ast.FunApplication) {

        return `${expression2TS(ctx, n.target)}${typeArgs2TS(n.typeArgs)} ` +
            `${partialApplication2TS(ctx, n.args)}(${THIS})`

    }

    widget(ctx: Context, w: ast.Widget) {

        let name = constructor2TS(w.open);
        let attrs = attrs2String(groupAttrs(ctx, w.attributes));
        let childs = children2TS(ctx, w.children);

        return `${THIS}.widget(${name}, ${attrs}, ${childs})`;

    }

    node(ctx: Context, n: ast.Node) {

        let name = identifier2TS(n.open);
        let attrs = attrs2String(groupAttrs(ctx, n.attributes));
        let childs = children2TS(ctx, n.children);

        return `${THIS}.node('${name}', ${attrs}, ${childs})`;

    }

    ifelse(ctx: Context, n: ast.IfStatement) {

        let condition = expression2TS(ctx, n.condition);
        let conseq = children2TS(ctx, n.then);

        let alt = ((n.elseClause instanceof ast.ElseIfClause)) ?
            `[${ifStatement2TS(ctx, n.elseClause)}]` :
            children2TS(ctx, n.elseClause.children);

        return [
            `...(${IF}(${condition},`,
            `   ()=> (${conseq}),`,
            `   ()=> (${alt}))) `,
        ].join(ctx.options.EOL);

    }

    forIn(ctx: Context, n: ast.ForInStatement) {

        let expr = expression2TS(ctx, n.expression);

        let value = parameter2TS(n.variables[0]);

        let key = n.variables.length > 1 ? parameter2TS(n.variables[1]) : '_$$i';

        let all = n.variables.length > 2 ? parameter2TS(n.variables[2]) : '_$$all';

        let body = children2TS(ctx, n.body);

        let alt = n.otherwise.length > 0 ? children2TS(ctx, n.otherwise) : '[]';

        return [
            `...${FOR_IN} (${expr}, (${value}, ${key}, ${all})=> `,
            `(${body}), `,
            `()=> (${alt}))`
        ].join(ctx.options.EOL);

    }

    forOf(ctx: Context, n: ast.ForOfStatement) {

        let expr = expression2TS(ctx, n.expression);

        let value = parameter2TS(n.variables[0]);

        let key = n.variables.length > 1 ? parameter2TS(n.variables[1]) : '_$$k';

        let all = n.variables.length > 2 ? parameter2TS(n.variables[2]) : '_$$all';

        let body = children2TS(ctx, n.body);

        let alt = n.otherwise.length > 0 ? children2TS(ctx, n.otherwise) : '[]';

        return [
            `...${FOR_OF} (${expr}, (${value}, ${key}, ${all}) => `,
            `       (${body}), `,
            `    ()=> (${alt}))`
        ].join(eol(ctx));

    }

    text(_: Context, str: string) {

        return `document.createTextNode(\`${str}\`)`;

    }

}
