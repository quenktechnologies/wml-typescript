
import { empty as $$empty, box as $$box, text as $$text, node as $$node,
    read as $$read, widget as $$widget, ifE as $$if, forE as $$for,
    domify as $$domify, AppView} from "@quenk/wml-runtime";


 
export class Main<A,B> extends AppView<Context<A,B>> {

    constructor(context: Context<A,B>) {

        super(context);

        let view = this;

        this.template = function($$view:AppView<Context<A,B>>, $$ctx:Context<A,B>) {
            return $$node('p', {html : {  },wml : {  }}, $$ctx.values)
        }

       }

     }



