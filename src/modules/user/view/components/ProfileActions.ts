import { AUTH_ACTION } from "@/modules/auth/data/auth.store";
import { PureComponent } from "@/modules/core/component";
import { ROUTES } from "@/utility/routes";

export const ProfileActions: PureComponent = () => {
  return /*html*/`
    <div class="mt-6 flex gap-3">
      <a
        href="${ROUTES.MY_POSTS}"
        class="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover"
      >
        View my posts
      </a>

      <button
        data-action="${AUTH_ACTION.LOG_OUT}"
        class="rounded-lg bg-destructive/20 px-5 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/30"
      >
        Log Out
      </button>
    </div>
  `;
}
