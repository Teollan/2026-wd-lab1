import { User } from "@/modules/user/model/User";
import { Store } from "@/modules/core/store";
import { AuthRepository } from "@/modules/auth/data/auth.repository";

interface AuthState {
  user: User | null;
}

export const authStore = new Store<AuthState>({
  user: AuthRepository.findAuthUser(),
});
