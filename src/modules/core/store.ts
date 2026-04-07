import { Publisher, Subscriber } from "@/modules/core/pubsub";

export type SetFn<T> = (state: Partial<T>) => void;
export type GetFn<T> = () => T;
export type StateFactoryFn<T> = (set: SetFn<T>, get: GetFn<T>) => T;
export type Store<T> = { getState: GetFn<T>, subscribe: (callback: Subscriber<T>) => void };
export type State<T> = { value: T, setValue: SetFn<T> }

export function createStore<T>(initialStateFactoryFn: StateFactoryFn<T>): Store<T> {
    let state: T;

    const pubsub = new Publisher<T>();

    const setState: SetFn<T> = (newState) => {
        state = { ...state, ...newState };
        pubsub.notify(state);
    }

    const getState: GetFn<T> = () => state;

    state = initialStateFactoryFn(setState, getState);

    const subscribe = (callback: Subscriber<T>) => {
        pubsub.subscribe(callback);
        callback(state);
    }

    return {
        getState,
        subscribe,
    };
};

export function createState<T>(initialValue: T) {
    return createStore<State<T>>((set) => ({
        value: initialValue,
        setValue: set,
    }));
}