import { PureComponent } from "@/modules/core/component";
import { Avatar } from "@/modules/UI/Avatar";

interface Props {
  initials: string;
  username: string;
  memberSince: string;
}

export const ProfileAvatar: PureComponent<Props> = ({ initials, username, memberSince }) => {
  return /*html*/`
    <div class="mb-6 flex items-center gap-4">
      ${Avatar({ initials, size: "lg" })}

      <div>
        <h2 class="text-xl font-semibold text-content-primary">
          ${username}
        </h2>

        <p class="text-sm text-content-tertiary">
          ${memberSince}
        </p>
      </div>
    </div>
  `;
}
