import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** The authenticated user */
export type Auth = {
  __typename?: 'Auth';
  /** The ID of the authenticated user */
  id: Scalars['Int'];
  /** The username of the authenticated user */
  username: Scalars['String'];
  /** The avatar image of the authenticated user */
  avatar: Image;
  /** The account status of the authenticated user */
  confirmed: Scalars['Boolean'];
};

export type AvatarInput = {
  publicId?: Maybe<Scalars['String']>;
};

/** A piece of written feedback submitted by a user on a post */
export type Comment = {
  __typename?: 'Comment';
  /** The ID of a comment */
  id: Scalars['Int'];
  /** The contents of a comment */
  body: Scalars['String'];
  /** The user that added a comment */
  user: User;
  /** The post a comment was addded to */
  post: Post;
  /** The time a comment was created */
  createdAt: Scalars['DateTime'];
  /** The time a comment was most recently updated */
  updatedAt: Scalars['DateTime'];
};

/** The inputs needed to sort a list of comments */
export type CommentOrderByInput = {
  /** The field to sort comments by */
  field: CommentSortField;
  /** The direction to sort comments in */
  direction: SortDirection;
};

/** The possible fields that comments can be sorted by */
export enum CommentSortField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** The response from a paginated comments query */
export type CommentsResponse = {
  __typename?: 'CommentsResponse';
  /** The current page of comments */
  results: Array<Comment>;
  /** The previous page number */
  prevPage?: Maybe<Scalars['Int']>;
  /** The next page number */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total number of pages */
  totalPages: Scalars['Int'];
};


/** A piece of feedback indicating a user likes a post */
export type Favorite = {
  __typename?: 'Favorite';
  /** The ID of a favorite */
  id: Scalars['Int'];
  /** The user that added a favorite */
  user: User;
  /** The post a favorite was added to */
  post: Post;
  /** The time a favorite was created */
  createdAt: Scalars['DateTime'];
  /** The time a favorite was most recently updated */
  updatedAt: Scalars['DateTime'];
};

/** The inputs needed to sort a list of favorites */
export type FavoriteOrderByInput = {
  /** The field to sort favorites by */
  field: FavoriteSortField;
  /** The direction to sort favorites in */
  direction: SortDirection;
};

/** The response from creating or deleting a favorite */
export type FavoriteResponse = {
  __typename?: 'FavoriteResponse';
  /** The favorite created or deleted */
  result: Favorite;
  /** The new favorite count on a post */
  count: Scalars['Int'];
};

