import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";
import { feedStore } from "@/modules/posts/data/feed.store";
import { authStore } from "@/modules/auth/data/auth.store";

export class FeedScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    feedStore.subscribe(() => this.render());
    authStore.subscribe(() => this.render());
  }

  protected getHtml(): string {
    const { posts } = feedStore.getState();
    const isAuthenticated = Boolean(authStore.getState().user);

    return /*html*/`
      ${Header({ location: "feed", isAuthenticated })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({ title: "Feed", posts })}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", FeedScreen);
