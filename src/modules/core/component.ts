export type PureComponent<T = void> = (props: T) => string; 

export abstract class ReactiveComponent<T = void> {
    protected parent: HTMLElement;

    constructor(parent: HTMLElement, props: T) {
        this.parent = parent;

        this.render(props);
    }

    protected render(props: T) {
        this.parent.innerHTML = this.getHtml(props)
    }

    protected abstract getHtml(props: T): string;
}