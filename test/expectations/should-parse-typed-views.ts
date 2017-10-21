
import * as $wml from '../../src';


export class Main extends $wml.AppView<Context < string  > > {

    constructor(context: Context < string  > ) {

        super(context);

        this.template = (___context:Context < string  > , ___view:$wml.AppView<Context < string  > >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___context.value) ], ___view) ;

       }

     }



