
import * as $wml from '../../src';




export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        this.template = ($context:void, $view:$wml.AppView<void>) =>
          $wml.node('modal', {html : { name : `mymodal` ,x : `1` ,y : `2`  } ,wml : {  } }, [$wml.node('modal-header', {html : {  } ,wml : {  } }, [$wml.text(`My Modal`)], $view) ,$wml.node('modal-body', {html : {  } ,wml : {  } }, [$wml.text(`Creativxity is inhibxited by greed and corruption.`),$wml.node('vote-button', {html : {  } ,wml : {  } }, [], $view) ,$wml.node('vote-count', {html : { source : $context  } ,wml : {  } }, [], $view) ,$wml.text(` Votes`),$wml.node('textarea', {html : { disabled : true  ,size : 32 ,onchange : $context.setText  } ,wml : { id : `ta`  } }, [$wml.text(` Various text`)], $view) ], $view) ], $view) ;

       }

     }

