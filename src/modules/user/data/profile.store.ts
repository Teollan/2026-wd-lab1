import { Store } from "@/modules/core/store";
import { AuthRepository } from "@/modules/auth/data/auth.repository";
import { ROUTES } from "@/utility/routes";

export const PROFILE_ACTION = {
  LOG_OUT: "profile::log_out",
};

export const profileStore = new Store({});

profileStore.addAction(
  PROFILE_ACTION.LOG_OUT,
  () => {
    AuthRepository.logOut();

    window.location.href = ROUTES.HOME;
  },
);
