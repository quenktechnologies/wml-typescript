
import { empty as $$empty, box as $$box, text as $$text, node as $$node,
    read as $$read, widget as $$widget, ifE as $$if, forE as $$for,
    domify as $$domify, AppView} from "@quenk/wml-runtime";




 
export class Main extends AppView<void> {

    constructor(context: void) {

        super(context);

        let view = this;

        this.template = function($$view:AppView<void>, $$ctx:void) {
            return $$node('modal', {html : { name : `mymodal`,x : `1`,y : `2` },wml : {  }}, $$box($$node('modal-header', {html : {  },wml : {  }}, 'My Modal'),$$node('modal-body', {html : {  },wml : {  }}, $$box('Creativxity is inhibxited by greed and corruption.',$$node('vote-button', {html : {  },wml : {  }}, $$empty()),$$node('vote-count', {html : { source : $$ctx },wml : {  }}, $$empty()),' Votes',$$node('textarea', {html : { disabled : true ,size : 32,onchange : $$ctx.setText },wml : { id : `ta` }}, ' Various text')))))
        }

       }

     }

