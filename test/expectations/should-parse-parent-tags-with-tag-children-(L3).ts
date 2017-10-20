
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('panel', {html : {  } ,wml : {  } }, [$wml.node('a', {html : { href : `link`  } ,wml : {  } }, [$wml.text(`Click Here`)], $view) ,$wml.node('table', {html : {  } ,wml : {  } }, [], $view) ,$wml.node('panel', {html : { c : `22`  } ,wml : {  } }, [], $view) ], $view) ;

       }

     }