/** The possible fields that favorites can be sorted by */
export enum FavoriteSortField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** The response from a paginated favorites query */
export type FavoritesResponse = {
  __typename?: 'FavoritesResponse';
  /** The current page of favorites */
  results: Array<Favorite>;
  /** The previous page number */
  prevPage?: Maybe<Scalars['Int']>;
  /** The next page number */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total number of pages */
  totalPages: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  publicId: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Register a user account */
  register: Scalars['Boolean'];
  /** Log in to a user account */
  login: Auth;
  /** Log out of a user account */
  logout: Scalars['Boolean'];
  /** Create a new comment */
  createComment: Comment;
  /** Update an existing comment */
  updateComment: Comment;
  /** Delete an existing comment */
  deleteComment: Comment;
  /** Create a new favorite */
  createFavorite?: Maybe<FavoriteResponse>;
  /** Delete an existing favorite */
  deleteFavorite?: Maybe<FavoriteResponse>;
  /** Create a new post */
  createPost: Post;
  /** Update an existing post */
  updatePost: Post;
  /** Deleting an existing post */
  deletePost: Post;
  /** Update an existing user's details */
  updateUser: User;
  /** Delete an existing user */
  deleteUser: User;
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<AvatarInput>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  postId: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['Int'];
  body: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationCreateFavoriteArgs = {
  postId: Scalars['Int'];
};


export type MutationDeleteFavoriteArgs = {
  postId: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  file: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  currentPassword: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
};

/** An upload containing an image and related details */
export type Post = {
  __typename?: 'Post';
  /** The ID of a post */
  id: Scalars['Int'];
  /** The title of a post */
  title: Scalars['String'];
  /** The description of a post */
  body?: Maybe<Scalars['String']>;
  /** The uploaded image */
  image: Image;
  /** The user who created the post */
  user: User;
  /** The list of favorites added to a post */
  favorites?: Maybe<FavoritesResponse>;
  /** The number of favorites added to a post */
  favoriteCount?: Maybe<Scalars['Int']>;
  /** The list of comments added to a post */
  comments?: Maybe<CommentsResponse>;
  /** The number of comments added to a post */
  commentCount?: Maybe<Scalars['Int']>;
  /** The time a post was created */
  createdAt: Scalars['DateTime'];
  /** The time a post was most recently updated */
  updatedAt: Scalars['DateTime'];
};


/** An upload containing an image and related details */
export type PostFavoritesArgs = {
  orderBy?: Maybe<FavoriteOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


/** An upload containing an image and related details */
export type PostCommentsArgs = {
  orderBy?: Maybe<CommentOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

/** The inputs needed to sort a list of posts */
export type PostOrderByInput = {
  /** The field to sort posts by */
  field: PostSortField;
  /** The direction to sort posts in */
  direction: SortDirection;
};

/** The response from a single post query */
export type PostResponse = {
  __typename?: 'PostResponse';
  /** The post that has been queried */
  result: Post;
  /** The boolean indicating if the authenticated user has favorited the post */
  isFavorite: Scalars['Boolean'];
};

/** The possible fields that posts can be sorted by */
export enum PostSortField {
  Title = 'TITLE',
  FavoriteCount = 'FAVORITE_COUNT',
  CommentCount = 'COMMENT_COUNT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** The response from a paginated posts query */
export type PostsResponse = {
  __typename?: 'PostsResponse';
  /** The current page of posts */
  results: Array<Post>;
  /** The previous page number */
  prevPage?: Maybe<Scalars['Int']>;
  /** The next page number */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total number of pages */
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the currently authenticated user */
  auth?: Maybe<Auth>;
  /** Get a paginated list of comments */
  comments: CommentsResponse;
  /** Get a list of paginated favorites */
  favorites: FavoritesResponse;
  /** Get a list of paginated posts */
  posts: PostsResponse;
  /** Get a post by ID */
  post?: Maybe<PostResponse>;
  /** Get posts related to a given post */
  relatedPosts?: Maybe<Array<Post>>;
  /** Get a user by ID */
  user: User;
};


export type QueryCommentsArgs = {
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommentOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryFavoritesArgs = {
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FavoriteOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryPostsArgs = {
  userId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryRelatedPostsArgs = {
  postId: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

/** The possible directions that posts can be sorted in */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** A user account containing profile info */
export type User = {
  __typename?: 'User';
  /** The ID of a user */
  id: Scalars['Int'];
  /** The username of a user */
  username: Scalars['String'];
  /** The avatar image of a user */
  avatar: Image;
  /** The list of posts created by a user */
  posts?: Maybe<PostsResponse>;
  /** The number of posts created by a user */
  postCount?: Maybe<Scalars['Int']>;
  /** The list of favorites created by a user */
  favorites?: Maybe<FavoritesResponse>;
  /** The number of favorites created by a user */
  favoriteCount?: Maybe<Scalars['Int']>;
  /** The list of comments created by a user */
  comments?: Maybe<CommentsResponse>;
  /** The number of comments created by a user */
  commentCount?: Maybe<Scalars['Int']>;
  /** The time a user was created */
  createdAt: Scalars['DateTime'];
  /** The time a user was most recently updated */
  updatedAt: Scalars['DateTime'];
};


/** A user account containing profile info */
export type UserPostsArgs = {
  orderBy?: Maybe<PostOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


/** A user account containing profile info */
export type UserFavoritesArgs = {
  orderBy?: Maybe<FavoriteOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


/** A user account containing profile info */
export type UserCommentsArgs = {
  orderBy?: Maybe<CommentOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type AuthFragment = (
  { __typename?: 'Auth' }
  & Pick<Auth, 'id' | 'username' | 'confirmed'>
  & { avatar: (
    { __typename?: 'Image' }
    & AvatarFragment
  ) }
);

export type AvatarFragment = (
  { __typename?: 'Image' }
  & Pick<Image, 'publicId'>
);

export type CommentFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'body' | 'createdAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
    & { avatar: (
      { __typename?: 'Image' }
      & AvatarFragment
    ) }
  ) }
);

export type FavoritesFragment = (
  { __typename?: 'FavoritesResponse' }
  & Pick<FavoritesResponse, 'prevPage' | 'nextPage'>
  & { results: Array<(
    { __typename?: 'Favorite' }
    & Pick<Favorite, 'id' | 'createdAt'>
    & { post: (
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'publicId' | 'url' | 'width' | 'height'>
      ) }
    ) }
  )> }
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'body' | 'createdAt' | 'favoriteCount' | 'commentCount'>
  & { image: (
    { __typename?: 'Image' }
    & Pick<Image, 'publicId' | 'url' | 'width' | 'height'>
  ), user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
    & { avatar: (
      { __typename?: 'Image' }
      & AvatarFragment
    ) }
  ) }
);

export type PostSummaryFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title'>
  & { image: (
    { __typename?: 'Image' }
    & Pick<Image, 'publicId' | 'url' | 'width' | 'height'>
  ) }
);

export type PostsFragment = (
  { __typename?: 'PostsResponse' }
  & Pick<PostsResponse, 'prevPage' | 'nextPage'>
  & { results: Array<(
    { __typename?: 'Post' }
    & PostSummaryFragment
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  body: Scalars['String'];
  postId: Scalars['Int'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { comment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type CreateFavoriteMutationVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type CreateFavoriteMutation = (
  { __typename?: 'Mutation' }
  & { favorite?: Maybe<(
    { __typename?: 'FavoriteResponse' }
    & Pick<FavoriteResponse, 'count'>
    & { result: (
      { __typename?: 'Favorite' }
      & Pick<Favorite, 'id'>
    ) }
  )> }
);

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  file: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { post: (
    { __typename?: 'Post' }
    & PostDetailsFragment
  ) }
);

export type DeleteFavoriteMutationVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type DeleteFavoriteMutation = (
  { __typename?: 'Mutation' }
  & { favorite?: Maybe<(
    { __typename?: 'FavoriteResponse' }
    & Pick<FavoriteResponse, 'count'>
    & { result: (
      { __typename?: 'Favorite' }
      & Pick<Favorite, 'id'>
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<AvatarInput>;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { auth: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'id' | 'username' | 'confirmed'>
    & { avatar: (
      { __typename?: 'Image' }
      & AvatarFragment
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { isLoggedOut: Mutation['logout'] }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registered: Mutation['register'] }
);

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & AuthFragment
  )> }
);

export type CommentsQueryVariables = Exact<{
  postId?: Maybe<Scalars['Int']>;
  field?: CommentSortField;
  direction?: SortDirection;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments: (
    { __typename?: 'CommentsResponse' }
    & Pick<CommentsResponse, 'nextPage'>
    & { results: Array<(
      { __typename?: 'Comment' }
      & CommentFragment
    )> }
  ) }
);

export type FavoritesQueryVariables = Exact<{
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  field?: FavoriteSortField;
  direction?: SortDirection;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type FavoritesQuery = (
  { __typename?: 'Query' }
  & { favorites: (
    { __typename?: 'FavoritesResponse' }
    & FavoritesFragment
  ) }
);

export type FeaturedQueryVariables = Exact<{
  field: PostSortField;
  direction: SortDirection;
  limit?: Maybe<Scalars['Int']>;
}>;


export type FeaturedQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PostsResponse' }
    & { results: Array<(
      { __typename?: 'Post' }
      & PostDetailsFragment
    )> }
  ) }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'PostResponse' }
    & Pick<PostResponse, 'isFavorite'>
    & { result: (
      { __typename?: 'Post' }
      & PostDetailsFragment
    ) }
  )> }
);

export type PostsQueryVariables = Exact<{
  userId?: Maybe<Scalars['Int']>;
  field?: PostSortField;
  direction?: SortDirection;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PostsResponse' }
    & PostsFragment
  ) }
);

export type RelatedPostsQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type RelatedPostsQuery = (
  { __typename?: 'Query' }
  & { relatedPosts?: Maybe<Array<(
    { __typename?: 'Post' }
    & PostSummaryFragment
  )>> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'postCount' | 'favoriteCount' | 'createdAt'>
    & { avatar: (
      { __typename?: 'Image' }
      & AvatarFragment
    ), posts?: Maybe<(
      { __typename?: 'PostsResponse' }
      & PostsFragment
    )>, favorites?: Maybe<(
      { __typename?: 'FavoritesResponse' }
      & FavoritesFragment
    )> }
  ) }
);

export const AvatarFragmentDoc = `
    fragment avatar on Image {
  publicId
}
    `;
export const AuthFragmentDoc = `
    fragment auth on Auth {
  id
  username
  avatar {
    ...avatar
  }
  confirmed
}
    ${AvatarFragmentDoc}`;
export const CommentFragmentDoc = `
    fragment comment on Comment {
  id
  body
  user {
    id
    username
    avatar {
      ...avatar
    }
  }
  createdAt
}
    ${AvatarFragmentDoc}`;
export const FavoritesFragmentDoc = `
    fragment favorites on FavoritesResponse {
  results {
    id
    post {
      id
      title
      image {
        publicId
        url
        width
        height
      }
    }
    createdAt
  }
  prevPage
  nextPage
}
    `;
export const PostDetailsFragmentDoc = `
    fragment postDetails on Post {
  id
  title
  body
  image {
    publicId
    url
    width
    height
  }
  createdAt
  user {
    id
    username
    avatar {
      ...avatar
    }
  }
  favoriteCount
  commentCount
}
    ${AvatarFragmentDoc}`;
export const PostSummaryFragmentDoc = `
    fragment postSummary on Post {
  id
  title
  image {
    publicId
    url
    width
    height
  }
}
    `;
export const PostsFragmentDoc = `
    fragment posts on PostsResponse {
  results {
    ...postSummary
  }
  prevPage
  nextPage
}
    ${PostSummaryFragmentDoc}`;
export const CreateCommentDocument = `
    mutation createComment($body: String!, $postId: Int!) {
  comment: createComment(body: $body, postId: $postId) {
    ...comment
  }
}
    ${CommentFragmentDoc}`;
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>
    ) => 
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables)(),
      options
    );
