import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { Avatar } from "@/modules/UI/Avatar";
import { NavLink } from "@/modules/UI/NavLink";
import { ROUTES } from "@/utility/routes";

interface Props {
  user: User | null;
}

export const DesktopNavBar: PureComponent<Props> = ({ user }) => {
  const isProfileActive = window.location.pathname.endsWith(ROUTES.PROFILE);

  return /*html*/ `
    <nav
      id="nav-menu"
      class="hidden md:block"
    >
      <ul class="flex flex-col gap-1 md:flex-row md:gap-6">
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

        ${
          user
            ? /*html*/ `
          <li>
            <a
              href="${ROUTES.PROFILE}"
              class="block rounded-full ring-2 ${
                isProfileActive
                  ? "ring-accent-hover"
                  : "ring-transparent hover:ring-accent/40"
              }"
            >
              ${Avatar({ user })}
            </a>
          </li>
        `
            : ""
        }
      </ul>
    </nav>
  `;
};
