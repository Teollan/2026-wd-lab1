import { PureComponent } from "@/modules/core/component";
import { IconEdit } from "@/modules/UI/icons/IconEdit";
import { IconDelete } from "@/modules/UI/icons/IconDelete";

export const PostActions: PureComponent = () => {
  return /*html*/`
    <div class="flex items-center gap-2">
      <button class="text-content-tertiary hover:text-accent-hover">
        ${IconEdit()}
      </button>

      <button class="text-content-tertiary hover:text-destructive">
        ${IconDelete()}
      </button>
    </div>
  `;
}
