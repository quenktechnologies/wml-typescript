import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.widget(Html, {
                html: {
                    'id': ___context.id
                },
                wml: {}
            }, [$wml.domify((___context.check()) ? a : b)], ___view);

    }

}