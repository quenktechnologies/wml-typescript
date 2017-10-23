import * as $wml from '../../src';


export const vue = < A,
    B extends C, C > (a: A, b: B) => (___view: $wml.View) => $wml.domify(((a + b) + c));