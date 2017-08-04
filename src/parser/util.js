export const flatten = (list, o) => (list.length === 0) ?
    '$$empty()' :
    (list.length === 1) ?
    list[0].transpile(o) :
    `$$box(${list.map(l=>l.transpile(o)).join(',')})`;
