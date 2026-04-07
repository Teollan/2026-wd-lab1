import { User } from "@/modules/user/model/User";
import { Comment } from "@/modules/posts/model/Comment";

export interface Post {
  id: number;
  author: User;
  title: string;
  content: string;
  createdAt: Date;
  comments: Comment[];
}