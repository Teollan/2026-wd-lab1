import { PureComponent } from "@/modules/core/component";
import { Avatar } from "@/modules/UI/Avatar";
import { NavLink } from "@/modules/UI/NavLink";

interface Props {
  location: string;
  isAuthenticated: boolean;
}

export const MobileNavBar: PureComponent<Props> = ({ location, isAuthenticated }) => {
  return /*html*/`
    <nav
      id="mobile-menu"
      class="absolute top-full left-0 w-full border-y border-stroke-primary bg-surface-primary md:hidden"
    >
      <ul class="flex flex-col gap-1 px-4 py-3">
        ${isAuthenticated ? /*html*/`
          <li>
            <a
              href="profile"
              class="flex items-center gap-3 px-3 py-2 ${location === "profile"
                ? "text-accent-hover"
                : "text-content-secondary hover:text-content-primary"}"
            >
              ${Avatar({ initials: "JD" })}

              <span class="font-medium text-lg">John Doe</span>
            </a>
          </li>
        ` : ""}

        <li>
          ${NavLink({ href: "./", label: "About", isActive: location === "about" })}
        </li>

        ${isAuthenticated ? /*html*/`
          <li>
            ${NavLink({ href: "feed", label: "Feed", isActive: location === "feed" })}
          </li>

          <li>
            ${NavLink({ href: "my-posts", label: "My Posts", isActive: location === "my-posts" })}
          </li>

          <li>
            ${NavLink({ href: "new-post", label: "New Post", isActive: location === "new-post" })}
          </li>
        ` : /*html*/`
          <li>
            ${NavLink({ href: "sign-in", label: "Sign In", isActive: location === "sign-in" })}
          </li>

          <li>
            ${NavLink({ href: "sign-up", label: "Sign Up", isActive: location === "sign-up" })}
          </li>
        `}
      </ul>
    </nav>
  `;
}
