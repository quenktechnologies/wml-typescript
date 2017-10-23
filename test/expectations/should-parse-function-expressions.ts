import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('button', {
                html: {
                    onclick: function function_expression(e) {
                        return ___context.call(e)
                    }
                },
                wml: {}
            }, [], ___view);

    }

}