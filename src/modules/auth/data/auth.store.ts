import { User } from "@/modules/user/model/User";
import { Store } from "@/modules/core/store";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { ROUTES } from "@/utility/routes";

interface AuthState {
  user: User | null;
}

export const AUTH_ACTION = {
  SIGN_IN: 'auth::sign_in',
  SIGN_UP: 'auth::sign_up',
  LOG_OUT: 'auth::log_out', 
}

export const authStore = new Store<AuthState>({ 
  user: AuthRepository.findAuthUser(),
})

authStore.addAction(
  AUTH_ACTION.SIGN_IN,
  (payload) => {
    try {
      AuthRepository.signIn(payload);

      window.location.href = ROUTES.FEED
    } catch {}
  },
);

authStore.addAction(
  AUTH_ACTION.SIGN_UP,
  (payload) => {
    try {
      AuthRepository.signUp(payload);

      window.location.href = ROUTES.FEED
    } catch {}
  },
);

authStore.addAction(
  AUTH_ACTION.LOG_OUT,
  (_, set) => {
    set({ user: null });

    AuthRepository.logOut();

    window.location.href = ROUTES.HOME
  }
);