export const CreateFavoriteDocument = `
    mutation createFavorite($postId: Int!) {
  favorite: createFavorite(postId: $postId) {
    result {
      id
    }
    count
  }
}
    `;
export const useCreateFavoriteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateFavoriteMutation, TError, CreateFavoriteMutationVariables, TContext>
    ) => 
    useMutation<CreateFavoriteMutation, TError, CreateFavoriteMutationVariables, TContext>(
      (variables?: CreateFavoriteMutationVariables) => fetcher<CreateFavoriteMutation, CreateFavoriteMutationVariables>(client, CreateFavoriteDocument, variables)(),
      options
    );
export const CreatePostDocument = `
    mutation createPost($title: String!, $body: String, $file: String!) {
  post: createPost(title: $title, body: $body, file: $file) {
    ...postDetails
  }
}
    ${PostDetailsFragmentDoc}`;
export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>
    ) => 
    useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables)(),
      options
    );
export const DeleteFavoriteDocument = `
    mutation deleteFavorite($postId: Int!) {
  favorite: deleteFavorite(postId: $postId) {
    result {
      id
    }
    count
  }
}
    `;
export const useDeleteFavoriteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteFavoriteMutation, TError, DeleteFavoriteMutationVariables, TContext>
    ) => 
    useMutation<DeleteFavoriteMutation, TError, DeleteFavoriteMutationVariables, TContext>(
      (variables?: DeleteFavoriteMutationVariables) => fetcher<DeleteFavoriteMutation, DeleteFavoriteMutationVariables>(client, DeleteFavoriteDocument, variables)(),
      options
    );
