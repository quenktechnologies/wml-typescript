import * as ___wml from '../../src';




export class Something extends ___wml.AppView < Date > {

    constructor(context: Date) {

        super(context);

        this.template = (___context: Date, ___view: ___wml.AppView < Date > ) =>
            ___wml.node('p', {
                html: {},
                wml: {}
            }, [___wml.domify(___context.toString())], ___view);

    }

}