import { Publisher, Subscriber } from "@/modules/core/pubsub";

type SetFn<T> = (state: Partial<T>) => void;
type GetFn<T> = () => T;
type StateFactoryFn<T> = (set: SetFn<T>, get: GetFn<T>) => T;
type Store<T> = { getState: GetFn<T>, subscribe: (callback: Subscriber<T>) => void };

export function createStore<T>(stateFactoryFn: StateFactoryFn<T>): Store<T> {
    let state: T;

    const pubsub = new Publisher<T>();

    const setState: SetFn<T> = (newState) => {
        state = { ...state, ...newState };
        pubsub.notify(state);
    }

    const getState: GetFn<T> = () => state;

    state = stateFactoryFn(setState, getState);

    const subscribe = (callback: Subscriber<T>) => {
        pubsub.subscribe(callback);
        callback(state);
    }

    return {
        getState,
        subscribe,
    };
};