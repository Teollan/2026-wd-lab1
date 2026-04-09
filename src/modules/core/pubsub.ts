export type Subscriber<T> = (data: T) => void;
export type Unsubscribe = () => void;

export class Publisher<T> {
  private subscribers: Subscriber<T>[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(callback: Subscriber<T>): Unsubscribe {
    this.subscribers.push(callback);

    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== callback);
    };
  }

  protected notify(payload: T) {
    this.subscribers.forEach((callback) => callback(payload));
  }
}
