import { User, UserDto, mapUserDtoToUser } from "@/modules/user/model/User";
import { Storage } from "@/utility/Storage";

export abstract class UserRepository {
  static findById(userId: number): User | null {
    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    const targetUser = users.find((user) => user.id === userId);

    return targetUser
      ? mapUserDtoToUser(targetUser)
      : null;
  }
}