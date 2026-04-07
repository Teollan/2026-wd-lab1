import { PureComponent } from "@/modules/core/component";

interface Props {
  initials: string;
  size?: "sm" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-sm",
  lg: "h-16 w-16 text-2xl",
};

export const Avatar: PureComponent<Props> = ({ initials, size = "sm" }) => {
  return /*html*/`
    <div class="flex items-center justify-center rounded-full bg-accent/20 font-bold text-accent-hover ${sizes[size]}">
      ${initials}
    </div>
  `;
}
