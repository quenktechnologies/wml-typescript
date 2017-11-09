import * as ___wml from '../../src';




export class Main extends ___wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: ___wml.AppView < void > ) =>
            ___wml.node('tr', {
                html: {},
                wml: {}
            }, [___wml.map(y, function _map(x, i) {
                return ___wml.domify(f(x, i))
            }, function otherwise() {
                return document.createDocumentFragment();
            })], ___view);

    }

}