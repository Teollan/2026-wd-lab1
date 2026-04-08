import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { getInitials } from "@/utility/string";

interface Props {
  user: User;
  size?: "sm" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-sm",
  lg: "h-16 w-16 text-2xl",
};

export const AVATAR_COLORS = [
  "bg-sky-500/20 text-sky-400",
  "bg-emerald-500/20 text-emerald-400",
  "bg-purple-500/20 text-purple-400",
  "bg-amber-500/20 text-amber-400",
  "bg-rose-500/20 text-rose-400",
  "bg-cyan-500/20 text-cyan-400",
  "bg-indigo-500/20 text-indigo-400",
  "bg-lime-500/20 text-lime-400",
  "bg-fuchsia-500/20 text-fuchsia-400",
  "bg-teal-500/20 text-teal-400",
];

export function getAvatarColor(userId: number): string {
  return AVATAR_COLORS[userId % AVATAR_COLORS.length];
}

export const Avatar: PureComponent<Props> = ({ user, size = "sm" }) => {
  const color = getAvatarColor(user.id);

  return /*html*/ `
    <div class="flex items-center justify-center rounded-full font-bold ${sizes[size]} ${color}">
      ${getInitials(user.username)}
    </div>
  `;
};
