import { Store } from "@/modules/core/store";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { ROUTES } from "@/utility/routes";

interface SignInState {
  error: string | null;
}

export const SIGN_IN_ACTION = {
  SUBMIT: "sign_in::submit",
};

export const signInStore = new Store<SignInState>({
  error: null,
});

signInStore.addAction(SIGN_IN_ACTION.SUBMIT, (payload, set) => {
  try {
    AuthRepository.signIn(payload);

    window.location.href = ROUTES.FEED;
  } catch (error) {
    set({ error: (error as Error).message });
  }
});
