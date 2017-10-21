import * as $wml from '../../src';


export const action = (n: String) => (___context: Date) => (___view: $wml.View) => $wml.node('p', {
    html: {},
    wml: {}
}, [$wml.domify(n)], ___view);
