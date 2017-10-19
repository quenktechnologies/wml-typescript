
import * as $wml from '../../src';


export class Main extends $wml.AppView<Date  > {

    constructor(context: Date  ) {

        super(context);

        let ___view = this;

        this.template = (___ctx:Date  ) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___ctx.toString  ()) ], ___view) ;

       }

     }

