import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('div', {
                html: {
                    'class': ((Styles.A + ` `) + Style.B)
                },
                wml: {}
            }, [], ___view);

    }

}