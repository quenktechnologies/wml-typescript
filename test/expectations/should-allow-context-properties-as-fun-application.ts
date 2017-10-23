import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('div', {
                html: {},
                wml: {}
            }, [$wml.domify(___context.action()(___view))], ___view);

    }

}