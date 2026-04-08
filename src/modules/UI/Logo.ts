import { PureComponent } from "@/modules/core/component";
import { BASE, ROUTES } from "@/utility/routes";

export const Logo: PureComponent = () => {
  return /*html*/ `
    <a
      href="${ROUTES.HOME}"
      class="flex items-center gap-2"
    >
      <img
        src="${BASE}/images/logo.svg"
        alt="BlogSpace logo"
        class="h-8 w-8"
      />
      <span class="text-lg font-semibold text-content-primary">BlogSpace</span>
    </a>
  `;
};
