import {
  Post,
  PostDto,
  PostWithAuthorAndComments,
  mapPostDtoToPost,
} from "@/modules/posts/model/Post";
import { CommentsRepository } from "@/modules/comments/data/comments.repository";
import { UserDto, mapUserDtoToUser } from "@/modules/user/model/User";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { Storage } from "@/utility/Storage";

interface CreatePostInput {
  title: string;
  content: string;
}

export abstract class PostsRepository {
  static findByAuthorId(authorId: number): Post[] {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];

    return posts
      .filter((post) => post.authorId === authorId)
      .map(mapPostDtoToPost);
  }

  static findById(postId: number): Post | null {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];
    const dto = posts.find((post) => post.id === postId);

    return dto ? mapPostDtoToPost(dto) : null;
  }

  static getFeed(): PostWithAuthorAndComments[] {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];
    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    return posts
      .map((dto) => {
        const author = users.find((user) => user.id === dto.authorId);

        return {
          ...mapPostDtoToPost(dto),
          author: author ? mapUserDtoToUser(author) : null!,
          comments: CommentsRepository.getByPostId(dto.id),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  static getMyPosts(): PostWithAuthorAndComments[] {
    const user = AuthRepository.getAuthUser();

    if (!user) {
      throw new Error("Must be authenticated to view posts");
    }

    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    return PostsRepository.findByAuthorId(user.id)
      .map((post) => {
        const author = users.find((userDto) => userDto.id === post.authorId);

        return {
          ...post,
          author: author ? mapUserDtoToUser(author) : null!,
          comments: CommentsRepository.getByPostId(post.id),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  static create(input: CreatePostInput): Post {
    const user = AuthRepository.getAuthUser();

    if (!user) {
      throw new Error("Must be authenticated to create a post");
    }

    const post: Post = {
      id: Date.now(),
      authorId: user.id,
      ...input,
      createdAt: new Date(),
    };

    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];
    Storage.setObject(Storage.keys.POSTS, [...posts, post]);

    return post;
  }

  static update(postId: number, input: CreatePostInput): void {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];

    Storage.setObject(
      Storage.keys.POSTS,
      posts.map((post) => (post.id === postId ? { ...post, ...input } : post)),
    );
  }

  static delete(postId: number): void {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];
    Storage.setObject(
      Storage.keys.POSTS,
      posts.filter((post) => post.id !== postId),
    );
  }
}
