import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('panel', {
                html: {},
                wml: {}
            }, [___wml.node('a', {
                html: {
                    'href': `link`,
                    'onclick': ___context.someting.invoke()
                },
                wml: {}
            }, [___wml.text(`Click Here`)], ___view), ___wml.node('table', {
                html: {},
                wml: {}
            }, [], ___view)], ___view);

    }

}