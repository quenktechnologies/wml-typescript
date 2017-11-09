import * as ___wml from '../../src';


export const action = (n: string) => (___context: Date) => (___view: ___wml.View) => ___wml.node('p', {
    html: {},
    wml: {}
}, [___wml.domify(n)], ___view);