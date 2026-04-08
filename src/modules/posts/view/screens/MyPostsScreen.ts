import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";
import { myPostsStore, MY_POSTS_ACTION } from "@/modules/posts/data/myPosts.store";
import { authStore } from "@/modules/auth/data/auth.store";

export class MyPostsScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(myPostsStore);
    this.useStore(authStore);
  }

  protected getHtml(): string {
    const { posts } = myPostsStore.getState();
    const { user } = authStore.getState();

    return /*html*/`
      ${Header({ user })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({
          title: "My Posts",
          posts,
          actions: {
            createComment: MY_POSTS_ACTION.CREATE_COMMENT,
            editPost: MY_POSTS_ACTION.EDIT_POST,
            deletePost: MY_POSTS_ACTION.DELETE_POST,
          },
        })}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", MyPostsScreen);
