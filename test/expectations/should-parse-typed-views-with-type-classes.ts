
import * as $wml from '../../src';

export class Main< A  ,B  > extends $wml.AppView<Context < A  ,B  > > {

    constructor(context: Context < A  ,B  > ) {

        super(context);

        let ___view = this;

        this.template = (___ctx:Context < A  ,B  > ) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___ctx.values) ], ___view) ;

       }

     }

