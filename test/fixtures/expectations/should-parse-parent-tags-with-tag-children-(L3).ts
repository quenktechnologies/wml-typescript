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
this.node('panel', {html : {  } ,wml : {  } }, [

        this.node('a', {html : { 'href' : `link`  } ,wml : {  } }, [

        document.createTextNode('Click Here')
     ]),
this.node('table', {html : {  } ,wml : {  } }, [

        
     ]),
this.node('panel', {html : { 'c' : `22`  } ,wml : {  } }, [

        
     ])
     ])