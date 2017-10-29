import * as $wml from '../../src';


export const template = < A > (o: A, _: string, __: A[]) => (___context: Date < A > ) => (___view: $wml.View) => $wml.domify(new String(o));;
export class Results < A > extends $wml.AppView < Date < A > > {

    constructor(context: Date < A > ) {

        super(context);

        this.template = (___context: Date < A > , ___view: $wml.AppView < Date < A > > ) =>
            $wml.node('ul', {
                html: {},
                wml: {}
            }, [$wml.map([1, 3, 4], function _map(option, index) {
                return $wml.node('li', {
                    html: {},
                    wml: {}
                }, [$wml.domify(option), $wml.text(`and`), $wml.domify(index)], ___view)
            }, function otherwise() {
                return document.createDocumentFragment();
            })], ___view);

    }

}