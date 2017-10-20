
import * as $wml from '../../src';


export class Main< A  ,B  > extends $wml.AppView<Context < A  ,B  > > {

    constructor(context: Context < A  ,B  > ) {

        super(context);

        this.template = ($context:Context < A  ,B  > , $view:$wml.AppView<Context < A  ,B  > >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify($context.values) ], $view) ;

       }

     }



