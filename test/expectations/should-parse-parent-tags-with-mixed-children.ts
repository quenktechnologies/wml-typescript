
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('panel', {html : {  } ,wml : {  } }, [$wml.text(` This is my offsprings.`),$wml.node('a', {html : {  } ,wml : {  } }, [$wml.text(`Link`)], $view) ,$wml.text(`Hey now! `),$wml.widget(Input, {html : {  } ,wml : {  } }, [], $view)], $view) ;

       }

     }

