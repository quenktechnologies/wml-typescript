
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.widget(TextView, {html : {  } ,wml : {  } ,android : { thing : {'value' : 1}  } }, $wml.domify(new Person (___ctx.value)) ) )

       }

     }

