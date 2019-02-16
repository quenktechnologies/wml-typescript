import * as __wml from '../../src';


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
export const sven = 

(node: NodeFunc<any>, widget:WidgetFunc<any>) =>  {

   return [

        ...((x=>x.length > 0 ? 

            x.map((a ) => ([

        b
     ])) : 

            [])(b))
     ];

};