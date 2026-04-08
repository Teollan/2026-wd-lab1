import { DesktopNavBar } from "@/modules/UI/DesktopNavBar";
import { IconMenu } from "@/modules/UI/icons/IconMenu";
import { Logo } from "@/modules/UI/Logo";
import { MobileNavBar } from "@/modules/UI/MobileNavBar";
import {
  MOBILE_NAV_MENU_ACTION,
  mobileNavMenuStore,
} from "@/modules/UI/mobileNavMenu.store";
import { authStore } from "@/modules/auth/data/auth.store";

export const Header = () => {
  const { user } = authStore.getState();
  const { isOpen } = mobileNavMenuStore.getState();

  return /*html*/ `
    <header class="relative border-b border-stroke-primary bg-surface-primary">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        ${Logo()}

        <button
          data-action="${MOBILE_NAV_MENU_ACTION.TOGGLE}"
          class="md:hidden ${
            isOpen
              ? "text-accent-hover"
              : "text-content-secondary hover:text-content-primary"
          }"
        >
          ${IconMenu()}
        </button>

        ${DesktopNavBar({ user })}
      </div>

      ${MobileNavBar({ user, isOpen })}
    </header>
  `;
};
