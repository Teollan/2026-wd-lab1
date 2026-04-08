import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { ROUTES } from "@/utility/routes";

export const NEW_POST_ACTION = {
  CREATE: "new_post::create",
};

export const newPostStore = new Store({});

newPostStore.addAction(
  NEW_POST_ACTION.CREATE,
  (payload) => {
    PostsRepository.create({
      title: payload.title,
      content: payload.content,
    });

    window.location.href = ROUTES.MY_POSTS;
  },
);
