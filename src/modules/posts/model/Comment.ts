import { User } from "@/modules/user/model/User";

export interface Comment {
  id: number;
  author: User;
  content: string;
  createdAt: Date;
}