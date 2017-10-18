
import { empty as $$empty, box as $$box, text as $$text, node as $$node,
    read as $$read, widget as $$widget, ifE as $$if, forE as $$for,
    domify as $$domify, AppView} from "@quenk/wml-runtime";




 
export class Main extends AppView<void> {

    constructor(context: void) {

        super(context);

        let view = this;

        this.template = function($$view:AppView<void>, $$ctx:void) {
            return $$node('button', {html : { onclick : function function_expression(e) {
    { return $$ctx.call  (e) }  },wml : {  }}, $$empty())
        }

       }

     }

