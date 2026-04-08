import { User, UserDto, mapUserDtoToUser } from "@/modules/user/model/User";
import { Storage } from "@/utility/Storage"

interface SignInInput {
  email: string,
  password: string,
}

interface SignUpInput {
  email: string;
  username: string;
  password: string;
  dateOfBirth: Date;
  gender: string;
}

export abstract class AuthRepository {
  static findAuthUser(): User | null {
    const authUserId = parseInt(Storage.getItem(Storage.keys.AUTH_USER_ID) ?? '0');

    if (!authUserId) {
      return null;
    }

    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS);
    const authUserDto = users?.find((user) => (user.id === authUserId));

    return authUserDto
      ? mapUserDtoToUser(authUserDto)
      : null;
  }

  static getAuthUser(): User {
    const user = AuthRepository.findAuthUser();

    if (!user) {
      throw new Error('No authenticated user found');
    }

    return user;
  }

  static signIn(input: SignInInput): User {
    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS);

    const authUserDto = users?.find((user) => (
      user.email === input.email && user.password === input.password
    ));

    if (!authUserDto) {
      throw new Error('Incorrect email or password');
    }

    Storage.setItem(Storage.keys.AUTH_USER_ID, authUserDto.id.toString());

    return mapUserDtoToUser(authUserDto);
  }

  static signUp(input: SignUpInput): User {
    const newUser: User = {
      id: Date.now(),
      ...input,
      createdAt: new Date(),
    }

    const users = Storage.getObject<UserDto[]>(Storage.keys.USERS) ?? [];

    const existingUser = users?.find((user) => user.email === input.email) ?? null;

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    Storage.setItem(Storage.keys.USERS, JSON.stringify([...users, newUser]));
    Storage.setItem(Storage.keys.AUTH_USER_ID, newUser.id.toString());

    return newUser;
  }

  static logOut(): void {
    Storage.removeItem(Storage.keys.AUTH_USER_ID);
  }
}
