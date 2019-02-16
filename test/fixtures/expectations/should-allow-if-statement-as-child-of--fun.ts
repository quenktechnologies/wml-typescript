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
export const ate = 

(node: NodeFunc<any>, widget:WidgetFunc<any>) => (o: object   )=>  {

   return [

        (a) ? 

           [

        a
     ] : 

           [

        a
     ]
     ];

};