
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('panel', {html : {  } ,wml : {  } }, [$wml.text(` This is my offsprings.`),$wml.node('a', {html : {  } ,wml : {  } }, [$wml.text(`Link`)], ___view) ,$wml.text(`Hey now! `),$wml.widget(Input, {html : {  } ,wml : {  } }, [], ___view)], ___view) ;

       }

     }
