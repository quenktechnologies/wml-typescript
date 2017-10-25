import * as $wml from '../../src';




export class Main extends $wml.AppView < void > {

    constructor(context: void) {

        super(context);

        this.template = (___context: void, ___view: $wml.AppView < void > ) =>
            $wml.node('p', {
                html: {
                    'class': concat([x, $wml.read < string > (`ww:class`, someValue), $wml.read < string > (`ww:variant`, some.other.value, `default`)])
                },
                wml: {}
            }, [], ___view);

    }

}
