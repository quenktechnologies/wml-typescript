import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('p', {
                html: {},
                wml: {}
            }, [$wml.domify((new Panel(___context)).render())], ___view);

    }

}