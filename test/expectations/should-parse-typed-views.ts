
import * as $wml from '../../src';


 
export class Main extends $wml.AppView<Context < string  > > {

    constructor(context: Context < string  > ) {

        super(context);

        this.template = (___ctx:Context < string  > ) =>
          $wml.unpart($wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___ctx.value) ]) )

       }

     }



