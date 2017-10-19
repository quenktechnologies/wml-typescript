
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.node('panel', {html : {  } ,wml : {  } }, [$wml.text(' This is my offsprings.'),$wml.node('a', {html : {  } ,wml : {  } }, [$wml.text('Link')]) ,$wml.text('Hey now! '),$wml.widget(Input, {html : {  } ,wml : {  } }, ) ]) )

       }

     }

