import { PureComponent } from "@/modules/core/component";
import { POSTS_ACTION } from "@/modules/posts/data/posts.store";
import { IconEdit } from "@/modules/UI/icons/IconEdit";
import { IconDelete } from "@/modules/UI/icons/IconDelete";

interface Props {
  postId: number;
}

export const PostActions: PureComponent<Props> = ({ postId }) => {
  return /*html*/`
    <div class="flex items-center gap-2">
      <button class="text-content-tertiary hover:text-accent-hover">
        ${IconEdit()}
      </button>

      <button
        data-action="${POSTS_ACTION.DELETE}"
        data-payload='${JSON.stringify({ postId })}'
        class="text-content-tertiary hover:text-destructive"
      >
        ${IconDelete()}
      </button>
    </div>
  `;
}
