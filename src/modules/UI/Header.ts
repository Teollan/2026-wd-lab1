import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { DesktopNavBar } from "@/modules/UI/DesktopNavBar";
import { IconMenu } from "@/modules/UI/icons/IconMenu";
import { Logo } from "@/modules/UI/Logo";
import { MobileNavBar } from "@/modules/UI/MobileNavBar";

interface Props {
  user: User | null;
}

export const Header: PureComponent<Props> = ({ user }) => {
  return /*html*/`
    <header class="relative border-b border-stroke-primary bg-surface-primary">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        ${Logo()}

        <button
          id="menu-toggle"
          class="text-content-secondary hover:text-content-primary md:hidden"
        >
          ${IconMenu()}
        </button>

        ${DesktopNavBar({ user })}
      </div>

      ${MobileNavBar({ user })}
    </header>
  `;
}
