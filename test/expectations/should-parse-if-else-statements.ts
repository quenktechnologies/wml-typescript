
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.widget(Tag, {html : {  } ,wml : {  } }, [$wml.ifthen(value, function then(){ return $wml.node('text', {html : {  } ,wml : {  } }, [$wml.text(`Text`)], $view)  }, function else_clause() { return $wml.node('text', {html : {  } ,wml : {  } }, [$wml.text(`else`)], $view)  } ) ], $view);

       }

     }

