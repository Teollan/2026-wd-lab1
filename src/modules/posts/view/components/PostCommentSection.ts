import { PureComponent } from "@/modules/core/component";
import { CommentWithAuthor } from "@/modules/comments/model/Comment";
import { COMMENTS_ACTION } from "@/modules/comments/data/comments.store";
import { CommentCard } from "@/modules/comments/view/components/CommentCard";

interface Props {
  postId: number;
  comments: CommentWithAuthor[];
}

export const PostCommentSection: PureComponent<Props> = ({ postId, comments }) => {
  return /*html*/`
    <div class="border-t border-stroke-primary pt-4">
      <h3 class="mb-3 text-sm font-semibold text-content-secondary">
        Comments (${comments.length})
      </h3>

      <form
        data-submit-action="${COMMENTS_ACTION.CREATE}"
        data-payload='${JSON.stringify({ postId })}'
        class="mb-4 flex gap-3"
      >
        <textarea
          name="content"
          rows="1"
          placeholder="Add a comment..."
          class="min-h-9 resize-none flex-1 content-end rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-1.5 text-sm field-sizing-content text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          class="cursor-pointer self-end rounded-lg bg-accent px-4 py-2 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
        >
          Post
        </button>
      </form>

      ${comments.length > 0
        ? /*html*/`
          <div class="space-y-3">
            ${comments.map((comment) => CommentCard({ comment })).join("")}
          </div>
        `
        : /*html*/`
          <p class="text-sm text-content-tertiary">
            No comments yet. Be the first to share your thoughts!
          </p>
        `
      }
    </div>
  `;
}
