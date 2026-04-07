import { ReactiveComponent } from "@/modules/core/component";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";

export class FeedScreen extends ReactiveComponent {
  protected getHtml(): string {
    const posts = PostsRepository.getFeed();

    return /*html*/`
      ${Header({ location: "feed", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({ title: "Feed", posts })}
      </main>

      ${Footer()}
    `;
  }
}

new FeedScreen(document.getElementById("root")!);
