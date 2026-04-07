import { ReactiveComponent } from "@/modules/core/component";
import { PostForm } from "@/modules/posts/view/components/PostForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";

export class NewPostScreen extends ReactiveComponent {
  protected getHtml(): string {
    return /*html*/`
      ${Header({ location: "new-post", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostForm()}
      </main>

      ${Footer()}
    `;
  }
}

new NewPostScreen(document.getElementById("root")!);
