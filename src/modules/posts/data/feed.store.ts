import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { COMMENTS_ACTION } from "@/modules/comments/data/comments.store";

interface FeedState {
  posts: PostWithAuthorAndComments[];
}

export const feedStore = new Store<FeedState>({
  posts: PostsRepository.getFeed(),
});

feedStore.addAction(
  COMMENTS_ACTION.CREATE,
  (_, set) => {
    set({ posts: PostsRepository.getFeed() });
  },
);
