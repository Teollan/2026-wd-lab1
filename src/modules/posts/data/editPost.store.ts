import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { ROUTES } from "@/utility/routes";

export const EDIT_POST_ACTION = {
  UPDATE: "edit_post::update",
};

export const editPostStore = new Store({});

editPostStore.addAction(
  EDIT_POST_ACTION.UPDATE,
  (payload) => {
    PostsRepository.update(payload.postId, {
      title: payload.title,
      content: payload.content,
    });

    window.location.href = ROUTES.MY_POSTS;
  },
);
