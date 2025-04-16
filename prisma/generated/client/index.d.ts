
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 * 
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>
/**
 * Model Drawing
 * 
 */
export type Drawing = $Result.DefaultSelection<Prisma.$DrawingPayload>
/**
 * Model GeneratedImage
 * 
 */
export type GeneratedImage = $Result.DefaultSelection<Prisma.$GeneratedImagePayload>
/**
 * Model GeneratedVideo
 * 
 */
export type GeneratedVideo = $Result.DefaultSelection<Prisma.$GeneratedVideoPayload>
/**
 * Model GeneratedAudio
 * 
 */
export type GeneratedAudio = $Result.DefaultSelection<Prisma.$GeneratedAudioPayload>
/**
 * Model GenerationLog
 * 
 */
export type GenerationLog = $Result.DefaultSelection<Prisma.$GenerationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DrawingStatus: {
  DRAFT: 'DRAFT',
  PROCESSING: 'PROCESSING',
  HAS_IMAGE: 'HAS_IMAGE',
  HAS_VIDEO: 'HAS_VIDEO',
  ARCHIVED: 'ARCHIVED'
};

export type DrawingStatus = (typeof DrawingStatus)[keyof typeof DrawingStatus]


export const AssetStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus]

}

export type DrawingStatus = $Enums.DrawingStatus

export const DrawingStatus: typeof $Enums.DrawingStatus

export type AssetStatus = $Enums.AssetStatus

