import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('p', {
                html: {},
                wml: {}
            }, [$wml.domify(f3(___context.value)(f2(2)(f1(___context.value))))], ___view);

    }

}