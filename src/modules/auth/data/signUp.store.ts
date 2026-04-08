import { Store } from "@/modules/core/store";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { ROUTES } from "@/utility/routes";

interface SignUpState {
  error: string | null;
}

export const SIGN_UP_ACTION = {
  SUBMIT: "sign_up::submit",
};

export const signUpStore = new Store<SignUpState>({
  error: null,
});

signUpStore.addAction(
  SIGN_UP_ACTION.SUBMIT,
  (payload, set) => {
    try {
      AuthRepository.signUp(payload);

      window.location.href = ROUTES.FEED;
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
);
