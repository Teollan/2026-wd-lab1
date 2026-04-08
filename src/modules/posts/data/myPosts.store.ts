import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { CommentsRepository } from "@/modules/comments/data/comments.repository";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { ROUTES } from "@/utility/routes";

interface MyPostsState {
  posts: PostWithAuthorAndComments[];
}

export const MY_POSTS_ACTION = {
  CREATE_COMMENT: "my_posts::create_comment",
  EDIT_POST: "my_posts::edit_post",
  DELETE_POST: "my_posts::delete_post",
};

export const myPostsStore = new Store<MyPostsState>({
  posts: PostsRepository.getMyPosts(),
});

myPostsStore.addAction(MY_POSTS_ACTION.CREATE_COMMENT, (payload, set) => {
  CommentsRepository.create({
    postId: payload.postId,
    content: payload.content,
  });

  set({ posts: PostsRepository.getMyPosts() });
});

myPostsStore.addAction(MY_POSTS_ACTION.EDIT_POST, (payload) => {
  window.location.href = ROUTES.EDIT_POST + `?id=${payload.postId}`;
});

myPostsStore.addAction(MY_POSTS_ACTION.DELETE_POST, (payload, set) => {
  if (!confirm("Are you sure you want to delete this post?")) {
    return;
  }

  PostsRepository.delete(payload.postId);
  set({ posts: PostsRepository.getMyPosts() });
});
