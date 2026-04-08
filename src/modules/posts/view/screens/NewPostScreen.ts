import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { PostForm } from "@/modules/posts/view/components/PostForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";
import "@/modules/posts/data/posts.store";

export class NewPostScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const isAuthenticated = Boolean(authStore.getState().user);

    return /*html*/`
      ${Header({ location: "new-post", isAuthenticated })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostForm()}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", NewPostScreen);
