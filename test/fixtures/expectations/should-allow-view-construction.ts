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
__this.node('p', {html : {  } ,wml : {  } }, [

        (new Panel(__context)).render()
     ])