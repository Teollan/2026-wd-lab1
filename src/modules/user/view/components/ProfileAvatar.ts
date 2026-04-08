import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { Avatar } from "@/modules/UI/Avatar";

interface Props {
  user: User;
}

export const ProfileAvatar: PureComponent<Props> = ({ user }) => {
  return /*html*/`
    <div class="mb-6 flex items-center gap-4">
      ${Avatar({ user, size: "lg" })}

      <div>
        <h2 class="text-xl font-semibold text-content-primary">
          ${user.username}
        </h2>

        <p class="text-sm text-content-tertiary">
          Member since ${formatDate(user.createdAt)}
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
