
/**
 * ArrayLiteral 
 */
class ArrayLiteral {

  constructor(members, location) {
this.members = members;
this.location = location;
  }

  toString() {

    return `[ ${this.members.join(',')} ]`;

  }

}

export default ArrayLiteral

