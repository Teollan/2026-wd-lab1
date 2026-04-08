import { PureComponent } from "@/modules/core/component";
import { NavLink } from "@/modules/UI/NavLink";

interface Props {
  location: string;
  isAuthenticated: boolean;
}

export const DesktopNavBar: PureComponent<Props> = ({ location, isAuthenticated }) => {
  return /*html*/`
    <nav
      id="nav-menu"
      class="hidden md:block"
    >
      <ul class="flex flex-col gap-1 md:flex-row md:gap-6">
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

        ${isAuthenticated ? /*html*/`
          <li>
            <a
              href="profile"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-hover ring-2 ${location === "profile"
                ? "ring-accent-hover"
                : "ring-transparent hover:ring-accent/40"}"
            >
              JD
            </a>
          </li>
        ` : ""}
      </ul>
    </nav>
  `;
}
