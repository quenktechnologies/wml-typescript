import { Attributes } from './Attributes';

/**
 * Widget class represents
 */
export declare class Widget {

  attributes: Attributes;
  children: HTMLElement[];

  constructor(attributes: Attributes, children: HTMLElement[]);

  rendered(): void;
  removed(): void;

}
