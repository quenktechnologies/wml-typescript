
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('p', {html : {  } ,wml : {  } }, [$wml.ifthen($wml.read < string  >(`attr`, ___ctx.taggin ), function then(){ return $wml.text(`x`) }, function else_clause() { return $wml.text(` yz fefd `) } ) ], ___view) ;

       }

     }

