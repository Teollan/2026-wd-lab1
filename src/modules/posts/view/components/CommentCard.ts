import { PureComponent } from "@/modules/core/component";
import { Comment } from "@/modules/posts/model/Comment";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  comment: Comment;
}

export const CommentCard: PureComponent<Props> = ({ comment }) => {
  return /*html*/`
    <div class="rounded-lg bg-surface-tertiary p-3">
      <div class="mb-1 flex items-center gap-2">
        <span class="text-sm font-medium text-content-primary">
          ${comment.author.username}
        </span>

        <span class="text-xs text-content-tertiary">
          ${formatDate(comment.createdAt)}
        </span>
      </div>

      <p class="text-sm text-content-secondary">
        ${comment.content}
      </p>
    </div>
  `;
}
