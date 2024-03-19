import { IEquatable } from './interfaces';

/**
 * @description Classe abstrata para objetos de valor, ela
 * implementa a interface IEquatable
 * @class ValueObject
 */
export abstract class ValueObject<T> implements IEquatable<ValueObject<T>> {
  protected readonly _props: T;

  public abstract get values(): T;

  constructor(props: T) {
    this._props = props;
  }

  public equals(other?: ValueObject<T> | undefined): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (other.values === undefined) {
      return false;
    }

    return JSON.stringify(this.values) === JSON.stringify(other.values);
  }
}
