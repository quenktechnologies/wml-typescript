import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('tr', {
                html: {},
                wml: {}
            }, [$wml.map(y, function _map(x, i) {
                return $wml.domify(f(x, i))
            }, function otherwise() {
                return document.createDocumentFragment();
            })], ___view);

    }

}