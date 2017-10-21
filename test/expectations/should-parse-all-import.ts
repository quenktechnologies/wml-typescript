
import * as $wml from '../../src';
import * as lib  from 'path/to/libs'; 



export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___context:void, ___view:$wml.AppView<void>) =>
          $wml.node('tag', {html : {  } ,wml : {  } }, [], ___view) ;

       }

     }

