import { GraphQLResolveInfo } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chat = {
  __typename?: "Chat";
  _id: Scalars["ID"];
  createdAt: Scalars["String"];
  messages?: Maybe<Array<Maybe<Message>>>;
  name: Scalars["String"];
  updatedAt: Scalars["String"];
  users?: Maybe<Array<Maybe<User>>>;
};

export type ChatInput = {
  _id: Scalars["ID"];
};

export type Message = {
  __typename?: "Message";
  _id: Scalars["ID"];
  body: Scalars["String"];
  chat: Chat;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
  user: User;
};

export type MessageInput = {
  _id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  addNewChat: Chat;
  addNewMessage: Message;
  createNewUser: User;
};

export type MutationAddNewChatArgs = {
  messages?: InputMaybe<Array<InputMaybe<MessageInput>>>;
  name: Scalars["String"];
  users: Array<InputMaybe<UserInput>>;
};

export type MutationAddNewMessageArgs = {
  body: Scalars["String"];
  chat: ChatInput;
  user: UserInput;
};

export type MutationCreateNewUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  chat?: Maybe<Chat>;
  chats?: Maybe<Array<Maybe<Chat>>>;
  messages?: Maybe<Array<Maybe<Message>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryChatArgs = {
  _id: Scalars["ID"];
};

export type QueryUserArgs = {
  email: Scalars["String"];
};

export type User = {
  __typename?: "User";
  _id: Scalars["ID"];
  chats?: Maybe<Array<Maybe<Chat>>>;
  createdAt: Scalars["String"];
  email: Scalars["String"];
  name: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type UserInput = {
  _id: Scalars["ID"];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Chat: ResolverTypeWrapper<Chat>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  ChatInput: ChatInput;
  Message: ResolverTypeWrapper<Message>;
  MessageInput: MessageInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Chat: Chat;
  ID: Scalars["ID"];
  String: Scalars["String"];
  ChatInput: ChatInput;
  Message: Message;
  MessageInput: MessageInput;
  Mutation: {};
  Query: {};
  User: User;
  UserInput: UserInput;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars["Boolean"];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars["String"]>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars["String"];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars["Boolean"]>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars["String"]>;
};

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars["String"]>;
};

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars["String"];
};

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ChatResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Chat"] = ResolversParentTypes["Chat"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  messages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Message"]>>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Message"] = ResolversParentTypes["Message"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes["Chat"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  addNewChat?: Resolver<
    ResolversTypes["Chat"],
    ParentType,
    ContextType,
    RequireFields<MutationAddNewChatArgs, "messages" | "name" | "users">
  >;
  addNewMessage?: Resolver<
    ResolversTypes["Message"],
    ParentType,
    ContextType,
    RequireFields<MutationAddNewMessageArgs, "body" | "chat" | "user">
  >;
  createNewUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateNewUserArgs, "email" | "name">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  chat?: Resolver<
    Maybe<ResolversTypes["Chat"]>,
    ParentType,
    ContextType,
    RequireFields<QueryChatArgs, "_id">
  >;
  chats?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Chat"]>>>,
    ParentType,
    ContextType
  >;
  messages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Message"]>>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "email">
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chats?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Chat"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Chat?: ChatResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from "mongodb";
