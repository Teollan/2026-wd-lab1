import { PureComponent } from "@/modules/core/component";

interface Props {
  href: string;
  label: string;
}

export const NavLink: PureComponent<Props> = ({ href, label }) => {
  const isActive = window.location.pathname.endsWith(href);

  return /*html*/ `
    <a
      href="${href}"
      class="block px-3 py-2 ${
        isActive
          ? "text-accent-hover"
          : "text-content-secondary hover:text-content-primary"
      }"
    >
      ${label}
    </a>
  `;
};
