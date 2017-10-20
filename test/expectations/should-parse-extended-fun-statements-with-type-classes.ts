
import * as $wml from '../../src';


export const vue = < A  ,B extends C   ,C  >(a:A   ,b:B   )=><C>($view:$wml.AppView<C>)=>$wml.domify(((a + b)  + c) ) ;


