
import * as $wml from '../../src';
import * as lib  from 'path/to/libs'; 

export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('tag', {html : {  } ,wml : {  } }, [], ___view) ;

       }

     }

