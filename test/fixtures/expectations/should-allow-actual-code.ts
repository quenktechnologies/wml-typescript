import * as __wml from '../../src';

import {Table} from '@quenk/wml-widgets/lib/data/table'; ;
import {TextField} from '@quenk/wml-widgets/lib/control/text-field'; ;
import {Panel} from '@quenk/wml-widgets/lib/layout/panel'; ;
import {PanelHeader} from '@quenk/wml-widgets/lib/layout/panel'; ;
import {Tab} from '@quenk/wml-widgets/lib/control/tab-bar'; ;
import {TabBar} from '@quenk/wml-widgets/lib/control/tab-bar'; ;
import {TabSpec} from '..'; ;
import {TabbedPanel} from '..'; 
import {
Maybe as __Maybe,
fromNullable as __fromNullable,
fromArray as __fromArray
}
from '@quenk/noni/lib/data/maybe';
export type NodeFunc = 
(tag:string, attrs:__wml.AttributeMap<any>, children: __wml.Content[]) => __wml.Content;

export type WidgetFunc<A> = 
(C: __wml.WidgetConstructor<__wml.AttributeMap<A>>,attrs:__wml.AttributeMap<A>, children: __wml.Content) => __wml.Content;
export class Main  implements __wml.View {

   constructor(__context: TabbedPanel  ) {

       this.template = (__this:__wml.Registry) => {

           return this.widget(Panel, {html : {  } ,wml : {  } ,ww : { 'class' : __context.values.root .class   } }, [

        (((__context.values.header .tabs .length  > 0) || __context.values.header .additionalTabs )) ? 

           [

        this.widget(PanelHeader, {html : {  } ,wml : {  } }, [

        this.widget(TabBar, {html : {  } ,wml : {  } }, [

        ...((x=>x.length > 0 ? 

            x.map((tab ) => ([

        this.widget(Tab, {html : {  } ,wml : {  } ,ww : { 'name' : tab.name ,'onClick' : tab.onClick  } }, [

        
     ])
     ])) : 

            [])(__context.values.header .tabs )),
(__context.values.header .additionalTabs ) ? 

           [

        __context.values.header .additionalTabs  (__context)(__this)
     ] : 

           [

        ``
     ]
     ])
     ])
     ] : 

           [

        ``
     ],
__context.children
     ]);

       }

   }

   ids: { [key: string]: __wml.WMLElement } = {};

   groups: { [key: string]: __wml.WMLElement[] } = {};

   widgets: __wml.Widget[] = [];

   tree: __wml.Content = document.createElement('div');

   template: __wml.Template;

   register(e:__wml.WMLElement, attrs:__wml.AttributeMap<any>) {

       let id = (<__wml.Attrs><any>attrs).wml.id;
       let group = <string>(<__wml.Attrs><any>attrs).wml.group;

       if(id != null) {

           if (this.ids.hasOwnProperty(id))
             throw new Error(`Duplicate id '${id}' detected!`);

           this.ids[id] = e;

       }

       if(group != null) {

           this.groups[group] = this.groups[group] || [];
           this.groups[group].push(e);

       }

       return e;
}

   node(tag:string, attrs:__wml.AttributeMap<any>, children: __wml.Content[]) {

       let e = document.createElement(tag);

       if (typeof attrs['html'] === 'object')

       Object.keys(attrs['html']).forEach(key => {

           let value = (<any>attrs['html'])[key];

           if (typeof value === 'function') {

           (<any>e)[key] = value;

           } else if (typeof value === 'string') {

               //prevent setting things like disabled=''
               if (value !== '')
               e.setAttribute(key, value);

           } else if (typeof value === 'boolean') {

             e.setAttribute(key, `${value}`);

           }

       });

       children.forEach(c => {

               switch (typeof c) {

                   case 'string':
                   case 'number':
                   case 'boolean':
                     let tn = document.createTextNode(''+c);
                     e.appendChild(tn)
                   case 'object':
                       e.appendChild(<Node>c);
                   break;
                   default:
                                throw new TypeError(`Can not adopt child ${c} of type ${typeof c}`);

               }})


       this.register(e, attrs);

       return e;

   }


   widget<A>(C: __wml.WidgetConstructor<__wml.AttributeMap<A>>,attrs:__wml.AttributeMap<A>, children: __wml.Content) {

       let w = new C(attrs, children);

       this.register(w, attrs);

       this.widgets.push(w);

       return w.render();

   }

   findById<E extends __wml.WMLElement>(id: string): __Maybe<E> {

       return __fromNullable<E>(<E>this.ids[id])

   }

   findByGroup<E extends __wml.WMLElement>(name: string): __Maybe<E[]> {

       return __fromArray(this.groups.hasOwnProperty(name) ?
           <any>this.groups[name] : 
           []);

   }

   invalidate() : void {

       let {tree} = this;
       let parent = <Node>tree.parentNode;

       if (tree == null)
           return console.warn('invalidate(): '+       'Cannot invalidate a view that has not been rendered!');

       if (tree.parentNode == null)
                  throw new Error('Cannot invalidate a view  that has not been rendered!');

       parent.replaceChild(this.render(), tree) 

   }

   render(): __wml.Content {

       this.ids = {};
       this.widgets.forEach(w => w.removed());
       this.widgets = [];
       this.tree = this.template(this);

       this.ids['root'] = (this.ids['root']) ?
       this.ids['root'] : 
       this.tree;

       this.widgets.forEach(w => w.rendered());

       return this.tree;

   }

}