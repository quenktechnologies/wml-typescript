
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('div', {html : { class : ((Styles.A + ` `)  + Style.B)   } ,wml : {  } }, [], ___view) ;

       }

     }

