
import { empty as $$empty, box as $$box, text as $$text, node as $$node,
    read as $$read, widget as $$widget, ifE as $$if, forE as $$for,
    domify as $$domify, AppView} from "@quenk/wml-runtime";




 
export class Main extends AppView<void> {

    constructor(context: void) {

        super(context);

        let view = this;

        this.template = function($$view:AppView<void>, $$ctx:void) {
            return $$node('p', {html : { class : concat  ([x,$$resolve< string>(`ww:class`, someValue ),$$resolve< string>(`ww:variant`, some.other.value  ,`default`)]) },wml : {  }}, $$empty())
        }

       }

     }

