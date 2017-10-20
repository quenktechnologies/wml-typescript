
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify((Styles.A + Styles.B) ) ], $view) ;

       }

     }

