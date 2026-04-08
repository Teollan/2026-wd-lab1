import { Post, PostDto, PostWithAuthorAndComments, mapPostDtoToPost } from "@/modules/posts/model/Post";
import { CommentsRepository } from "@/modules/comments/data/comments.repository";
import { UserDto, mapUserDtoToUser } from "@/modules/user/model/User";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { Storage } from "@/utility/Storage";

interface CreatePostInput {
  title: string;
  content: string;
}

export abstract class PostsRepository {
  static getFeed(): PostWithAuthorAndComments[] {
    const posts = Storage.getObject<PostDto[]>(Storage.keys.POSTS) ?? [];
    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    return posts.map((dto) => {
      const author = users.find((u) => u.id === dto.authorId);

      return {
        ...mapPostDtoToPost(dto),
        author: author ? mapUserDtoToUser(author) : null!,
        comments: CommentsRepository.getByPostId(dto.id),
      };
    });
  }

  static getMyPosts(): PostWithAuthorAndComments[] {
    const user = AuthRepository.getAuthUser();

    if (!user) {
      throw new Error("Must be authenticated to view posts");
    }

    return PostsRepository.getFeed().filter(
      (post) => post.authorId === user.id,
    );
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
}
