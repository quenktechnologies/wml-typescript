import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.widget(TextView, {
                html: {},
                wml: {},
                android: {
                    'thing': {
                        'value': 1
                    }
                }
            }, [___wml.domify(new Person(___context.value))], ___view);

    }

}