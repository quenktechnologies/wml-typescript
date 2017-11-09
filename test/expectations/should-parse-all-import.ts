import * as ___wml from '../../src';
import * as lib from 'path/to/libs';



export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('tag', {
                html: {},
                wml: {}
            }, [], ___view);

    }

}