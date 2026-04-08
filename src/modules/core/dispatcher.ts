import { Action } from "@/modules/core/action";
import { Publisher } from "@/modules/core/pubsub";

export class Dispatcher extends Publisher<Action> {
  dispatch(action: Action) {
    this.notify(action);
  }
}

export const dispatcher = new Dispatcher();
