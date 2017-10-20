
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('tag', {html : { n : (-0.5 + 3)  ,m : (4 + -2)  ,g : (10 - -5)   } ,wml : {  } }, [], $view) ;

       }

     }

