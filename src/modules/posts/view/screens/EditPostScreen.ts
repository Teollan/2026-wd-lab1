import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { PostForm } from "@/modules/posts/view/components/PostForm";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { editPostStore, EDIT_POST_ACTION } from "@/modules/posts/data/editPost.store";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";
import { ROUTES } from "@/utility/routes";

export class EditPostScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(editPostStore);
    this.useStore(authStore);
  }

  protected getHtml(): string {
    const { user } = authStore.getState();
    const postId = Number(new URLSearchParams(window.location.search).get("id"));
    const post = PostsRepository.findById(postId);

    if (!post) {
      window.location.href = ROUTES.MY_POSTS;
      return "";
    }

    return /*html*/`
      ${Header({ user })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostForm({
          action: EDIT_POST_ACTION.UPDATE,
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
