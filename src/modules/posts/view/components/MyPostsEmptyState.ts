import { PureComponent } from "@/modules/core/component";
import { ROUTES } from "@/utility/routes";

export const MyPostsEmptyState: PureComponent = () => {
  return /*html*/`
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-10 text-center">
      <p class="text-lg text-content-tertiary">
        You haven't posted anything yet.
        <a
          href="${ROUTES.NEW_POST}"
          class="text-accent-hover hover:text-accent-light"
        >
          Create your first post!
        </a>
      </p>
    </div>
  `;
}
