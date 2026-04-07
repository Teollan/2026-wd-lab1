import { User } from "@/modules/user/model/User";
import { Storage } from "@/utility/Storage";

export abstract class UserRepository {
  static findById(userId: number) {
    const users = Storage.getObject<User[]>(Storage.keys.USERS) ?? [];

    const targetUser = users.find((user) => user.id === userId);

    return targetUser ?? null;
  }
}