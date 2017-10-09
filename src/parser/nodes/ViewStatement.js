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

    this.type = 'view-statement';
    this.id = id;
    this.generics = generics;
    this.context = context;
    this.tag = tag;
    this.location = location;

  }

  transpile(o) {

        let g = this.generics.length > 0 ?
          `<${this.generics.map(g=>g.generics(o)).join(',')}>` :
          '';

    return viewFn(
        this.id.transpile(o),
        g,
        this.context.transpile(o),
        this.tag,
        o);

  }

}

export default ViewStatement

