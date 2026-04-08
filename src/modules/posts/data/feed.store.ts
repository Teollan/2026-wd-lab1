import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { Post } from "@/modules/posts/model/Post";

interface FeedState {
  posts: Post[];
}

// const FEED_ACTIONS = {
//   LOAD_MORE_POSTS: "feed::load_more_posts",
// }

export const feedStore = new Store<FeedState>({
  posts: PostsRepository.getFeed(),
});

// feedStore.addAction(
//   FEED_ACTIONS.LOAD_MORE_POSTS,
//   ({ posts }, set, get) => {
//     const state = get();

//     set({
//       posts: [...state.posts, ...posts]
//     });
//   },
// );


