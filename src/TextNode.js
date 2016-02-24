/**
 * TextNode for cdata?
 * @param {string} data 
 * @implements {Node}
 */
class TextNode {

    constructor(data) {
        this.data = data;
    }

    toDOMNode() {

        return document.createTextNode(this.data);

    }

}
export default TextNode
