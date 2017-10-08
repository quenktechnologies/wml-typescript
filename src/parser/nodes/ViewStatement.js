import Node from './Node';
import {viewT as viewFn
} from '../Templates';

/**
 * ViewStatement
 * @param {Location} location
 */
class ViewStatement extends Node {

  constructor(id, hint, classes, tag, location) {

    super();

    this.type = 'typed-view-expression';
    this.id = id;
    this.hint = hint;
    this.classes = classes;
    this.tag = tag;
    this.location = location;

  }

  transpile(o) {

    return viewFn(
        this.id.transpile(o),
        this.hint.transplie(o),
        this.classes.map(c=>c.transpile(o)).join(','),
        this.tag,
        o);

  }

}

export default ViewStatement

