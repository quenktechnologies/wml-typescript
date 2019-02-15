import * as __wml from '../../src';


import {
Maybe as __Maybe,
fromNullable as __fromNullable,
fromArray as __fromArray
}
from '@quenk/noni/lib/data/maybe;
type NodeFunc = 
(tag:string, attrs:__wml.AttributeMap<any>, children: __wml.Content[]) => __wml.Content;

type WidgetFunc = 
(C: __wml.WidgetConstructor<A>,attrs:__wml.AttributeMap<any>, children: __wml.Content[]) => __wml.Content;
export const sven = 

(node: NodeFunc, widget:WidgetFunc) =>  {

   return [

        (x=>x.length > 0 ? 

            x.map((a ) => ([

        b
     ])) : 

            [])(b)
     ];

};