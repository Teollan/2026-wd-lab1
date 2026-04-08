import { Store } from "@/modules/core/store";

export type PureComponent<T = void> = (props: T) => string;

export abstract class ReactiveComponent {
  protected parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;

    this.onComponentDidMount();
    this.render();
  }

  protected onComponentDidMount() {}

  protected useStore(store: Store<any>) {
    store.subscribe(() => this.render());
  }

  protected render() {
    this.parent.innerHTML = this.getHtml();
  }

  protected abstract getHtml(): string;
}

export type ReactiveComponentConstructor = new (
  parent: HTMLElement,
) => ReactiveComponent;
