import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";
import { feedStore, FEED_ACTION } from "@/modules/posts/data/feed.store";
import { authStore } from "@/modules/auth/data/auth.store";

export class FeedScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    this.useStore(feedStore);
    this.useStore(authStore);
  }

  protected getHtml(): string {
    const { posts } = feedStore.getState();
    const { user } = authStore.getState();

    return /*html*/`
      ${Header({ user })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({
          title: "Feed",
          posts,
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
