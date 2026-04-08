import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { SignUpForm } from "@/modules/auth/view/components/SignUpForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";
import { signUpStore } from "@/modules/auth/data/signUp.store";
import { mobileNavMenuStore } from "@/modules/UI/mobileNavMenu.store";

export class SignUpScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(signUpStore);
    this.useStore(authStore);
    this.useStore(mobileNavMenuStore);
  }

  protected getHtml(): string {
    return /*html*/ `
      ${Header()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${SignUpForm()}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", SignUpScreen);
