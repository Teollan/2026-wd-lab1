import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { PostForm } from "@/modules/posts/view/components/PostForm";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { POSTS_ACTION } from "@/modules/posts/data/posts.store";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";
import { BASE, ROUTES } from "@/utility/routes";

export class EditPostScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const isAuthenticated = Boolean(authStore.getState().user);
    const postId = Number(new URLSearchParams(window.location.search).get("id"));
    const post = PostsRepository.findById(postId);

    if (!post) {
      window.location.href = BASE + ROUTES.MY_POSTS;
      return "";
    }

    return /*html*/`
      ${Header({ location: "my-posts", isAuthenticated })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostForm({
          action: POSTS_ACTION.UPDATE,
          title: post.title,
          content: post.content,
          postId: post.id,
        })}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", EditPostScreen);
