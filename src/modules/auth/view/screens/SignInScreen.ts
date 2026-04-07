import { ReactiveComponent } from "@/modules/core/component";
import { SignInForm } from "@/modules/auth/view/components/SignInForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";

export class SignInScreen extends ReactiveComponent {
  protected getHtml(): string {
    return /*html*/`
      ${Header({ location: "sign-in", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${SignInForm()}
      </main>

      ${Footer()}
    `;
  }
}

new SignInScreen(document.getElementById("root")!);
