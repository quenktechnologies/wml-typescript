import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(___context: void) {

        super(___context);

        this.template = (___view: ___wml.AppView < void > ) =>
            ___wml.node('p', {
                html: {},
                wml: {}
            }, [___wml.domify(panel(1)(2)(3)(___view))], ___view);

    }

}