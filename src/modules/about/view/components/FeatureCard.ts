import { PureComponent } from "@/modules/core/component";

interface Props {
  Icon: PureComponent;
  title: string;
  body: string;
}

export const FeatureCard: PureComponent<Props> = ({ Icon, title, body }) => {
  return /*html*/ `
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
      <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-hover">
        ${Icon()}
      </div>

      <h3 class="mb-2 font-semibold text-content-primary">
        ${title}
      </h3>

      <p class="text-sm text-content-secondary">
        ${body}
      </p>
    </div>
  `;
};
