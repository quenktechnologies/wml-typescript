
/**
 * Filter 
 */
class Filter {

  constructor(name, args, location) {

    this.name = name;
    this.args = args;
    this.location = location;

  }

  wrap(value) {

    var args = this.args.slice();

    args.unshift(value);

    return `${this.name}.apply(this, [${args.join(',')}])`;  

  }

  toString() {

    return '';

  }

}
export default Filter

