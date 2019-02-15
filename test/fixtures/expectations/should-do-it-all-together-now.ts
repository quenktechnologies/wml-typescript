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
this.node('modal', {html : { 'name' : `mymodal` ,'x' : `1` ,'y' : `2`  } ,wml : {  } }, [

        this.node('modal-header', {html : {  } ,wml : {  } }, [

        document.createTextNode('My Modal')
     ]),
this.node('modal-body', {html : {  } ,wml : {  } }, [

        document.createTextNode('Creativxity is inhibxited by greed and corruption.'),
this.node('vote-button', {html : {  } ,wml : {  } }, [

        
     ]),
this.node('vote-count', {html : { 'source' : __context  } ,wml : {  } }, [

        
     ]),
document.createTextNode(' Votes'),
this.node('textarea', {html : { 'disabled' : true  ,'size' : 32 ,'onchange' : __context.setText  } ,wml : { 'id' : `ta`  } }, [

        document.createTextNode(' Various text')
     ])
     ])
     ])