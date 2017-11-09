import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('user', {
                html: {
                    'name': `xyaa aaz`,
                    'position': x(20)(4)
                },
                wml: {
                    'val': `test`
                }
            }, [], ___view);

    }

}