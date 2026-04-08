import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { COMMENTS_ACTION } from "@/modules/comments/data/comments.store";

interface MyPostsState {
  posts: PostWithAuthorAndComments[];
}

export const myPostsStore = new Store<MyPostsState>({
  posts: PostsRepository.getMyPosts(),
});

myPostsStore.addAction(
  COMMENTS_ACTION.CREATE,
  (_, set) => {
    console.log("refetching my posts")

    set({ posts: PostsRepository.getMyPosts() });
  },
);
