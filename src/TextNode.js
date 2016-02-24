/**
 * TextNode for cdata?
 * @param {string} data 
 * @implements {Node}
 */
class TextNode {

    constructor(data) {
        this.data = data;
    }

    render(w) {

        return document.createTextNode(this.data);

    }

}
export default TextNode
