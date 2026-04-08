import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";
import { myPostsStore } from "@/modules/posts/data/myPosts.store";
import { authStore } from "@/modules/auth/data/auth.store";
import "@/modules/comments/data/comments.store";
import "@/modules/posts/data/posts.store"

export class MyPostsScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    myPostsStore.subscribe(() => this.render());
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const { posts } = myPostsStore.getState();

    const { user } = authStore.getState();
    const isAuthenticated = Boolean(user);

    return /*html*/`
      ${Header({
        location: "my-posts",
        isAuthenticated,
      })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({
          withActions: true,
          title: "My Posts",
          posts,
        })}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", MyPostsScreen);
