import { Store } from "@/modules/core/store";
import { CommentsRepository } from "@/modules/comments/data/comments.repository";

export const COMMENTS_ACTION = {
  CREATE: "comments::create",
};

export const commentsStore = new Store({});

commentsStore.addAction(
  COMMENTS_ACTION.CREATE,
  (payload) => {
    console.log("creating a comment")

    CommentsRepository.create({
      postId: payload.postId,
      content: payload.content,
    });
  },
);
