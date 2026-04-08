import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";
import { FeedEmptyState } from "@/modules/posts/view/components/FeedEmptyState";
import { feedStore, FEED_ACTION } from "@/modules/posts/data/feed.store";
import { authStore } from "@/modules/auth/data/auth.store";
import { mobileNavMenuStore } from "@/modules/UI/mobileNavMenu.store";

export class FeedScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(feedStore);
    this.useStore(authStore);
    this.useStore(mobileNavMenuStore);
  }

  protected getHtml(): string {
    const { posts } = feedStore.getState();

    return /*html*/`
      ${Header()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({
          title: "Feed",
          posts,
          EmptyState: FeedEmptyState,
          actions: {
            createComment: FEED_ACTION.CREATE_COMMENT,
          },
        })}
      </main>

      ${Footer()}
    `;
  }
}

createScreen("root", FeedScreen);
