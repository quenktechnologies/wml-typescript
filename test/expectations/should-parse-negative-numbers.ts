import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('tag', {
                html: {
                    'n': (-0.5 + 3),
                    'm': (4 + -2),
                    'g': (10 - -5)
                },
                wml: {}
            }, [], ___view);

    }

}