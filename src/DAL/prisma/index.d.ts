
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Capteur
 * 
 */
export type Capteur = $Result.DefaultSelection<Prisma.$CapteurPayload>
/**
 * Model CapteurType
 * 
 */
export type CapteurType = $Result.DefaultSelection<Prisma.$CapteurTypePayload>
/**
 * Model ReleverCapteur
 * 
 */
export type ReleverCapteur = $Result.DefaultSelection<Prisma.$ReleverCapteurPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model SiteHasCapteur
 * 
 */
export type SiteHasCapteur = $Result.DefaultSelection<Prisma.$SiteHasCapteurPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capteur`: Exposes CRUD operations for the **Capteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capteurs
    * const capteurs = await prisma.capteur.findMany()
    * ```
    */
  get capteur(): Prisma.CapteurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capteurType`: Exposes CRUD operations for the **CapteurType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapteurTypes
    * const capteurTypes = await prisma.capteurType.findMany()
    * ```
    */
  get capteurType(): Prisma.CapteurTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.releverCapteur`: Exposes CRUD operations for the **ReleverCapteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReleverCapteurs
    * const releverCapteurs = await prisma.releverCapteur.findMany()
    * ```
    */
  get releverCapteur(): Prisma.ReleverCapteurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteHasCapteur`: Exposes CRUD operations for the **SiteHasCapteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteHasCapteurs
    * const siteHasCapteurs = await prisma.siteHasCapteur.findMany()
    * ```
    */
  get siteHasCapteur(): Prisma.SiteHasCapteurDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Users: 'Users',
    Capteur: 'Capteur',
    CapteurType: 'CapteurType',
    ReleverCapteur: 'ReleverCapteur',
    Site: 'Site',
    SiteHasCapteur: 'SiteHasCapteur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "capteur" | "capteurType" | "releverCapteur" | "site" | "siteHasCapteur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Capteur: {
        payload: Prisma.$CapteurPayload<ExtArgs>
        fields: Prisma.CapteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          findFirst: {
            args: Prisma.CapteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          findMany: {
            args: Prisma.CapteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>[]
          }
          create: {
            args: Prisma.CapteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          createMany: {
            args: Prisma.CapteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapteurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>[]
          }
          delete: {
            args: Prisma.CapteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          update: {
            args: Prisma.CapteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          deleteMany: {
            args: Prisma.CapteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapteurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>[]
          }
          upsert: {
            args: Prisma.CapteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurPayload>
          }
          aggregate: {
            args: Prisma.CapteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapteur>
          }
          groupBy: {
            args: Prisma.CapteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapteurCountArgs<ExtArgs>
            result: $Utils.Optional<CapteurCountAggregateOutputType> | number
          }
        }
      }
      CapteurType: {
        payload: Prisma.$CapteurTypePayload<ExtArgs>
        fields: Prisma.CapteurTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapteurTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapteurTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          findFirst: {
            args: Prisma.CapteurTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapteurTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          findMany: {
            args: Prisma.CapteurTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>[]
          }
          create: {
            args: Prisma.CapteurTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          createMany: {
            args: Prisma.CapteurTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapteurTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>[]
          }
          delete: {
            args: Prisma.CapteurTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          update: {
            args: Prisma.CapteurTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          deleteMany: {
            args: Prisma.CapteurTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapteurTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapteurTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>[]
          }
          upsert: {
            args: Prisma.CapteurTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapteurTypePayload>
          }
          aggregate: {
            args: Prisma.CapteurTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapteurType>
          }
          groupBy: {
            args: Prisma.CapteurTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapteurTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapteurTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CapteurTypeCountAggregateOutputType> | number
          }
        }
      }
      ReleverCapteur: {
        payload: Prisma.$ReleverCapteurPayload<ExtArgs>
        fields: Prisma.ReleverCapteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReleverCapteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReleverCapteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          findFirst: {
            args: Prisma.ReleverCapteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReleverCapteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          findMany: {
            args: Prisma.ReleverCapteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>[]
          }
          create: {
            args: Prisma.ReleverCapteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          createMany: {
            args: Prisma.ReleverCapteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReleverCapteurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>[]
          }
          delete: {
            args: Prisma.ReleverCapteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          update: {
            args: Prisma.ReleverCapteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          deleteMany: {
            args: Prisma.ReleverCapteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReleverCapteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReleverCapteurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>[]
          }
          upsert: {
            args: Prisma.ReleverCapteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleverCapteurPayload>
          }
          aggregate: {
            args: Prisma.ReleverCapteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReleverCapteur>
          }
          groupBy: {
            args: Prisma.ReleverCapteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReleverCapteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReleverCapteurCountArgs<ExtArgs>
            result: $Utils.Optional<ReleverCapteurCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      SiteHasCapteur: {
        payload: Prisma.$SiteHasCapteurPayload<ExtArgs>
        fields: Prisma.SiteHasCapteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteHasCapteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteHasCapteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          findFirst: {
            args: Prisma.SiteHasCapteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteHasCapteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          findMany: {
            args: Prisma.SiteHasCapteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>[]
          }
          create: {
            args: Prisma.SiteHasCapteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          createMany: {
            args: Prisma.SiteHasCapteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteHasCapteurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>[]
          }
          delete: {
            args: Prisma.SiteHasCapteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          update: {
            args: Prisma.SiteHasCapteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          deleteMany: {
            args: Prisma.SiteHasCapteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteHasCapteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteHasCapteurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>[]
          }
          upsert: {
            args: Prisma.SiteHasCapteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteHasCapteurPayload>
          }
          aggregate: {
            args: Prisma.SiteHasCapteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteHasCapteur>
          }
          groupBy: {
            args: Prisma.SiteHasCapteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteHasCapteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteHasCapteurCountArgs<ExtArgs>
            result: $Utils.Optional<SiteHasCapteurCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    capteur?: CapteurOmit
    capteurType?: CapteurTypeOmit
    releverCapteur?: ReleverCapteurOmit
    site?: SiteOmit
    siteHasCapteur?: SiteHasCapteurOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CapteurCountOutputType
   */

  export type CapteurCountOutputType = {
    SiteHasCapteurs: number
    RelevesCapteur: number
  }

  export type CapteurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SiteHasCapteurs?: boolean | CapteurCountOutputTypeCountSiteHasCapteursArgs
    RelevesCapteur?: boolean | CapteurCountOutputTypeCountRelevesCapteurArgs
  }

  // Custom InputTypes
  /**
   * CapteurCountOutputType without action
   */
  export type CapteurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurCountOutputType
     */
    select?: CapteurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CapteurCountOutputType without action
   */
  export type CapteurCountOutputTypeCountSiteHasCapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteHasCapteurWhereInput
  }

  /**
   * CapteurCountOutputType without action
   */
  export type CapteurCountOutputTypeCountRelevesCapteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleverCapteurWhereInput
  }


  /**
   * Count Type CapteurTypeCountOutputType
   */

  export type CapteurTypeCountOutputType = {
    Capteurs: number
  }

  export type CapteurTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capteurs?: boolean | CapteurTypeCountOutputTypeCountCapteursArgs
  }

  // Custom InputTypes
  /**
   * CapteurTypeCountOutputType without action
   */
  export type CapteurTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurTypeCountOutputType
     */
    select?: CapteurTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CapteurTypeCountOutputType without action
   */
  export type CapteurTypeCountOutputTypeCountCapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapteurWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    SiteHasCapteurs: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SiteHasCapteurs?: boolean | SiteCountOutputTypeCountSiteHasCapteursArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountSiteHasCapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteHasCapteurWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    salt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    salt: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "salt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      salt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly salt: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Capteur
   */

  export type AggregateCapteur = {
    _count: CapteurCountAggregateOutputType | null
    _min: CapteurMinAggregateOutputType | null
    _max: CapteurMaxAggregateOutputType | null
  }

  export type CapteurMinAggregateOutputType = {
    DevEUI: string | null
    AppEUI: string | null
    IdCapteurType: string | null
    Description: string | null
    Commentaire: string | null
    Name: string | null
    LowBattery: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type CapteurMaxAggregateOutputType = {
    DevEUI: string | null
    AppEUI: string | null
    IdCapteurType: string | null
    Description: string | null
    Commentaire: string | null
    Name: string | null
    LowBattery: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type CapteurCountAggregateOutputType = {
    DevEUI: number
    AppEUI: number
    IdCapteurType: number
    Description: number
    Commentaire: number
    Name: number
    LowBattery: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type CapteurMinAggregateInputType = {
    DevEUI?: true
    AppEUI?: true
    IdCapteurType?: true
    Description?: true
    Commentaire?: true
    Name?: true
    LowBattery?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type CapteurMaxAggregateInputType = {
    DevEUI?: true
    AppEUI?: true
    IdCapteurType?: true
    Description?: true
    Commentaire?: true
    Name?: true
    LowBattery?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type CapteurCountAggregateInputType = {
    DevEUI?: true
    AppEUI?: true
    IdCapteurType?: true
    Description?: true
    Commentaire?: true
    Name?: true
    LowBattery?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type CapteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capteur to aggregate.
     */
    where?: CapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capteurs to fetch.
     */
    orderBy?: CapteurOrderByWithRelationInput | CapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capteurs
    **/
    _count?: true | CapteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapteurMaxAggregateInputType
  }

  export type GetCapteurAggregateType<T extends CapteurAggregateArgs> = {
        [P in keyof T & keyof AggregateCapteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapteur[P]>
      : GetScalarType<T[P], AggregateCapteur[P]>
  }




  export type CapteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapteurWhereInput
    orderBy?: CapteurOrderByWithAggregationInput | CapteurOrderByWithAggregationInput[]
    by: CapteurScalarFieldEnum[] | CapteurScalarFieldEnum
    having?: CapteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapteurCountAggregateInputType | true
    _min?: CapteurMinAggregateInputType
    _max?: CapteurMaxAggregateInputType
  }

  export type CapteurGroupByOutputType = {
    DevEUI: string
    AppEUI: string
    IdCapteurType: string
    Description: string | null
    Commentaire: string | null
    Name: string
    LowBattery: boolean
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: CapteurCountAggregateOutputType | null
    _min: CapteurMinAggregateOutputType | null
    _max: CapteurMaxAggregateOutputType | null
  }

  type GetCapteurGroupByPayload<T extends CapteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapteurGroupByOutputType[P]>
            : GetScalarType<T[P], CapteurGroupByOutputType[P]>
        }
      >
    >


  export type CapteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DevEUI?: boolean
    AppEUI?: boolean
    IdCapteurType?: boolean
    Description?: boolean
    Commentaire?: boolean
    Name?: boolean
    LowBattery?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
    SiteHasCapteurs?: boolean | Capteur$SiteHasCapteursArgs<ExtArgs>
    RelevesCapteur?: boolean | Capteur$RelevesCapteurArgs<ExtArgs>
    _count?: boolean | CapteurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capteur"]>

  export type CapteurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DevEUI?: boolean
    AppEUI?: boolean
    IdCapteurType?: boolean
    Description?: boolean
    Commentaire?: boolean
    Name?: boolean
    LowBattery?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
  }, ExtArgs["result"]["capteur"]>

  export type CapteurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DevEUI?: boolean
    AppEUI?: boolean
    IdCapteurType?: boolean
    Description?: boolean
    Commentaire?: boolean
    Name?: boolean
    LowBattery?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
  }, ExtArgs["result"]["capteur"]>

  export type CapteurSelectScalar = {
    DevEUI?: boolean
    AppEUI?: boolean
    IdCapteurType?: boolean
    Description?: boolean
    Commentaire?: boolean
    Name?: boolean
    LowBattery?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type CapteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DevEUI" | "AppEUI" | "IdCapteurType" | "Description" | "Commentaire" | "Name" | "LowBattery" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["capteur"]>
  export type CapteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
    SiteHasCapteurs?: boolean | Capteur$SiteHasCapteursArgs<ExtArgs>
    RelevesCapteur?: boolean | Capteur$RelevesCapteurArgs<ExtArgs>
    _count?: boolean | CapteurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CapteurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
  }
  export type CapteurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CapteurType?: boolean | Capteur$CapteurTypeArgs<ExtArgs>
  }

  export type $CapteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capteur"
    objects: {
      CapteurType: Prisma.$CapteurTypePayload<ExtArgs> | null
      SiteHasCapteurs: Prisma.$SiteHasCapteurPayload<ExtArgs>[]
      RelevesCapteur: Prisma.$ReleverCapteurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DevEUI: string
      AppEUI: string
      IdCapteurType: string
      Description: string | null
      Commentaire: string | null
      Name: string
      LowBattery: boolean
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["capteur"]>
    composites: {}
  }

  type CapteurGetPayload<S extends boolean | null | undefined | CapteurDefaultArgs> = $Result.GetResult<Prisma.$CapteurPayload, S>

  type CapteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapteurCountAggregateInputType | true
    }

  export interface CapteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capteur'], meta: { name: 'Capteur' } }
    /**
     * Find zero or one Capteur that matches the filter.
     * @param {CapteurFindUniqueArgs} args - Arguments to find a Capteur
     * @example
     * // Get one Capteur
     * const capteur = await prisma.capteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapteurFindUniqueArgs>(args: SelectSubset<T, CapteurFindUniqueArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Capteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapteurFindUniqueOrThrowArgs} args - Arguments to find a Capteur
     * @example
     * // Get one Capteur
     * const capteur = await prisma.capteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapteurFindUniqueOrThrowArgs>(args: SelectSubset<T, CapteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurFindFirstArgs} args - Arguments to find a Capteur
     * @example
     * // Get one Capteur
     * const capteur = await prisma.capteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapteurFindFirstArgs>(args?: SelectSubset<T, CapteurFindFirstArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurFindFirstOrThrowArgs} args - Arguments to find a Capteur
     * @example
     * // Get one Capteur
     * const capteur = await prisma.capteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapteurFindFirstOrThrowArgs>(args?: SelectSubset<T, CapteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capteurs
     * const capteurs = await prisma.capteur.findMany()
     * 
     * // Get first 10 Capteurs
     * const capteurs = await prisma.capteur.findMany({ take: 10 })
     * 
     * // Only select the `DevEUI`
     * const capteurWithDevEUIOnly = await prisma.capteur.findMany({ select: { DevEUI: true } })
     * 
     */
    findMany<T extends CapteurFindManyArgs>(args?: SelectSubset<T, CapteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Capteur.
     * @param {CapteurCreateArgs} args - Arguments to create a Capteur.
     * @example
     * // Create one Capteur
     * const Capteur = await prisma.capteur.create({
     *   data: {
     *     // ... data to create a Capteur
     *   }
     * })
     * 
     */
    create<T extends CapteurCreateArgs>(args: SelectSubset<T, CapteurCreateArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Capteurs.
     * @param {CapteurCreateManyArgs} args - Arguments to create many Capteurs.
     * @example
     * // Create many Capteurs
     * const capteur = await prisma.capteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapteurCreateManyArgs>(args?: SelectSubset<T, CapteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Capteurs and returns the data saved in the database.
     * @param {CapteurCreateManyAndReturnArgs} args - Arguments to create many Capteurs.
     * @example
     * // Create many Capteurs
     * const capteur = await prisma.capteur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Capteurs and only return the `DevEUI`
     * const capteurWithDevEUIOnly = await prisma.capteur.createManyAndReturn({
     *   select: { DevEUI: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapteurCreateManyAndReturnArgs>(args?: SelectSubset<T, CapteurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Capteur.
     * @param {CapteurDeleteArgs} args - Arguments to delete one Capteur.
     * @example
     * // Delete one Capteur
     * const Capteur = await prisma.capteur.delete({
     *   where: {
     *     // ... filter to delete one Capteur
     *   }
     * })
     * 
     */
    delete<T extends CapteurDeleteArgs>(args: SelectSubset<T, CapteurDeleteArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Capteur.
     * @param {CapteurUpdateArgs} args - Arguments to update one Capteur.
     * @example
     * // Update one Capteur
     * const capteur = await prisma.capteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapteurUpdateArgs>(args: SelectSubset<T, CapteurUpdateArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Capteurs.
     * @param {CapteurDeleteManyArgs} args - Arguments to filter Capteurs to delete.
     * @example
     * // Delete a few Capteurs
     * const { count } = await prisma.capteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapteurDeleteManyArgs>(args?: SelectSubset<T, CapteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capteurs
     * const capteur = await prisma.capteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapteurUpdateManyArgs>(args: SelectSubset<T, CapteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capteurs and returns the data updated in the database.
     * @param {CapteurUpdateManyAndReturnArgs} args - Arguments to update many Capteurs.
     * @example
     * // Update many Capteurs
     * const capteur = await prisma.capteur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Capteurs and only return the `DevEUI`
     * const capteurWithDevEUIOnly = await prisma.capteur.updateManyAndReturn({
     *   select: { DevEUI: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapteurUpdateManyAndReturnArgs>(args: SelectSubset<T, CapteurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Capteur.
     * @param {CapteurUpsertArgs} args - Arguments to update or create a Capteur.
     * @example
     * // Update or create a Capteur
     * const capteur = await prisma.capteur.upsert({
     *   create: {
     *     // ... data to create a Capteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capteur we want to update
     *   }
     * })
     */
    upsert<T extends CapteurUpsertArgs>(args: SelectSubset<T, CapteurUpsertArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Capteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurCountArgs} args - Arguments to filter Capteurs to count.
     * @example
     * // Count the number of Capteurs
     * const count = await prisma.capteur.count({
     *   where: {
     *     // ... the filter for the Capteurs we want to count
     *   }
     * })
    **/
    count<T extends CapteurCountArgs>(
      args?: Subset<T, CapteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapteurAggregateArgs>(args: Subset<T, CapteurAggregateArgs>): Prisma.PrismaPromise<GetCapteurAggregateType<T>>

    /**
     * Group by Capteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurGroupByArgs} args - Group by arguments.
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
      T extends CapteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapteurGroupByArgs['orderBy'] }
        : { orderBy?: CapteurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capteur model
   */
  readonly fields: CapteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CapteurType<T extends Capteur$CapteurTypeArgs<ExtArgs> = {}>(args?: Subset<T, Capteur$CapteurTypeArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SiteHasCapteurs<T extends Capteur$SiteHasCapteursArgs<ExtArgs> = {}>(args?: Subset<T, Capteur$SiteHasCapteursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RelevesCapteur<T extends Capteur$RelevesCapteurArgs<ExtArgs> = {}>(args?: Subset<T, Capteur$RelevesCapteurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Capteur model
   */
  interface CapteurFieldRefs {
    readonly DevEUI: FieldRef<"Capteur", 'String'>
    readonly AppEUI: FieldRef<"Capteur", 'String'>
    readonly IdCapteurType: FieldRef<"Capteur", 'String'>
    readonly Description: FieldRef<"Capteur", 'String'>
    readonly Commentaire: FieldRef<"Capteur", 'String'>
    readonly Name: FieldRef<"Capteur", 'String'>
    readonly LowBattery: FieldRef<"Capteur", 'Boolean'>
    readonly CreatedAt: FieldRef<"Capteur", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Capteur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Capteur findUnique
   */
  export type CapteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter, which Capteur to fetch.
     */
    where: CapteurWhereUniqueInput
  }

  /**
   * Capteur findUniqueOrThrow
   */
  export type CapteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter, which Capteur to fetch.
     */
    where: CapteurWhereUniqueInput
  }

  /**
   * Capteur findFirst
   */
  export type CapteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter, which Capteur to fetch.
     */
    where?: CapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capteurs to fetch.
     */
    orderBy?: CapteurOrderByWithRelationInput | CapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capteurs.
     */
    cursor?: CapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capteurs.
     */
    distinct?: CapteurScalarFieldEnum | CapteurScalarFieldEnum[]
  }

  /**
   * Capteur findFirstOrThrow
   */
  export type CapteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter, which Capteur to fetch.
     */
    where?: CapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capteurs to fetch.
     */
    orderBy?: CapteurOrderByWithRelationInput | CapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capteurs.
     */
    cursor?: CapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capteurs.
     */
    distinct?: CapteurScalarFieldEnum | CapteurScalarFieldEnum[]
  }

  /**
   * Capteur findMany
   */
  export type CapteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter, which Capteurs to fetch.
     */
    where?: CapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capteurs to fetch.
     */
    orderBy?: CapteurOrderByWithRelationInput | CapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capteurs.
     */
    cursor?: CapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capteurs.
     */
    skip?: number
    distinct?: CapteurScalarFieldEnum | CapteurScalarFieldEnum[]
  }

  /**
   * Capteur create
   */
  export type CapteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * The data needed to create a Capteur.
     */
    data: XOR<CapteurCreateInput, CapteurUncheckedCreateInput>
  }

  /**
   * Capteur createMany
   */
  export type CapteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capteurs.
     */
    data: CapteurCreateManyInput | CapteurCreateManyInput[]
  }

  /**
   * Capteur createManyAndReturn
   */
  export type CapteurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * The data used to create many Capteurs.
     */
    data: CapteurCreateManyInput | CapteurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Capteur update
   */
  export type CapteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * The data needed to update a Capteur.
     */
    data: XOR<CapteurUpdateInput, CapteurUncheckedUpdateInput>
    /**
     * Choose, which Capteur to update.
     */
    where: CapteurWhereUniqueInput
  }

  /**
   * Capteur updateMany
   */
  export type CapteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capteurs.
     */
    data: XOR<CapteurUpdateManyMutationInput, CapteurUncheckedUpdateManyInput>
    /**
     * Filter which Capteurs to update
     */
    where?: CapteurWhereInput
    /**
     * Limit how many Capteurs to update.
     */
    limit?: number
  }

  /**
   * Capteur updateManyAndReturn
   */
  export type CapteurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * The data used to update Capteurs.
     */
    data: XOR<CapteurUpdateManyMutationInput, CapteurUncheckedUpdateManyInput>
    /**
     * Filter which Capteurs to update
     */
    where?: CapteurWhereInput
    /**
     * Limit how many Capteurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Capteur upsert
   */
  export type CapteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * The filter to search for the Capteur to update in case it exists.
     */
    where: CapteurWhereUniqueInput
    /**
     * In case the Capteur found by the `where` argument doesn't exist, create a new Capteur with this data.
     */
    create: XOR<CapteurCreateInput, CapteurUncheckedCreateInput>
    /**
     * In case the Capteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapteurUpdateInput, CapteurUncheckedUpdateInput>
  }

  /**
   * Capteur delete
   */
  export type CapteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    /**
     * Filter which Capteur to delete.
     */
    where: CapteurWhereUniqueInput
  }

  /**
   * Capteur deleteMany
   */
  export type CapteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capteurs to delete
     */
    where?: CapteurWhereInput
    /**
     * Limit how many Capteurs to delete.
     */
    limit?: number
  }

  /**
   * Capteur.CapteurType
   */
  export type Capteur$CapteurTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    where?: CapteurTypeWhereInput
  }

  /**
   * Capteur.SiteHasCapteurs
   */
  export type Capteur$SiteHasCapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    where?: SiteHasCapteurWhereInput
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    cursor?: SiteHasCapteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteHasCapteurScalarFieldEnum | SiteHasCapteurScalarFieldEnum[]
  }

  /**
   * Capteur.RelevesCapteur
   */
  export type Capteur$RelevesCapteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    where?: ReleverCapteurWhereInput
    orderBy?: ReleverCapteurOrderByWithRelationInput | ReleverCapteurOrderByWithRelationInput[]
    cursor?: ReleverCapteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReleverCapteurScalarFieldEnum | ReleverCapteurScalarFieldEnum[]
  }

  /**
   * Capteur without action
   */
  export type CapteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
  }


  /**
   * Model CapteurType
   */

  export type AggregateCapteurType = {
    _count: CapteurTypeCountAggregateOutputType | null
    _min: CapteurTypeMinAggregateOutputType | null
    _max: CapteurTypeMaxAggregateOutputType | null
  }

  export type CapteurTypeMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Type: string | null
    ModelName: string | null
    Module: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type CapteurTypeMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Type: string | null
    ModelName: string | null
    Module: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type CapteurTypeCountAggregateOutputType = {
    Id: number
    Name: number
    Type: number
    ModelName: number
    Module: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type CapteurTypeMinAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    ModelName?: true
    Module?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type CapteurTypeMaxAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    ModelName?: true
    Module?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type CapteurTypeCountAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    ModelName?: true
    Module?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type CapteurTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapteurType to aggregate.
     */
    where?: CapteurTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurTypes to fetch.
     */
    orderBy?: CapteurTypeOrderByWithRelationInput | CapteurTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapteurTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapteurTypes
    **/
    _count?: true | CapteurTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapteurTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapteurTypeMaxAggregateInputType
  }

  export type GetCapteurTypeAggregateType<T extends CapteurTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCapteurType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapteurType[P]>
      : GetScalarType<T[P], AggregateCapteurType[P]>
  }




  export type CapteurTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapteurTypeWhereInput
    orderBy?: CapteurTypeOrderByWithAggregationInput | CapteurTypeOrderByWithAggregationInput[]
    by: CapteurTypeScalarFieldEnum[] | CapteurTypeScalarFieldEnum
    having?: CapteurTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapteurTypeCountAggregateInputType | true
    _min?: CapteurTypeMinAggregateInputType
    _max?: CapteurTypeMaxAggregateInputType
  }

  export type CapteurTypeGroupByOutputType = {
    Id: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: CapteurTypeCountAggregateOutputType | null
    _min: CapteurTypeMinAggregateOutputType | null
    _max: CapteurTypeMaxAggregateOutputType | null
  }

  type GetCapteurTypeGroupByPayload<T extends CapteurTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapteurTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapteurTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapteurTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CapteurTypeGroupByOutputType[P]>
        }
      >
    >


  export type CapteurTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Type?: boolean
    ModelName?: boolean
    Module?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Capteurs?: boolean | CapteurType$CapteursArgs<ExtArgs>
    _count?: boolean | CapteurTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capteurType"]>

  export type CapteurTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Type?: boolean
    ModelName?: boolean
    Module?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["capteurType"]>

  export type CapteurTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Type?: boolean
    ModelName?: boolean
    Module?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["capteurType"]>

  export type CapteurTypeSelectScalar = {
    Id?: boolean
    Name?: boolean
    Type?: boolean
    ModelName?: boolean
    Module?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type CapteurTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Type" | "ModelName" | "Module" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["capteurType"]>
  export type CapteurTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capteurs?: boolean | CapteurType$CapteursArgs<ExtArgs>
    _count?: boolean | CapteurTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CapteurTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CapteurTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CapteurTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapteurType"
    objects: {
      Capteurs: Prisma.$CapteurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Type: string
      ModelName: string
      Module: string
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["capteurType"]>
    composites: {}
  }

  type CapteurTypeGetPayload<S extends boolean | null | undefined | CapteurTypeDefaultArgs> = $Result.GetResult<Prisma.$CapteurTypePayload, S>

  type CapteurTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapteurTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapteurTypeCountAggregateInputType | true
    }

  export interface CapteurTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapteurType'], meta: { name: 'CapteurType' } }
    /**
     * Find zero or one CapteurType that matches the filter.
     * @param {CapteurTypeFindUniqueArgs} args - Arguments to find a CapteurType
     * @example
     * // Get one CapteurType
     * const capteurType = await prisma.capteurType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapteurTypeFindUniqueArgs>(args: SelectSubset<T, CapteurTypeFindUniqueArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CapteurType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapteurTypeFindUniqueOrThrowArgs} args - Arguments to find a CapteurType
     * @example
     * // Get one CapteurType
     * const capteurType = await prisma.capteurType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapteurTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CapteurTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapteurType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeFindFirstArgs} args - Arguments to find a CapteurType
     * @example
     * // Get one CapteurType
     * const capteurType = await prisma.capteurType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapteurTypeFindFirstArgs>(args?: SelectSubset<T, CapteurTypeFindFirstArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CapteurType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeFindFirstOrThrowArgs} args - Arguments to find a CapteurType
     * @example
     * // Get one CapteurType
     * const capteurType = await prisma.capteurType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapteurTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CapteurTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CapteurTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapteurTypes
     * const capteurTypes = await prisma.capteurType.findMany()
     * 
     * // Get first 10 CapteurTypes
     * const capteurTypes = await prisma.capteurType.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const capteurTypeWithIdOnly = await prisma.capteurType.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CapteurTypeFindManyArgs>(args?: SelectSubset<T, CapteurTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CapteurType.
     * @param {CapteurTypeCreateArgs} args - Arguments to create a CapteurType.
     * @example
     * // Create one CapteurType
     * const CapteurType = await prisma.capteurType.create({
     *   data: {
     *     // ... data to create a CapteurType
     *   }
     * })
     * 
     */
    create<T extends CapteurTypeCreateArgs>(args: SelectSubset<T, CapteurTypeCreateArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CapteurTypes.
     * @param {CapteurTypeCreateManyArgs} args - Arguments to create many CapteurTypes.
     * @example
     * // Create many CapteurTypes
     * const capteurType = await prisma.capteurType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapteurTypeCreateManyArgs>(args?: SelectSubset<T, CapteurTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CapteurTypes and returns the data saved in the database.
     * @param {CapteurTypeCreateManyAndReturnArgs} args - Arguments to create many CapteurTypes.
     * @example
     * // Create many CapteurTypes
     * const capteurType = await prisma.capteurType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CapteurTypes and only return the `Id`
     * const capteurTypeWithIdOnly = await prisma.capteurType.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapteurTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, CapteurTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CapteurType.
     * @param {CapteurTypeDeleteArgs} args - Arguments to delete one CapteurType.
     * @example
     * // Delete one CapteurType
     * const CapteurType = await prisma.capteurType.delete({
     *   where: {
     *     // ... filter to delete one CapteurType
     *   }
     * })
     * 
     */
    delete<T extends CapteurTypeDeleteArgs>(args: SelectSubset<T, CapteurTypeDeleteArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CapteurType.
     * @param {CapteurTypeUpdateArgs} args - Arguments to update one CapteurType.
     * @example
     * // Update one CapteurType
     * const capteurType = await prisma.capteurType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapteurTypeUpdateArgs>(args: SelectSubset<T, CapteurTypeUpdateArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CapteurTypes.
     * @param {CapteurTypeDeleteManyArgs} args - Arguments to filter CapteurTypes to delete.
     * @example
     * // Delete a few CapteurTypes
     * const { count } = await prisma.capteurType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapteurTypeDeleteManyArgs>(args?: SelectSubset<T, CapteurTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapteurTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapteurTypes
     * const capteurType = await prisma.capteurType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapteurTypeUpdateManyArgs>(args: SelectSubset<T, CapteurTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapteurTypes and returns the data updated in the database.
     * @param {CapteurTypeUpdateManyAndReturnArgs} args - Arguments to update many CapteurTypes.
     * @example
     * // Update many CapteurTypes
     * const capteurType = await prisma.capteurType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CapteurTypes and only return the `Id`
     * const capteurTypeWithIdOnly = await prisma.capteurType.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapteurTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, CapteurTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CapteurType.
     * @param {CapteurTypeUpsertArgs} args - Arguments to update or create a CapteurType.
     * @example
     * // Update or create a CapteurType
     * const capteurType = await prisma.capteurType.upsert({
     *   create: {
     *     // ... data to create a CapteurType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapteurType we want to update
     *   }
     * })
     */
    upsert<T extends CapteurTypeUpsertArgs>(args: SelectSubset<T, CapteurTypeUpsertArgs<ExtArgs>>): Prisma__CapteurTypeClient<$Result.GetResult<Prisma.$CapteurTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CapteurTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeCountArgs} args - Arguments to filter CapteurTypes to count.
     * @example
     * // Count the number of CapteurTypes
     * const count = await prisma.capteurType.count({
     *   where: {
     *     // ... the filter for the CapteurTypes we want to count
     *   }
     * })
    **/
    count<T extends CapteurTypeCountArgs>(
      args?: Subset<T, CapteurTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapteurTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapteurType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapteurTypeAggregateArgs>(args: Subset<T, CapteurTypeAggregateArgs>): Prisma.PrismaPromise<GetCapteurTypeAggregateType<T>>

    /**
     * Group by CapteurType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapteurTypeGroupByArgs} args - Group by arguments.
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
      T extends CapteurTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapteurTypeGroupByArgs['orderBy'] }
        : { orderBy?: CapteurTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapteurTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapteurTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapteurType model
   */
  readonly fields: CapteurTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapteurType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapteurTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Capteurs<T extends CapteurType$CapteursArgs<ExtArgs> = {}>(args?: Subset<T, CapteurType$CapteursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CapteurType model
   */
  interface CapteurTypeFieldRefs {
    readonly Id: FieldRef<"CapteurType", 'String'>
    readonly Name: FieldRef<"CapteurType", 'String'>
    readonly Type: FieldRef<"CapteurType", 'String'>
    readonly ModelName: FieldRef<"CapteurType", 'String'>
    readonly Module: FieldRef<"CapteurType", 'String'>
    readonly CreatedAt: FieldRef<"CapteurType", 'DateTime'>
    readonly UpdatedAt: FieldRef<"CapteurType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CapteurType findUnique
   */
  export type CapteurTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter, which CapteurType to fetch.
     */
    where: CapteurTypeWhereUniqueInput
  }

  /**
   * CapteurType findUniqueOrThrow
   */
  export type CapteurTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter, which CapteurType to fetch.
     */
    where: CapteurTypeWhereUniqueInput
  }

  /**
   * CapteurType findFirst
   */
  export type CapteurTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter, which CapteurType to fetch.
     */
    where?: CapteurTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurTypes to fetch.
     */
    orderBy?: CapteurTypeOrderByWithRelationInput | CapteurTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapteurTypes.
     */
    cursor?: CapteurTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapteurTypes.
     */
    distinct?: CapteurTypeScalarFieldEnum | CapteurTypeScalarFieldEnum[]
  }

  /**
   * CapteurType findFirstOrThrow
   */
  export type CapteurTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter, which CapteurType to fetch.
     */
    where?: CapteurTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurTypes to fetch.
     */
    orderBy?: CapteurTypeOrderByWithRelationInput | CapteurTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapteurTypes.
     */
    cursor?: CapteurTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapteurTypes.
     */
    distinct?: CapteurTypeScalarFieldEnum | CapteurTypeScalarFieldEnum[]
  }

  /**
   * CapteurType findMany
   */
  export type CapteurTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter, which CapteurTypes to fetch.
     */
    where?: CapteurTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapteurTypes to fetch.
     */
    orderBy?: CapteurTypeOrderByWithRelationInput | CapteurTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapteurTypes.
     */
    cursor?: CapteurTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapteurTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapteurTypes.
     */
    skip?: number
    distinct?: CapteurTypeScalarFieldEnum | CapteurTypeScalarFieldEnum[]
  }

  /**
   * CapteurType create
   */
  export type CapteurTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CapteurType.
     */
    data: XOR<CapteurTypeCreateInput, CapteurTypeUncheckedCreateInput>
  }

  /**
   * CapteurType createMany
   */
  export type CapteurTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapteurTypes.
     */
    data: CapteurTypeCreateManyInput | CapteurTypeCreateManyInput[]
  }

  /**
   * CapteurType createManyAndReturn
   */
  export type CapteurTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * The data used to create many CapteurTypes.
     */
    data: CapteurTypeCreateManyInput | CapteurTypeCreateManyInput[]
  }

  /**
   * CapteurType update
   */
  export type CapteurTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CapteurType.
     */
    data: XOR<CapteurTypeUpdateInput, CapteurTypeUncheckedUpdateInput>
    /**
     * Choose, which CapteurType to update.
     */
    where: CapteurTypeWhereUniqueInput
  }

  /**
   * CapteurType updateMany
   */
  export type CapteurTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapteurTypes.
     */
    data: XOR<CapteurTypeUpdateManyMutationInput, CapteurTypeUncheckedUpdateManyInput>
    /**
     * Filter which CapteurTypes to update
     */
    where?: CapteurTypeWhereInput
    /**
     * Limit how many CapteurTypes to update.
     */
    limit?: number
  }

  /**
   * CapteurType updateManyAndReturn
   */
  export type CapteurTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * The data used to update CapteurTypes.
     */
    data: XOR<CapteurTypeUpdateManyMutationInput, CapteurTypeUncheckedUpdateManyInput>
    /**
     * Filter which CapteurTypes to update
     */
    where?: CapteurTypeWhereInput
    /**
     * Limit how many CapteurTypes to update.
     */
    limit?: number
  }

  /**
   * CapteurType upsert
   */
  export type CapteurTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CapteurType to update in case it exists.
     */
    where: CapteurTypeWhereUniqueInput
    /**
     * In case the CapteurType found by the `where` argument doesn't exist, create a new CapteurType with this data.
     */
    create: XOR<CapteurTypeCreateInput, CapteurTypeUncheckedCreateInput>
    /**
     * In case the CapteurType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapteurTypeUpdateInput, CapteurTypeUncheckedUpdateInput>
  }

  /**
   * CapteurType delete
   */
  export type CapteurTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
    /**
     * Filter which CapteurType to delete.
     */
    where: CapteurTypeWhereUniqueInput
  }

  /**
   * CapteurType deleteMany
   */
  export type CapteurTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapteurTypes to delete
     */
    where?: CapteurTypeWhereInput
    /**
     * Limit how many CapteurTypes to delete.
     */
    limit?: number
  }

  /**
   * CapteurType.Capteurs
   */
  export type CapteurType$CapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    where?: CapteurWhereInput
    orderBy?: CapteurOrderByWithRelationInput | CapteurOrderByWithRelationInput[]
    cursor?: CapteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapteurScalarFieldEnum | CapteurScalarFieldEnum[]
  }

  /**
   * CapteurType without action
   */
  export type CapteurTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapteurType
     */
    select?: CapteurTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CapteurType
     */
    omit?: CapteurTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurTypeInclude<ExtArgs> | null
  }


  /**
   * Model ReleverCapteur
   */

  export type AggregateReleverCapteur = {
    _count: ReleverCapteurCountAggregateOutputType | null
    _avg: ReleverCapteurAvgAggregateOutputType | null
    _sum: ReleverCapteurSumAggregateOutputType | null
    _min: ReleverCapteurMinAggregateOutputType | null
    _max: ReleverCapteurMaxAggregateOutputType | null
  }

  export type ReleverCapteurAvgAggregateOutputType = {
    Value: number | null
    ValueRaw: number | null
  }

  export type ReleverCapteurSumAggregateOutputType = {
    Value: number | null
    ValueRaw: number | null
  }

  export type ReleverCapteurMinAggregateOutputType = {
    Id: string | null
    DevEUI: string | null
    Value: number | null
    ValueRaw: number | null
    ValueType: string | null
    ValueTypeRaw: string | null
    Time: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ReleverCapteurMaxAggregateOutputType = {
    Id: string | null
    DevEUI: string | null
    Value: number | null
    ValueRaw: number | null
    ValueType: string | null
    ValueTypeRaw: string | null
    Time: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ReleverCapteurCountAggregateOutputType = {
    Id: number
    DevEUI: number
    Value: number
    ValueRaw: number
    ValueType: number
    ValueTypeRaw: number
    Time: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type ReleverCapteurAvgAggregateInputType = {
    Value?: true
    ValueRaw?: true
  }

  export type ReleverCapteurSumAggregateInputType = {
    Value?: true
    ValueRaw?: true
  }

  export type ReleverCapteurMinAggregateInputType = {
    Id?: true
    DevEUI?: true
    Value?: true
    ValueRaw?: true
    ValueType?: true
    ValueTypeRaw?: true
    Time?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ReleverCapteurMaxAggregateInputType = {
    Id?: true
    DevEUI?: true
    Value?: true
    ValueRaw?: true
    ValueType?: true
    ValueTypeRaw?: true
    Time?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ReleverCapteurCountAggregateInputType = {
    Id?: true
    DevEUI?: true
    Value?: true
    ValueRaw?: true
    ValueType?: true
    ValueTypeRaw?: true
    Time?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type ReleverCapteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleverCapteur to aggregate.
     */
    where?: ReleverCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleverCapteurs to fetch.
     */
    orderBy?: ReleverCapteurOrderByWithRelationInput | ReleverCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReleverCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleverCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleverCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReleverCapteurs
    **/
    _count?: true | ReleverCapteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReleverCapteurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReleverCapteurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReleverCapteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReleverCapteurMaxAggregateInputType
  }

  export type GetReleverCapteurAggregateType<T extends ReleverCapteurAggregateArgs> = {
        [P in keyof T & keyof AggregateReleverCapteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReleverCapteur[P]>
      : GetScalarType<T[P], AggregateReleverCapteur[P]>
  }




  export type ReleverCapteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleverCapteurWhereInput
    orderBy?: ReleverCapteurOrderByWithAggregationInput | ReleverCapteurOrderByWithAggregationInput[]
    by: ReleverCapteurScalarFieldEnum[] | ReleverCapteurScalarFieldEnum
    having?: ReleverCapteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReleverCapteurCountAggregateInputType | true
    _avg?: ReleverCapteurAvgAggregateInputType
    _sum?: ReleverCapteurSumAggregateInputType
    _min?: ReleverCapteurMinAggregateInputType
    _max?: ReleverCapteurMaxAggregateInputType
  }

  export type ReleverCapteurGroupByOutputType = {
    Id: string
    DevEUI: string
    Value: number | null
    ValueRaw: number
    ValueType: string | null
    ValueTypeRaw: string | null
    Time: Date
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: ReleverCapteurCountAggregateOutputType | null
    _avg: ReleverCapteurAvgAggregateOutputType | null
    _sum: ReleverCapteurSumAggregateOutputType | null
    _min: ReleverCapteurMinAggregateOutputType | null
    _max: ReleverCapteurMaxAggregateOutputType | null
  }

  type GetReleverCapteurGroupByPayload<T extends ReleverCapteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReleverCapteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReleverCapteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReleverCapteurGroupByOutputType[P]>
            : GetScalarType<T[P], ReleverCapteurGroupByOutputType[P]>
        }
      >
    >


  export type ReleverCapteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    DevEUI?: boolean
    Value?: boolean
    ValueRaw?: boolean
    ValueType?: boolean
    ValueTypeRaw?: boolean
    Time?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }, ExtArgs["result"]["releverCapteur"]>

  export type ReleverCapteurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    DevEUI?: boolean
    Value?: boolean
    ValueRaw?: boolean
    ValueType?: boolean
    ValueTypeRaw?: boolean
    Time?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }, ExtArgs["result"]["releverCapteur"]>

  export type ReleverCapteurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    DevEUI?: boolean
    Value?: boolean
    ValueRaw?: boolean
    ValueType?: boolean
    ValueTypeRaw?: boolean
    Time?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }, ExtArgs["result"]["releverCapteur"]>

  export type ReleverCapteurSelectScalar = {
    Id?: boolean
    DevEUI?: boolean
    Value?: boolean
    ValueRaw?: boolean
    ValueType?: boolean
    ValueTypeRaw?: boolean
    Time?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type ReleverCapteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "DevEUI" | "Value" | "ValueRaw" | "ValueType" | "ValueTypeRaw" | "Time" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["releverCapteur"]>
  export type ReleverCapteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }
  export type ReleverCapteurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }
  export type ReleverCapteurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Capteur?: boolean | ReleverCapteur$CapteurArgs<ExtArgs>
  }

  export type $ReleverCapteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReleverCapteur"
    objects: {
      Capteur: Prisma.$CapteurPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      DevEUI: string
      Value: number | null
      ValueRaw: number
      ValueType: string | null
      ValueTypeRaw: string | null
      Time: Date
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["releverCapteur"]>
    composites: {}
  }

  type ReleverCapteurGetPayload<S extends boolean | null | undefined | ReleverCapteurDefaultArgs> = $Result.GetResult<Prisma.$ReleverCapteurPayload, S>

  type ReleverCapteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReleverCapteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReleverCapteurCountAggregateInputType | true
    }

  export interface ReleverCapteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReleverCapteur'], meta: { name: 'ReleverCapteur' } }
    /**
     * Find zero or one ReleverCapteur that matches the filter.
     * @param {ReleverCapteurFindUniqueArgs} args - Arguments to find a ReleverCapteur
     * @example
     * // Get one ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReleverCapteurFindUniqueArgs>(args: SelectSubset<T, ReleverCapteurFindUniqueArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReleverCapteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReleverCapteurFindUniqueOrThrowArgs} args - Arguments to find a ReleverCapteur
     * @example
     * // Get one ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReleverCapteurFindUniqueOrThrowArgs>(args: SelectSubset<T, ReleverCapteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReleverCapteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurFindFirstArgs} args - Arguments to find a ReleverCapteur
     * @example
     * // Get one ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReleverCapteurFindFirstArgs>(args?: SelectSubset<T, ReleverCapteurFindFirstArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReleverCapteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurFindFirstOrThrowArgs} args - Arguments to find a ReleverCapteur
     * @example
     * // Get one ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReleverCapteurFindFirstOrThrowArgs>(args?: SelectSubset<T, ReleverCapteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReleverCapteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReleverCapteurs
     * const releverCapteurs = await prisma.releverCapteur.findMany()
     * 
     * // Get first 10 ReleverCapteurs
     * const releverCapteurs = await prisma.releverCapteur.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const releverCapteurWithIdOnly = await prisma.releverCapteur.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ReleverCapteurFindManyArgs>(args?: SelectSubset<T, ReleverCapteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReleverCapteur.
     * @param {ReleverCapteurCreateArgs} args - Arguments to create a ReleverCapteur.
     * @example
     * // Create one ReleverCapteur
     * const ReleverCapteur = await prisma.releverCapteur.create({
     *   data: {
     *     // ... data to create a ReleverCapteur
     *   }
     * })
     * 
     */
    create<T extends ReleverCapteurCreateArgs>(args: SelectSubset<T, ReleverCapteurCreateArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReleverCapteurs.
     * @param {ReleverCapteurCreateManyArgs} args - Arguments to create many ReleverCapteurs.
     * @example
     * // Create many ReleverCapteurs
     * const releverCapteur = await prisma.releverCapteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReleverCapteurCreateManyArgs>(args?: SelectSubset<T, ReleverCapteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReleverCapteurs and returns the data saved in the database.
     * @param {ReleverCapteurCreateManyAndReturnArgs} args - Arguments to create many ReleverCapteurs.
     * @example
     * // Create many ReleverCapteurs
     * const releverCapteur = await prisma.releverCapteur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReleverCapteurs and only return the `Id`
     * const releverCapteurWithIdOnly = await prisma.releverCapteur.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReleverCapteurCreateManyAndReturnArgs>(args?: SelectSubset<T, ReleverCapteurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReleverCapteur.
     * @param {ReleverCapteurDeleteArgs} args - Arguments to delete one ReleverCapteur.
     * @example
     * // Delete one ReleverCapteur
     * const ReleverCapteur = await prisma.releverCapteur.delete({
     *   where: {
     *     // ... filter to delete one ReleverCapteur
     *   }
     * })
     * 
     */
    delete<T extends ReleverCapteurDeleteArgs>(args: SelectSubset<T, ReleverCapteurDeleteArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReleverCapteur.
     * @param {ReleverCapteurUpdateArgs} args - Arguments to update one ReleverCapteur.
     * @example
     * // Update one ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReleverCapteurUpdateArgs>(args: SelectSubset<T, ReleverCapteurUpdateArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReleverCapteurs.
     * @param {ReleverCapteurDeleteManyArgs} args - Arguments to filter ReleverCapteurs to delete.
     * @example
     * // Delete a few ReleverCapteurs
     * const { count } = await prisma.releverCapteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReleverCapteurDeleteManyArgs>(args?: SelectSubset<T, ReleverCapteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleverCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReleverCapteurs
     * const releverCapteur = await prisma.releverCapteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReleverCapteurUpdateManyArgs>(args: SelectSubset<T, ReleverCapteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleverCapteurs and returns the data updated in the database.
     * @param {ReleverCapteurUpdateManyAndReturnArgs} args - Arguments to update many ReleverCapteurs.
     * @example
     * // Update many ReleverCapteurs
     * const releverCapteur = await prisma.releverCapteur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReleverCapteurs and only return the `Id`
     * const releverCapteurWithIdOnly = await prisma.releverCapteur.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReleverCapteurUpdateManyAndReturnArgs>(args: SelectSubset<T, ReleverCapteurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReleverCapteur.
     * @param {ReleverCapteurUpsertArgs} args - Arguments to update or create a ReleverCapteur.
     * @example
     * // Update or create a ReleverCapteur
     * const releverCapteur = await prisma.releverCapteur.upsert({
     *   create: {
     *     // ... data to create a ReleverCapteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReleverCapteur we want to update
     *   }
     * })
     */
    upsert<T extends ReleverCapteurUpsertArgs>(args: SelectSubset<T, ReleverCapteurUpsertArgs<ExtArgs>>): Prisma__ReleverCapteurClient<$Result.GetResult<Prisma.$ReleverCapteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReleverCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurCountArgs} args - Arguments to filter ReleverCapteurs to count.
     * @example
     * // Count the number of ReleverCapteurs
     * const count = await prisma.releverCapteur.count({
     *   where: {
     *     // ... the filter for the ReleverCapteurs we want to count
     *   }
     * })
    **/
    count<T extends ReleverCapteurCountArgs>(
      args?: Subset<T, ReleverCapteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReleverCapteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReleverCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReleverCapteurAggregateArgs>(args: Subset<T, ReleverCapteurAggregateArgs>): Prisma.PrismaPromise<GetReleverCapteurAggregateType<T>>

    /**
     * Group by ReleverCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleverCapteurGroupByArgs} args - Group by arguments.
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
      T extends ReleverCapteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReleverCapteurGroupByArgs['orderBy'] }
        : { orderBy?: ReleverCapteurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReleverCapteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReleverCapteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReleverCapteur model
   */
  readonly fields: ReleverCapteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReleverCapteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReleverCapteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Capteur<T extends ReleverCapteur$CapteurArgs<ExtArgs> = {}>(args?: Subset<T, ReleverCapteur$CapteurArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReleverCapteur model
   */
  interface ReleverCapteurFieldRefs {
    readonly Id: FieldRef<"ReleverCapteur", 'String'>
    readonly DevEUI: FieldRef<"ReleverCapteur", 'String'>
    readonly Value: FieldRef<"ReleverCapteur", 'Float'>
    readonly ValueRaw: FieldRef<"ReleverCapteur", 'Float'>
    readonly ValueType: FieldRef<"ReleverCapteur", 'String'>
    readonly ValueTypeRaw: FieldRef<"ReleverCapteur", 'String'>
    readonly Time: FieldRef<"ReleverCapteur", 'DateTime'>
    readonly CreatedAt: FieldRef<"ReleverCapteur", 'DateTime'>
    readonly UpdatedAt: FieldRef<"ReleverCapteur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReleverCapteur findUnique
   */
  export type ReleverCapteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter, which ReleverCapteur to fetch.
     */
    where: ReleverCapteurWhereUniqueInput
  }

  /**
   * ReleverCapteur findUniqueOrThrow
   */
  export type ReleverCapteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter, which ReleverCapteur to fetch.
     */
    where: ReleverCapteurWhereUniqueInput
  }

  /**
   * ReleverCapteur findFirst
   */
  export type ReleverCapteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter, which ReleverCapteur to fetch.
     */
    where?: ReleverCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleverCapteurs to fetch.
     */
    orderBy?: ReleverCapteurOrderByWithRelationInput | ReleverCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleverCapteurs.
     */
    cursor?: ReleverCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleverCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleverCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleverCapteurs.
     */
    distinct?: ReleverCapteurScalarFieldEnum | ReleverCapteurScalarFieldEnum[]
  }

  /**
   * ReleverCapteur findFirstOrThrow
   */
  export type ReleverCapteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter, which ReleverCapteur to fetch.
     */
    where?: ReleverCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleverCapteurs to fetch.
     */
    orderBy?: ReleverCapteurOrderByWithRelationInput | ReleverCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleverCapteurs.
     */
    cursor?: ReleverCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleverCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleverCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleverCapteurs.
     */
    distinct?: ReleverCapteurScalarFieldEnum | ReleverCapteurScalarFieldEnum[]
  }

  /**
   * ReleverCapteur findMany
   */
  export type ReleverCapteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter, which ReleverCapteurs to fetch.
     */
    where?: ReleverCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleverCapteurs to fetch.
     */
    orderBy?: ReleverCapteurOrderByWithRelationInput | ReleverCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReleverCapteurs.
     */
    cursor?: ReleverCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleverCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleverCapteurs.
     */
    skip?: number
    distinct?: ReleverCapteurScalarFieldEnum | ReleverCapteurScalarFieldEnum[]
  }

  /**
   * ReleverCapteur create
   */
  export type ReleverCapteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * The data needed to create a ReleverCapteur.
     */
    data: XOR<ReleverCapteurCreateInput, ReleverCapteurUncheckedCreateInput>
  }

  /**
   * ReleverCapteur createMany
   */
  export type ReleverCapteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReleverCapteurs.
     */
    data: ReleverCapteurCreateManyInput | ReleverCapteurCreateManyInput[]
  }

  /**
   * ReleverCapteur createManyAndReturn
   */
  export type ReleverCapteurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * The data used to create many ReleverCapteurs.
     */
    data: ReleverCapteurCreateManyInput | ReleverCapteurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleverCapteur update
   */
  export type ReleverCapteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * The data needed to update a ReleverCapteur.
     */
    data: XOR<ReleverCapteurUpdateInput, ReleverCapteurUncheckedUpdateInput>
    /**
     * Choose, which ReleverCapteur to update.
     */
    where: ReleverCapteurWhereUniqueInput
  }

  /**
   * ReleverCapteur updateMany
   */
  export type ReleverCapteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReleverCapteurs.
     */
    data: XOR<ReleverCapteurUpdateManyMutationInput, ReleverCapteurUncheckedUpdateManyInput>
    /**
     * Filter which ReleverCapteurs to update
     */
    where?: ReleverCapteurWhereInput
    /**
     * Limit how many ReleverCapteurs to update.
     */
    limit?: number
  }

  /**
   * ReleverCapteur updateManyAndReturn
   */
  export type ReleverCapteurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * The data used to update ReleverCapteurs.
     */
    data: XOR<ReleverCapteurUpdateManyMutationInput, ReleverCapteurUncheckedUpdateManyInput>
    /**
     * Filter which ReleverCapteurs to update
     */
    where?: ReleverCapteurWhereInput
    /**
     * Limit how many ReleverCapteurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleverCapteur upsert
   */
  export type ReleverCapteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * The filter to search for the ReleverCapteur to update in case it exists.
     */
    where: ReleverCapteurWhereUniqueInput
    /**
     * In case the ReleverCapteur found by the `where` argument doesn't exist, create a new ReleverCapteur with this data.
     */
    create: XOR<ReleverCapteurCreateInput, ReleverCapteurUncheckedCreateInput>
    /**
     * In case the ReleverCapteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReleverCapteurUpdateInput, ReleverCapteurUncheckedUpdateInput>
  }

  /**
   * ReleverCapteur delete
   */
  export type ReleverCapteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
    /**
     * Filter which ReleverCapteur to delete.
     */
    where: ReleverCapteurWhereUniqueInput
  }

  /**
   * ReleverCapteur deleteMany
   */
  export type ReleverCapteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleverCapteurs to delete
     */
    where?: ReleverCapteurWhereInput
    /**
     * Limit how many ReleverCapteurs to delete.
     */
    limit?: number
  }

  /**
   * ReleverCapteur.Capteur
   */
  export type ReleverCapteur$CapteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capteur
     */
    select?: CapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capteur
     */
    omit?: CapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapteurInclude<ExtArgs> | null
    where?: CapteurWhereInput
  }

  /**
   * ReleverCapteur without action
   */
  export type ReleverCapteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleverCapteur
     */
    select?: ReleverCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleverCapteur
     */
    omit?: ReleverCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleverCapteurInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    Id: number
    Name: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    Id: string
    Name: string
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    SiteHasCapteurs?: boolean | Site$SiteHasCapteursArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SiteHasCapteurs?: boolean | Site$SiteHasCapteursArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      SiteHasCapteurs: Prisma.$SiteHasCapteurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `Id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `Id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SiteHasCapteurs<T extends Site$SiteHasCapteursArgs<ExtArgs> = {}>(args?: Subset<T, Site$SiteHasCapteursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly Id: FieldRef<"Site", 'String'>
    readonly Name: FieldRef<"Site", 'String'>
    readonly CreatedAt: FieldRef<"Site", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.SiteHasCapteurs
   */
  export type Site$SiteHasCapteursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    where?: SiteHasCapteurWhereInput
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    cursor?: SiteHasCapteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteHasCapteurScalarFieldEnum | SiteHasCapteurScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model SiteHasCapteur
   */

  export type AggregateSiteHasCapteur = {
    _count: SiteHasCapteurCountAggregateOutputType | null
    _min: SiteHasCapteurMinAggregateOutputType | null
    _max: SiteHasCapteurMaxAggregateOutputType | null
  }

  export type SiteHasCapteurMinAggregateOutputType = {
    IdSite: string | null
    DevEUI: string | null
    Commentaire: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SiteHasCapteurMaxAggregateOutputType = {
    IdSite: string | null
    DevEUI: string | null
    Commentaire: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SiteHasCapteurCountAggregateOutputType = {
    IdSite: number
    DevEUI: number
    Commentaire: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type SiteHasCapteurMinAggregateInputType = {
    IdSite?: true
    DevEUI?: true
    Commentaire?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SiteHasCapteurMaxAggregateInputType = {
    IdSite?: true
    DevEUI?: true
    Commentaire?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SiteHasCapteurCountAggregateInputType = {
    IdSite?: true
    DevEUI?: true
    Commentaire?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type SiteHasCapteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteHasCapteur to aggregate.
     */
    where?: SiteHasCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteHasCapteurs to fetch.
     */
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteHasCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteHasCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteHasCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteHasCapteurs
    **/
    _count?: true | SiteHasCapteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteHasCapteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteHasCapteurMaxAggregateInputType
  }

  export type GetSiteHasCapteurAggregateType<T extends SiteHasCapteurAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteHasCapteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteHasCapteur[P]>
      : GetScalarType<T[P], AggregateSiteHasCapteur[P]>
  }




  export type SiteHasCapteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteHasCapteurWhereInput
    orderBy?: SiteHasCapteurOrderByWithAggregationInput | SiteHasCapteurOrderByWithAggregationInput[]
    by: SiteHasCapteurScalarFieldEnum[] | SiteHasCapteurScalarFieldEnum
    having?: SiteHasCapteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteHasCapteurCountAggregateInputType | true
    _min?: SiteHasCapteurMinAggregateInputType
    _max?: SiteHasCapteurMaxAggregateInputType
  }

  export type SiteHasCapteurGroupByOutputType = {
    IdSite: string
    DevEUI: string
    Commentaire: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: SiteHasCapteurCountAggregateOutputType | null
    _min: SiteHasCapteurMinAggregateOutputType | null
    _max: SiteHasCapteurMaxAggregateOutputType | null
  }

  type GetSiteHasCapteurGroupByPayload<T extends SiteHasCapteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteHasCapteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteHasCapteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteHasCapteurGroupByOutputType[P]>
            : GetScalarType<T[P], SiteHasCapteurGroupByOutputType[P]>
        }
      >
    >


  export type SiteHasCapteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdSite?: boolean
    DevEUI?: boolean
    Commentaire?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteHasCapteur"]>

  export type SiteHasCapteurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdSite?: boolean
    DevEUI?: boolean
    Commentaire?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteHasCapteur"]>

  export type SiteHasCapteurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdSite?: boolean
    DevEUI?: boolean
    Commentaire?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteHasCapteur"]>

  export type SiteHasCapteurSelectScalar = {
    IdSite?: boolean
    DevEUI?: boolean
    Commentaire?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type SiteHasCapteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdSite" | "DevEUI" | "Commentaire" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["siteHasCapteur"]>
  export type SiteHasCapteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }
  export type SiteHasCapteurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }
  export type SiteHasCapteurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Site?: boolean | SiteDefaultArgs<ExtArgs>
    Capteur?: boolean | CapteurDefaultArgs<ExtArgs>
  }

  export type $SiteHasCapteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteHasCapteur"
    objects: {
      Site: Prisma.$SitePayload<ExtArgs>
      Capteur: Prisma.$CapteurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdSite: string
      DevEUI: string
      Commentaire: string | null
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["siteHasCapteur"]>
    composites: {}
  }

  type SiteHasCapteurGetPayload<S extends boolean | null | undefined | SiteHasCapteurDefaultArgs> = $Result.GetResult<Prisma.$SiteHasCapteurPayload, S>

  type SiteHasCapteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteHasCapteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteHasCapteurCountAggregateInputType | true
    }

  export interface SiteHasCapteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteHasCapteur'], meta: { name: 'SiteHasCapteur' } }
    /**
     * Find zero or one SiteHasCapteur that matches the filter.
     * @param {SiteHasCapteurFindUniqueArgs} args - Arguments to find a SiteHasCapteur
     * @example
     * // Get one SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteHasCapteurFindUniqueArgs>(args: SelectSubset<T, SiteHasCapteurFindUniqueArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteHasCapteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteHasCapteurFindUniqueOrThrowArgs} args - Arguments to find a SiteHasCapteur
     * @example
     * // Get one SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteHasCapteurFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteHasCapteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteHasCapteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurFindFirstArgs} args - Arguments to find a SiteHasCapteur
     * @example
     * // Get one SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteHasCapteurFindFirstArgs>(args?: SelectSubset<T, SiteHasCapteurFindFirstArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteHasCapteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurFindFirstOrThrowArgs} args - Arguments to find a SiteHasCapteur
     * @example
     * // Get one SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteHasCapteurFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteHasCapteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteHasCapteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteHasCapteurs
     * const siteHasCapteurs = await prisma.siteHasCapteur.findMany()
     * 
     * // Get first 10 SiteHasCapteurs
     * const siteHasCapteurs = await prisma.siteHasCapteur.findMany({ take: 10 })
     * 
     * // Only select the `IdSite`
     * const siteHasCapteurWithIdSiteOnly = await prisma.siteHasCapteur.findMany({ select: { IdSite: true } })
     * 
     */
    findMany<T extends SiteHasCapteurFindManyArgs>(args?: SelectSubset<T, SiteHasCapteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteHasCapteur.
     * @param {SiteHasCapteurCreateArgs} args - Arguments to create a SiteHasCapteur.
     * @example
     * // Create one SiteHasCapteur
     * const SiteHasCapteur = await prisma.siteHasCapteur.create({
     *   data: {
     *     // ... data to create a SiteHasCapteur
     *   }
     * })
     * 
     */
    create<T extends SiteHasCapteurCreateArgs>(args: SelectSubset<T, SiteHasCapteurCreateArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteHasCapteurs.
     * @param {SiteHasCapteurCreateManyArgs} args - Arguments to create many SiteHasCapteurs.
     * @example
     * // Create many SiteHasCapteurs
     * const siteHasCapteur = await prisma.siteHasCapteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteHasCapteurCreateManyArgs>(args?: SelectSubset<T, SiteHasCapteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteHasCapteurs and returns the data saved in the database.
     * @param {SiteHasCapteurCreateManyAndReturnArgs} args - Arguments to create many SiteHasCapteurs.
     * @example
     * // Create many SiteHasCapteurs
     * const siteHasCapteur = await prisma.siteHasCapteur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteHasCapteurs and only return the `IdSite`
     * const siteHasCapteurWithIdSiteOnly = await prisma.siteHasCapteur.createManyAndReturn({
     *   select: { IdSite: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteHasCapteurCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteHasCapteurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteHasCapteur.
     * @param {SiteHasCapteurDeleteArgs} args - Arguments to delete one SiteHasCapteur.
     * @example
     * // Delete one SiteHasCapteur
     * const SiteHasCapteur = await prisma.siteHasCapteur.delete({
     *   where: {
     *     // ... filter to delete one SiteHasCapteur
     *   }
     * })
     * 
     */
    delete<T extends SiteHasCapteurDeleteArgs>(args: SelectSubset<T, SiteHasCapteurDeleteArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteHasCapteur.
     * @param {SiteHasCapteurUpdateArgs} args - Arguments to update one SiteHasCapteur.
     * @example
     * // Update one SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteHasCapteurUpdateArgs>(args: SelectSubset<T, SiteHasCapteurUpdateArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteHasCapteurs.
     * @param {SiteHasCapteurDeleteManyArgs} args - Arguments to filter SiteHasCapteurs to delete.
     * @example
     * // Delete a few SiteHasCapteurs
     * const { count } = await prisma.siteHasCapteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteHasCapteurDeleteManyArgs>(args?: SelectSubset<T, SiteHasCapteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteHasCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteHasCapteurs
     * const siteHasCapteur = await prisma.siteHasCapteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteHasCapteurUpdateManyArgs>(args: SelectSubset<T, SiteHasCapteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteHasCapteurs and returns the data updated in the database.
     * @param {SiteHasCapteurUpdateManyAndReturnArgs} args - Arguments to update many SiteHasCapteurs.
     * @example
     * // Update many SiteHasCapteurs
     * const siteHasCapteur = await prisma.siteHasCapteur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteHasCapteurs and only return the `IdSite`
     * const siteHasCapteurWithIdSiteOnly = await prisma.siteHasCapteur.updateManyAndReturn({
     *   select: { IdSite: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteHasCapteurUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteHasCapteurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteHasCapteur.
     * @param {SiteHasCapteurUpsertArgs} args - Arguments to update or create a SiteHasCapteur.
     * @example
     * // Update or create a SiteHasCapteur
     * const siteHasCapteur = await prisma.siteHasCapteur.upsert({
     *   create: {
     *     // ... data to create a SiteHasCapteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteHasCapteur we want to update
     *   }
     * })
     */
    upsert<T extends SiteHasCapteurUpsertArgs>(args: SelectSubset<T, SiteHasCapteurUpsertArgs<ExtArgs>>): Prisma__SiteHasCapteurClient<$Result.GetResult<Prisma.$SiteHasCapteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteHasCapteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurCountArgs} args - Arguments to filter SiteHasCapteurs to count.
     * @example
     * // Count the number of SiteHasCapteurs
     * const count = await prisma.siteHasCapteur.count({
     *   where: {
     *     // ... the filter for the SiteHasCapteurs we want to count
     *   }
     * })
    **/
    count<T extends SiteHasCapteurCountArgs>(
      args?: Subset<T, SiteHasCapteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteHasCapteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteHasCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteHasCapteurAggregateArgs>(args: Subset<T, SiteHasCapteurAggregateArgs>): Prisma.PrismaPromise<GetSiteHasCapteurAggregateType<T>>

    /**
     * Group by SiteHasCapteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteHasCapteurGroupByArgs} args - Group by arguments.
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
      T extends SiteHasCapteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteHasCapteurGroupByArgs['orderBy'] }
        : { orderBy?: SiteHasCapteurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteHasCapteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteHasCapteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteHasCapteur model
   */
  readonly fields: SiteHasCapteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteHasCapteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteHasCapteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Capteur<T extends CapteurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CapteurDefaultArgs<ExtArgs>>): Prisma__CapteurClient<$Result.GetResult<Prisma.$CapteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteHasCapteur model
   */
  interface SiteHasCapteurFieldRefs {
    readonly IdSite: FieldRef<"SiteHasCapteur", 'String'>
    readonly DevEUI: FieldRef<"SiteHasCapteur", 'String'>
    readonly Commentaire: FieldRef<"SiteHasCapteur", 'String'>
    readonly CreatedAt: FieldRef<"SiteHasCapteur", 'DateTime'>
    readonly UpdatedAt: FieldRef<"SiteHasCapteur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteHasCapteur findUnique
   */
  export type SiteHasCapteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter, which SiteHasCapteur to fetch.
     */
    where: SiteHasCapteurWhereUniqueInput
  }

  /**
   * SiteHasCapteur findUniqueOrThrow
   */
  export type SiteHasCapteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter, which SiteHasCapteur to fetch.
     */
    where: SiteHasCapteurWhereUniqueInput
  }

  /**
   * SiteHasCapteur findFirst
   */
  export type SiteHasCapteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter, which SiteHasCapteur to fetch.
     */
    where?: SiteHasCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteHasCapteurs to fetch.
     */
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteHasCapteurs.
     */
    cursor?: SiteHasCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteHasCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteHasCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteHasCapteurs.
     */
    distinct?: SiteHasCapteurScalarFieldEnum | SiteHasCapteurScalarFieldEnum[]
  }

  /**
   * SiteHasCapteur findFirstOrThrow
   */
  export type SiteHasCapteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter, which SiteHasCapteur to fetch.
     */
    where?: SiteHasCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteHasCapteurs to fetch.
     */
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteHasCapteurs.
     */
    cursor?: SiteHasCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteHasCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteHasCapteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteHasCapteurs.
     */
    distinct?: SiteHasCapteurScalarFieldEnum | SiteHasCapteurScalarFieldEnum[]
  }

  /**
   * SiteHasCapteur findMany
   */
  export type SiteHasCapteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter, which SiteHasCapteurs to fetch.
     */
    where?: SiteHasCapteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteHasCapteurs to fetch.
     */
    orderBy?: SiteHasCapteurOrderByWithRelationInput | SiteHasCapteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteHasCapteurs.
     */
    cursor?: SiteHasCapteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteHasCapteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteHasCapteurs.
     */
    skip?: number
    distinct?: SiteHasCapteurScalarFieldEnum | SiteHasCapteurScalarFieldEnum[]
  }

  /**
   * SiteHasCapteur create
   */
  export type SiteHasCapteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteHasCapteur.
     */
    data: XOR<SiteHasCapteurCreateInput, SiteHasCapteurUncheckedCreateInput>
  }

  /**
   * SiteHasCapteur createMany
   */
  export type SiteHasCapteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteHasCapteurs.
     */
    data: SiteHasCapteurCreateManyInput | SiteHasCapteurCreateManyInput[]
  }

  /**
   * SiteHasCapteur createManyAndReturn
   */
  export type SiteHasCapteurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * The data used to create many SiteHasCapteurs.
     */
    data: SiteHasCapteurCreateManyInput | SiteHasCapteurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteHasCapteur update
   */
  export type SiteHasCapteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteHasCapteur.
     */
    data: XOR<SiteHasCapteurUpdateInput, SiteHasCapteurUncheckedUpdateInput>
    /**
     * Choose, which SiteHasCapteur to update.
     */
    where: SiteHasCapteurWhereUniqueInput
  }

  /**
   * SiteHasCapteur updateMany
   */
  export type SiteHasCapteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteHasCapteurs.
     */
    data: XOR<SiteHasCapteurUpdateManyMutationInput, SiteHasCapteurUncheckedUpdateManyInput>
    /**
     * Filter which SiteHasCapteurs to update
     */
    where?: SiteHasCapteurWhereInput
    /**
     * Limit how many SiteHasCapteurs to update.
     */
    limit?: number
  }

  /**
   * SiteHasCapteur updateManyAndReturn
   */
  export type SiteHasCapteurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * The data used to update SiteHasCapteurs.
     */
    data: XOR<SiteHasCapteurUpdateManyMutationInput, SiteHasCapteurUncheckedUpdateManyInput>
    /**
     * Filter which SiteHasCapteurs to update
     */
    where?: SiteHasCapteurWhereInput
    /**
     * Limit how many SiteHasCapteurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteHasCapteur upsert
   */
  export type SiteHasCapteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteHasCapteur to update in case it exists.
     */
    where: SiteHasCapteurWhereUniqueInput
    /**
     * In case the SiteHasCapteur found by the `where` argument doesn't exist, create a new SiteHasCapteur with this data.
     */
    create: XOR<SiteHasCapteurCreateInput, SiteHasCapteurUncheckedCreateInput>
    /**
     * In case the SiteHasCapteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteHasCapteurUpdateInput, SiteHasCapteurUncheckedUpdateInput>
  }

  /**
   * SiteHasCapteur delete
   */
  export type SiteHasCapteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
    /**
     * Filter which SiteHasCapteur to delete.
     */
    where: SiteHasCapteurWhereUniqueInput
  }

  /**
   * SiteHasCapteur deleteMany
   */
  export type SiteHasCapteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteHasCapteurs to delete
     */
    where?: SiteHasCapteurWhereInput
    /**
     * Limit how many SiteHasCapteurs to delete.
     */
    limit?: number
  }

  /**
   * SiteHasCapteur without action
   */
  export type SiteHasCapteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteHasCapteur
     */
    select?: SiteHasCapteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteHasCapteur
     */
    omit?: SiteHasCapteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteHasCapteurInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    salt: 'salt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CapteurScalarFieldEnum: {
    DevEUI: 'DevEUI',
    AppEUI: 'AppEUI',
    IdCapteurType: 'IdCapteurType',
    Description: 'Description',
    Commentaire: 'Commentaire',
    Name: 'Name',
    LowBattery: 'LowBattery',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type CapteurScalarFieldEnum = (typeof CapteurScalarFieldEnum)[keyof typeof CapteurScalarFieldEnum]


  export const CapteurTypeScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Type: 'Type',
    ModelName: 'ModelName',
    Module: 'Module',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type CapteurTypeScalarFieldEnum = (typeof CapteurTypeScalarFieldEnum)[keyof typeof CapteurTypeScalarFieldEnum]


  export const ReleverCapteurScalarFieldEnum: {
    Id: 'Id',
    DevEUI: 'DevEUI',
    Value: 'Value',
    ValueRaw: 'ValueRaw',
    ValueType: 'ValueType',
    ValueTypeRaw: 'ValueTypeRaw',
    Time: 'Time',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type ReleverCapteurScalarFieldEnum = (typeof ReleverCapteurScalarFieldEnum)[keyof typeof ReleverCapteurScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SiteHasCapteurScalarFieldEnum: {
    IdSite: 'IdSite',
    DevEUI: 'DevEUI',
    Commentaire: 'Commentaire',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type SiteHasCapteurScalarFieldEnum = (typeof SiteHasCapteurScalarFieldEnum)[keyof typeof SiteHasCapteurScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    salt?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    salt?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    salt?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CapteurWhereInput = {
    AND?: CapteurWhereInput | CapteurWhereInput[]
    OR?: CapteurWhereInput[]
    NOT?: CapteurWhereInput | CapteurWhereInput[]
    DevEUI?: StringFilter<"Capteur"> | string
    AppEUI?: StringFilter<"Capteur"> | string
    IdCapteurType?: StringFilter<"Capteur"> | string
    Description?: StringNullableFilter<"Capteur"> | string | null
    Commentaire?: StringNullableFilter<"Capteur"> | string | null
    Name?: StringFilter<"Capteur"> | string
    LowBattery?: BoolFilter<"Capteur"> | boolean
    CreatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
    CapteurType?: XOR<CapteurTypeNullableScalarRelationFilter, CapteurTypeWhereInput> | null
    SiteHasCapteurs?: SiteHasCapteurListRelationFilter
    RelevesCapteur?: ReleverCapteurListRelationFilter
  }

  export type CapteurOrderByWithRelationInput = {
    DevEUI?: SortOrder
    AppEUI?: SortOrder
    IdCapteurType?: SortOrder
    Description?: SortOrderInput | SortOrder
    Commentaire?: SortOrderInput | SortOrder
    Name?: SortOrder
    LowBattery?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    CapteurType?: CapteurTypeOrderByWithRelationInput
    SiteHasCapteurs?: SiteHasCapteurOrderByRelationAggregateInput
    RelevesCapteur?: ReleverCapteurOrderByRelationAggregateInput
  }

  export type CapteurWhereUniqueInput = Prisma.AtLeast<{
    DevEUI?: string
    AND?: CapteurWhereInput | CapteurWhereInput[]
    OR?: CapteurWhereInput[]
    NOT?: CapteurWhereInput | CapteurWhereInput[]
    AppEUI?: StringFilter<"Capteur"> | string
    IdCapteurType?: StringFilter<"Capteur"> | string
    Description?: StringNullableFilter<"Capteur"> | string | null
    Commentaire?: StringNullableFilter<"Capteur"> | string | null
    Name?: StringFilter<"Capteur"> | string
    LowBattery?: BoolFilter<"Capteur"> | boolean
    CreatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
    CapteurType?: XOR<CapteurTypeNullableScalarRelationFilter, CapteurTypeWhereInput> | null
    SiteHasCapteurs?: SiteHasCapteurListRelationFilter
    RelevesCapteur?: ReleverCapteurListRelationFilter
  }, "DevEUI">

  export type CapteurOrderByWithAggregationInput = {
    DevEUI?: SortOrder
    AppEUI?: SortOrder
    IdCapteurType?: SortOrder
    Description?: SortOrderInput | SortOrder
    Commentaire?: SortOrderInput | SortOrder
    Name?: SortOrder
    LowBattery?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: CapteurCountOrderByAggregateInput
    _max?: CapteurMaxOrderByAggregateInput
    _min?: CapteurMinOrderByAggregateInput
  }

  export type CapteurScalarWhereWithAggregatesInput = {
    AND?: CapteurScalarWhereWithAggregatesInput | CapteurScalarWhereWithAggregatesInput[]
    OR?: CapteurScalarWhereWithAggregatesInput[]
    NOT?: CapteurScalarWhereWithAggregatesInput | CapteurScalarWhereWithAggregatesInput[]
    DevEUI?: StringWithAggregatesFilter<"Capteur"> | string
    AppEUI?: StringWithAggregatesFilter<"Capteur"> | string
    IdCapteurType?: StringWithAggregatesFilter<"Capteur"> | string
    Description?: StringNullableWithAggregatesFilter<"Capteur"> | string | null
    Commentaire?: StringNullableWithAggregatesFilter<"Capteur"> | string | null
    Name?: StringWithAggregatesFilter<"Capteur"> | string
    LowBattery?: BoolWithAggregatesFilter<"Capteur"> | boolean
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Capteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Capteur"> | Date | string | null
  }

  export type CapteurTypeWhereInput = {
    AND?: CapteurTypeWhereInput | CapteurTypeWhereInput[]
    OR?: CapteurTypeWhereInput[]
    NOT?: CapteurTypeWhereInput | CapteurTypeWhereInput[]
    Id?: StringFilter<"CapteurType"> | string
    Name?: StringFilter<"CapteurType"> | string
    Type?: StringFilter<"CapteurType"> | string
    ModelName?: StringFilter<"CapteurType"> | string
    Module?: StringFilter<"CapteurType"> | string
    CreatedAt?: DateTimeNullableFilter<"CapteurType"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"CapteurType"> | Date | string | null
    Capteurs?: CapteurListRelationFilter
  }

  export type CapteurTypeOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    ModelName?: SortOrder
    Module?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Capteurs?: CapteurOrderByRelationAggregateInput
  }

  export type CapteurTypeWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: CapteurTypeWhereInput | CapteurTypeWhereInput[]
    OR?: CapteurTypeWhereInput[]
    NOT?: CapteurTypeWhereInput | CapteurTypeWhereInput[]
    Name?: StringFilter<"CapteurType"> | string
    Type?: StringFilter<"CapteurType"> | string
    ModelName?: StringFilter<"CapteurType"> | string
    Module?: StringFilter<"CapteurType"> | string
    CreatedAt?: DateTimeNullableFilter<"CapteurType"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"CapteurType"> | Date | string | null
    Capteurs?: CapteurListRelationFilter
  }, "Id">

  export type CapteurTypeOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    ModelName?: SortOrder
    Module?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: CapteurTypeCountOrderByAggregateInput
    _max?: CapteurTypeMaxOrderByAggregateInput
    _min?: CapteurTypeMinOrderByAggregateInput
  }

  export type CapteurTypeScalarWhereWithAggregatesInput = {
    AND?: CapteurTypeScalarWhereWithAggregatesInput | CapteurTypeScalarWhereWithAggregatesInput[]
    OR?: CapteurTypeScalarWhereWithAggregatesInput[]
    NOT?: CapteurTypeScalarWhereWithAggregatesInput | CapteurTypeScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"CapteurType"> | string
    Name?: StringWithAggregatesFilter<"CapteurType"> | string
    Type?: StringWithAggregatesFilter<"CapteurType"> | string
    ModelName?: StringWithAggregatesFilter<"CapteurType"> | string
    Module?: StringWithAggregatesFilter<"CapteurType"> | string
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"CapteurType"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"CapteurType"> | Date | string | null
  }

  export type ReleverCapteurWhereInput = {
    AND?: ReleverCapteurWhereInput | ReleverCapteurWhereInput[]
    OR?: ReleverCapteurWhereInput[]
    NOT?: ReleverCapteurWhereInput | ReleverCapteurWhereInput[]
    Id?: StringFilter<"ReleverCapteur"> | string
    DevEUI?: StringFilter<"ReleverCapteur"> | string
    Value?: FloatNullableFilter<"ReleverCapteur"> | number | null
    ValueRaw?: FloatFilter<"ReleverCapteur"> | number
    ValueType?: StringNullableFilter<"ReleverCapteur"> | string | null
    ValueTypeRaw?: StringNullableFilter<"ReleverCapteur"> | string | null
    Time?: DateTimeFilter<"ReleverCapteur"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
    Capteur?: XOR<CapteurNullableScalarRelationFilter, CapteurWhereInput> | null
  }

  export type ReleverCapteurOrderByWithRelationInput = {
    Id?: SortOrder
    DevEUI?: SortOrder
    Value?: SortOrderInput | SortOrder
    ValueRaw?: SortOrder
    ValueType?: SortOrderInput | SortOrder
    ValueTypeRaw?: SortOrderInput | SortOrder
    Time?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Capteur?: CapteurOrderByWithRelationInput
  }

  export type ReleverCapteurWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: ReleverCapteurWhereInput | ReleverCapteurWhereInput[]
    OR?: ReleverCapteurWhereInput[]
    NOT?: ReleverCapteurWhereInput | ReleverCapteurWhereInput[]
    DevEUI?: StringFilter<"ReleverCapteur"> | string
    Value?: FloatNullableFilter<"ReleverCapteur"> | number | null
    ValueRaw?: FloatFilter<"ReleverCapteur"> | number
    ValueType?: StringNullableFilter<"ReleverCapteur"> | string | null
    ValueTypeRaw?: StringNullableFilter<"ReleverCapteur"> | string | null
    Time?: DateTimeFilter<"ReleverCapteur"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
    Capteur?: XOR<CapteurNullableScalarRelationFilter, CapteurWhereInput> | null
  }, "Id">

  export type ReleverCapteurOrderByWithAggregationInput = {
    Id?: SortOrder
    DevEUI?: SortOrder
    Value?: SortOrderInput | SortOrder
    ValueRaw?: SortOrder
    ValueType?: SortOrderInput | SortOrder
    ValueTypeRaw?: SortOrderInput | SortOrder
    Time?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: ReleverCapteurCountOrderByAggregateInput
    _avg?: ReleverCapteurAvgOrderByAggregateInput
    _max?: ReleverCapteurMaxOrderByAggregateInput
    _min?: ReleverCapteurMinOrderByAggregateInput
    _sum?: ReleverCapteurSumOrderByAggregateInput
  }

  export type ReleverCapteurScalarWhereWithAggregatesInput = {
    AND?: ReleverCapteurScalarWhereWithAggregatesInput | ReleverCapteurScalarWhereWithAggregatesInput[]
    OR?: ReleverCapteurScalarWhereWithAggregatesInput[]
    NOT?: ReleverCapteurScalarWhereWithAggregatesInput | ReleverCapteurScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"ReleverCapteur"> | string
    DevEUI?: StringWithAggregatesFilter<"ReleverCapteur"> | string
    Value?: FloatNullableWithAggregatesFilter<"ReleverCapteur"> | number | null
    ValueRaw?: FloatWithAggregatesFilter<"ReleverCapteur"> | number
    ValueType?: StringNullableWithAggregatesFilter<"ReleverCapteur"> | string | null
    ValueTypeRaw?: StringNullableWithAggregatesFilter<"ReleverCapteur"> | string | null
    Time?: DateTimeWithAggregatesFilter<"ReleverCapteur"> | Date | string
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"ReleverCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"ReleverCapteur"> | Date | string | null
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    Id?: StringFilter<"Site"> | string
    Name?: StringFilter<"Site"> | string
    CreatedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    SiteHasCapteurs?: SiteHasCapteurOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    Name?: StringFilter<"Site"> | string
    CreatedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurListRelationFilter
  }, "Id">

  export type SiteOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Site"> | string
    Name?: StringWithAggregatesFilter<"Site"> | string
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Site"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Site"> | Date | string | null
  }

  export type SiteHasCapteurWhereInput = {
    AND?: SiteHasCapteurWhereInput | SiteHasCapteurWhereInput[]
    OR?: SiteHasCapteurWhereInput[]
    NOT?: SiteHasCapteurWhereInput | SiteHasCapteurWhereInput[]
    IdSite?: StringFilter<"SiteHasCapteur"> | string
    DevEUI?: StringFilter<"SiteHasCapteur"> | string
    Commentaire?: StringNullableFilter<"SiteHasCapteur"> | string | null
    CreatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
    Site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    Capteur?: XOR<CapteurScalarRelationFilter, CapteurWhereInput>
  }

  export type SiteHasCapteurOrderByWithRelationInput = {
    IdSite?: SortOrder
    DevEUI?: SortOrder
    Commentaire?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Site?: SiteOrderByWithRelationInput
    Capteur?: CapteurOrderByWithRelationInput
  }

  export type SiteHasCapteurWhereUniqueInput = Prisma.AtLeast<{
    IdSite_DevEUI?: SiteHasCapteurIdSiteDevEUICompoundUniqueInput
    AND?: SiteHasCapteurWhereInput | SiteHasCapteurWhereInput[]
    OR?: SiteHasCapteurWhereInput[]
    NOT?: SiteHasCapteurWhereInput | SiteHasCapteurWhereInput[]
    IdSite?: StringFilter<"SiteHasCapteur"> | string
    DevEUI?: StringFilter<"SiteHasCapteur"> | string
    Commentaire?: StringNullableFilter<"SiteHasCapteur"> | string | null
    CreatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
    Site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    Capteur?: XOR<CapteurScalarRelationFilter, CapteurWhereInput>
  }, "IdSite_DevEUI">

  export type SiteHasCapteurOrderByWithAggregationInput = {
    IdSite?: SortOrder
    DevEUI?: SortOrder
    Commentaire?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: SiteHasCapteurCountOrderByAggregateInput
    _max?: SiteHasCapteurMaxOrderByAggregateInput
    _min?: SiteHasCapteurMinOrderByAggregateInput
  }

  export type SiteHasCapteurScalarWhereWithAggregatesInput = {
    AND?: SiteHasCapteurScalarWhereWithAggregatesInput | SiteHasCapteurScalarWhereWithAggregatesInput[]
    OR?: SiteHasCapteurScalarWhereWithAggregatesInput[]
    NOT?: SiteHasCapteurScalarWhereWithAggregatesInput | SiteHasCapteurScalarWhereWithAggregatesInput[]
    IdSite?: StringWithAggregatesFilter<"SiteHasCapteur"> | string
    DevEUI?: StringWithAggregatesFilter<"SiteHasCapteur"> | string
    Commentaire?: StringNullableWithAggregatesFilter<"SiteHasCapteur"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"SiteHasCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"SiteHasCapteur"> | Date | string | null
  }

  export type UsersCreateInput = {
    email: string
    name: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapteurCreateInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    CapteurType?: CapteurTypeCreateNestedOneWithoutCapteursInput
    SiteHasCapteurs?: SiteHasCapteurCreateNestedManyWithoutCapteurInput
    RelevesCapteur?: ReleverCapteurCreateNestedManyWithoutCapteurInput
  }

  export type CapteurUncheckedCreateInput = {
    DevEUI: string
    AppEUI: string
    IdCapteurType: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedCreateNestedManyWithoutCapteurInput
    RelevesCapteur?: ReleverCapteurUncheckedCreateNestedManyWithoutCapteurInput
  }

  export type CapteurUpdateInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CapteurType?: CapteurTypeUpdateOneWithoutCapteursNestedInput
    SiteHasCapteurs?: SiteHasCapteurUpdateManyWithoutCapteurNestedInput
    RelevesCapteur?: ReleverCapteurUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurUncheckedUpdateInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    IdCapteurType?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedUpdateManyWithoutCapteurNestedInput
    RelevesCapteur?: ReleverCapteurUncheckedUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurCreateManyInput = {
    DevEUI: string
    AppEUI: string
    IdCapteurType: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type CapteurUpdateManyMutationInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurUncheckedUpdateManyInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    IdCapteurType?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurTypeCreateInput = {
    Id?: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Capteurs?: CapteurCreateNestedManyWithoutCapteurTypeInput
  }

  export type CapteurTypeUncheckedCreateInput = {
    Id?: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Capteurs?: CapteurUncheckedCreateNestedManyWithoutCapteurTypeInput
  }

  export type CapteurTypeUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Capteurs?: CapteurUpdateManyWithoutCapteurTypeNestedInput
  }

  export type CapteurTypeUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Capteurs?: CapteurUncheckedUpdateManyWithoutCapteurTypeNestedInput
  }

  export type CapteurTypeCreateManyInput = {
    Id?: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type CapteurTypeUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurTypeUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurCreateInput = {
    Id?: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Capteur?: CapteurCreateNestedOneWithoutRelevesCapteurInput
  }

  export type ReleverCapteurUncheckedCreateInput = {
    Id?: string
    DevEUI: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type ReleverCapteurUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Capteur?: CapteurUpdateOneWithoutRelevesCapteurNestedInput
  }

  export type ReleverCapteurUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    DevEUI?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurCreateManyInput = {
    Id?: string
    DevEUI: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type ReleverCapteurUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    DevEUI?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteCreateInput = {
    Id?: string
    Name: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    Id?: string
    Name: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    Id?: string
    Name: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurCreateInput = {
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Site: SiteCreateNestedOneWithoutSiteHasCapteursInput
    Capteur: CapteurCreateNestedOneWithoutSiteHasCapteursInput
  }

  export type SiteHasCapteurUncheckedCreateInput = {
    IdSite: string
    DevEUI: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurUpdateInput = {
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Site?: SiteUpdateOneRequiredWithoutSiteHasCapteursNestedInput
    Capteur?: CapteurUpdateOneRequiredWithoutSiteHasCapteursNestedInput
  }

  export type SiteHasCapteurUncheckedUpdateInput = {
    IdSite?: StringFieldUpdateOperationsInput | string
    DevEUI?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurCreateManyInput = {
    IdSite: string
    DevEUI: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurUpdateManyMutationInput = {
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurUncheckedUpdateManyInput = {
    IdSite?: StringFieldUpdateOperationsInput | string
    DevEUI?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CapteurTypeNullableScalarRelationFilter = {
    is?: CapteurTypeWhereInput | null
    isNot?: CapteurTypeWhereInput | null
  }

  export type SiteHasCapteurListRelationFilter = {
    every?: SiteHasCapteurWhereInput
    some?: SiteHasCapteurWhereInput
    none?: SiteHasCapteurWhereInput
  }

  export type ReleverCapteurListRelationFilter = {
    every?: ReleverCapteurWhereInput
    some?: ReleverCapteurWhereInput
    none?: ReleverCapteurWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteHasCapteurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReleverCapteurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapteurCountOrderByAggregateInput = {
    DevEUI?: SortOrder
    AppEUI?: SortOrder
    IdCapteurType?: SortOrder
    Description?: SortOrder
    Commentaire?: SortOrder
    Name?: SortOrder
    LowBattery?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type CapteurMaxOrderByAggregateInput = {
    DevEUI?: SortOrder
    AppEUI?: SortOrder
    IdCapteurType?: SortOrder
    Description?: SortOrder
    Commentaire?: SortOrder
    Name?: SortOrder
    LowBattery?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type CapteurMinOrderByAggregateInput = {
    DevEUI?: SortOrder
    AppEUI?: SortOrder
    IdCapteurType?: SortOrder
    Description?: SortOrder
    Commentaire?: SortOrder
    Name?: SortOrder
    LowBattery?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CapteurListRelationFilter = {
    every?: CapteurWhereInput
    some?: CapteurWhereInput
    none?: CapteurWhereInput
  }

  export type CapteurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapteurTypeCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    ModelName?: SortOrder
    Module?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type CapteurTypeMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    ModelName?: SortOrder
    Module?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type CapteurTypeMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    ModelName?: SortOrder
    Module?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CapteurNullableScalarRelationFilter = {
    is?: CapteurWhereInput | null
    isNot?: CapteurWhereInput | null
  }

  export type ReleverCapteurCountOrderByAggregateInput = {
    Id?: SortOrder
    DevEUI?: SortOrder
    Value?: SortOrder
    ValueRaw?: SortOrder
    ValueType?: SortOrder
    ValueTypeRaw?: SortOrder
    Time?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ReleverCapteurAvgOrderByAggregateInput = {
    Value?: SortOrder
    ValueRaw?: SortOrder
  }

  export type ReleverCapteurMaxOrderByAggregateInput = {
    Id?: SortOrder
    DevEUI?: SortOrder
    Value?: SortOrder
    ValueRaw?: SortOrder
    ValueType?: SortOrder
    ValueTypeRaw?: SortOrder
    Time?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ReleverCapteurMinOrderByAggregateInput = {
    Id?: SortOrder
    DevEUI?: SortOrder
    Value?: SortOrder
    ValueRaw?: SortOrder
    ValueType?: SortOrder
    ValueTypeRaw?: SortOrder
    Time?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ReleverCapteurSumOrderByAggregateInput = {
    Value?: SortOrder
    ValueRaw?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SiteCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type CapteurScalarRelationFilter = {
    is?: CapteurWhereInput
    isNot?: CapteurWhereInput
  }

  export type SiteHasCapteurIdSiteDevEUICompoundUniqueInput = {
    IdSite: string
    DevEUI: string
  }

  export type SiteHasCapteurCountOrderByAggregateInput = {
    IdSite?: SortOrder
    DevEUI?: SortOrder
    Commentaire?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SiteHasCapteurMaxOrderByAggregateInput = {
    IdSite?: SortOrder
    DevEUI?: SortOrder
    Commentaire?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SiteHasCapteurMinOrderByAggregateInput = {
    IdSite?: SortOrder
    DevEUI?: SortOrder
    Commentaire?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CapteurTypeCreateNestedOneWithoutCapteursInput = {
    create?: XOR<CapteurTypeCreateWithoutCapteursInput, CapteurTypeUncheckedCreateWithoutCapteursInput>
    connectOrCreate?: CapteurTypeCreateOrConnectWithoutCapteursInput
    connect?: CapteurTypeWhereUniqueInput
  }

  export type SiteHasCapteurCreateNestedManyWithoutCapteurInput = {
    create?: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput> | SiteHasCapteurCreateWithoutCapteurInput[] | SiteHasCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutCapteurInput | SiteHasCapteurCreateOrConnectWithoutCapteurInput[]
    createMany?: SiteHasCapteurCreateManyCapteurInputEnvelope
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
  }

  export type ReleverCapteurCreateNestedManyWithoutCapteurInput = {
    create?: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput> | ReleverCapteurCreateWithoutCapteurInput[] | ReleverCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: ReleverCapteurCreateOrConnectWithoutCapteurInput | ReleverCapteurCreateOrConnectWithoutCapteurInput[]
    createMany?: ReleverCapteurCreateManyCapteurInputEnvelope
    connect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
  }

  export type SiteHasCapteurUncheckedCreateNestedManyWithoutCapteurInput = {
    create?: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput> | SiteHasCapteurCreateWithoutCapteurInput[] | SiteHasCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutCapteurInput | SiteHasCapteurCreateOrConnectWithoutCapteurInput[]
    createMany?: SiteHasCapteurCreateManyCapteurInputEnvelope
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
  }

  export type ReleverCapteurUncheckedCreateNestedManyWithoutCapteurInput = {
    create?: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput> | ReleverCapteurCreateWithoutCapteurInput[] | ReleverCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: ReleverCapteurCreateOrConnectWithoutCapteurInput | ReleverCapteurCreateOrConnectWithoutCapteurInput[]
    createMany?: ReleverCapteurCreateManyCapteurInputEnvelope
    connect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CapteurTypeUpdateOneWithoutCapteursNestedInput = {
    create?: XOR<CapteurTypeCreateWithoutCapteursInput, CapteurTypeUncheckedCreateWithoutCapteursInput>
    connectOrCreate?: CapteurTypeCreateOrConnectWithoutCapteursInput
    upsert?: CapteurTypeUpsertWithoutCapteursInput
    disconnect?: CapteurTypeWhereInput | boolean
    delete?: CapteurTypeWhereInput | boolean
    connect?: CapteurTypeWhereUniqueInput
    update?: XOR<XOR<CapteurTypeUpdateToOneWithWhereWithoutCapteursInput, CapteurTypeUpdateWithoutCapteursInput>, CapteurTypeUncheckedUpdateWithoutCapteursInput>
  }

  export type SiteHasCapteurUpdateManyWithoutCapteurNestedInput = {
    create?: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput> | SiteHasCapteurCreateWithoutCapteurInput[] | SiteHasCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutCapteurInput | SiteHasCapteurCreateOrConnectWithoutCapteurInput[]
    upsert?: SiteHasCapteurUpsertWithWhereUniqueWithoutCapteurInput | SiteHasCapteurUpsertWithWhereUniqueWithoutCapteurInput[]
    createMany?: SiteHasCapteurCreateManyCapteurInputEnvelope
    set?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    disconnect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    delete?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    update?: SiteHasCapteurUpdateWithWhereUniqueWithoutCapteurInput | SiteHasCapteurUpdateWithWhereUniqueWithoutCapteurInput[]
    updateMany?: SiteHasCapteurUpdateManyWithWhereWithoutCapteurInput | SiteHasCapteurUpdateManyWithWhereWithoutCapteurInput[]
    deleteMany?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
  }

  export type ReleverCapteurUpdateManyWithoutCapteurNestedInput = {
    create?: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput> | ReleverCapteurCreateWithoutCapteurInput[] | ReleverCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: ReleverCapteurCreateOrConnectWithoutCapteurInput | ReleverCapteurCreateOrConnectWithoutCapteurInput[]
    upsert?: ReleverCapteurUpsertWithWhereUniqueWithoutCapteurInput | ReleverCapteurUpsertWithWhereUniqueWithoutCapteurInput[]
    createMany?: ReleverCapteurCreateManyCapteurInputEnvelope
    set?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    disconnect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    delete?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    connect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    update?: ReleverCapteurUpdateWithWhereUniqueWithoutCapteurInput | ReleverCapteurUpdateWithWhereUniqueWithoutCapteurInput[]
    updateMany?: ReleverCapteurUpdateManyWithWhereWithoutCapteurInput | ReleverCapteurUpdateManyWithWhereWithoutCapteurInput[]
    deleteMany?: ReleverCapteurScalarWhereInput | ReleverCapteurScalarWhereInput[]
  }

  export type SiteHasCapteurUncheckedUpdateManyWithoutCapteurNestedInput = {
    create?: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput> | SiteHasCapteurCreateWithoutCapteurInput[] | SiteHasCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutCapteurInput | SiteHasCapteurCreateOrConnectWithoutCapteurInput[]
    upsert?: SiteHasCapteurUpsertWithWhereUniqueWithoutCapteurInput | SiteHasCapteurUpsertWithWhereUniqueWithoutCapteurInput[]
    createMany?: SiteHasCapteurCreateManyCapteurInputEnvelope
    set?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    disconnect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    delete?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    update?: SiteHasCapteurUpdateWithWhereUniqueWithoutCapteurInput | SiteHasCapteurUpdateWithWhereUniqueWithoutCapteurInput[]
    updateMany?: SiteHasCapteurUpdateManyWithWhereWithoutCapteurInput | SiteHasCapteurUpdateManyWithWhereWithoutCapteurInput[]
    deleteMany?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
  }

  export type ReleverCapteurUncheckedUpdateManyWithoutCapteurNestedInput = {
    create?: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput> | ReleverCapteurCreateWithoutCapteurInput[] | ReleverCapteurUncheckedCreateWithoutCapteurInput[]
    connectOrCreate?: ReleverCapteurCreateOrConnectWithoutCapteurInput | ReleverCapteurCreateOrConnectWithoutCapteurInput[]
    upsert?: ReleverCapteurUpsertWithWhereUniqueWithoutCapteurInput | ReleverCapteurUpsertWithWhereUniqueWithoutCapteurInput[]
    createMany?: ReleverCapteurCreateManyCapteurInputEnvelope
    set?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    disconnect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    delete?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    connect?: ReleverCapteurWhereUniqueInput | ReleverCapteurWhereUniqueInput[]
    update?: ReleverCapteurUpdateWithWhereUniqueWithoutCapteurInput | ReleverCapteurUpdateWithWhereUniqueWithoutCapteurInput[]
    updateMany?: ReleverCapteurUpdateManyWithWhereWithoutCapteurInput | ReleverCapteurUpdateManyWithWhereWithoutCapteurInput[]
    deleteMany?: ReleverCapteurScalarWhereInput | ReleverCapteurScalarWhereInput[]
  }

  export type CapteurCreateNestedManyWithoutCapteurTypeInput = {
    create?: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput> | CapteurCreateWithoutCapteurTypeInput[] | CapteurUncheckedCreateWithoutCapteurTypeInput[]
    connectOrCreate?: CapteurCreateOrConnectWithoutCapteurTypeInput | CapteurCreateOrConnectWithoutCapteurTypeInput[]
    createMany?: CapteurCreateManyCapteurTypeInputEnvelope
    connect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
  }

  export type CapteurUncheckedCreateNestedManyWithoutCapteurTypeInput = {
    create?: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput> | CapteurCreateWithoutCapteurTypeInput[] | CapteurUncheckedCreateWithoutCapteurTypeInput[]
    connectOrCreate?: CapteurCreateOrConnectWithoutCapteurTypeInput | CapteurCreateOrConnectWithoutCapteurTypeInput[]
    createMany?: CapteurCreateManyCapteurTypeInputEnvelope
    connect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
  }

  export type CapteurUpdateManyWithoutCapteurTypeNestedInput = {
    create?: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput> | CapteurCreateWithoutCapteurTypeInput[] | CapteurUncheckedCreateWithoutCapteurTypeInput[]
    connectOrCreate?: CapteurCreateOrConnectWithoutCapteurTypeInput | CapteurCreateOrConnectWithoutCapteurTypeInput[]
    upsert?: CapteurUpsertWithWhereUniqueWithoutCapteurTypeInput | CapteurUpsertWithWhereUniqueWithoutCapteurTypeInput[]
    createMany?: CapteurCreateManyCapteurTypeInputEnvelope
    set?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    disconnect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    delete?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    connect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    update?: CapteurUpdateWithWhereUniqueWithoutCapteurTypeInput | CapteurUpdateWithWhereUniqueWithoutCapteurTypeInput[]
    updateMany?: CapteurUpdateManyWithWhereWithoutCapteurTypeInput | CapteurUpdateManyWithWhereWithoutCapteurTypeInput[]
    deleteMany?: CapteurScalarWhereInput | CapteurScalarWhereInput[]
  }

  export type CapteurUncheckedUpdateManyWithoutCapteurTypeNestedInput = {
    create?: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput> | CapteurCreateWithoutCapteurTypeInput[] | CapteurUncheckedCreateWithoutCapteurTypeInput[]
    connectOrCreate?: CapteurCreateOrConnectWithoutCapteurTypeInput | CapteurCreateOrConnectWithoutCapteurTypeInput[]
    upsert?: CapteurUpsertWithWhereUniqueWithoutCapteurTypeInput | CapteurUpsertWithWhereUniqueWithoutCapteurTypeInput[]
    createMany?: CapteurCreateManyCapteurTypeInputEnvelope
    set?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    disconnect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    delete?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    connect?: CapteurWhereUniqueInput | CapteurWhereUniqueInput[]
    update?: CapteurUpdateWithWhereUniqueWithoutCapteurTypeInput | CapteurUpdateWithWhereUniqueWithoutCapteurTypeInput[]
    updateMany?: CapteurUpdateManyWithWhereWithoutCapteurTypeInput | CapteurUpdateManyWithWhereWithoutCapteurTypeInput[]
    deleteMany?: CapteurScalarWhereInput | CapteurScalarWhereInput[]
  }

  export type CapteurCreateNestedOneWithoutRelevesCapteurInput = {
    create?: XOR<CapteurCreateWithoutRelevesCapteurInput, CapteurUncheckedCreateWithoutRelevesCapteurInput>
    connectOrCreate?: CapteurCreateOrConnectWithoutRelevesCapteurInput
    connect?: CapteurWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CapteurUpdateOneWithoutRelevesCapteurNestedInput = {
    create?: XOR<CapteurCreateWithoutRelevesCapteurInput, CapteurUncheckedCreateWithoutRelevesCapteurInput>
    connectOrCreate?: CapteurCreateOrConnectWithoutRelevesCapteurInput
    upsert?: CapteurUpsertWithoutRelevesCapteurInput
    disconnect?: CapteurWhereInput | boolean
    delete?: CapteurWhereInput | boolean
    connect?: CapteurWhereUniqueInput
    update?: XOR<XOR<CapteurUpdateToOneWithWhereWithoutRelevesCapteurInput, CapteurUpdateWithoutRelevesCapteurInput>, CapteurUncheckedUpdateWithoutRelevesCapteurInput>
  }

  export type SiteHasCapteurCreateNestedManyWithoutSiteInput = {
    create?: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput> | SiteHasCapteurCreateWithoutSiteInput[] | SiteHasCapteurUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutSiteInput | SiteHasCapteurCreateOrConnectWithoutSiteInput[]
    createMany?: SiteHasCapteurCreateManySiteInputEnvelope
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
  }

  export type SiteHasCapteurUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput> | SiteHasCapteurCreateWithoutSiteInput[] | SiteHasCapteurUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutSiteInput | SiteHasCapteurCreateOrConnectWithoutSiteInput[]
    createMany?: SiteHasCapteurCreateManySiteInputEnvelope
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
  }

  export type SiteHasCapteurUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput> | SiteHasCapteurCreateWithoutSiteInput[] | SiteHasCapteurUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutSiteInput | SiteHasCapteurCreateOrConnectWithoutSiteInput[]
    upsert?: SiteHasCapteurUpsertWithWhereUniqueWithoutSiteInput | SiteHasCapteurUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SiteHasCapteurCreateManySiteInputEnvelope
    set?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    disconnect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    delete?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    update?: SiteHasCapteurUpdateWithWhereUniqueWithoutSiteInput | SiteHasCapteurUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SiteHasCapteurUpdateManyWithWhereWithoutSiteInput | SiteHasCapteurUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
  }

  export type SiteHasCapteurUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput> | SiteHasCapteurCreateWithoutSiteInput[] | SiteHasCapteurUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteHasCapteurCreateOrConnectWithoutSiteInput | SiteHasCapteurCreateOrConnectWithoutSiteInput[]
    upsert?: SiteHasCapteurUpsertWithWhereUniqueWithoutSiteInput | SiteHasCapteurUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SiteHasCapteurCreateManySiteInputEnvelope
    set?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    disconnect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    delete?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    connect?: SiteHasCapteurWhereUniqueInput | SiteHasCapteurWhereUniqueInput[]
    update?: SiteHasCapteurUpdateWithWhereUniqueWithoutSiteInput | SiteHasCapteurUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SiteHasCapteurUpdateManyWithWhereWithoutSiteInput | SiteHasCapteurUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutSiteHasCapteursInput = {
    create?: XOR<SiteCreateWithoutSiteHasCapteursInput, SiteUncheckedCreateWithoutSiteHasCapteursInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSiteHasCapteursInput
    connect?: SiteWhereUniqueInput
  }

  export type CapteurCreateNestedOneWithoutSiteHasCapteursInput = {
    create?: XOR<CapteurCreateWithoutSiteHasCapteursInput, CapteurUncheckedCreateWithoutSiteHasCapteursInput>
    connectOrCreate?: CapteurCreateOrConnectWithoutSiteHasCapteursInput
    connect?: CapteurWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutSiteHasCapteursNestedInput = {
    create?: XOR<SiteCreateWithoutSiteHasCapteursInput, SiteUncheckedCreateWithoutSiteHasCapteursInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSiteHasCapteursInput
    upsert?: SiteUpsertWithoutSiteHasCapteursInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutSiteHasCapteursInput, SiteUpdateWithoutSiteHasCapteursInput>, SiteUncheckedUpdateWithoutSiteHasCapteursInput>
  }

  export type CapteurUpdateOneRequiredWithoutSiteHasCapteursNestedInput = {
    create?: XOR<CapteurCreateWithoutSiteHasCapteursInput, CapteurUncheckedCreateWithoutSiteHasCapteursInput>
    connectOrCreate?: CapteurCreateOrConnectWithoutSiteHasCapteursInput
    upsert?: CapteurUpsertWithoutSiteHasCapteursInput
    connect?: CapteurWhereUniqueInput
    update?: XOR<XOR<CapteurUpdateToOneWithWhereWithoutSiteHasCapteursInput, CapteurUpdateWithoutSiteHasCapteursInput>, CapteurUncheckedUpdateWithoutSiteHasCapteursInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CapteurTypeCreateWithoutCapteursInput = {
    Id?: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type CapteurTypeUncheckedCreateWithoutCapteursInput = {
    Id?: string
    Name: string
    Type: string
    ModelName: string
    Module: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type CapteurTypeCreateOrConnectWithoutCapteursInput = {
    where: CapteurTypeWhereUniqueInput
    create: XOR<CapteurTypeCreateWithoutCapteursInput, CapteurTypeUncheckedCreateWithoutCapteursInput>
  }

  export type SiteHasCapteurCreateWithoutCapteurInput = {
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Site: SiteCreateNestedOneWithoutSiteHasCapteursInput
  }

  export type SiteHasCapteurUncheckedCreateWithoutCapteurInput = {
    IdSite: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurCreateOrConnectWithoutCapteurInput = {
    where: SiteHasCapteurWhereUniqueInput
    create: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput>
  }

  export type SiteHasCapteurCreateManyCapteurInputEnvelope = {
    data: SiteHasCapteurCreateManyCapteurInput | SiteHasCapteurCreateManyCapteurInput[]
  }

  export type ReleverCapteurCreateWithoutCapteurInput = {
    Id?: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type ReleverCapteurUncheckedCreateWithoutCapteurInput = {
    Id?: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type ReleverCapteurCreateOrConnectWithoutCapteurInput = {
    where: ReleverCapteurWhereUniqueInput
    create: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput>
  }

  export type ReleverCapteurCreateManyCapteurInputEnvelope = {
    data: ReleverCapteurCreateManyCapteurInput | ReleverCapteurCreateManyCapteurInput[]
  }

  export type CapteurTypeUpsertWithoutCapteursInput = {
    update: XOR<CapteurTypeUpdateWithoutCapteursInput, CapteurTypeUncheckedUpdateWithoutCapteursInput>
    create: XOR<CapteurTypeCreateWithoutCapteursInput, CapteurTypeUncheckedCreateWithoutCapteursInput>
    where?: CapteurTypeWhereInput
  }

  export type CapteurTypeUpdateToOneWithWhereWithoutCapteursInput = {
    where?: CapteurTypeWhereInput
    data: XOR<CapteurTypeUpdateWithoutCapteursInput, CapteurTypeUncheckedUpdateWithoutCapteursInput>
  }

  export type CapteurTypeUpdateWithoutCapteursInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurTypeUncheckedUpdateWithoutCapteursInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    ModelName?: StringFieldUpdateOperationsInput | string
    Module?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurUpsertWithWhereUniqueWithoutCapteurInput = {
    where: SiteHasCapteurWhereUniqueInput
    update: XOR<SiteHasCapteurUpdateWithoutCapteurInput, SiteHasCapteurUncheckedUpdateWithoutCapteurInput>
    create: XOR<SiteHasCapteurCreateWithoutCapteurInput, SiteHasCapteurUncheckedCreateWithoutCapteurInput>
  }

  export type SiteHasCapteurUpdateWithWhereUniqueWithoutCapteurInput = {
    where: SiteHasCapteurWhereUniqueInput
    data: XOR<SiteHasCapteurUpdateWithoutCapteurInput, SiteHasCapteurUncheckedUpdateWithoutCapteurInput>
  }

  export type SiteHasCapteurUpdateManyWithWhereWithoutCapteurInput = {
    where: SiteHasCapteurScalarWhereInput
    data: XOR<SiteHasCapteurUpdateManyMutationInput, SiteHasCapteurUncheckedUpdateManyWithoutCapteurInput>
  }

  export type SiteHasCapteurScalarWhereInput = {
    AND?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
    OR?: SiteHasCapteurScalarWhereInput[]
    NOT?: SiteHasCapteurScalarWhereInput | SiteHasCapteurScalarWhereInput[]
    IdSite?: StringFilter<"SiteHasCapteur"> | string
    DevEUI?: StringFilter<"SiteHasCapteur"> | string
    Commentaire?: StringNullableFilter<"SiteHasCapteur"> | string | null
    CreatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"SiteHasCapteur"> | Date | string | null
  }

  export type ReleverCapteurUpsertWithWhereUniqueWithoutCapteurInput = {
    where: ReleverCapteurWhereUniqueInput
    update: XOR<ReleverCapteurUpdateWithoutCapteurInput, ReleverCapteurUncheckedUpdateWithoutCapteurInput>
    create: XOR<ReleverCapteurCreateWithoutCapteurInput, ReleverCapteurUncheckedCreateWithoutCapteurInput>
  }

  export type ReleverCapteurUpdateWithWhereUniqueWithoutCapteurInput = {
    where: ReleverCapteurWhereUniqueInput
    data: XOR<ReleverCapteurUpdateWithoutCapteurInput, ReleverCapteurUncheckedUpdateWithoutCapteurInput>
  }

  export type ReleverCapteurUpdateManyWithWhereWithoutCapteurInput = {
    where: ReleverCapteurScalarWhereInput
    data: XOR<ReleverCapteurUpdateManyMutationInput, ReleverCapteurUncheckedUpdateManyWithoutCapteurInput>
  }

  export type ReleverCapteurScalarWhereInput = {
    AND?: ReleverCapteurScalarWhereInput | ReleverCapteurScalarWhereInput[]
    OR?: ReleverCapteurScalarWhereInput[]
    NOT?: ReleverCapteurScalarWhereInput | ReleverCapteurScalarWhereInput[]
    Id?: StringFilter<"ReleverCapteur"> | string
    DevEUI?: StringFilter<"ReleverCapteur"> | string
    Value?: FloatNullableFilter<"ReleverCapteur"> | number | null
    ValueRaw?: FloatFilter<"ReleverCapteur"> | number
    ValueType?: StringNullableFilter<"ReleverCapteur"> | string | null
    ValueTypeRaw?: StringNullableFilter<"ReleverCapteur"> | string | null
    Time?: DateTimeFilter<"ReleverCapteur"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"ReleverCapteur"> | Date | string | null
  }

  export type CapteurCreateWithoutCapteurTypeInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurCreateNestedManyWithoutCapteurInput
    RelevesCapteur?: ReleverCapteurCreateNestedManyWithoutCapteurInput
  }

  export type CapteurUncheckedCreateWithoutCapteurTypeInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedCreateNestedManyWithoutCapteurInput
    RelevesCapteur?: ReleverCapteurUncheckedCreateNestedManyWithoutCapteurInput
  }

  export type CapteurCreateOrConnectWithoutCapteurTypeInput = {
    where: CapteurWhereUniqueInput
    create: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput>
  }

  export type CapteurCreateManyCapteurTypeInputEnvelope = {
    data: CapteurCreateManyCapteurTypeInput | CapteurCreateManyCapteurTypeInput[]
  }

  export type CapteurUpsertWithWhereUniqueWithoutCapteurTypeInput = {
    where: CapteurWhereUniqueInput
    update: XOR<CapteurUpdateWithoutCapteurTypeInput, CapteurUncheckedUpdateWithoutCapteurTypeInput>
    create: XOR<CapteurCreateWithoutCapteurTypeInput, CapteurUncheckedCreateWithoutCapteurTypeInput>
  }

  export type CapteurUpdateWithWhereUniqueWithoutCapteurTypeInput = {
    where: CapteurWhereUniqueInput
    data: XOR<CapteurUpdateWithoutCapteurTypeInput, CapteurUncheckedUpdateWithoutCapteurTypeInput>
  }

  export type CapteurUpdateManyWithWhereWithoutCapteurTypeInput = {
    where: CapteurScalarWhereInput
    data: XOR<CapteurUpdateManyMutationInput, CapteurUncheckedUpdateManyWithoutCapteurTypeInput>
  }

  export type CapteurScalarWhereInput = {
    AND?: CapteurScalarWhereInput | CapteurScalarWhereInput[]
    OR?: CapteurScalarWhereInput[]
    NOT?: CapteurScalarWhereInput | CapteurScalarWhereInput[]
    DevEUI?: StringFilter<"Capteur"> | string
    AppEUI?: StringFilter<"Capteur"> | string
    IdCapteurType?: StringFilter<"Capteur"> | string
    Description?: StringNullableFilter<"Capteur"> | string | null
    Commentaire?: StringNullableFilter<"Capteur"> | string | null
    Name?: StringFilter<"Capteur"> | string
    LowBattery?: BoolFilter<"Capteur"> | boolean
    CreatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Capteur"> | Date | string | null
  }

  export type CapteurCreateWithoutRelevesCapteurInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    CapteurType?: CapteurTypeCreateNestedOneWithoutCapteursInput
    SiteHasCapteurs?: SiteHasCapteurCreateNestedManyWithoutCapteurInput
  }

  export type CapteurUncheckedCreateWithoutRelevesCapteurInput = {
    DevEUI: string
    AppEUI: string
    IdCapteurType: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedCreateNestedManyWithoutCapteurInput
  }

  export type CapteurCreateOrConnectWithoutRelevesCapteurInput = {
    where: CapteurWhereUniqueInput
    create: XOR<CapteurCreateWithoutRelevesCapteurInput, CapteurUncheckedCreateWithoutRelevesCapteurInput>
  }

  export type CapteurUpsertWithoutRelevesCapteurInput = {
    update: XOR<CapteurUpdateWithoutRelevesCapteurInput, CapteurUncheckedUpdateWithoutRelevesCapteurInput>
    create: XOR<CapteurCreateWithoutRelevesCapteurInput, CapteurUncheckedCreateWithoutRelevesCapteurInput>
    where?: CapteurWhereInput
  }

  export type CapteurUpdateToOneWithWhereWithoutRelevesCapteurInput = {
    where?: CapteurWhereInput
    data: XOR<CapteurUpdateWithoutRelevesCapteurInput, CapteurUncheckedUpdateWithoutRelevesCapteurInput>
  }

  export type CapteurUpdateWithoutRelevesCapteurInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CapteurType?: CapteurTypeUpdateOneWithoutCapteursNestedInput
    SiteHasCapteurs?: SiteHasCapteurUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurUncheckedUpdateWithoutRelevesCapteurInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    IdCapteurType?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedUpdateManyWithoutCapteurNestedInput
  }

  export type SiteHasCapteurCreateWithoutSiteInput = {
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Capteur: CapteurCreateNestedOneWithoutSiteHasCapteursInput
  }

  export type SiteHasCapteurUncheckedCreateWithoutSiteInput = {
    DevEUI: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurCreateOrConnectWithoutSiteInput = {
    where: SiteHasCapteurWhereUniqueInput
    create: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput>
  }

  export type SiteHasCapteurCreateManySiteInputEnvelope = {
    data: SiteHasCapteurCreateManySiteInput | SiteHasCapteurCreateManySiteInput[]
  }

  export type SiteHasCapteurUpsertWithWhereUniqueWithoutSiteInput = {
    where: SiteHasCapteurWhereUniqueInput
    update: XOR<SiteHasCapteurUpdateWithoutSiteInput, SiteHasCapteurUncheckedUpdateWithoutSiteInput>
    create: XOR<SiteHasCapteurCreateWithoutSiteInput, SiteHasCapteurUncheckedCreateWithoutSiteInput>
  }

  export type SiteHasCapteurUpdateWithWhereUniqueWithoutSiteInput = {
    where: SiteHasCapteurWhereUniqueInput
    data: XOR<SiteHasCapteurUpdateWithoutSiteInput, SiteHasCapteurUncheckedUpdateWithoutSiteInput>
  }

  export type SiteHasCapteurUpdateManyWithWhereWithoutSiteInput = {
    where: SiteHasCapteurScalarWhereInput
    data: XOR<SiteHasCapteurUpdateManyMutationInput, SiteHasCapteurUncheckedUpdateManyWithoutSiteInput>
  }

  export type SiteCreateWithoutSiteHasCapteursInput = {
    Id?: string
    Name: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteUncheckedCreateWithoutSiteHasCapteursInput = {
    Id?: string
    Name: string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteCreateOrConnectWithoutSiteHasCapteursInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutSiteHasCapteursInput, SiteUncheckedCreateWithoutSiteHasCapteursInput>
  }

  export type CapteurCreateWithoutSiteHasCapteursInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    CapteurType?: CapteurTypeCreateNestedOneWithoutCapteursInput
    RelevesCapteur?: ReleverCapteurCreateNestedManyWithoutCapteurInput
  }

  export type CapteurUncheckedCreateWithoutSiteHasCapteursInput = {
    DevEUI: string
    AppEUI: string
    IdCapteurType: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    RelevesCapteur?: ReleverCapteurUncheckedCreateNestedManyWithoutCapteurInput
  }

  export type CapteurCreateOrConnectWithoutSiteHasCapteursInput = {
    where: CapteurWhereUniqueInput
    create: XOR<CapteurCreateWithoutSiteHasCapteursInput, CapteurUncheckedCreateWithoutSiteHasCapteursInput>
  }

  export type SiteUpsertWithoutSiteHasCapteursInput = {
    update: XOR<SiteUpdateWithoutSiteHasCapteursInput, SiteUncheckedUpdateWithoutSiteHasCapteursInput>
    create: XOR<SiteCreateWithoutSiteHasCapteursInput, SiteUncheckedCreateWithoutSiteHasCapteursInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutSiteHasCapteursInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutSiteHasCapteursInput, SiteUncheckedUpdateWithoutSiteHasCapteursInput>
  }

  export type SiteUpdateWithoutSiteHasCapteursInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteUncheckedUpdateWithoutSiteHasCapteursInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurUpsertWithoutSiteHasCapteursInput = {
    update: XOR<CapteurUpdateWithoutSiteHasCapteursInput, CapteurUncheckedUpdateWithoutSiteHasCapteursInput>
    create: XOR<CapteurCreateWithoutSiteHasCapteursInput, CapteurUncheckedCreateWithoutSiteHasCapteursInput>
    where?: CapteurWhereInput
  }

  export type CapteurUpdateToOneWithWhereWithoutSiteHasCapteursInput = {
    where?: CapteurWhereInput
    data: XOR<CapteurUpdateWithoutSiteHasCapteursInput, CapteurUncheckedUpdateWithoutSiteHasCapteursInput>
  }

  export type CapteurUpdateWithoutSiteHasCapteursInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CapteurType?: CapteurTypeUpdateOneWithoutCapteursNestedInput
    RelevesCapteur?: ReleverCapteurUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurUncheckedUpdateWithoutSiteHasCapteursInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    IdCapteurType?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RelevesCapteur?: ReleverCapteurUncheckedUpdateManyWithoutCapteurNestedInput
  }

  export type SiteHasCapteurCreateManyCapteurInput = {
    IdSite: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type ReleverCapteurCreateManyCapteurInput = {
    Id?: string
    Value?: number | null
    ValueRaw: number
    ValueType?: string | null
    ValueTypeRaw?: string | null
    Time?: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurUpdateWithoutCapteurInput = {
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Site?: SiteUpdateOneRequiredWithoutSiteHasCapteursNestedInput
  }

  export type SiteHasCapteurUncheckedUpdateWithoutCapteurInput = {
    IdSite?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurUncheckedUpdateManyWithoutCapteurInput = {
    IdSite?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurUpdateWithoutCapteurInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurUncheckedUpdateWithoutCapteurInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReleverCapteurUncheckedUpdateManyWithoutCapteurInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Value?: NullableFloatFieldUpdateOperationsInput | number | null
    ValueRaw?: FloatFieldUpdateOperationsInput | number
    ValueType?: NullableStringFieldUpdateOperationsInput | string | null
    ValueTypeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    Time?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CapteurCreateManyCapteurTypeInput = {
    DevEUI: string
    AppEUI: string
    Description?: string | null
    Commentaire?: string | null
    Name: string
    LowBattery?: boolean
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type CapteurUpdateWithoutCapteurTypeInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUpdateManyWithoutCapteurNestedInput
    RelevesCapteur?: ReleverCapteurUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurUncheckedUpdateWithoutCapteurTypeInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SiteHasCapteurs?: SiteHasCapteurUncheckedUpdateManyWithoutCapteurNestedInput
    RelevesCapteur?: ReleverCapteurUncheckedUpdateManyWithoutCapteurNestedInput
  }

  export type CapteurUncheckedUpdateManyWithoutCapteurTypeInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    AppEUI?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: StringFieldUpdateOperationsInput | string
    LowBattery?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurCreateManySiteInput = {
    DevEUI: string
    Commentaire?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type SiteHasCapteurUpdateWithoutSiteInput = {
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Capteur?: CapteurUpdateOneRequiredWithoutSiteHasCapteursNestedInput
  }

  export type SiteHasCapteurUncheckedUpdateWithoutSiteInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteHasCapteurUncheckedUpdateManyWithoutSiteInput = {
    DevEUI?: StringFieldUpdateOperationsInput | string
    Commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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