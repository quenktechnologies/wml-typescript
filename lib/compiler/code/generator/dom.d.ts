import * as ast from '@quenk/wml-parser/lib/ast';
import { Context } from '../';
import { Generator } from './';
/**
 * DOMGenerator targets the client side DOM.
 */
export declare class DOMGenerator implements Generator {
    imports(ctx: Context): string;
    definitions(ctx: Context): string;
    view(ctx: Context, n: ast.ViewStatement): string;
    fun(ctx: Context, n: ast.FunStatement): string;
    funApplication(ctx: Context, n: ast.FunApplication): string;
    widget(ctx: Context, w: ast.Widget): string;
    node(ctx: Context, n: ast.Node): string;
    ifelse(ctx: Context, n: ast.IfStatement): string;
    forIn(ctx: Context, n: ast.ForInStatement): string;
    forOf(ctx: Context, n: ast.ForOfStatement): string;
    text(_: Context, str: string): string;
}
