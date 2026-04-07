import { User } from "@/modules/user/model/User";
import { createStore } from "@/modules/core/store";

interface State {
    user: User | null; 
}

interface Actions {
    setUser: (user: User | null) => void;
}

export const authStore = createStore<State & Actions>((set) => ({
    user: null,

    setUser: (user) => set({
        user
    })
}));