import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.widget(Tag, {
                html: {},
                wml: {}
            }, [(value) ? ___wml.node('text', {
                html: {},
                wml: {}
            }, [___wml.text(`Text`)], ___view) : ___wml.node('text', {
                html: {},
                wml: {}
            }, [___wml.text(`else`)], ___view)], ___view);

    }

}