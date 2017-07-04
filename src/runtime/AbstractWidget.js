/**
 * AbstractWidget
 */
class AbstractWidget {

  constructor(attrs, children) {

    this.attributes = attrs;
    this.children = children;
    this.view = null;

  }

  rendered() {

  }

  removed() {

  }

  render() {

    return this.view.render();

  }

}

export default AbstractWidget

