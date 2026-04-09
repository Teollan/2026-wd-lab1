import { Action } from "@/modules/core/action";
import { dispatcher } from "@/modules/core/dispatcher";
import { Publisher, Subscriber } from "@/modules/core/pubsub";

export type SetFn<T> = (state: Partial<T>) => void;
export type GetFn<T> = () => T;
export type ActionHandler<T> = (
  payload: any,
  set: SetFn<T>,
  get: GetFn<T>,
) => void;

export class Store<T> extends Publisher<T> {
  private state: T;
  private actionHandlers = new Map<string, ActionHandler<T>>();

  constructor(initialState: T) {
    super();

    this.state = initialState;

    dispatcher.subscribe((action) => this.handleAction(action));
  }

  public getState() {
    return this.state;
  }

  public addAction(type: string, handler: ActionHandler<T>) {
    this.actionHandlers.set(type, handler);
  }

  private handleAction({ type, payload }: Action) {
    const handlerFn = this.actionHandlers.get(type);

    if (!handlerFn) {
      return;
    }

    handlerFn(
      payload,
      (state) => this.setState(state),
      () => this.getState(),
    );
  }

  private setState(newState: Partial<T>) {
    this.state = { ...this.state, ...newState };

    this.notify(this.state);
  }
}
