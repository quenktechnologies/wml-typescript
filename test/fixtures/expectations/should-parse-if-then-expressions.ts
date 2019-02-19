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

this.widget(Html, {html : { 'id' : __context.id  } ,wml : {  } }, [

        (__context.check()) ? a :  b
     ])