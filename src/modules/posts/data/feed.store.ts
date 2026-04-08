import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { CommentsRepository } from "@/modules/comments/data/comments.repository";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";

interface FeedState {
  posts: PostWithAuthorAndComments[];
}

export const FEED_ACTION = {
  CREATE_COMMENT: "feed::create_comment",
};

export const feedStore = new Store<FeedState>({
  posts: PostsRepository.getFeed(),
});

feedStore.addAction(
  FEED_ACTION.CREATE_COMMENT,
  (payload, set) => {
    CommentsRepository.create({
      postId: payload.postId,
      content: payload.content,
    });

    set({ posts: PostsRepository.getFeed() });
  },
);
