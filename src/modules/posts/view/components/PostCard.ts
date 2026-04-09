import { PureComponent } from "@/modules/core/component";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { Avatar } from "@/modules/UI/Avatar";
import { PostActions } from "@/modules/posts/view/components/PostActions";
import { PostCommentSection } from "@/modules/posts/view/components/PostCommentSection";
import { escapeHtml } from "@/utility/string";

interface Actions {
  createComment: string;
  editPost?: string;
  deletePost?: string;
}

interface Props {
  post: PostWithAuthorAndComments;
  actions: Actions;
}

export const PostCard: PureComponent<Props> = ({ post, actions }) => {
  const showActions = Boolean(actions.editPost && actions.deletePost);

  return /*html*/ `
    <article class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
      <div class="mb-3 flex items-center ${
        showActions ? "justify-between" : "gap-3"
      }">
        <div class="flex items-center gap-3">
          ${Avatar({ user: post.author })}

          <div>
            <p class="text-sm font-medium text-content-primary">
              ${escapeHtml(post.author.username)}
            </p>

            <p class="text-xs text-content-tertiary">
              ${formatDate(post.createdAt)}
            </p>
          </div>
        </div>

        ${
          showActions
            ? PostActions({
                postId: post.id,
                editAction: actions.editPost!,
                deleteAction: actions.deletePost!,
              })
            : ""
        }
      </div>

      <h2 class="mb-2 text-xl font-semibold text-content-primary">
        ${escapeHtml(post.title)}
      </h2>

      <p class="mb-4 text-content-secondary">
        ${escapeHtml(post.content)}
      </p>

      ${PostCommentSection({
        postId: post.id,
        comments: post.comments,
        createCommentAction: actions.createComment,
      })}
    </article>
  `;
};

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
