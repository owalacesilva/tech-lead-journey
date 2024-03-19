import { IEquatable } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

/**
 * @class Entity
 * @implements {IEquatable<Entity<T>>}
 * @description Classe abstrata para entidades, que implementa a interface IEquatable
 * uma vez que uma entidade não receba um id, será gerado um uuid
 */
export abstract class Entity<T> implements IEquatable<Entity<T>> {
  protected _id: number | string;
  protected _props: T;

  constructor(props: T, id?: number | string) {
    this._props = props;
    this._id = id ?? uuidv4();
  }

  /**
   * @returns {number | string}
   */
  public get id(): number | string {
    return this._id;
  }

  /**
   * @param other Entidade
   * @returns {boolean}
   */
  public equals(other?: Entity<T> | undefined): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (this === other) {
      return true;
    }

    return this._id === other._id;
  }
}
