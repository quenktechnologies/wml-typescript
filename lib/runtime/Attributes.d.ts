import property from 'property-seek';

export declare class Attributes {

  constructor(attrs: object);

  static isset(value): boolean;

  read<A>(path: string, defaultValue?: A): A;

  require<A>(path: string): A;

  requireArray<A>(path: string, defaultValue?: A[]): A[];

}
