import * as __wml from '../../src';


import {
Maybe as __Maybe,
fromNullable as __fromNullable,
fromArray as __fromArray
}
from '@quenk/noni/lib/data/maybe';
export type NodeFunc = 
(tag:string, attrs:__wml.Attributes<any>, children: __wml.Content[]) => __wml.Content;

export type WidgetFunc<A extends __wml.Attrs, W extends 
     __wml.WidgetConstructor<A>> = 
(C: W, attrs:A, children: __wml.Content[]) => __wml.Content;

this.node('root', {html : {  } ,wml : {  } }, [

        ...((x=>x.length > 0 ? 

            x.map((value ,key ) => ([

        this.node('stem', {html : {  } ,wml : {  } }, [

        value
     ])
     ])) : 

            [])([

            
            ]))
     ])