import * as __wml from '../../src';


import {
Maybe as __Maybe,
fromNullable as __fromNullable,
fromArray as __fromArray
}
from '@quenk/noni/lib/data/maybe';
type __ForAlt = ()=> __wml.Content[]

export type ForInBody<A> =(val:A, idx:number, all:A[])=>__wml.Content[]

export type ForOfBody<A> = (val:A, key:string, all:object) =>__wml.Content[]

export interface Record<A> {

 [key:string]: A

}

export const __forIn = <A>(list:A[], f:ForInBody<A>, alt:__ForAlt) : __wml.Content[] => {

   let ret:__wml.Content[] = [];

   for(let i=0; i<list.length; i++)
       ret = ret.concat(f(list[i], i, list));

   return ret.length === 0 ? alt() : ret;

}
export const __forOf = <A>(o:Record<A>, f:ForOfBody<A>,alt:__ForAlt) : __wml.Content[] => {

    let ret:__wml.Content[] = [];

    for(let key in o)
  	    if(o.hasOwnProperty(key)) 
	        ret = ret.concat(f((o)[key], key, o));

    return ret.length === 0 ? alt(): ret;

}
__this.node('modal', {html : { 'name' : `mymodal` ,'x' : `1` ,'y' : `2`  } ,wml : {  } }, [

        __this.node('modal-header', {html : {  } ,wml : {  } }, [

        document.createTextNode(`My Modal`)
     ]),
__this.node('modal-body', {html : {  } ,wml : {  } }, [

        document.createTextNode(`Creativxity is inhibxited by greed and corruption.`),
__this.node('vote-button', {html : {  } ,wml : {  } }, [

        
     ]),
__this.node('vote-count', {html : { 'source' : __context  } ,wml : {  } }, [

        
     ]),
document.createTextNode(` Votes`),
__this.node('textarea', {html : { 'disabled' : true  ,'size' : 32 ,'onchange' : __context.setText  } ,wml : { 'id' : `ta`  } }, [

        document.createTextNode(` Various text`)
     ])
     ])
     ])