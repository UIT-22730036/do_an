
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
 * Model SinhVien
 * 
 */
export type SinhVien = $Result.DefaultSelection<Prisma.$SinhVienPayload>
/**
 * Model Lop
 * 
 */
export type Lop = $Result.DefaultSelection<Prisma.$LopPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SinhViens
 * const sinhViens = await prisma.sinhVien.findMany()
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
   * // Fetch zero or more SinhViens
   * const sinhViens = await prisma.sinhVien.findMany()
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
   * `prisma.sinhVien`: Exposes CRUD operations for the **SinhVien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SinhViens
    * const sinhViens = await prisma.sinhVien.findMany()
    * ```
    */
  get sinhVien(): Prisma.SinhVienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lop`: Exposes CRUD operations for the **Lop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lops
    * const lops = await prisma.lop.findMany()
    * ```
    */
  get lop(): Prisma.LopDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    SinhVien: 'SinhVien',
    Lop: 'Lop'
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
      modelProps: "sinhVien" | "lop"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SinhVien: {
        payload: Prisma.$SinhVienPayload<ExtArgs>
        fields: Prisma.SinhVienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SinhVienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SinhVienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          findFirst: {
            args: Prisma.SinhVienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SinhVienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          findMany: {
            args: Prisma.SinhVienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>[]
          }
          create: {
            args: Prisma.SinhVienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          createMany: {
            args: Prisma.SinhVienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SinhVienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>[]
          }
          delete: {
            args: Prisma.SinhVienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          update: {
            args: Prisma.SinhVienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          deleteMany: {
            args: Prisma.SinhVienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SinhVienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SinhVienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>[]
          }
          upsert: {
            args: Prisma.SinhVienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SinhVienPayload>
          }
          aggregate: {
            args: Prisma.SinhVienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSinhVien>
          }
          groupBy: {
            args: Prisma.SinhVienGroupByArgs<ExtArgs>
            result: $Utils.Optional<SinhVienGroupByOutputType>[]
          }
          count: {
            args: Prisma.SinhVienCountArgs<ExtArgs>
            result: $Utils.Optional<SinhVienCountAggregateOutputType> | number
          }
        }
      }
      Lop: {
        payload: Prisma.$LopPayload<ExtArgs>
        fields: Prisma.LopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          findFirst: {
            args: Prisma.LopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          findMany: {
            args: Prisma.LopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>[]
          }
          create: {
            args: Prisma.LopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          createMany: {
            args: Prisma.LopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>[]
          }
          delete: {
            args: Prisma.LopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          update: {
            args: Prisma.LopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          deleteMany: {
            args: Prisma.LopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>[]
          }
          upsert: {
            args: Prisma.LopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LopPayload>
          }
          aggregate: {
            args: Prisma.LopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLop>
          }
          groupBy: {
            args: Prisma.LopGroupByArgs<ExtArgs>
            result: $Utils.Optional<LopGroupByOutputType>[]
          }
          count: {
            args: Prisma.LopCountArgs<ExtArgs>
            result: $Utils.Optional<LopCountAggregateOutputType> | number
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
    sinhVien?: SinhVienOmit
    lop?: LopOmit
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
   * Count Type LopCountOutputType
   */

  export type LopCountOutputType = {
    SinhVien: number
  }

  export type LopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SinhVien?: boolean | LopCountOutputTypeCountSinhVienArgs
  }

  // Custom InputTypes
  /**
   * LopCountOutputType without action
   */
  export type LopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LopCountOutputType
     */
    select?: LopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LopCountOutputType without action
   */
  export type LopCountOutputTypeCountSinhVienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SinhVienWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SinhVien
   */

  export type AggregateSinhVien = {
    _count: SinhVienCountAggregateOutputType | null
    _avg: SinhVienAvgAggregateOutputType | null
    _sum: SinhVienSumAggregateOutputType | null
    _min: SinhVienMinAggregateOutputType | null
    _max: SinhVienMaxAggregateOutputType | null
  }

  export type SinhVienAvgAggregateOutputType = {
    maSV: number | null
    maLopId: number | null
  }

  export type SinhVienSumAggregateOutputType = {
    maSV: number | null
    maLopId: number | null
  }

  export type SinhVienMinAggregateOutputType = {
    maSV: number | null
    tenSV: string | null
    email: string | null
    maLopId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SinhVienMaxAggregateOutputType = {
    maSV: number | null
    tenSV: string | null
    email: string | null
    maLopId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SinhVienCountAggregateOutputType = {
    maSV: number
    tenSV: number
    email: number
    maLopId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SinhVienAvgAggregateInputType = {
    maSV?: true
    maLopId?: true
  }

  export type SinhVienSumAggregateInputType = {
    maSV?: true
    maLopId?: true
  }

  export type SinhVienMinAggregateInputType = {
    maSV?: true
    tenSV?: true
    email?: true
    maLopId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SinhVienMaxAggregateInputType = {
    maSV?: true
    tenSV?: true
    email?: true
    maLopId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SinhVienCountAggregateInputType = {
    maSV?: true
    tenSV?: true
    email?: true
    maLopId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SinhVienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SinhVien to aggregate.
     */
    where?: SinhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SinhViens to fetch.
     */
    orderBy?: SinhVienOrderByWithRelationInput | SinhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SinhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SinhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SinhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SinhViens
    **/
    _count?: true | SinhVienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SinhVienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SinhVienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SinhVienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SinhVienMaxAggregateInputType
  }

  export type GetSinhVienAggregateType<T extends SinhVienAggregateArgs> = {
        [P in keyof T & keyof AggregateSinhVien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSinhVien[P]>
      : GetScalarType<T[P], AggregateSinhVien[P]>
  }




  export type SinhVienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SinhVienWhereInput
    orderBy?: SinhVienOrderByWithAggregationInput | SinhVienOrderByWithAggregationInput[]
    by: SinhVienScalarFieldEnum[] | SinhVienScalarFieldEnum
    having?: SinhVienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SinhVienCountAggregateInputType | true
    _avg?: SinhVienAvgAggregateInputType
    _sum?: SinhVienSumAggregateInputType
    _min?: SinhVienMinAggregateInputType
    _max?: SinhVienMaxAggregateInputType
  }

  export type SinhVienGroupByOutputType = {
    maSV: number
    tenSV: string
    email: string
    maLopId: number
    createdAt: Date
    updatedAt: Date
    _count: SinhVienCountAggregateOutputType | null
    _avg: SinhVienAvgAggregateOutputType | null
    _sum: SinhVienSumAggregateOutputType | null
    _min: SinhVienMinAggregateOutputType | null
    _max: SinhVienMaxAggregateOutputType | null
  }

  type GetSinhVienGroupByPayload<T extends SinhVienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SinhVienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SinhVienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SinhVienGroupByOutputType[P]>
            : GetScalarType<T[P], SinhVienGroupByOutputType[P]>
        }
      >
    >


  export type SinhVienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSV?: boolean
    tenSV?: boolean
    email?: boolean
    maLopId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sinhVien"]>

  export type SinhVienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSV?: boolean
    tenSV?: boolean
    email?: boolean
    maLopId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sinhVien"]>

  export type SinhVienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maSV?: boolean
    tenSV?: boolean
    email?: boolean
    maLopId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sinhVien"]>

  export type SinhVienSelectScalar = {
    maSV?: boolean
    tenSV?: boolean
    email?: boolean
    maLopId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SinhVienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maSV" | "tenSV" | "email" | "maLopId" | "createdAt" | "updatedAt", ExtArgs["result"]["sinhVien"]>
  export type SinhVienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }
  export type SinhVienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }
  export type SinhVienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lop?: boolean | LopDefaultArgs<ExtArgs>
  }

  export type $SinhVienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SinhVien"
    objects: {
      lop: Prisma.$LopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maSV: number
      tenSV: string
      email: string
      maLopId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sinhVien"]>
    composites: {}
  }

  type SinhVienGetPayload<S extends boolean | null | undefined | SinhVienDefaultArgs> = $Result.GetResult<Prisma.$SinhVienPayload, S>

  type SinhVienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SinhVienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SinhVienCountAggregateInputType | true
    }

  export interface SinhVienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SinhVien'], meta: { name: 'SinhVien' } }
    /**
     * Find zero or one SinhVien that matches the filter.
     * @param {SinhVienFindUniqueArgs} args - Arguments to find a SinhVien
     * @example
     * // Get one SinhVien
     * const sinhVien = await prisma.sinhVien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SinhVienFindUniqueArgs>(args: SelectSubset<T, SinhVienFindUniqueArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SinhVien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SinhVienFindUniqueOrThrowArgs} args - Arguments to find a SinhVien
     * @example
     * // Get one SinhVien
     * const sinhVien = await prisma.sinhVien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SinhVienFindUniqueOrThrowArgs>(args: SelectSubset<T, SinhVienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SinhVien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienFindFirstArgs} args - Arguments to find a SinhVien
     * @example
     * // Get one SinhVien
     * const sinhVien = await prisma.sinhVien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SinhVienFindFirstArgs>(args?: SelectSubset<T, SinhVienFindFirstArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SinhVien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienFindFirstOrThrowArgs} args - Arguments to find a SinhVien
     * @example
     * // Get one SinhVien
     * const sinhVien = await prisma.sinhVien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SinhVienFindFirstOrThrowArgs>(args?: SelectSubset<T, SinhVienFindFirstOrThrowArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SinhViens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SinhViens
     * const sinhViens = await prisma.sinhVien.findMany()
     * 
     * // Get first 10 SinhViens
     * const sinhViens = await prisma.sinhVien.findMany({ take: 10 })
     * 
     * // Only select the `maSV`
     * const sinhVienWithMaSVOnly = await prisma.sinhVien.findMany({ select: { maSV: true } })
     * 
     */
    findMany<T extends SinhVienFindManyArgs>(args?: SelectSubset<T, SinhVienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SinhVien.
     * @param {SinhVienCreateArgs} args - Arguments to create a SinhVien.
     * @example
     * // Create one SinhVien
     * const SinhVien = await prisma.sinhVien.create({
     *   data: {
     *     // ... data to create a SinhVien
     *   }
     * })
     * 
     */
    create<T extends SinhVienCreateArgs>(args: SelectSubset<T, SinhVienCreateArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SinhViens.
     * @param {SinhVienCreateManyArgs} args - Arguments to create many SinhViens.
     * @example
     * // Create many SinhViens
     * const sinhVien = await prisma.sinhVien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SinhVienCreateManyArgs>(args?: SelectSubset<T, SinhVienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SinhViens and returns the data saved in the database.
     * @param {SinhVienCreateManyAndReturnArgs} args - Arguments to create many SinhViens.
     * @example
     * // Create many SinhViens
     * const sinhVien = await prisma.sinhVien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SinhViens and only return the `maSV`
     * const sinhVienWithMaSVOnly = await prisma.sinhVien.createManyAndReturn({
     *   select: { maSV: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SinhVienCreateManyAndReturnArgs>(args?: SelectSubset<T, SinhVienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SinhVien.
     * @param {SinhVienDeleteArgs} args - Arguments to delete one SinhVien.
     * @example
     * // Delete one SinhVien
     * const SinhVien = await prisma.sinhVien.delete({
     *   where: {
     *     // ... filter to delete one SinhVien
     *   }
     * })
     * 
     */
    delete<T extends SinhVienDeleteArgs>(args: SelectSubset<T, SinhVienDeleteArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SinhVien.
     * @param {SinhVienUpdateArgs} args - Arguments to update one SinhVien.
     * @example
     * // Update one SinhVien
     * const sinhVien = await prisma.sinhVien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SinhVienUpdateArgs>(args: SelectSubset<T, SinhVienUpdateArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SinhViens.
     * @param {SinhVienDeleteManyArgs} args - Arguments to filter SinhViens to delete.
     * @example
     * // Delete a few SinhViens
     * const { count } = await prisma.sinhVien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SinhVienDeleteManyArgs>(args?: SelectSubset<T, SinhVienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SinhViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SinhViens
     * const sinhVien = await prisma.sinhVien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SinhVienUpdateManyArgs>(args: SelectSubset<T, SinhVienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SinhViens and returns the data updated in the database.
     * @param {SinhVienUpdateManyAndReturnArgs} args - Arguments to update many SinhViens.
     * @example
     * // Update many SinhViens
     * const sinhVien = await prisma.sinhVien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SinhViens and only return the `maSV`
     * const sinhVienWithMaSVOnly = await prisma.sinhVien.updateManyAndReturn({
     *   select: { maSV: true },
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
    updateManyAndReturn<T extends SinhVienUpdateManyAndReturnArgs>(args: SelectSubset<T, SinhVienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SinhVien.
     * @param {SinhVienUpsertArgs} args - Arguments to update or create a SinhVien.
     * @example
     * // Update or create a SinhVien
     * const sinhVien = await prisma.sinhVien.upsert({
     *   create: {
     *     // ... data to create a SinhVien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SinhVien we want to update
     *   }
     * })
     */
    upsert<T extends SinhVienUpsertArgs>(args: SelectSubset<T, SinhVienUpsertArgs<ExtArgs>>): Prisma__SinhVienClient<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SinhViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienCountArgs} args - Arguments to filter SinhViens to count.
     * @example
     * // Count the number of SinhViens
     * const count = await prisma.sinhVien.count({
     *   where: {
     *     // ... the filter for the SinhViens we want to count
     *   }
     * })
    **/
    count<T extends SinhVienCountArgs>(
      args?: Subset<T, SinhVienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SinhVienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SinhVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SinhVienAggregateArgs>(args: Subset<T, SinhVienAggregateArgs>): Prisma.PrismaPromise<GetSinhVienAggregateType<T>>

    /**
     * Group by SinhVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinhVienGroupByArgs} args - Group by arguments.
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
      T extends SinhVienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SinhVienGroupByArgs['orderBy'] }
        : { orderBy?: SinhVienGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SinhVienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSinhVienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SinhVien model
   */
  readonly fields: SinhVienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SinhVien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SinhVienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lop<T extends LopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LopDefaultArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SinhVien model
   */
  interface SinhVienFieldRefs {
    readonly maSV: FieldRef<"SinhVien", 'Int'>
    readonly tenSV: FieldRef<"SinhVien", 'String'>
    readonly email: FieldRef<"SinhVien", 'String'>
    readonly maLopId: FieldRef<"SinhVien", 'Int'>
    readonly createdAt: FieldRef<"SinhVien", 'DateTime'>
    readonly updatedAt: FieldRef<"SinhVien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SinhVien findUnique
   */
  export type SinhVienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter, which SinhVien to fetch.
     */
    where: SinhVienWhereUniqueInput
  }

  /**
   * SinhVien findUniqueOrThrow
   */
  export type SinhVienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter, which SinhVien to fetch.
     */
    where: SinhVienWhereUniqueInput
  }

  /**
   * SinhVien findFirst
   */
  export type SinhVienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter, which SinhVien to fetch.
     */
    where?: SinhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SinhViens to fetch.
     */
    orderBy?: SinhVienOrderByWithRelationInput | SinhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SinhViens.
     */
    cursor?: SinhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SinhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SinhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SinhViens.
     */
    distinct?: SinhVienScalarFieldEnum | SinhVienScalarFieldEnum[]
  }

  /**
   * SinhVien findFirstOrThrow
   */
  export type SinhVienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter, which SinhVien to fetch.
     */
    where?: SinhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SinhViens to fetch.
     */
    orderBy?: SinhVienOrderByWithRelationInput | SinhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SinhViens.
     */
    cursor?: SinhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SinhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SinhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SinhViens.
     */
    distinct?: SinhVienScalarFieldEnum | SinhVienScalarFieldEnum[]
  }

  /**
   * SinhVien findMany
   */
  export type SinhVienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter, which SinhViens to fetch.
     */
    where?: SinhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SinhViens to fetch.
     */
    orderBy?: SinhVienOrderByWithRelationInput | SinhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SinhViens.
     */
    cursor?: SinhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SinhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SinhViens.
     */
    skip?: number
    distinct?: SinhVienScalarFieldEnum | SinhVienScalarFieldEnum[]
  }

  /**
   * SinhVien create
   */
  export type SinhVienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * The data needed to create a SinhVien.
     */
    data: XOR<SinhVienCreateInput, SinhVienUncheckedCreateInput>
  }

  /**
   * SinhVien createMany
   */
  export type SinhVienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SinhViens.
     */
    data: SinhVienCreateManyInput | SinhVienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SinhVien createManyAndReturn
   */
  export type SinhVienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * The data used to create many SinhViens.
     */
    data: SinhVienCreateManyInput | SinhVienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SinhVien update
   */
  export type SinhVienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * The data needed to update a SinhVien.
     */
    data: XOR<SinhVienUpdateInput, SinhVienUncheckedUpdateInput>
    /**
     * Choose, which SinhVien to update.
     */
    where: SinhVienWhereUniqueInput
  }

  /**
   * SinhVien updateMany
   */
  export type SinhVienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SinhViens.
     */
    data: XOR<SinhVienUpdateManyMutationInput, SinhVienUncheckedUpdateManyInput>
    /**
     * Filter which SinhViens to update
     */
    where?: SinhVienWhereInput
    /**
     * Limit how many SinhViens to update.
     */
    limit?: number
  }

  /**
   * SinhVien updateManyAndReturn
   */
  export type SinhVienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * The data used to update SinhViens.
     */
    data: XOR<SinhVienUpdateManyMutationInput, SinhVienUncheckedUpdateManyInput>
    /**
     * Filter which SinhViens to update
     */
    where?: SinhVienWhereInput
    /**
     * Limit how many SinhViens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SinhVien upsert
   */
  export type SinhVienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * The filter to search for the SinhVien to update in case it exists.
     */
    where: SinhVienWhereUniqueInput
    /**
     * In case the SinhVien found by the `where` argument doesn't exist, create a new SinhVien with this data.
     */
    create: XOR<SinhVienCreateInput, SinhVienUncheckedCreateInput>
    /**
     * In case the SinhVien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SinhVienUpdateInput, SinhVienUncheckedUpdateInput>
  }

  /**
   * SinhVien delete
   */
  export type SinhVienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    /**
     * Filter which SinhVien to delete.
     */
    where: SinhVienWhereUniqueInput
  }

  /**
   * SinhVien deleteMany
   */
  export type SinhVienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SinhViens to delete
     */
    where?: SinhVienWhereInput
    /**
     * Limit how many SinhViens to delete.
     */
    limit?: number
  }

  /**
   * SinhVien without action
   */
  export type SinhVienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
  }


  /**
   * Model Lop
   */

  export type AggregateLop = {
    _count: LopCountAggregateOutputType | null
    _avg: LopAvgAggregateOutputType | null
    _sum: LopSumAggregateOutputType | null
    _min: LopMinAggregateOutputType | null
    _max: LopMaxAggregateOutputType | null
  }

  export type LopAvgAggregateOutputType = {
    maLop: number | null
    soSV: number | null
  }

  export type LopSumAggregateOutputType = {
    maLop: number | null
    soSV: number | null
  }

  export type LopMinAggregateOutputType = {
    maLop: number | null
    tenLop: string | null
    soSV: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LopMaxAggregateOutputType = {
    maLop: number | null
    tenLop: string | null
    soSV: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LopCountAggregateOutputType = {
    maLop: number
    tenLop: number
    soSV: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LopAvgAggregateInputType = {
    maLop?: true
    soSV?: true
  }

  export type LopSumAggregateInputType = {
    maLop?: true
    soSV?: true
  }

  export type LopMinAggregateInputType = {
    maLop?: true
    tenLop?: true
    soSV?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LopMaxAggregateInputType = {
    maLop?: true
    tenLop?: true
    soSV?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LopCountAggregateInputType = {
    maLop?: true
    tenLop?: true
    soSV?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lop to aggregate.
     */
    where?: LopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lops to fetch.
     */
    orderBy?: LopOrderByWithRelationInput | LopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lops
    **/
    _count?: true | LopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LopMaxAggregateInputType
  }

  export type GetLopAggregateType<T extends LopAggregateArgs> = {
        [P in keyof T & keyof AggregateLop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLop[P]>
      : GetScalarType<T[P], AggregateLop[P]>
  }




  export type LopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LopWhereInput
    orderBy?: LopOrderByWithAggregationInput | LopOrderByWithAggregationInput[]
    by: LopScalarFieldEnum[] | LopScalarFieldEnum
    having?: LopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LopCountAggregateInputType | true
    _avg?: LopAvgAggregateInputType
    _sum?: LopSumAggregateInputType
    _min?: LopMinAggregateInputType
    _max?: LopMaxAggregateInputType
  }

  export type LopGroupByOutputType = {
    maLop: number
    tenLop: string
    soSV: number
    createdAt: Date
    updatedAt: Date
    _count: LopCountAggregateOutputType | null
    _avg: LopAvgAggregateOutputType | null
    _sum: LopSumAggregateOutputType | null
    _min: LopMinAggregateOutputType | null
    _max: LopMaxAggregateOutputType | null
  }

  type GetLopGroupByPayload<T extends LopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LopGroupByOutputType[P]>
            : GetScalarType<T[P], LopGroupByOutputType[P]>
        }
      >
    >


  export type LopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maLop?: boolean
    tenLop?: boolean
    soSV?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SinhVien?: boolean | Lop$SinhVienArgs<ExtArgs>
    _count?: boolean | LopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lop"]>

  export type LopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maLop?: boolean
    tenLop?: boolean
    soSV?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lop"]>

  export type LopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maLop?: boolean
    tenLop?: boolean
    soSV?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lop"]>

  export type LopSelectScalar = {
    maLop?: boolean
    tenLop?: boolean
    soSV?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maLop" | "tenLop" | "soSV" | "createdAt" | "updatedAt", ExtArgs["result"]["lop"]>
  export type LopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SinhVien?: boolean | Lop$SinhVienArgs<ExtArgs>
    _count?: boolean | LopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lop"
    objects: {
      SinhVien: Prisma.$SinhVienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      maLop: number
      tenLop: string
      soSV: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lop"]>
    composites: {}
  }

  type LopGetPayload<S extends boolean | null | undefined | LopDefaultArgs> = $Result.GetResult<Prisma.$LopPayload, S>

  type LopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LopCountAggregateInputType | true
    }

  export interface LopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lop'], meta: { name: 'Lop' } }
    /**
     * Find zero or one Lop that matches the filter.
     * @param {LopFindUniqueArgs} args - Arguments to find a Lop
     * @example
     * // Get one Lop
     * const lop = await prisma.lop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LopFindUniqueArgs>(args: SelectSubset<T, LopFindUniqueArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LopFindUniqueOrThrowArgs} args - Arguments to find a Lop
     * @example
     * // Get one Lop
     * const lop = await prisma.lop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LopFindUniqueOrThrowArgs>(args: SelectSubset<T, LopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopFindFirstArgs} args - Arguments to find a Lop
     * @example
     * // Get one Lop
     * const lop = await prisma.lop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LopFindFirstArgs>(args?: SelectSubset<T, LopFindFirstArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopFindFirstOrThrowArgs} args - Arguments to find a Lop
     * @example
     * // Get one Lop
     * const lop = await prisma.lop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LopFindFirstOrThrowArgs>(args?: SelectSubset<T, LopFindFirstOrThrowArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lops
     * const lops = await prisma.lop.findMany()
     * 
     * // Get first 10 Lops
     * const lops = await prisma.lop.findMany({ take: 10 })
     * 
     * // Only select the `maLop`
     * const lopWithMaLopOnly = await prisma.lop.findMany({ select: { maLop: true } })
     * 
     */
    findMany<T extends LopFindManyArgs>(args?: SelectSubset<T, LopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lop.
     * @param {LopCreateArgs} args - Arguments to create a Lop.
     * @example
     * // Create one Lop
     * const Lop = await prisma.lop.create({
     *   data: {
     *     // ... data to create a Lop
     *   }
     * })
     * 
     */
    create<T extends LopCreateArgs>(args: SelectSubset<T, LopCreateArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lops.
     * @param {LopCreateManyArgs} args - Arguments to create many Lops.
     * @example
     * // Create many Lops
     * const lop = await prisma.lop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LopCreateManyArgs>(args?: SelectSubset<T, LopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lops and returns the data saved in the database.
     * @param {LopCreateManyAndReturnArgs} args - Arguments to create many Lops.
     * @example
     * // Create many Lops
     * const lop = await prisma.lop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lops and only return the `maLop`
     * const lopWithMaLopOnly = await prisma.lop.createManyAndReturn({
     *   select: { maLop: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LopCreateManyAndReturnArgs>(args?: SelectSubset<T, LopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lop.
     * @param {LopDeleteArgs} args - Arguments to delete one Lop.
     * @example
     * // Delete one Lop
     * const Lop = await prisma.lop.delete({
     *   where: {
     *     // ... filter to delete one Lop
     *   }
     * })
     * 
     */
    delete<T extends LopDeleteArgs>(args: SelectSubset<T, LopDeleteArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lop.
     * @param {LopUpdateArgs} args - Arguments to update one Lop.
     * @example
     * // Update one Lop
     * const lop = await prisma.lop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LopUpdateArgs>(args: SelectSubset<T, LopUpdateArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lops.
     * @param {LopDeleteManyArgs} args - Arguments to filter Lops to delete.
     * @example
     * // Delete a few Lops
     * const { count } = await prisma.lop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LopDeleteManyArgs>(args?: SelectSubset<T, LopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lops
     * const lop = await prisma.lop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LopUpdateManyArgs>(args: SelectSubset<T, LopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lops and returns the data updated in the database.
     * @param {LopUpdateManyAndReturnArgs} args - Arguments to update many Lops.
     * @example
     * // Update many Lops
     * const lop = await prisma.lop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lops and only return the `maLop`
     * const lopWithMaLopOnly = await prisma.lop.updateManyAndReturn({
     *   select: { maLop: true },
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
    updateManyAndReturn<T extends LopUpdateManyAndReturnArgs>(args: SelectSubset<T, LopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lop.
     * @param {LopUpsertArgs} args - Arguments to update or create a Lop.
     * @example
     * // Update or create a Lop
     * const lop = await prisma.lop.upsert({
     *   create: {
     *     // ... data to create a Lop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lop we want to update
     *   }
     * })
     */
    upsert<T extends LopUpsertArgs>(args: SelectSubset<T, LopUpsertArgs<ExtArgs>>): Prisma__LopClient<$Result.GetResult<Prisma.$LopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopCountArgs} args - Arguments to filter Lops to count.
     * @example
     * // Count the number of Lops
     * const count = await prisma.lop.count({
     *   where: {
     *     // ... the filter for the Lops we want to count
     *   }
     * })
    **/
    count<T extends LopCountArgs>(
      args?: Subset<T, LopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LopAggregateArgs>(args: Subset<T, LopAggregateArgs>): Prisma.PrismaPromise<GetLopAggregateType<T>>

    /**
     * Group by Lop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LopGroupByArgs} args - Group by arguments.
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
      T extends LopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LopGroupByArgs['orderBy'] }
        : { orderBy?: LopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lop model
   */
  readonly fields: LopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SinhVien<T extends Lop$SinhVienArgs<ExtArgs> = {}>(args?: Subset<T, Lop$SinhVienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SinhVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lop model
   */
  interface LopFieldRefs {
    readonly maLop: FieldRef<"Lop", 'Int'>
    readonly tenLop: FieldRef<"Lop", 'String'>
    readonly soSV: FieldRef<"Lop", 'Int'>
    readonly createdAt: FieldRef<"Lop", 'DateTime'>
    readonly updatedAt: FieldRef<"Lop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lop findUnique
   */
  export type LopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter, which Lop to fetch.
     */
    where: LopWhereUniqueInput
  }

  /**
   * Lop findUniqueOrThrow
   */
  export type LopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter, which Lop to fetch.
     */
    where: LopWhereUniqueInput
  }

  /**
   * Lop findFirst
   */
  export type LopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter, which Lop to fetch.
     */
    where?: LopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lops to fetch.
     */
    orderBy?: LopOrderByWithRelationInput | LopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lops.
     */
    cursor?: LopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lops.
     */
    distinct?: LopScalarFieldEnum | LopScalarFieldEnum[]
  }

  /**
   * Lop findFirstOrThrow
   */
  export type LopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter, which Lop to fetch.
     */
    where?: LopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lops to fetch.
     */
    orderBy?: LopOrderByWithRelationInput | LopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lops.
     */
    cursor?: LopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lops.
     */
    distinct?: LopScalarFieldEnum | LopScalarFieldEnum[]
  }

  /**
   * Lop findMany
   */
  export type LopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter, which Lops to fetch.
     */
    where?: LopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lops to fetch.
     */
    orderBy?: LopOrderByWithRelationInput | LopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lops.
     */
    cursor?: LopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lops.
     */
    skip?: number
    distinct?: LopScalarFieldEnum | LopScalarFieldEnum[]
  }

  /**
   * Lop create
   */
  export type LopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * The data needed to create a Lop.
     */
    data: XOR<LopCreateInput, LopUncheckedCreateInput>
  }

  /**
   * Lop createMany
   */
  export type LopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lops.
     */
    data: LopCreateManyInput | LopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lop createManyAndReturn
   */
  export type LopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * The data used to create many Lops.
     */
    data: LopCreateManyInput | LopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lop update
   */
  export type LopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * The data needed to update a Lop.
     */
    data: XOR<LopUpdateInput, LopUncheckedUpdateInput>
    /**
     * Choose, which Lop to update.
     */
    where: LopWhereUniqueInput
  }

  /**
   * Lop updateMany
   */
  export type LopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lops.
     */
    data: XOR<LopUpdateManyMutationInput, LopUncheckedUpdateManyInput>
    /**
     * Filter which Lops to update
     */
    where?: LopWhereInput
    /**
     * Limit how many Lops to update.
     */
    limit?: number
  }

  /**
   * Lop updateManyAndReturn
   */
  export type LopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * The data used to update Lops.
     */
    data: XOR<LopUpdateManyMutationInput, LopUncheckedUpdateManyInput>
    /**
     * Filter which Lops to update
     */
    where?: LopWhereInput
    /**
     * Limit how many Lops to update.
     */
    limit?: number
  }

  /**
   * Lop upsert
   */
  export type LopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * The filter to search for the Lop to update in case it exists.
     */
    where: LopWhereUniqueInput
    /**
     * In case the Lop found by the `where` argument doesn't exist, create a new Lop with this data.
     */
    create: XOR<LopCreateInput, LopUncheckedCreateInput>
    /**
     * In case the Lop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LopUpdateInput, LopUncheckedUpdateInput>
  }

  /**
   * Lop delete
   */
  export type LopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
    /**
     * Filter which Lop to delete.
     */
    where: LopWhereUniqueInput
  }

  /**
   * Lop deleteMany
   */
  export type LopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lops to delete
     */
    where?: LopWhereInput
    /**
     * Limit how many Lops to delete.
     */
    limit?: number
  }

  /**
   * Lop.SinhVien
   */
  export type Lop$SinhVienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinhVien
     */
    select?: SinhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SinhVien
     */
    omit?: SinhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SinhVienInclude<ExtArgs> | null
    where?: SinhVienWhereInput
    orderBy?: SinhVienOrderByWithRelationInput | SinhVienOrderByWithRelationInput[]
    cursor?: SinhVienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SinhVienScalarFieldEnum | SinhVienScalarFieldEnum[]
  }

  /**
   * Lop without action
   */
  export type LopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lop
     */
    select?: LopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lop
     */
    omit?: LopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LopInclude<ExtArgs> | null
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


  export const SinhVienScalarFieldEnum: {
    maSV: 'maSV',
    tenSV: 'tenSV',
    email: 'email',
    maLopId: 'maLopId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SinhVienScalarFieldEnum = (typeof SinhVienScalarFieldEnum)[keyof typeof SinhVienScalarFieldEnum]


  export const LopScalarFieldEnum: {
    maLop: 'maLop',
    tenLop: 'tenLop',
    soSV: 'soSV',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LopScalarFieldEnum = (typeof LopScalarFieldEnum)[keyof typeof LopScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type SinhVienWhereInput = {
    AND?: SinhVienWhereInput | SinhVienWhereInput[]
    OR?: SinhVienWhereInput[]
    NOT?: SinhVienWhereInput | SinhVienWhereInput[]
    maSV?: IntFilter<"SinhVien"> | number
    tenSV?: StringFilter<"SinhVien"> | string
    email?: StringFilter<"SinhVien"> | string
    maLopId?: IntFilter<"SinhVien"> | number
    createdAt?: DateTimeFilter<"SinhVien"> | Date | string
    updatedAt?: DateTimeFilter<"SinhVien"> | Date | string
    lop?: XOR<LopScalarRelationFilter, LopWhereInput>
  }

  export type SinhVienOrderByWithRelationInput = {
    maSV?: SortOrder
    tenSV?: SortOrder
    email?: SortOrder
    maLopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lop?: LopOrderByWithRelationInput
  }

  export type SinhVienWhereUniqueInput = Prisma.AtLeast<{
    maSV?: number
    email?: string
    AND?: SinhVienWhereInput | SinhVienWhereInput[]
    OR?: SinhVienWhereInput[]
    NOT?: SinhVienWhereInput | SinhVienWhereInput[]
    tenSV?: StringFilter<"SinhVien"> | string
    maLopId?: IntFilter<"SinhVien"> | number
    createdAt?: DateTimeFilter<"SinhVien"> | Date | string
    updatedAt?: DateTimeFilter<"SinhVien"> | Date | string
    lop?: XOR<LopScalarRelationFilter, LopWhereInput>
  }, "maSV" | "email">

  export type SinhVienOrderByWithAggregationInput = {
    maSV?: SortOrder
    tenSV?: SortOrder
    email?: SortOrder
    maLopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SinhVienCountOrderByAggregateInput
    _avg?: SinhVienAvgOrderByAggregateInput
    _max?: SinhVienMaxOrderByAggregateInput
    _min?: SinhVienMinOrderByAggregateInput
    _sum?: SinhVienSumOrderByAggregateInput
  }

  export type SinhVienScalarWhereWithAggregatesInput = {
    AND?: SinhVienScalarWhereWithAggregatesInput | SinhVienScalarWhereWithAggregatesInput[]
    OR?: SinhVienScalarWhereWithAggregatesInput[]
    NOT?: SinhVienScalarWhereWithAggregatesInput | SinhVienScalarWhereWithAggregatesInput[]
    maSV?: IntWithAggregatesFilter<"SinhVien"> | number
    tenSV?: StringWithAggregatesFilter<"SinhVien"> | string
    email?: StringWithAggregatesFilter<"SinhVien"> | string
    maLopId?: IntWithAggregatesFilter<"SinhVien"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SinhVien"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SinhVien"> | Date | string
  }

  export type LopWhereInput = {
    AND?: LopWhereInput | LopWhereInput[]
    OR?: LopWhereInput[]
    NOT?: LopWhereInput | LopWhereInput[]
    maLop?: IntFilter<"Lop"> | number
    tenLop?: StringFilter<"Lop"> | string
    soSV?: IntFilter<"Lop"> | number
    createdAt?: DateTimeFilter<"Lop"> | Date | string
    updatedAt?: DateTimeFilter<"Lop"> | Date | string
    SinhVien?: SinhVienListRelationFilter
  }

  export type LopOrderByWithRelationInput = {
    maLop?: SortOrder
    tenLop?: SortOrder
    soSV?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SinhVien?: SinhVienOrderByRelationAggregateInput
  }

  export type LopWhereUniqueInput = Prisma.AtLeast<{
    maLop?: number
    tenLop?: string
    AND?: LopWhereInput | LopWhereInput[]
    OR?: LopWhereInput[]
    NOT?: LopWhereInput | LopWhereInput[]
    soSV?: IntFilter<"Lop"> | number
    createdAt?: DateTimeFilter<"Lop"> | Date | string
    updatedAt?: DateTimeFilter<"Lop"> | Date | string
    SinhVien?: SinhVienListRelationFilter
  }, "maLop" | "tenLop">

  export type LopOrderByWithAggregationInput = {
    maLop?: SortOrder
    tenLop?: SortOrder
    soSV?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LopCountOrderByAggregateInput
    _avg?: LopAvgOrderByAggregateInput
    _max?: LopMaxOrderByAggregateInput
    _min?: LopMinOrderByAggregateInput
    _sum?: LopSumOrderByAggregateInput
  }

  export type LopScalarWhereWithAggregatesInput = {
    AND?: LopScalarWhereWithAggregatesInput | LopScalarWhereWithAggregatesInput[]
    OR?: LopScalarWhereWithAggregatesInput[]
    NOT?: LopScalarWhereWithAggregatesInput | LopScalarWhereWithAggregatesInput[]
    maLop?: IntWithAggregatesFilter<"Lop"> | number
    tenLop?: StringWithAggregatesFilter<"Lop"> | string
    soSV?: IntWithAggregatesFilter<"Lop"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lop"> | Date | string
  }

  export type SinhVienCreateInput = {
    tenSV: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lop: LopCreateNestedOneWithoutSinhVienInput
  }

  export type SinhVienUncheckedCreateInput = {
    maSV?: number
    tenSV: string
    email: string
    maLopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SinhVienUpdateInput = {
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lop?: LopUpdateOneRequiredWithoutSinhVienNestedInput
  }

  export type SinhVienUncheckedUpdateInput = {
    maSV?: IntFieldUpdateOperationsInput | number
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    maLopId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SinhVienCreateManyInput = {
    maSV?: number
    tenSV: string
    email: string
    maLopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SinhVienUpdateManyMutationInput = {
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SinhVienUncheckedUpdateManyInput = {
    maSV?: IntFieldUpdateOperationsInput | number
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    maLopId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LopCreateInput = {
    tenLop: string
    soSV?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    SinhVien?: SinhVienCreateNestedManyWithoutLopInput
  }

  export type LopUncheckedCreateInput = {
    maLop?: number
    tenLop: string
    soSV?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    SinhVien?: SinhVienUncheckedCreateNestedManyWithoutLopInput
  }

  export type LopUpdateInput = {
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SinhVien?: SinhVienUpdateManyWithoutLopNestedInput
  }

  export type LopUncheckedUpdateInput = {
    maLop?: IntFieldUpdateOperationsInput | number
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SinhVien?: SinhVienUncheckedUpdateManyWithoutLopNestedInput
  }

  export type LopCreateManyInput = {
    maLop?: number
    tenLop: string
    soSV?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LopUpdateManyMutationInput = {
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LopUncheckedUpdateManyInput = {
    maLop?: IntFieldUpdateOperationsInput | number
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LopScalarRelationFilter = {
    is?: LopWhereInput
    isNot?: LopWhereInput
  }

  export type SinhVienCountOrderByAggregateInput = {
    maSV?: SortOrder
    tenSV?: SortOrder
    email?: SortOrder
    maLopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SinhVienAvgOrderByAggregateInput = {
    maSV?: SortOrder
    maLopId?: SortOrder
  }

  export type SinhVienMaxOrderByAggregateInput = {
    maSV?: SortOrder
    tenSV?: SortOrder
    email?: SortOrder
    maLopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SinhVienMinOrderByAggregateInput = {
    maSV?: SortOrder
    tenSV?: SortOrder
    email?: SortOrder
    maLopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SinhVienSumOrderByAggregateInput = {
    maSV?: SortOrder
    maLopId?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SinhVienListRelationFilter = {
    every?: SinhVienWhereInput
    some?: SinhVienWhereInput
    none?: SinhVienWhereInput
  }

  export type SinhVienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LopCountOrderByAggregateInput = {
    maLop?: SortOrder
    tenLop?: SortOrder
    soSV?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LopAvgOrderByAggregateInput = {
    maLop?: SortOrder
    soSV?: SortOrder
  }

  export type LopMaxOrderByAggregateInput = {
    maLop?: SortOrder
    tenLop?: SortOrder
    soSV?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LopMinOrderByAggregateInput = {
    maLop?: SortOrder
    tenLop?: SortOrder
    soSV?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LopSumOrderByAggregateInput = {
    maLop?: SortOrder
    soSV?: SortOrder
  }

  export type LopCreateNestedOneWithoutSinhVienInput = {
    create?: XOR<LopCreateWithoutSinhVienInput, LopUncheckedCreateWithoutSinhVienInput>
    connectOrCreate?: LopCreateOrConnectWithoutSinhVienInput
    connect?: LopWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LopUpdateOneRequiredWithoutSinhVienNestedInput = {
    create?: XOR<LopCreateWithoutSinhVienInput, LopUncheckedCreateWithoutSinhVienInput>
    connectOrCreate?: LopCreateOrConnectWithoutSinhVienInput
    upsert?: LopUpsertWithoutSinhVienInput
    connect?: LopWhereUniqueInput
    update?: XOR<XOR<LopUpdateToOneWithWhereWithoutSinhVienInput, LopUpdateWithoutSinhVienInput>, LopUncheckedUpdateWithoutSinhVienInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SinhVienCreateNestedManyWithoutLopInput = {
    create?: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput> | SinhVienCreateWithoutLopInput[] | SinhVienUncheckedCreateWithoutLopInput[]
    connectOrCreate?: SinhVienCreateOrConnectWithoutLopInput | SinhVienCreateOrConnectWithoutLopInput[]
    createMany?: SinhVienCreateManyLopInputEnvelope
    connect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
  }

  export type SinhVienUncheckedCreateNestedManyWithoutLopInput = {
    create?: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput> | SinhVienCreateWithoutLopInput[] | SinhVienUncheckedCreateWithoutLopInput[]
    connectOrCreate?: SinhVienCreateOrConnectWithoutLopInput | SinhVienCreateOrConnectWithoutLopInput[]
    createMany?: SinhVienCreateManyLopInputEnvelope
    connect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
  }

  export type SinhVienUpdateManyWithoutLopNestedInput = {
    create?: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput> | SinhVienCreateWithoutLopInput[] | SinhVienUncheckedCreateWithoutLopInput[]
    connectOrCreate?: SinhVienCreateOrConnectWithoutLopInput | SinhVienCreateOrConnectWithoutLopInput[]
    upsert?: SinhVienUpsertWithWhereUniqueWithoutLopInput | SinhVienUpsertWithWhereUniqueWithoutLopInput[]
    createMany?: SinhVienCreateManyLopInputEnvelope
    set?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    disconnect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    delete?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    connect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    update?: SinhVienUpdateWithWhereUniqueWithoutLopInput | SinhVienUpdateWithWhereUniqueWithoutLopInput[]
    updateMany?: SinhVienUpdateManyWithWhereWithoutLopInput | SinhVienUpdateManyWithWhereWithoutLopInput[]
    deleteMany?: SinhVienScalarWhereInput | SinhVienScalarWhereInput[]
  }

  export type SinhVienUncheckedUpdateManyWithoutLopNestedInput = {
    create?: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput> | SinhVienCreateWithoutLopInput[] | SinhVienUncheckedCreateWithoutLopInput[]
    connectOrCreate?: SinhVienCreateOrConnectWithoutLopInput | SinhVienCreateOrConnectWithoutLopInput[]
    upsert?: SinhVienUpsertWithWhereUniqueWithoutLopInput | SinhVienUpsertWithWhereUniqueWithoutLopInput[]
    createMany?: SinhVienCreateManyLopInputEnvelope
    set?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    disconnect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    delete?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    connect?: SinhVienWhereUniqueInput | SinhVienWhereUniqueInput[]
    update?: SinhVienUpdateWithWhereUniqueWithoutLopInput | SinhVienUpdateWithWhereUniqueWithoutLopInput[]
    updateMany?: SinhVienUpdateManyWithWhereWithoutLopInput | SinhVienUpdateManyWithWhereWithoutLopInput[]
    deleteMany?: SinhVienScalarWhereInput | SinhVienScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LopCreateWithoutSinhVienInput = {
    tenLop: string
    soSV?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LopUncheckedCreateWithoutSinhVienInput = {
    maLop?: number
    tenLop: string
    soSV?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LopCreateOrConnectWithoutSinhVienInput = {
    where: LopWhereUniqueInput
    create: XOR<LopCreateWithoutSinhVienInput, LopUncheckedCreateWithoutSinhVienInput>
  }

  export type LopUpsertWithoutSinhVienInput = {
    update: XOR<LopUpdateWithoutSinhVienInput, LopUncheckedUpdateWithoutSinhVienInput>
    create: XOR<LopCreateWithoutSinhVienInput, LopUncheckedCreateWithoutSinhVienInput>
    where?: LopWhereInput
  }

  export type LopUpdateToOneWithWhereWithoutSinhVienInput = {
    where?: LopWhereInput
    data: XOR<LopUpdateWithoutSinhVienInput, LopUncheckedUpdateWithoutSinhVienInput>
  }

  export type LopUpdateWithoutSinhVienInput = {
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LopUncheckedUpdateWithoutSinhVienInput = {
    maLop?: IntFieldUpdateOperationsInput | number
    tenLop?: StringFieldUpdateOperationsInput | string
    soSV?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SinhVienCreateWithoutLopInput = {
    tenSV: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SinhVienUncheckedCreateWithoutLopInput = {
    maSV?: number
    tenSV: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SinhVienCreateOrConnectWithoutLopInput = {
    where: SinhVienWhereUniqueInput
    create: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput>
  }

  export type SinhVienCreateManyLopInputEnvelope = {
    data: SinhVienCreateManyLopInput | SinhVienCreateManyLopInput[]
    skipDuplicates?: boolean
  }

  export type SinhVienUpsertWithWhereUniqueWithoutLopInput = {
    where: SinhVienWhereUniqueInput
    update: XOR<SinhVienUpdateWithoutLopInput, SinhVienUncheckedUpdateWithoutLopInput>
    create: XOR<SinhVienCreateWithoutLopInput, SinhVienUncheckedCreateWithoutLopInput>
  }

  export type SinhVienUpdateWithWhereUniqueWithoutLopInput = {
    where: SinhVienWhereUniqueInput
    data: XOR<SinhVienUpdateWithoutLopInput, SinhVienUncheckedUpdateWithoutLopInput>
  }

  export type SinhVienUpdateManyWithWhereWithoutLopInput = {
    where: SinhVienScalarWhereInput
    data: XOR<SinhVienUpdateManyMutationInput, SinhVienUncheckedUpdateManyWithoutLopInput>
  }

  export type SinhVienScalarWhereInput = {
    AND?: SinhVienScalarWhereInput | SinhVienScalarWhereInput[]
    OR?: SinhVienScalarWhereInput[]
    NOT?: SinhVienScalarWhereInput | SinhVienScalarWhereInput[]
    maSV?: IntFilter<"SinhVien"> | number
    tenSV?: StringFilter<"SinhVien"> | string
    email?: StringFilter<"SinhVien"> | string
    maLopId?: IntFilter<"SinhVien"> | number
    createdAt?: DateTimeFilter<"SinhVien"> | Date | string
    updatedAt?: DateTimeFilter<"SinhVien"> | Date | string
  }

  export type SinhVienCreateManyLopInput = {
    maSV?: number
    tenSV: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SinhVienUpdateWithoutLopInput = {
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SinhVienUncheckedUpdateWithoutLopInput = {
    maSV?: IntFieldUpdateOperationsInput | number
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SinhVienUncheckedUpdateManyWithoutLopInput = {
    maSV?: IntFieldUpdateOperationsInput | number
    tenSV?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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