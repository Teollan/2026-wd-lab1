export type Subscriber<T> = (data: T) => void;

export class Publisher<T> {
    private subscribers: Subscriber<T>[];

    constructor() {
        this.subscribers = [];
    }

    subscribe(callback: Subscriber<T>) {
        this.subscribers.push(callback);
    }

    protected notify(payload: T) {
        this.subscribers.forEach((callback) => callback(payload));
    }
}