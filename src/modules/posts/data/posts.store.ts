import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { BASE, ROUTES } from "@/utility/routes";

export const POSTS_ACTION = {
  CREATE: "posts::create",
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
