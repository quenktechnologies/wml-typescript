
import * as ___wml from '@quenk/wml';
import {Ctx} from './ctx'; 



export class Main extends ___wml.AppView<Ctx  > {

    constructor(___context: Ctx  ) {

        super(___context);

        this.template = (___view:___wml.AppView<Ctx  >) =>
          ___wml.node('div', {html : { 'class' : ___context.getClassname  ()  } ,wml : {  } }, [___wml.domify(___context.getContent  ()) ], ___view) ;

       }

     }

