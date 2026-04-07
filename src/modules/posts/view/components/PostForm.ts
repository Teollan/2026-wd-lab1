import { PureComponent } from "@/modules/core/component";

export const PostForm: PureComponent = () => {
  return /*html*/`
    <div class="mx-auto max-w-2xl">
      <h1 class="mb-8 text-3xl font-bold text-content-primary">
        New Post
      </h1>

      <section
        class="rounded-xl border border-stroke-primary bg-surface-secondary p-6"
      >
        <h2 class="mb-4 text-lg font-semibold text-content-primary">
          Create a new post
        </h2>

        <form class="space-y-4">
          <div>
            <label
              for="post-title"
              class="mb-1 block text-sm font-medium text-content-secondary"
            >
              Title
            </label>

            <input
              type="text"
              id="post-title"
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
              id="post-body"
              rows="4"
              placeholder="Write your thoughts..."
              class="min-h-50 resize-none w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
          >
            Publish post
          </button>
        </form>
      </section>
    </div>
  `;
}
