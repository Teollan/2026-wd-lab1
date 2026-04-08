import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { BASE, ROUTES } from "@/utility/routes";

export const POSTS_ACTION = {
  CREATE: "posts::create",
  DELETE: "posts::delete",
};

export const postsStore = new Store({});

postsStore.addAction(
  POSTS_ACTION.CREATE,
  (payload) => {
    PostsRepository.create({
      title: payload.title,
      content: payload.content,
    });

    window.location.href = BASE + ROUTES.MY_POSTS;
  },
);

postsStore.addAction(
  POSTS_ACTION.DELETE,
  (payload) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    PostsRepository.delete(payload.postId);
  },
);
