
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('panel', {html : {  } ,wml : {  } }, [$wml.node('a', {html : { href : `link`  } ,wml : {  } }, [$wml.text(`Click Here`)], ___view) ,$wml.node('table', {html : {  } ,wml : {  } }, [], ___view) ,$wml.node('panel', {html : { c : `22`  } ,wml : {  } }, [], ___view) ], ___view) ;

       }

     }
