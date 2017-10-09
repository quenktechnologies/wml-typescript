import Node from './Node';
import {view as viewFn
} from '../Templates';

/**
 * ViewStatement
 * @param {Location} location
 */
class ViewStatement extends Node {

  constructor(id, context, generics, tag, location) {

    super();

    this.type = 'typed-view-expression';
    this.id = id;
    this.context = context;
    this.generics = generics;
    this.tag = tag;
    this.location = location;

  }

  transpile(o) {

    return viewFn(
        this.id.transpile(o),
        this.context.transpile(o),
        this.generics.map(g=>g.generics(o)).join(','),
        this.tag,
        o);

  }

}

export default ViewStatement

