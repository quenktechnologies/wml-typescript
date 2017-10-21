
import * as $wml from '../../src';




export class Main extends $wml.AppView<Date  > {

    constructor(context: Date  ) {

        super(context);

        this.template = (___context:Date  , ___view:$wml.AppView<Date  >) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.domify(___context.toString  ()) ], ___view) ;

       }

     }

