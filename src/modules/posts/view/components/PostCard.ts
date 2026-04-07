import { PureComponent } from "@/modules/core/component";
import { Post } from "@/modules/posts/model/Post";
import { Avatar } from "@/modules/UI/Avatar";
import { PostActions } from "@/modules/posts/view/components/PostActions";
import { PostCommentSection } from "@/modules/posts/view/components/PostCommentSection";

interface Props {
  post: Post;
  withActions: boolean;
}

export const PostCard: PureComponent<Props> = ({ post, withActions }) => {
  return /*html*/`
    <article class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
      <div class="mb-3 flex items-center ${withActions ? "justify-between" : "gap-3"}">
        <div class="flex items-center gap-3">
          ${Avatar({
            initials: getInitials(post.author.username)
          })}

          <div>
            <p class="text-sm font-medium text-content-primary">${post.author.username}</p>
            <p class="text-xs text-content-tertiary">${formatDate(post.createdAt)}</p>
          </div>
        </div>

        ${withActions ? PostActions() : ""}
      </div>

      <h2 class="mb-2 text-xl font-semibold text-content-primary">
        ${post.title}
      </h2>

      <p class="mb-4 text-content-secondary">
        ${post.content}
      </p>

      ${PostCommentSection({ comments: post.comments })}
    </article>
  `;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getInitials(username: string) {
  return username
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
}

