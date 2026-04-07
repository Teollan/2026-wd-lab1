import { ReactiveComponent } from "@/modules/core/component";
import { SignUpForm } from "@/modules/auth/view/components/SignUpForm";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";

export class SignUpScreen extends ReactiveComponent {
  protected getHtml(): string {
    return /*html*/`
      ${Header({ location: "sign-up", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${SignUpForm()}
      </main>

      ${Footer()}
    `;
  }
}

new SignUpScreen(document.getElementById("root")!);
