import { ReactiveComponent } from "@/modules/core/component";
import { AboutFeatures } from "@/modules/about/view/components/AboutFeatures";
import { AboutHero } from "@/modules/about/view/components/AboutHero";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";

export class AboutScreen extends ReactiveComponent {
  protected getHtml(): string {
    return /*html*/`
      ${Header({ location: "about", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${AboutHero({ isAuthenticated: false })}

        ${AboutFeatures()}
      </main>

      ${Footer()}
    `;
  }
}

new AboutScreen(document.getElementById("root")!);
