import * as __wml from '../../src';


import {
Maybe as __Maybe,
fromNullable as __fromNullable,
fromArray as __fromArray
}
from '@quenk/noni/lib/data/maybe';
type NodeFunc = 
(tag:string, attrs:__wml.AttributeMap<any>, children: __wml.Content[]) => __wml.Content;

type WidgetFunc = 
(C: __wml.WidgetConstructor<A>,attrs:__wml.AttributeMap<any>, children: __wml.Content[]) => __wml.Content;
this.node('root', {html : {  } ,wml : {  } }, [

        (x=>x.length > 0 ? 

            x.map((item ) => ([

        this.node('stem', {html : {  } ,wml : {  } }, [

        document.createTextNode('A Stem')
     ])
     ])) : 

            [])(list)
     ])