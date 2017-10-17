import * as Parser from './Parser';
import * as nodes from './Node';
import * as afpl from 'afpl';
import * as Template from './Templates';
import { Either } from 'afpl';

export type Code = Either<Error,Context>;

export interface Options {

    debug?: boolean,
    main?: string,
    module?: string

}

export class Context {

  constructor(public text:string) {}

}

export const defaultOptions: Options = {
    debug: false,
    main: 'Main',
    module: '@quenk/wml-runtime',
};

export const parse = (str: string, ast: nodes.Nodes = nodes): nodes.Module => {

    Parser.parser.yy = { ast };
    return Parser.parser.parse(str);

}

const _str = (a: any) => (typeof a === 'object') ? a.constructor.name : `${a}`;

const reduceNodes2Ctx = (o:Options) => (p:Code, c:nodes.Node) : Code =>  p.chain(ctx=>code(c,o,ctx));

export const code = (n: nodes.Node, options: Options, ctx:Context): Code => {

    if (n instanceof nodes.Module) {

     
    } else {

        return Either.left<Error, Context>(new Error(`Unknown node '${_str(n)}'!`));

    }


}

export const compile = (src: string, options: Options = {}): Either<Error, string> => {

    let opts = afpl.util.merge(defaultOptions, options);
    let ctx = new Context();

    try {

        return code(parse(src), opts, ctx).chain(c => c.text);

    } catch (e) {

        return Either.left<Error, string>(e);

    }

}
