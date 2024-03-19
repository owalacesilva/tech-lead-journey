import { Entity } from './entity.abstract';

/**
 * @class Aggregate
 * @extends {Entity<T>}
 * @description Classe abstrata para agregados
 */
export abstract class Aggregate<T> extends Entity<T> {}
