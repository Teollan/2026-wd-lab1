import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { NavLink } from "@/modules/UI/NavLink";
import { getInitials } from "@/utility/string";

interface Props {
  user: User | null;
}

export const DesktopNavBar: PureComponent<Props> = ({ user }) => {
  const isProfileActive = window.location.pathname.endsWith("profile");

  return /*html*/`
    <nav
      id="nav-menu"
      class="hidden md:block"
    >
      <ul class="flex flex-col gap-1 md:flex-row md:gap-6">
        <li>
          ${NavLink({ href: "./", label: "About" })}
        </li>

        ${user ? /*html*/`
          <li>
            ${NavLink({ href: "feed", label: "Feed" })}
          </li>

          <li>
            ${NavLink({ href: "my-posts", label: "My Posts" })}
          </li>

          <li>
            ${NavLink({ href: "new-post", label: "New Post" })}
          </li>
        ` : /*html*/`
          <li>
            ${NavLink({ href: "sign-in", label: "Sign In" })}
          </li>

          <li>
            ${NavLink({ href: "sign-up", label: "Sign Up" })}
          </li>
        `}

        ${user ? /*html*/`
          <li>
            <a
              href="profile"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-hover ring-2 ${isProfileActive
                ? "ring-accent-hover"
                : "ring-transparent hover:ring-accent/40"}"
            >
              ${getInitials(user.username)}
            </a>
          </li>
        ` : ""}
      </ul>
    </nav>
  `;
}
