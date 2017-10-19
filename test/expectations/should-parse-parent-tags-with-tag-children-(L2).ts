
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.node('panel', {html : {  } ,wml : {  } }, [$wml.node('a', {html : { href : `link` ,onclick : ___ctx.someting.invoke   ()  } ,wml : {  } }, [$wml.text('Click Here')]) ,$wml.node('table', {html : {  } ,wml : {  } }, []) ]) )

       }

     }