export const LoginDocument = `
    mutation login($username: String!, $password: String!, $avatar: AvatarInput) {
  auth: login(username: $username, password: $password, avatar: $avatar) {
    id
    username
    avatar {
      ...avatar
    }
    confirmed
  }
}
    ${AvatarFragmentDoc}`;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>
    ) => 
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation logout {
  isLoggedOut: logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>
    ) => 
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      (variables?: LogoutMutationVariables) => fetcher<LogoutMutation, LogoutMutationVariables>(client, LogoutDocument, variables)(),
      options
    );
export const RegisterDocument = `
    mutation register($username: String!, $password: String!) {
  registered: register(username: $username, password: $password)
}
    `;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>
    ) => 
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables)(),
      options
    );
export const AuthDocument = `
    query auth {
  auth {
    ...auth
  }
}
    ${AuthFragmentDoc}`;
export const useAuthQuery = <
      TData = AuthQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: AuthQueryVariables, 
      options?: UseQueryOptions<AuthQuery, TError, TData>
    ) => 
    useQuery<AuthQuery, TError, TData>(
      ['auth', variables],
      fetcher<AuthQuery, AuthQueryVariables>(client, AuthDocument, variables),
      options
    );
useAuthQuery.document = AuthDocument;

useAuthQuery.getKey = (variables?: AuthQueryVariables) => ['auth', variables];

