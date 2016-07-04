import Node from './Node';

/**
 * DefaultMember 
 * @param {string} member 
 * @param {Location} location 
 */
class DefaultMember extends Node {

  constructor(member, location) {

    super(location);
    this.member = member;

  }

  transpile() {

    return this.member;
    
  }

  compile(o) {

    return this.sourceNode(o.fileName, this.member);

  }

}

export default DefaultMember

