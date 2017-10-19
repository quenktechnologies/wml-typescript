
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.node('root', {html : {  } ,wml : {  } }, [$wml.map(list, function _map(item ) { return $wml.node('stem', {html : {  } ,wml : {  } }, [$wml.text('A Stem')])  }, function otherwise() { return function () {} }) ]) )

       }

     }

