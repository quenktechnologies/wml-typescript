import * as $wml from '../../src';


export const action = < A > (s: string[], a: A[]) => (___view: $wml.View) => $wml.domify(`${s}${a}`);