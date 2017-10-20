
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.ifthen($wml.read < string  >(`attr`, $context.taggin ), function then(){ return $wml.text(`x`) }, function else_clause() { return $wml.text(` yz fefd `) } ) ], $view) ;

       }

     }

