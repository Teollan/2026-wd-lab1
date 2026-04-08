import { PureComponent } from "@/modules/core/component";

export const FeedEmptyState: PureComponent = () => {
  return /*html*/`
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-10 text-center">
      <p class="text-lg text-content-tertiary">
        No posts yet. Be the first to share something!
      </p>
    </div>
  `;
}
