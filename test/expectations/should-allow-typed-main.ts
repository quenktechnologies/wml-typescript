
import * as $wml from '../../src';




export class Main extends $wml.AppView<Date  > {

    constructor(context: Date  ) {

        super(context);

        this.template = ($context:Date  , $view:$wml.AppView<Date  >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify($context.toString  ()) ], $view) ;

       }

     }