export const AssetStatus: typeof $Enums.AssetStatus

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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authenticators
    * const authenticators = await prisma.authenticator.findMany()
    * ```
    */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drawing`: Exposes CRUD operations for the **Drawing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drawings
    * const drawings = await prisma.drawing.findMany()
    * ```
    */
  get drawing(): Prisma.DrawingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedImage`: Exposes CRUD operations for the **GeneratedImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedImages
    * const generatedImages = await prisma.generatedImage.findMany()
    * ```
    */
  get generatedImage(): Prisma.GeneratedImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedVideo`: Exposes CRUD operations for the **GeneratedVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedVideos
    * const generatedVideos = await prisma.generatedVideo.findMany()
    * ```
    */
  get generatedVideo(): Prisma.GeneratedVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedAudio`: Exposes CRUD operations for the **GeneratedAudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedAudios
    * const generatedAudios = await prisma.generatedAudio.findMany()
    * ```
    */
  get generatedAudio(): Prisma.GeneratedAudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generationLog`: Exposes CRUD operations for the **GenerationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenerationLogs
    * const generationLogs = await prisma.generationLog.findMany()
    * ```
    */
  get generationLog(): Prisma.GenerationLogDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Authenticator: 'Authenticator',
    Drawing: 'Drawing',
    GeneratedImage: 'GeneratedImage',
    GeneratedVideo: 'GeneratedVideo',
    GeneratedAudio: 'GeneratedAudio',
    GenerationLog: 'GenerationLog'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "authenticator" | "drawing" | "generatedImage" | "generatedVideo" | "generatedAudio" | "generationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
          }
        }
      }
      Drawing: {
        payload: Prisma.$DrawingPayload<ExtArgs>
        fields: Prisma.DrawingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          findFirst: {
            args: Prisma.DrawingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          findMany: {
            args: Prisma.DrawingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>[]
          }
          create: {
            args: Prisma.DrawingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          createMany: {
            args: Prisma.DrawingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DrawingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          update: {
            args: Prisma.DrawingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          deleteMany: {
            args: Prisma.DrawingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DrawingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          aggregate: {
            args: Prisma.DrawingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawing>
          }
          groupBy: {
            args: Prisma.DrawingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawingCountArgs<ExtArgs>
            result: $Utils.Optional<DrawingCountAggregateOutputType> | number
          }
        }
      }
      GeneratedImage: {
        payload: Prisma.$GeneratedImagePayload<ExtArgs>
        fields: Prisma.GeneratedImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          findFirst: {
            args: Prisma.GeneratedImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          findMany: {
            args: Prisma.GeneratedImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>[]
          }
          create: {
            args: Prisma.GeneratedImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          createMany: {
            args: Prisma.GeneratedImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneratedImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          update: {
            args: Prisma.GeneratedImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          deleteMany: {
            args: Prisma.GeneratedImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneratedImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          aggregate: {
            args: Prisma.GeneratedImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedImage>
          }
          groupBy: {
            args: Prisma.GeneratedImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedImageCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedImageCountAggregateOutputType> | number
          }
        }
      }
      GeneratedVideo: {
        payload: Prisma.$GeneratedVideoPayload<ExtArgs>
        fields: Prisma.GeneratedVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          findFirst: {
            args: Prisma.GeneratedVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          findMany: {
            args: Prisma.GeneratedVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>[]
          }
          create: {
            args: Prisma.GeneratedVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          createMany: {
            args: Prisma.GeneratedVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneratedVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          update: {
            args: Prisma.GeneratedVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneratedVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedVideoPayload>
          }
          aggregate: {
            args: Prisma.GeneratedVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedVideo>
          }
          groupBy: {
            args: Prisma.GeneratedVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedVideoCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedVideoCountAggregateOutputType> | number
          }
        }
      }
      GeneratedAudio: {
        payload: Prisma.$GeneratedAudioPayload<ExtArgs>
        fields: Prisma.GeneratedAudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedAudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedAudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          findFirst: {
            args: Prisma.GeneratedAudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedAudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          findMany: {
            args: Prisma.GeneratedAudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>[]
          }
          create: {
            args: Prisma.GeneratedAudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          createMany: {
            args: Prisma.GeneratedAudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneratedAudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          update: {
            args: Prisma.GeneratedAudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedAudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedAudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneratedAudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedAudioPayload>
          }
          aggregate: {
            args: Prisma.GeneratedAudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedAudio>
          }
          groupBy: {
            args: Prisma.GeneratedAudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedAudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedAudioCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedAudioCountAggregateOutputType> | number
          }
        }
      }
      GenerationLog: {
        payload: Prisma.$GenerationLogPayload<ExtArgs>
        fields: Prisma.GenerationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          findFirst: {
            args: Prisma.GenerationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          findMany: {
            args: Prisma.GenerationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>[]
          }
          create: {
            args: Prisma.GenerationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          createMany: {
            args: Prisma.GenerationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenerationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          update: {
            args: Prisma.GenerationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          deleteMany: {
            args: Prisma.GenerationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenerationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLogPayload>
          }
          aggregate: {
            args: Prisma.GenerationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerationLog>
          }
          groupBy: {
            args: Prisma.GenerationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationLogCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationLogCountAggregateOutputType> | number
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
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
    drawing?: DrawingOmit
    generatedImage?: GeneratedImageOmit
    generatedVideo?: GeneratedVideoOmit
    generatedAudio?: GeneratedAudioOmit
    generationLog?: GenerationLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    authenticators: number
    drawings: number
    generatedImages: number
    generatedVideos: number
    generatedAudios: number
    generationLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    authenticators?: boolean | UserCountOutputTypeCountAuthenticatorsArgs
    drawings?: boolean | UserCountOutputTypeCountDrawingsArgs
    generatedImages?: boolean | UserCountOutputTypeCountGeneratedImagesArgs
    generatedVideos?: boolean | UserCountOutputTypeCountGeneratedVideosArgs
    generatedAudios?: boolean | UserCountOutputTypeCountGeneratedAudiosArgs
    generationLogs?: boolean | UserCountOutputTypeCountGenerationLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDrawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedVideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedAudioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGenerationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
  }


  /**
   * Count Type DrawingCountOutputType
   */

  export type DrawingCountOutputType = {
    generatedImages: number
    generationLogs: number
  }

  export type DrawingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedImages?: boolean | DrawingCountOutputTypeCountGeneratedImagesArgs
    generationLogs?: boolean | DrawingCountOutputTypeCountGenerationLogsArgs
  }

  // Custom InputTypes
  /**
   * DrawingCountOutputType without action
   */
  export type DrawingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingCountOutputType
     */
    select?: DrawingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawingCountOutputType without action
   */
  export type DrawingCountOutputTypeCountGeneratedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
  }

  /**
   * DrawingCountOutputType without action
   */
  export type DrawingCountOutputTypeCountGenerationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
  }


  /**
   * Count Type GeneratedImageCountOutputType
   */

  export type GeneratedImageCountOutputType = {
    derivedImages: number
    generatedVideos: number
    generationLogs: number
  }

  export type GeneratedImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    derivedImages?: boolean | GeneratedImageCountOutputTypeCountDerivedImagesArgs
    generatedVideos?: boolean | GeneratedImageCountOutputTypeCountGeneratedVideosArgs
    generationLogs?: boolean | GeneratedImageCountOutputTypeCountGenerationLogsArgs
  }

  // Custom InputTypes
  /**
   * GeneratedImageCountOutputType without action
   */
  export type GeneratedImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImageCountOutputType
     */
    select?: GeneratedImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneratedImageCountOutputType without action
   */
  export type GeneratedImageCountOutputTypeCountDerivedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
  }

  /**
   * GeneratedImageCountOutputType without action
   */
  export type GeneratedImageCountOutputTypeCountGeneratedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedVideoWhereInput
  }

  /**
   * GeneratedImageCountOutputType without action
   */
  export type GeneratedImageCountOutputTypeCountGenerationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
  }


  /**
   * Count Type GeneratedVideoCountOutputType
   */

  export type GeneratedVideoCountOutputType = {
    childVideos: number
    generationLogs: number
  }

  export type GeneratedVideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childVideos?: boolean | GeneratedVideoCountOutputTypeCountChildVideosArgs
    generationLogs?: boolean | GeneratedVideoCountOutputTypeCountGenerationLogsArgs
  }

  // Custom InputTypes
  /**
   * GeneratedVideoCountOutputType without action
   */
  export type GeneratedVideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideoCountOutputType
     */
    select?: GeneratedVideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneratedVideoCountOutputType without action
   */
  export type GeneratedVideoCountOutputTypeCountChildVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedVideoWhereInput
  }

  /**
   * GeneratedVideoCountOutputType without action
   */
  export type GeneratedVideoCountOutputTypeCountGenerationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
  }


  /**
   * Count Type GeneratedAudioCountOutputType
   */

  export type GeneratedAudioCountOutputType = {
    generationLogs: number
  }

  export type GeneratedAudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generationLogs?: boolean | GeneratedAudioCountOutputTypeCountGenerationLogsArgs
  }

  // Custom InputTypes
  /**
   * GeneratedAudioCountOutputType without action
   */
  export type GeneratedAudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudioCountOutputType
     */
    select?: GeneratedAudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneratedAudioCountOutputType without action
   */
  export type GeneratedAudioCountOutputTypeCountGenerationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    authenticators?: boolean | User$authenticatorsArgs<ExtArgs>
    drawings?: boolean | User$drawingsArgs<ExtArgs>
    generatedImages?: boolean | User$generatedImagesArgs<ExtArgs>
    generatedVideos?: boolean | User$generatedVideosArgs<ExtArgs>
    generatedAudios?: boolean | User$generatedAudiosArgs<ExtArgs>
    generationLogs?: boolean | User$generationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    authenticators?: boolean | User$authenticatorsArgs<ExtArgs>
    drawings?: boolean | User$drawingsArgs<ExtArgs>
    generatedImages?: boolean | User$generatedImagesArgs<ExtArgs>
    generatedVideos?: boolean | User$generatedVideosArgs<ExtArgs>
    generatedAudios?: boolean | User$generatedAudiosArgs<ExtArgs>
    generationLogs?: boolean | User$generationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      authenticators: Prisma.$AuthenticatorPayload<ExtArgs>[]
      drawings: Prisma.$DrawingPayload<ExtArgs>[]
      generatedImages: Prisma.$GeneratedImagePayload<ExtArgs>[]
      generatedVideos: Prisma.$GeneratedVideoPayload<ExtArgs>[]
      generatedAudios: Prisma.$GeneratedAudioPayload<ExtArgs>[]
      generationLogs: Prisma.$GenerationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authenticators<T extends User$authenticatorsArgs<ExtArgs> = {}>(args?: Subset<T, User$authenticatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drawings<T extends User$drawingsArgs<ExtArgs> = {}>(args?: Subset<T, User$drawingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedImages<T extends User$generatedImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedVideos<T extends User$generatedVideosArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedAudios<T extends User$generatedAudiosArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedAudiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generationLogs<T extends User$generationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$generationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.authenticators
   */
  export type User$authenticatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User.drawings
   */
  export type User$drawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    where?: DrawingWhereInput
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    cursor?: DrawingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * User.generatedImages
   */
  export type User$generatedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    cursor?: GeneratedImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * User.generatedVideos
   */
  export type User$generatedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    where?: GeneratedVideoWhereInput
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    cursor?: GeneratedVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * User.generatedAudios
   */
  export type User$generatedAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    where?: GeneratedAudioWhereInput
    orderBy?: GeneratedAudioOrderByWithRelationInput | GeneratedAudioOrderByWithRelationInput[]
    cursor?: GeneratedAudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedAudioScalarFieldEnum | GeneratedAudioScalarFieldEnum[]
  }

  /**
   * User.generationLogs
   */
  export type User$generationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    cursor?: GenerationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }


  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authenticators
    **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }




  export type AuthenticatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>



  export type AuthenticatorSelectScalar = {
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credentialID" | "userId" | "providerAccountId" | "credentialPublicKey" | "counter" | "credentialDeviceType" | "credentialBackedUp" | "transports", ExtArgs["result"]["authenticator"]>
  export type AuthenticatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authenticator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credentialID: string
      userId: string
      providerAccountId: string
      credentialPublicKey: string
      counter: number
      credentialDeviceType: string
      credentialBackedUp: boolean
      transports: string | null
    }, ExtArgs["result"]["authenticator"]>
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authenticator'], meta: { name: 'Authenticator' } }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     * 
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     * 
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     * 
     */
    findMany<T extends AuthenticatorFindManyArgs>(args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorCreateArgs>(args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorCreateManyArgs>(args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeleteArgs>(args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorUpdateArgs>(args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticatorAggregateArgs>(args: Subset<T, AuthenticatorAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
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
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authenticator model
   */
  readonly fields: AuthenticatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly credentialID: FieldRef<"Authenticator", 'String'>
    readonly userId: FieldRef<"Authenticator", 'String'>
    readonly providerAccountId: FieldRef<"Authenticator", 'String'>
    readonly credentialPublicKey: FieldRef<"Authenticator", 'String'>
    readonly counter: FieldRef<"Authenticator", 'Int'>
    readonly credentialDeviceType: FieldRef<"Authenticator", 'String'>
    readonly credentialBackedUp: FieldRef<"Authenticator", 'Boolean'>
    readonly transports: FieldRef<"Authenticator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
  }


  /**
   * Model Drawing
   */

  export type AggregateDrawing = {
    _count: DrawingCountAggregateOutputType | null
    _min: DrawingMinAggregateOutputType | null
    _max: DrawingMaxAggregateOutputType | null
  }

  export type DrawingMinAggregateOutputType = {
    id: string | null
    title: string | null
    previewUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    status: $Enums.DrawingStatus | null
    userId: string | null
  }

  export type DrawingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    previewUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    status: $Enums.DrawingStatus | null
    userId: string | null
  }

  export type DrawingCountAggregateOutputType = {
    id: number
    title: number
    content: number
    previewUrl: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    status: number
    userId: number
    _all: number
  }


  export type DrawingMinAggregateInputType = {
    id?: true
    title?: true
    previewUrl?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    status?: true
    userId?: true
  }

  export type DrawingMaxAggregateInputType = {
    id?: true
    title?: true
    previewUrl?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    status?: true
    userId?: true
  }

  export type DrawingCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    previewUrl?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type DrawingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drawing to aggregate.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drawings
    **/
    _count?: true | DrawingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawingMaxAggregateInputType
  }

  export type GetDrawingAggregateType<T extends DrawingAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawing[P]>
      : GetScalarType<T[P], AggregateDrawing[P]>
  }




  export type DrawingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingWhereInput
    orderBy?: DrawingOrderByWithAggregationInput | DrawingOrderByWithAggregationInput[]
    by: DrawingScalarFieldEnum[] | DrawingScalarFieldEnum
    having?: DrawingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawingCountAggregateInputType | true
    _min?: DrawingMinAggregateInputType
    _max?: DrawingMaxAggregateInputType
  }

  export type DrawingGroupByOutputType = {
    id: string
    title: string | null
    content: JsonValue | null
    previewUrl: string | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    status: $Enums.DrawingStatus
    userId: string
    _count: DrawingCountAggregateOutputType | null
    _min: DrawingMinAggregateOutputType | null
    _max: DrawingMaxAggregateOutputType | null
  }

  type GetDrawingGroupByPayload<T extends DrawingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawingGroupByOutputType[P]>
            : GetScalarType<T[P], DrawingGroupByOutputType[P]>
        }
      >
    >


  export type DrawingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    previewUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    generatedImages?: boolean | Drawing$generatedImagesArgs<ExtArgs>
    generationLogs?: boolean | Drawing$generationLogsArgs<ExtArgs>
    _count?: boolean | DrawingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawing"]>



  export type DrawingSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    previewUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    status?: boolean
    userId?: boolean
  }

  export type DrawingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "previewUrl" | "createdAt" | "updatedAt" | "isDeleted" | "status" | "userId", ExtArgs["result"]["drawing"]>
  export type DrawingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    generatedImages?: boolean | Drawing$generatedImagesArgs<ExtArgs>
    generationLogs?: boolean | Drawing$generationLogsArgs<ExtArgs>
    _count?: boolean | DrawingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DrawingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drawing"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      generatedImages: Prisma.$GeneratedImagePayload<ExtArgs>[]
      generationLogs: Prisma.$GenerationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: Prisma.JsonValue | null
      previewUrl: string | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      status: $Enums.DrawingStatus
      userId: string
    }, ExtArgs["result"]["drawing"]>
    composites: {}
  }

  type DrawingGetPayload<S extends boolean | null | undefined | DrawingDefaultArgs> = $Result.GetResult<Prisma.$DrawingPayload, S>

  type DrawingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawingCountAggregateInputType | true
    }

  export interface DrawingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drawing'], meta: { name: 'Drawing' } }
    /**
     * Find zero or one Drawing that matches the filter.
     * @param {DrawingFindUniqueArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawingFindUniqueArgs>(args: SelectSubset<T, DrawingFindUniqueArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drawing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawingFindUniqueOrThrowArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawingFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drawing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindFirstArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawingFindFirstArgs>(args?: SelectSubset<T, DrawingFindFirstArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drawing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindFirstOrThrowArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawingFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drawings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drawings
     * const drawings = await prisma.drawing.findMany()
     * 
     * // Get first 10 Drawings
     * const drawings = await prisma.drawing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawingWithIdOnly = await prisma.drawing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawingFindManyArgs>(args?: SelectSubset<T, DrawingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drawing.
     * @param {DrawingCreateArgs} args - Arguments to create a Drawing.
     * @example
     * // Create one Drawing
     * const Drawing = await prisma.drawing.create({
     *   data: {
     *     // ... data to create a Drawing
     *   }
     * })
     * 
     */
    create<T extends DrawingCreateArgs>(args: SelectSubset<T, DrawingCreateArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drawings.
     * @param {DrawingCreateManyArgs} args - Arguments to create many Drawings.
     * @example
     * // Create many Drawings
     * const drawing = await prisma.drawing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawingCreateManyArgs>(args?: SelectSubset<T, DrawingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Drawing.
     * @param {DrawingDeleteArgs} args - Arguments to delete one Drawing.
     * @example
     * // Delete one Drawing
     * const Drawing = await prisma.drawing.delete({
     *   where: {
     *     // ... filter to delete one Drawing
     *   }
     * })
     * 
     */
    delete<T extends DrawingDeleteArgs>(args: SelectSubset<T, DrawingDeleteArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drawing.
     * @param {DrawingUpdateArgs} args - Arguments to update one Drawing.
     * @example
     * // Update one Drawing
     * const drawing = await prisma.drawing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawingUpdateArgs>(args: SelectSubset<T, DrawingUpdateArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drawings.
     * @param {DrawingDeleteManyArgs} args - Arguments to filter Drawings to delete.
     * @example
     * // Delete a few Drawings
     * const { count } = await prisma.drawing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawingDeleteManyArgs>(args?: SelectSubset<T, DrawingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drawings
     * const drawing = await prisma.drawing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawingUpdateManyArgs>(args: SelectSubset<T, DrawingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Drawing.
     * @param {DrawingUpsertArgs} args - Arguments to update or create a Drawing.
     * @example
     * // Update or create a Drawing
     * const drawing = await prisma.drawing.upsert({
     *   create: {
     *     // ... data to create a Drawing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drawing we want to update
     *   }
     * })
     */
    upsert<T extends DrawingUpsertArgs>(args: SelectSubset<T, DrawingUpsertArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingCountArgs} args - Arguments to filter Drawings to count.
     * @example
     * // Count the number of Drawings
     * const count = await prisma.drawing.count({
     *   where: {
     *     // ... the filter for the Drawings we want to count
     *   }
     * })
    **/
    count<T extends DrawingCountArgs>(
      args?: Subset<T, DrawingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawingAggregateArgs>(args: Subset<T, DrawingAggregateArgs>): Prisma.PrismaPromise<GetDrawingAggregateType<T>>

    /**
     * Group by Drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingGroupByArgs} args - Group by arguments.
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
      T extends DrawingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawingGroupByArgs['orderBy'] }
        : { orderBy?: DrawingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drawing model
   */
  readonly fields: DrawingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drawing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generatedImages<T extends Drawing$generatedImagesArgs<ExtArgs> = {}>(args?: Subset<T, Drawing$generatedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generationLogs<T extends Drawing$generationLogsArgs<ExtArgs> = {}>(args?: Subset<T, Drawing$generationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drawing model
   */
  interface DrawingFieldRefs {
    readonly id: FieldRef<"Drawing", 'String'>
    readonly title: FieldRef<"Drawing", 'String'>
    readonly content: FieldRef<"Drawing", 'Json'>
    readonly previewUrl: FieldRef<"Drawing", 'String'>
    readonly createdAt: FieldRef<"Drawing", 'DateTime'>
    readonly updatedAt: FieldRef<"Drawing", 'DateTime'>
    readonly isDeleted: FieldRef<"Drawing", 'Boolean'>
    readonly status: FieldRef<"Drawing", 'DrawingStatus'>
    readonly userId: FieldRef<"Drawing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Drawing findUnique
   */
  export type DrawingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing findUniqueOrThrow
   */
  export type DrawingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing findFirst
   */
  export type DrawingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drawings.
     */
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing findFirstOrThrow
   */
  export type DrawingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drawings.
     */
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing findMany
   */
  export type DrawingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawings to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing create
   */
  export type DrawingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The data needed to create a Drawing.
     */
    data: XOR<DrawingCreateInput, DrawingUncheckedCreateInput>
  }

  /**
   * Drawing createMany
   */
  export type DrawingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drawings.
     */
    data: DrawingCreateManyInput | DrawingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drawing update
   */
  export type DrawingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The data needed to update a Drawing.
     */
    data: XOR<DrawingUpdateInput, DrawingUncheckedUpdateInput>
    /**
     * Choose, which Drawing to update.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing updateMany
   */
  export type DrawingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drawings.
     */
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyInput>
    /**
     * Filter which Drawings to update
     */
    where?: DrawingWhereInput
    /**
     * Limit how many Drawings to update.
     */
    limit?: number
  }

  /**
   * Drawing upsert
   */
  export type DrawingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The filter to search for the Drawing to update in case it exists.
     */
    where: DrawingWhereUniqueInput
    /**
     * In case the Drawing found by the `where` argument doesn't exist, create a new Drawing with this data.
     */
    create: XOR<DrawingCreateInput, DrawingUncheckedCreateInput>
    /**
     * In case the Drawing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawingUpdateInput, DrawingUncheckedUpdateInput>
  }

  /**
   * Drawing delete
   */
  export type DrawingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter which Drawing to delete.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing deleteMany
   */
  export type DrawingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drawings to delete
     */
    where?: DrawingWhereInput
    /**
     * Limit how many Drawings to delete.
     */
    limit?: number
  }

  /**
   * Drawing.generatedImages
   */
  export type Drawing$generatedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    cursor?: GeneratedImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * Drawing.generationLogs
   */
  export type Drawing$generationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    cursor?: GenerationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * Drawing without action
   */
  export type DrawingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedImage
   */

  export type AggregateGeneratedImage = {
    _count: GeneratedImageCountAggregateOutputType | null
    _avg: GeneratedImageAvgAggregateOutputType | null
    _sum: GeneratedImageSumAggregateOutputType | null
    _min: GeneratedImageMinAggregateOutputType | null
    _max: GeneratedImageMaxAggregateOutputType | null
  }

  export type GeneratedImageAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type GeneratedImageSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type GeneratedImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    width: number | null
    height: number | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    isDeleted: boolean | null
    title: string | null
    userId: string | null
    sourceDrawingId: string | null
    sourceImageId: string | null
  }

  export type GeneratedImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    width: number | null
    height: number | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    isDeleted: boolean | null
    title: string | null
    userId: string | null
    sourceDrawingId: string | null
    sourceImageId: string | null
  }

  export type GeneratedImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    width: number
    height: number
    prompt: number
    modelUsed: number
    parameters: number
    status: number
    replicatePredictionId: number
    createdAt: number
    isDeleted: number
    title: number
    userId: number
    sourceDrawingId: number
    sourceImageId: number
    _all: number
  }


  export type GeneratedImageAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type GeneratedImageSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type GeneratedImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    width?: true
    height?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    title?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
  }

  export type GeneratedImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    width?: true
    height?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    title?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
  }

  export type GeneratedImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    width?: true
    height?: true
    prompt?: true
    modelUsed?: true
    parameters?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    title?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
    _all?: true
  }

  export type GeneratedImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedImage to aggregate.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedImages
    **/
    _count?: true | GeneratedImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedImageMaxAggregateInputType
  }

  export type GetGeneratedImageAggregateType<T extends GeneratedImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedImage[P]>
      : GetScalarType<T[P], AggregateGeneratedImage[P]>
  }




  export type GeneratedImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithAggregationInput | GeneratedImageOrderByWithAggregationInput[]
    by: GeneratedImageScalarFieldEnum[] | GeneratedImageScalarFieldEnum
    having?: GeneratedImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedImageCountAggregateInputType | true
    _avg?: GeneratedImageAvgAggregateInputType
    _sum?: GeneratedImageSumAggregateInputType
    _min?: GeneratedImageMinAggregateInputType
    _max?: GeneratedImageMaxAggregateInputType
  }

  export type GeneratedImageGroupByOutputType = {
    id: string
    imageUrl: string
    width: number | null
    height: number | null
    prompt: string | null
    modelUsed: string | null
    parameters: JsonValue | null
    status: $Enums.AssetStatus
    replicatePredictionId: string | null
    createdAt: Date
    isDeleted: boolean
    title: string | null
    userId: string
    sourceDrawingId: string | null
    sourceImageId: string | null
    _count: GeneratedImageCountAggregateOutputType | null
    _avg: GeneratedImageAvgAggregateOutputType | null
    _sum: GeneratedImageSumAggregateOutputType | null
    _min: GeneratedImageMinAggregateOutputType | null
    _max: GeneratedImageMaxAggregateOutputType | null
  }

  type GetGeneratedImageGroupByPayload<T extends GeneratedImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedImageGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedImageGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    isDeleted?: boolean
    title?: boolean
    userId?: boolean
    sourceDrawingId?: boolean
    sourceImageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceDrawing?: boolean | GeneratedImage$sourceDrawingArgs<ExtArgs>
    sourceImage?: boolean | GeneratedImage$sourceImageArgs<ExtArgs>
    derivedImages?: boolean | GeneratedImage$derivedImagesArgs<ExtArgs>
    generatedVideos?: boolean | GeneratedImage$generatedVideosArgs<ExtArgs>
    generationLogs?: boolean | GeneratedImage$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedImage"]>



  export type GeneratedImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    isDeleted?: boolean
    title?: boolean
    userId?: boolean
    sourceDrawingId?: boolean
    sourceImageId?: boolean
  }

  export type GeneratedImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "width" | "height" | "prompt" | "modelUsed" | "parameters" | "status" | "replicatePredictionId" | "createdAt" | "isDeleted" | "title" | "userId" | "sourceDrawingId" | "sourceImageId", ExtArgs["result"]["generatedImage"]>
  export type GeneratedImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceDrawing?: boolean | GeneratedImage$sourceDrawingArgs<ExtArgs>
    sourceImage?: boolean | GeneratedImage$sourceImageArgs<ExtArgs>
    derivedImages?: boolean | GeneratedImage$derivedImagesArgs<ExtArgs>
    generatedVideos?: boolean | GeneratedImage$generatedVideosArgs<ExtArgs>
    generationLogs?: boolean | GeneratedImage$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneratedImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedImage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sourceDrawing: Prisma.$DrawingPayload<ExtArgs> | null
      sourceImage: Prisma.$GeneratedImagePayload<ExtArgs> | null
      derivedImages: Prisma.$GeneratedImagePayload<ExtArgs>[]
      generatedVideos: Prisma.$GeneratedVideoPayload<ExtArgs>[]
      generationLogs: Prisma.$GenerationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      width: number | null
      height: number | null
      prompt: string | null
      modelUsed: string | null
      parameters: Prisma.JsonValue | null
      status: $Enums.AssetStatus
      replicatePredictionId: string | null
      createdAt: Date
      isDeleted: boolean
      title: string | null
      userId: string
      sourceDrawingId: string | null
      sourceImageId: string | null
    }, ExtArgs["result"]["generatedImage"]>
    composites: {}
  }

  type GeneratedImageGetPayload<S extends boolean | null | undefined | GeneratedImageDefaultArgs> = $Result.GetResult<Prisma.$GeneratedImagePayload, S>

  type GeneratedImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedImageCountAggregateInputType | true
    }

  export interface GeneratedImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedImage'], meta: { name: 'GeneratedImage' } }
    /**
     * Find zero or one GeneratedImage that matches the filter.
     * @param {GeneratedImageFindUniqueArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedImageFindUniqueArgs>(args: SelectSubset<T, GeneratedImageFindUniqueArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedImageFindUniqueOrThrowArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindFirstArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedImageFindFirstArgs>(args?: SelectSubset<T, GeneratedImageFindFirstArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindFirstOrThrowArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedImages
     * const generatedImages = await prisma.generatedImage.findMany()
     * 
     * // Get first 10 GeneratedImages
     * const generatedImages = await prisma.generatedImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedImageWithIdOnly = await prisma.generatedImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedImageFindManyArgs>(args?: SelectSubset<T, GeneratedImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedImage.
     * @param {GeneratedImageCreateArgs} args - Arguments to create a GeneratedImage.
     * @example
     * // Create one GeneratedImage
     * const GeneratedImage = await prisma.generatedImage.create({
     *   data: {
     *     // ... data to create a GeneratedImage
     *   }
     * })
     * 
     */
    create<T extends GeneratedImageCreateArgs>(args: SelectSubset<T, GeneratedImageCreateArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedImages.
     * @param {GeneratedImageCreateManyArgs} args - Arguments to create many GeneratedImages.
     * @example
     * // Create many GeneratedImages
     * const generatedImage = await prisma.generatedImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedImageCreateManyArgs>(args?: SelectSubset<T, GeneratedImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratedImage.
     * @param {GeneratedImageDeleteArgs} args - Arguments to delete one GeneratedImage.
     * @example
     * // Delete one GeneratedImage
     * const GeneratedImage = await prisma.generatedImage.delete({
     *   where: {
     *     // ... filter to delete one GeneratedImage
     *   }
     * })
     * 
     */
    delete<T extends GeneratedImageDeleteArgs>(args: SelectSubset<T, GeneratedImageDeleteArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedImage.
     * @param {GeneratedImageUpdateArgs} args - Arguments to update one GeneratedImage.
     * @example
     * // Update one GeneratedImage
     * const generatedImage = await prisma.generatedImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedImageUpdateArgs>(args: SelectSubset<T, GeneratedImageUpdateArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedImages.
     * @param {GeneratedImageDeleteManyArgs} args - Arguments to filter GeneratedImages to delete.
     * @example
     * // Delete a few GeneratedImages
     * const { count } = await prisma.generatedImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedImageDeleteManyArgs>(args?: SelectSubset<T, GeneratedImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedImages
     * const generatedImage = await prisma.generatedImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedImageUpdateManyArgs>(args: SelectSubset<T, GeneratedImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratedImage.
     * @param {GeneratedImageUpsertArgs} args - Arguments to update or create a GeneratedImage.
     * @example
     * // Update or create a GeneratedImage
     * const generatedImage = await prisma.generatedImage.upsert({
     *   create: {
     *     // ... data to create a GeneratedImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedImage we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedImageUpsertArgs>(args: SelectSubset<T, GeneratedImageUpsertArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageCountArgs} args - Arguments to filter GeneratedImages to count.
     * @example
     * // Count the number of GeneratedImages
     * const count = await prisma.generatedImage.count({
     *   where: {
     *     // ... the filter for the GeneratedImages we want to count
     *   }
     * })
    **/
    count<T extends GeneratedImageCountArgs>(
      args?: Subset<T, GeneratedImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedImageAggregateArgs>(args: Subset<T, GeneratedImageAggregateArgs>): Prisma.PrismaPromise<GetGeneratedImageAggregateType<T>>

    /**
     * Group by GeneratedImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageGroupByArgs} args - Group by arguments.
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
      T extends GeneratedImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedImageGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedImage model
   */
  readonly fields: GeneratedImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceDrawing<T extends GeneratedImage$sourceDrawingArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedImage$sourceDrawingArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceImage<T extends GeneratedImage$sourceImageArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedImage$sourceImageArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    derivedImages<T extends GeneratedImage$derivedImagesArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedImage$derivedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedVideos<T extends GeneratedImage$generatedVideosArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedImage$generatedVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generationLogs<T extends GeneratedImage$generationLogsArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedImage$generationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeneratedImage model
   */
  interface GeneratedImageFieldRefs {
    readonly id: FieldRef<"GeneratedImage", 'String'>
    readonly imageUrl: FieldRef<"GeneratedImage", 'String'>
    readonly width: FieldRef<"GeneratedImage", 'Int'>
    readonly height: FieldRef<"GeneratedImage", 'Int'>
    readonly prompt: FieldRef<"GeneratedImage", 'String'>
    readonly modelUsed: FieldRef<"GeneratedImage", 'String'>
    readonly parameters: FieldRef<"GeneratedImage", 'Json'>
    readonly status: FieldRef<"GeneratedImage", 'AssetStatus'>
    readonly replicatePredictionId: FieldRef<"GeneratedImage", 'String'>
    readonly createdAt: FieldRef<"GeneratedImage", 'DateTime'>
    readonly isDeleted: FieldRef<"GeneratedImage", 'Boolean'>
    readonly title: FieldRef<"GeneratedImage", 'String'>
    readonly userId: FieldRef<"GeneratedImage", 'String'>
    readonly sourceDrawingId: FieldRef<"GeneratedImage", 'String'>
    readonly sourceImageId: FieldRef<"GeneratedImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedImage findUnique
   */
  export type GeneratedImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage findUniqueOrThrow
   */
  export type GeneratedImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage findFirst
   */
  export type GeneratedImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedImages.
     */
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage findFirstOrThrow
   */
  export type GeneratedImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedImages.
     */
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage findMany
   */
  export type GeneratedImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImages to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage create
   */
  export type GeneratedImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedImage.
     */
    data: XOR<GeneratedImageCreateInput, GeneratedImageUncheckedCreateInput>
  }

  /**
   * GeneratedImage createMany
   */
  export type GeneratedImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedImages.
     */
    data: GeneratedImageCreateManyInput | GeneratedImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedImage update
   */
  export type GeneratedImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedImage.
     */
    data: XOR<GeneratedImageUpdateInput, GeneratedImageUncheckedUpdateInput>
    /**
     * Choose, which GeneratedImage to update.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage updateMany
   */
  export type GeneratedImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedImages.
     */
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedImages to update
     */
    where?: GeneratedImageWhereInput
    /**
     * Limit how many GeneratedImages to update.
     */
    limit?: number
  }

  /**
   * GeneratedImage upsert
   */
  export type GeneratedImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedImage to update in case it exists.
     */
    where: GeneratedImageWhereUniqueInput
    /**
     * In case the GeneratedImage found by the `where` argument doesn't exist, create a new GeneratedImage with this data.
     */
    create: XOR<GeneratedImageCreateInput, GeneratedImageUncheckedCreateInput>
    /**
     * In case the GeneratedImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedImageUpdateInput, GeneratedImageUncheckedUpdateInput>
  }

  /**
   * GeneratedImage delete
   */
  export type GeneratedImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter which GeneratedImage to delete.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage deleteMany
   */
  export type GeneratedImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedImages to delete
     */
    where?: GeneratedImageWhereInput
    /**
     * Limit how many GeneratedImages to delete.
     */
    limit?: number
  }

  /**
   * GeneratedImage.sourceDrawing
   */
  export type GeneratedImage$sourceDrawingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    where?: DrawingWhereInput
  }

  /**
   * GeneratedImage.sourceImage
   */
  export type GeneratedImage$sourceImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
  }

  /**
   * GeneratedImage.derivedImages
   */
  export type GeneratedImage$derivedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    cursor?: GeneratedImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage.generatedVideos
   */
  export type GeneratedImage$generatedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    where?: GeneratedVideoWhereInput
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    cursor?: GeneratedVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * GeneratedImage.generationLogs
   */
  export type GeneratedImage$generationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    cursor?: GenerationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GeneratedImage without action
   */
  export type GeneratedImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedVideo
   */

  export type AggregateGeneratedVideo = {
    _count: GeneratedVideoCountAggregateOutputType | null
    _avg: GeneratedVideoAvgAggregateOutputType | null
    _sum: GeneratedVideoSumAggregateOutputType | null
    _min: GeneratedVideoMinAggregateOutputType | null
    _max: GeneratedVideoMaxAggregateOutputType | null
  }

  export type GeneratedVideoAvgAggregateOutputType = {
    duration: number | null
  }

  export type GeneratedVideoSumAggregateOutputType = {
    duration: number | null
  }

  export type GeneratedVideoMinAggregateOutputType = {
    id: string | null
    cloudinaryPublicId: string | null
    videoUrl: string | null
    duration: number | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    public: boolean | null
    title: string | null
    description: string | null
    userId: string | null
    sourceImageId: string | null
    sound: boolean | null
    parentVideoId: string | null
  }

  export type GeneratedVideoMaxAggregateOutputType = {
    id: string | null
    cloudinaryPublicId: string | null
    videoUrl: string | null
    duration: number | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    public: boolean | null
    title: string | null
    description: string | null
    userId: string | null
    sourceImageId: string | null
    sound: boolean | null
    parentVideoId: string | null
  }

  export type GeneratedVideoCountAggregateOutputType = {
    id: number
    cloudinaryPublicId: number
    videoUrl: number
    duration: number
    prompt: number
    modelUsed: number
    parameters: number
    status: number
    replicatePredictionId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    public: number
    title: number
    description: number
    userId: number
    sourceImageId: number
    sound: number
    parentVideoId: number
    _all: number
  }


  export type GeneratedVideoAvgAggregateInputType = {
    duration?: true
  }

  export type GeneratedVideoSumAggregateInputType = {
    duration?: true
  }

  export type GeneratedVideoMinAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    videoUrl?: true
    duration?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    public?: true
    title?: true
    description?: true
    userId?: true
    sourceImageId?: true
    sound?: true
    parentVideoId?: true
  }

  export type GeneratedVideoMaxAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    videoUrl?: true
    duration?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    public?: true
    title?: true
    description?: true
    userId?: true
    sourceImageId?: true
    sound?: true
    parentVideoId?: true
  }

  export type GeneratedVideoCountAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    videoUrl?: true
    duration?: true
    prompt?: true
    modelUsed?: true
    parameters?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    public?: true
    title?: true
    description?: true
    userId?: true
    sourceImageId?: true
    sound?: true
    parentVideoId?: true
    _all?: true
  }

  export type GeneratedVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedVideo to aggregate.
     */
    where?: GeneratedVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedVideos to fetch.
     */
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedVideos
    **/
    _count?: true | GeneratedVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedVideoMaxAggregateInputType
  }

  export type GetGeneratedVideoAggregateType<T extends GeneratedVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedVideo[P]>
      : GetScalarType<T[P], AggregateGeneratedVideo[P]>
  }




  export type GeneratedVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedVideoWhereInput
    orderBy?: GeneratedVideoOrderByWithAggregationInput | GeneratedVideoOrderByWithAggregationInput[]
    by: GeneratedVideoScalarFieldEnum[] | GeneratedVideoScalarFieldEnum
    having?: GeneratedVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedVideoCountAggregateInputType | true
    _avg?: GeneratedVideoAvgAggregateInputType
    _sum?: GeneratedVideoSumAggregateInputType
    _min?: GeneratedVideoMinAggregateInputType
    _max?: GeneratedVideoMaxAggregateInputType
  }

  export type GeneratedVideoGroupByOutputType = {
    id: string
    cloudinaryPublicId: string | null
    videoUrl: string | null
    duration: number | null
    prompt: string | null
    modelUsed: string | null
    parameters: JsonValue | null
    status: $Enums.AssetStatus
    replicatePredictionId: string | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    public: boolean
    title: string | null
    description: string | null
    userId: string
    sourceImageId: string | null
    sound: boolean
    parentVideoId: string | null
    _count: GeneratedVideoCountAggregateOutputType | null
    _avg: GeneratedVideoAvgAggregateOutputType | null
    _sum: GeneratedVideoSumAggregateOutputType | null
    _min: GeneratedVideoMinAggregateOutputType | null
    _max: GeneratedVideoMaxAggregateOutputType | null
  }

  type GetGeneratedVideoGroupByPayload<T extends GeneratedVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedVideoGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedVideoGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cloudinaryPublicId?: boolean
    videoUrl?: boolean
    duration?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    public?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    sourceImageId?: boolean
    sound?: boolean
    parentVideoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceImage?: boolean | GeneratedVideo$sourceImageArgs<ExtArgs>
    generatedAudio?: boolean | GeneratedVideo$generatedAudioArgs<ExtArgs>
    parentVideo?: boolean | GeneratedVideo$parentVideoArgs<ExtArgs>
    childVideos?: boolean | GeneratedVideo$childVideosArgs<ExtArgs>
    generationLogs?: boolean | GeneratedVideo$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedVideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedVideo"]>



  export type GeneratedVideoSelectScalar = {
    id?: boolean
    cloudinaryPublicId?: boolean
    videoUrl?: boolean
    duration?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    public?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    sourceImageId?: boolean
    sound?: boolean
    parentVideoId?: boolean
  }

  export type GeneratedVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cloudinaryPublicId" | "videoUrl" | "duration" | "prompt" | "modelUsed" | "parameters" | "status" | "replicatePredictionId" | "createdAt" | "updatedAt" | "isDeleted" | "public" | "title" | "description" | "userId" | "sourceImageId" | "sound" | "parentVideoId", ExtArgs["result"]["generatedVideo"]>
  export type GeneratedVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceImage?: boolean | GeneratedVideo$sourceImageArgs<ExtArgs>
    generatedAudio?: boolean | GeneratedVideo$generatedAudioArgs<ExtArgs>
    parentVideo?: boolean | GeneratedVideo$parentVideoArgs<ExtArgs>
    childVideos?: boolean | GeneratedVideo$childVideosArgs<ExtArgs>
    generationLogs?: boolean | GeneratedVideo$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedVideoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneratedVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedVideo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sourceImage: Prisma.$GeneratedImagePayload<ExtArgs> | null
      generatedAudio: Prisma.$GeneratedAudioPayload<ExtArgs> | null
      parentVideo: Prisma.$GeneratedVideoPayload<ExtArgs> | null
      childVideos: Prisma.$GeneratedVideoPayload<ExtArgs>[]
      generationLogs: Prisma.$GenerationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cloudinaryPublicId: string | null
      videoUrl: string | null
      duration: number | null
      prompt: string | null
      modelUsed: string | null
      parameters: Prisma.JsonValue | null
      status: $Enums.AssetStatus
      replicatePredictionId: string | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      public: boolean
      title: string | null
      description: string | null
      userId: string
      sourceImageId: string | null
      sound: boolean
      parentVideoId: string | null
    }, ExtArgs["result"]["generatedVideo"]>
    composites: {}
  }

  type GeneratedVideoGetPayload<S extends boolean | null | undefined | GeneratedVideoDefaultArgs> = $Result.GetResult<Prisma.$GeneratedVideoPayload, S>

  type GeneratedVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedVideoCountAggregateInputType | true
    }

  export interface GeneratedVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedVideo'], meta: { name: 'GeneratedVideo' } }
    /**
     * Find zero or one GeneratedVideo that matches the filter.
     * @param {GeneratedVideoFindUniqueArgs} args - Arguments to find a GeneratedVideo
     * @example
     * // Get one GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedVideoFindUniqueArgs>(args: SelectSubset<T, GeneratedVideoFindUniqueArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedVideoFindUniqueOrThrowArgs} args - Arguments to find a GeneratedVideo
     * @example
     * // Get one GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoFindFirstArgs} args - Arguments to find a GeneratedVideo
     * @example
     * // Get one GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedVideoFindFirstArgs>(args?: SelectSubset<T, GeneratedVideoFindFirstArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoFindFirstOrThrowArgs} args - Arguments to find a GeneratedVideo
     * @example
     * // Get one GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedVideos
     * const generatedVideos = await prisma.generatedVideo.findMany()
     * 
     * // Get first 10 GeneratedVideos
     * const generatedVideos = await prisma.generatedVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedVideoWithIdOnly = await prisma.generatedVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedVideoFindManyArgs>(args?: SelectSubset<T, GeneratedVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedVideo.
     * @param {GeneratedVideoCreateArgs} args - Arguments to create a GeneratedVideo.
     * @example
     * // Create one GeneratedVideo
     * const GeneratedVideo = await prisma.generatedVideo.create({
     *   data: {
     *     // ... data to create a GeneratedVideo
     *   }
     * })
     * 
     */
    create<T extends GeneratedVideoCreateArgs>(args: SelectSubset<T, GeneratedVideoCreateArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedVideos.
     * @param {GeneratedVideoCreateManyArgs} args - Arguments to create many GeneratedVideos.
     * @example
     * // Create many GeneratedVideos
     * const generatedVideo = await prisma.generatedVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedVideoCreateManyArgs>(args?: SelectSubset<T, GeneratedVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratedVideo.
     * @param {GeneratedVideoDeleteArgs} args - Arguments to delete one GeneratedVideo.
     * @example
     * // Delete one GeneratedVideo
     * const GeneratedVideo = await prisma.generatedVideo.delete({
     *   where: {
     *     // ... filter to delete one GeneratedVideo
     *   }
     * })
     * 
     */
    delete<T extends GeneratedVideoDeleteArgs>(args: SelectSubset<T, GeneratedVideoDeleteArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedVideo.
     * @param {GeneratedVideoUpdateArgs} args - Arguments to update one GeneratedVideo.
     * @example
     * // Update one GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedVideoUpdateArgs>(args: SelectSubset<T, GeneratedVideoUpdateArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedVideos.
     * @param {GeneratedVideoDeleteManyArgs} args - Arguments to filter GeneratedVideos to delete.
     * @example
     * // Delete a few GeneratedVideos
     * const { count } = await prisma.generatedVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedVideoDeleteManyArgs>(args?: SelectSubset<T, GeneratedVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedVideos
     * const generatedVideo = await prisma.generatedVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedVideoUpdateManyArgs>(args: SelectSubset<T, GeneratedVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratedVideo.
     * @param {GeneratedVideoUpsertArgs} args - Arguments to update or create a GeneratedVideo.
     * @example
     * // Update or create a GeneratedVideo
     * const generatedVideo = await prisma.generatedVideo.upsert({
     *   create: {
     *     // ... data to create a GeneratedVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedVideo we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedVideoUpsertArgs>(args: SelectSubset<T, GeneratedVideoUpsertArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoCountArgs} args - Arguments to filter GeneratedVideos to count.
     * @example
     * // Count the number of GeneratedVideos
     * const count = await prisma.generatedVideo.count({
     *   where: {
     *     // ... the filter for the GeneratedVideos we want to count
     *   }
     * })
    **/
    count<T extends GeneratedVideoCountArgs>(
      args?: Subset<T, GeneratedVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedVideoAggregateArgs>(args: Subset<T, GeneratedVideoAggregateArgs>): Prisma.PrismaPromise<GetGeneratedVideoAggregateType<T>>

    /**
     * Group by GeneratedVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedVideoGroupByArgs} args - Group by arguments.
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
      T extends GeneratedVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedVideoGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedVideo model
   */
  readonly fields: GeneratedVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceImage<T extends GeneratedVideo$sourceImageArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideo$sourceImageArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    generatedAudio<T extends GeneratedVideo$generatedAudioArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideo$generatedAudioArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parentVideo<T extends GeneratedVideo$parentVideoArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideo$parentVideoArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childVideos<T extends GeneratedVideo$childVideosArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideo$childVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generationLogs<T extends GeneratedVideo$generationLogsArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideo$generationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeneratedVideo model
   */
  interface GeneratedVideoFieldRefs {
    readonly id: FieldRef<"GeneratedVideo", 'String'>
    readonly cloudinaryPublicId: FieldRef<"GeneratedVideo", 'String'>
    readonly videoUrl: FieldRef<"GeneratedVideo", 'String'>
    readonly duration: FieldRef<"GeneratedVideo", 'Float'>
    readonly prompt: FieldRef<"GeneratedVideo", 'String'>
    readonly modelUsed: FieldRef<"GeneratedVideo", 'String'>
    readonly parameters: FieldRef<"GeneratedVideo", 'Json'>
    readonly status: FieldRef<"GeneratedVideo", 'AssetStatus'>
    readonly replicatePredictionId: FieldRef<"GeneratedVideo", 'String'>
    readonly createdAt: FieldRef<"GeneratedVideo", 'DateTime'>
    readonly updatedAt: FieldRef<"GeneratedVideo", 'DateTime'>
    readonly isDeleted: FieldRef<"GeneratedVideo", 'Boolean'>
    readonly public: FieldRef<"GeneratedVideo", 'Boolean'>
    readonly title: FieldRef<"GeneratedVideo", 'String'>
    readonly description: FieldRef<"GeneratedVideo", 'String'>
    readonly userId: FieldRef<"GeneratedVideo", 'String'>
    readonly sourceImageId: FieldRef<"GeneratedVideo", 'String'>
    readonly sound: FieldRef<"GeneratedVideo", 'Boolean'>
    readonly parentVideoId: FieldRef<"GeneratedVideo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedVideo findUnique
   */
  export type GeneratedVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedVideo to fetch.
     */
    where: GeneratedVideoWhereUniqueInput
  }

  /**
   * GeneratedVideo findUniqueOrThrow
   */
  export type GeneratedVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedVideo to fetch.
     */
    where: GeneratedVideoWhereUniqueInput
  }

  /**
   * GeneratedVideo findFirst
   */
  export type GeneratedVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedVideo to fetch.
     */
    where?: GeneratedVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedVideos to fetch.
     */
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedVideos.
     */
    cursor?: GeneratedVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedVideos.
     */
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * GeneratedVideo findFirstOrThrow
   */
  export type GeneratedVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedVideo to fetch.
     */
    where?: GeneratedVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedVideos to fetch.
     */
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedVideos.
     */
    cursor?: GeneratedVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedVideos.
     */
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * GeneratedVideo findMany
   */
  export type GeneratedVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedVideos to fetch.
     */
    where?: GeneratedVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedVideos to fetch.
     */
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedVideos.
     */
    cursor?: GeneratedVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedVideos.
     */
    skip?: number
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * GeneratedVideo create
   */
  export type GeneratedVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedVideo.
     */
    data: XOR<GeneratedVideoCreateInput, GeneratedVideoUncheckedCreateInput>
  }

  /**
   * GeneratedVideo createMany
   */
  export type GeneratedVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedVideos.
     */
    data: GeneratedVideoCreateManyInput | GeneratedVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedVideo update
   */
  export type GeneratedVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedVideo.
     */
    data: XOR<GeneratedVideoUpdateInput, GeneratedVideoUncheckedUpdateInput>
    /**
     * Choose, which GeneratedVideo to update.
     */
    where: GeneratedVideoWhereUniqueInput
  }

  /**
   * GeneratedVideo updateMany
   */
  export type GeneratedVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedVideos.
     */
    data: XOR<GeneratedVideoUpdateManyMutationInput, GeneratedVideoUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedVideos to update
     */
    where?: GeneratedVideoWhereInput
    /**
     * Limit how many GeneratedVideos to update.
     */
    limit?: number
  }

  /**
   * GeneratedVideo upsert
   */
  export type GeneratedVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedVideo to update in case it exists.
     */
    where: GeneratedVideoWhereUniqueInput
    /**
     * In case the GeneratedVideo found by the `where` argument doesn't exist, create a new GeneratedVideo with this data.
     */
    create: XOR<GeneratedVideoCreateInput, GeneratedVideoUncheckedCreateInput>
    /**
     * In case the GeneratedVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedVideoUpdateInput, GeneratedVideoUncheckedUpdateInput>
  }

  /**
   * GeneratedVideo delete
   */
  export type GeneratedVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    /**
     * Filter which GeneratedVideo to delete.
     */
    where: GeneratedVideoWhereUniqueInput
  }

  /**
   * GeneratedVideo deleteMany
   */
  export type GeneratedVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedVideos to delete
     */
    where?: GeneratedVideoWhereInput
    /**
     * Limit how many GeneratedVideos to delete.
     */
    limit?: number
  }

  /**
   * GeneratedVideo.sourceImage
   */
  export type GeneratedVideo$sourceImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
  }

  /**
   * GeneratedVideo.generatedAudio
   */
  export type GeneratedVideo$generatedAudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    where?: GeneratedAudioWhereInput
  }

  /**
   * GeneratedVideo.parentVideo
   */
  export type GeneratedVideo$parentVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    where?: GeneratedVideoWhereInput
  }

  /**
   * GeneratedVideo.childVideos
   */
  export type GeneratedVideo$childVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    where?: GeneratedVideoWhereInput
    orderBy?: GeneratedVideoOrderByWithRelationInput | GeneratedVideoOrderByWithRelationInput[]
    cursor?: GeneratedVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedVideoScalarFieldEnum | GeneratedVideoScalarFieldEnum[]
  }

  /**
   * GeneratedVideo.generationLogs
   */
  export type GeneratedVideo$generationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    cursor?: GenerationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GeneratedVideo without action
   */
  export type GeneratedVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedAudio
   */

  export type AggregateGeneratedAudio = {
    _count: GeneratedAudioCountAggregateOutputType | null
    _min: GeneratedAudioMinAggregateOutputType | null
    _max: GeneratedAudioMaxAggregateOutputType | null
  }

  export type GeneratedAudioMinAggregateOutputType = {
    id: string | null
    audioUrl: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    isDeleted: boolean | null
    userId: string | null
    videoId: string | null
  }

  export type GeneratedAudioMaxAggregateOutputType = {
    id: string | null
    audioUrl: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    createdAt: Date | null
    isDeleted: boolean | null
    userId: string | null
    videoId: string | null
  }

  export type GeneratedAudioCountAggregateOutputType = {
    id: number
    audioUrl: number
    modelUsed: number
    parameters: number
    status: number
    replicatePredictionId: number
    createdAt: number
    isDeleted: number
    userId: number
    videoId: number
    _all: number
  }


  export type GeneratedAudioMinAggregateInputType = {
    id?: true
    audioUrl?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    userId?: true
    videoId?: true
  }

  export type GeneratedAudioMaxAggregateInputType = {
    id?: true
    audioUrl?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    userId?: true
    videoId?: true
  }

  export type GeneratedAudioCountAggregateInputType = {
    id?: true
    audioUrl?: true
    modelUsed?: true
    parameters?: true
    status?: true
    replicatePredictionId?: true
    createdAt?: true
    isDeleted?: true
    userId?: true
    videoId?: true
    _all?: true
  }

  export type GeneratedAudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedAudio to aggregate.
     */
    where?: GeneratedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedAudios to fetch.
     */
    orderBy?: GeneratedAudioOrderByWithRelationInput | GeneratedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedAudios
    **/
    _count?: true | GeneratedAudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedAudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedAudioMaxAggregateInputType
  }

  export type GetGeneratedAudioAggregateType<T extends GeneratedAudioAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedAudio[P]>
      : GetScalarType<T[P], AggregateGeneratedAudio[P]>
  }




  export type GeneratedAudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedAudioWhereInput
    orderBy?: GeneratedAudioOrderByWithAggregationInput | GeneratedAudioOrderByWithAggregationInput[]
    by: GeneratedAudioScalarFieldEnum[] | GeneratedAudioScalarFieldEnum
    having?: GeneratedAudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedAudioCountAggregateInputType | true
    _min?: GeneratedAudioMinAggregateInputType
    _max?: GeneratedAudioMaxAggregateInputType
  }

  export type GeneratedAudioGroupByOutputType = {
    id: string
    audioUrl: string
    modelUsed: string | null
    parameters: JsonValue | null
    status: $Enums.AssetStatus
    replicatePredictionId: string | null
    createdAt: Date
    isDeleted: boolean
    userId: string
    videoId: string
    _count: GeneratedAudioCountAggregateOutputType | null
    _min: GeneratedAudioMinAggregateOutputType | null
    _max: GeneratedAudioMaxAggregateOutputType | null
  }

  type GetGeneratedAudioGroupByPayload<T extends GeneratedAudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedAudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedAudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedAudioGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedAudioGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedAudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audioUrl?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    videoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | GeneratedVideoDefaultArgs<ExtArgs>
    generationLogs?: boolean | GeneratedAudio$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedAudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedAudio"]>



  export type GeneratedAudioSelectScalar = {
    id?: boolean
    audioUrl?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    createdAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    videoId?: boolean
  }

  export type GeneratedAudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "audioUrl" | "modelUsed" | "parameters" | "status" | "replicatePredictionId" | "createdAt" | "isDeleted" | "userId" | "videoId", ExtArgs["result"]["generatedAudio"]>
  export type GeneratedAudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | GeneratedVideoDefaultArgs<ExtArgs>
    generationLogs?: boolean | GeneratedAudio$generationLogsArgs<ExtArgs>
    _count?: boolean | GeneratedAudioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneratedAudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedAudio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$GeneratedVideoPayload<ExtArgs>
      generationLogs: Prisma.$GenerationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      audioUrl: string
      modelUsed: string | null
      parameters: Prisma.JsonValue | null
      status: $Enums.AssetStatus
      replicatePredictionId: string | null
      createdAt: Date
      isDeleted: boolean
      userId: string
      videoId: string
    }, ExtArgs["result"]["generatedAudio"]>
    composites: {}
  }

  type GeneratedAudioGetPayload<S extends boolean | null | undefined | GeneratedAudioDefaultArgs> = $Result.GetResult<Prisma.$GeneratedAudioPayload, S>

  type GeneratedAudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedAudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedAudioCountAggregateInputType | true
    }

  export interface GeneratedAudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedAudio'], meta: { name: 'GeneratedAudio' } }
    /**
     * Find zero or one GeneratedAudio that matches the filter.
     * @param {GeneratedAudioFindUniqueArgs} args - Arguments to find a GeneratedAudio
     * @example
     * // Get one GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedAudioFindUniqueArgs>(args: SelectSubset<T, GeneratedAudioFindUniqueArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedAudio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedAudioFindUniqueOrThrowArgs} args - Arguments to find a GeneratedAudio
     * @example
     * // Get one GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedAudioFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedAudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedAudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioFindFirstArgs} args - Arguments to find a GeneratedAudio
     * @example
     * // Get one GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedAudioFindFirstArgs>(args?: SelectSubset<T, GeneratedAudioFindFirstArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedAudio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioFindFirstOrThrowArgs} args - Arguments to find a GeneratedAudio
     * @example
     * // Get one GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedAudioFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedAudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedAudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedAudios
     * const generatedAudios = await prisma.generatedAudio.findMany()
     * 
     * // Get first 10 GeneratedAudios
     * const generatedAudios = await prisma.generatedAudio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedAudioWithIdOnly = await prisma.generatedAudio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedAudioFindManyArgs>(args?: SelectSubset<T, GeneratedAudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedAudio.
     * @param {GeneratedAudioCreateArgs} args - Arguments to create a GeneratedAudio.
     * @example
     * // Create one GeneratedAudio
     * const GeneratedAudio = await prisma.generatedAudio.create({
     *   data: {
     *     // ... data to create a GeneratedAudio
     *   }
     * })
     * 
     */
    create<T extends GeneratedAudioCreateArgs>(args: SelectSubset<T, GeneratedAudioCreateArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedAudios.
     * @param {GeneratedAudioCreateManyArgs} args - Arguments to create many GeneratedAudios.
     * @example
     * // Create many GeneratedAudios
     * const generatedAudio = await prisma.generatedAudio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedAudioCreateManyArgs>(args?: SelectSubset<T, GeneratedAudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratedAudio.
     * @param {GeneratedAudioDeleteArgs} args - Arguments to delete one GeneratedAudio.
     * @example
     * // Delete one GeneratedAudio
     * const GeneratedAudio = await prisma.generatedAudio.delete({
     *   where: {
     *     // ... filter to delete one GeneratedAudio
     *   }
     * })
     * 
     */
    delete<T extends GeneratedAudioDeleteArgs>(args: SelectSubset<T, GeneratedAudioDeleteArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedAudio.
     * @param {GeneratedAudioUpdateArgs} args - Arguments to update one GeneratedAudio.
     * @example
     * // Update one GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedAudioUpdateArgs>(args: SelectSubset<T, GeneratedAudioUpdateArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedAudios.
     * @param {GeneratedAudioDeleteManyArgs} args - Arguments to filter GeneratedAudios to delete.
     * @example
     * // Delete a few GeneratedAudios
     * const { count } = await prisma.generatedAudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedAudioDeleteManyArgs>(args?: SelectSubset<T, GeneratedAudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedAudios
     * const generatedAudio = await prisma.generatedAudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedAudioUpdateManyArgs>(args: SelectSubset<T, GeneratedAudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratedAudio.
     * @param {GeneratedAudioUpsertArgs} args - Arguments to update or create a GeneratedAudio.
     * @example
     * // Update or create a GeneratedAudio
     * const generatedAudio = await prisma.generatedAudio.upsert({
     *   create: {
     *     // ... data to create a GeneratedAudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedAudio we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedAudioUpsertArgs>(args: SelectSubset<T, GeneratedAudioUpsertArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioCountArgs} args - Arguments to filter GeneratedAudios to count.
     * @example
     * // Count the number of GeneratedAudios
     * const count = await prisma.generatedAudio.count({
     *   where: {
     *     // ... the filter for the GeneratedAudios we want to count
     *   }
     * })
    **/
    count<T extends GeneratedAudioCountArgs>(
      args?: Subset<T, GeneratedAudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedAudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedAudioAggregateArgs>(args: Subset<T, GeneratedAudioAggregateArgs>): Prisma.PrismaPromise<GetGeneratedAudioAggregateType<T>>

    /**
     * Group by GeneratedAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedAudioGroupByArgs} args - Group by arguments.
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
      T extends GeneratedAudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedAudioGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedAudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedAudio model
   */
  readonly fields: GeneratedAudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedAudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedAudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends GeneratedVideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedVideoDefaultArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generationLogs<T extends GeneratedAudio$generationLogsArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedAudio$generationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeneratedAudio model
   */
  interface GeneratedAudioFieldRefs {
    readonly id: FieldRef<"GeneratedAudio", 'String'>
    readonly audioUrl: FieldRef<"GeneratedAudio", 'String'>
    readonly modelUsed: FieldRef<"GeneratedAudio", 'String'>
    readonly parameters: FieldRef<"GeneratedAudio", 'Json'>
    readonly status: FieldRef<"GeneratedAudio", 'AssetStatus'>
    readonly replicatePredictionId: FieldRef<"GeneratedAudio", 'String'>
    readonly createdAt: FieldRef<"GeneratedAudio", 'DateTime'>
    readonly isDeleted: FieldRef<"GeneratedAudio", 'Boolean'>
    readonly userId: FieldRef<"GeneratedAudio", 'String'>
    readonly videoId: FieldRef<"GeneratedAudio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedAudio findUnique
   */
  export type GeneratedAudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedAudio to fetch.
     */
    where: GeneratedAudioWhereUniqueInput
  }

  /**
   * GeneratedAudio findUniqueOrThrow
   */
  export type GeneratedAudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedAudio to fetch.
     */
    where: GeneratedAudioWhereUniqueInput
  }

  /**
   * GeneratedAudio findFirst
   */
  export type GeneratedAudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedAudio to fetch.
     */
    where?: GeneratedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedAudios to fetch.
     */
    orderBy?: GeneratedAudioOrderByWithRelationInput | GeneratedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedAudios.
     */
    cursor?: GeneratedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedAudios.
     */
    distinct?: GeneratedAudioScalarFieldEnum | GeneratedAudioScalarFieldEnum[]
  }

  /**
   * GeneratedAudio findFirstOrThrow
   */
  export type GeneratedAudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedAudio to fetch.
     */
    where?: GeneratedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedAudios to fetch.
     */
    orderBy?: GeneratedAudioOrderByWithRelationInput | GeneratedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedAudios.
     */
    cursor?: GeneratedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedAudios.
     */
    distinct?: GeneratedAudioScalarFieldEnum | GeneratedAudioScalarFieldEnum[]
  }

  /**
   * GeneratedAudio findMany
   */
  export type GeneratedAudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedAudios to fetch.
     */
    where?: GeneratedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedAudios to fetch.
     */
    orderBy?: GeneratedAudioOrderByWithRelationInput | GeneratedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedAudios.
     */
    cursor?: GeneratedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedAudios.
     */
    skip?: number
    distinct?: GeneratedAudioScalarFieldEnum | GeneratedAudioScalarFieldEnum[]
  }

  /**
   * GeneratedAudio create
   */
  export type GeneratedAudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedAudio.
     */
    data: XOR<GeneratedAudioCreateInput, GeneratedAudioUncheckedCreateInput>
  }

  /**
   * GeneratedAudio createMany
   */
  export type GeneratedAudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedAudios.
     */
    data: GeneratedAudioCreateManyInput | GeneratedAudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedAudio update
   */
  export type GeneratedAudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedAudio.
     */
    data: XOR<GeneratedAudioUpdateInput, GeneratedAudioUncheckedUpdateInput>
    /**
     * Choose, which GeneratedAudio to update.
     */
    where: GeneratedAudioWhereUniqueInput
  }

  /**
   * GeneratedAudio updateMany
   */
  export type GeneratedAudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedAudios.
     */
    data: XOR<GeneratedAudioUpdateManyMutationInput, GeneratedAudioUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedAudios to update
     */
    where?: GeneratedAudioWhereInput
    /**
     * Limit how many GeneratedAudios to update.
     */
    limit?: number
  }

  /**
   * GeneratedAudio upsert
   */
  export type GeneratedAudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedAudio to update in case it exists.
     */
    where: GeneratedAudioWhereUniqueInput
    /**
     * In case the GeneratedAudio found by the `where` argument doesn't exist, create a new GeneratedAudio with this data.
     */
    create: XOR<GeneratedAudioCreateInput, GeneratedAudioUncheckedCreateInput>
    /**
     * In case the GeneratedAudio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedAudioUpdateInput, GeneratedAudioUncheckedUpdateInput>
  }

  /**
   * GeneratedAudio delete
   */
  export type GeneratedAudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    /**
     * Filter which GeneratedAudio to delete.
     */
    where: GeneratedAudioWhereUniqueInput
  }

  /**
   * GeneratedAudio deleteMany
   */
  export type GeneratedAudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedAudios to delete
     */
    where?: GeneratedAudioWhereInput
    /**
     * Limit how many GeneratedAudios to delete.
     */
    limit?: number
  }

  /**
   * GeneratedAudio.generationLogs
   */
  export type GeneratedAudio$generationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    cursor?: GenerationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GeneratedAudio without action
   */
  export type GeneratedAudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
  }


  /**
   * Model GenerationLog
   */

  export type AggregateGenerationLog = {
    _count: GenerationLogCountAggregateOutputType | null
    _min: GenerationLogMinAggregateOutputType | null
    _max: GenerationLogMaxAggregateOutputType | null
  }

  export type GenerationLogMinAggregateOutputType = {
    id: string | null
    type: string | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    resultUrl: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    sourceDrawingId: string | null
    sourceImageId: string | null
    sourceVideoId: string | null
    generatedVideoId: string | null
    sourceAudioId: string | null
  }

  export type GenerationLogMaxAggregateOutputType = {
    id: string | null
    type: string | null
    prompt: string | null
    modelUsed: string | null
    status: $Enums.AssetStatus | null
    replicatePredictionId: string | null
    resultUrl: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    sourceDrawingId: string | null
    sourceImageId: string | null
    sourceVideoId: string | null
    generatedVideoId: string | null
    sourceAudioId: string | null
  }

  export type GenerationLogCountAggregateOutputType = {
    id: number
    type: number
    prompt: number
    modelUsed: number
    parameters: number
    status: number
    replicatePredictionId: number
    resultUrl: number
    errorMessage: number
    startedAt: number
    completedAt: number
    userId: number
    sourceDrawingId: number
    sourceImageId: number
    sourceVideoId: number
    generatedVideoId: number
    sourceAudioId: number
    _all: number
  }


  export type GenerationLogMinAggregateInputType = {
    id?: true
    type?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    resultUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
    sourceVideoId?: true
    generatedVideoId?: true
    sourceAudioId?: true
  }

  export type GenerationLogMaxAggregateInputType = {
    id?: true
    type?: true
    prompt?: true
    modelUsed?: true
    status?: true
    replicatePredictionId?: true
    resultUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
    sourceVideoId?: true
    generatedVideoId?: true
    sourceAudioId?: true
  }

  export type GenerationLogCountAggregateInputType = {
    id?: true
    type?: true
    prompt?: true
    modelUsed?: true
    parameters?: true
    status?: true
    replicatePredictionId?: true
    resultUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    sourceDrawingId?: true
    sourceImageId?: true
    sourceVideoId?: true
    generatedVideoId?: true
    sourceAudioId?: true
    _all?: true
  }

  export type GenerationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationLog to aggregate.
     */
    where?: GenerationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLogs to fetch.
     */
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenerationLogs
    **/
    _count?: true | GenerationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationLogMaxAggregateInputType
  }

  export type GetGenerationLogAggregateType<T extends GenerationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerationLog[P]>
      : GetScalarType<T[P], AggregateGenerationLog[P]>
  }




  export type GenerationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLogWhereInput
    orderBy?: GenerationLogOrderByWithAggregationInput | GenerationLogOrderByWithAggregationInput[]
    by: GenerationLogScalarFieldEnum[] | GenerationLogScalarFieldEnum
    having?: GenerationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationLogCountAggregateInputType | true
    _min?: GenerationLogMinAggregateInputType
    _max?: GenerationLogMaxAggregateInputType
  }

  export type GenerationLogGroupByOutputType = {
    id: string
    type: string
    prompt: string | null
    modelUsed: string
    parameters: JsonValue | null
    status: $Enums.AssetStatus
    replicatePredictionId: string | null
    resultUrl: string | null
    errorMessage: string | null
    startedAt: Date
    completedAt: Date | null
    userId: string
    sourceDrawingId: string | null
    sourceImageId: string | null
    sourceVideoId: string | null
    generatedVideoId: string | null
    sourceAudioId: string | null
    _count: GenerationLogCountAggregateOutputType | null
    _min: GenerationLogMinAggregateOutputType | null
    _max: GenerationLogMaxAggregateOutputType | null
  }

  type GetGenerationLogGroupByPayload<T extends GenerationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationLogGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationLogGroupByOutputType[P]>
        }
      >
    >


  export type GenerationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    resultUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    sourceDrawingId?: boolean
    sourceImageId?: boolean
    sourceVideoId?: boolean
    generatedVideoId?: boolean
    sourceAudioId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceDrawing?: boolean | GenerationLog$sourceDrawingArgs<ExtArgs>
    sourceImage?: boolean | GenerationLog$sourceImageArgs<ExtArgs>
    sourceVideo?: boolean | GenerationLog$sourceVideoArgs<ExtArgs>
    sourceAudio?: boolean | GenerationLog$sourceAudioArgs<ExtArgs>
  }, ExtArgs["result"]["generationLog"]>



  export type GenerationLogSelectScalar = {
    id?: boolean
    type?: boolean
    prompt?: boolean
    modelUsed?: boolean
    parameters?: boolean
    status?: boolean
    replicatePredictionId?: boolean
    resultUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    sourceDrawingId?: boolean
    sourceImageId?: boolean
    sourceVideoId?: boolean
    generatedVideoId?: boolean
    sourceAudioId?: boolean
  }

  export type GenerationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "prompt" | "modelUsed" | "parameters" | "status" | "replicatePredictionId" | "resultUrl" | "errorMessage" | "startedAt" | "completedAt" | "userId" | "sourceDrawingId" | "sourceImageId" | "sourceVideoId" | "generatedVideoId" | "sourceAudioId", ExtArgs["result"]["generationLog"]>
  export type GenerationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceDrawing?: boolean | GenerationLog$sourceDrawingArgs<ExtArgs>
    sourceImage?: boolean | GenerationLog$sourceImageArgs<ExtArgs>
    sourceVideo?: boolean | GenerationLog$sourceVideoArgs<ExtArgs>
    sourceAudio?: boolean | GenerationLog$sourceAudioArgs<ExtArgs>
  }

  export type $GenerationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenerationLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sourceDrawing: Prisma.$DrawingPayload<ExtArgs> | null
      sourceImage: Prisma.$GeneratedImagePayload<ExtArgs> | null
      sourceVideo: Prisma.$GeneratedVideoPayload<ExtArgs> | null
      sourceAudio: Prisma.$GeneratedAudioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      prompt: string | null
      modelUsed: string
      parameters: Prisma.JsonValue | null
      status: $Enums.AssetStatus
      replicatePredictionId: string | null
      resultUrl: string | null
      errorMessage: string | null
      startedAt: Date
      completedAt: Date | null
      userId: string
      sourceDrawingId: string | null
      sourceImageId: string | null
      sourceVideoId: string | null
      generatedVideoId: string | null
      sourceAudioId: string | null
    }, ExtArgs["result"]["generationLog"]>
    composites: {}
  }

  type GenerationLogGetPayload<S extends boolean | null | undefined | GenerationLogDefaultArgs> = $Result.GetResult<Prisma.$GenerationLogPayload, S>

  type GenerationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationLogCountAggregateInputType | true
    }

  export interface GenerationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenerationLog'], meta: { name: 'GenerationLog' } }
    /**
     * Find zero or one GenerationLog that matches the filter.
     * @param {GenerationLogFindUniqueArgs} args - Arguments to find a GenerationLog
     * @example
     * // Get one GenerationLog
     * const generationLog = await prisma.generationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationLogFindUniqueArgs>(args: SelectSubset<T, GenerationLogFindUniqueArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenerationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationLogFindUniqueOrThrowArgs} args - Arguments to find a GenerationLog
     * @example
     * // Get one GenerationLog
     * const generationLog = await prisma.generationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogFindFirstArgs} args - Arguments to find a GenerationLog
     * @example
     * // Get one GenerationLog
     * const generationLog = await prisma.generationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationLogFindFirstArgs>(args?: SelectSubset<T, GenerationLogFindFirstArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogFindFirstOrThrowArgs} args - Arguments to find a GenerationLog
     * @example
     * // Get one GenerationLog
     * const generationLog = await prisma.generationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenerationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenerationLogs
     * const generationLogs = await prisma.generationLog.findMany()
     * 
     * // Get first 10 GenerationLogs
     * const generationLogs = await prisma.generationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationLogWithIdOnly = await prisma.generationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationLogFindManyArgs>(args?: SelectSubset<T, GenerationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenerationLog.
     * @param {GenerationLogCreateArgs} args - Arguments to create a GenerationLog.
     * @example
     * // Create one GenerationLog
     * const GenerationLog = await prisma.generationLog.create({
     *   data: {
     *     // ... data to create a GenerationLog
     *   }
     * })
     * 
     */
    create<T extends GenerationLogCreateArgs>(args: SelectSubset<T, GenerationLogCreateArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenerationLogs.
     * @param {GenerationLogCreateManyArgs} args - Arguments to create many GenerationLogs.
     * @example
     * // Create many GenerationLogs
     * const generationLog = await prisma.generationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationLogCreateManyArgs>(args?: SelectSubset<T, GenerationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenerationLog.
     * @param {GenerationLogDeleteArgs} args - Arguments to delete one GenerationLog.
     * @example
     * // Delete one GenerationLog
     * const GenerationLog = await prisma.generationLog.delete({
     *   where: {
     *     // ... filter to delete one GenerationLog
     *   }
     * })
     * 
     */
    delete<T extends GenerationLogDeleteArgs>(args: SelectSubset<T, GenerationLogDeleteArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenerationLog.
     * @param {GenerationLogUpdateArgs} args - Arguments to update one GenerationLog.
     * @example
     * // Update one GenerationLog
     * const generationLog = await prisma.generationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationLogUpdateArgs>(args: SelectSubset<T, GenerationLogUpdateArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenerationLogs.
     * @param {GenerationLogDeleteManyArgs} args - Arguments to filter GenerationLogs to delete.
     * @example
     * // Delete a few GenerationLogs
     * const { count } = await prisma.generationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationLogDeleteManyArgs>(args?: SelectSubset<T, GenerationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenerationLogs
     * const generationLog = await prisma.generationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationLogUpdateManyArgs>(args: SelectSubset<T, GenerationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenerationLog.
     * @param {GenerationLogUpsertArgs} args - Arguments to update or create a GenerationLog.
     * @example
     * // Update or create a GenerationLog
     * const generationLog = await prisma.generationLog.upsert({
     *   create: {
     *     // ... data to create a GenerationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenerationLog we want to update
     *   }
     * })
     */
    upsert<T extends GenerationLogUpsertArgs>(args: SelectSubset<T, GenerationLogUpsertArgs<ExtArgs>>): Prisma__GenerationLogClient<$Result.GetResult<Prisma.$GenerationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenerationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogCountArgs} args - Arguments to filter GenerationLogs to count.
     * @example
     * // Count the number of GenerationLogs
     * const count = await prisma.generationLog.count({
     *   where: {
     *     // ... the filter for the GenerationLogs we want to count
     *   }
     * })
    **/
    count<T extends GenerationLogCountArgs>(
      args?: Subset<T, GenerationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenerationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenerationLogAggregateArgs>(args: Subset<T, GenerationLogAggregateArgs>): Prisma.PrismaPromise<GetGenerationLogAggregateType<T>>

    /**
     * Group by GenerationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLogGroupByArgs} args - Group by arguments.
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
      T extends GenerationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationLogGroupByArgs['orderBy'] }
        : { orderBy?: GenerationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenerationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenerationLog model
   */
  readonly fields: GenerationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenerationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceDrawing<T extends GenerationLog$sourceDrawingArgs<ExtArgs> = {}>(args?: Subset<T, GenerationLog$sourceDrawingArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceImage<T extends GenerationLog$sourceImageArgs<ExtArgs> = {}>(args?: Subset<T, GenerationLog$sourceImageArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceVideo<T extends GenerationLog$sourceVideoArgs<ExtArgs> = {}>(args?: Subset<T, GenerationLog$sourceVideoArgs<ExtArgs>>): Prisma__GeneratedVideoClient<$Result.GetResult<Prisma.$GeneratedVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceAudio<T extends GenerationLog$sourceAudioArgs<ExtArgs> = {}>(args?: Subset<T, GenerationLog$sourceAudioArgs<ExtArgs>>): Prisma__GeneratedAudioClient<$Result.GetResult<Prisma.$GeneratedAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GenerationLog model
   */
  interface GenerationLogFieldRefs {
    readonly id: FieldRef<"GenerationLog", 'String'>
    readonly type: FieldRef<"GenerationLog", 'String'>
    readonly prompt: FieldRef<"GenerationLog", 'String'>
    readonly modelUsed: FieldRef<"GenerationLog", 'String'>
    readonly parameters: FieldRef<"GenerationLog", 'Json'>
    readonly status: FieldRef<"GenerationLog", 'AssetStatus'>
    readonly replicatePredictionId: FieldRef<"GenerationLog", 'String'>
    readonly resultUrl: FieldRef<"GenerationLog", 'String'>
    readonly errorMessage: FieldRef<"GenerationLog", 'String'>
    readonly startedAt: FieldRef<"GenerationLog", 'DateTime'>
    readonly completedAt: FieldRef<"GenerationLog", 'DateTime'>
    readonly userId: FieldRef<"GenerationLog", 'String'>
    readonly sourceDrawingId: FieldRef<"GenerationLog", 'String'>
    readonly sourceImageId: FieldRef<"GenerationLog", 'String'>
    readonly sourceVideoId: FieldRef<"GenerationLog", 'String'>
    readonly generatedVideoId: FieldRef<"GenerationLog", 'String'>
    readonly sourceAudioId: FieldRef<"GenerationLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenerationLog findUnique
   */
  export type GenerationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter, which GenerationLog to fetch.
     */
    where: GenerationLogWhereUniqueInput
  }

  /**
   * GenerationLog findUniqueOrThrow
   */
  export type GenerationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter, which GenerationLog to fetch.
     */
    where: GenerationLogWhereUniqueInput
  }

  /**
   * GenerationLog findFirst
   */
  export type GenerationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter, which GenerationLog to fetch.
     */
    where?: GenerationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLogs to fetch.
     */
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationLogs.
     */
    cursor?: GenerationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationLogs.
     */
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GenerationLog findFirstOrThrow
   */
  export type GenerationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter, which GenerationLog to fetch.
     */
    where?: GenerationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLogs to fetch.
     */
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationLogs.
     */
    cursor?: GenerationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationLogs.
     */
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GenerationLog findMany
   */
  export type GenerationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter, which GenerationLogs to fetch.
     */
    where?: GenerationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLogs to fetch.
     */
    orderBy?: GenerationLogOrderByWithRelationInput | GenerationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenerationLogs.
     */
    cursor?: GenerationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLogs.
     */
    skip?: number
    distinct?: GenerationLogScalarFieldEnum | GenerationLogScalarFieldEnum[]
  }

  /**
   * GenerationLog create
   */
  export type GenerationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GenerationLog.
     */
    data: XOR<GenerationLogCreateInput, GenerationLogUncheckedCreateInput>
  }

  /**
   * GenerationLog createMany
   */
  export type GenerationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenerationLogs.
     */
    data: GenerationLogCreateManyInput | GenerationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationLog update
   */
  export type GenerationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GenerationLog.
     */
    data: XOR<GenerationLogUpdateInput, GenerationLogUncheckedUpdateInput>
    /**
     * Choose, which GenerationLog to update.
     */
    where: GenerationLogWhereUniqueInput
  }

  /**
   * GenerationLog updateMany
   */
  export type GenerationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenerationLogs.
     */
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyInput>
    /**
     * Filter which GenerationLogs to update
     */
    where?: GenerationLogWhereInput
    /**
     * Limit how many GenerationLogs to update.
     */
    limit?: number
  }

  /**
   * GenerationLog upsert
   */
  export type GenerationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GenerationLog to update in case it exists.
     */
    where: GenerationLogWhereUniqueInput
    /**
     * In case the GenerationLog found by the `where` argument doesn't exist, create a new GenerationLog with this data.
     */
    create: XOR<GenerationLogCreateInput, GenerationLogUncheckedCreateInput>
    /**
     * In case the GenerationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationLogUpdateInput, GenerationLogUncheckedUpdateInput>
  }

  /**
   * GenerationLog delete
   */
  export type GenerationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
    /**
     * Filter which GenerationLog to delete.
     */
    where: GenerationLogWhereUniqueInput
  }

  /**
   * GenerationLog deleteMany
   */
  export type GenerationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationLogs to delete
     */
    where?: GenerationLogWhereInput
    /**
     * Limit how many GenerationLogs to delete.
     */
    limit?: number
  }

  /**
   * GenerationLog.sourceDrawing
   */
  export type GenerationLog$sourceDrawingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    where?: DrawingWhereInput
  }

  /**
   * GenerationLog.sourceImage
   */
  export type GenerationLog$sourceImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
  }

  /**
   * GenerationLog.sourceVideo
   */
  export type GenerationLog$sourceVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedVideo
     */
    select?: GeneratedVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedVideo
     */
    omit?: GeneratedVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedVideoInclude<ExtArgs> | null
    where?: GeneratedVideoWhereInput
  }

  /**
   * GenerationLog.sourceAudio
   */
  export type GenerationLog$sourceAudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedAudio
     */
    select?: GeneratedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedAudio
     */
    omit?: GeneratedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedAudioInclude<ExtArgs> | null
    where?: GeneratedAudioWhereInput
  }

  /**
   * GenerationLog without action
   */
  export type GenerationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLog
     */
    select?: GenerationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLog
     */
    omit?: GenerationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationLogInclude<ExtArgs> | null
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
    name: 'name',
    username: 'username',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AuthenticatorScalarFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    counter: 'counter',
    credentialDeviceType: 'credentialDeviceType',
    credentialBackedUp: 'credentialBackedUp',
    transports: 'transports'
  };

  export type AuthenticatorScalarFieldEnum = (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]


  export const DrawingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    previewUrl: 'previewUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    status: 'status',
    userId: 'userId'
  };

  export type DrawingScalarFieldEnum = (typeof DrawingScalarFieldEnum)[keyof typeof DrawingScalarFieldEnum]


  export const GeneratedImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    width: 'width',
    height: 'height',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    parameters: 'parameters',
    status: 'status',
    replicatePredictionId: 'replicatePredictionId',
    createdAt: 'createdAt',
    isDeleted: 'isDeleted',
    title: 'title',
    userId: 'userId',
    sourceDrawingId: 'sourceDrawingId',
    sourceImageId: 'sourceImageId'
  };

  export type GeneratedImageScalarFieldEnum = (typeof GeneratedImageScalarFieldEnum)[keyof typeof GeneratedImageScalarFieldEnum]


  export const GeneratedVideoScalarFieldEnum: {
    id: 'id',
    cloudinaryPublicId: 'cloudinaryPublicId',
    videoUrl: 'videoUrl',
    duration: 'duration',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    parameters: 'parameters',
    status: 'status',
    replicatePredictionId: 'replicatePredictionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    public: 'public',
    title: 'title',
    description: 'description',
    userId: 'userId',
    sourceImageId: 'sourceImageId',
    sound: 'sound',
    parentVideoId: 'parentVideoId'
  };

  export type GeneratedVideoScalarFieldEnum = (typeof GeneratedVideoScalarFieldEnum)[keyof typeof GeneratedVideoScalarFieldEnum]


  export const GeneratedAudioScalarFieldEnum: {
    id: 'id',
    audioUrl: 'audioUrl',
    modelUsed: 'modelUsed',
    parameters: 'parameters',
    status: 'status',
    replicatePredictionId: 'replicatePredictionId',
    createdAt: 'createdAt',
    isDeleted: 'isDeleted',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type GeneratedAudioScalarFieldEnum = (typeof GeneratedAudioScalarFieldEnum)[keyof typeof GeneratedAudioScalarFieldEnum]


  export const GenerationLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    parameters: 'parameters',
    status: 'status',
    replicatePredictionId: 'replicatePredictionId',
    resultUrl: 'resultUrl',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    userId: 'userId',
    sourceDrawingId: 'sourceDrawingId',
    sourceImageId: 'sourceImageId',
    sourceVideoId: 'sourceVideoId',
    generatedVideoId: 'generatedVideoId',
    sourceAudioId: 'sourceAudioId'
  };

  export type GenerationLogScalarFieldEnum = (typeof GenerationLogScalarFieldEnum)[keyof typeof GenerationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const AuthenticatorOrderByRelevanceFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    credentialDeviceType: 'credentialDeviceType',
    transports: 'transports'
  };

  export type AuthenticatorOrderByRelevanceFieldEnum = (typeof AuthenticatorOrderByRelevanceFieldEnum)[keyof typeof AuthenticatorOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const DrawingOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    previewUrl: 'previewUrl',
    userId: 'userId'
  };

  export type DrawingOrderByRelevanceFieldEnum = (typeof DrawingOrderByRelevanceFieldEnum)[keyof typeof DrawingOrderByRelevanceFieldEnum]


  export const GeneratedImageOrderByRelevanceFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    replicatePredictionId: 'replicatePredictionId',
    title: 'title',
    userId: 'userId',
    sourceDrawingId: 'sourceDrawingId',
    sourceImageId: 'sourceImageId'
  };

  export type GeneratedImageOrderByRelevanceFieldEnum = (typeof GeneratedImageOrderByRelevanceFieldEnum)[keyof typeof GeneratedImageOrderByRelevanceFieldEnum]


  export const GeneratedVideoOrderByRelevanceFieldEnum: {
    id: 'id',
    cloudinaryPublicId: 'cloudinaryPublicId',
    videoUrl: 'videoUrl',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    replicatePredictionId: 'replicatePredictionId',
    title: 'title',
    description: 'description',
    userId: 'userId',
    sourceImageId: 'sourceImageId',
    parentVideoId: 'parentVideoId'
  };

  export type GeneratedVideoOrderByRelevanceFieldEnum = (typeof GeneratedVideoOrderByRelevanceFieldEnum)[keyof typeof GeneratedVideoOrderByRelevanceFieldEnum]


  export const GeneratedAudioOrderByRelevanceFieldEnum: {
    id: 'id',
    audioUrl: 'audioUrl',
    modelUsed: 'modelUsed',
    replicatePredictionId: 'replicatePredictionId',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type GeneratedAudioOrderByRelevanceFieldEnum = (typeof GeneratedAudioOrderByRelevanceFieldEnum)[keyof typeof GeneratedAudioOrderByRelevanceFieldEnum]


  export const GenerationLogOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    prompt: 'prompt',
    modelUsed: 'modelUsed',
    replicatePredictionId: 'replicatePredictionId',
    resultUrl: 'resultUrl',
    errorMessage: 'errorMessage',
    userId: 'userId',
    sourceDrawingId: 'sourceDrawingId',
    sourceImageId: 'sourceImageId',
    sourceVideoId: 'sourceVideoId',
    generatedVideoId: 'generatedVideoId',
    sourceAudioId: 'sourceAudioId'
  };

  export type GenerationLogOrderByRelevanceFieldEnum = (typeof GenerationLogOrderByRelevanceFieldEnum)[keyof typeof GenerationLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DrawingStatus'
   */
  export type EnumDrawingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrawingStatus'>
    


  /**
   * Reference to a field of type 'AssetStatus'
   */
  export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    authenticators?: AuthenticatorListRelationFilter
    drawings?: DrawingListRelationFilter
    generatedImages?: GeneratedImageListRelationFilter
    generatedVideos?: GeneratedVideoListRelationFilter
    generatedAudios?: GeneratedAudioListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    authenticators?: AuthenticatorOrderByRelationAggregateInput
    drawings?: DrawingOrderByRelationAggregateInput
    generatedImages?: GeneratedImageOrderByRelationAggregateInput
    generatedVideos?: GeneratedVideoOrderByRelationAggregateInput
    generatedAudios?: GeneratedAudioOrderByRelationAggregateInput
    generationLogs?: GenerationLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    authenticators?: AuthenticatorListRelationFilter
    drawings?: DrawingListRelationFilter
    generatedImages?: GeneratedImageListRelationFilter
    generatedVideos?: GeneratedVideoListRelationFilter
    generatedAudios?: GeneratedAudioListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuthenticatorOrderByRelevanceInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<{
    credentialID?: string
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_credentialID" | "credentialID">

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    credentialID?: StringWithAggregatesFilter<"Authenticator"> | string
    userId?: StringWithAggregatesFilter<"Authenticator"> | string
    providerAccountId?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialPublicKey?: StringWithAggregatesFilter<"Authenticator"> | string
    counter?: IntWithAggregatesFilter<"Authenticator"> | number
    credentialDeviceType?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialBackedUp?: BoolWithAggregatesFilter<"Authenticator"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Authenticator"> | string | null
  }

  export type DrawingWhereInput = {
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    id?: StringFilter<"Drawing"> | string
    title?: StringNullableFilter<"Drawing"> | string | null
    content?: JsonNullableFilter<"Drawing">
    previewUrl?: StringNullableFilter<"Drawing"> | string | null
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
    isDeleted?: BoolFilter<"Drawing"> | boolean
    status?: EnumDrawingStatusFilter<"Drawing"> | $Enums.DrawingStatus
    userId?: StringFilter<"Drawing"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generatedImages?: GeneratedImageListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }

  export type DrawingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    previewUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    generatedImages?: GeneratedImageOrderByRelationAggregateInput
    generationLogs?: GenerationLogOrderByRelationAggregateInput
    _relevance?: DrawingOrderByRelevanceInput
  }

  export type DrawingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    title?: StringNullableFilter<"Drawing"> | string | null
    content?: JsonNullableFilter<"Drawing">
    previewUrl?: StringNullableFilter<"Drawing"> | string | null
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
    isDeleted?: BoolFilter<"Drawing"> | boolean
    status?: EnumDrawingStatusFilter<"Drawing"> | $Enums.DrawingStatus
    userId?: StringFilter<"Drawing"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generatedImages?: GeneratedImageListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }, "id">

  export type DrawingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    previewUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: DrawingCountOrderByAggregateInput
    _max?: DrawingMaxOrderByAggregateInput
    _min?: DrawingMinOrderByAggregateInput
  }

  export type DrawingScalarWhereWithAggregatesInput = {
    AND?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    OR?: DrawingScalarWhereWithAggregatesInput[]
    NOT?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drawing"> | string
    title?: StringNullableWithAggregatesFilter<"Drawing"> | string | null
    content?: JsonNullableWithAggregatesFilter<"Drawing">
    previewUrl?: StringNullableWithAggregatesFilter<"Drawing"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drawing"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Drawing"> | boolean
    status?: EnumDrawingStatusWithAggregatesFilter<"Drawing"> | $Enums.DrawingStatus
    userId?: StringWithAggregatesFilter<"Drawing"> | string
  }

  export type GeneratedImageWhereInput = {
    AND?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    OR?: GeneratedImageWhereInput[]
    NOT?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    id?: StringFilter<"GeneratedImage"> | string
    imageUrl?: StringFilter<"GeneratedImage"> | string
    width?: IntNullableFilter<"GeneratedImage"> | number | null
    height?: IntNullableFilter<"GeneratedImage"> | number | null
    prompt?: StringNullableFilter<"GeneratedImage"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedImage"> | string | null
    parameters?: JsonNullableFilter<"GeneratedImage">
    status?: EnumAssetStatusFilter<"GeneratedImage"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedImage"> | string | null
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
    isDeleted?: BoolFilter<"GeneratedImage"> | boolean
    title?: StringNullableFilter<"GeneratedImage"> | string | null
    userId?: StringFilter<"GeneratedImage"> | string
    sourceDrawingId?: StringNullableFilter<"GeneratedImage"> | string | null
    sourceImageId?: StringNullableFilter<"GeneratedImage"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceDrawing?: XOR<DrawingNullableScalarRelationFilter, DrawingWhereInput> | null
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    derivedImages?: GeneratedImageListRelationFilter
    generatedVideos?: GeneratedVideoListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }

  export type GeneratedImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    title?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrderInput | SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sourceDrawing?: DrawingOrderByWithRelationInput
    sourceImage?: GeneratedImageOrderByWithRelationInput
    derivedImages?: GeneratedImageOrderByRelationAggregateInput
    generatedVideos?: GeneratedVideoOrderByRelationAggregateInput
    generationLogs?: GenerationLogOrderByRelationAggregateInput
    _relevance?: GeneratedImageOrderByRelevanceInput
  }

  export type GeneratedImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    replicatePredictionId?: string
    AND?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    OR?: GeneratedImageWhereInput[]
    NOT?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    imageUrl?: StringFilter<"GeneratedImage"> | string
    width?: IntNullableFilter<"GeneratedImage"> | number | null
    height?: IntNullableFilter<"GeneratedImage"> | number | null
    prompt?: StringNullableFilter<"GeneratedImage"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedImage"> | string | null
    parameters?: JsonNullableFilter<"GeneratedImage">
    status?: EnumAssetStatusFilter<"GeneratedImage"> | $Enums.AssetStatus
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
    isDeleted?: BoolFilter<"GeneratedImage"> | boolean
    title?: StringNullableFilter<"GeneratedImage"> | string | null
    userId?: StringFilter<"GeneratedImage"> | string
    sourceDrawingId?: StringNullableFilter<"GeneratedImage"> | string | null
    sourceImageId?: StringNullableFilter<"GeneratedImage"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceDrawing?: XOR<DrawingNullableScalarRelationFilter, DrawingWhereInput> | null
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    derivedImages?: GeneratedImageListRelationFilter
    generatedVideos?: GeneratedVideoListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }, "id" | "replicatePredictionId">

  export type GeneratedImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    title?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrderInput | SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    _count?: GeneratedImageCountOrderByAggregateInput
    _avg?: GeneratedImageAvgOrderByAggregateInput
    _max?: GeneratedImageMaxOrderByAggregateInput
    _min?: GeneratedImageMinOrderByAggregateInput
    _sum?: GeneratedImageSumOrderByAggregateInput
  }

  export type GeneratedImageScalarWhereWithAggregatesInput = {
    AND?: GeneratedImageScalarWhereWithAggregatesInput | GeneratedImageScalarWhereWithAggregatesInput[]
    OR?: GeneratedImageScalarWhereWithAggregatesInput[]
    NOT?: GeneratedImageScalarWhereWithAggregatesInput | GeneratedImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedImage"> | string
    imageUrl?: StringWithAggregatesFilter<"GeneratedImage"> | string
    width?: IntNullableWithAggregatesFilter<"GeneratedImage"> | number | null
    height?: IntNullableWithAggregatesFilter<"GeneratedImage"> | number | null
    prompt?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    modelUsed?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    parameters?: JsonNullableWithAggregatesFilter<"GeneratedImage">
    status?: EnumAssetStatusWithAggregatesFilter<"GeneratedImage"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedImage"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"GeneratedImage"> | boolean
    title?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    userId?: StringWithAggregatesFilter<"GeneratedImage"> | string
    sourceDrawingId?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    sourceImageId?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
  }

  export type GeneratedVideoWhereInput = {
    AND?: GeneratedVideoWhereInput | GeneratedVideoWhereInput[]
    OR?: GeneratedVideoWhereInput[]
    NOT?: GeneratedVideoWhereInput | GeneratedVideoWhereInput[]
    id?: StringFilter<"GeneratedVideo"> | string
    cloudinaryPublicId?: StringNullableFilter<"GeneratedVideo"> | string | null
    videoUrl?: StringNullableFilter<"GeneratedVideo"> | string | null
    duration?: FloatNullableFilter<"GeneratedVideo"> | number | null
    prompt?: StringNullableFilter<"GeneratedVideo"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedVideo"> | string | null
    parameters?: JsonNullableFilter<"GeneratedVideo">
    status?: EnumAssetStatusFilter<"GeneratedVideo"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedVideo"> | string | null
    createdAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    isDeleted?: BoolFilter<"GeneratedVideo"> | boolean
    public?: BoolFilter<"GeneratedVideo"> | boolean
    title?: StringNullableFilter<"GeneratedVideo"> | string | null
    description?: StringNullableFilter<"GeneratedVideo"> | string | null
    userId?: StringFilter<"GeneratedVideo"> | string
    sourceImageId?: StringNullableFilter<"GeneratedVideo"> | string | null
    sound?: BoolFilter<"GeneratedVideo"> | boolean
    parentVideoId?: StringNullableFilter<"GeneratedVideo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    generatedAudio?: XOR<GeneratedAudioNullableScalarRelationFilter, GeneratedAudioWhereInput> | null
    parentVideo?: XOR<GeneratedVideoNullableScalarRelationFilter, GeneratedVideoWhereInput> | null
    childVideos?: GeneratedVideoListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }

  export type GeneratedVideoOrderByWithRelationInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    public?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    sound?: SortOrder
    parentVideoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sourceImage?: GeneratedImageOrderByWithRelationInput
    generatedAudio?: GeneratedAudioOrderByWithRelationInput
    parentVideo?: GeneratedVideoOrderByWithRelationInput
    childVideos?: GeneratedVideoOrderByRelationAggregateInput
    generationLogs?: GenerationLogOrderByRelationAggregateInput
    _relevance?: GeneratedVideoOrderByRelevanceInput
  }

  export type GeneratedVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    replicatePredictionId?: string
    AND?: GeneratedVideoWhereInput | GeneratedVideoWhereInput[]
    OR?: GeneratedVideoWhereInput[]
    NOT?: GeneratedVideoWhereInput | GeneratedVideoWhereInput[]
    cloudinaryPublicId?: StringNullableFilter<"GeneratedVideo"> | string | null
    videoUrl?: StringNullableFilter<"GeneratedVideo"> | string | null
    duration?: FloatNullableFilter<"GeneratedVideo"> | number | null
    prompt?: StringNullableFilter<"GeneratedVideo"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedVideo"> | string | null
    parameters?: JsonNullableFilter<"GeneratedVideo">
    status?: EnumAssetStatusFilter<"GeneratedVideo"> | $Enums.AssetStatus
    createdAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    isDeleted?: BoolFilter<"GeneratedVideo"> | boolean
    public?: BoolFilter<"GeneratedVideo"> | boolean
    title?: StringNullableFilter<"GeneratedVideo"> | string | null
    description?: StringNullableFilter<"GeneratedVideo"> | string | null
    userId?: StringFilter<"GeneratedVideo"> | string
    sourceImageId?: StringNullableFilter<"GeneratedVideo"> | string | null
    sound?: BoolFilter<"GeneratedVideo"> | boolean
    parentVideoId?: StringNullableFilter<"GeneratedVideo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    generatedAudio?: XOR<GeneratedAudioNullableScalarRelationFilter, GeneratedAudioWhereInput> | null
    parentVideo?: XOR<GeneratedVideoNullableScalarRelationFilter, GeneratedVideoWhereInput> | null
    childVideos?: GeneratedVideoListRelationFilter
    generationLogs?: GenerationLogListRelationFilter
  }, "id" | "replicatePredictionId">

  export type GeneratedVideoOrderByWithAggregationInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    public?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    sound?: SortOrder
    parentVideoId?: SortOrderInput | SortOrder
    _count?: GeneratedVideoCountOrderByAggregateInput
    _avg?: GeneratedVideoAvgOrderByAggregateInput
    _max?: GeneratedVideoMaxOrderByAggregateInput
    _min?: GeneratedVideoMinOrderByAggregateInput
    _sum?: GeneratedVideoSumOrderByAggregateInput
  }

  export type GeneratedVideoScalarWhereWithAggregatesInput = {
    AND?: GeneratedVideoScalarWhereWithAggregatesInput | GeneratedVideoScalarWhereWithAggregatesInput[]
    OR?: GeneratedVideoScalarWhereWithAggregatesInput[]
    NOT?: GeneratedVideoScalarWhereWithAggregatesInput | GeneratedVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedVideo"> | string
    cloudinaryPublicId?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    duration?: FloatNullableWithAggregatesFilter<"GeneratedVideo"> | number | null
    prompt?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    modelUsed?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    parameters?: JsonNullableWithAggregatesFilter<"GeneratedVideo">
    status?: EnumAssetStatusWithAggregatesFilter<"GeneratedVideo"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedVideo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GeneratedVideo"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"GeneratedVideo"> | boolean
    public?: BoolWithAggregatesFilter<"GeneratedVideo"> | boolean
    title?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    description?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    userId?: StringWithAggregatesFilter<"GeneratedVideo"> | string
    sourceImageId?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
    sound?: BoolWithAggregatesFilter<"GeneratedVideo"> | boolean
    parentVideoId?: StringNullableWithAggregatesFilter<"GeneratedVideo"> | string | null
  }

  export type GeneratedAudioWhereInput = {
    AND?: GeneratedAudioWhereInput | GeneratedAudioWhereInput[]
    OR?: GeneratedAudioWhereInput[]
    NOT?: GeneratedAudioWhereInput | GeneratedAudioWhereInput[]
    id?: StringFilter<"GeneratedAudio"> | string
    audioUrl?: StringFilter<"GeneratedAudio"> | string
    modelUsed?: StringNullableFilter<"GeneratedAudio"> | string | null
    parameters?: JsonNullableFilter<"GeneratedAudio">
    status?: EnumAssetStatusFilter<"GeneratedAudio"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedAudio"> | string | null
    createdAt?: DateTimeFilter<"GeneratedAudio"> | Date | string
    isDeleted?: BoolFilter<"GeneratedAudio"> | boolean
    userId?: StringFilter<"GeneratedAudio"> | string
    videoId?: StringFilter<"GeneratedAudio"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<GeneratedVideoScalarRelationFilter, GeneratedVideoWhereInput>
    generationLogs?: GenerationLogListRelationFilter
  }

  export type GeneratedAudioOrderByWithRelationInput = {
    id?: SortOrder
    audioUrl?: SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: GeneratedVideoOrderByWithRelationInput
    generationLogs?: GenerationLogOrderByRelationAggregateInput
    _relevance?: GeneratedAudioOrderByRelevanceInput
  }

  export type GeneratedAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    replicatePredictionId?: string
    videoId?: string
    AND?: GeneratedAudioWhereInput | GeneratedAudioWhereInput[]
    OR?: GeneratedAudioWhereInput[]
    NOT?: GeneratedAudioWhereInput | GeneratedAudioWhereInput[]
    audioUrl?: StringFilter<"GeneratedAudio"> | string
    modelUsed?: StringNullableFilter<"GeneratedAudio"> | string | null
    parameters?: JsonNullableFilter<"GeneratedAudio">
    status?: EnumAssetStatusFilter<"GeneratedAudio"> | $Enums.AssetStatus
    createdAt?: DateTimeFilter<"GeneratedAudio"> | Date | string
    isDeleted?: BoolFilter<"GeneratedAudio"> | boolean
    userId?: StringFilter<"GeneratedAudio"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<GeneratedVideoScalarRelationFilter, GeneratedVideoWhereInput>
    generationLogs?: GenerationLogListRelationFilter
  }, "id" | "replicatePredictionId" | "videoId">

  export type GeneratedAudioOrderByWithAggregationInput = {
    id?: SortOrder
    audioUrl?: SortOrder
    modelUsed?: SortOrderInput | SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    _count?: GeneratedAudioCountOrderByAggregateInput
    _max?: GeneratedAudioMaxOrderByAggregateInput
    _min?: GeneratedAudioMinOrderByAggregateInput
  }

  export type GeneratedAudioScalarWhereWithAggregatesInput = {
    AND?: GeneratedAudioScalarWhereWithAggregatesInput | GeneratedAudioScalarWhereWithAggregatesInput[]
    OR?: GeneratedAudioScalarWhereWithAggregatesInput[]
    NOT?: GeneratedAudioScalarWhereWithAggregatesInput | GeneratedAudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedAudio"> | string
    audioUrl?: StringWithAggregatesFilter<"GeneratedAudio"> | string
    modelUsed?: StringNullableWithAggregatesFilter<"GeneratedAudio"> | string | null
    parameters?: JsonNullableWithAggregatesFilter<"GeneratedAudio">
    status?: EnumAssetStatusWithAggregatesFilter<"GeneratedAudio"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableWithAggregatesFilter<"GeneratedAudio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedAudio"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"GeneratedAudio"> | boolean
    userId?: StringWithAggregatesFilter<"GeneratedAudio"> | string
    videoId?: StringWithAggregatesFilter<"GeneratedAudio"> | string
  }

  export type GenerationLogWhereInput = {
    AND?: GenerationLogWhereInput | GenerationLogWhereInput[]
    OR?: GenerationLogWhereInput[]
    NOT?: GenerationLogWhereInput | GenerationLogWhereInput[]
    id?: StringFilter<"GenerationLog"> | string
    type?: StringFilter<"GenerationLog"> | string
    prompt?: StringNullableFilter<"GenerationLog"> | string | null
    modelUsed?: StringFilter<"GenerationLog"> | string
    parameters?: JsonNullableFilter<"GenerationLog">
    status?: EnumAssetStatusFilter<"GenerationLog"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GenerationLog"> | string | null
    resultUrl?: StringNullableFilter<"GenerationLog"> | string | null
    errorMessage?: StringNullableFilter<"GenerationLog"> | string | null
    startedAt?: DateTimeFilter<"GenerationLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"GenerationLog"> | Date | string | null
    userId?: StringFilter<"GenerationLog"> | string
    sourceDrawingId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceImageId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    generatedVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceAudioId?: StringNullableFilter<"GenerationLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceDrawing?: XOR<DrawingNullableScalarRelationFilter, DrawingWhereInput> | null
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    sourceVideo?: XOR<GeneratedVideoNullableScalarRelationFilter, GeneratedVideoWhereInput> | null
    sourceAudio?: XOR<GeneratedAudioNullableScalarRelationFilter, GeneratedAudioWhereInput> | null
  }

  export type GenerationLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    resultUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrderInput | SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    sourceVideoId?: SortOrderInput | SortOrder
    generatedVideoId?: SortOrderInput | SortOrder
    sourceAudioId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sourceDrawing?: DrawingOrderByWithRelationInput
    sourceImage?: GeneratedImageOrderByWithRelationInput
    sourceVideo?: GeneratedVideoOrderByWithRelationInput
    sourceAudio?: GeneratedAudioOrderByWithRelationInput
    _relevance?: GenerationLogOrderByRelevanceInput
  }

  export type GenerationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    replicatePredictionId?: string
    AND?: GenerationLogWhereInput | GenerationLogWhereInput[]
    OR?: GenerationLogWhereInput[]
    NOT?: GenerationLogWhereInput | GenerationLogWhereInput[]
    type?: StringFilter<"GenerationLog"> | string
    prompt?: StringNullableFilter<"GenerationLog"> | string | null
    modelUsed?: StringFilter<"GenerationLog"> | string
    parameters?: JsonNullableFilter<"GenerationLog">
    status?: EnumAssetStatusFilter<"GenerationLog"> | $Enums.AssetStatus
    resultUrl?: StringNullableFilter<"GenerationLog"> | string | null
    errorMessage?: StringNullableFilter<"GenerationLog"> | string | null
    startedAt?: DateTimeFilter<"GenerationLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"GenerationLog"> | Date | string | null
    userId?: StringFilter<"GenerationLog"> | string
    sourceDrawingId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceImageId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    generatedVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceAudioId?: StringNullableFilter<"GenerationLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceDrawing?: XOR<DrawingNullableScalarRelationFilter, DrawingWhereInput> | null
    sourceImage?: XOR<GeneratedImageNullableScalarRelationFilter, GeneratedImageWhereInput> | null
    sourceVideo?: XOR<GeneratedVideoNullableScalarRelationFilter, GeneratedVideoWhereInput> | null
    sourceAudio?: XOR<GeneratedAudioNullableScalarRelationFilter, GeneratedAudioWhereInput> | null
  }, "id" | "replicatePredictionId">

  export type GenerationLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    prompt?: SortOrderInput | SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrderInput | SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrderInput | SortOrder
    resultUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrderInput | SortOrder
    sourceImageId?: SortOrderInput | SortOrder
    sourceVideoId?: SortOrderInput | SortOrder
    generatedVideoId?: SortOrderInput | SortOrder
    sourceAudioId?: SortOrderInput | SortOrder
    _count?: GenerationLogCountOrderByAggregateInput
    _max?: GenerationLogMaxOrderByAggregateInput
    _min?: GenerationLogMinOrderByAggregateInput
  }

  export type GenerationLogScalarWhereWithAggregatesInput = {
    AND?: GenerationLogScalarWhereWithAggregatesInput | GenerationLogScalarWhereWithAggregatesInput[]
    OR?: GenerationLogScalarWhereWithAggregatesInput[]
    NOT?: GenerationLogScalarWhereWithAggregatesInput | GenerationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenerationLog"> | string
    type?: StringWithAggregatesFilter<"GenerationLog"> | string
    prompt?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    modelUsed?: StringWithAggregatesFilter<"GenerationLog"> | string
    parameters?: JsonNullableWithAggregatesFilter<"GenerationLog">
    status?: EnumAssetStatusWithAggregatesFilter<"GenerationLog"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    resultUrl?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"GenerationLog"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"GenerationLog"> | Date | string | null
    userId?: StringWithAggregatesFilter<"GenerationLog"> | string
    sourceDrawingId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    sourceImageId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    sourceVideoId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    generatedVideoId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
    sourceAudioId?: StringNullableWithAggregatesFilter<"GenerationLog"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorsInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorsNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrawingCreateInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    user: UserCreateNestedOneWithoutDrawingsInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutSourceDrawingInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingUncheckedCreateInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    userId: string
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceDrawingInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    user?: UserUpdateOneRequiredWithoutDrawingsNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutSourceDrawingNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    userId?: StringFieldUpdateOperationsInput | string
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceDrawingNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingCreateManyInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    userId: string
  }

  export type DrawingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
  }

  export type DrawingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GeneratedImageCreateInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageCreateManyInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
  }

  export type GeneratedImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedVideoCreateInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoCreateManyInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
  }

  export type GeneratedVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GeneratedVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedAudioCreateInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutGeneratedAudiosInput
    video: GeneratedVideoCreateNestedOneWithoutGeneratedAudioInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioUncheckedCreateInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    userId: string
    videoId: string
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedAudiosNestedInput
    video?: GeneratedVideoUpdateOneRequiredWithoutGeneratedAudioNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedAudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedAudioCreateManyInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    userId: string
    videoId: string
  }

  export type GeneratedAudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GeneratedAudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type GenerationLogCreateInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    user: UserCreateNestedOneWithoutGenerationLogsInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGenerationLogsInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGenerationLogsInput
    sourceVideo?: GeneratedVideoCreateNestedOneWithoutGenerationLogsInput
    sourceAudio?: GeneratedAudioCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGenerationLogsNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGenerationLogsNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGenerationLogsNestedInput
    sourceVideo?: GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput
    sourceAudio?: GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogCreateManyInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type DrawingListRelationFilter = {
    every?: DrawingWhereInput
    some?: DrawingWhereInput
    none?: DrawingWhereInput
  }

  export type GeneratedImageListRelationFilter = {
    every?: GeneratedImageWhereInput
    some?: GeneratedImageWhereInput
    none?: GeneratedImageWhereInput
  }

  export type GeneratedVideoListRelationFilter = {
    every?: GeneratedVideoWhereInput
    some?: GeneratedVideoWhereInput
    none?: GeneratedVideoWhereInput
  }

  export type GeneratedAudioListRelationFilter = {
    every?: GeneratedAudioWhereInput
    some?: GeneratedAudioWhereInput
    none?: GeneratedAudioWhereInput
  }

  export type GenerationLogListRelationFilter = {
    every?: GenerationLogWhereInput
    some?: GenerationLogWhereInput
    none?: GenerationLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrawingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedAudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenerationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthenticatorOrderByRelevanceInput = {
    fields: AuthenticatorOrderByRelevanceFieldEnum | AuthenticatorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string
    credentialID: string
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumDrawingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingStatus | EnumDrawingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingStatus[]
    notIn?: $Enums.DrawingStatus[]
    not?: NestedEnumDrawingStatusFilter<$PrismaModel> | $Enums.DrawingStatus
  }

  export type DrawingOrderByRelevanceInput = {
    fields: DrawingOrderByRelevanceFieldEnum | DrawingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DrawingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    previewUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type DrawingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    previewUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type DrawingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    previewUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDrawingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingStatus | EnumDrawingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingStatus[]
    notIn?: $Enums.DrawingStatus[]
    not?: NestedEnumDrawingStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawingStatusFilter<$PrismaModel>
    _max?: NestedEnumDrawingStatusFilter<$PrismaModel>
  }

  export type EnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type DrawingNullableScalarRelationFilter = {
    is?: DrawingWhereInput | null
    isNot?: DrawingWhereInput | null
  }

  export type GeneratedImageNullableScalarRelationFilter = {
    is?: GeneratedImageWhereInput | null
    isNot?: GeneratedImageWhereInput | null
  }

  export type GeneratedImageOrderByRelevanceInput = {
    fields: GeneratedImageOrderByRelevanceFieldEnum | GeneratedImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneratedImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
  }

  export type GeneratedImageAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type GeneratedImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
  }

  export type GeneratedImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
  }

  export type GeneratedImageSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
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

  export type GeneratedAudioNullableScalarRelationFilter = {
    is?: GeneratedAudioWhereInput | null
    isNot?: GeneratedAudioWhereInput | null
  }

  export type GeneratedVideoNullableScalarRelationFilter = {
    is?: GeneratedVideoWhereInput | null
    isNot?: GeneratedVideoWhereInput | null
  }

  export type GeneratedVideoOrderByRelevanceInput = {
    fields: GeneratedVideoOrderByRelevanceFieldEnum | GeneratedVideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneratedVideoCountOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    public?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    sourceImageId?: SortOrder
    sound?: SortOrder
    parentVideoId?: SortOrder
  }

  export type GeneratedVideoAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type GeneratedVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    public?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    sourceImageId?: SortOrder
    sound?: SortOrder
    parentVideoId?: SortOrder
  }

  export type GeneratedVideoMinOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    public?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    sourceImageId?: SortOrder
    sound?: SortOrder
    parentVideoId?: SortOrder
  }

  export type GeneratedVideoSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type GeneratedVideoScalarRelationFilter = {
    is?: GeneratedVideoWhereInput
    isNot?: GeneratedVideoWhereInput
  }

  export type GeneratedAudioOrderByRelevanceInput = {
    fields: GeneratedAudioOrderByRelevanceFieldEnum | GeneratedAudioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneratedAudioCountOrderByAggregateInput = {
    id?: SortOrder
    audioUrl?: SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type GeneratedAudioMaxOrderByAggregateInput = {
    id?: SortOrder
    audioUrl?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type GeneratedAudioMinOrderByAggregateInput = {
    id?: SortOrder
    audioUrl?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    createdAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type GenerationLogOrderByRelevanceInput = {
    fields: GenerationLogOrderByRelevanceFieldEnum | GenerationLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenerationLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    parameters?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    resultUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
    sourceVideoId?: SortOrder
    generatedVideoId?: SortOrder
    sourceAudioId?: SortOrder
  }

  export type GenerationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    resultUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
    sourceVideoId?: SortOrder
    generatedVideoId?: SortOrder
    sourceAudioId?: SortOrder
  }

  export type GenerationLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    modelUsed?: SortOrder
    status?: SortOrder
    replicatePredictionId?: SortOrder
    resultUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    sourceDrawingId?: SortOrder
    sourceImageId?: SortOrder
    sourceVideoId?: SortOrder
    generatedVideoId?: SortOrder
    sourceAudioId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type DrawingCreateNestedManyWithoutUserInput = {
    create?: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput> | DrawingCreateWithoutUserInput[] | DrawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutUserInput | DrawingCreateOrConnectWithoutUserInput[]
    createMany?: DrawingCreateManyUserInputEnvelope
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type GeneratedImageCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput> | GeneratedImageCreateWithoutUserInput[] | GeneratedImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutUserInput | GeneratedImageCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedImageCreateManyUserInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GeneratedVideoCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput> | GeneratedVideoCreateWithoutUserInput[] | GeneratedVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutUserInput | GeneratedVideoCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedVideoCreateManyUserInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GeneratedAudioCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput> | GeneratedAudioCreateWithoutUserInput[] | GeneratedAudioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutUserInput | GeneratedAudioCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedAudioCreateManyUserInputEnvelope
    connect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
  }

  export type GenerationLogCreateNestedManyWithoutUserInput = {
    create?: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput> | GenerationLogCreateWithoutUserInput[] | GenerationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutUserInput | GenerationLogCreateOrConnectWithoutUserInput[]
    createMany?: GenerationLogCreateManyUserInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type DrawingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput> | DrawingCreateWithoutUserInput[] | DrawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutUserInput | DrawingCreateOrConnectWithoutUserInput[]
    createMany?: DrawingCreateManyUserInputEnvelope
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type GeneratedImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput> | GeneratedImageCreateWithoutUserInput[] | GeneratedImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutUserInput | GeneratedImageCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedImageCreateManyUserInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GeneratedVideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput> | GeneratedVideoCreateWithoutUserInput[] | GeneratedVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutUserInput | GeneratedVideoCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedVideoCreateManyUserInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GeneratedAudioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput> | GeneratedAudioCreateWithoutUserInput[] | GeneratedAudioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutUserInput | GeneratedAudioCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedAudioCreateManyUserInputEnvelope
    connect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
  }

  export type GenerationLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput> | GenerationLogCreateWithoutUserInput[] | GenerationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutUserInput | GenerationLogCreateOrConnectWithoutUserInput[]
    createMany?: GenerationLogCreateManyUserInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type DrawingUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput> | DrawingCreateWithoutUserInput[] | DrawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutUserInput | DrawingCreateOrConnectWithoutUserInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutUserInput | DrawingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrawingCreateManyUserInputEnvelope
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutUserInput | DrawingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutUserInput | DrawingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type GeneratedImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput> | GeneratedImageCreateWithoutUserInput[] | GeneratedImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutUserInput | GeneratedImageCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutUserInput | GeneratedImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedImageCreateManyUserInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutUserInput | GeneratedImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutUserInput | GeneratedImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GeneratedVideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput> | GeneratedVideoCreateWithoutUserInput[] | GeneratedVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutUserInput | GeneratedVideoCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutUserInput | GeneratedVideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedVideoCreateManyUserInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutUserInput | GeneratedVideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutUserInput | GeneratedVideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GeneratedAudioUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput> | GeneratedAudioCreateWithoutUserInput[] | GeneratedAudioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutUserInput | GeneratedAudioCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedAudioUpsertWithWhereUniqueWithoutUserInput | GeneratedAudioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedAudioCreateManyUserInputEnvelope
    set?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    disconnect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    delete?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    connect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    update?: GeneratedAudioUpdateWithWhereUniqueWithoutUserInput | GeneratedAudioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedAudioUpdateManyWithWhereWithoutUserInput | GeneratedAudioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedAudioScalarWhereInput | GeneratedAudioScalarWhereInput[]
  }

  export type GenerationLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput> | GenerationLogCreateWithoutUserInput[] | GenerationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutUserInput | GenerationLogCreateOrConnectWithoutUserInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutUserInput | GenerationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GenerationLogCreateManyUserInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutUserInput | GenerationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutUserInput | GenerationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type DrawingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput> | DrawingCreateWithoutUserInput[] | DrawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutUserInput | DrawingCreateOrConnectWithoutUserInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutUserInput | DrawingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrawingCreateManyUserInputEnvelope
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutUserInput | DrawingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutUserInput | DrawingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type GeneratedImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput> | GeneratedImageCreateWithoutUserInput[] | GeneratedImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutUserInput | GeneratedImageCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutUserInput | GeneratedImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedImageCreateManyUserInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutUserInput | GeneratedImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutUserInput | GeneratedImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput> | GeneratedVideoCreateWithoutUserInput[] | GeneratedVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutUserInput | GeneratedVideoCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutUserInput | GeneratedVideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedVideoCreateManyUserInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutUserInput | GeneratedVideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutUserInput | GeneratedVideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput> | GeneratedAudioCreateWithoutUserInput[] | GeneratedAudioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutUserInput | GeneratedAudioCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedAudioUpsertWithWhereUniqueWithoutUserInput | GeneratedAudioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedAudioCreateManyUserInputEnvelope
    set?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    disconnect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    delete?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    connect?: GeneratedAudioWhereUniqueInput | GeneratedAudioWhereUniqueInput[]
    update?: GeneratedAudioUpdateWithWhereUniqueWithoutUserInput | GeneratedAudioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedAudioUpdateManyWithWhereWithoutUserInput | GeneratedAudioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedAudioScalarWhereInput | GeneratedAudioScalarWhereInput[]
  }

  export type GenerationLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput> | GenerationLogCreateWithoutUserInput[] | GenerationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutUserInput | GenerationLogCreateOrConnectWithoutUserInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutUserInput | GenerationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GenerationLogCreateManyUserInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutUserInput | GenerationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutUserInput | GenerationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAuthenticatorsInput = {
    create?: XOR<UserCreateWithoutAuthenticatorsInput, UserUncheckedCreateWithoutAuthenticatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorsNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorsInput, UserUncheckedCreateWithoutAuthenticatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorsInput
    upsert?: UserUpsertWithoutAuthenticatorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthenticatorsInput, UserUpdateWithoutAuthenticatorsInput>, UserUncheckedUpdateWithoutAuthenticatorsInput>
  }

  export type UserCreateNestedOneWithoutDrawingsInput = {
    create?: XOR<UserCreateWithoutDrawingsInput, UserUncheckedCreateWithoutDrawingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrawingsInput
    connect?: UserWhereUniqueInput
  }

  export type GeneratedImageCreateNestedManyWithoutSourceDrawingInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput> | GeneratedImageCreateWithoutSourceDrawingInput[] | GeneratedImageUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceDrawingInput | GeneratedImageCreateOrConnectWithoutSourceDrawingInput[]
    createMany?: GeneratedImageCreateManySourceDrawingInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GenerationLogCreateNestedManyWithoutSourceDrawingInput = {
    create?: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput> | GenerationLogCreateWithoutSourceDrawingInput[] | GenerationLogUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceDrawingInput | GenerationLogCreateOrConnectWithoutSourceDrawingInput[]
    createMany?: GenerationLogCreateManySourceDrawingInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type GeneratedImageUncheckedCreateNestedManyWithoutSourceDrawingInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput> | GeneratedImageCreateWithoutSourceDrawingInput[] | GeneratedImageUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceDrawingInput | GeneratedImageCreateOrConnectWithoutSourceDrawingInput[]
    createMany?: GeneratedImageCreateManySourceDrawingInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GenerationLogUncheckedCreateNestedManyWithoutSourceDrawingInput = {
    create?: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput> | GenerationLogCreateWithoutSourceDrawingInput[] | GenerationLogUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceDrawingInput | GenerationLogCreateOrConnectWithoutSourceDrawingInput[]
    createMany?: GenerationLogCreateManySourceDrawingInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type EnumDrawingStatusFieldUpdateOperationsInput = {
    set?: $Enums.DrawingStatus
  }

  export type UserUpdateOneRequiredWithoutDrawingsNestedInput = {
    create?: XOR<UserCreateWithoutDrawingsInput, UserUncheckedCreateWithoutDrawingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrawingsInput
    upsert?: UserUpsertWithoutDrawingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrawingsInput, UserUpdateWithoutDrawingsInput>, UserUncheckedUpdateWithoutDrawingsInput>
  }

  export type GeneratedImageUpdateManyWithoutSourceDrawingNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput> | GeneratedImageCreateWithoutSourceDrawingInput[] | GeneratedImageUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceDrawingInput | GeneratedImageCreateOrConnectWithoutSourceDrawingInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutSourceDrawingInput | GeneratedImageUpsertWithWhereUniqueWithoutSourceDrawingInput[]
    createMany?: GeneratedImageCreateManySourceDrawingInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutSourceDrawingInput | GeneratedImageUpdateWithWhereUniqueWithoutSourceDrawingInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutSourceDrawingInput | GeneratedImageUpdateManyWithWhereWithoutSourceDrawingInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GenerationLogUpdateManyWithoutSourceDrawingNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput> | GenerationLogCreateWithoutSourceDrawingInput[] | GenerationLogUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceDrawingInput | GenerationLogCreateOrConnectWithoutSourceDrawingInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceDrawingInput | GenerationLogUpsertWithWhereUniqueWithoutSourceDrawingInput[]
    createMany?: GenerationLogCreateManySourceDrawingInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceDrawingInput | GenerationLogUpdateWithWhereUniqueWithoutSourceDrawingInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceDrawingInput | GenerationLogUpdateManyWithWhereWithoutSourceDrawingInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type GeneratedImageUncheckedUpdateManyWithoutSourceDrawingNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput> | GeneratedImageCreateWithoutSourceDrawingInput[] | GeneratedImageUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceDrawingInput | GeneratedImageCreateOrConnectWithoutSourceDrawingInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutSourceDrawingInput | GeneratedImageUpsertWithWhereUniqueWithoutSourceDrawingInput[]
    createMany?: GeneratedImageCreateManySourceDrawingInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutSourceDrawingInput | GeneratedImageUpdateWithWhereUniqueWithoutSourceDrawingInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutSourceDrawingInput | GeneratedImageUpdateManyWithWhereWithoutSourceDrawingInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceDrawingNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput> | GenerationLogCreateWithoutSourceDrawingInput[] | GenerationLogUncheckedCreateWithoutSourceDrawingInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceDrawingInput | GenerationLogCreateOrConnectWithoutSourceDrawingInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceDrawingInput | GenerationLogUpsertWithWhereUniqueWithoutSourceDrawingInput[]
    createMany?: GenerationLogCreateManySourceDrawingInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceDrawingInput | GenerationLogUpdateWithWhereUniqueWithoutSourceDrawingInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceDrawingInput | GenerationLogUpdateManyWithWhereWithoutSourceDrawingInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGeneratedImagesInput = {
    create?: XOR<UserCreateWithoutGeneratedImagesInput, UserUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedImagesInput
    connect?: UserWhereUniqueInput
  }

  export type DrawingCreateNestedOneWithoutGeneratedImagesInput = {
    create?: XOR<DrawingCreateWithoutGeneratedImagesInput, DrawingUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: DrawingCreateOrConnectWithoutGeneratedImagesInput
    connect?: DrawingWhereUniqueInput
  }

  export type GeneratedImageCreateNestedOneWithoutDerivedImagesInput = {
    create?: XOR<GeneratedImageCreateWithoutDerivedImagesInput, GeneratedImageUncheckedCreateWithoutDerivedImagesInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutDerivedImagesInput
    connect?: GeneratedImageWhereUniqueInput
  }

  export type GeneratedImageCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput> | GeneratedImageCreateWithoutSourceImageInput[] | GeneratedImageUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceImageInput | GeneratedImageCreateOrConnectWithoutSourceImageInput[]
    createMany?: GeneratedImageCreateManySourceImageInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GeneratedVideoCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput> | GeneratedVideoCreateWithoutSourceImageInput[] | GeneratedVideoUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutSourceImageInput | GeneratedVideoCreateOrConnectWithoutSourceImageInput[]
    createMany?: GeneratedVideoCreateManySourceImageInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GenerationLogCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput> | GenerationLogCreateWithoutSourceImageInput[] | GenerationLogUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceImageInput | GenerationLogCreateOrConnectWithoutSourceImageInput[]
    createMany?: GenerationLogCreateManySourceImageInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput> | GeneratedImageCreateWithoutSourceImageInput[] | GeneratedImageUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceImageInput | GeneratedImageCreateOrConnectWithoutSourceImageInput[]
    createMany?: GeneratedImageCreateManySourceImageInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput> | GeneratedVideoCreateWithoutSourceImageInput[] | GeneratedVideoUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutSourceImageInput | GeneratedVideoCreateOrConnectWithoutSourceImageInput[]
    createMany?: GeneratedVideoCreateManySourceImageInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput = {
    create?: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput> | GenerationLogCreateWithoutSourceImageInput[] | GenerationLogUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceImageInput | GenerationLogCreateOrConnectWithoutSourceImageInput[]
    createMany?: GenerationLogCreateManySourceImageInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus
  }

  export type UserUpdateOneRequiredWithoutGeneratedImagesNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedImagesInput, UserUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedImagesInput
    upsert?: UserUpsertWithoutGeneratedImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedImagesInput, UserUpdateWithoutGeneratedImagesInput>, UserUncheckedUpdateWithoutGeneratedImagesInput>
  }

  export type DrawingUpdateOneWithoutGeneratedImagesNestedInput = {
    create?: XOR<DrawingCreateWithoutGeneratedImagesInput, DrawingUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: DrawingCreateOrConnectWithoutGeneratedImagesInput
    upsert?: DrawingUpsertWithoutGeneratedImagesInput
    disconnect?: DrawingWhereInput | boolean
    delete?: DrawingWhereInput | boolean
    connect?: DrawingWhereUniqueInput
    update?: XOR<XOR<DrawingUpdateToOneWithWhereWithoutGeneratedImagesInput, DrawingUpdateWithoutGeneratedImagesInput>, DrawingUncheckedUpdateWithoutGeneratedImagesInput>
  }

  export type GeneratedImageUpdateOneWithoutDerivedImagesNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutDerivedImagesInput, GeneratedImageUncheckedCreateWithoutDerivedImagesInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutDerivedImagesInput
    upsert?: GeneratedImageUpsertWithoutDerivedImagesInput
    disconnect?: GeneratedImageWhereInput | boolean
    delete?: GeneratedImageWhereInput | boolean
    connect?: GeneratedImageWhereUniqueInput
    update?: XOR<XOR<GeneratedImageUpdateToOneWithWhereWithoutDerivedImagesInput, GeneratedImageUpdateWithoutDerivedImagesInput>, GeneratedImageUncheckedUpdateWithoutDerivedImagesInput>
  }

  export type GeneratedImageUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput> | GeneratedImageCreateWithoutSourceImageInput[] | GeneratedImageUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceImageInput | GeneratedImageCreateOrConnectWithoutSourceImageInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutSourceImageInput | GeneratedImageUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GeneratedImageCreateManySourceImageInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutSourceImageInput | GeneratedImageUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutSourceImageInput | GeneratedImageUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GeneratedVideoUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput> | GeneratedVideoCreateWithoutSourceImageInput[] | GeneratedVideoUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutSourceImageInput | GeneratedVideoCreateOrConnectWithoutSourceImageInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutSourceImageInput | GeneratedVideoUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GeneratedVideoCreateManySourceImageInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutSourceImageInput | GeneratedVideoUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutSourceImageInput | GeneratedVideoUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GenerationLogUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput> | GenerationLogCreateWithoutSourceImageInput[] | GenerationLogUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceImageInput | GenerationLogCreateOrConnectWithoutSourceImageInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceImageInput | GenerationLogUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GenerationLogCreateManySourceImageInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceImageInput | GenerationLogUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceImageInput | GenerationLogUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput> | GeneratedImageCreateWithoutSourceImageInput[] | GeneratedImageUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutSourceImageInput | GeneratedImageCreateOrConnectWithoutSourceImageInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutSourceImageInput | GeneratedImageUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GeneratedImageCreateManySourceImageInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutSourceImageInput | GeneratedImageUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutSourceImageInput | GeneratedImageUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput> | GeneratedVideoCreateWithoutSourceImageInput[] | GeneratedVideoUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutSourceImageInput | GeneratedVideoCreateOrConnectWithoutSourceImageInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutSourceImageInput | GeneratedVideoUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GeneratedVideoCreateManySourceImageInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutSourceImageInput | GeneratedVideoUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutSourceImageInput | GeneratedVideoUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput> | GenerationLogCreateWithoutSourceImageInput[] | GenerationLogUncheckedCreateWithoutSourceImageInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceImageInput | GenerationLogCreateOrConnectWithoutSourceImageInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceImageInput | GenerationLogUpsertWithWhereUniqueWithoutSourceImageInput[]
    createMany?: GenerationLogCreateManySourceImageInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceImageInput | GenerationLogUpdateWithWhereUniqueWithoutSourceImageInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceImageInput | GenerationLogUpdateManyWithWhereWithoutSourceImageInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGeneratedVideosInput = {
    create?: XOR<UserCreateWithoutGeneratedVideosInput, UserUncheckedCreateWithoutGeneratedVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedVideosInput
    connect?: UserWhereUniqueInput
  }

  export type GeneratedImageCreateNestedOneWithoutGeneratedVideosInput = {
    create?: XOR<GeneratedImageCreateWithoutGeneratedVideosInput, GeneratedImageUncheckedCreateWithoutGeneratedVideosInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutGeneratedVideosInput
    connect?: GeneratedImageWhereUniqueInput
  }

  export type GeneratedAudioCreateNestedOneWithoutVideoInput = {
    create?: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutVideoInput
    connect?: GeneratedAudioWhereUniqueInput
  }

  export type GeneratedVideoCreateNestedOneWithoutChildVideosInput = {
    create?: XOR<GeneratedVideoCreateWithoutChildVideosInput, GeneratedVideoUncheckedCreateWithoutChildVideosInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutChildVideosInput
    connect?: GeneratedVideoWhereUniqueInput
  }

  export type GeneratedVideoCreateNestedManyWithoutParentVideoInput = {
    create?: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput> | GeneratedVideoCreateWithoutParentVideoInput[] | GeneratedVideoUncheckedCreateWithoutParentVideoInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutParentVideoInput | GeneratedVideoCreateOrConnectWithoutParentVideoInput[]
    createMany?: GeneratedVideoCreateManyParentVideoInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GenerationLogCreateNestedManyWithoutSourceVideoInput = {
    create?: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput> | GenerationLogCreateWithoutSourceVideoInput[] | GenerationLogUncheckedCreateWithoutSourceVideoInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceVideoInput | GenerationLogCreateOrConnectWithoutSourceVideoInput[]
    createMany?: GenerationLogCreateManySourceVideoInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutVideoInput
    connect?: GeneratedAudioWhereUniqueInput
  }

  export type GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput = {
    create?: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput> | GeneratedVideoCreateWithoutParentVideoInput[] | GeneratedVideoUncheckedCreateWithoutParentVideoInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutParentVideoInput | GeneratedVideoCreateOrConnectWithoutParentVideoInput[]
    createMany?: GeneratedVideoCreateManyParentVideoInputEnvelope
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
  }

  export type GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput = {
    create?: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput> | GenerationLogCreateWithoutSourceVideoInput[] | GenerationLogUncheckedCreateWithoutSourceVideoInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceVideoInput | GenerationLogCreateOrConnectWithoutSourceVideoInput[]
    createMany?: GenerationLogCreateManySourceVideoInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGeneratedVideosNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedVideosInput, UserUncheckedCreateWithoutGeneratedVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedVideosInput
    upsert?: UserUpsertWithoutGeneratedVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedVideosInput, UserUpdateWithoutGeneratedVideosInput>, UserUncheckedUpdateWithoutGeneratedVideosInput>
  }

  export type GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutGeneratedVideosInput, GeneratedImageUncheckedCreateWithoutGeneratedVideosInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutGeneratedVideosInput
    upsert?: GeneratedImageUpsertWithoutGeneratedVideosInput
    disconnect?: GeneratedImageWhereInput | boolean
    delete?: GeneratedImageWhereInput | boolean
    connect?: GeneratedImageWhereUniqueInput
    update?: XOR<XOR<GeneratedImageUpdateToOneWithWhereWithoutGeneratedVideosInput, GeneratedImageUpdateWithoutGeneratedVideosInput>, GeneratedImageUncheckedUpdateWithoutGeneratedVideosInput>
  }

  export type GeneratedAudioUpdateOneWithoutVideoNestedInput = {
    create?: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutVideoInput
    upsert?: GeneratedAudioUpsertWithoutVideoInput
    disconnect?: GeneratedAudioWhereInput | boolean
    delete?: GeneratedAudioWhereInput | boolean
    connect?: GeneratedAudioWhereUniqueInput
    update?: XOR<XOR<GeneratedAudioUpdateToOneWithWhereWithoutVideoInput, GeneratedAudioUpdateWithoutVideoInput>, GeneratedAudioUncheckedUpdateWithoutVideoInput>
  }

  export type GeneratedVideoUpdateOneWithoutChildVideosNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutChildVideosInput, GeneratedVideoUncheckedCreateWithoutChildVideosInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutChildVideosInput
    upsert?: GeneratedVideoUpsertWithoutChildVideosInput
    disconnect?: GeneratedVideoWhereInput | boolean
    delete?: GeneratedVideoWhereInput | boolean
    connect?: GeneratedVideoWhereUniqueInput
    update?: XOR<XOR<GeneratedVideoUpdateToOneWithWhereWithoutChildVideosInput, GeneratedVideoUpdateWithoutChildVideosInput>, GeneratedVideoUncheckedUpdateWithoutChildVideosInput>
  }

  export type GeneratedVideoUpdateManyWithoutParentVideoNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput> | GeneratedVideoCreateWithoutParentVideoInput[] | GeneratedVideoUncheckedCreateWithoutParentVideoInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutParentVideoInput | GeneratedVideoCreateOrConnectWithoutParentVideoInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutParentVideoInput | GeneratedVideoUpsertWithWhereUniqueWithoutParentVideoInput[]
    createMany?: GeneratedVideoCreateManyParentVideoInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutParentVideoInput | GeneratedVideoUpdateWithWhereUniqueWithoutParentVideoInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutParentVideoInput | GeneratedVideoUpdateManyWithWhereWithoutParentVideoInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GenerationLogUpdateManyWithoutSourceVideoNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput> | GenerationLogCreateWithoutSourceVideoInput[] | GenerationLogUncheckedCreateWithoutSourceVideoInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceVideoInput | GenerationLogCreateOrConnectWithoutSourceVideoInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceVideoInput | GenerationLogUpsertWithWhereUniqueWithoutSourceVideoInput[]
    createMany?: GenerationLogCreateManySourceVideoInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceVideoInput | GenerationLogUpdateWithWhereUniqueWithoutSourceVideoInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceVideoInput | GenerationLogUpdateManyWithWhereWithoutSourceVideoInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutVideoInput
    upsert?: GeneratedAudioUpsertWithoutVideoInput
    disconnect?: GeneratedAudioWhereInput | boolean
    delete?: GeneratedAudioWhereInput | boolean
    connect?: GeneratedAudioWhereUniqueInput
    update?: XOR<XOR<GeneratedAudioUpdateToOneWithWhereWithoutVideoInput, GeneratedAudioUpdateWithoutVideoInput>, GeneratedAudioUncheckedUpdateWithoutVideoInput>
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput> | GeneratedVideoCreateWithoutParentVideoInput[] | GeneratedVideoUncheckedCreateWithoutParentVideoInput[]
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutParentVideoInput | GeneratedVideoCreateOrConnectWithoutParentVideoInput[]
    upsert?: GeneratedVideoUpsertWithWhereUniqueWithoutParentVideoInput | GeneratedVideoUpsertWithWhereUniqueWithoutParentVideoInput[]
    createMany?: GeneratedVideoCreateManyParentVideoInputEnvelope
    set?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    disconnect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    delete?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    connect?: GeneratedVideoWhereUniqueInput | GeneratedVideoWhereUniqueInput[]
    update?: GeneratedVideoUpdateWithWhereUniqueWithoutParentVideoInput | GeneratedVideoUpdateWithWhereUniqueWithoutParentVideoInput[]
    updateMany?: GeneratedVideoUpdateManyWithWhereWithoutParentVideoInput | GeneratedVideoUpdateManyWithWhereWithoutParentVideoInput[]
    deleteMany?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput> | GenerationLogCreateWithoutSourceVideoInput[] | GenerationLogUncheckedCreateWithoutSourceVideoInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceVideoInput | GenerationLogCreateOrConnectWithoutSourceVideoInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceVideoInput | GenerationLogUpsertWithWhereUniqueWithoutSourceVideoInput[]
    createMany?: GenerationLogCreateManySourceVideoInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceVideoInput | GenerationLogUpdateWithWhereUniqueWithoutSourceVideoInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceVideoInput | GenerationLogUpdateManyWithWhereWithoutSourceVideoInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGeneratedAudiosInput = {
    create?: XOR<UserCreateWithoutGeneratedAudiosInput, UserUncheckedCreateWithoutGeneratedAudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedAudiosInput
    connect?: UserWhereUniqueInput
  }

  export type GeneratedVideoCreateNestedOneWithoutGeneratedAudioInput = {
    create?: XOR<GeneratedVideoCreateWithoutGeneratedAudioInput, GeneratedVideoUncheckedCreateWithoutGeneratedAudioInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutGeneratedAudioInput
    connect?: GeneratedVideoWhereUniqueInput
  }

  export type GenerationLogCreateNestedManyWithoutSourceAudioInput = {
    create?: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput> | GenerationLogCreateWithoutSourceAudioInput[] | GenerationLogUncheckedCreateWithoutSourceAudioInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceAudioInput | GenerationLogCreateOrConnectWithoutSourceAudioInput[]
    createMany?: GenerationLogCreateManySourceAudioInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type GenerationLogUncheckedCreateNestedManyWithoutSourceAudioInput = {
    create?: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput> | GenerationLogCreateWithoutSourceAudioInput[] | GenerationLogUncheckedCreateWithoutSourceAudioInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceAudioInput | GenerationLogCreateOrConnectWithoutSourceAudioInput[]
    createMany?: GenerationLogCreateManySourceAudioInputEnvelope
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGeneratedAudiosNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedAudiosInput, UserUncheckedCreateWithoutGeneratedAudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedAudiosInput
    upsert?: UserUpsertWithoutGeneratedAudiosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedAudiosInput, UserUpdateWithoutGeneratedAudiosInput>, UserUncheckedUpdateWithoutGeneratedAudiosInput>
  }

  export type GeneratedVideoUpdateOneRequiredWithoutGeneratedAudioNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutGeneratedAudioInput, GeneratedVideoUncheckedCreateWithoutGeneratedAudioInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutGeneratedAudioInput
    upsert?: GeneratedVideoUpsertWithoutGeneratedAudioInput
    connect?: GeneratedVideoWhereUniqueInput
    update?: XOR<XOR<GeneratedVideoUpdateToOneWithWhereWithoutGeneratedAudioInput, GeneratedVideoUpdateWithoutGeneratedAudioInput>, GeneratedVideoUncheckedUpdateWithoutGeneratedAudioInput>
  }

  export type GenerationLogUpdateManyWithoutSourceAudioNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput> | GenerationLogCreateWithoutSourceAudioInput[] | GenerationLogUncheckedCreateWithoutSourceAudioInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceAudioInput | GenerationLogCreateOrConnectWithoutSourceAudioInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceAudioInput | GenerationLogUpsertWithWhereUniqueWithoutSourceAudioInput[]
    createMany?: GenerationLogCreateManySourceAudioInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceAudioInput | GenerationLogUpdateWithWhereUniqueWithoutSourceAudioInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceAudioInput | GenerationLogUpdateManyWithWhereWithoutSourceAudioInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceAudioNestedInput = {
    create?: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput> | GenerationLogCreateWithoutSourceAudioInput[] | GenerationLogUncheckedCreateWithoutSourceAudioInput[]
    connectOrCreate?: GenerationLogCreateOrConnectWithoutSourceAudioInput | GenerationLogCreateOrConnectWithoutSourceAudioInput[]
    upsert?: GenerationLogUpsertWithWhereUniqueWithoutSourceAudioInput | GenerationLogUpsertWithWhereUniqueWithoutSourceAudioInput[]
    createMany?: GenerationLogCreateManySourceAudioInputEnvelope
    set?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    disconnect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    delete?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    connect?: GenerationLogWhereUniqueInput | GenerationLogWhereUniqueInput[]
    update?: GenerationLogUpdateWithWhereUniqueWithoutSourceAudioInput | GenerationLogUpdateWithWhereUniqueWithoutSourceAudioInput[]
    updateMany?: GenerationLogUpdateManyWithWhereWithoutSourceAudioInput | GenerationLogUpdateManyWithWhereWithoutSourceAudioInput[]
    deleteMany?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGenerationLogsInput = {
    create?: XOR<UserCreateWithoutGenerationLogsInput, UserUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGenerationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type DrawingCreateNestedOneWithoutGenerationLogsInput = {
    create?: XOR<DrawingCreateWithoutGenerationLogsInput, DrawingUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: DrawingCreateOrConnectWithoutGenerationLogsInput
    connect?: DrawingWhereUniqueInput
  }

  export type GeneratedImageCreateNestedOneWithoutGenerationLogsInput = {
    create?: XOR<GeneratedImageCreateWithoutGenerationLogsInput, GeneratedImageUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutGenerationLogsInput
    connect?: GeneratedImageWhereUniqueInput
  }

  export type GeneratedVideoCreateNestedOneWithoutGenerationLogsInput = {
    create?: XOR<GeneratedVideoCreateWithoutGenerationLogsInput, GeneratedVideoUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutGenerationLogsInput
    connect?: GeneratedVideoWhereUniqueInput
  }

  export type GeneratedAudioCreateNestedOneWithoutGenerationLogsInput = {
    create?: XOR<GeneratedAudioCreateWithoutGenerationLogsInput, GeneratedAudioUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutGenerationLogsInput
    connect?: GeneratedAudioWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGenerationLogsNestedInput = {
    create?: XOR<UserCreateWithoutGenerationLogsInput, UserUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGenerationLogsInput
    upsert?: UserUpsertWithoutGenerationLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGenerationLogsInput, UserUpdateWithoutGenerationLogsInput>, UserUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type DrawingUpdateOneWithoutGenerationLogsNestedInput = {
    create?: XOR<DrawingCreateWithoutGenerationLogsInput, DrawingUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: DrawingCreateOrConnectWithoutGenerationLogsInput
    upsert?: DrawingUpsertWithoutGenerationLogsInput
    disconnect?: DrawingWhereInput | boolean
    delete?: DrawingWhereInput | boolean
    connect?: DrawingWhereUniqueInput
    update?: XOR<XOR<DrawingUpdateToOneWithWhereWithoutGenerationLogsInput, DrawingUpdateWithoutGenerationLogsInput>, DrawingUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedImageUpdateOneWithoutGenerationLogsNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutGenerationLogsInput, GeneratedImageUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutGenerationLogsInput
    upsert?: GeneratedImageUpsertWithoutGenerationLogsInput
    disconnect?: GeneratedImageWhereInput | boolean
    delete?: GeneratedImageWhereInput | boolean
    connect?: GeneratedImageWhereUniqueInput
    update?: XOR<XOR<GeneratedImageUpdateToOneWithWhereWithoutGenerationLogsInput, GeneratedImageUpdateWithoutGenerationLogsInput>, GeneratedImageUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput = {
    create?: XOR<GeneratedVideoCreateWithoutGenerationLogsInput, GeneratedVideoUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedVideoCreateOrConnectWithoutGenerationLogsInput
    upsert?: GeneratedVideoUpsertWithoutGenerationLogsInput
    disconnect?: GeneratedVideoWhereInput | boolean
    delete?: GeneratedVideoWhereInput | boolean
    connect?: GeneratedVideoWhereUniqueInput
    update?: XOR<XOR<GeneratedVideoUpdateToOneWithWhereWithoutGenerationLogsInput, GeneratedVideoUpdateWithoutGenerationLogsInput>, GeneratedVideoUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput = {
    create?: XOR<GeneratedAudioCreateWithoutGenerationLogsInput, GeneratedAudioUncheckedCreateWithoutGenerationLogsInput>
    connectOrCreate?: GeneratedAudioCreateOrConnectWithoutGenerationLogsInput
    upsert?: GeneratedAudioUpsertWithoutGenerationLogsInput
    disconnect?: GeneratedAudioWhereInput | boolean
    delete?: GeneratedAudioWhereInput | boolean
    connect?: GeneratedAudioWhereUniqueInput
    update?: XOR<XOR<GeneratedAudioUpdateToOneWithWhereWithoutGenerationLogsInput, GeneratedAudioUpdateWithoutGenerationLogsInput>, GeneratedAudioUncheckedUpdateWithoutGenerationLogsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDrawingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingStatus | EnumDrawingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingStatus[]
    notIn?: $Enums.DrawingStatus[]
    not?: NestedEnumDrawingStatusFilter<$PrismaModel> | $Enums.DrawingStatus
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDrawingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingStatus | EnumDrawingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingStatus[]
    notIn?: $Enums.DrawingStatus[]
    not?: NestedEnumDrawingStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawingStatusFilter<$PrismaModel>
    _max?: NestedEnumDrawingStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
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

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DrawingCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    generatedImages?: GeneratedImageCreateNestedManyWithoutSourceDrawingInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceDrawingInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingCreateOrConnectWithoutUserInput = {
    where: DrawingWhereUniqueInput
    create: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput>
  }

  export type DrawingCreateManyUserInputEnvelope = {
    data: DrawingCreateManyUserInput | DrawingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedImageCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutUserInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput>
  }

  export type GeneratedImageCreateManyUserInputEnvelope = {
    data: GeneratedImageCreateManyUserInput | GeneratedImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedVideoCreateWithoutUserInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutUserInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutUserInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput>
  }

  export type GeneratedVideoCreateManyUserInputEnvelope = {
    data: GeneratedVideoCreateManyUserInput | GeneratedVideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedAudioCreateWithoutUserInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    video: GeneratedVideoCreateNestedOneWithoutGeneratedAudioInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioUncheckedCreateWithoutUserInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    videoId: string
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioCreateOrConnectWithoutUserInput = {
    where: GeneratedAudioWhereUniqueInput
    create: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput>
  }

  export type GeneratedAudioCreateManyUserInputEnvelope = {
    data: GeneratedAudioCreateManyUserInput | GeneratedAudioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GenerationLogCreateWithoutUserInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    sourceDrawing?: DrawingCreateNestedOneWithoutGenerationLogsInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGenerationLogsInput
    sourceVideo?: GeneratedVideoCreateNestedOneWithoutGenerationLogsInput
    sourceAudio?: GeneratedAudioCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogCreateOrConnectWithoutUserInput = {
    where: GenerationLogWhereUniqueInput
    create: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput>
  }

  export type GenerationLogCreateManyUserInputEnvelope = {
    data: GenerationLogCreateManyUserInput | GenerationLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
  }

  export type DrawingUpsertWithWhereUniqueWithoutUserInput = {
    where: DrawingWhereUniqueInput
    update: XOR<DrawingUpdateWithoutUserInput, DrawingUncheckedUpdateWithoutUserInput>
    create: XOR<DrawingCreateWithoutUserInput, DrawingUncheckedCreateWithoutUserInput>
  }

  export type DrawingUpdateWithWhereUniqueWithoutUserInput = {
    where: DrawingWhereUniqueInput
    data: XOR<DrawingUpdateWithoutUserInput, DrawingUncheckedUpdateWithoutUserInput>
  }

  export type DrawingUpdateManyWithWhereWithoutUserInput = {
    where: DrawingScalarWhereInput
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyWithoutUserInput>
  }

  export type DrawingScalarWhereInput = {
    AND?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    OR?: DrawingScalarWhereInput[]
    NOT?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    id?: StringFilter<"Drawing"> | string
    title?: StringNullableFilter<"Drawing"> | string | null
    content?: JsonNullableFilter<"Drawing">
    previewUrl?: StringNullableFilter<"Drawing"> | string | null
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
    isDeleted?: BoolFilter<"Drawing"> | boolean
    status?: EnumDrawingStatusFilter<"Drawing"> | $Enums.DrawingStatus
    userId?: StringFilter<"Drawing"> | string
  }

  export type GeneratedImageUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneratedImageWhereUniqueInput
    update: XOR<GeneratedImageUpdateWithoutUserInput, GeneratedImageUncheckedUpdateWithoutUserInput>
    create: XOR<GeneratedImageCreateWithoutUserInput, GeneratedImageUncheckedCreateWithoutUserInput>
  }

  export type GeneratedImageUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneratedImageWhereUniqueInput
    data: XOR<GeneratedImageUpdateWithoutUserInput, GeneratedImageUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedImageUpdateManyWithWhereWithoutUserInput = {
    where: GeneratedImageScalarWhereInput
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneratedImageScalarWhereInput = {
    AND?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
    OR?: GeneratedImageScalarWhereInput[]
    NOT?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
    id?: StringFilter<"GeneratedImage"> | string
    imageUrl?: StringFilter<"GeneratedImage"> | string
    width?: IntNullableFilter<"GeneratedImage"> | number | null
    height?: IntNullableFilter<"GeneratedImage"> | number | null
    prompt?: StringNullableFilter<"GeneratedImage"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedImage"> | string | null
    parameters?: JsonNullableFilter<"GeneratedImage">
    status?: EnumAssetStatusFilter<"GeneratedImage"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedImage"> | string | null
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
    isDeleted?: BoolFilter<"GeneratedImage"> | boolean
    title?: StringNullableFilter<"GeneratedImage"> | string | null
    userId?: StringFilter<"GeneratedImage"> | string
    sourceDrawingId?: StringNullableFilter<"GeneratedImage"> | string | null
    sourceImageId?: StringNullableFilter<"GeneratedImage"> | string | null
  }

  export type GeneratedVideoUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneratedVideoWhereUniqueInput
    update: XOR<GeneratedVideoUpdateWithoutUserInput, GeneratedVideoUncheckedUpdateWithoutUserInput>
    create: XOR<GeneratedVideoCreateWithoutUserInput, GeneratedVideoUncheckedCreateWithoutUserInput>
  }

  export type GeneratedVideoUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneratedVideoWhereUniqueInput
    data: XOR<GeneratedVideoUpdateWithoutUserInput, GeneratedVideoUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedVideoUpdateManyWithWhereWithoutUserInput = {
    where: GeneratedVideoScalarWhereInput
    data: XOR<GeneratedVideoUpdateManyMutationInput, GeneratedVideoUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneratedVideoScalarWhereInput = {
    AND?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
    OR?: GeneratedVideoScalarWhereInput[]
    NOT?: GeneratedVideoScalarWhereInput | GeneratedVideoScalarWhereInput[]
    id?: StringFilter<"GeneratedVideo"> | string
    cloudinaryPublicId?: StringNullableFilter<"GeneratedVideo"> | string | null
    videoUrl?: StringNullableFilter<"GeneratedVideo"> | string | null
    duration?: FloatNullableFilter<"GeneratedVideo"> | number | null
    prompt?: StringNullableFilter<"GeneratedVideo"> | string | null
    modelUsed?: StringNullableFilter<"GeneratedVideo"> | string | null
    parameters?: JsonNullableFilter<"GeneratedVideo">
    status?: EnumAssetStatusFilter<"GeneratedVideo"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedVideo"> | string | null
    createdAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedVideo"> | Date | string
    isDeleted?: BoolFilter<"GeneratedVideo"> | boolean
    public?: BoolFilter<"GeneratedVideo"> | boolean
    title?: StringNullableFilter<"GeneratedVideo"> | string | null
    description?: StringNullableFilter<"GeneratedVideo"> | string | null
    userId?: StringFilter<"GeneratedVideo"> | string
    sourceImageId?: StringNullableFilter<"GeneratedVideo"> | string | null
    sound?: BoolFilter<"GeneratedVideo"> | boolean
    parentVideoId?: StringNullableFilter<"GeneratedVideo"> | string | null
  }

  export type GeneratedAudioUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneratedAudioWhereUniqueInput
    update: XOR<GeneratedAudioUpdateWithoutUserInput, GeneratedAudioUncheckedUpdateWithoutUserInput>
    create: XOR<GeneratedAudioCreateWithoutUserInput, GeneratedAudioUncheckedCreateWithoutUserInput>
  }

  export type GeneratedAudioUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneratedAudioWhereUniqueInput
    data: XOR<GeneratedAudioUpdateWithoutUserInput, GeneratedAudioUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedAudioUpdateManyWithWhereWithoutUserInput = {
    where: GeneratedAudioScalarWhereInput
    data: XOR<GeneratedAudioUpdateManyMutationInput, GeneratedAudioUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneratedAudioScalarWhereInput = {
    AND?: GeneratedAudioScalarWhereInput | GeneratedAudioScalarWhereInput[]
    OR?: GeneratedAudioScalarWhereInput[]
    NOT?: GeneratedAudioScalarWhereInput | GeneratedAudioScalarWhereInput[]
    id?: StringFilter<"GeneratedAudio"> | string
    audioUrl?: StringFilter<"GeneratedAudio"> | string
    modelUsed?: StringNullableFilter<"GeneratedAudio"> | string | null
    parameters?: JsonNullableFilter<"GeneratedAudio">
    status?: EnumAssetStatusFilter<"GeneratedAudio"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GeneratedAudio"> | string | null
    createdAt?: DateTimeFilter<"GeneratedAudio"> | Date | string
    isDeleted?: BoolFilter<"GeneratedAudio"> | boolean
    userId?: StringFilter<"GeneratedAudio"> | string
    videoId?: StringFilter<"GeneratedAudio"> | string
  }

  export type GenerationLogUpsertWithWhereUniqueWithoutUserInput = {
    where: GenerationLogWhereUniqueInput
    update: XOR<GenerationLogUpdateWithoutUserInput, GenerationLogUncheckedUpdateWithoutUserInput>
    create: XOR<GenerationLogCreateWithoutUserInput, GenerationLogUncheckedCreateWithoutUserInput>
  }

  export type GenerationLogUpdateWithWhereUniqueWithoutUserInput = {
    where: GenerationLogWhereUniqueInput
    data: XOR<GenerationLogUpdateWithoutUserInput, GenerationLogUncheckedUpdateWithoutUserInput>
  }

  export type GenerationLogUpdateManyWithWhereWithoutUserInput = {
    where: GenerationLogScalarWhereInput
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyWithoutUserInput>
  }

  export type GenerationLogScalarWhereInput = {
    AND?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
    OR?: GenerationLogScalarWhereInput[]
    NOT?: GenerationLogScalarWhereInput | GenerationLogScalarWhereInput[]
    id?: StringFilter<"GenerationLog"> | string
    type?: StringFilter<"GenerationLog"> | string
    prompt?: StringNullableFilter<"GenerationLog"> | string | null
    modelUsed?: StringFilter<"GenerationLog"> | string
    parameters?: JsonNullableFilter<"GenerationLog">
    status?: EnumAssetStatusFilter<"GenerationLog"> | $Enums.AssetStatus
    replicatePredictionId?: StringNullableFilter<"GenerationLog"> | string | null
    resultUrl?: StringNullableFilter<"GenerationLog"> | string | null
    errorMessage?: StringNullableFilter<"GenerationLog"> | string | null
    startedAt?: DateTimeFilter<"GenerationLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"GenerationLog"> | Date | string | null
    userId?: StringFilter<"GenerationLog"> | string
    sourceDrawingId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceImageId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    generatedVideoId?: StringNullableFilter<"GenerationLog"> | string | null
    sourceAudioId?: StringNullableFilter<"GenerationLog"> | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthenticatorsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorsInput, UserUncheckedCreateWithoutAuthenticatorsInput>
  }

  export type UserUpsertWithoutAuthenticatorsInput = {
    update: XOR<UserUpdateWithoutAuthenticatorsInput, UserUncheckedUpdateWithoutAuthenticatorsInput>
    create: XOR<UserCreateWithoutAuthenticatorsInput, UserUncheckedCreateWithoutAuthenticatorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorsInput, UserUncheckedUpdateWithoutAuthenticatorsInput>
  }

  export type UserUpdateWithoutAuthenticatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDrawingsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrawingsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrawingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrawingsInput, UserUncheckedCreateWithoutDrawingsInput>
  }

  export type GeneratedImageCreateWithoutSourceDrawingInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutSourceDrawingInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceImageId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutSourceDrawingInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput>
  }

  export type GeneratedImageCreateManySourceDrawingInputEnvelope = {
    data: GeneratedImageCreateManySourceDrawingInput | GeneratedImageCreateManySourceDrawingInput[]
    skipDuplicates?: boolean
  }

  export type GenerationLogCreateWithoutSourceDrawingInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    user: UserCreateNestedOneWithoutGenerationLogsInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGenerationLogsInput
    sourceVideo?: GeneratedVideoCreateNestedOneWithoutGenerationLogsInput
    sourceAudio?: GeneratedAudioCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateWithoutSourceDrawingInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogCreateOrConnectWithoutSourceDrawingInput = {
    where: GenerationLogWhereUniqueInput
    create: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput>
  }

  export type GenerationLogCreateManySourceDrawingInputEnvelope = {
    data: GenerationLogCreateManySourceDrawingInput | GenerationLogCreateManySourceDrawingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDrawingsInput = {
    update: XOR<UserUpdateWithoutDrawingsInput, UserUncheckedUpdateWithoutDrawingsInput>
    create: XOR<UserCreateWithoutDrawingsInput, UserUncheckedCreateWithoutDrawingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrawingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrawingsInput, UserUncheckedUpdateWithoutDrawingsInput>
  }

  export type UserUpdateWithoutDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneratedImageUpsertWithWhereUniqueWithoutSourceDrawingInput = {
    where: GeneratedImageWhereUniqueInput
    update: XOR<GeneratedImageUpdateWithoutSourceDrawingInput, GeneratedImageUncheckedUpdateWithoutSourceDrawingInput>
    create: XOR<GeneratedImageCreateWithoutSourceDrawingInput, GeneratedImageUncheckedCreateWithoutSourceDrawingInput>
  }

  export type GeneratedImageUpdateWithWhereUniqueWithoutSourceDrawingInput = {
    where: GeneratedImageWhereUniqueInput
    data: XOR<GeneratedImageUpdateWithoutSourceDrawingInput, GeneratedImageUncheckedUpdateWithoutSourceDrawingInput>
  }

  export type GeneratedImageUpdateManyWithWhereWithoutSourceDrawingInput = {
    where: GeneratedImageScalarWhereInput
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyWithoutSourceDrawingInput>
  }

  export type GenerationLogUpsertWithWhereUniqueWithoutSourceDrawingInput = {
    where: GenerationLogWhereUniqueInput
    update: XOR<GenerationLogUpdateWithoutSourceDrawingInput, GenerationLogUncheckedUpdateWithoutSourceDrawingInput>
    create: XOR<GenerationLogCreateWithoutSourceDrawingInput, GenerationLogUncheckedCreateWithoutSourceDrawingInput>
  }

  export type GenerationLogUpdateWithWhereUniqueWithoutSourceDrawingInput = {
    where: GenerationLogWhereUniqueInput
    data: XOR<GenerationLogUpdateWithoutSourceDrawingInput, GenerationLogUncheckedUpdateWithoutSourceDrawingInput>
  }

  export type GenerationLogUpdateManyWithWhereWithoutSourceDrawingInput = {
    where: GenerationLogScalarWhereInput
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyWithoutSourceDrawingInput>
  }

  export type UserCreateWithoutGeneratedImagesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGeneratedImagesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGeneratedImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedImagesInput, UserUncheckedCreateWithoutGeneratedImagesInput>
  }

  export type DrawingCreateWithoutGeneratedImagesInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    user: UserCreateNestedOneWithoutDrawingsInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingUncheckedCreateWithoutGeneratedImagesInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    userId: string
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingCreateOrConnectWithoutGeneratedImagesInput = {
    where: DrawingWhereUniqueInput
    create: XOR<DrawingCreateWithoutGeneratedImagesInput, DrawingUncheckedCreateWithoutGeneratedImagesInput>
  }

  export type GeneratedImageCreateWithoutDerivedImagesInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutDerivedImagesInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutDerivedImagesInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutDerivedImagesInput, GeneratedImageUncheckedCreateWithoutDerivedImagesInput>
  }

  export type GeneratedImageCreateWithoutSourceImageInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutSourceImageInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutSourceImageInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput>
  }

  export type GeneratedImageCreateManySourceImageInputEnvelope = {
    data: GeneratedImageCreateManySourceImageInput | GeneratedImageCreateManySourceImageInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedVideoCreateWithoutSourceImageInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutSourceImageInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sound?: boolean
    parentVideoId?: string | null
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutSourceImageInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput>
  }

  export type GeneratedVideoCreateManySourceImageInputEnvelope = {
    data: GeneratedVideoCreateManySourceImageInput | GeneratedVideoCreateManySourceImageInput[]
    skipDuplicates?: boolean
  }

  export type GenerationLogCreateWithoutSourceImageInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    user: UserCreateNestedOneWithoutGenerationLogsInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGenerationLogsInput
    sourceVideo?: GeneratedVideoCreateNestedOneWithoutGenerationLogsInput
    sourceAudio?: GeneratedAudioCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateWithoutSourceImageInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogCreateOrConnectWithoutSourceImageInput = {
    where: GenerationLogWhereUniqueInput
    create: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput>
  }

  export type GenerationLogCreateManySourceImageInputEnvelope = {
    data: GenerationLogCreateManySourceImageInput | GenerationLogCreateManySourceImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGeneratedImagesInput = {
    update: XOR<UserUpdateWithoutGeneratedImagesInput, UserUncheckedUpdateWithoutGeneratedImagesInput>
    create: XOR<UserCreateWithoutGeneratedImagesInput, UserUncheckedCreateWithoutGeneratedImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedImagesInput, UserUncheckedUpdateWithoutGeneratedImagesInput>
  }

  export type UserUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrawingUpsertWithoutGeneratedImagesInput = {
    update: XOR<DrawingUpdateWithoutGeneratedImagesInput, DrawingUncheckedUpdateWithoutGeneratedImagesInput>
    create: XOR<DrawingCreateWithoutGeneratedImagesInput, DrawingUncheckedCreateWithoutGeneratedImagesInput>
    where?: DrawingWhereInput
  }

  export type DrawingUpdateToOneWithWhereWithoutGeneratedImagesInput = {
    where?: DrawingWhereInput
    data: XOR<DrawingUpdateWithoutGeneratedImagesInput, DrawingUncheckedUpdateWithoutGeneratedImagesInput>
  }

  export type DrawingUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    user?: UserUpdateOneRequiredWithoutDrawingsNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingUncheckedUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    userId?: StringFieldUpdateOperationsInput | string
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceDrawingNestedInput
  }

  export type GeneratedImageUpsertWithoutDerivedImagesInput = {
    update: XOR<GeneratedImageUpdateWithoutDerivedImagesInput, GeneratedImageUncheckedUpdateWithoutDerivedImagesInput>
    create: XOR<GeneratedImageCreateWithoutDerivedImagesInput, GeneratedImageUncheckedCreateWithoutDerivedImagesInput>
    where?: GeneratedImageWhereInput
  }

  export type GeneratedImageUpdateToOneWithWhereWithoutDerivedImagesInput = {
    where?: GeneratedImageWhereInput
    data: XOR<GeneratedImageUpdateWithoutDerivedImagesInput, GeneratedImageUncheckedUpdateWithoutDerivedImagesInput>
  }

  export type GeneratedImageUpdateWithoutDerivedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutDerivedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUpsertWithWhereUniqueWithoutSourceImageInput = {
    where: GeneratedImageWhereUniqueInput
    update: XOR<GeneratedImageUpdateWithoutSourceImageInput, GeneratedImageUncheckedUpdateWithoutSourceImageInput>
    create: XOR<GeneratedImageCreateWithoutSourceImageInput, GeneratedImageUncheckedCreateWithoutSourceImageInput>
  }

  export type GeneratedImageUpdateWithWhereUniqueWithoutSourceImageInput = {
    where: GeneratedImageWhereUniqueInput
    data: XOR<GeneratedImageUpdateWithoutSourceImageInput, GeneratedImageUncheckedUpdateWithoutSourceImageInput>
  }

  export type GeneratedImageUpdateManyWithWhereWithoutSourceImageInput = {
    where: GeneratedImageScalarWhereInput
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyWithoutSourceImageInput>
  }

  export type GeneratedVideoUpsertWithWhereUniqueWithoutSourceImageInput = {
    where: GeneratedVideoWhereUniqueInput
    update: XOR<GeneratedVideoUpdateWithoutSourceImageInput, GeneratedVideoUncheckedUpdateWithoutSourceImageInput>
    create: XOR<GeneratedVideoCreateWithoutSourceImageInput, GeneratedVideoUncheckedCreateWithoutSourceImageInput>
  }

  export type GeneratedVideoUpdateWithWhereUniqueWithoutSourceImageInput = {
    where: GeneratedVideoWhereUniqueInput
    data: XOR<GeneratedVideoUpdateWithoutSourceImageInput, GeneratedVideoUncheckedUpdateWithoutSourceImageInput>
  }

  export type GeneratedVideoUpdateManyWithWhereWithoutSourceImageInput = {
    where: GeneratedVideoScalarWhereInput
    data: XOR<GeneratedVideoUpdateManyMutationInput, GeneratedVideoUncheckedUpdateManyWithoutSourceImageInput>
  }

  export type GenerationLogUpsertWithWhereUniqueWithoutSourceImageInput = {
    where: GenerationLogWhereUniqueInput
    update: XOR<GenerationLogUpdateWithoutSourceImageInput, GenerationLogUncheckedUpdateWithoutSourceImageInput>
    create: XOR<GenerationLogCreateWithoutSourceImageInput, GenerationLogUncheckedCreateWithoutSourceImageInput>
  }

  export type GenerationLogUpdateWithWhereUniqueWithoutSourceImageInput = {
    where: GenerationLogWhereUniqueInput
    data: XOR<GenerationLogUpdateWithoutSourceImageInput, GenerationLogUncheckedUpdateWithoutSourceImageInput>
  }

  export type GenerationLogUpdateManyWithWhereWithoutSourceImageInput = {
    where: GenerationLogScalarWhereInput
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyWithoutSourceImageInput>
  }

  export type UserCreateWithoutGeneratedVideosInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGeneratedVideosInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGeneratedVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedVideosInput, UserUncheckedCreateWithoutGeneratedVideosInput>
  }

  export type GeneratedImageCreateWithoutGeneratedVideosInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutGeneratedVideosInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutGeneratedVideosInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutGeneratedVideosInput, GeneratedImageUncheckedCreateWithoutGeneratedVideosInput>
  }

  export type GeneratedAudioCreateWithoutVideoInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutGeneratedAudiosInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioUncheckedCreateWithoutVideoInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    userId: string
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceAudioInput
  }

  export type GeneratedAudioCreateOrConnectWithoutVideoInput = {
    where: GeneratedAudioWhereUniqueInput
    create: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
  }

  export type GeneratedVideoCreateWithoutChildVideosInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutChildVideosInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutChildVideosInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutChildVideosInput, GeneratedVideoUncheckedCreateWithoutChildVideosInput>
  }

  export type GeneratedVideoCreateWithoutParentVideoInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutParentVideoInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutParentVideoInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput>
  }

  export type GeneratedVideoCreateManyParentVideoInputEnvelope = {
    data: GeneratedVideoCreateManyParentVideoInput | GeneratedVideoCreateManyParentVideoInput[]
    skipDuplicates?: boolean
  }

  export type GenerationLogCreateWithoutSourceVideoInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    user: UserCreateNestedOneWithoutGenerationLogsInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGenerationLogsInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGenerationLogsInput
    sourceAudio?: GeneratedAudioCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateWithoutSourceVideoInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GenerationLogCreateOrConnectWithoutSourceVideoInput = {
    where: GenerationLogWhereUniqueInput
    create: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput>
  }

  export type GenerationLogCreateManySourceVideoInputEnvelope = {
    data: GenerationLogCreateManySourceVideoInput | GenerationLogCreateManySourceVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGeneratedVideosInput = {
    update: XOR<UserUpdateWithoutGeneratedVideosInput, UserUncheckedUpdateWithoutGeneratedVideosInput>
    create: XOR<UserCreateWithoutGeneratedVideosInput, UserUncheckedCreateWithoutGeneratedVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedVideosInput, UserUncheckedUpdateWithoutGeneratedVideosInput>
  }

  export type UserUpdateWithoutGeneratedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneratedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneratedImageUpsertWithoutGeneratedVideosInput = {
    update: XOR<GeneratedImageUpdateWithoutGeneratedVideosInput, GeneratedImageUncheckedUpdateWithoutGeneratedVideosInput>
    create: XOR<GeneratedImageCreateWithoutGeneratedVideosInput, GeneratedImageUncheckedCreateWithoutGeneratedVideosInput>
    where?: GeneratedImageWhereInput
  }

  export type GeneratedImageUpdateToOneWithWhereWithoutGeneratedVideosInput = {
    where?: GeneratedImageWhereInput
    data: XOR<GeneratedImageUpdateWithoutGeneratedVideosInput, GeneratedImageUncheckedUpdateWithoutGeneratedVideosInput>
  }

  export type GeneratedImageUpdateWithoutGeneratedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutGeneratedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedAudioUpsertWithoutVideoInput = {
    update: XOR<GeneratedAudioUpdateWithoutVideoInput, GeneratedAudioUncheckedUpdateWithoutVideoInput>
    create: XOR<GeneratedAudioCreateWithoutVideoInput, GeneratedAudioUncheckedCreateWithoutVideoInput>
    where?: GeneratedAudioWhereInput
  }

  export type GeneratedAudioUpdateToOneWithWhereWithoutVideoInput = {
    where?: GeneratedAudioWhereInput
    data: XOR<GeneratedAudioUpdateWithoutVideoInput, GeneratedAudioUncheckedUpdateWithoutVideoInput>
  }

  export type GeneratedAudioUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedAudiosNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedAudioUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedVideoUpsertWithoutChildVideosInput = {
    update: XOR<GeneratedVideoUpdateWithoutChildVideosInput, GeneratedVideoUncheckedUpdateWithoutChildVideosInput>
    create: XOR<GeneratedVideoCreateWithoutChildVideosInput, GeneratedVideoUncheckedCreateWithoutChildVideosInput>
    where?: GeneratedVideoWhereInput
  }

  export type GeneratedVideoUpdateToOneWithWhereWithoutChildVideosInput = {
    where?: GeneratedVideoWhereInput
    data: XOR<GeneratedVideoUpdateWithoutChildVideosInput, GeneratedVideoUncheckedUpdateWithoutChildVideosInput>
  }

  export type GeneratedVideoUpdateWithoutChildVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutChildVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUpsertWithWhereUniqueWithoutParentVideoInput = {
    where: GeneratedVideoWhereUniqueInput
    update: XOR<GeneratedVideoUpdateWithoutParentVideoInput, GeneratedVideoUncheckedUpdateWithoutParentVideoInput>
    create: XOR<GeneratedVideoCreateWithoutParentVideoInput, GeneratedVideoUncheckedCreateWithoutParentVideoInput>
  }

  export type GeneratedVideoUpdateWithWhereUniqueWithoutParentVideoInput = {
    where: GeneratedVideoWhereUniqueInput
    data: XOR<GeneratedVideoUpdateWithoutParentVideoInput, GeneratedVideoUncheckedUpdateWithoutParentVideoInput>
  }

  export type GeneratedVideoUpdateManyWithWhereWithoutParentVideoInput = {
    where: GeneratedVideoScalarWhereInput
    data: XOR<GeneratedVideoUpdateManyMutationInput, GeneratedVideoUncheckedUpdateManyWithoutParentVideoInput>
  }

  export type GenerationLogUpsertWithWhereUniqueWithoutSourceVideoInput = {
    where: GenerationLogWhereUniqueInput
    update: XOR<GenerationLogUpdateWithoutSourceVideoInput, GenerationLogUncheckedUpdateWithoutSourceVideoInput>
    create: XOR<GenerationLogCreateWithoutSourceVideoInput, GenerationLogUncheckedCreateWithoutSourceVideoInput>
  }

  export type GenerationLogUpdateWithWhereUniqueWithoutSourceVideoInput = {
    where: GenerationLogWhereUniqueInput
    data: XOR<GenerationLogUpdateWithoutSourceVideoInput, GenerationLogUncheckedUpdateWithoutSourceVideoInput>
  }

  export type GenerationLogUpdateManyWithWhereWithoutSourceVideoInput = {
    where: GenerationLogScalarWhereInput
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyWithoutSourceVideoInput>
  }

  export type UserCreateWithoutGeneratedAudiosInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGeneratedAudiosInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGeneratedAudiosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedAudiosInput, UserUncheckedCreateWithoutGeneratedAudiosInput>
  }

  export type GeneratedVideoCreateWithoutGeneratedAudioInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutGeneratedAudioInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
    generationLogs?: GenerationLogUncheckedCreateNestedManyWithoutSourceVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutGeneratedAudioInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutGeneratedAudioInput, GeneratedVideoUncheckedCreateWithoutGeneratedAudioInput>
  }

  export type GenerationLogCreateWithoutSourceAudioInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    generatedVideoId?: string | null
    user: UserCreateNestedOneWithoutGenerationLogsInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGenerationLogsInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGenerationLogsInput
    sourceVideo?: GeneratedVideoCreateNestedOneWithoutGenerationLogsInput
  }

  export type GenerationLogUncheckedCreateWithoutSourceAudioInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
  }

  export type GenerationLogCreateOrConnectWithoutSourceAudioInput = {
    where: GenerationLogWhereUniqueInput
    create: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput>
  }

  export type GenerationLogCreateManySourceAudioInputEnvelope = {
    data: GenerationLogCreateManySourceAudioInput | GenerationLogCreateManySourceAudioInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGeneratedAudiosInput = {
    update: XOR<UserUpdateWithoutGeneratedAudiosInput, UserUncheckedUpdateWithoutGeneratedAudiosInput>
    create: XOR<UserCreateWithoutGeneratedAudiosInput, UserUncheckedCreateWithoutGeneratedAudiosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedAudiosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedAudiosInput, UserUncheckedUpdateWithoutGeneratedAudiosInput>
  }

  export type UserUpdateWithoutGeneratedAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneratedAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneratedVideoUpsertWithoutGeneratedAudioInput = {
    update: XOR<GeneratedVideoUpdateWithoutGeneratedAudioInput, GeneratedVideoUncheckedUpdateWithoutGeneratedAudioInput>
    create: XOR<GeneratedVideoCreateWithoutGeneratedAudioInput, GeneratedVideoUncheckedCreateWithoutGeneratedAudioInput>
    where?: GeneratedVideoWhereInput
  }

  export type GeneratedVideoUpdateToOneWithWhereWithoutGeneratedAudioInput = {
    where?: GeneratedVideoWhereInput
    data: XOR<GeneratedVideoUpdateWithoutGeneratedAudioInput, GeneratedVideoUncheckedUpdateWithoutGeneratedAudioInput>
  }

  export type GeneratedVideoUpdateWithoutGeneratedAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutGeneratedAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GenerationLogUpsertWithWhereUniqueWithoutSourceAudioInput = {
    where: GenerationLogWhereUniqueInput
    update: XOR<GenerationLogUpdateWithoutSourceAudioInput, GenerationLogUncheckedUpdateWithoutSourceAudioInput>
    create: XOR<GenerationLogCreateWithoutSourceAudioInput, GenerationLogUncheckedCreateWithoutSourceAudioInput>
  }

  export type GenerationLogUpdateWithWhereUniqueWithoutSourceAudioInput = {
    where: GenerationLogWhereUniqueInput
    data: XOR<GenerationLogUpdateWithoutSourceAudioInput, GenerationLogUncheckedUpdateWithoutSourceAudioInput>
  }

  export type GenerationLogUpdateManyWithWhereWithoutSourceAudioInput = {
    where: GenerationLogScalarWhereInput
    data: XOR<GenerationLogUpdateManyMutationInput, GenerationLogUncheckedUpdateManyWithoutSourceAudioInput>
  }

  export type UserCreateWithoutGenerationLogsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorCreateNestedManyWithoutUserInput
    drawings?: DrawingCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGenerationLogsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    drawings?: DrawingUncheckedCreateNestedManyWithoutUserInput
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutUserInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutUserInput
    generatedAudios?: GeneratedAudioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGenerationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGenerationLogsInput, UserUncheckedCreateWithoutGenerationLogsInput>
  }

  export type DrawingCreateWithoutGenerationLogsInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    user: UserCreateNestedOneWithoutDrawingsInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingUncheckedCreateWithoutGenerationLogsInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
    userId: string
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceDrawingInput
  }

  export type DrawingCreateOrConnectWithoutGenerationLogsInput = {
    where: DrawingWhereUniqueInput
    create: XOR<DrawingCreateWithoutGenerationLogsInput, DrawingUncheckedCreateWithoutGenerationLogsInput>
  }

  export type GeneratedImageCreateWithoutGenerationLogsInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    user: UserCreateNestedOneWithoutGeneratedImagesInput
    sourceDrawing?: DrawingCreateNestedOneWithoutGeneratedImagesInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutDerivedImagesInput
    derivedImages?: GeneratedImageCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageUncheckedCreateWithoutGenerationLogsInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    derivedImages?: GeneratedImageUncheckedCreateNestedManyWithoutSourceImageInput
    generatedVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutSourceImageInput
  }

  export type GeneratedImageCreateOrConnectWithoutGenerationLogsInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutGenerationLogsInput, GeneratedImageUncheckedCreateWithoutGenerationLogsInput>
  }

  export type GeneratedVideoCreateWithoutGenerationLogsInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sound?: boolean
    user: UserCreateNestedOneWithoutGeneratedVideosInput
    sourceImage?: GeneratedImageCreateNestedOneWithoutGeneratedVideosInput
    generatedAudio?: GeneratedAudioCreateNestedOneWithoutVideoInput
    parentVideo?: GeneratedVideoCreateNestedOneWithoutChildVideosInput
    childVideos?: GeneratedVideoCreateNestedManyWithoutParentVideoInput
  }

  export type GeneratedVideoUncheckedCreateWithoutGenerationLogsInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
    generatedAudio?: GeneratedAudioUncheckedCreateNestedOneWithoutVideoInput
    childVideos?: GeneratedVideoUncheckedCreateNestedManyWithoutParentVideoInput
  }

  export type GeneratedVideoCreateOrConnectWithoutGenerationLogsInput = {
    where: GeneratedVideoWhereUniqueInput
    create: XOR<GeneratedVideoCreateWithoutGenerationLogsInput, GeneratedVideoUncheckedCreateWithoutGenerationLogsInput>
  }

  export type GeneratedAudioCreateWithoutGenerationLogsInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutGeneratedAudiosInput
    video: GeneratedVideoCreateNestedOneWithoutGeneratedAudioInput
  }

  export type GeneratedAudioUncheckedCreateWithoutGenerationLogsInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    userId: string
    videoId: string
  }

  export type GeneratedAudioCreateOrConnectWithoutGenerationLogsInput = {
    where: GeneratedAudioWhereUniqueInput
    create: XOR<GeneratedAudioCreateWithoutGenerationLogsInput, GeneratedAudioUncheckedCreateWithoutGenerationLogsInput>
  }

  export type UserUpsertWithoutGenerationLogsInput = {
    update: XOR<UserUpdateWithoutGenerationLogsInput, UserUncheckedUpdateWithoutGenerationLogsInput>
    create: XOR<UserCreateWithoutGenerationLogsInput, UserUncheckedCreateWithoutGenerationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGenerationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGenerationLogsInput, UserUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type UserUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUpdateManyWithoutUserNestedInput
    drawings?: DrawingUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    drawings?: DrawingUncheckedUpdateManyWithoutUserNestedInput
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutUserNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutUserNestedInput
    generatedAudios?: GeneratedAudioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrawingUpsertWithoutGenerationLogsInput = {
    update: XOR<DrawingUpdateWithoutGenerationLogsInput, DrawingUncheckedUpdateWithoutGenerationLogsInput>
    create: XOR<DrawingCreateWithoutGenerationLogsInput, DrawingUncheckedCreateWithoutGenerationLogsInput>
    where?: DrawingWhereInput
  }

  export type DrawingUpdateToOneWithWhereWithoutGenerationLogsInput = {
    where?: DrawingWhereInput
    data: XOR<DrawingUpdateWithoutGenerationLogsInput, DrawingUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type DrawingUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    user?: UserUpdateOneRequiredWithoutDrawingsNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingUncheckedUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    userId?: StringFieldUpdateOperationsInput | string
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceDrawingNestedInput
  }

  export type GeneratedImageUpsertWithoutGenerationLogsInput = {
    update: XOR<GeneratedImageUpdateWithoutGenerationLogsInput, GeneratedImageUncheckedUpdateWithoutGenerationLogsInput>
    create: XOR<GeneratedImageCreateWithoutGenerationLogsInput, GeneratedImageUncheckedCreateWithoutGenerationLogsInput>
    where?: GeneratedImageWhereInput
  }

  export type GeneratedImageUpdateToOneWithWhereWithoutGenerationLogsInput = {
    where?: GeneratedImageWhereInput
    data: XOR<GeneratedImageUpdateWithoutGenerationLogsInput, GeneratedImageUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedImageUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedVideoUpsertWithoutGenerationLogsInput = {
    update: XOR<GeneratedVideoUpdateWithoutGenerationLogsInput, GeneratedVideoUncheckedUpdateWithoutGenerationLogsInput>
    create: XOR<GeneratedVideoCreateWithoutGenerationLogsInput, GeneratedVideoUncheckedCreateWithoutGenerationLogsInput>
    where?: GeneratedVideoWhereInput
  }

  export type GeneratedVideoUpdateToOneWithWhereWithoutGenerationLogsInput = {
    where?: GeneratedVideoWhereInput
    data: XOR<GeneratedVideoUpdateWithoutGenerationLogsInput, GeneratedVideoUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedVideoUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
  }

  export type GeneratedAudioUpsertWithoutGenerationLogsInput = {
    update: XOR<GeneratedAudioUpdateWithoutGenerationLogsInput, GeneratedAudioUncheckedUpdateWithoutGenerationLogsInput>
    create: XOR<GeneratedAudioCreateWithoutGenerationLogsInput, GeneratedAudioUncheckedCreateWithoutGenerationLogsInput>
    where?: GeneratedAudioWhereInput
  }

  export type GeneratedAudioUpdateToOneWithWhereWithoutGenerationLogsInput = {
    where?: GeneratedAudioWhereInput
    data: XOR<GeneratedAudioUpdateWithoutGenerationLogsInput, GeneratedAudioUncheckedUpdateWithoutGenerationLogsInput>
  }

  export type GeneratedAudioUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedAudiosNestedInput
    video?: GeneratedVideoUpdateOneRequiredWithoutGeneratedAudioNestedInput
  }

  export type GeneratedAudioUncheckedUpdateWithoutGenerationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type DrawingCreateManyUserInput = {
    id?: string
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    status?: $Enums.DrawingStatus
  }

  export type GeneratedImageCreateManyUserInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    sourceDrawingId?: string | null
    sourceImageId?: string | null
  }

  export type GeneratedVideoCreateManyUserInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    sourceImageId?: string | null
    sound?: boolean
    parentVideoId?: string | null
  }

  export type GeneratedAudioCreateManyUserInput = {
    id?: string
    audioUrl: string
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    videoId: string
  }

  export type GenerationLogCreateManyUserInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrawingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    generatedImages?: GeneratedImageUpdateManyWithoutSourceDrawingNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceDrawingNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceDrawingNestedInput
  }

  export type DrawingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDrawingStatusFieldUpdateOperationsInput | $Enums.DrawingStatus
  }

  export type GeneratedImageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedVideoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedAudioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    video?: GeneratedVideoUpdateOneRequiredWithoutGeneratedAudioNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedAudioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    videoId?: StringFieldUpdateOperationsInput | string
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceAudioNestedInput
  }

  export type GeneratedAudioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type GenerationLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDrawing?: DrawingUpdateOneWithoutGenerationLogsNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGenerationLogsNestedInput
    sourceVideo?: GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput
    sourceAudio?: GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedImageCreateManySourceDrawingInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceImageId?: string | null
  }

  export type GenerationLogCreateManySourceDrawingInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GeneratedImageUpdateWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutDerivedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateManyWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUpdateWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGenerationLogsNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGenerationLogsNestedInput
    sourceVideo?: GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput
    sourceAudio?: GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedImageCreateManySourceImageInput = {
    id?: string
    imageUrl: string
    width?: number | null
    height?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    isDeleted?: boolean
    title?: string | null
    userId: string
    sourceDrawingId?: string | null
  }

  export type GeneratedVideoCreateManySourceImageInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sound?: boolean
    parentVideoId?: string | null
  }

  export type GenerationLogCreateManySourceImageInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GeneratedImageUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneratedImagesNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGeneratedImagesNestedInput
    derivedImages?: GeneratedImageUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    derivedImages?: GeneratedImageUncheckedUpdateManyWithoutSourceImageNestedInput
    generatedVideos?: GeneratedVideoUncheckedUpdateManyWithoutSourceImageNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceImageNestedInput
  }

  export type GeneratedImageUncheckedUpdateManyWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedVideoUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    parentVideo?: GeneratedVideoUpdateOneWithoutChildVideosNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sound?: BoolFieldUpdateOperationsInput | boolean
    parentVideoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGenerationLogsNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGenerationLogsNestedInput
    sourceVideo?: GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput
    sourceAudio?: GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedVideoCreateManyParentVideoInput = {
    id?: string
    cloudinaryPublicId?: string | null
    videoUrl?: string | null
    duration?: number | null
    prompt?: string | null
    modelUsed?: string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AssetStatus
    replicatePredictionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    public?: boolean
    title?: string | null
    description?: string | null
    userId: string
    sourceImageId?: string | null
    sound?: boolean
  }

  export type GenerationLogCreateManySourceVideoInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    generatedVideoId?: string | null
    sourceAudioId?: string | null
  }

  export type GeneratedVideoUpdateWithoutParentVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGeneratedVideosNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGeneratedVideosNestedInput
    generatedAudio?: GeneratedAudioUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateWithoutParentVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
    generatedAudio?: GeneratedAudioUncheckedUpdateOneWithoutVideoNestedInput
    childVideos?: GeneratedVideoUncheckedUpdateManyWithoutParentVideoNestedInput
    generationLogs?: GenerationLogUncheckedUpdateManyWithoutSourceVideoNestedInput
  }

  export type GeneratedVideoUncheckedUpdateManyWithoutParentVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sound?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenerationLogUpdateWithoutSourceVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGenerationLogsNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGenerationLogsNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGenerationLogsNestedInput
    sourceAudio?: GeneratedAudioUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateWithoutSourceVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceAudioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogCreateManySourceAudioInput = {
    id?: string
    type: string
    prompt?: string | null
    modelUsed: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status: $Enums.AssetStatus
    replicatePredictionId?: string | null
    resultUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    sourceDrawingId?: string | null
    sourceImageId?: string | null
    sourceVideoId?: string | null
    generatedVideoId?: string | null
  }

  export type GenerationLogUpdateWithoutSourceAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGenerationLogsNestedInput
    sourceDrawing?: DrawingUpdateOneWithoutGenerationLogsNestedInput
    sourceImage?: GeneratedImageUpdateOneWithoutGenerationLogsNestedInput
    sourceVideo?: GeneratedVideoUpdateOneWithoutGenerationLogsNestedInput
  }

  export type GenerationLogUncheckedUpdateWithoutSourceAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLogUncheckedUpdateManyWithoutSourceAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    modelUsed?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    replicatePredictionId?: NullableStringFieldUpdateOperationsInput | string | null
    resultUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    sourceDrawingId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceImageId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedVideoId?: NullableStringFieldUpdateOperationsInput | string | null
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