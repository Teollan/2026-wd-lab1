import { PureComponent } from "@/modules/core/component";

export const Logo: PureComponent = () => {
  return /*html*/`
    <a
      href="./"
      class="flex items-center gap-2"
    >
      <img
        src="/images/logo.svg"
        alt="BlogSpace logo"
        class="h-8 w-8"
      />
      <span class="text-lg font-semibold text-content-primary">BlogSpace</span>
    </a>
  `;
}
