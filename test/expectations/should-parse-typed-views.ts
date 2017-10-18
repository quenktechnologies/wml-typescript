
import { empty as $$empty, box as $$box, text as $$text, node as $$node,
    read as $$read, widget as $$widget, ifE as $$if, forE as $$for,
    domify as $$domify, AppView} from "@quenk/wml-runtime";


 
export class Main extends AppView<Context<string>> {

    constructor(context: Context<string>) {

        super(context);

        let view = this;

        this.template = function($$view:AppView<Context<string>>, $$ctx:Context<string>) {
            return $$node('p', {html : {  },wml : {  }}, $$ctx.value)
        }

       }

     }



