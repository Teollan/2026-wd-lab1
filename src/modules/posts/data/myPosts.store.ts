import { Store } from "@/modules/core/store";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { Post } from "@/modules/posts/model/Post";

interface MyPostsState {
  posts: Post[];
}

export const myPostsStore = new Store<MyPostsState>({
  posts: PostsRepository.getMyPosts(),
});