import { Comment, CommentDto, CommentWithAuthor, mapCommentDtoToComment } from "@/modules/comments/model/Comment";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { UserDto, mapUserDtoToUser } from "@/modules/user/model/User";
import { Storage } from "@/utility/Storage";

interface CreateCommentInput {
  postId: number;
  content: string;
}

export abstract class CommentsRepository {
  static getByPostId(postId: number): CommentWithAuthor[] {
    const comments = Storage.getObject<CommentDto[]>(Storage.keys.COMMENTS) ?? [];
    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    return comments
      .filter((comment) => comment.postId === postId)
      .map((dto) => {
        const author = users.find((u) => u.id === dto.authorId);

        return {
          ...mapCommentDtoToComment(dto),
          author: author ? mapUserDtoToUser(author) : null!,
        };
      });
  }

  static create(input: CreateCommentInput): Comment {
    const user = AuthRepository.getAuthUser();

    if (!user) {
      throw new Error("Must be authenticated to create a comment");
    }

    const comment: Comment = {
      id: Date.now(),
      authorId: user.id,
      ...input,
      createdAt: new Date(),
    };

    const comments = Storage.getObject<CommentDto[]>(Storage.keys.COMMENTS) ?? [];
    Storage.setObject(Storage.keys.COMMENTS, [...comments, comment]);

    return comment;
  }
}
