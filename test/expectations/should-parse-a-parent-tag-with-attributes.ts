import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('panel', {
                html: {
                    'type': `default`,
                    'size': `40`,
                    'align': `left`
                },
                wml: {}
            }, [], ___view);

    }

}