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

export type ForAlt = ()=> __wml.Content[]

export type ForInBody<A> =(val:A, idx:number, all:A[])=>__wml.Content[]

export type ForOfBody<A> = (val:A, key:string, all:object) =>__wml.Content[]

export interface Record<A> {

 [key:string]: A

}

export const $$forIn = <A>(list:A[], f:ForInBody<A>, alt:ForAlt) : __wml.Content[] => {

   let ret:__wml.Content[] = [];

   for(let i=0; i<list.length; i++)
       ret = ret.concat(f(list[i], i, list));

   return ret.length === 0 ? alt() : ret;

}
export const $$forOf = <A>(o:Record<A>, f:ForOfBody<A>,alt:ForAlt) : __wml.Content[] => {

    let ret:__wml.Content[] = [];

    for(let key in o)
  	    if(o.hasOwnProperty(key)) 
	        ret = ret.concat(f((o)[key], key, o));

    return ret.length === 0 ? alt(): ret;

}
export const vue = 

<A  ,B  ,C  > (node: NodeFunc<any>, widget:WidgetFunc<any>) => (a: A   )=> (b: B   )=>  {

   return [

        ((a + b) + c)
     ];

};