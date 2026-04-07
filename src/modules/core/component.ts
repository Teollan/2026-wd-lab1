export abstract class Component<T = never> {
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