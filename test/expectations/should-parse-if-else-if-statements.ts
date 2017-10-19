
import * as $wml from '../../src';




 
export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = (___ctx:void) =>
          $wml.unpart($wml.widget(Tag, {html : {  } ,wml : {  } }, $wml.ifthen(value, function then(){ return $wml.node('text', {html : {  } ,wml : {  } }, [$wml.text('Text')])  }, function elseif(){ return $wml.ifthen(value, function then() { return $wml.node('text', {html : {  } ,wml : {  } }, [$wml.text('else')]) ; }, function else_clause() { return $wml.text(' 
            no 
          ') } );}) ) )

       }

     }

