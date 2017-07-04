
export declare interface View {

  render(): HTMLElement;
  findById<E>(id: string): E;

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
