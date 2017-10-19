
import * as $wml from '../../src';


export class Main extends $wml.AppView<void> {

    constructor(context: void) {

        super(context);

        let ___view = this;

        this.template = (___ctx:void) =>
          $wml.node('modal', {html : { name : `mymodal` ,x : `1` ,y : `2`  } ,wml : {  } }, [$wml.node('modal-header', {html : {  } ,wml : {  } }, [$wml.text(`My Modal`)], ___view) ,$wml.node('modal-body', {html : {  } ,wml : {  } }, [$wml.text(`Creativxity is inhibxited by greed and corruption.`),$wml.node('vote-button', {html : {  } ,wml : {  } }, [], ___view) ,$wml.node('vote-count', {html : { source : ___ctx  } ,wml : {  } }, [], ___view) ,$wml.text(` Votes`),$wml.node('textarea', {html : { disabled : true  ,size : 32 ,onchange : ___ctx.setText  } ,wml : { id : `ta`  } }, [$wml.text(` Various text`)], ___view) ], ___view) ], ___view) ;

       }

     }

