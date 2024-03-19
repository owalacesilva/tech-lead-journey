/**
 * Define um contrato para entidades.
 * @interface IIdentity
 */
export interface IIdentity {
  id: number | null;
}

/**
 * Define um contrato para um usuário de contexto.
 * @interface IContextUser
 */
export interface IContextUser {
  id: number;
  name: string;
  email: string;
  roles: IRole[];
  permissions: IRolePermission[];
}

export interface IRolePermission {
  id?: number;
  name?: string;
}

export interface IRole {
  id?: number;
  name?: string;
  permissions?: IRolePermission[];
}

/**
 * Define um contrato para comparação de igualdade.
 * @interface IEquatable
 */
export interface IEquatable<T> {
  equals(other?: T): boolean;
}

/**
 * Define um contrato para serialização de objetos.
 * @interface ISerializable
 */
export interface ISerializable<T> {
  toJson(): T;
}

/**
 * Define um contrato para clonagem de objetos.
 * @interface ICloneable
 */
export interface ICloneable<T> {
  clone(): T;
}
/**
 * Define um contrato para comparação de objetos.
 * @interface IComparer
 */
export interface IComparer<T> {
  compare(first: T, second: T): any;
}

/**
 * Define um contrato para especificação de dominios.
 * @interface ISpecification
 */
export interface ISpecification<T, R> {
  isSatisfiedBy(subject: T, ...args: any): Promise<R> | R | R[];
}

/**
 * Define um método generalizado para persistencia de instâncias.
 * @interface ICreateRepository
 */
export interface ICreateRepository<T, R> {
  create(entity: T): Promise<R>;
}

/**
 * Define um método generalizado para atualização de instâncias.
 * @interface IUpdateRepository
 */
export interface IUpdateRepository<T, R> {
  update(entity: T): Promise<R>;
}

/**
 * Define um método generalizado para exclusão de instâncias.
 * @interface IDeleteRepository
 */
export interface IDeleteRepository<T, R> {
  delete(entity: T): Promise<R>;
}

/**
 * Define um método generalizado para atualização de instâncias em massa.
 * @interface IBulkUpdateRepository
 */
export interface IBulkUpdateRepository<T, R> {
  bulkUpdate(entities: Array<T>): Promise<R>;
}

/**
 * Define um método generalizado para casos de usos de dominio.
 * @interface IUseCase
 */
export interface IUseCase<T, R> {
  execute(request?: T): Promise<R> | R;
}

/**
 * Declara uma interface para validação de entidades. Cada implementação
 * deve validar se um determinado objeto de valor dentro de uma entidade
 * foi ou está validada.
 *
 * @interface IValidator
 * @see [Visitor Pattern](https://www.dofactory.com/net/visitor-design-pattern)
 */
export interface IValidator<T> {
  isValid(entity: T): boolean;
}

/**
 * Define um contrato para entidades que possuem validações.
 * @interface IBrokenRule
 */
export interface IBrokenRule {
  message: string;
  code?: string;
  ref?: string;
}

/**
 * Implementa uma entidade que reune suas validações dentro do seu contexto.
 * uma lista chamada *brokenRules* contem um conjunto de regras que foram invalidas
 * no momento da verificação da entidade. Dessa forma, podemos escolher quais validações
 * podemos distribuir para um sistema de logs externo ou para um cliente web/mobile.
 *
 * @interface IEntityValidable
 * @see [Visitor Pattern](https://www.dofactory.com/net/visitor-design-pattern)
 *
 * For example:
 * ```typescript
 * const entity = new DomainEntity();
 *
 * entity.addValidate(new DomainEntityTitleValidator());
 * entity.addValidate(new DomainEntityCurrentStatusValidator());
 *
 * const brokenRules = entity.validate();
 * ```
 */
export interface IEntityValidable<T> {
  brokenRules: Array<IBrokenRule>;

  addValidate(validator: IValidator<T>): this;

  validate(): Array<IBrokenRule> | null;
}
