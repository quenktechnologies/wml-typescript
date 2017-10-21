
import * as $wml from '../../src';


export class Main extends $wml.AppView<Context < String  > > {

    constructor(context: Context < String  > ) {

        super(context);

        this.template = (___context:Context < String  > , ___view:$wml.AppView<Context < String  > >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___context.value) ], ___view) ;

       }

     }



