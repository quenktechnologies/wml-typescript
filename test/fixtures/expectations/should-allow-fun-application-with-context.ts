
import * as ___wml from '../../src';




export class Main extends ___wml.AppView<void> {

    constructor(___context: void) {

        super(___context);

        this.template = (___view:___wml.AppView<void>) =>
          ___wml.node('div', {html : {  } ,wml : {  } }, [___wml.domify(panel (___context)(12)(___view)) ], ___view) ;

       }

     }
