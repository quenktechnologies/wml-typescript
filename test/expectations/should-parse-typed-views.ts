
import * as $wml from '../../src';


export class Main extends $wml.AppView<Context < string  > > {

    constructor(context: Context < string  > ) {

        super(context);

        this.template = ($context:Context < string  > , $view:$wml.AppView<Context < string  > >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify($context.value) ], $view) ;

       }

     }



