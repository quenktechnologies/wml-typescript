
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.widget(Html, {html : { id : ___ctx.id  } ,wml : {  } }, $wml.domify((___ctx.check  ()) ? a : b ) ) )

       }

     }

