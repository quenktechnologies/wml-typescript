import * as ___wml from '../../src';


export class Main extends ___wml.AppView < Context < String > > {

    constructor(context: Context < String > ) {

        super(context);

        this.template = (___context: Context < String > , ___view: ___wml.AppView < Context < String > > ) =>
            ___wml.node('p', {
                html: {},
                wml: {}
            }, [___wml.domify(___context.value)], ___view);

    }

}