import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { Avatar } from "@/modules/UI/Avatar";
import { NavLink } from "@/modules/UI/NavLink";
import { ROUTES } from "@/utility/routes";
import { escapeHtml } from "@/utility/string";

interface Props {
  user: User | null;
  isOpen: boolean;
}

export const MobileNavBar: PureComponent<Props> = ({ user, isOpen }) => {
  const isProfileActive = window.location.pathname.endsWith(ROUTES.PROFILE);

  return /*html*/ `
    <nav
      id="mobile-menu"
      class="${isOpen ? "" : "hidden"} absolute top-full left-0 w-full border-y border-stroke-primary bg-surface-primary md:hidden"
    >
      <ul class="flex flex-col gap-1 px-4 py-3">
        ${
          user
            ? /*html*/ `
          <li>
            <a
              href="${ROUTES.PROFILE}"
              class="flex items-center gap-3 px-3 py-2 ${
                isProfileActive
                  ? "text-accent-hover"
                  : "text-content-secondary hover:text-content-primary"
              }"
            >
              ${Avatar({ user })}

              <span class="font-medium text-lg">${escapeHtml(user.username)}</span>
            </a>
          </li>
        `
            : ""
        }

        <li>
          ${NavLink({ href: ROUTES.HOME, label: "About" })}
        </li>

        ${
          user
            ? /*html*/ `
          <li>
            ${NavLink({ href: ROUTES.FEED, label: "Feed" })}
          </li>

          <li>
            ${NavLink({ href: ROUTES.MY_POSTS, label: "My Posts" })}
          </li>

          <li>
            ${NavLink({ href: ROUTES.NEW_POST, label: "New Post" })}
          </li>
        `
            : /*html*/ `
          <li>
            ${NavLink({ href: ROUTES.SIGN_IN, label: "Sign In" })}
          </li>

          <li>
            ${NavLink({ href: ROUTES.SIGN_UP, label: "Sign Up" })}
          </li>
        `
        }
      </ul>
    </nav>
  `;
};
