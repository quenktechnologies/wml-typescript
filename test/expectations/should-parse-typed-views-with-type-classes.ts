import * as ___wml from '../../src';


export class Main < A, B > extends ___wml.AppView < Context < A, B > > {

    constructor(context: Context < A, B > ) {

        super(context);

        this.template = (___context: Context < A, B > , ___view: ___wml.AppView < Context < A, B > > ) =>
            ___wml.node('p', {
                html: {},
                wml: {}
            }, [___wml.domify(___context.values)], ___view);

    }

}