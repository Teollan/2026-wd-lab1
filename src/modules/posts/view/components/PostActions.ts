import { PureComponent } from "@/modules/core/component";
import { IconEdit } from "@/modules/UI/icons/IconEdit";
import { IconDelete } from "@/modules/UI/icons/IconDelete";

interface Props {
  postId: number;
  editAction: string;
  deleteAction: string;
}

export const PostActions: PureComponent<Props> = ({ postId, editAction, deleteAction }) => {
  return /*html*/`
    <div class="flex items-center gap-2">
      <button
        data-action="${editAction}"
        data-payload='${JSON.stringify({ postId })}'
        class="text-content-tertiary hover:text-accent-hover"
      >
        ${IconEdit()}
      </button>

      <button
        data-action="${deleteAction}"
        data-payload='${JSON.stringify({ postId })}'
        class="text-content-tertiary hover:text-destructive"
      >
        ${IconDelete()}
      </button>
    </div>
  `;
}
