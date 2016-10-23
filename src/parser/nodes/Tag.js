import Node from './Node';

/**
 * Tag
 * @param {string} name
 * @param {array<Attribute>} attributes
 * @param {array<Tag|Text|ForLoop|IfCondition>} children
 * @param {Location} location
 * @todo refactor spreads.
 */
class Tag extends Node {

  constructor(name, attributes, children, location) {

    super(location);
    this.type = 'tag';
    this.name = name;
    this.attributes = attributes;
    this.children = children;

  }

  _organizeNamespaces(butes, list, cb) {

    list.forEach(a => {

      var val = cb(a);

      if (a.namespace) {

        butes[a.namespace] = butes[a.namespace] || [];
        butes[a.namespace].push(val);

      } else {

        butes.html = butes.html || [];
        butes.html.push(val);

      }

    });

    return butes;

  }

  transpile() {

    var children;
    var butes = {
      html: []
    };
    var spreads = this.attributes.filter(a => a.type === 'attribute-spread');

    var tag = (this.name[0] === this.name[0].toUpperCase()) ?
      `make.widget(${this.name}` : `make.node('${this.name}'`;

    this.attributes.forEach(a => a.pushStringOnNamespace(butes));

    butes = spreads.reduce((prev, current) => current.wrapAttributesString(prev), '{' + (
      Object.keys(butes).map(ns => ns + ':{' + butes[ns].join(',') + '}')) + '}');

    children = `[${this.children.map(c => c.transpile()).join(',')}]`;
    return `${tag},${butes},${children})`;

  }

  compile(o) {

    var children;
    var node = this.sourceNode(o.fileName, '');
    var butes = {
      html: []
    };
    var spreads = this.attributes.filter(a => a.type === 'attribute-spread');
    var buffer = [];

    var isEle = (this.name[0] === this.name[0].toUpperCase()) ?
      false : true;

    this.attributes.forEach(a => a.pushNodeOnNamespace(butes, o));

    buffer.push('{');

    Object.keys(butes).forEach((key, i, all) => {

      buffer.push([key, ': {']);
      butes[key][butes[key].length - 1].pop(); //Remove trailing comma (,)
      butes[key].forEach(a => buffer.push(a)); //Adds an array [key, ':', value, ','];
      buffer.push((i < all.length - 1) ? ['}', ','] : '}');

    });

    buffer.push('}');

    butes = spreads.reduce((prev, current) =>
      current.wrapAttributes(prev, o), buffer);

    node.add('make.').
    add(isEle ?
      `widget(${this.name}` :
      `node('${this.name}')`).
    add(',');

    node.add.apply(node, buffer); // add everything in the buffer all at once.
    node.add([',', '[']);

    return this.compileList(this.children, node, o).
    add([']', ')']);

  }

}

export default Tag

