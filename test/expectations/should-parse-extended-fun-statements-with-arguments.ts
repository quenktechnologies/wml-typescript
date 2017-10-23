import * as $wml from '../../src';


export const vue = (a, b, c: string) => (___view: $wml.View) => $wml.widget(View, {
    html: {
        a: a,
        b: b,
        c: c
    },
    wml: {}
}, [], ___view);