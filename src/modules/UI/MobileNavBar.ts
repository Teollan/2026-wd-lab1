import { PureComponent } from "@/modules/core/component";
import { User } from "@/modules/user/model/User";
import { Avatar } from "@/modules/UI/Avatar";
import { NavLink } from "@/modules/UI/NavLink";
import { getInitials } from "@/utility/string";

interface Props {
  user: User | null;
}

export const MobileNavBar: PureComponent<Props> = ({ user }) => {
  const isProfileActive = window.location.pathname.endsWith("profile");

  return /*html*/`
    <nav
      id="mobile-menu"
      class="absolute top-full left-0 w-full border-y border-stroke-primary bg-surface-primary md:hidden"
    >
      <ul class="flex flex-col gap-1 px-4 py-3">
        ${user ? /*html*/`
          <li>
            <a
              href="profile"
              class="flex items-center gap-3 px-3 py-2 ${isProfileActive
                ? "text-accent-hover"
                : "text-content-secondary hover:text-content-primary"}"
            >
              ${Avatar({ initials: getInitials(user.username) })}

              <span class="font-medium text-lg">${user.username}</span>
            </a>
          </li>
        ` : ""}

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
      </ul>
    </nav>
  `;
}
