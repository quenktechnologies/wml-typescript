
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('user', {html : { name : `xyaa aaz` ,id : `24` ,align : `left`  } ,wml : {  } }, [], ___view) ;

       }

     }

