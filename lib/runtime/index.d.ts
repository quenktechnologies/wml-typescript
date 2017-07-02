
export declare type WMLElement = HTMLElement | Node | EventTarget | Widget;

export declare interface Widget {

  rendered(): void;
  removed(): void;
  render(): HTMLElement;

}

export declare interface View {

  render(): HTMLElement;
  findById(id: string): WMLElement;

}

/**
 * AbstractWidget
 */
export declare class AbstractWidget {

  public attributes: Attributes;
  public children: HTMLElement[];
  public view: View

  constructor(attributes: Attributes, children: HTMLElement[]);

  rendered(): void;
  removed(): void;
  render(): HTMLElement;

}

export declare class Attributes {

  constructor(attrs: object);

  static isset(value): boolean;

  read<A>(path: string, defaultValue?: A): A;

  require<A>(path: string): A;

}
