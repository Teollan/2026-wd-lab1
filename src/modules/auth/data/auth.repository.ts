import { User } from "@/modules/user/model/User";
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
  static signIn(input: SignInInput): User {
    const users = Storage.getObject<User[]>(Storage.keys.USERS);

    const authUser = users?.find((user) => (
      user.email === input.email && user.password === input.password
    ));

    if (!authUser) {
      throw new Error('Incorrect email or password');
    }

    Storage.setItem(Storage.keys.AUTH_USER_ID, authUser.id.toString());

    return authUser;
  }

  static signUp(input: SignUpInput): User {
    const newUser: User = {
      id: Date.now(),
      ...input,
    }

    const users = Storage.getObject<User[]>(Storage.keys.USERS) ?? [];

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

  static getAuthUser(): User | null {
    const authUserId = parseInt(Storage.getItem(Storage.keys.AUTH_USER_ID) ?? '0');

    if (!authUserId) {
      return null;
    }

    const users = Storage.getObject<User[]>(Storage.keys.USERS);

    const authUser = users?.find((user) => (user.id === authUserId));

    if (!authUser) {
      throw new Error('User does not exist');
    }

    return authUser;
  }
}