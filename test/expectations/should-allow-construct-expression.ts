
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.widget(TextView, {html : {  } ,wml : {  } ,android : { thing : {'value' : 1}  } }, [$wml.domify(new Person (___ctx.value)) ], ___view);

       }

     }

