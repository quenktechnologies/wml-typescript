import { Main } from './panel';
export declare class Ctx {
    view: Main;
    getClassname(): string;
    getContent(): string;
    rendered(): void;
    removed(): void;
    render(): import("@quenk/wml").Content;
}
