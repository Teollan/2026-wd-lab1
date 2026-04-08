import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { SignInForm } from "@/modules/auth/view/components/SignInForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";

export class SignInScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(authStore);
  }

  protected getHtml(): string {
    const { user } = authStore.getState();

    return /*html*/`
      ${Header({ user })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${SignInForm()}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", SignInScreen);
