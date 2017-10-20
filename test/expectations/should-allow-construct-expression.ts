
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.widget(TextView, {html : {  } ,wml : {  } ,android : { thing : {'value' : 1}  } }, [$wml.domify(new Person ($context.value)) ], $view);

       }

     }

