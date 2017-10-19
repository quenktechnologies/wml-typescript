
import * as $wml from '../../src';

export class Main extends $wml.AppView<Context < string  > > {

    constructor(context: Context < string  > ) {

        super(context);

        let ___view = this;

        this.template = (___ctx:Context < string  > ) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___ctx.value) ], ___view) ;

       }

     }