export const CommentsDocument = `
    query comments($postId: Int, $field: CommentSortField! = CREATED_AT, $direction: SortDirection! = DESC, $limit: Int, $page: Int) {
  comments(
    postId: $postId
    orderBy: {field: $field, direction: $direction}
    limit: $limit
    page: $page
  ) {
    results {
      ...comment
    }
    nextPage
  }
}
    ${CommentFragmentDoc}`;
export const useCommentsQuery = <
      TData = CommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: CommentsQueryVariables, 
      options?: UseQueryOptions<CommentsQuery, TError, TData>
    ) => 
    useQuery<CommentsQuery, TError, TData>(
      ['comments', variables],
      fetcher<CommentsQuery, CommentsQueryVariables>(client, CommentsDocument, variables),
      options
    );
useCommentsQuery.document = CommentsDocument;

useCommentsQuery.getKey = (variables?: CommentsQueryVariables) => ['comments', variables];

export const FavoritesDocument = `
    query favorites($postId: Int, $userId: Int, $field: FavoriteSortField! = CREATED_AT, $direction: SortDirection! = DESC, $limit: Int, $page: Int) {
  favorites(
    postId: $postId
    userId: $userId
    orderBy: {field: $field, direction: $direction}
    limit: $limit
    page: $page
  ) {
    ...favorites
  }
}
    ${FavoritesFragmentDoc}`;
export const useFavoritesQuery = <
      TData = FavoritesQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FavoritesQueryVariables, 
      options?: UseQueryOptions<FavoritesQuery, TError, TData>
    ) => 
    useQuery<FavoritesQuery, TError, TData>(
      ['favorites', variables],
      fetcher<FavoritesQuery, FavoritesQueryVariables>(client, FavoritesDocument, variables),
      options
    );
useFavoritesQuery.document = FavoritesDocument;

useFavoritesQuery.getKey = (variables?: FavoritesQueryVariables) => ['favorites', variables];

