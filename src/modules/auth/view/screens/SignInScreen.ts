import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { SignInForm } from "@/modules/auth/view/components/SignInForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";

export class SignInScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const isAuthenticated = Boolean(authStore.getState().user);

    return /*html*/`
      ${Header({ location: "sign-in", isAuthenticated })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${SignInForm()}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", SignInScreen);
