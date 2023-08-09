
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SatisfactionResponse
 * 
 */
export type SatisfactionResponse = $Result.DefaultSelection<Prisma.$SatisfactionResponsePayload>
/**
 * Model AdminQuestion
 * 
 */
export type AdminQuestion = $Result.DefaultSelection<Prisma.$AdminQuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.satisfactionResponse`: Exposes CRUD operations for the **SatisfactionResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SatisfactionResponses
    * const satisfactionResponses = await prisma.satisfactionResponse.findMany()
    * ```
    */
  get satisfactionResponse(): Prisma.SatisfactionResponseDelegate<ExtArgs>;

  /**
   * `prisma.adminQuestion`: Exposes CRUD operations for the **AdminQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminQuestions
    * const adminQuestions = await prisma.adminQuestion.findMany()
    * ```
    */
  get adminQuestion(): Prisma.AdminQuestionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SatisfactionResponse: 'SatisfactionResponse',
    AdminQuestion: 'AdminQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'satisfactionResponse' | 'adminQuestion'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SatisfactionResponse: {
        payload: Prisma.$SatisfactionResponsePayload<ExtArgs>
        fields: Prisma.SatisfactionResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatisfactionResponseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatisfactionResponseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          findFirst: {
            args: Prisma.SatisfactionResponseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatisfactionResponseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          findMany: {
            args: Prisma.SatisfactionResponseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>[]
          }
          create: {
            args: Prisma.SatisfactionResponseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          createMany: {
            args: Prisma.SatisfactionResponseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SatisfactionResponseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          update: {
            args: Prisma.SatisfactionResponseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          deleteMany: {
            args: Prisma.SatisfactionResponseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SatisfactionResponseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SatisfactionResponseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SatisfactionResponsePayload>
          }
          aggregate: {
            args: Prisma.SatisfactionResponseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSatisfactionResponse>
          }
          groupBy: {
            args: Prisma.SatisfactionResponseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SatisfactionResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatisfactionResponseCountArgs<ExtArgs>,
            result: $Utils.Optional<SatisfactionResponseCountAggregateOutputType> | number
          }
        }
      }
      AdminQuestion: {
        payload: Prisma.$AdminQuestionPayload<ExtArgs>
        fields: Prisma.AdminQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminQuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminQuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          findFirst: {
            args: Prisma.AdminQuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminQuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          findMany: {
            args: Prisma.AdminQuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>[]
          }
          create: {
            args: Prisma.AdminQuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          createMany: {
            args: Prisma.AdminQuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminQuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          update: {
            args: Prisma.AdminQuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AdminQuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminQuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminQuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminQuestionPayload>
          }
          aggregate: {
            args: Prisma.AdminQuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdminQuestion>
          }
          groupBy: {
            args: Prisma.AdminQuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminQuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    satisfactionResponses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    satisfactionResponses?: boolean | UserCountOutputTypeCountSatisfactionResponsesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSatisfactionResponsesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SatisfactionResponseWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    satisfactionResponses?: boolean | User$satisfactionResponsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    satisfactionResponses?: boolean | User$satisfactionResponsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      satisfactionResponses: Prisma.$SatisfactionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    satisfactionResponses<T extends User$satisfactionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$satisfactionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.satisfactionResponses
   */
  export type User$satisfactionResponsesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    where?: SatisfactionResponseWhereInput
    orderBy?: SatisfactionResponseOrderByWithRelationInput | SatisfactionResponseOrderByWithRelationInput[]
    cursor?: SatisfactionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatisfactionResponseScalarFieldEnum | SatisfactionResponseScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model SatisfactionResponse
   */

  export type AggregateSatisfactionResponse = {
    _count: SatisfactionResponseCountAggregateOutputType | null
    _avg: SatisfactionResponseAvgAggregateOutputType | null
    _sum: SatisfactionResponseSumAggregateOutputType | null
    _min: SatisfactionResponseMinAggregateOutputType | null
    _max: SatisfactionResponseMaxAggregateOutputType | null
  }

  export type SatisfactionResponseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SatisfactionResponseSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SatisfactionResponseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    response: string | null
  }

  export type SatisfactionResponseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    response: string | null
  }

  export type SatisfactionResponseCountAggregateOutputType = {
    id: number
    userId: number
    response: number
    _all: number
  }


  export type SatisfactionResponseAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SatisfactionResponseSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SatisfactionResponseMinAggregateInputType = {
    id?: true
    userId?: true
    response?: true
  }

  export type SatisfactionResponseMaxAggregateInputType = {
    id?: true
    userId?: true
    response?: true
  }

  export type SatisfactionResponseCountAggregateInputType = {
    id?: true
    userId?: true
    response?: true
    _all?: true
  }

  export type SatisfactionResponseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfactionResponse to aggregate.
     */
    where?: SatisfactionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionResponses to fetch.
     */
    orderBy?: SatisfactionResponseOrderByWithRelationInput | SatisfactionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatisfactionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SatisfactionResponses
    **/
    _count?: true | SatisfactionResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatisfactionResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatisfactionResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatisfactionResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatisfactionResponseMaxAggregateInputType
  }

  export type GetSatisfactionResponseAggregateType<T extends SatisfactionResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateSatisfactionResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatisfactionResponse[P]>
      : GetScalarType<T[P], AggregateSatisfactionResponse[P]>
  }




  export type SatisfactionResponseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SatisfactionResponseWhereInput
    orderBy?: SatisfactionResponseOrderByWithAggregationInput | SatisfactionResponseOrderByWithAggregationInput[]
    by: SatisfactionResponseScalarFieldEnum[] | SatisfactionResponseScalarFieldEnum
    having?: SatisfactionResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatisfactionResponseCountAggregateInputType | true
    _avg?: SatisfactionResponseAvgAggregateInputType
    _sum?: SatisfactionResponseSumAggregateInputType
    _min?: SatisfactionResponseMinAggregateInputType
    _max?: SatisfactionResponseMaxAggregateInputType
  }

  export type SatisfactionResponseGroupByOutputType = {
    id: number
    userId: number
    response: string
    _count: SatisfactionResponseCountAggregateOutputType | null
    _avg: SatisfactionResponseAvgAggregateOutputType | null
    _sum: SatisfactionResponseSumAggregateOutputType | null
    _min: SatisfactionResponseMinAggregateOutputType | null
    _max: SatisfactionResponseMaxAggregateOutputType | null
  }

  type GetSatisfactionResponseGroupByPayload<T extends SatisfactionResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatisfactionResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatisfactionResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatisfactionResponseGroupByOutputType[P]>
            : GetScalarType<T[P], SatisfactionResponseGroupByOutputType[P]>
        }
      >
    >


  export type SatisfactionResponseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    response?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satisfactionResponse"]>

  export type SatisfactionResponseSelectScalar = {
    id?: boolean
    userId?: boolean
    response?: boolean
  }

  export type SatisfactionResponseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SatisfactionResponsePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SatisfactionResponse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: number
      response: string
    }, ExtArgs["result"]["satisfactionResponse"]>
    composites: {}
  }


  type SatisfactionResponseGetPayload<S extends boolean | null | undefined | SatisfactionResponseDefaultArgs> = $Result.GetResult<Prisma.$SatisfactionResponsePayload, S>

  type SatisfactionResponseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SatisfactionResponseFindManyArgs, 'select' | 'include'> & {
      select?: SatisfactionResponseCountAggregateInputType | true
    }

  export interface SatisfactionResponseDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SatisfactionResponse'], meta: { name: 'SatisfactionResponse' } }
    /**
     * Find zero or one SatisfactionResponse that matches the filter.
     * @param {SatisfactionResponseFindUniqueArgs} args - Arguments to find a SatisfactionResponse
     * @example
     * // Get one SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SatisfactionResponseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseFindUniqueArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SatisfactionResponse that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SatisfactionResponseFindUniqueOrThrowArgs} args - Arguments to find a SatisfactionResponse
     * @example
     * // Get one SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SatisfactionResponseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SatisfactionResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseFindFirstArgs} args - Arguments to find a SatisfactionResponse
     * @example
     * // Get one SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SatisfactionResponseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseFindFirstArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SatisfactionResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseFindFirstOrThrowArgs} args - Arguments to find a SatisfactionResponse
     * @example
     * // Get one SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SatisfactionResponseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SatisfactionResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatisfactionResponses
     * const satisfactionResponses = await prisma.satisfactionResponse.findMany()
     * 
     * // Get first 10 SatisfactionResponses
     * const satisfactionResponses = await prisma.satisfactionResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satisfactionResponseWithIdOnly = await prisma.satisfactionResponse.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SatisfactionResponseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SatisfactionResponse.
     * @param {SatisfactionResponseCreateArgs} args - Arguments to create a SatisfactionResponse.
     * @example
     * // Create one SatisfactionResponse
     * const SatisfactionResponse = await prisma.satisfactionResponse.create({
     *   data: {
     *     // ... data to create a SatisfactionResponse
     *   }
     * })
     * 
    **/
    create<T extends SatisfactionResponseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseCreateArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SatisfactionResponses.
     *     @param {SatisfactionResponseCreateManyArgs} args - Arguments to create many SatisfactionResponses.
     *     @example
     *     // Create many SatisfactionResponses
     *     const satisfactionResponse = await prisma.satisfactionResponse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SatisfactionResponseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SatisfactionResponse.
     * @param {SatisfactionResponseDeleteArgs} args - Arguments to delete one SatisfactionResponse.
     * @example
     * // Delete one SatisfactionResponse
     * const SatisfactionResponse = await prisma.satisfactionResponse.delete({
     *   where: {
     *     // ... filter to delete one SatisfactionResponse
     *   }
     * })
     * 
    **/
    delete<T extends SatisfactionResponseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseDeleteArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SatisfactionResponse.
     * @param {SatisfactionResponseUpdateArgs} args - Arguments to update one SatisfactionResponse.
     * @example
     * // Update one SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SatisfactionResponseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseUpdateArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SatisfactionResponses.
     * @param {SatisfactionResponseDeleteManyArgs} args - Arguments to filter SatisfactionResponses to delete.
     * @example
     * // Delete a few SatisfactionResponses
     * const { count } = await prisma.satisfactionResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SatisfactionResponseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SatisfactionResponseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatisfactionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatisfactionResponses
     * const satisfactionResponse = await prisma.satisfactionResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SatisfactionResponseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SatisfactionResponse.
     * @param {SatisfactionResponseUpsertArgs} args - Arguments to update or create a SatisfactionResponse.
     * @example
     * // Update or create a SatisfactionResponse
     * const satisfactionResponse = await prisma.satisfactionResponse.upsert({
     *   create: {
     *     // ... data to create a SatisfactionResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatisfactionResponse we want to update
     *   }
     * })
    **/
    upsert<T extends SatisfactionResponseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SatisfactionResponseUpsertArgs<ExtArgs>>
    ): Prisma__SatisfactionResponseClient<$Result.GetResult<Prisma.$SatisfactionResponsePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SatisfactionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseCountArgs} args - Arguments to filter SatisfactionResponses to count.
     * @example
     * // Count the number of SatisfactionResponses
     * const count = await prisma.satisfactionResponse.count({
     *   where: {
     *     // ... the filter for the SatisfactionResponses we want to count
     *   }
     * })
    **/
    count<T extends SatisfactionResponseCountArgs>(
      args?: Subset<T, SatisfactionResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatisfactionResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SatisfactionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SatisfactionResponseAggregateArgs>(args: Subset<T, SatisfactionResponseAggregateArgs>): Prisma.PrismaPromise<GetSatisfactionResponseAggregateType<T>>

    /**
     * Group by SatisfactionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SatisfactionResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatisfactionResponseGroupByArgs['orderBy'] }
        : { orderBy?: SatisfactionResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SatisfactionResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatisfactionResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SatisfactionResponse model
   */
  readonly fields: SatisfactionResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SatisfactionResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatisfactionResponseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SatisfactionResponse model
   */ 
  interface SatisfactionResponseFieldRefs {
    readonly id: FieldRef<"SatisfactionResponse", 'Int'>
    readonly userId: FieldRef<"SatisfactionResponse", 'Int'>
    readonly response: FieldRef<"SatisfactionResponse", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SatisfactionResponse findUnique
   */
  export type SatisfactionResponseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionResponse to fetch.
     */
    where: SatisfactionResponseWhereUniqueInput
  }


  /**
   * SatisfactionResponse findUniqueOrThrow
   */
  export type SatisfactionResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionResponse to fetch.
     */
    where: SatisfactionResponseWhereUniqueInput
  }


  /**
   * SatisfactionResponse findFirst
   */
  export type SatisfactionResponseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionResponse to fetch.
     */
    where?: SatisfactionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionResponses to fetch.
     */
    orderBy?: SatisfactionResponseOrderByWithRelationInput | SatisfactionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfactionResponses.
     */
    cursor?: SatisfactionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfactionResponses.
     */
    distinct?: SatisfactionResponseScalarFieldEnum | SatisfactionResponseScalarFieldEnum[]
  }


  /**
   * SatisfactionResponse findFirstOrThrow
   */
  export type SatisfactionResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionResponse to fetch.
     */
    where?: SatisfactionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionResponses to fetch.
     */
    orderBy?: SatisfactionResponseOrderByWithRelationInput | SatisfactionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfactionResponses.
     */
    cursor?: SatisfactionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfactionResponses.
     */
    distinct?: SatisfactionResponseScalarFieldEnum | SatisfactionResponseScalarFieldEnum[]
  }


  /**
   * SatisfactionResponse findMany
   */
  export type SatisfactionResponseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SatisfactionResponses to fetch.
     */
    where?: SatisfactionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfactionResponses to fetch.
     */
    orderBy?: SatisfactionResponseOrderByWithRelationInput | SatisfactionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SatisfactionResponses.
     */
    cursor?: SatisfactionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfactionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfactionResponses.
     */
    skip?: number
    distinct?: SatisfactionResponseScalarFieldEnum | SatisfactionResponseScalarFieldEnum[]
  }


  /**
   * SatisfactionResponse create
   */
  export type SatisfactionResponseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a SatisfactionResponse.
     */
    data: XOR<SatisfactionResponseCreateInput, SatisfactionResponseUncheckedCreateInput>
  }


  /**
   * SatisfactionResponse createMany
   */
  export type SatisfactionResponseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatisfactionResponses.
     */
    data: SatisfactionResponseCreateManyInput | SatisfactionResponseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SatisfactionResponse update
   */
  export type SatisfactionResponseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a SatisfactionResponse.
     */
    data: XOR<SatisfactionResponseUpdateInput, SatisfactionResponseUncheckedUpdateInput>
    /**
     * Choose, which SatisfactionResponse to update.
     */
    where: SatisfactionResponseWhereUniqueInput
  }


  /**
   * SatisfactionResponse updateMany
   */
  export type SatisfactionResponseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SatisfactionResponses.
     */
    data: XOR<SatisfactionResponseUpdateManyMutationInput, SatisfactionResponseUncheckedUpdateManyInput>
    /**
     * Filter which SatisfactionResponses to update
     */
    where?: SatisfactionResponseWhereInput
  }


  /**
   * SatisfactionResponse upsert
   */
  export type SatisfactionResponseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the SatisfactionResponse to update in case it exists.
     */
    where: SatisfactionResponseWhereUniqueInput
    /**
     * In case the SatisfactionResponse found by the `where` argument doesn't exist, create a new SatisfactionResponse with this data.
     */
    create: XOR<SatisfactionResponseCreateInput, SatisfactionResponseUncheckedCreateInput>
    /**
     * In case the SatisfactionResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatisfactionResponseUpdateInput, SatisfactionResponseUncheckedUpdateInput>
  }


  /**
   * SatisfactionResponse delete
   */
  export type SatisfactionResponseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
    /**
     * Filter which SatisfactionResponse to delete.
     */
    where: SatisfactionResponseWhereUniqueInput
  }


  /**
   * SatisfactionResponse deleteMany
   */
  export type SatisfactionResponseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfactionResponses to delete
     */
    where?: SatisfactionResponseWhereInput
  }


  /**
   * SatisfactionResponse without action
   */
  export type SatisfactionResponseDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfactionResponse
     */
    select?: SatisfactionResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SatisfactionResponseInclude<ExtArgs> | null
  }



  /**
   * Model AdminQuestion
   */

  export type AggregateAdminQuestion = {
    _count: AdminQuestionCountAggregateOutputType | null
    _avg: AdminQuestionAvgAggregateOutputType | null
    _sum: AdminQuestionSumAggregateOutputType | null
    _min: AdminQuestionMinAggregateOutputType | null
    _max: AdminQuestionMaxAggregateOutputType | null
  }

  export type AdminQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type AdminQuestionMinAggregateOutputType = {
    id: number | null
    question: string | null
  }

  export type AdminQuestionMaxAggregateOutputType = {
    id: number | null
    question: string | null
  }

  export type AdminQuestionCountAggregateOutputType = {
    id: number
    question: number
    _all: number
  }


  export type AdminQuestionAvgAggregateInputType = {
    id?: true
  }

  export type AdminQuestionSumAggregateInputType = {
    id?: true
  }

  export type AdminQuestionMinAggregateInputType = {
    id?: true
    question?: true
  }

  export type AdminQuestionMaxAggregateInputType = {
    id?: true
    question?: true
  }

  export type AdminQuestionCountAggregateInputType = {
    id?: true
    question?: true
    _all?: true
  }

  export type AdminQuestionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminQuestion to aggregate.
     */
    where?: AdminQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminQuestions to fetch.
     */
    orderBy?: AdminQuestionOrderByWithRelationInput | AdminQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminQuestions
    **/
    _count?: true | AdminQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminQuestionMaxAggregateInputType
  }

  export type GetAdminQuestionAggregateType<T extends AdminQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminQuestion[P]>
      : GetScalarType<T[P], AggregateAdminQuestion[P]>
  }




  export type AdminQuestionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AdminQuestionWhereInput
    orderBy?: AdminQuestionOrderByWithAggregationInput | AdminQuestionOrderByWithAggregationInput[]
    by: AdminQuestionScalarFieldEnum[] | AdminQuestionScalarFieldEnum
    having?: AdminQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminQuestionCountAggregateInputType | true
    _avg?: AdminQuestionAvgAggregateInputType
    _sum?: AdminQuestionSumAggregateInputType
    _min?: AdminQuestionMinAggregateInputType
    _max?: AdminQuestionMaxAggregateInputType
  }

  export type AdminQuestionGroupByOutputType = {
    id: number
    question: string
    _count: AdminQuestionCountAggregateOutputType | null
    _avg: AdminQuestionAvgAggregateOutputType | null
    _sum: AdminQuestionSumAggregateOutputType | null
    _min: AdminQuestionMinAggregateOutputType | null
    _max: AdminQuestionMaxAggregateOutputType | null
  }

  type GetAdminQuestionGroupByPayload<T extends AdminQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AdminQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AdminQuestionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
  }, ExtArgs["result"]["adminQuestion"]>

  export type AdminQuestionSelectScalar = {
    id?: boolean
    question?: boolean
  }


  export type $AdminQuestionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "AdminQuestion"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      question: string
    }, ExtArgs["result"]["adminQuestion"]>
    composites: {}
  }


  type AdminQuestionGetPayload<S extends boolean | null | undefined | AdminQuestionDefaultArgs> = $Result.GetResult<Prisma.$AdminQuestionPayload, S>

  type AdminQuestionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AdminQuestionFindManyArgs, 'select' | 'include'> & {
      select?: AdminQuestionCountAggregateInputType | true
    }

  export interface AdminQuestionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminQuestion'], meta: { name: 'AdminQuestion' } }
    /**
     * Find zero or one AdminQuestion that matches the filter.
     * @param {AdminQuestionFindUniqueArgs} args - Arguments to find a AdminQuestion
     * @example
     * // Get one AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminQuestionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdminQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminQuestionFindUniqueOrThrowArgs} args - Arguments to find a AdminQuestion
     * @example
     * // Get one AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminQuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdminQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionFindFirstArgs} args - Arguments to find a AdminQuestion
     * @example
     * // Get one AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminQuestionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionFindFirstArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdminQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionFindFirstOrThrowArgs} args - Arguments to find a AdminQuestion
     * @example
     * // Get one AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminQuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdminQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminQuestions
     * const adminQuestions = await prisma.adminQuestion.findMany()
     * 
     * // Get first 10 AdminQuestions
     * const adminQuestions = await prisma.adminQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminQuestionWithIdOnly = await prisma.adminQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminQuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdminQuestion.
     * @param {AdminQuestionCreateArgs} args - Arguments to create a AdminQuestion.
     * @example
     * // Create one AdminQuestion
     * const AdminQuestion = await prisma.adminQuestion.create({
     *   data: {
     *     // ... data to create a AdminQuestion
     *   }
     * })
     * 
    **/
    create<T extends AdminQuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionCreateArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdminQuestions.
     *     @param {AdminQuestionCreateManyArgs} args - Arguments to create many AdminQuestions.
     *     @example
     *     // Create many AdminQuestions
     *     const adminQuestion = await prisma.adminQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminQuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminQuestion.
     * @param {AdminQuestionDeleteArgs} args - Arguments to delete one AdminQuestion.
     * @example
     * // Delete one AdminQuestion
     * const AdminQuestion = await prisma.adminQuestion.delete({
     *   where: {
     *     // ... filter to delete one AdminQuestion
     *   }
     * })
     * 
    **/
    delete<T extends AdminQuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionDeleteArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdminQuestion.
     * @param {AdminQuestionUpdateArgs} args - Arguments to update one AdminQuestion.
     * @example
     * // Update one AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminQuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionUpdateArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdminQuestions.
     * @param {AdminQuestionDeleteManyArgs} args - Arguments to filter AdminQuestions to delete.
     * @example
     * // Delete a few AdminQuestions
     * const { count } = await prisma.adminQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminQuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminQuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminQuestions
     * const adminQuestion = await prisma.adminQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminQuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminQuestion.
     * @param {AdminQuestionUpsertArgs} args - Arguments to update or create a AdminQuestion.
     * @example
     * // Update or create a AdminQuestion
     * const adminQuestion = await prisma.adminQuestion.upsert({
     *   create: {
     *     // ... data to create a AdminQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends AdminQuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminQuestionUpsertArgs<ExtArgs>>
    ): Prisma__AdminQuestionClient<$Result.GetResult<Prisma.$AdminQuestionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AdminQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionCountArgs} args - Arguments to filter AdminQuestions to count.
     * @example
     * // Count the number of AdminQuestions
     * const count = await prisma.adminQuestion.count({
     *   where: {
     *     // ... the filter for the AdminQuestions we want to count
     *   }
     * })
    **/
    count<T extends AdminQuestionCountArgs>(
      args?: Subset<T, AdminQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminQuestionAggregateArgs>(args: Subset<T, AdminQuestionAggregateArgs>): Prisma.PrismaPromise<GetAdminQuestionAggregateType<T>>

    /**
     * Group by AdminQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AdminQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminQuestion model
   */
  readonly fields: AdminQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminQuestionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AdminQuestion model
   */ 
  interface AdminQuestionFieldRefs {
    readonly id: FieldRef<"AdminQuestion", 'Int'>
    readonly question: FieldRef<"AdminQuestion", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AdminQuestion findUnique
   */
  export type AdminQuestionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter, which AdminQuestion to fetch.
     */
    where: AdminQuestionWhereUniqueInput
  }


  /**
   * AdminQuestion findUniqueOrThrow
   */
  export type AdminQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter, which AdminQuestion to fetch.
     */
    where: AdminQuestionWhereUniqueInput
  }


  /**
   * AdminQuestion findFirst
   */
  export type AdminQuestionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter, which AdminQuestion to fetch.
     */
    where?: AdminQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminQuestions to fetch.
     */
    orderBy?: AdminQuestionOrderByWithRelationInput | AdminQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminQuestions.
     */
    cursor?: AdminQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminQuestions.
     */
    distinct?: AdminQuestionScalarFieldEnum | AdminQuestionScalarFieldEnum[]
  }


  /**
   * AdminQuestion findFirstOrThrow
   */
  export type AdminQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter, which AdminQuestion to fetch.
     */
    where?: AdminQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminQuestions to fetch.
     */
    orderBy?: AdminQuestionOrderByWithRelationInput | AdminQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminQuestions.
     */
    cursor?: AdminQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminQuestions.
     */
    distinct?: AdminQuestionScalarFieldEnum | AdminQuestionScalarFieldEnum[]
  }


  /**
   * AdminQuestion findMany
   */
  export type AdminQuestionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter, which AdminQuestions to fetch.
     */
    where?: AdminQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminQuestions to fetch.
     */
    orderBy?: AdminQuestionOrderByWithRelationInput | AdminQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminQuestions.
     */
    cursor?: AdminQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminQuestions.
     */
    skip?: number
    distinct?: AdminQuestionScalarFieldEnum | AdminQuestionScalarFieldEnum[]
  }


  /**
   * AdminQuestion create
   */
  export type AdminQuestionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminQuestion.
     */
    data: XOR<AdminQuestionCreateInput, AdminQuestionUncheckedCreateInput>
  }


  /**
   * AdminQuestion createMany
   */
  export type AdminQuestionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminQuestions.
     */
    data: AdminQuestionCreateManyInput | AdminQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AdminQuestion update
   */
  export type AdminQuestionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminQuestion.
     */
    data: XOR<AdminQuestionUpdateInput, AdminQuestionUncheckedUpdateInput>
    /**
     * Choose, which AdminQuestion to update.
     */
    where: AdminQuestionWhereUniqueInput
  }


  /**
   * AdminQuestion updateMany
   */
  export type AdminQuestionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminQuestions.
     */
    data: XOR<AdminQuestionUpdateManyMutationInput, AdminQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AdminQuestions to update
     */
    where?: AdminQuestionWhereInput
  }


  /**
   * AdminQuestion upsert
   */
  export type AdminQuestionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminQuestion to update in case it exists.
     */
    where: AdminQuestionWhereUniqueInput
    /**
     * In case the AdminQuestion found by the `where` argument doesn't exist, create a new AdminQuestion with this data.
     */
    create: XOR<AdminQuestionCreateInput, AdminQuestionUncheckedCreateInput>
    /**
     * In case the AdminQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminQuestionUpdateInput, AdminQuestionUncheckedUpdateInput>
  }


  /**
   * AdminQuestion delete
   */
  export type AdminQuestionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
    /**
     * Filter which AdminQuestion to delete.
     */
    where: AdminQuestionWhereUniqueInput
  }


  /**
   * AdminQuestion deleteMany
   */
  export type AdminQuestionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminQuestions to delete
     */
    where?: AdminQuestionWhereInput
  }


  /**
   * AdminQuestion without action
   */
  export type AdminQuestionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminQuestion
     */
    select?: AdminQuestionSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SatisfactionResponseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    response: 'response'
  };

  export type SatisfactionResponseScalarFieldEnum = (typeof SatisfactionResponseScalarFieldEnum)[keyof typeof SatisfactionResponseScalarFieldEnum]


  export const AdminQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question'
  };

  export type AdminQuestionScalarFieldEnum = (typeof AdminQuestionScalarFieldEnum)[keyof typeof AdminQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    satisfactionResponses?: SatisfactionResponseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    satisfactionResponses?: SatisfactionResponseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    satisfactionResponses?: SatisfactionResponseListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SatisfactionResponseWhereInput = {
    AND?: SatisfactionResponseWhereInput | SatisfactionResponseWhereInput[]
    OR?: SatisfactionResponseWhereInput[]
    NOT?: SatisfactionResponseWhereInput | SatisfactionResponseWhereInput[]
    id?: IntFilter<"SatisfactionResponse"> | number
    userId?: IntFilter<"SatisfactionResponse"> | number
    response?: StringFilter<"SatisfactionResponse"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SatisfactionResponseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    response?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SatisfactionResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SatisfactionResponseWhereInput | SatisfactionResponseWhereInput[]
    OR?: SatisfactionResponseWhereInput[]
    NOT?: SatisfactionResponseWhereInput | SatisfactionResponseWhereInput[]
    userId?: IntFilter<"SatisfactionResponse"> | number
    response?: StringFilter<"SatisfactionResponse"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SatisfactionResponseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    response?: SortOrder
    _count?: SatisfactionResponseCountOrderByAggregateInput
    _avg?: SatisfactionResponseAvgOrderByAggregateInput
    _max?: SatisfactionResponseMaxOrderByAggregateInput
    _min?: SatisfactionResponseMinOrderByAggregateInput
    _sum?: SatisfactionResponseSumOrderByAggregateInput
  }

  export type SatisfactionResponseScalarWhereWithAggregatesInput = {
    AND?: SatisfactionResponseScalarWhereWithAggregatesInput | SatisfactionResponseScalarWhereWithAggregatesInput[]
    OR?: SatisfactionResponseScalarWhereWithAggregatesInput[]
    NOT?: SatisfactionResponseScalarWhereWithAggregatesInput | SatisfactionResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SatisfactionResponse"> | number
    userId?: IntWithAggregatesFilter<"SatisfactionResponse"> | number
    response?: StringWithAggregatesFilter<"SatisfactionResponse"> | string
  }

  export type AdminQuestionWhereInput = {
    AND?: AdminQuestionWhereInput | AdminQuestionWhereInput[]
    OR?: AdminQuestionWhereInput[]
    NOT?: AdminQuestionWhereInput | AdminQuestionWhereInput[]
    id?: IntFilter<"AdminQuestion"> | number
    question?: StringFilter<"AdminQuestion"> | string
  }

  export type AdminQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
  }

  export type AdminQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminQuestionWhereInput | AdminQuestionWhereInput[]
    OR?: AdminQuestionWhereInput[]
    NOT?: AdminQuestionWhereInput | AdminQuestionWhereInput[]
    question?: StringFilter<"AdminQuestion"> | string
  }, "id">

  export type AdminQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    _count?: AdminQuestionCountOrderByAggregateInput
    _avg?: AdminQuestionAvgOrderByAggregateInput
    _max?: AdminQuestionMaxOrderByAggregateInput
    _min?: AdminQuestionMinOrderByAggregateInput
    _sum?: AdminQuestionSumOrderByAggregateInput
  }

  export type AdminQuestionScalarWhereWithAggregatesInput = {
    AND?: AdminQuestionScalarWhereWithAggregatesInput | AdminQuestionScalarWhereWithAggregatesInput[]
    OR?: AdminQuestionScalarWhereWithAggregatesInput[]
    NOT?: AdminQuestionScalarWhereWithAggregatesInput | AdminQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminQuestion"> | number
    question?: StringWithAggregatesFilter<"AdminQuestion"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    satisfactionResponses?: SatisfactionResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    satisfactionResponses?: SatisfactionResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    satisfactionResponses?: SatisfactionResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    satisfactionResponses?: SatisfactionResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseCreateInput = {
    response: string
    user: UserCreateNestedOneWithoutSatisfactionResponsesInput
  }

  export type SatisfactionResponseUncheckedCreateInput = {
    id?: number
    userId: number
    response: string
  }

  export type SatisfactionResponseUpdateInput = {
    response?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSatisfactionResponsesNestedInput
  }

  export type SatisfactionResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseCreateManyInput = {
    id?: number
    userId: number
    response: string
  }

  export type SatisfactionResponseUpdateManyMutationInput = {
    response?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
  }

  export type AdminQuestionCreateInput = {
    question: string
  }

  export type AdminQuestionUncheckedCreateInput = {
    id?: number
    question: string
  }

  export type AdminQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
  }

  export type AdminQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type AdminQuestionCreateManyInput = {
    id?: number
    question: string
  }

  export type AdminQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
  }

  export type AdminQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SatisfactionResponseListRelationFilter = {
    every?: SatisfactionResponseWhereInput
    some?: SatisfactionResponseWhereInput
    none?: SatisfactionResponseWhereInput
  }

  export type SatisfactionResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SatisfactionResponseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    response?: SortOrder
  }

  export type SatisfactionResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SatisfactionResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    response?: SortOrder
  }

  export type SatisfactionResponseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    response?: SortOrder
  }

  export type SatisfactionResponseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
  }

  export type AdminQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
  }

  export type AdminQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
  }

  export type AdminQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SatisfactionResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput> | SatisfactionResponseCreateWithoutUserInput[] | SatisfactionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatisfactionResponseCreateOrConnectWithoutUserInput | SatisfactionResponseCreateOrConnectWithoutUserInput[]
    createMany?: SatisfactionResponseCreateManyUserInputEnvelope
    connect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
  }

  export type SatisfactionResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput> | SatisfactionResponseCreateWithoutUserInput[] | SatisfactionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatisfactionResponseCreateOrConnectWithoutUserInput | SatisfactionResponseCreateOrConnectWithoutUserInput[]
    createMany?: SatisfactionResponseCreateManyUserInputEnvelope
    connect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SatisfactionResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput> | SatisfactionResponseCreateWithoutUserInput[] | SatisfactionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatisfactionResponseCreateOrConnectWithoutUserInput | SatisfactionResponseCreateOrConnectWithoutUserInput[]
    upsert?: SatisfactionResponseUpsertWithWhereUniqueWithoutUserInput | SatisfactionResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SatisfactionResponseCreateManyUserInputEnvelope
    set?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    disconnect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    delete?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    connect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    update?: SatisfactionResponseUpdateWithWhereUniqueWithoutUserInput | SatisfactionResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SatisfactionResponseUpdateManyWithWhereWithoutUserInput | SatisfactionResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SatisfactionResponseScalarWhereInput | SatisfactionResponseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SatisfactionResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput> | SatisfactionResponseCreateWithoutUserInput[] | SatisfactionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatisfactionResponseCreateOrConnectWithoutUserInput | SatisfactionResponseCreateOrConnectWithoutUserInput[]
    upsert?: SatisfactionResponseUpsertWithWhereUniqueWithoutUserInput | SatisfactionResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SatisfactionResponseCreateManyUserInputEnvelope
    set?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    disconnect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    delete?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    connect?: SatisfactionResponseWhereUniqueInput | SatisfactionResponseWhereUniqueInput[]
    update?: SatisfactionResponseUpdateWithWhereUniqueWithoutUserInput | SatisfactionResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SatisfactionResponseUpdateManyWithWhereWithoutUserInput | SatisfactionResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SatisfactionResponseScalarWhereInput | SatisfactionResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSatisfactionResponsesInput = {
    create?: XOR<UserCreateWithoutSatisfactionResponsesInput, UserUncheckedCreateWithoutSatisfactionResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSatisfactionResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSatisfactionResponsesNestedInput = {
    create?: XOR<UserCreateWithoutSatisfactionResponsesInput, UserUncheckedCreateWithoutSatisfactionResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSatisfactionResponsesInput
    upsert?: UserUpsertWithoutSatisfactionResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSatisfactionResponsesInput, UserUpdateWithoutSatisfactionResponsesInput>, UserUncheckedUpdateWithoutSatisfactionResponsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SatisfactionResponseCreateWithoutUserInput = {
    response: string
  }

  export type SatisfactionResponseUncheckedCreateWithoutUserInput = {
    id?: number
    response: string
  }

  export type SatisfactionResponseCreateOrConnectWithoutUserInput = {
    where: SatisfactionResponseWhereUniqueInput
    create: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput>
  }

  export type SatisfactionResponseCreateManyUserInputEnvelope = {
    data: SatisfactionResponseCreateManyUserInput | SatisfactionResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SatisfactionResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: SatisfactionResponseWhereUniqueInput
    update: XOR<SatisfactionResponseUpdateWithoutUserInput, SatisfactionResponseUncheckedUpdateWithoutUserInput>
    create: XOR<SatisfactionResponseCreateWithoutUserInput, SatisfactionResponseUncheckedCreateWithoutUserInput>
  }

  export type SatisfactionResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: SatisfactionResponseWhereUniqueInput
    data: XOR<SatisfactionResponseUpdateWithoutUserInput, SatisfactionResponseUncheckedUpdateWithoutUserInput>
  }

  export type SatisfactionResponseUpdateManyWithWhereWithoutUserInput = {
    where: SatisfactionResponseScalarWhereInput
    data: XOR<SatisfactionResponseUpdateManyMutationInput, SatisfactionResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type SatisfactionResponseScalarWhereInput = {
    AND?: SatisfactionResponseScalarWhereInput | SatisfactionResponseScalarWhereInput[]
    OR?: SatisfactionResponseScalarWhereInput[]
    NOT?: SatisfactionResponseScalarWhereInput | SatisfactionResponseScalarWhereInput[]
    id?: IntFilter<"SatisfactionResponse"> | number
    userId?: IntFilter<"SatisfactionResponse"> | number
    response?: StringFilter<"SatisfactionResponse"> | string
  }

  export type UserCreateWithoutSatisfactionResponsesInput = {
    username: string
    password: string
  }

  export type UserUncheckedCreateWithoutSatisfactionResponsesInput = {
    id?: number
    username: string
    password: string
  }

  export type UserCreateOrConnectWithoutSatisfactionResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSatisfactionResponsesInput, UserUncheckedCreateWithoutSatisfactionResponsesInput>
  }

  export type UserUpsertWithoutSatisfactionResponsesInput = {
    update: XOR<UserUpdateWithoutSatisfactionResponsesInput, UserUncheckedUpdateWithoutSatisfactionResponsesInput>
    create: XOR<UserCreateWithoutSatisfactionResponsesInput, UserUncheckedCreateWithoutSatisfactionResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSatisfactionResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSatisfactionResponsesInput, UserUncheckedUpdateWithoutSatisfactionResponsesInput>
  }

  export type UserUpdateWithoutSatisfactionResponsesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSatisfactionResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseCreateManyUserInput = {
    id?: number
    response: string
  }

  export type SatisfactionResponseUpdateWithoutUserInput = {
    response?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfactionResponseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SatisfactionResponseDefaultArgs instead
     */
    export type SatisfactionResponseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SatisfactionResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminQuestionDefaultArgs instead
     */
    export type AdminQuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AdminQuestionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}