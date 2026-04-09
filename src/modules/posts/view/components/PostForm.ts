import { PureComponent } from "@/modules/core/component";
import { NEW_POST_ACTION } from "@/modules/posts/data/newPost.store";
import { escapeHtml } from "@/utility/string";

interface Props {
  action?: string;
  title?: string;
  content?: string;
  postId?: number;
}

export const PostForm: PureComponent<Props> = ({
  action = NEW_POST_ACTION.CREATE,
  title = "",
  content = "",
  postId,
} = {}) => {
  const isEditing = Boolean(postId);

  const heading = isEditing ? "Edit Post" : "New Post";

  const subheading = isEditing ? "Update your post" : "Create a new post";

  const buttonLabel = isEditing ? "Save changes" : "Publish post";

  const payload = postId ? JSON.stringify({ postId }) : "";

  return /*html*/ `
    <div class="mx-auto max-w-2xl">
      <h1 class="mb-8 text-3xl font-bold text-content-primary">
        ${heading}
      </h1>

      <section
        class="rounded-xl border border-stroke-primary bg-surface-secondary p-6"
      >
        <h2 class="mb-4 text-lg font-semibold text-content-primary">
          ${subheading}
        </h2>

        <form
          data-submit-action="${action}"
          ${payload ? `data-payload='${payload}'` : ""}
          class="space-y-4"
        >
          <div>
            <label
              for="post-title"
              class="mb-1 block text-sm font-medium text-content-secondary"
            >
              Title
            </label>

            <input
              name="title"
              type="text"
              id="post-title"
              required
              value="${escapeHtml(title)}"
              placeholder="Your post title"
              class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
          </div>

          <div>
            <label
              for="post-body"
              class="mb-1 block text-sm font-medium text-content-secondary"
            >
              Content
            </label>

            <textarea
              name="content"
              id="post-body"
              rows="4"
              required
              placeholder="Write your thoughts..."
              class="min-h-50 resize-none w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            >${escapeHtml(content)}</textarea>
          </div>

          <button
            type="submit"
            class="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
          >
            ${buttonLabel}
          </button>
        </form>
      </section>
    </div>
  `;
};
