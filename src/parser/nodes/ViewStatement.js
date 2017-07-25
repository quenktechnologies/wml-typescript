import Node from './Node';
import {view as viewFn
} from '../Templates';

/**
 * ViewStatement
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */
class ViewStatement extends Node {

  constructor(name, tag, location) {

    super();

    this.type = 'view-expression';
    this.name = name;
    this.tag = tag;
    this.location = location;

  }

  transpile(o) {

    return viewFn(this.name, this.tag, o);

  }

}

export default ViewStatement

