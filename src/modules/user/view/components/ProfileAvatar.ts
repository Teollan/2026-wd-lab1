import { PureComponent } from "@/modules/core/component";
import { Avatar } from "@/modules/UI/Avatar";
import { getInitials } from "@/utility/string";

interface Props {
  username: string;
  createdAt: Date;
}

export const ProfileAvatar: PureComponent<Props> = ({ username, createdAt }) => {
  return /*html*/`
    <div class="mb-6 flex items-center gap-4">
      ${Avatar({
        initials: getInitials(username),
        size: "lg",
      })}

      <div>
        <h2 class="text-xl font-semibold text-content-primary">
          ${username}
        </h2>

        <p class="text-sm text-content-tertiary">
          Member since ${formatDate(createdAt)}
        </p>
      </div>
    </div>
  `;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}
