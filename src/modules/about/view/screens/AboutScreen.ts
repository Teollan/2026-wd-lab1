import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { AboutFeatures } from "@/modules/about/view/components/AboutFeatures";
import { AboutHero } from "@/modules/about/view/components/AboutHero";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { authStore } from "@/modules/auth/data/auth.store";

export class AboutScreen extends ReactiveComponent {
  protected onComponentDidMount() {
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const { user } = authStore.getState();
    const isAuthenticated = Boolean(user);

    return /*html*/`
      ${Header({ user })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${AboutHero({ isAuthenticated })}

        ${AboutFeatures()}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", AboutScreen);
