import Node from './Node';

/**
 * TextInterpolation
 */
class TextInterpolation extends Node {

    constructor(interpolation, location) {

        super();
        this.type = 'text-interpolation';
        this.interpolation = interpolation;
        this.location = location;

    }

    transpile(o) {

        return `$$domify(${this.interpolation.transpile(o)})`;

    }

}

export default TextInterpolation
