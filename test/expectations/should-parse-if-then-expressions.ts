
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.widget(Html, {html : { id : $context.id  } ,wml : {  } }, [$wml.domify(($context.check  ()) ? a : b ) ], $view);

       }

     }

