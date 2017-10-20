
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('root', {html : {  } ,wml : {  } }, [$wml.map(list, function _map(item ) { return $wml.node('stem', {html : {  } ,wml : {  } }, [$wml.text(`A Stem`)], $view)  }, function otherwise() { return document.createDocumentFragment(); }) ], $view) ;

       }

     }

