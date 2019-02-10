/**
 * OptionValue
 */
export declare type OptionValue = boolean | string | undefined;
/**
 * Options the compiler understands.
 */
export interface Options {
    [key: string]: OptionValue;
    debug?: boolean;
    main?: string;
    module?: string;
}
/**
 * compile a string of WML into typescript code.
 */
export declare const compile: (src: string, opts?: Options) => import("@quenk/noni/lib/data/either").Either<import("@quenk/noni/lib/control/error").Err, string>;