export const FeaturedDocument = `
    query featured($field: PostSortField!, $direction: SortDirection!, $limit: Int) {
  posts(orderBy: {field: $field, direction: $direction}, limit: $limit) {
    results {
      ...postDetails
    }
  }
}
    ${PostDetailsFragmentDoc}`;
export const useFeaturedQuery = <
      TData = FeaturedQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FeaturedQueryVariables, 
      options?: UseQueryOptions<FeaturedQuery, TError, TData>
    ) => 
    useQuery<FeaturedQuery, TError, TData>(
      ['featured', variables],
      fetcher<FeaturedQuery, FeaturedQueryVariables>(client, FeaturedDocument, variables),
      options
    );
useFeaturedQuery.document = FeaturedDocument;

useFeaturedQuery.getKey = (variables: FeaturedQueryVariables) => ['featured', variables];

export const PostDocument = `
    query post($id: Int!) {
  post(id: $id) {
    result {
      ...postDetails
    }
    isFavorite
  }
}
    ${PostDetailsFragmentDoc}`;
export const usePostQuery = <
      TData = PostQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: PostQueryVariables, 
      options?: UseQueryOptions<PostQuery, TError, TData>
    ) => 
    useQuery<PostQuery, TError, TData>(
      ['post', variables],
      fetcher<PostQuery, PostQueryVariables>(client, PostDocument, variables),
      options
    );
usePostQuery.document = PostDocument;

usePostQuery.getKey = (variables: PostQueryVariables) => ['post', variables];

export const PostsDocument = `
    query posts($userId: Int, $field: PostSortField! = CREATED_AT, $direction: SortDirection! = DESC, $limit: Int, $page: Int) {
  posts(
    userId: $userId
    orderBy: {field: $field, direction: $direction}
    limit: $limit
    page: $page
  ) {
    ...posts
  }
}
    ${PostsFragmentDoc}`;
export const usePostsQuery = <
      TData = PostsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: PostsQueryVariables, 
      options?: UseQueryOptions<PostsQuery, TError, TData>
    ) => 
    useQuery<PostsQuery, TError, TData>(
      ['posts', variables],
      fetcher<PostsQuery, PostsQueryVariables>(client, PostsDocument, variables),
      options
    );
usePostsQuery.document = PostsDocument;

usePostsQuery.getKey = (variables?: PostsQueryVariables) => ['posts', variables];

export const RelatedPostsDocument = `
    query relatedPosts($postId: Int!) {
  relatedPosts(postId: $postId) {
    ...postSummary
  }
}
    ${PostSummaryFragmentDoc}`;
export const useRelatedPostsQuery = <
      TData = RelatedPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: RelatedPostsQueryVariables, 
      options?: UseQueryOptions<RelatedPostsQuery, TError, TData>
    ) => 
    useQuery<RelatedPostsQuery, TError, TData>(
      ['relatedPosts', variables],
      fetcher<RelatedPostsQuery, RelatedPostsQueryVariables>(client, RelatedPostsDocument, variables),
      options
    );
useRelatedPostsQuery.document = RelatedPostsDocument;

useRelatedPostsQuery.getKey = (variables: RelatedPostsQueryVariables) => ['relatedPosts', variables];

export const UserDocument = `
    query user($id: Int!) {
  user(id: $id) {
    id
    username
    avatar {
      ...avatar
    }
    posts(limit: 5) {
      ...posts
    }
    postCount
    favorites(limit: 5) {
      ...favorites
    }
    favoriteCount
    createdAt
  }
}
    ${AvatarFragmentDoc}
${PostsFragmentDoc}
${FavoritesFragmentDoc}`;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: UserQueryVariables, 
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) => 
    useQuery<UserQuery, TError, TData>(
      ['user', variables],
      fetcher<UserQuery, UserQueryVariables>(client, UserDocument, variables),
      options
    );
useUserQuery.document = UserDocument;

useUserQuery.getKey = (variables: UserQueryVariables) => ['user', variables];
